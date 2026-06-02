// components/sections/Process.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  { number: '01', title: 'Briefing', body: 'Entendemos el proyecto, el comprador objetivo, y lo que necesita sentir al llegar a la página. Sin formularios largos — una conversación.' },
  { number: '02', title: 'Estructura', body: 'Se define la arquitectura de conversión: qué secciones, en qué orden, con qué intención. El esqueleto antes del diseño.' },
  { number: '03', title: 'Diseño y desarrollo', body: 'Se construye sobre Next.js con animaciones, tipografía y paleta alineadas a la marca del proyecto. Sin plantillas.' },
  { number: '04', title: 'Integraciones', body: 'GTM, GA4, formulario de leads y WhatsApp configurados y probados. Cada evento de conversión verificado antes de publicar.' },
  { number: '05', title: 'Publicación', body: 'El sitio queda activo en el dominio del cliente. Desde ese momento, cada visita es medible y cada lead es rastreable.' },
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
      className="bg-[var(--color-surface-hi)]"
      style={{ paddingBlock: 'var(--section-py)' }}
    >
      <div className="container-site">
        <div ref={headRef} className="mb-[clamp(3rem,6vw,5rem)]">
          <p className="text-label text-[var(--color-text-muted)] mb-5">El proceso</p>
          <h2 className="text-display-md text-[var(--color-text-primary)] m-0 max-w-[22ch]">
            De briefing a publicado.
            Sin fricciones.
          </h2>
        </div>

        <div
          ref={bodyRef}
          className="grid gap-[clamp(2rem,5vw,6rem)] items-start"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Lista */}
          <div className="border-b border-[var(--color-border)]">
            {STEPS.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActive(i)}
                className="w-full bg-transparent border-none border-t border-[var(--color-border)] cursor-pointer text-left py-5 flex items-center justify-between gap-4 transition-opacity duration-200"
                style={{ opacity: active === i ? 1 : 0.35 }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.opacity = '0.65' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = active === i ? '1' : '0.35' }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-label text-[var(--color-text-muted)] min-w-[1.5rem]">
                    {step.number}
                  </span>
                  <span
                    className="text-base tracking-tight text-[var(--color-text-primary)] transition-all duration-200"
                    style={{ fontWeight: active === i ? 500 : 400 }}
                  >
                    {step.title}
                  </span>
                </div>
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)] shrink-0 transition-opacity duration-200"
                  style={{ opacity: active === i ? 1 : 0 }}
                />
              </button>
            ))}
          </div>

          {/* Detalle */}
          <div className="sticky top-[calc(3.5rem+2rem)]">
            <div key={active} style={{ animation: 'fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
              <p className="text-label text-[var(--color-text-muted)] mb-4">
                Paso {STEPS[active].number}
              </p>
              <h3
                className="text-[var(--color-text-primary)] m-0 mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.15 }}
              >
                {STEPS[active].title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[36ch]">
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