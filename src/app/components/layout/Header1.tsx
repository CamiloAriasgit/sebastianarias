'use client'

import { useEffect, useRef, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

/**
 * Genera un displacement map correcto para una forma pill.
 *
 * Para cada píxel dentro de la "zona de borde" (grosor = borderZone),
 * calculamos la dirección normal exacta al borde más cercano.
 *
 * Pill = rect con r = h/2.
 * - Lado superior/inferior: normal es puro Y (0, ±1)
 * - Semicírculo izquierdo (cx=r, cy=r): normal es radial desde (cx, cy)
 * - Semicírculo derecho (cx=w-r, cy=r): normal es radial desde (cx, cy)
 *
 * Codificación feDisplacementMap:
 *   canal R → desplazamiento X: 0=máx izq, 128=neutro, 255=máx der
 *   canal G → desplazamiento Y: 0=máx arriba, 128=neutro, 255=máx abajo
 */
function buildPillDisplacementMap(
  w: number,
  h: number,
  borderZone: number = 32, // px de zona afectada desde el borde hacia adentro
  strength: number = 1.0   // 0-1, cuánto del rango 0-255 se usa
): string {
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')!
  const data = ctx.createImageData(w, h)

  const r = h / 2 // radio del semicírculo (pill)
  const lcx = r        // centro X semicírculo izquierdo
  const rcx = w - r    // centro X semicírculo derecho
  const cy = r         // centro Y de ambos semicírculos

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      // Encontrar el punto más cercano en el contorno de la píldora
      // y la normal en ese punto

      let nx = 0, ny = 0 // normal hacia afuera (sin normalizar)

      if (x < lcx) {
        // Zona semicírculo izquierdo
        nx = x - lcx
        ny = y - cy
      } else if (x > rcx) {
        // Zona semicírculo derecho
        nx = x - rcx
        ny = y - cy
      } else {
        // Zona rectangular central
        // La normal depende de si estamos más cerca del borde top o bottom
        const distTop = y
        const distBottom = h - 1 - y
        if (distTop < distBottom) {
          nx = 0; ny = -1
        } else {
          nx = 0; ny = 1
        }
      }

      // Normalizar la normal
      const len = Math.sqrt(nx * nx + ny * ny)
      if (len > 0) { nx /= len; ny /= len }

      // Calcular distancia al borde más cercano
      let distToBorder: number

      if (x < lcx) {
        const dx = x - lcx, dy = y - cy
        distToBorder = Math.abs(Math.sqrt(dx * dx + dy * dy) - r)
      } else if (x > rcx) {
        const dx = x - rcx, dy = y - cy
        distToBorder = Math.abs(Math.sqrt(dx * dx + dy * dy) - r)
      } else {
        distToBorder = Math.min(y, h - 1 - y)
      }

      const idx = (y * w + x) * 4

      if (distToBorder < borderZone) {
        // Dentro de la zona de borde: aplicamos desplazamiento según la normal
        // Fade suave: más intenso cerca del borde, neutro al alejarse hacia el centro
        const t = 1 - distToBorder / borderZone
        const smooth = t * t * (3 - 2 * t) // smoothstep

        const s = strength * smooth
        // normal "hacia afuera" = el borde empuja el contenido de atrás hacia afuera
        // pero visualmente queremos que el borde "dobla" el contenido hacia adentro
        // (como una lupa convexa: los bordes refractan hacia el centro)
        // → invertimos la normal para efecto convexo
        const dispX = -nx * s
        const dispY = -ny * s

        data.data[idx]     = Math.round(128 + dispX * 127) // R → X
        data.data[idx + 1] = Math.round(128 + dispY * 127) // G → Y
        data.data[idx + 2] = 128                           // B → ignorado
        data.data[idx + 3] = 255
      } else {
        // Zona interior neutra: sin desplazamiento
        data.data[idx]     = 128
        data.data[idx + 1] = 128
        data.data[idx + 2] = 128
        data.data[idx + 3] = 255
      }
    }
  }

  ctx.putImageData(data, 0, 0)
  return canvas.toDataURL('image/png')
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [supportsLens, setSupportsLens] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const mapImgRef = useRef<SVGFEImageElement>(null)
  const dispRef = useRef<SVGFEDisplacementMapElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const probe = document.createElement('div')
    probe.style.backdropFilter = 'url(#lens-test)'
    setSupportsLens(probe.style.backdropFilter !== '')
  }, [])

  useEffect(() => {
    if (!supportsLens || !navRef.current || !mapImgRef.current) return

    const buildMap = () => {
      const { width, height } = navRef.current!.getBoundingClientRect()
      const dataUrl = buildPillDisplacementMap(
        Math.round(width),
        Math.round(height),
        32,  // borderZone: zona de influencia del borde en px
        0.9  // strength: 0–1
      )
      mapImgRef.current!.setAttribute('href', dataUrl)
    }

    buildMap()
    const ro = new ResizeObserver(buildMap)
    ro.observe(navRef.current)
    return () => ro.disconnect()
  }, [supportsLens, scrolled])

  return (
    <header className="fixed top-0 inset-x-0 z-50 p-4 transition-all duration-300">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="lens-distort" x="-5%" y="-5%" width="110%" height="110%">
            <feImage ref={mapImgRef} result="lensMap" />
            <feDisplacementMap
              ref={dispRef}
              in="SourceGraphic"
              in2="lensMap"
              scale={scrolled ? 55 : 0}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={navRef}
        className={`container-site mx-auto transition-all duration-300 rounded-full ${
          scrolled ? 'px-6 shadow-lg' : 'px-4'
        }`}
        style={
          scrolled
            ? supportsLens
              ? {
                  backdropFilter: 'url(#lens-distort) blur(0.5px) brightness(1.06)',
                  backgroundColor: 'rgba(255,255,255,0.38)',
                  boxShadow:
                    'inset 0 0 0 0.5px rgba(255,255,255,0.55), 0 8px 24px rgba(0,0,0,0.11)',
                }
              : {
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(0,0,0,0.05)',
                }
            : undefined
        }
      >
        <div className="flex items-center justify-between h-14">
          <span className="text-sm font-medium tracking-tight text-black transition-colors duration-300">
            Sebastian Arias
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black hover:text-[var(--color-text-primary)] transition-colors duration-300 no-underline"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  )
}