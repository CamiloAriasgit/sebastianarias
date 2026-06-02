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
        paddingTop: '3.5rem', /* altura del header fixed */
      }}
    >
      {/* Centro — headline ocupa el ancho */}
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
            /*
              font-size fluido: ocupa el ancho disponible
              sin importar el viewport. Ajusta el multiplicador
              si quiere más o menos presencia.
            */
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

      {/* Footer del hero — anclado al fondo */}
      <div
        ref={footerRef}
        className="container-site"
        style={{
          paddingBottom: '2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'end',
          gap: '1rem',
          borderTop: '0.5px solid var(--color-border)',
          paddingTop: '1.25rem',
        }}
      >
        {/* Izquierda — descripción + CTA */}
        <div>
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: 1.65,
              color: 'var(--color-text-secondary)',
              margin: '0 0 1.25rem',
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
            className="btn-primary"
          >
            Agendar llamada
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Derecha — ver demo */}
        <div style={{ textAlign: 'right' }}>
          <a
            href="#demo"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            Ver demo
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 2l4 4-4 4M2 6h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}