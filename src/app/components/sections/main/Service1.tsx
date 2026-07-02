'use client'

import { useEffect, useRef } from 'react'
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
    title: 'Entrega en 10-14 días, una vez recibido el contenido.',
    body: 'El proceso está definido desde el briefing hasta la publicación: estructura, diseño, desarrollo, integraciones y revisiones. Sin fases abiertas ni retrasos indefinidos. En dos semanas el proyecto está activo y recibiendo tráfico.',
    image: '/images/calendar-icon.png',
  },
  {
    title: 'Soporte continuo.',
    body: 'El sitio evoluciona con el proyecto. Si el copy necesita ajustarse después de ver el comportamiento inicial del tráfico, o si una sección deja de funcionar, está cubierto. No es mantenimiento reactivo — es acompañamiento activo.',
    image: '/images/edit-text.png',
  },
]

export default function Service() {
  const headRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        })
      },
      { threshold: 0.15 }
    )

    ;[headRef.current, ...rowRefs.current].forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i === 0 ? 0 : 60}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i === 0 ? 0 : 60}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#f8f8ff]" style={{ paddingBlock: 'var(--section-py)' }}>
      <div className="container-site">

        {/* Cabecera */}
        <div
          ref={headRef}
          className="flex flex-col items-center text-center gap-4 mb-[clamp(4rem,8vw,7rem)]"
        >
          {/*<h2 className="text-display-md text-[var(--color-text-primary)] m-0 max-w-[24ch]">
            Una landing construida para el momento en que el comprador decide.
          </h2>*/}
          <h2
            className="m-0 block text-black font-medium tracking-tighter drop-shadow-sm"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
              lineHeight: 1.05,
            }}
          >
            Una landing construida para el momento en que el comprador decide.
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-black m-0 max-w-[42ch]">
            Cada elemento tiene un propósito. Nada está ahí por decoración.
          </p>
        </div>

        {/* Filas — alternando imagen izq/der */}
        <div className="flex flex-col gap-[clamp(3.5rem,8vw,7rem)]">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              ref={el => { rowRefs.current[i] = el }}
              className={`grid items-center gap-8 md:gap-[clamp(2rem,5vw,4rem)] ${
                i % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
            >
              {/* Imagen */}
              <div
                className="relative w-full rounded-2xl overflow-hidden order-1"
                style={{ direction: 'ltr' }}
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="object-cover"
                  quality={88}
                  priority={i === 0}
                />
              </div>

              {/* Texto */}
              <div className="order-2 max-w-[480px]" style={{ direction: 'ltr' }}>
                <h3 className="text-[1.25rem] md:text-[1.5rem] font-medium tracking-tighter text-black m-0 mb-3" style={{ letterSpacing: '-0.015em' }}>
                  {f.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-neutral-900 m-0">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}