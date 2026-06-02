// components/sections/CTAFinal.tsx
'use client'

import { useEffect, useRef } from 'react'

const WHATSAPP_URL =
  'https://wa.me/57TUNUMERO?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

export default function CTAFinal() {
  const innerRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.2 }
    )

    if (innerRef.current) {
      innerRef.current.style.opacity = '0'
      innerRef.current.style.transform = 'translateY(20px)'
      innerRef.current.style.transition =
        'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)'
      observer.observe(innerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="section-light"
      style={{ paddingBlock: 'clamp(5rem, 11vw, 10rem)' }}
    >
      <div className="container-site">
        <div
          ref={innerRef}
          style={{
            borderTop: '0.5px solid var(--color-light-border)',
            paddingTop: 'clamp(3rem, 6vw, 5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'end',
          }}
        >
          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: 'var(--color-light-text)',
              margin: 0,
            }}
          >
            Tu próximo proyecto
            merece una landing
            que{' '}
            <span style={{ color: 'var(--color-accent-dark)' }}>
              convierta.
            </span>
          </h2>

          {/* Derecha — sub + CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1.75rem',
            }}
          >
            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--color-light-muted)',
                margin: 0,
                maxWidth: '36ch',
              }}
            >
              El tráfico ya lo tienes.
              Lo que sigue es no desperdiciarlo.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Hablar por WhatsApp
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 'clamp(3rem, 6vw, 5rem)',
            paddingTop: '1.5rem',
            borderTop: '0.5px solid var(--color-light-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <span style={{
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            color: 'var(--color-light-text)',
          }}>
            Sebastian Arias
          </span>

          <span style={{
            fontSize: '0.75rem',
            color: 'var(--color-light-muted)',
            letterSpacing: '0.02em',
          }}>
            © {new Date().getFullYear()} · Colombia
          </span>
        </div>
      </div>
    </section>
  )
}