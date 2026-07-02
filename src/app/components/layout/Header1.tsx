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
  const strength = scrolled ? 60 : 0 // Incrementado ligeramente para notar más el estiramiento
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
        <filter id="${filterId}" color-interpolation-filters="sRGB" x="-20%" y="-40%" width="140%" height="180%">
          
          <feImage x="0" y="0" width="100%" height="100%" href="data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <style>
                .mix { mix-blend-mode: screen; }
                .edge-top { fill: url(%23Y-top); }
                .edge-bottom { fill: url(%23Y-bottom); }
                .edge-left { fill: url(%23X-left); }
                .edge-right { fill: url(%23X-right); }
              </style>
              <defs>
                {/* Graditentes ajustados con máxima pureza de color para forzar el estiramiento vertical */}
                <linearGradient id="Y-top" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="%230F0" /><stop offset="100%" stop-color="%23000" /></linearGradient>
                <linearGradient id="Y-bottom" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="%23000" /><stop offset="100%" stop-color="%230F0" /></linearGradient>
                <linearGradient id="X-left" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="%23F00" /><stop offset="100%" stop-color="%23000" /></linearGradient>
                <linearGradient id="X-right" x1="0" x2="1" y1="0" y2="0"><stop offset="0%" stop-color="%23000" /><stop offset="100%" stop-color="%23F00" /></linearGradient>
              </defs>
              
              <rect width="100%" height="100%" fill="%23808080" />
              
              <g filter="blur(5px)">
                <rect width="100%" height="100%" fill="%23000080" />
                
                {/* Mapeo estirado proporcionalmente al 100% de la caja disponible */}
                <rect width="100%" height="50%" class="edge-top mix" />
                <rect y="50%" width="100%" height="50%" class="edge-bottom mix" />
                <rect width="15%" height="100%" class="edge-left mix" />
                <rect x="85%" width="15%" height="100%" class="edge-right mix" />
                
                <rect x="5%" y="5%" width="90%" height="90%" fill="%23808080" rx="10" ry="10" filter="blur(2px)" />
              </g>
            </svg>
          `)}" result="displacementMap" />

          {/* Escala negativa combinada con canales limpios para alargar verticalmente hacia el exterior */}
          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="-${strength + chromaticAberration * 2}" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="displacedR" />

          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="-${strength + chromaticAberration}" xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="displacedG" />

          <feDisplacementMap in="SourceGraphic" in2="displacementMap" scale="-${strength}" xChannelSelector="R" yChannelSelector="G" />
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