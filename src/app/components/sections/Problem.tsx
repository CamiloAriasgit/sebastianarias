// components/sections/Problem.tsx
'use client'

import { useEffect, useRef } from 'react'

const PROBLEMS = [
  {
    number: '01',
    title: 'Carga lento.',
    body: 'Cada segundo de espera es un lead que se fue. El tráfico de pauta no perdona páginas lentas.',
  },
  {
    number: '02',
    title: 'No genera confianza.',
    body: 'Una página genérica le dice al comprador que el proyecto tampoco es serio. El diseño es el primer filtro.',
  },
  {
    number: '03',
    title: 'El WhatsApp está escondido.',
    body: 'Si el botón no está donde el usuario lo espera, en el momento en que lo necesita, el contacto no ocurre.',
  },
  {
    number: '04',
    title: 'Nadie sabe qué está fallando.',
    body: 'Sin tracking real no hay datos. Sin datos no hay decisiones. La pauta se optimiza a ciegas.',
  },
]

export default function Problem() {
  const headRef  = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

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

    const els = [headRef.current, ...itemRefs.current].filter(Boolean)
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`
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
            El problema
          </p>

          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--color-light-text)',
              maxWidth: '22ch',
              margin: 0,
            }}
          >
            La mayoría de landings inmobiliarias no convierten.
            Y el problema no es la pauta.
          </h2>
        </div>

        {/* Grid de problemas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(0px, 2vw, 2rem) clamp(1.5rem, 4vw, 3rem)',
          }}
        >
          {PROBLEMS.map((p, i) => (
            <div
              key={p.number}
              ref={el => { itemRefs.current[i] = el }}
              style={{
                paddingTop: '1.5rem',
                borderTop: '0.5px solid var(--color-light-border)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: 'var(--color-light-muted)',
                  marginBottom: '0.875rem',
                }}
              >
                {p.number}
              </span>
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 500,
                  letterSpacing: '-0.015em',
                  color: 'var(--color-light-text)',
                  margin: '0 0 0.5rem',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  color: 'var(--color-light-muted)',
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}