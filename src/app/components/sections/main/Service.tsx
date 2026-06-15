'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const FEATURES = [
    {
        title: 'Diseño a medida.',
        body: 'Sin plantillas. Cada landing refleja la identidad del proyecto — tipografía, paleta y composición definidas desde cero.',
        image: '/images/frontend-dev-interface.png'
    },
    {
        title: 'WhatsApp estratégico.',
        body: 'El botón está donde el comprador lo necesita, con el mensaje correcto predefinido. El contacto ocurre sin fricción.',
        image: '/images/whatsapp-button.png'
    },
    {
        title: 'GTM + GA4.',
        body: 'Cada clic, cada scroll, cada intención de contacto queda registrada. La pauta se optimiza con datos reales.',
        image: '/images/image-service.webp'
    },
    {
        title: 'Velocidad real.',
        body: 'Construido en Next.js y desplegado en Vercel. Core Web Vitals en verde. El lead no espera.',
        image: '/images/image-service.webp'
    },
    {
        title: 'Entrega en 14 días.',
        body: 'Proceso definido desde el briefing hasta la publicación. Sin sorpresas, sin retrasos innecesarios.',
        image: '/images/image-service.webp'
    },
    {
        title: 'Soporte continuo.',
        body: 'El sitio evoluciona con el proyecto. Si el copy necesita ajustarse o el comportamiento del tráfico pide un cambio, está cubierto.',
        image: '/images/image-service.webp'
    },
]

export default function Service() {
    const headRef = useRef<HTMLDivElement>(null)
    const triggerRefs = useRef<(HTMLDivElement | null)[]>([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const headObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement
                    el.style.opacity = '1'
                    el.style.transform = 'translateY(0)'
                    headObserver.unobserve(el)
                }
            },
            { threshold: 0.1 }
        )

        if (headRef.current) headObserver.observe(headRef.current)

        const featureObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'))
                        setActiveIndex(index)
                    }
                })
            },
            {
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0.1
            }
        )

        triggerRefs.current.forEach((el) => {
            if (el) featureObserver.observe(el)
        })

        return () => {
            headObserver.disconnect()
            featureObserver.disconnect()
        }
    }, [])

    return (
        <section
            className="bg-[var(--color-bg)]"
            style={{ paddingBlock: 'var(--section-py)' }}
        >
            <div className="container-site">
                <div
                    ref={headRef}
                    className="flex flex-col items-center text-center gap-4 mb-[clamp(3rem,6vw,8rem)]"
                    style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)'
                    }}
                >
                    <h2 className="text-display-md text-[var(--color-text-primary)] m-0 max-w-[24ch]">
                        Una landing construida para el momento en que el comprador decide.
                    </h2>
                    <p className="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[42ch]">
                        Cada elemento tiene un propósito. Nada está ahí por decoración.
                    </p>
                </div>

                <div className="relative w-full">
                    
                    <div className="sticky top-[12vh] md:top-[15vh] h-[75vh] md:h-[70vh] flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-[clamp(2rem,6vw,5rem)] pointer-events-none">
                        
                        {/* Bloque de Imagen Única (Proporción 1:1) */}
                        <div className="w-full md:flex-1 order-1 md:order-2 relative aspect-square max-w-[480px]">
                            {FEATURES.map((f, i) => (
                                <div
                                    key={`image-${f.title}`}
                                    className="absolute inset-0 transition-opacity duration-700 ease-in-out rounded-2xl overflow-hidden"
                                    style={{
                                        opacity: activeIndex === i ? 1 : 0,
                                        pointerEvents: activeIndex === i ? 'auto' : 'none'
                                    }}
                                >
                                    <Image
                                        src={f.image}
                                        alt={f.title}
                                        fill
                                        sizes="(max-width: 768px) 90vw, 50vw"
                                        className="object-cover"
                                        quality={90}
                                        priority={i === 0}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Bloque de Texto Único */}
                        <div className="w-full md:flex-1 order-2 md:order-1 max-w-[480px] relative h-[140px] md:h-[180px] text-center md:text-left">
                            {FEATURES.map((f, i) => (
                                <div
                                    key={`text-${f.title}`}
                                    className="absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out"
                                    style={{
                                        opacity: activeIndex === i ? 1 : 0,
                                        transform: activeIndex === i ? 'translateY(0)' : 'translateY(8px)',
                                        pointerEvents: activeIndex === i ? 'auto' : 'none'
                                    }}
                                >
                                    <h3 className="text-[1.125rem] md:text-[1.25rem] font-medium tracking-tight text-[var(--color-text-primary)] m-0 mb-2 md:mb-3">
                                        {f.title}
                                    </h3>
                                    <p className="text-[0.875rem] md:text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)] m-0 balance">
                                        {f.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Triggers invisibles para el scroll */}
                    <div className="relative z-10 pointer-events-none">
                        {FEATURES.map((f, i) => (
                            <div
                                key={`trigger-${f.title}`}
                                ref={el => { triggerRefs.current[i] = el }}
                                data-index={i}
                                className="h-[50vh] md:h-[80vh] first:mt-[-40vh] md:first:mt-[-50vh]"
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}