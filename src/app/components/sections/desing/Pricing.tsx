'use client'

import { useEffect, useRef } from 'react'
import { Check, Astroid, ArrowUpRight, Gem } from 'lucide-react'
import { SectionTitle } from '../../ui/SectionTitle';

const BASE_WHATSAPP_NUMBER = '573235619283'

const getWhatsAppLink = (planName?: string, isCustomRequest = false) => {
  let message = ''

  if (isCustomRequest) {
    message = 'Hola, mi proyecto tiene requerimientos específicos y me gustaría que conversemos para armar algo a la medida.'
  } else {
    message = `Hola, quiero saber más sobre el servicio de landing pages para mi proyecto inmobiliario. Estoy interesado en el Plan ${planName}.`
  }

  return `https://wa.me/${BASE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const PLANS = [
  {
    name: 'Esencial',
    price: '$799',
    monthly: '$59',
    description: 'Para proyectos que necesitan presencia sólida y captura de leads desde el primer día.',
    features: ['Hasta 5 secciones', 'Diseño a medida', 'WhatsApp estratégico'],
    highlighted: false,
  },
  {
    name: 'Conversión',
    price: '$1.499',
    monthly: '$89',
    description: 'El punto dulce. Diseño completo, tracking avanzado y copy orientado a convertir.',
    features: ['Hasta 8 secciones', 'Diseño a medida', 'WhatsApp strategic'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$2.799',
    monthly: '$139',
    description: 'Para proyectos que exigen el máximo nivel de detalle, conversión y presentación.',
    features: ['Hasta 5 secciones', 'Diseño a medida', 'WhatsApp estratégico'],
    highlighted: false,
  },

]

export const pricingGradient = {
  id: "pricing",
  colors: ["#283d68", "#3a5487", "#5879b0"],
};

export default function Pricing() {

  const headRef = useRef<HTMLDivElement>(null)
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
        el.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-[700ms]', 'cubic-bezier-[0.16,1,0.3,1]')
        el.style.transitionDelay = `${i * 80}ms`
        observer.observe(el)
      })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={pricingGradient.id}
      className="flex flex-col h-[100dvh] w-full snap-start items-center justify-center px-6"
    >
      <div className="bg-white/15 py-1 px-3 mb-4 rounded-full flex items-center justify-center gap-2 text-white/70">
        <span className="text-sm font-light">Planes</span>
      </div>
      <div className="container-site">

        <div ref={headRef} className="mb-10 grid gap-4 text-center text-white">

          <SectionTitle className='text-white'>
            Elige el nivel que<br /> necesita tu proyecto.
          </SectionTitle>
          <p className="text-sm text-white/80 m-0 text-balance font-light">
            Todos los planes incluyen hosting, despliegue y soporte mensual.
          </p>
        </div>

        {/* Cards independientes y redondeadas */}
        <div className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))] md:gap-6">          {PLANS.map((plan, i) => (
          <div
            key={plan.name}
            ref={el => { cardRefs.current[i] = el }}
            className={`w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink flex flex-col gap-6 p-6 md:p-8 rounded-4xl ${plan.highlighted
              ? 'bg-gradient-to-bl from-white via-white/70 to-white/80'
              : 'bg-gradient-to-bl from-transparent via-white/5 to-white/20 border border-white/20'
              }`}
          >
            {/* Header */}
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span
                  className={`text-sm font-light ${plan.highlighted ? 'text-black' : 'text-white/80'
                    }`}
                >
                  {plan.name}
                </span>
                {plan.highlighted && (
                  <span className="text-xs flex items-center uppercase tracking-wider bg-gradient-to-r from-blue-500 via-amber-500 to-pink-500 px-2.5 py-1.5 rounded-full">
                    <Astroid className="text-white inline-block mr-1.5" size={12} />
                    Recomendado
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-1.5 mb-3">
                <span
                  className={`font-light leading-none text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.04em] ${plan.highlighted
                    ? 'text-black'
                    : 'text-white'
                    }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xs ${plan.highlighted ? 'text-black/80' : 'text-white/80'
                    }`}
                >
                  USD
                </span>
              </div>

              <p
                className={`text-[0.8125rem] leading-relaxed mb-2 ${plan.highlighted ? 'text-black/80' : 'text-white/80 font-light'
                  }`}
              >
                {plan.description}
              </p>

              <p
                className={`text-xs m-0 ${plan.highlighted ? 'text-black' : 'text-white'
                  }`}
              >
                + {plan.monthly} USD / mes
              </p>
            </div>

            {/* Divisor */}
            <div
              className={`h-px w-full ${plan.highlighted ? 'bg-black/20' : 'bg-white/20'
                }`}
            />

            {/* Features */}
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5 flex-1">
              {plan.features.map(feature => (
                <li
                  key={feature}
                  className={`flex items-center gap-2.5 text-[0.8125rem] ${plan.highlighted ? 'text-black/80' : 'text-white/80'
                    }`}
                >
                  <Check
                    size={13}
                    strokeWidth={1.5}
                    className={`shrink-0 ${plan.highlighted ? 'text-black/80' : 'text-white/80'
                      }`}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA - Botones Redondos (rounded-full) */}
            <a
              href={getWhatsAppLink(plan.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-3 rounded-full text-sm no-underline transition-opacity duration-200 hover:opacity-97 ${plan.highlighted
                ? 'w-full h-10 bg-neutral-900 text-white shadow-inner shadow-neutral-600 hover:bg-neutral-800 transition-colors'
                : 'w-full h-10 bg-neutral-200 text-black font-light shadow-inner shadow-white hover:bg-neutral-300 transition-colors'
                }`}
            >
              Obtener
            </a>
          </div>
        ))}
        </div>

        <p className="text-[0.8125rem] text-white/80 font-light mt-6 text-center">
          ¿Tu proyecto tiene requerimientos específicos?{' '}
          <a
            href={getWhatsAppLink(undefined, true)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2 rounded-md bg-white/20 hover:opacity-90 hover:bg-gradient-to-r hover:from-white/10 hover:via-white/30 hover:to-white-30 hover:shadow hover:shadow-inner hover:shadow-white/60 transition-shadow transition-colors transition-opacity duration-500"
          >
            Conversemos <ArrowUpRight className="w-4 h-4" />
          </a>
        </p>
      </div>
    </section>
  );
}