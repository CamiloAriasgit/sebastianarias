'use client'

import { useEffect, useRef } from 'react'
import { Zap, ShieldAlert, MessageSquareOff, EyeOff } from 'lucide-react'
import { SectionTitle } from '../../ui/SectionTitle';

const PROBLEMS = [
  {
    title: 'Carga lento.',
    body: 'Cada segundo de espera es un lead que se fue. El tráfico de pauta no perdona páginas lentas.',
    icon: Zap
  },
  {
    title: 'No genera confianza.',
    body: 'Una página genérica le dice al inversionista que el proyecto tampoco es serio. El diseño es el primer filtro.',
    icon: ShieldAlert
  },
  {
    title: 'El WhatsApp está escondido.',
    body: 'Si el botón no está donde el usuario lo espera, en el momento en que lo necesita, el contacto no ocurre.',
    icon: MessageSquareOff
  },
  {
    title: 'Nadie sabe qué está fallando.',
    body: 'Sin tracking real no hay datos. Sin datos no hay decisiones. La pauta se optimiza a ciegas.',
    icon: EyeOff
  }
]

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
    <section className="bg-section py-16">
      <div className="container-full">
        <div ref={headRef} className="mb-[clamp(3rem,6vw,5rem)] lg:text-center flex flex-col items-center">
          <SectionTitle>
            La mayoría de landings inmobiliarias no convierten. Y el problema no es la pauta.
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                ref={el => { itemRefs.current[i] = el }}
                className="relative bg-white rounded-2xl h-[380px] p-6 flex flex-col overflow-hidden select-none"
              >
                {/* Parte superior: Textos (Mismo tamaño, peso light, diferente color) */}
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-lg  tracking-tight text-black m-0 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-neutral-500 m-0">
                    {p.body}
                  </p>
                </div>

                {/* Mitad inferior: Fondo de puntos simétricos */}
                <div
                  className="absolute inset-x-0 bottom-0 top-1/2 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #d4d4d4 1.2px, transparent 1.2px)',
                    backgroundSize: '12px 12px',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Ícono centrado sobre el patrón de puntos con contenedor circular blanco */}
                <div className="absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-white rounded-full p-7 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-neutral-500" strokeWidth={1} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}