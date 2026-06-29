// components/sections/Problem.tsx
'use client'

import { useEffect, useRef } from 'react'

const LEAKS = [
  { title: 'Carga lento.', body: 'Cada segundo de espera es un lead que se fue. El tráfico de pauta no perdona páginas lentas.' },
  { title: 'No genera confianza.', body: 'Una página genérica le dice al inversionista que el proyecto tampoco es serio. El diseño es el primer filtro.' },
  { title: 'El WhatsApp está escondido.', body: 'Si el botón no está donde el usuario lo espera, en el momento en que lo necesita, el contacto no ocurre.' },
]

const BLIND_SPOT = {
  title: 'Nadie sabe qué está fallando.',
  body: 'Sin tracking real no hay datos. Sin datos no hay decisiones. La pauta se optimiza a ciegas.',
}

export default function Problem() {
  const headRef = useRef<HTMLDivElement>(null)
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
    <section className="bg-[#f8f8ff]">
      <div className="container-site">
        <div ref={headRef} className="mb-[clamp(3rem,6vw,5rem)] text-center flex flex-col items-center">
          {/*<h2 className="text-display-md text-black m-0 max-w-[30ch]">
            La mayoría de landings inmobiliarias no convierten.
            <span className="block">Y el problema no es la pauta.</span>
          </h2>*/}
          <h2
            className="m-0 block text-neutral-950 font-medium tracking-tight drop-shadow-sm"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
              lineHeight: 1.05,
            }}
          >
            La mayoría de landings inmobiliarias no convierten. Y el problema no es la pauta.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[clamp(1.5rem,4vw,2.5rem)] gap-y-10">
          {LEAKS.map((p, i) => (
            <div
              key={p.title}
              ref={el => { itemRefs.current[i] = el }}
              className="flex flex-col"
            >

              <div className="h-px w-full relative mb-5 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-neutral-500"
                  style={{ width: '38%' }}
                />
              </div>

              <h3 className="text-[1.0625rem] font-medium tracking-tight text-black m-0 mb-2">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-700 m-0">
                {p.body}
              </p>
            </div>
          ))}
        </div>
        <div
          ref={el => { itemRefs.current[3] = el }}
          className="relative mt-14 md:mt-16 rounded-2xl bg-gray-200/50 px-7 py-9 md:px-10 md:py-10 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--color-text-secondary, #737373) 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />

          <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            <h3 className="text-[1.1875rem] md:text-[1.375rem] font-medium tracking-tight text-black m-0 md:max-w-[18ch]">
              {BLIND_SPOT.title}
            </h3>
            <div className="hidden md:block w-px self-stretch bg-neutral-800" />
            <p className="text-sm leading-relaxed text-neutral-800 m-0 max-w-[48ch]">
              {BLIND_SPOT.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}