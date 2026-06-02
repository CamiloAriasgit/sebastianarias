// components/sections/Process.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Briefing',
    body: 'Entendemos el proyecto, el comprador objetivo, y lo que necesita sentir al llegar a la página. Sin formularios largos — una conversación.',
  },
  {
    number: '02',
    title: 'Estructura',
    body: 'Se define la arquitectura de conversión: qué secciones, en qué orden, con qué intención. El esqueleto antes del diseño.',
  },
  {
    number: '03',
    title: 'Diseño y desarrollo',
    body: 'Se construye sobre Next.js con animaciones, tipografía y paleta alineadas a la marca del proyecto. Sin plantillas.',
  },
  {
    number: '04',
    title: 'Integraciones',
    body: 'GTM, GA4, formulario de leads y WhatsApp configurados y probados. Cada evento de conversión verificado antes de publicar.',
  },
  {
    number: '05',
    title: 'Publicación',
    body: 'El sitio queda activo en el dominio del cliente. Desde ese momento, cada visita es medible y cada lead es rastreable.',
  },
]

export default function Process() {
  const [active, setActive] = useState(0)
  const headRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.12 }
    )

    ;[headRef.current, bodyRef.current].forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="section-light"
      style={{ paddingBlock: 'clamp(4rem, 9vw, 8rem)' }}
    >
      <div className="container-site">

        {/* Cabecera */}
        <div
          ref={headRef}
          style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}
        >
          <p
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-light-muted)',
              marginBottom: '1.25rem',
            }}
          >
            El proceso
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--color-light-text)',
              margin: 0,
              maxWidth: '22ch',
            }}
          >
            De briefing a publicado.
            Sin fricciones.
          </h2>
        </div>

        {/* Layout sticky — desktop */}
        <div
          ref={bodyRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 5vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Lista de pasos */}
          <div>
            {STEPS.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActive(i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '1.25rem 0',
                  borderTop: '0.5px solid var(--color-light-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  transition: 'opacity 0.2s ease',
                  opacity: active === i ? 1 : 0.4,
                }}
                onMouseEnter={e => {
                  if (active !== i) e.currentTarget.style.opacity = '0.7'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = active === i ? '1' : '0.4'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: 'var(--color-light-muted)',
                      minWidth: '1.5rem',
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: active === i ? 500 : 400,
                      letterSpacing: '-0.01em',
                      color: 'var(--color-light-text)',
                      transition: 'font-weight 0.2s ease',
                    }}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Indicador activo */}
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-light-text)',
                    flexShrink: 0,
                    opacity: active === i ? 1 : 0,
                    transition: 'opacity 0.2s ease',
                  }}
                />
              </button>
            ))}
            {/* Borde bottom del último item */}
            <div style={{ borderTop: '0.5px solid var(--color-light-border)' }} />
          </div>

          {/* Detalle del paso activo */}
          <div
            style={{
              position: 'sticky',
              top: 'calc(3.5rem + 2rem)',
            }}
          >
            <div
              key={active}
              style={{
                animation: 'fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both',
              }}
            >
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-light-muted)',
                  marginBottom: '1rem',
                }}
              >
                Paso {STEPS[active].number}
              </p>
              <h3
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  color: 'var(--color-light-text)',
                  margin: '0 0 1rem',
                }}
              >
                {STEPS[active].title}
              </h3>
              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'var(--color-light-muted)',
                  margin: 0,
                  maxWidth: '36ch',
                }}
              >
                {STEPS[active].body}
              </p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}