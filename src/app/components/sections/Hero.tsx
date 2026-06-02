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
      { ref: lineOneRef, delay: 0    },
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
      className="section-dark"
      style={{
        height: '100svh',
        display: 'grid',
        gridTemplateRows: '1fr auto',
        paddingTop: '3.5rem',
      }}
    >
      {/* Headline */}
      <div
        className="container-site"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-primary)',
            margin: 0,
            fontSize: 'clamp(3rem, 10.5vw, 11rem)',
          }}
        >
          <span ref={lineOneRef} style={{ display: 'block' }}>
            Landing pages
          </span>
          <span
            ref={lineTwoRef}
            style={{
              display: 'block',
              color: 'var(--color-text-muted)',
            }}
          >
            que convierten.
          </span>
        </h1>
      </div>

      {/* Footer anclado */}
      <div
        ref={footerRef}
        className="container-site"
        style={{
          paddingBottom: '2rem',
          paddingTop: '1.25rem',
          borderTop: '0.5px solid var(--color-border)',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: 1.65,
            color: 'var(--color-text-secondary)',
            margin: 0,
            maxWidth: '38ch',
          }}
        >
          Diseñadas para proyectos inmobiliarios en preventa.
          Tráfico de pauta convertido en leads reales,
          con tracking y WhatsApp estratégico.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-primary-hero"
          style={{ flexShrink: 0 }}
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