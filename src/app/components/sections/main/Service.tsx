'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const FEATURES = [
    {
        title: 'Estética de producto, no de agencia.',
        body: 'El diseño sigue los estándares visuales que definen las marcas digitales de alto nivel hoy — tipografía con criterio, espaciado generoso, jerarquía clara. No reinventamos la rueda: aplicamos lo que ya funciona, adaptado a la identidad de tu proyecto.',
        image: '/images/code-and-interface.png',
    },
    {
        title: 'WhatsApp estratégico.',
        body: 'El botón no es un accesorio — es el punto de conversión. Está ubicado donde el inversionista lo necesita, en el momento en que decide, con un mensaje predefinido que reduce la fricción al mínimo. El contacto ocurre solo.',
        image: '/images/whatsapp-button.png',
    },
    {
        title: 'GTM + GA4.',
        body: 'Cada clic, cada scroll, cada intención de contacto queda registrada como un evento real. Tu equipo de pauta deja de optimizar a ciegas y empieza a tomar decisiones con datos. La inversión en anuncios rinde más desde el primer mes.',
        image: '/images/ga4-metrics.png',
    },
    {
        title: 'Velocidad real.',
        body: 'Construido en Next.js y desplegado en Vercel. Core Web Vitals en verde en móvil y desktop. Cada segundo de carga que se elimina es un inversionista que no se va antes de leer el primer párrafo.',
        image: '/images/page-speed.png',
    },
    {
        title: 'Entrega en 14 días.',
        body: 'El proceso está definido desde el briefing hasta la publicación: estructura, diseño, desarrollo, integraciones y revisiones. Sin fases abiertas ni retrasos indefinidos. En dos semanas el proyecto está activo y recibiendo tráfico.',
        image: '/images/image-service.webp',
    },
    {
        title: 'Soporte continuo.',
        body: 'El sitio evoluciona con el proyecto. Si el copy necesita ajustarse después de ver el comportamiento inicial del tráfico, o si una sección deja de funcionar, está cubierto. No es mantenimiento reactivo — es acompañamiento activo.',
        image: '/images/edit-feature.png',
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
            className="bg-neutral-900"
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

                    <div className="sticky top-[12vh] md:top-[15vh] h-[75vh] md:h-[70vh] flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-[clamp(2rem,6vw,5rem)] pointer-events-none relative">

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
                        <div className="w-full md:flex-1 order-2 md:order-1 max-w-[480px] relative h-[140px] md:h-[180px]">
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
                                    <h3 className="text-[1.125rem] md:text-[1.25rem] font-medium tracking-tight text-white m-0 mb-2 md:mb-3">
                                        {f.title}
                                    </h3>
                                    <p className="text-[0.875rem] md:text-[0.9375rem] leading-relaxed text-neutral-200 m-0 balance">
                                        {f.body}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Indicador de scroll: modificado para reproducirse solo 3 veces */}
                        <div
                            className="absolute bottom-[clamp(1rem,3vh,2.5rem)] left-1/2 md:left-[clamp(1rem,3vw,2rem)] -translate-x-1/2 md:translate-x-0 flex flex-col items-center gap-1 transition-opacity duration-500 ease-in-out pointer-events-auto"
                            style={{
                                opacity: activeIndex === 0 ? 1 : 0,
                            }}
                            aria-hidden="true"
                        >
                            <span className="w-[40px] h-[40px] rounded-full border-1 border-white/20 bg-white/10 box-border block animate-[scroll-hint-rise_2s_ease-in-out_3_forwards]" />
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

            {/* Inyección global de la animación clave */}
            <style jsx global>{`
                @keyframes scroll-hint-rise {
                    0% {
                        transform: translateY(120px);
                        opacity: 0;
                    }
                    20% {
                        opacity: 1;
                    }
                    80% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(50px);
                        opacity: 0;
                    }
                }
            `}</style>
        </section>
    )
}