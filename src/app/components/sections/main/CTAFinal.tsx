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
      className="bg-[var(--color-bg)] min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ paddingBlock: 'clamp(5rem, 12vw, 11rem)' }}
    >
      {/* Estilos para la animación de la aurora (puedes mover esto a tu global.css) */}
      <style jsx global>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(-10%, 20%) scale(1); opacity: 0.5; }
          30% { transform: translate(15%, -10%) scale(1.2); opacity: 0.8; }
          60% { transform: translate(-5%, 5%) scale(0.9); opacity: 0.6; }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(10%, -15%) scale(1.1); opacity: 0.6; }
          40% { transform: translate(-20%, 10%) scale(0.8); opacity: 0.4; }
          70% { transform: translate(5%, -5%) scale(1.3); opacity: 0.7; }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(0%, 0%) scale(1); opacity: 0.4; }
          50% { transform: translate(10%, 15%) scale(1.1); opacity: 0.7; }
        }

        .aurora-layer {
          position: absolute;
          width: 150%;
          height: 150%;
          border-radius: 50%;
          filter: blur(80px);
          mix-blend-mode: screen; /* Clave para el efecto de luz vibrante */
        }
      `}</style>

      <div className="container-site relative z-10">

        {/* Headline grande — como el hero */}
        <div ref={headRef} className="flex flex-col items-center text-center gap-6">
          <h2
            className="m-0"
            style={{
              fontSize: 'clamp(2rem, 4vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            <span className="block text-[var(--color-text-primary)]">
              Tu próximo proyecto
            </span>
            <span className="block text-[var(--color-text-primary)]">
              merece más leads.
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[40ch]">
            El tráfico ya lo tienes.
            Lo que sigue es no desperdiciarlo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-white justify-center items-center gap-2 py-2.5 w-44 rounded-full text-black shadow-lg shadow-black/10 transition-all duration-300 hover:bg-neutral-800 group"
          >
            Agendar llamada
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Contenedor del halo "Aurora Boreal" dinámico en la base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] max-w-[1200px] h-[60vh] pointer-events-none select-none translate-y-[30%] z-0 opacity-80">
        
        {/* Capa 1: Azul Vibrante Principal (Lenta y grande) */}
        <div 
          className="aurora-layer bg-blue-500/40" 
          style={{ animation: 'aurora-1 25s ease-in-out infinite' }}
        />
        
        {/* Capa 2: Cian Eléctrico (Más rápida y asimétrica) */}
        <div 
          className="aurora-layer bg-cyan-400/30" 
          style={{ animation: 'aurora-2 10s ease-in-out infinite alternate', animationDelay: '-5s' }}
        />

        {/* Capa 3: Azul Profundo Base (Sutil y constante) */}
        <div 
          className="aurora-layer bg-blue-700/20" 
          style={{ animation: 'aurora-3 30s linear infinite', top: '20%' }}
        />
      </div>
    </section>
  )
}