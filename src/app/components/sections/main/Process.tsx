'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { 
  MessageSquare, 
  Layers, 
  Layers3, 
  Settings, 
  Rocket,
  LucideIcon 
} from 'lucide-react'

interface Step {
  number: string
  title: string
  body: string
  icon: LucideIcon
}

const STEPS: Step[] = [
  { 
    number: '01', 
    title: 'Briefing', 
    body: 'Entendemos el proyecto, el comprador objetivo, y lo que necesita sentir al llegar a la página. Sin formularios largos — una conversación.',
    icon: MessageSquare 
  },
  { 
    number: '02', 
    title: 'Estructura', 
    body: 'Se define la arquitectura de conversión: qué secciones, en qué orden, con qué intención. El esqueleto antes del diseño.',
    icon: Layers 
  },
  { 
    number: '03', 
    title: 'Diseño y desarrollo', 
    body: 'Se construye sobre Next.js con animaciones, tipografía y paleta alineadas a la marca del proyecto. Sin plantillas.',
    icon: Layers3 
  },
  { 
    number: '04', 
    title: 'Integraciones', 
    body: 'GTM, GA4, formulario de leads y WhatsApp configurados y probados. Cada evento de conversión verificado antes de publicar.',
    icon: Settings 
  },
  { 
    number: '05', 
    title: 'Publicación', 
    body: 'El sitio queda activo en el dominio del cliente. Desde ese momento, cada visita es medible y cada lead es rastreable.',
    icon: Rocket 
  },
]

export default function Process() {
  const [active, setActive] = useState(0)
  const headRef = useRef<HTMLDivElement>(null)
  
  // Ref para detectar la presencia de toda la sección en el viewport
  const sectionRef = useRef<HTMLDivElement>(null)
  // useInView de framer-motion con un margen para activarse en el "punto exacto"
  const isSectionInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" })

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
    if (headRef.current) {
      headRef.current.style.opacity = '0'
      headRef.current.style.transform = 'translateY(20px)'
      headRef.current.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)`
      observer.observe(headRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const ActiveIcon = STEPS[active].icon

  return (
    <section
      ref={sectionRef}
      className="bg-black relative"
      style={{ paddingBlock: 'var(--section-py)' }}
    >
      <div className="container-site">
        <div ref={headRef} className="mb-[clamp(3rem,6vw,5rem)]">
          <h2 className="text-display-md text-[var(--color-text-primary)] m-0 max-w-[22ch]">
            De briefing a publicado. <br />
            Sin fricciones.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center w-full min-h-[50vh]">
          {/* Contenedor del Detalle Dinámico */}
          <div className="w-full max-w-2xl min-h-[280px] relative flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center flex flex-col items-center w-full"
              >
                <motion.div 
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="mb-6 p-4 rounded-full bg-[var(--color-border)] text-[var(--color-text-primary)]"
                >
                  <ActiveIcon className="w-8 h-8" />
                </motion.div>

                <p className="text-label text-[var(--color-text-muted)] mb-3">
                  Paso {STEPS[active].number}
                </p>
                
                <h3
                  className="text-[var(--color-text-primary)] m-0 mb-4"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                >
                  {STEPS[active].title}
                </h3>
                
                <p className="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[42ch]">
                  {STEPS[active].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navbar Fijo / Flotante en la parte inferior */}
      <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none flex justify-center px-4">
        <AnimatePresence>
          {isSectionInView && (
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 80, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="pointer-events-auto flex items-center p-1.5 bg-black/80 backdrop-blur-md border border-[var(--color-border)] rounded-full shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] max-w-full gap-1"
            >
              {STEPS.map((step, i) => {
                const StepIcon = step.icon
                return (
                  <button
                    key={step.number}
                    onClick={() => setActive(i)}
                    className="relative p-3 md:px-5 md:py-2.5 bg-transparent border-none cursor-pointer rounded-full flex items-center justify-center gap-2 transition-colors duration-200 select-none outline-none group"
                    style={{ 
                      color: active === i ? 'var(--color-bg-primary, #000)' : 'var(--color-text-secondary)'
                    }}
                  >
                    {active === i && (
                      <motion.div
                        layoutId="active-pill-fixed"
                        className="absolute inset-0 bg-[var(--color-text-primary)] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        style={{ zIndex: 0 }}
                      />
                    )}
                    
                    <span className="relative z-10 flex items-center gap-2 text-base" style={{ fontWeight: active === i ? 500 : 400 }}>
                      <StepIcon className="w-5 h-5 md:w-4 md:h-4 shrink-0" />
                      {/* Oculto en móviles, visible de md en adelante */}
                      <span className="hidden md:inline">{step.title}</span>
                    </span>

                    {/* Tooltip creativo para móviles cuando NO está activo */}
                    <span className="md:hidden absolute bottom-full mb-3 hidden group-hover:block bg-[var(--color-border)] text-[var(--color-text-primary)] text-xs px-2.5 py-1 rounded-md whitespace-nowrap pointer-events-none shadow-lg">
                      {step.title}
                    </span>
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}