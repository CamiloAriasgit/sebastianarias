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

// Alturas del stack: comprimida (pasada/pendiente) vs expandida (activa)
const COLLAPSED_H = 64
const EXPANDED_H = 220

export default function Process() {
  const [active, setActive] = useState(0)
  const headRef = useRef<HTMLDivElement>(null)

  const sectionRef = useRef<HTMLDivElement>(null)
  const isSectionInView = useInView(sectionRef, { margin: '-35% 0px -35% 0px' })

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

        {/* ---------- DESKTOP / TABLET: stack de capas ---------- */}
        <div className="hidden md:block w-full max-w-3xl mx-auto">
          <div className="flex flex-col w-full rounded-[28px] overflow-hidden border border-neutral-800">
            {STEPS.map((step, i) => {
              const isActive = i === active
              const isPast = i < active
              const StepIcon = step.icon

              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActive(i)}
                  initial={false}
                  animate={{ height: isActive ? EXPANDED_H : COLLAPSED_H }}
                  transition={{ type: 'spring', stiffness: 280, damping: 32 }}
                  className="relative w-full text-left bg-black border-none cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 focus-visible:ring-inset"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid var(--color-border, #262626)',
                  }}
                  aria-current={isActive}
                  aria-label={`Paso ${step.number}: ${step.title}`}
                >
                  {/* Capa de fondo: distingue completada / activa / pendiente */}
                  <motion.div
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      backgroundColor: isActive
                        ? 'rgba(255,255,255,0.04)'
                        : isPast
                        ? 'rgba(255,255,255,0.015)'
                        : 'rgba(255,255,255,0)',
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative h-full flex items-start gap-5 px-6 md:px-8 py-0">
                    {/* Número + línea vertical de construcción */}
                    <div className="flex flex-col items-center h-full pt-5 shrink-0">
                      <span
                        className="text-label tabular-nums transition-colors duration-300"
                        style={{
                          color: isActive ? '#fff' : isPast ? 'var(--color-text-secondary, #a3a3a3)' : 'var(--color-text-muted, #525252)',
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        {step.number}
                      </span>
                      {i < STEPS.length - 1 && (
                        <span
                          className="w-px flex-1 mt-3 transition-colors duration-300"
                          style={{
                            backgroundColor: isPast ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)',
                          }}
                        />
                      )}
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 min-w-0 pt-5 pb-5">
                      <div className="flex items-center gap-3">
                        <motion.span
                          initial={false}
                          animate={{
                            color: isActive ? '#fff' : isPast ? 'var(--color-text-secondary, #a3a3a3)' : 'var(--color-text-muted, #525252)',
                          }}
                          className="shrink-0"
                        >
                          <StepIcon className="w-[18px] h-[18px]" />
                        </motion.span>
                        <h3
                          className="m-0 transition-colors duration-300"
                          style={{
                            fontSize: isActive ? '1.5rem' : '1.0625rem',
                            fontWeight: isActive ? 400 : 400,
                            letterSpacing: '-0.02em',
                            color: isActive ? '#fff' : isPast ? 'var(--color-text-secondary, #a3a3a3)' : 'var(--color-text-muted, #525252)',
                            transition: 'font-size 0.35s cubic-bezier(0.16,1,0.3,1), color 0.3s ease',
                          }}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 14 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[0.9375rem] leading-relaxed text-neutral-300 max-w-[46ch] overflow-hidden"
                          >
                            {step.body}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Progreso textual debajo del stack: refuerza "cuánto se ha construido" */}
          <div className="flex items-center justify-between mt-5 px-1">
            <span className="text-label text-neutral-500">
              {String(active + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
            </span>
            <div className="flex-1 mx-4 h-px bg-neutral-800 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                initial={false}
                animate={{ width: `${((active + 1) / STEPS.length) * 100}%` }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              />
            </div>
            <span className="text-label text-neutral-500">Publicado</span>
          </div>
        </div>

        {/* ---------- MOBILE: tarjeta única + control inferior simplificado ---------- */}
        <div className="md:hidden flex flex-col items-center w-full">
          <div className="w-full max-w-md min-h-[260px] relative flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-center flex flex-col items-center w-full"
              >
                <div className="mb-5 p-3.5 rounded-full border border-neutral-800 text-white">
                  {(() => {
                    const ActiveIcon = STEPS[active].icon
                    return <ActiveIcon className="w-6 h-6" />
                  })()}
                </div>
                <p className="text-label text-neutral-500 mb-2">Paso {STEPS[active].number}</p>
                <h3 className="text-white m-0 mb-3 text-2xl font-light" style={{ letterSpacing: '-0.02em' }}>
                  {STEPS[active].title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-neutral-300 m-0 max-w-[36ch]">
                  {STEPS[active].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* barra de progreso simple, también clicable por segmentos */}
          <div className="flex w-full max-w-md gap-1.5 mt-8">
            {STEPS.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActive(i)}
                aria-label={`Ir al paso ${step.number}`}
                className="flex-1 h-1 rounded-full bg-neutral-800 overflow-hidden border-none p-0 cursor-pointer"
              >
                <motion.div
                  className="h-full bg-white"
                  initial={false}
                  animate={{ width: i <= active ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}