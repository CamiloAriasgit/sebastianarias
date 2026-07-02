'use client'

import { useEffect, useState, useId } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const filterId = useId().replace(/:/g, '') // Evita caracteres inválidos en selectores SVG

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Parámetros dinámicos para el look Apple Liquid Glass adaptado a un Header plano
  const strength = scrolled ? 40 : 0
  const chromaticAberration = scrolled ? 4 : 0

  /**
   * Generamos el mapa de desplazamiento vectorial puro (SVG) optimizado para píldoras.
   * Usamos gradientes lineales que empujan los canales R y G simulando los bordes redondeados.
   */
  const headerHeight = 56;
  const pillRadius = 28;

  const svgFilterDataUri =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <filter id="${filterId}" color-interpolation-filters="sRGB" x="-10%" y="-10%" width="120%" height="120%">
          
          <feImage x="0" y="0" width="100%" height="100%" href="data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="${headerHeight}" preserveAspectRatio="none">
              <style>
                .mix { mix-blend-mode: screen; }
                .edge-top { fill: url(%23Y-top); }
                .edge-bottom { fill: url(%23Y-bottom); }
                .edge-left { fill: url(%23X-left); }
                .edge-right { fill: url(%23X-right); }
              </style>
              <defs>
                <linearGradient id="Y-top" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="%230F0" /><stop offset="100%" stop-color="%23000" /></linearGradient>
                <linearGradient id="Y-bottom" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="%23000" /><stop offset="100%" stop-color="%230F0" /></linearGradient>
                <linearGradient id="X-left" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="%23F00" /><stop offset="100%" stop-color="%23000" /></linearGradient>
                <linearGradient id="X-right" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="%23000" /><stop offset="100%" stop-color="%23F00" /></linearGradient>
              </defs>
              
              <rect width="100%" height="100%" fill="%23808080" />
              
              <g filter="blur(4px)">
                <rect width="100%" height="100%" fill="%23000080" />
                
                <rect width="100%" height="${pillRadius}px" class="edge-top mix" />
                <rect y="${headerHeight - pillRadius}px" width="100%" height="${pillRadius}px" class="edge-bottom mix" />
                <rect width="${pillRadius}px" height="100%" class="edge-left mix" />
                <rect x="calc(100% - ${pillRadius}px)" width="${pillRadius}px" height="100%" class="edge-right mix" />
                
                <rect x="4px" y="4px" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="%23808080" rx="${pillRadius}px" ry="${pillRadius}px" filter="blur(4px)" />
              </g>
            </svg>
          `)}" result="displacementMap" />

          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration * 2}" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="displacedR" />

          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength + chromaticAberration}" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="displacedG" />

          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="${strength}" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="displacedB" />

          <feBlend in="displacedR" in2="displacedG" mode="screen" />
          <feBlend in2="displacedB" mode="screen" />
        </filter>
      </defs>
    </svg>`) + `#${filterId}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 p-4 transition-all duration-500">
      <div
        className={`container-site mx-auto transition-all duration-500 rounded-full ${scrolled ? 'px-6 shadow-xl' : 'px-4'
          }`}
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.35)' : 'transparent',
          backdropFilter: scrolled
            ? `url("${svgFilterDataUri}") blur(4px) brightness(1.08) saturate(1.4)`
            : 'none',
          WebkitBackdropFilter: scrolled
            ? `url("${svgFilterDataUri}") blur(4px) brightness(1.08) saturate(1.4)`
            : 'none',
          boxShadow: scrolled
            ? 'inset 0 0 12px 0px rgba(255, 255, 255, 0.45), 0 12px 32px rgba(0, 0, 0, 0.12)'
            : 'none',
          border: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
        }}
      >
        <div className="flex items-center justify-between h-14">
          <span className="text-sm tracking-tight text-neutral-900 drop-shadow-[0_1px_12px_rgba(255,255,255,0.6)]">
            Sebastian Arias
          </span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-900 hover:opacity-80 transition-opacity duration-300 no-underline  px-3 py-1.5"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  )
}