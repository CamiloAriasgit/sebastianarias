// components/sections/Hero.tsx
'use client'

import { useEffect, useRef } from 'react'

const WHATSAPP_URL =
  'https://wa.me/57TUNUMERO?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

export default function Hero() {
  const lineOneRef = useRef<HTMLSpanElement>(null)
  const lineTwoRef = useRef<HTMLSpanElement>(null)
  const footerRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [
      { ref: lineOneRef, delay: 0   },
      { ref: lineTwoRef, delay: 120 },
      { ref: footerRef,  delay: 280 },
    ]
    els.forEach(({ ref, delay }) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(16px)'
      ref.current.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 60)
    })
  }, [])

  return (
    <section
      className="bg-[var(--color-bg)] h-svh grid pt-14"
      style={{ gridTemplateRows: '1fr auto' }}
    >
      {/* Headline */}
      <div className="container-site flex flex-col justify-center">
        <h1 className="text-display text-[var(--color-text-primary)] m-0">
          <span ref={lineOneRef} className="block">
            Landing pages
          </span>
          <span ref={lineTwoRef} className="block text-[var(--color-text-muted)]">
            que convierten.
          </span>
        </h1>
      </div>

      {/* Footer anclado */}
      <div
        ref={footerRef}
        className="container-site pb-8 pt-5 border-t border-[var(--color-border)] flex items-end justify-between flex-wrap gap-8"
      >
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[38ch]">
          Diseñadas para proyectos inmobiliarios en preventa.
          Tráfico de pauta convertido en leads reales,
          con tracking y WhatsApp estratégico.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-primary-hero shrink-0"
        >
        
          Agendar llamada
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}