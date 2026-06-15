'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const FEATURES = [
    {
        title: 'Diseño a medida.',
        body: 'Sin plantillas. Cada landing refleja la identidad del proyecto — tipografía, paleta y composición definidas desde cero.',
        image: '/images/image-service.webp'
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
            { threshold: 0.1 }
        )

        if (headRef.current) observer.observe(headRef.current)

        itemRefs.current.forEach((el, i) => {
            if (!el) return
            el.style.opacity = '0'
            el.style.transform = 'translateY(30px)'
            el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 50}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 50}ms`
            observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section
            className="bg-[var(--color-bg)]"
            style={{ paddingBlock: 'var(--section-py)' }}
        >
            <div className="container-site">
                {/* Cabecera Centrada (1 Columna) */}
                <div
                    ref={headRef}
                    className="flex flex-col items-center text-center gap-4 mb-[clamp(4rem,8vw,8rem)]"
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

                {/* Estructura en Zig-Zag */}
                <div className="flex flex-col gap-[clamp(4rem,10vw,12rem)]">
                    {FEATURES.map((f, i) => {
                        const isEven = i % 2 === 0

                        return (
                            <div
                                key={f.title}
                                ref={el => { itemRefs.current[i] = el }}
                                className={`flex flex-col md:items-center gap-[clamp(2rem,6vw,5rem)] ${
                                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Bloque de Texto */}
                                <div className="flex-1 max-w-[480px]">
                                    <h3 className="text-[1.25rem] font-medium tracking-tight text-[var(--color-text-primary)] m-0 mb-3">
                                        {f.title}
                                    </h3>
                                    <p className="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)] m-0 balance">
                                        {f.body}
                                    </p>
                                </div>

                                {/* Contenedor Autoadaptable al Proporción Original de la Imagen */}
                                <div className="flex-1 w-full bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-[var(--color-border)] self-start md:self-auto">
                                    <Image
                                        src={f.image}
                                        alt={f.title}
                                        width={0}
                                        height={0}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                        className="object-contain"
                                        quality={90}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}