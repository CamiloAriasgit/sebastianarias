// components/sections/Service.tsx
'use client'

import { useEffect, useRef } from 'react'

const FEATURES = [
    {
        title: 'Diseño a medida.',
        body: 'Sin plantillas. Cada landing refleja la identidad del proyecto — tipografía, paleta y composición definidas desde cero.',
    },
    {
        title: 'WhatsApp estratégico.',
        body: 'El botón está donde el comprador lo necesita, con el mensaje correcto predefinido. El contacto ocurre sin fricción.',
    },
    {
        title: 'GTM + GA4.',
        body: 'Cada clic, cada scroll, cada intención de contacto queda registrada. La pauta se optimiza con datos reales.',
    },
    {
        title: 'Velocidad real.',
        body: 'Construido en Next.js y desplegado en Vercel. Core Web Vitals en verde. El lead no espera.',
    },
    {
        title: 'Entrega en 14 días.',
        body: 'Proceso definido desde el briefing hasta la publicación. Sin sorpresas, sin retrasos innecesarios.',
    },
    {
        title: 'Soporte continuo.',
        body: 'El proyecto vive en nuestra infraestructura. Cambios, ajustes y monitoreo incluidos en la mensualidad.',
    },
]

export default function Service() {
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

        const els = [headRef.current, ...itemRefs.current].filter(Boolean)
        els.forEach((el, i) => {
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
                        marginBottom: 'clamp(3rem, 6vw, 5rem)',
                    }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                            fontWeight: 300,
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            color: 'var(--color-text-primary)',
                            margin: 0,
                        }}
                    >
                        Una landing construida
                        para el momento en que
                        el comprador decide.
                    </h2>

                    <p
                        style={{
                            fontSize: '0.9375rem',
                            lineHeight: 1.7,
                            color: 'var(--color-text-secondary)',
                            margin: 0,
                            maxWidth: '38ch',
                        }}
                    >
                        Cada elemento tiene un propósito.
                        Nada está ahí por decoración.
                    </p>
                </div>

                {/* Features */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '0',
                    }}
                >
                    {FEATURES.map((f, i) => (
                        <div
                            key={f.title}
                            ref={el => { itemRefs.current[i] = el }}
                            style={{
                                padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                                borderTop: '0.5px solid var(--color-border)',
                                borderRight: '0.5px solid var(--color-border)',
                                /* elimina el borde derecho en el último de cada fila */
                                transition: 'background 0.2s ease',
                            }}
                            onMouseEnter={e =>
                                (e.currentTarget.style.background = 'var(--color-surface)')
                            }
                            onMouseLeave={e =>
                                (e.currentTarget.style.background = 'transparent')
                            }
                        >
                            <h3
                                style={{
                                    fontSize: '0.9375rem',
                                    fontWeight: 500,
                                    letterSpacing: '-0.01em',
                                    color: 'var(--color-text-primary)',
                                    margin: '0 0 0.5rem',
                                }}
                            >
                                {f.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: '0.875rem',
                                    lineHeight: 1.65,
                                    color: 'var(--color-text-secondary)',
                                    margin: 0,
                                }}
                            >
                                {f.body}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}