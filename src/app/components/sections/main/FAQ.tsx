'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronRight, ArrowUpRight, } from 'lucide-react'

const FAQS = [
  { q: '¿El dominio está incluido?', a: 'El dominio lo registra el cliente a su nombre — eso garantiza que siempre sea de su propiedad. La configuración técnica y los DNS corren por nuestra cuenta.' },
  { q: '¿Qué pasa cuando el proyecto termina su ciclo de ventas?', a: 'La landing se apaga o redirige al sitio principal. El repositorio queda archivado por si hay una segunda etapa o un nuevo proyecto.' },
  { q: '¿Puedo pedir cambios después de publicado?', a: 'Sí. Cada plan incluye un número de cambios mensuales acordados. Los cambios fuera de ese límite se cotizan por separado.' },
  { q: '¿Qué necesito tener listo para empezar?', a: 'Los textos del proyecto, logotipo, paleta de colores si existe, y referencias visuales. Con eso es suficiente para arrancar.' },
  { q: '¿Trabajan con proyectos fuera de Colombia?', a: 'Sí. El servicio opera para cualquier proyecto en Latinoamérica. Los pagos se manejan en USD.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
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
      ;[headRef.current, ...itemRefs.current].forEach((el, i) => {
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(16px)'
        el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`
        observer.observe(el)
      })
    return () => observer.disconnect()
  }, [])

  // Configuración del enlace de WhatsApp con mensaje predeterminado
  const whatsappMessage = encodeURIComponent(
    "Hola, tengo una duda sobre el servicio de desarrollo de landing pages que no aparece en las preguntas frecuentes."
  );
  const whatsappUrl = `https://wa.me/573235619283?text=${whatsappMessage}`;

  return (
    <section
      id="faq"
      className="bg-[#EDEFF3]"
      style={{ paddingBlock: 'var(--section-py)' }}
    >
      <div className="container-site">
        <div
          ref={headRef}
          className="grid gap-[clamp(1rem,4vw,4rem)] items-end mb-[clamp(3rem,5vw,4rem)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          <h2
            className="m-0 block text-black text-center font-medium tracking-tighter drop-shadow-sm"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
              lineHeight: 1.05,
            }}
          >
            Preguntas frecuentes.
          </h2>
        </div>

        <div>
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              ref={el => { itemRefs.current[i] = el }}
              className="bg-white rounded-xl px-6 mb-3 shadow-xl shadow-neutral-200/40 border border-neutral-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full bg-transparent border-none cursor-pointer text-left py-5 flex items-center justify-between gap-6"
              >
                <span
                  className="text-[0.9375rem] tracking-tight transition-colors duration-200"
                  style={{
                    fontWeight: open === i ? 500 : 400,
                    color: open === i ? 'black' : 'var(--text-neutral-600, #606060)',
                  }}
                >
                  {faq.q}
                </span>
                <ChevronRight
                  size={16}
                  strokeWidth={1.5}
                  className="shrink-0 text-neutral-500 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(90deg)' : 'rotate(0deg)', color: open === i ? 'white' : undefined }}
                />
              </button>

              <div
                className="grid transition-all duration-300"
                style={{ gridTemplateRows: open === i ? '1fr' : '0fr', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-neutral-600 m-0 pb-5 max-w-[58ch]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloque inferior: Centrado de posición y texto original con el link embebido */}
        <div className="text-center flex justify-center w-full">
          <p className="text-[0.9375rem] leading-relaxed text-neutral-700 pt-10 m-0 max-w-[38ch]">
            ¿Algo más? Escríbenos directamente y lo resolvemos en la misma{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 rounded-md bg-gradient-to-bl from-blue-200 via-blue-100/70 to-blue-200 hover:opacity-90 transition-opacity"
            >
              conversación <ArrowUpRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}