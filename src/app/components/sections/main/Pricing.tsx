// components/sections/Pricing.tsx
'use client'

import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const PLANS = [
  {
    name: 'Esencial',
    price: '$800',
    monthly: '$60',
    description: 'Para proyectos que necesitan presencia sólida y captura de leads desde el primer día.',
    features: ['Hasta 5 secciones','Diseño a medida','WhatsApp estratégico','GTM + GA4','Formulario de leads','Animaciones básicas','1 revisión','Entrega en 10 días'],
    highlighted: false,
  },
  {
    name: 'Conversión',
    price: '$1.500',
    monthly: '$90',
    description: 'El punto dulce. Diseño completo, tracking avanzado y copy orientado a convertir.',
    features: ['Hasta 8 secciones','Diseño a medida','WhatsApp estratégico','GTM + GA4 + eventos custom','Formulario de leads','Animaciones completas','Orientación de copywriting','2 revisiones','Entrega en 14 días'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$2.800',
    monthly: '$140',
    description: 'Para proyectos que exigen el máximo nivel de detalle, conversión y presentación.',
    features: ['Secciones ilimitadas','Diseño a medida','WhatsApp multi-punto','GTM + GA4 + funnel completo','Formulario de leads','Animaciones avanzadas','Copywriting incluido','3 revisiones','Entrega en 21 días'],
    highlighted: false,
  },
]

export default function Pricing() {
  const headRef  = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.classList.remove('opacity-0', 'translate-y-5')
          el.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(el)
        })
      },
      { threshold: 0.1 }
    )

    ;[headRef.current, ...cardRefs.current].forEach((el, i) => {
      if (!el) return
      // Inicializamos los estados de la animación con Tailwind
      el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-[700ms]', 'cubic-bezier-[0.16,1,0.3,1]')
      // Añadimos el delay custom por código para mantener la sincronía del índice
      el.style.transitionDelay = `${i * 80}ms`
      observer.observe(el)
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[var(--color-light-bg)] py-[var(--section-py)]">
      <div className="container-site">
        <div ref={headRef} className="mb-[clamp(3rem,6vw,5rem)]">
          <p className="text-label text-[var(--color-light-muted)] mb-5">Planes</p>
          <h2 className="text-[var(--color-light-text)] m-0 mb-3 max-w-[22ch] text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.03em]">
            Elige el nivel que necesita tu proyecto.
          </h2>
          <p className="text-sm text-[var(--color-light-muted)] m-0">
            Todos los planes incluyen hosting, despliegue y soporte mensual.
          </p>
        </div>

        {/* Cards */}
        <div className="grid rounded-xl overflow-hidden grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px bg-[var(--color-light-border)]">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              ref={el => { cardRefs.current[i] = el }}
              className={`flex flex-col gap-6 p-[clamp(1.5rem,3vw,2rem)] ${
                plan.highlighted ? 'bg-[var(--color-light-text)]' : 'bg-neutral-200'
              }`}
            >
              {/* Header */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span
                    className={`text-sm font-medium ${
                      plan.highlighted ? 'text-[rgba(245,245,240,0.6)]' : 'text-[var(--color-light-muted)]'
                    }`}
                  >
                    {plan.name}
                  </span>
                  {plan.highlighted && (
                    <span className="text-label text-[rgba(245,245,240,0.4)]">
                      Recomendado
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1.5 mb-3">
                  <span
                    className={`font-light leading-none text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.04em] ${
                      plan.highlighted ? 'bg-gradient-to-b from-gray-300 via-gray-400 text-transparent bg-clip-text' : 'text-[var(--color-light-text)]'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ${
                      plan.highlighted ? 'text-[rgba(245,245,240,0.4)]' : 'text-[var(--color-light-muted)]'
                    }`}
                  >
                    USD
                  </span>
                </div>

                <p
                  className={`text-[0.8125rem] leading-relaxed mb-2 ${
                    plan.highlighted ? 'text-[rgba(245,245,240,0.6)]' : 'text-[var(--color-light-muted)]'
                  }`}
                >
                  {plan.description}
                </p>

                <p
                  className={`text-xs m-0 ${
                    plan.highlighted ? 'text-[rgba(245,245,240,0.35)]' : 'text-[var(--color-light-muted)]'
                  }`}
                >
                  + {plan.monthly} USD / mes
                </p>
              </div>

              {/* Divisor */}
              <div
                className={`h-px w-full ${
                  plan.highlighted ? 'bg-[rgba(245,245,240,0.1)]' : 'bg-[var(--color-light-border)]'
                }`}
              />

              {/* Features */}
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5 flex-1">
                {plan.features.map(feature => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2.5 text-[0.8125rem] ${
                      plan.highlighted ? 'text-[rgba(245,245,240,0.75)]' : 'text-[var(--color-light-text)]'
                    }`}
                  >
                    <Check
                      size={13}
                      strokeWidth={1.5}
                      className={`shrink-0 ${
                        plan.highlighted ? 'text-[rgba(245,245,240,0.4)]' : 'text-[var(--color-light-muted)]'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium no-underline transition-opacity duration-200 hover:opacity-75 text-[var(--color-light-text)] ${
                  plan.highlighted 
                    ? 'bg-[var(--color-light-bg)] border-none' 
                    : 'bg-transparent border-[0.5px] border-black'
                }`}
              >
                Empezar
              </a>
            </div>
          ))}
        </div>

        <p className="text-[0.8125rem] text-[var(--color-light-muted)] mt-6 text-center">
          ¿Tu proyecto tiene requerimientos específicos?{' '}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-light-text)] no-underline border-b border-[var(--color-light-border)] pb-px"
          >
            Conversemos.
          </a>
        </p>
      </div>
    </section>
  )
}