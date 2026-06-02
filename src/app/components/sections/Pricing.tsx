// components/sections/Pricing.tsx
'use client'

import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'

const WHATSAPP_URL =
    'https://wa.me/57TUNUMERO?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const PLANS = [
    {
        name: 'Esencial',
        price: '$800',
        monthly: '$60',
        description: 'Para proyectos que necesitan presencia sólida y captura de leads desde el primer día.',
        features: [
            'Hasta 5 secciones',
            'Diseño a medida',
            'WhatsApp estratégico',
            'GTM + GA4',
            'Formulario de leads',
            'Animaciones básicas',
            '1 revisión',
            'Entrega en 10 días',
        ],
        highlighted: false,
    },
    {
        name: 'Conversión',
        price: '$1.500',
        monthly: '$90',
        description: 'El punto dulce. Diseño completo, tracking avanzado y copy orientado a convertir.',
        features: [
            'Hasta 8 secciones',
            'Diseño a medida',
            'WhatsApp estratégico',
            'GTM + GA4 + eventos custom',
            'Formulario de leads',
            'Animaciones completas',
            'Orientación de copywriting',
            '2 revisiones',
            'Entrega en 14 días',
        ],
        highlighted: true,
    },
    {
        name: 'Premium',
        price: '$2.800',
        monthly: '$140',
        description: 'Para proyectos que exigen el máximo nivel de detalle, conversión y presentación.',
        features: [
            'Secciones ilimitadas',
            'Diseño a medida',
            'WhatsApp multi-punto',
            'GTM + GA4 + funnel completo',
            'Formulario de leads',
            'Animaciones avanzadas',
            'Copywriting incluido',
            '3 revisiones',
            'Entrega en 21 días',
        ],
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
                    el.style.opacity = '1'
                    el.style.transform = 'translateY(0)'
                    observer.unobserve(el)
                })
            },
            { threshold: 0.1 }
        )

            ;[headRef.current, ...cardRefs.current].forEach((el, i) => {
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
                    <p style={{
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-light-muted)',
                        marginBottom: '1.25rem',
                    }}>
                        Planes
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                        fontWeight: 300,
                        lineHeight: 1.1,
                        letterSpacing: '-0.03em',
                        color: 'var(--color-light-text)',
                        margin: '0 0 1rem',
                        maxWidth: '22ch',
                    }}>
                        Elige el nivel que
                        necesita tu proyecto.
                    </h2>
                    <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-light-muted)',
                        margin: 0,
                    }}>
                        Todos los planes incluyen hosting, despliegue y soporte mensual.
                    </p>
                </div>

                {/* Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1px',
                    background: 'var(--color-light-border)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}>
                    {PLANS.map((plan, i) => (
                        <div
                            key={plan.name}
                            ref={el => { cardRefs.current[i] = el }}
                            style={{
                                background: plan.highlighted
                                    ? 'var(--color-light-text)'
                                    : 'var(--color-light-bg)',
                                padding: 'clamp(1.5rem, 3vw, 2rem)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                            }}
                        >
                            {/* Header del plan */}
                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    justifyContent: 'space-between',
                                    marginBottom: '0.5rem',
                                }}>
                                    <span style={{
                                        fontSize: '0.8125rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.02em',
                                        color: plan.highlighted
                                            ? 'rgba(245,245,240,0.6)'
                                            : 'var(--color-light-muted)',
                                    }}>
                                        {plan.name}
                                    </span>
                                    {plan.highlighted && (
                                        <span style={{
                                            fontSize: '0.6875rem',
                                            fontWeight: 500,
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                            color: 'rgba(245,245,240,0.5)',
                                        }}>
                                            Recomendado
                                        </span>
                                    )}
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    gap: '0.375rem',
                                    marginBottom: '0.875rem',
                                }}>
                                    <span style={{
                                        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                                        fontWeight: 300,
                                        letterSpacing: '-0.04em',
                                        lineHeight: 1,
                                        color: plan.highlighted
                                            ? 'var(--color-accent)'
                                            : 'var(--color-light-text)',
                                    }}>
                                        {plan.price}
                                    </span>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: plan.highlighted
                                            ? 'rgba(245,245,240,0.5)'
                                            : 'var(--color-light-muted)',
                                    }}>
                                        USD
                                    </span>
                                </div>

                                <p style={{
                                    fontSize: '0.8125rem',
                                    lineHeight: 1.6,
                                    color: plan.highlighted
                                        ? 'rgba(245,245,240,0.6)'
                                        : 'var(--color-light-muted)',
                                    margin: '0 0 0.5rem',
                                }}>
                                    {plan.description}
                                </p>

                                <p style={{
                                    fontSize: '0.75rem',
                                    color: plan.highlighted
                                        ? 'rgba(245,245,240,0.4)'
                                        : 'var(--color-light-muted)',   // antes tenía filter contrast(3)
                                    margin: 0,
                                }}>
                                    + {plan.monthly} USD / mes
                                </p>
                            </div>

                            {/* Divisor */}
                            <div style={{
                                height: '0.5px',
                                background: plan.highlighted
                                    ? 'rgba(245,245,240,0.15)'
                                    : 'var(--color-light-border)',
                            }} />

                            {/* Features */}
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.625rem',
                                flex: 1,
                            }}>
                                {plan.features.map(feature => (
                                    <li
                                        key={feature}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.625rem',
                                            fontSize: '0.8125rem',
                                            color: plan.highlighted
                                                ? 'rgba(245,245,240,0.8)'
                                                : 'var(--color-light-text)',
                                        }}
                                    >
                                        <Check
                                            size={13}
                                            strokeWidth={1.5}
                                            style={{
                                                flexShrink: 0,
                                                color: plan.highlighted
                                                    ? 'rgba(245,245,240,0.5)'
                                                    : 'var(--color-light-muted)',
                                            }}
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
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem',
                                    borderRadius: '6px',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    transition: 'opacity 0.2s ease',
                                    background: plan.highlighted
                                        ? 'var(--color-light-bg)'
                                        : 'transparent',
                                    color: plan.highlighted
                                        ? 'var(--color-light-text)'
                                        : 'var(--color-light-text)',
                                    border: plan.highlighted
                                        ? 'none'
                                        : '0.5px solid var(--color-light-border)',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                            >
                                Empezar
                            </a>
                        </div>
                    ))}
                </div>

                {/* Nota */}
                <p style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-light-muted)',
                    marginTop: '1.5rem',
                    textAlign: 'center',
                }}>
                    ¿Tu proyecto tiene requerimientos específicos?{' '}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'var(--color-light-text)',
                            textDecoration: 'none',
                            borderBottom: '0.5px solid var(--color-light-border)',
                            paddingBottom: '1px',
                        }}
                    >
                        Conversemos.
                    </a>
                </p>

            </div>
        </section>
    )
}