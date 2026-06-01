
// components/sections/Hero.tsx
'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const headRef  = useRef<HTMLHeadingElement>(null)
  const subRef   = useRef<HTMLParagraphElement>(null)
  const ctaRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [
      { ref: headRef, delay: 0   },
      { ref: subRef,  delay: 180 },
      { ref: ctaRef,  delay: 320 },
    ]
    els.forEach(({ ref, delay }) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(20px)'
      ref.current.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 60)
    })
  }, [])

  const WHATSAPP_URL =
    'https://wa.me/57TUNUMERO?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

  return (
    <section
      className="section-dark"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Nav */}
      <nav
        className="container-site"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
        }}
      >
        <span style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          color: 'var(--color-text-primary)',
        }}>
          Sebastian Arias
        </span>
        
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.8125rem',
            fontWeight: 400,
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
        >
          Contacto
        </a>
      </nav>

      {/* Contenido */}
      <div
        className="container-site"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(3rem, 8vw, 6rem)',
          paddingBottom: 'clamp(3rem, 8vw, 6rem)',
        }}
      >
        {/* Headline */}
        <h1
          ref={headRef}
          style={{
            fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.06,
            letterSpacing: '-0.035em',
            color: 'var(--color-text-primary)',
            maxWidth: '14ch',
            margin: 0,
          }}
        >
          Landing pages<br />
          que venden<br />
          proyectos<br />
          inmobiliarios.
        </h1>

        {/* Subhead */}
        <p
          ref={subRef}
          style={{
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'var(--color-text-secondary)',
            maxWidth: '42ch',
            marginTop: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: 0,
          }}
        >
          Diseñadas para convertir el tráfico de pauta
          en leads reales. Tracking completo, WhatsApp
          estratégico, entrega en 14 días.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: 'clamp(2rem, 4vw, 2.75rem)',
          }}
        >
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar llamada
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          
          <a
            href="#demo"
            style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'color 0.2s ease',
              padding: '0.75rem 0',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
          >
            Ver demo
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 2l4 4-4 4M2 6h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer del hero — sector */}
      <div
        className="container-site"
        style={{
          paddingBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <span style={{
          fontSize: '0.6875rem',
          fontWeight: 400,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
        }}>
          Sector inmobiliario · Colombia y Latinoamérica
        </span>
      </div>
    </section>
  )
}
