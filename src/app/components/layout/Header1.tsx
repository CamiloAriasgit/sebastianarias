// components/layout/Header.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [supportsLens, setSupportsLens] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const filterImgRef = useRef<SVGFEImageElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Detecta soporte real de backdrop-filter + SVG filter (Chrome/Edge sí, Safari/Firefox no)
  useEffect(() => {
    const probe = document.createElement('div')
    probe.style.backdropFilter = 'url(#lens-test)'
    setSupportsLens(probe.style.backdropFilter !== '')
  }, [])

  // Genera el displacement map dinámicamente según el tamaño real del nav,
  // así la distorsión respeta proporciones aunque cambie el ancho del contenedor.
  useEffect(() => {
    if (!supportsLens || !navRef.current || !filterImgRef.current) return

    const buildMap = () => {
      const { width, height } = navRef.current!.getBoundingClientRect()
      const cx = width / 2
      const cy = height / 2

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
          <defs>
            <radialGradient id="rg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#808080"/>
              <stop offset="55%" stop-color="#808080"/>
              <stop offset="100%" stop-color="#a0a0ff"/>
            </radialGradient>
            <radialGradient id="gg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#808080"/>
              <stop offset="55%" stop-color="#808080"/>
              <stop offset="100%" stop-color="#ffa0a0"/>
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="#808080"/>
          <ellipse cx="${cx}" cy="${cy}" rx="${cx}" ry="${cy}" fill="url(#rg)"/>
          <ellipse cx="${cx}" cy="${cy}" rx="${cx}" ry="${cy}" fill="url(#gg)" opacity="0.6"/>
        </svg>
      `
      const encoded = `data:image/svg+xml;base64,${btoa(svg)}`
      filterImgRef.current!.setAttribute('href', encoded)
    }

    buildMap()
    window.addEventListener('resize', buildMap)
    return () => window.removeEventListener('resize', buildMap)
  }, [supportsLens, scrolled])

  return (
    <header className="fixed top-0 inset-x-0 z-50 p-4 transition-all duration-300">
      {/* Filtro SVG: invisible, solo define la distorsión */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="lens-distort" x="-20%" y="-20%" width="140%" height="140%">
            <feImage ref={filterImgRef} result="lensMap" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="lensMap"
              scale={scrolled ? 28 : 0}
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
                  backdropFilter: 'url(#lens-distort) blur(0.5px) brightness(1.05)',
                  WebkitBackdropFilter: 'blur(12px)', // Safari ignora la url(), aplica blur normal
                  backgroundColor: 'rgba(255,255,255,0.55)',
                  boxShadow:
                    'inset 0 0 0 0.5px rgba(255,255,255,0.4), 0 8px 24px rgba(0,0,0,0.12)',
                }
              : {
                  // Fallback: glassmorfismo clásico para Safari/Firefox
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