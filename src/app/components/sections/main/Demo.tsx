'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight, Info, SquareArrowOutUpRight } from 'lucide-react'

export default function Demo() {
  const headRef    = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

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
    ;[headRef.current, previewRef.current].forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 140}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 140}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

return (
  <section
    id="demo"
    className="bg-[#f8f8ff]" // Quitamos min-h-svh, flex, flex-col y justify-center
    style={{ paddingBlock: 'var(--section-py)' }}
  >
    <div className="container-site">
        <div
          ref={headRef}
          className="grid gap-[clamp(1rem,4vw,4rem)] items-end mb-[clamp(2.5rem,5vw,4rem)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          <div>
            <h2
            className="m-0 block text-black font-medium tracking-tight drop-shadow-sm"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 3.5rem)',
              lineHeight: 1.05,
            }}
          >
            Así se ve<br />
            en la práctica.
          </h2>
          </div>
          <p className="text-[0.9375rem] leading-relaxed text-neutral-700 m-0 max-w-[38ch]">
            Una landing construida para convertir.
            Diseño, tracking y WhatsApp estratégico
            funcionando desde el primer día.
          </p>
        </div>

        <div ref={previewRef}>
          <a
            href="#demo"
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline relative rounded-[10px] overflow-hidden transition-colors duration-300 group"
          >
            {/* Imagen de fondo */}
            <div className="w-full relative flex items-center justify-center">
              <img 
                src="/images/hero-demo.png" 
                alt="Vista previa de la Demo" 
                className="w-full h-auto block"
              />
              
              {/* Rectángulo Negro en la Esquina Inferior Derecha (Estilo High-End) */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-md text-[10px] font-medium tracking-wider z-10 border border-black select-none">
                <Info size={12} className="opacity-90" />
                <span>PROXIMAMENTE</span>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0a0a0a]/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 bg-[var(--color-text-primary)] text-[var(--color-bg)] px-5 py-3 rounded-md text-sm font-medium">
                Ver demo
                <ArrowUpRight size={15} strokeWidth={2} />
              </div>
            </div>
          </a>

          <p className="text-xs text-neutral-600 font-light mt-4 tracking-wide text-center">
            Proyecto ficticio · Muestra del estándar de entrega
          </p>
        </div>
      </div>
    </section>
  )
}