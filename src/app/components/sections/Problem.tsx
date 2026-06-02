// components/sections/Problem.tsx
'use client'

import { useEffect, useRef } from 'react'

const PROBLEMS = [
  { number: '01', title: 'Carga lento.', body: 'Cada segundo de espera es un lead que se fue. El tráfico de pauta no perdona páginas lentas.' },
  { number: '02', title: 'No genera confianza.', body: 'Una página genérica le dice al comprador que el proyecto tampoco es serio. El diseño es el primer filtro.' },
  { number: '03', title: 'El WhatsApp está escondido.', body: 'Si el botón no está donde el usuario lo espera, en el momento en que lo necesita, el contacto no ocurre.' },
  { number: '04', title: 'Nadie sabe qué está fallando.', body: 'Sin tracking real no hay datos. Sin datos no hay decisiones. La pauta se optimiza a ciegas.' },
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
      { threshold: 0.12 }
    )
    ;[headRef.current, ...itemRefs.current].forEach((el, i) => {
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
      className="bg-[var(--color-surface)]"
      style={{ paddingBlock: 'var(--section-py)' }}
    >
      <div className="container-site">
        <div ref={headRef} className="mb-[clamp(3rem,6vw,5rem)]">
          <p className="text-label text-[var(--color-text-muted)] mb-5">
            El problema
          </p>
          <h2 className="text-display-md text-[var(--color-text-primary)] m-0 max-w-[22ch]">
            La mayoría de landings inmobiliarias no convierten.
            Y el problema no es la pauta.
          </h2>
        </div>

        <div className="grid gap-x-[clamp(1.5rem,4vw,3rem)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {PROBLEMS.map((p, i) => (
            <div
              key={p.number}
              ref={el => { itemRefs.current[i] = el }}
              className="pt-6 border-t border-[var(--color-border)]"
            >
              <span className="text-label text-[var(--color-text-muted)] block mb-3">
                {p.number}
              </span>
              <h3 className="text-[1.0625rem] font-medium tracking-tight text-[var(--color-text-primary)] m-0 mb-2">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] m-0">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}