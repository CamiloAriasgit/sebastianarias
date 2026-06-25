// components/sections/CTAFinal.tsx
'use client'

import { useEffect, useRef } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

export default function CTAFinal() {
  const headRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        })
      },
      { threshold: 0.15 }
    )

      ;[headRef.current, ctaRef.current].forEach((el, i) => {
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms`
        observer.observe(el)
      })

    return () => observer.disconnect()
  }, [])

 return (
  <section
    className="bg-neutral-900 relative overflow-hidden"
    style={{ paddingBlock: 'clamp(6rem, 15vw, 14rem)' }} 
  >
      {/* Estilos para la animación de la aurora (puedes mover esto a tu global.css) */}
      <style jsx global>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(-15%, 10%) scaleX(1.3) scaleY(0.8) skewX(-10deg); opacity: 0.4; }
          33% { transform: translate(10%, -5%) scaleX(0.9) scaleY(1.1) skewX(15deg); opacity: 0.7; }
          66% { transform: translate(-5%, 15%) scaleX(1.4) scaleY(0.7) skewX(-5deg); opacity: 0.5; }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(15%, -5%) scaleX(0.8) scaleY(1.2) skewX(20deg); opacity: 0.3; }
          40% { transform: translate(-25%, 10%) scaleX(1.3) scaleY(0.7) skewX(-15deg); opacity: 0.6; }
          70% { transform: translate(5%, -10%) scaleX(1.1) scaleY(1.0) skewX(8deg); opacity: 0.4; }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(-5%, 15%) scaleX(1.1) scaleY(0.9) skewX(-5deg); opacity: 0.5; }
          50% { transform: translate(15%, -10%) scaleX(1.4) scaleY(0.6) skewX(12deg); opacity: 0.8; }
        }

        .aurora-layer {
          position: absolute;
          width: 140%;
          height: 100%;
          border-radius: 100% 80% 90% 70% / 40% 50% 30% 60%;
          filter: blur(100px);
          mix-blend-mode: screen;
          transform-origin: center bottom;
        }
      `}</style>

      <div className="container-site relative z-10">

        {/* Headline grande — como el hero */}
        <div ref={headRef} className="flex flex-col items-center text-center gap-6 pb-30 md:pb-0">
          <h2
            className="m-0"
            style={{
              fontSize: 'clamp(2rem, 4vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            <span className="block text-white">
              Tu próximo proyecto
            </span>
            <span className="block text-white">
              merece más leads.
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-neutral-200 m-0 max-w-[40ch]">
            El tráfico ya lo tienes.
            Lo que sigue es no desperdiciarlo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-white justify-center items-center gap-2 py-2.5 w-44 rounded-full text-black shadow-lg shadow-black/10 transition-all duration-300 hover:bg-neutral-300 group"
          >
            Agendar llamada
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] max-w-[1400px] h-[30vh] pointer-events-none select-none translate-y-[20%] z-0 opacity-99">
        
        <div 
          className="aurora-layer bg-white/0" 
          style={{ animation: 'aurora-1 22s ease-in-out infinite' }}
        />
        
        <div 
          className="aurora-layer bg-blue-600" 
          style={{ animation: 'aurora-2 14s ease-in-out infinite alternate', animationDelay: '-4s' }}
        />

        <div 
          className="aurora-layer bg-blue-600" 
          style={{ animation: 'aurora-3 28s ease-in-out infinite', top: '10%' }}
        />
      </div>
    </section>
  )
}