// components/sections/Service.tsx
'use client'

import { useEffect, useRef } from 'react'

const FEATURES = [
  { title: 'Diseño a medida.', body: 'Sin plantillas. Cada landing refleja la identidad del proyecto — tipografía, paleta y composición definidas desde cero.' },
  { title: 'WhatsApp estratégico.', body: 'El botón está donde el comprador lo necesita, con el mensaje correcto predefinido. El contacto ocurre sin fricción.' },
  { title: 'GTM + GA4.', body: 'Cada clic, cada scroll, cada intención de contacto queda registrada. La pauta se optimiza con datos reales.' },
  { title: 'Velocidad real.', body: 'Construido en Next.js y desplegado en Vercel. Core Web Vitals en verde. El lead no espera.' },
  { title: 'Entrega en 14 días.', body: 'Proceso definido desde el briefing hasta la publicación. Sin sorpresas, sin retrasos innecesarios.' },
  { title: 'Soporte continuo.', body: 'El sitio evoluciona con el proyecto. Si el copy necesita ajustarse o el comportamiento del tráfico pide un cambio, está cubierto.' },
]

export default function Service() {
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
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="bg-[var(--color-bg)]"
      style={{ paddingBlock: 'var(--section-py)' }}
    >
      <div className="container-site">
        <div
          ref={headRef}
          className="grid gap-[clamp(1rem,4vw,4rem)] items-end mb-[clamp(3rem,6vw,5rem)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          <h2 className="text-display-md text-[var(--color-text-primary)] m-0">
            Una landing construida
            para el momento en que
            el comprador decide.
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[38ch]">
            Cada elemento tiene un propósito.
            Nada está ahí por decoración.
          </p>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0',
            borderLeft: '0.5px solid var(--color-border)',
            borderBottom: '0.5px solid var(--color-border)',
          }}
        >
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              ref={el => { itemRefs.current[i] = el }}
              className="p-[clamp(1.25rem,2.5vw,1.75rem)] border-t border-r border-[var(--color-border)] transition-colors duration-200 hover:bg-[var(--color-surface)]"
            >
              <h3 className="text-[0.9375rem] font-medium tracking-tight text-[var(--color-text-primary)] m-0 mb-2">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] m-0">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}