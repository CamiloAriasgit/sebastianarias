'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const tagRef    = useRef<HTMLDivElement>(null)
  const headRef   = useRef<HTMLHeadingElement>(null)
  const subRef    = useRef<HTMLParagraphElement>(null)
  const ctaRef    = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const lineRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [
      { ref: tagRef,     delay: 0   },
      { ref: lineRef,    delay: 80  },
      { ref: headRef,    delay: 160 },
      { ref: subRef,     delay: 300 },
      { ref: ctaRef,     delay: 420 },
      { ref: metricsRef, delay: 560 },
    ]

    els.forEach(({ ref, delay }) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(18px)'
      ref.current.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
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
      className="section-dark noise relative min-h-svh flex flex-col"
      style={{ paddingTop: 'clamp(5rem, 10vw, 8rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}
    >
      {/* Nav mínima */}
      <nav className="container-site absolute top-0 inset-x-0 mx-auto flex items-center justify-between py-6">
        <span
          className="text-small font-medium tracking-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Sebastian Arias
        </span>
        
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost text-small"
          style={{ padding: '0.5rem 1rem' }}
        >
          Contacto
        </a>
      </nav>

      {/* Contenido principal */}
      <div className="container-site flex-1 flex flex-col justify-center">
        <div style={{ maxWidth: '780px' }}>

          {/* Tag */}
          <div ref={tagRef}>
            <span className="tag">Desarrollo web · Sector inmobiliario</span>
          </div>

          {/* Línea decorativa */}
          <div
            ref={lineRef}
            style={{
              width: '2px',
              height: '3rem',
              background: 'var(--color-accent)',
              borderRadius: '1px',
              margin: '1.75rem 0',
            }}
          />

          {/* Headline */}
          <h1
            ref={headRef}
            className="text-display"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Landing pages que<br />
            venden proyectos{' '}
            <span style={{ color: 'var(--color-accent)' }}>inmobiliarios.</span>
          </h1>

          {/* Subhead */}
          <p
            ref={subRef}
            className="text-body"
            style={{
              color: 'var(--color-text-secondary)',
              marginTop: '1.5rem',
              maxWidth: '520px',
            }}
          >
            Diseñadas para convertir el tráfico de pauta en leads reales.
            Con tracking completo, WhatsApp estratégico y estética
            que genera confianza desde el primer segundo.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginTop: '2.5rem',
            }}
          >
            
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar llamada
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <a
              href="#demo"
              className="btn-ghost"
            >
              Ver demo
            </a>
          </div>

        </div>

        {/* Métricas */}
        <div
          ref={metricsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, max-content)',
            gap: '0 3rem',
            marginTop: 'clamp(3.5rem, 7vw, 6rem)',
            paddingTop: '2rem',
            borderTop: '0.5px solid var(--color-border)',
          }}
        >
          {[
            { value: '14',   unit: 'días',  label: 'Tiempo de entrega' },
            { value: '$800', unit: 'USD',   label: 'Precio de entrada' },
            { value: '100%', unit: '',      label: 'Custom — sin plantillas' },
          ].map(({ value, unit, label }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1,
                }}
              >
                {value}
                {unit && (
                  <span
                    className="text-label"
                    style={{
                      color: 'var(--color-accent)',
                      marginLeft: '0.375rem',
                      fontSize: '0.6875rem',
                    }}
                  >
                    {unit}
                  </span>
                )}
              </div>
              <div
                className="text-label"
                style={{
                  color: 'var(--color-text-muted)',
                  marginTop: '0.375rem',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="container-site"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginTop: '3rem',
          opacity: 0.35,
        }}
      >
        <div
          style={{
            width: '1px',
            height: '2rem',
            background: 'var(--color-text-primary)',
          }}
        />
      </div>
    </section>
  )
}

