'use client'

import { useEffect, useRef } from 'react'
import { Check, Sparkles, ArrowUpRight } from 'lucide-react'

const BASE_WHATSAPP_NUMBER = '573235619283'

// Función para generar los enlaces dinámicos con el texto correctamente codificado
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
        price: '$800',
        monthly: '$60',
        description: 'Para proyectos que necesitan presencia sólida y captura de leads desde el primer día.',
        features: ['Hasta 5 secciones', 'Diseño a medida', 'WhatsApp estratégico', 'GTM + GA4', 'Formulario de leads', 'Animaciones básicas', '1 revisión', 'Entrega en 10 días'],
        highlighted: false,
    },
    {
        name: 'Conversión',
        price: '$1.500',
        monthly: '$90',
        description: 'El punto dulce. Diseño completo, tracking avanzado y copy orientado a convertir.',
        features: ['Hasta 8 secciones', 'Diseño a medida', 'WhatsApp strategic', 'GTM + GA4 + eventos custom', 'Formulario de leads', 'Animaciones completas', 'Orientación de copywriting', '2 revisiones', 'Entrega en 14 días'],
        highlighted: true,
    },
    {
        name: 'Premium',
        price: '$2.800',
        monthly: '$140',
        description: 'Para proyectos que exigen el máximo nivel de detalle, conversión y presentación.',
        features: ['Secciones ilimitadas', 'Diseño a medida', 'WhatsApp multi-punto', 'GTM + GA4 + funnel completo', 'Formulario de leads', 'Animaciones avanzadas', 'Copywriting incluido', '3 revisiones', 'Entrega en 21 días'],
        highlighted: false,
    },
]

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
        <section id='planes' className="bg-[#EDEFF3] py-20 md:py-32">
            {/* Recuperamos tu contenedor original con su ancho exacto */}
            <div className="container-site">
                <div ref={headRef} className="mb-12 md:mb-20 text-center">
                    {/*<h2 className="text-neutral-900 m-0 mb-3 max-w-[22ch] text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.03em]">
            Elige el nivel que necesita tu proyecto.
          </h2>*/}
                    <h2
                        className="m-0 mb-3 block text-black font-medium tracking-tighter drop-shadow-sm"
                        style={{
                            fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
                            lineHeight: 1.05,
                        }}
                    >
                        Elige el nivel que<br />necesita tu proyecto.
                    </h2>
                    <p className="text-sm text-neutral-900 m-0">
                        Todos los planes incluyen hosting, despliegue y soporte mensual.
                    </p>
                </div>

                {/* Cards independientes y redondeadas */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
                    {PLANS.map((plan, i) => (
                        <div
                            key={plan.name}
                            ref={el => { cardRefs.current[i] = el }}
                            className={`flex flex-col gap-6 p-6 md:p-8 rounded-xl shadow-xl shadow-neutral-200/60 ${plan.highlighted
                                ? 'bg-gradient-to-bl from-neutral-900 via-neutral-900 to-neutral-600'
                                : 'bg-white border border-neutral-200'
                                }`}
                        >
                            {/* Header */}
                            <div>
                                <div className="flex items-baseline justify-between mb-2">
                                    <span
                                        className={`text-sm font-medium ${plan.highlighted ? 'text-neutral-400' : 'text-neutral-500'
                                            }`}
                                    >
                                        {plan.name}
                                    </span>
                                    {plan.highlighted && (
                                        <span className="text-xs flex items-center uppercase tracking-wider bg-neutral-700/70 px-2.5 py-1.5 rounded-full text-neutral-200">
                                            <Sparkles className="text-amber-400 inline-block mr-1.5" size={12} />
                                            Recomendado
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-baseline gap-1.5 mb-3">
                                    <span
                                        className={`font-light leading-none text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.04em] ${plan.highlighted
                                            ? 'text-white'
                                            : 'text-neutral-900'
                                            }`}
                                    >
                                        {plan.price}
                                    </span>
                                    <span
                                        className={`text-xs ${plan.highlighted ? 'text-neutral-300' : 'text-neutral-700'
                                            }`}
                                    >
                                        USD
                                    </span>
                                </div>

                                <p
                                    className={`text-[0.8125rem] leading-relaxed mb-2 ${plan.highlighted ? 'text-neutral-300 font-light' : 'text-neutral-700'
                                        }`}
                                >
                                    {plan.description}
                                </p>

                                <p
                                    className={`text-xs m-0 ${plan.highlighted ? 'text-neutral-300' : 'text-neutral-700'
                                        }`}
                                >
                                    + {plan.monthly} USD / mes
                                </p>
                            </div>

                            {/* Divisor */}
                            <div
                                className={`h-px w-full ${plan.highlighted ? 'bg-neutral-800' : 'bg-neutral-200'
                                    }`}
                            />

                            {/* Features */}
                            <ul className="list-none p-0 m-0 flex flex-col gap-2.5 flex-1">
                                {plan.features.map(feature => (
                                    <li
                                        key={feature}
                                        className={`flex items-center gap-2.5 text-[0.8125rem] ${plan.highlighted ? 'text-neutral-300' : 'text-neutral-900'
                                            }`}
                                    >
                                        <Check
                                            size={13}
                                            strokeWidth={1.5}
                                            className={`shrink-0 ${plan.highlighted ? 'text-neutral-500' : 'text-neutral-400'
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
                                className={`flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium shadow-xl shadow-black/10 no-underline transition-opacity duration-200 hover:opacity-97 ${plan.highlighted
                                    ? 'bg-neutral-50 text-neutral-900'
                                    : 'bg-neutral-900 text-neutral-100'
                                    }`}
                            >
                                Empezar
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-[0.8125rem] text-neutral-700 mt-6 text-center">
                    ¿Tu proyecto tiene requerimientos específicos?{' '}
                    <a
                        href={getWhatsAppLink(undefined, true)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 rounded-md bg-gradient-to-bl from-blue-200 via-blue-100/70 to-blue-200 hover:opacity-90 transition-opacity"
                    >
                        Conversemos <ArrowUpRight className="w-4 h-4" />
                    </a>
                </p>
            </div>
        </section>
    )
}