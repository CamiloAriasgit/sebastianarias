// components/layout/Header.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const BORDER_RADIUS = 9999 // px grande = pill, ajusta si usas rounded-2xl etc.

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [supportsLens, setSupportsLens] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const mapImgRef = useRef<SVGFEImageElement>(null)

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
      const r = Math.min(BORDER_RADIUS, height / 2) // clamp al pill real
      const stroke = 28 // ancho de la "zona de borde" que se distorsiona
      const blur = 8 // difuminado del mapa: más alto = transición más suave

      // La idea central: dibujamos el contorno del rounded-rect como un STROKE
      // (no fill), recortado a la forma. Dentro de ese stroke, el lado
      // izquierdo/derecho codifica desplazamiento X, arriba/abajo codifica Y.
      // El centro queda en gris puro (128,128,128) = sin desplazamiento.
      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
          <defs>
            <clipPath id="shape">
              <rect x="0" y="0" width="${width}" height="${height}" rx="${r}" ry="${r}"/>
            </clipPath>
            <filter id="blur"><feGaussianBlur stdDeviation="${blur}"/></filter>
          </defs>
          <rect width="100%" height="100%" fill="#808080"/>
          <g clip-path="url(#shape)" filter="url(#blur)">
            <rect x="${-stroke}" y="0" width="${stroke}" height="${height}" fill="#404080"/>
            <rect x="${width}" y="0" width="${stroke}" height="${height}" fill="#c0c0e0"/>
            <rect x="0" y="${-stroke}" width="${width}" height="${stroke}" fill="#804040" opacity="0.7"/>
            <rect x="0" y="${height}" width="${width}" height="${stroke}" fill="#a0c0a0" opacity="0.7"/>
          </g>
        </svg>
      `
      const encoded = `data:image/svg+xml;base64,${btoa(svg)}`
      mapImgRef.current!.setAttribute('href', encoded)
    }

    buildMap()
    window.addEventListener('resize', buildMap)
    return () => window.removeEventListener('resize', buildMap)
  }, [supportsLens, scrolled])

  return (
    <header className="fixed top-0 inset-x-0 z-50 p-4 transition-all duration-300">
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="lens-distort" x="-30%" y="-30%" width="160%" height="160%">
            <feImage ref={mapImgRef} result="lensMap" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="lensMap"
              scale={scrolled ? 50 : 0}
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
                  backdropFilter: 'url(#lens-distort) blur(0.4px) brightness(1.05)',
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  boxShadow:
                    'inset 0 0 0 0.5px rgba(255,255,255,0.5), 0 8px 24px rgba(0,0,0,0.12)',
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