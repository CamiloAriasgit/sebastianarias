// components/sections/FAQ.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: '¿El dominio está incluido?',
    a: 'El dominio lo registra el cliente a su nombre — eso garantiza que siempre sea de su propiedad. La configuración técnica y los DNS corren por nuestra cuenta.',
  },
  {
    q: '¿Qué pasa cuando el proyecto termina su ciclo de ventas?',
    a: 'La landing se apaga o redirige al sitio principal. El repositorio queda archivado por si hay una segunda etapa o un nuevo proyecto.',
  },
  {
    q: '¿Puedo pedir cambios después de publicado?',
    a: 'Sí. Cada plan incluye un número de cambios mensuales acordados. Los cambios fuera de ese límite se cotizan por separado.',
  },
  {
    q: '¿Qué necesito tener listo para empezar?',
    a: 'Los textos del proyecto, logotipo, paleta de colores si existe, y referencias visuales. Con eso es suficiente para arrancar.',
  },
  {
    q: '¿Trabajan con proyectos fuera de Colombia?',
    a: 'Sí. El servicio opera para cualquier proyecto en Latinoamérica. Los pagos se manejan en USD.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
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
      { threshold: 0.1 }
    )

    ;[headRef.current, ...itemRefs.current].forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(16px)'
      el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="section-dark"
      style={{ paddingBlock: 'clamp(4rem, 9vw, 8rem)' }}
    >
      <div className="container-site">

        {/* Cabecera */}
        <div
          ref={headRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 4vw, 4rem)',
            alignItems: 'end',
            marginBottom: 'clamp(3rem, 5vw, 4rem)',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            margin: 0,
          }}>
            Preguntas
            frecuentes.
          </h2>
          <p style={{
            fontSize: '0.9375rem',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
            margin: 0,
            maxWidth: '38ch',
          }}>
            ¿Algo más? Escríbenos directamente
            y lo resolvemos en la misma conversación.
          </p>
        </div>

        {/* Acordeón */}
        <div style={{ borderTop: '0.5px solid var(--color-border)' }}>
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              ref={el => { itemRefs.current[i] = el }}
              style={{ borderBottom: '0.5px solid var(--color-border)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '1.375rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                }}
              >
                <span style={{
                  fontSize: '0.9375rem',
                  fontWeight: open === i ? 500 : 400,
                  letterSpacing: '-0.01em',
                  color: open === i
                    ? 'var(--color-text-primary)'
                    : 'var(--color-text-secondary)',
                  transition: 'color 0.2s ease, font-weight 0.2s ease',
                }}>
                  {faq.q}
                </span>

                <Plus
                  size={16}
                  strokeWidth={1.5}
                  style={{
                    flexShrink: 0,
                    color: 'var(--color-text-muted)',
                    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {/* Respuesta */}
              <div style={{
                display: 'grid',
                gridTemplateRows: open === i ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.35s cubic-bezier(0.16,1,0.3,1)',
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                    paddingBottom: '1.375rem',
                    maxWidth: '58ch',
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}