// components/sections/FAQ.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { Plus } from 'lucide-react'

const FAQS = [
  { q: '¿El dominio está incluido?', a: 'El dominio lo registra el cliente a su nombre — eso garantiza que siempre sea de su propiedad. La configuración técnica y los DNS corren por nuestra cuenta.' },
  { q: '¿Qué pasa cuando el proyecto termina su ciclo de ventas?', a: 'La landing se apaga o redirige al sitio principal. El repositorio queda archivado por si hay una segunda etapa o un nuevo proyecto.' },
  { q: '¿Puedo pedir cambios después de publicado?', a: 'Sí. Cada plan incluye un número de cambios mensuales acordados. Los cambios fuera de ese límite se cotizan por separado.' },
  { q: '¿Qué necesito tener listo para empezar?', a: 'Los textos del proyecto, logotipo, paleta de colores si existe, y referencias visuales. Con eso es suficiente para arrancar.' },
  { q: '¿Trabajan con proyectos fuera de Colombia?', a: 'Sí. El servicio opera para cualquier proyecto en Latinoamérica. Los pagos se manejan en USD.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const headRef  = useRef<HTMLDivElement>(null)
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
      className="bg-neutral-900"
      style={{ paddingBlock: 'var(--section-py)' }}
    >
      <div className="container-site">
        <div
          ref={headRef}
          className="grid gap-[clamp(1rem,4vw,4rem)] items-end mb-[clamp(3rem,5vw,4rem)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          <h2 className="text-display-md text-white m-0 text-center">
            Preguntas
            frecuentes.
          </h2>
        </div>

        <div className="border-t border-neutral-800">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              ref={el => { itemRefs.current[i] = el }}
              className="border-b border-neutral-800"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full bg-transparent border-none cursor-pointer text-left py-5 flex items-center justify-between gap-6"
              >
                <span
                  className="text-[0.9375rem] tracking-tight transition-colors duration-200"
                  style={{
                    fontWeight: open === i ? 500 : 400,
                    color: open === i ? 'white' : 'var(--text-neutral-400, #a3a3a3)',
                  }}
                >
                  {faq.q}
                </span>
                <Plus
                  size={16}
                  strokeWidth={1.5}
                  className="shrink-0 text-neutral-500 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', color: open === i ? 'white' : undefined }}
                />
              </button>

              <div
                className="grid transition-all duration-300"
                style={{ gridTemplateRows: open === i ? '1fr' : '0fr', transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-neutral-400 m-0 pb-5 max-w-[58ch]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloque inferior: Centrado de posición y texto original con el link embebido */}
        <div className="text-center flex justify-center w-full">
          <p className="text-[0.9375rem] leading-relaxed text-neutral-200 pt-10 m-0 max-w-[38ch]">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline font-light hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-colors duration-200 ease-out cursor-pointer"
            >
              ¿Algo más? Escríbenos directamente y lo resolvemos en la misma conversación.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}