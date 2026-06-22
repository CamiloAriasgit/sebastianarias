'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { 
  MessageSquare, 
  Layers, 
  Palette, 
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
    icon: Palette 
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
  
  const sectionRef = useRef<HTMLDivElement>(null)
  const isSectionInView = useInView(sectionRef, { margin: "-35% 0px -35% 0px" })

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
        {/* Título centrado en la sección */}
        <div ref={headRef} className="mb-[clamp(3rem,6vw,5rem)] flex flex-col items-center text-center">
          <h2 className="text-display-md text-white m-0 max-w-[28ch]">
            De briefing a publicado. <br />
            Sin fricciones.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          {/*
            MARCO FIJO: esta tarjeta es el contenedor predecible que faltaba.
            Su tamaño, borde y posición NUNCA cambian al cambiar de paso —
            solo lo que hay dentro se anima. El usuario aprende en el primer
            clic dónde y cómo va a cambiar el contenido, y esa expectativa
            se cumple en cada paso siguiente.
          */}
          <div
            className="relative w-full max-w-2xl rounded-[28px] bg-neutral-950 px-8 py-12 md:px-12 md:py-14 overflow-hidden"
            style={{ minHeight: 340 }}
          >
            {/* Marca de progreso integrada al marco, no al contenido */}
            <div className="absolute top-0 left-0 right-0 h-px bg-neutral-800">
              <motion.div
                className="h-full bg-white"
                initial={false}
                animate={{ width: `${((active + 1) / STEPS.length) * 100}%` }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              />
            </div>

            <div
              className="h-full flex flex-col items-center justify-center text-center"
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center w-full"
                >
                  <motion.div 
                    initial={{ rotate: -10, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="mb-6 p-4 rounded-full bg-neutral-900 text-white"
                  >
                    <ActiveIcon className="w-7 h-7" />
                  </motion.div>

                  <p className="text-label text-neutral-500 mb-3">
                    Paso {STEPS[active].number} de {STEPS.length}
                  </p>
                  
                  <h3
                    className="text-white m-0 mb-4"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.15 }}
                  >
                    {STEPS[active].title}
                  </h3>
                  
                  <p className="text-[0.9375rem] leading-relaxed text-neutral-300 m-0 max-w-[42ch]">
                    {STEPS[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Fijo — sin cambios respecto al original */}
      <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none flex justify-center px-4">
        <AnimatePresence>
          {isSectionInView && (
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 80, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="pointer-events-auto flex items-center justify-between md:justify-start p-1.5 bg-neutral-900 rounded-full shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] w-full md:w-auto max-w-full gap-1"
            >
              {STEPS.map((step, i) => {
                const StepIcon = step.icon
                return (
                  <button
                    key={step.number}
                    onClick={() => setActive(i)}
                    aria-current={active === i}
                    aria-label={`Ver paso ${step.number}: ${step.title}`}
                    className="relative flex-1 md:flex-none p-3 md:px-5 md:py-2.5 bg-transparent border-none cursor-pointer rounded-full flex items-center justify-center gap-2 transition-colors duration-200 select-none outline-none focus-visible:ring-2 focus-visible:ring-white/60 group"
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
                      <span className="hidden md:inline">{step.title}</span>
                    </span>

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