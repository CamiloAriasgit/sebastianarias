'use client'

import { useEffect, useRef, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/57TUNUMERO?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const NOTIFICATIONS = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    preview: 'Buenas, vi el proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?',
    time: 'ahora',
  },
  {
    id: 2,
    name: 'Valeria Ríos',
    preview: 'Hola, me interesa el de 2 hab. ¿Tienen sala de ventas este fin de semana?',
    time: '1 min',
  },
  {
    id: 3,
    name: 'Andrés Castillo',
    preview: '¿Aún hay unidades en el piso 8? Vi los planos y me convencieron.',
    time: '3 min',
  },
]

const WaIcon = ({ size = 9 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
  </svg>
)

type Notif = typeof NOTIFICATIONS[0]

// Configuración de escala y offset por posición en el stack
// índice 0 = frente, 2 = fondo
const STACK_CONFIG = [
  { scale: 1,     translateY: 0,   opacity: 1,    zIndex: 30, widthClass: '' },
  { scale: 0.94,  translateY: -14, opacity: 0.7,  zIndex: 20, widthClass: 'mx-4' },
  { scale: 0.88,  translateY: -24, opacity: 0.4,  zIndex: 10, widthClass: 'mx-8' },
]

const NotifCard = ({
  n,
  style,
  className = '',
  cardRef,
}: {
  n: Notif
  style?: React.CSSProperties
  className?: string
  cardRef?: (el: HTMLDivElement | null) => void
}) => (
  <div
    ref={cardRef}
    className={`rounded-2xl px-3 py-2.5 bg-white/[0.07] backdrop-blur-md border border-white/[0.09] ${className}`}
    style={style}
  >
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 rounded-md flex items-center justify-center shrink-0 bg-[#25d366]">
          <WaIcon />
        </div>
        <span className="text-[0.5625rem] font-medium text-[var(--color-text-secondary)] tracking-wide">
          WhatsApp
        </span>
      </div>
      <span className="text-[0.5rem] text-[var(--color-text-muted)]">{n.time}</span>
    </div>
    <p className="text-[0.6875rem] font-medium text-[var(--color-text-primary)] m-0 mb-0.5">
      {n.name}
    </p>
    <p
      className="text-[0.5625rem] text-[var(--color-text-secondary)] m-0 leading-relaxed"
      style={{
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}
    >
      {n.preview}
    </p>
  </div>
)

// Stack apilado — desktop y móvil comparten lógica, solo cambia el contenedor
const NotifStack = ({ visible }: { visible: boolean }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!visible) return
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      // Estado inicial — todos abajo y transparentes
      el.style.opacity = '0'
      el.style.transform = `translateY(20px) scale(${STACK_CONFIG[i].scale})`
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${600 + i * 300}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${600 + i * 300}ms`

      setTimeout(() => {
        if (!el) return
        el.style.opacity = String(STACK_CONFIG[i].opacity)
        el.style.transform = `translateY(${STACK_CONFIG[i].translateY}px) scale(${STACK_CONFIG[i].scale})`
      }, 60)
    })
  }, [visible])

  return (
    // El stack usa position relative con altura fija para que las cards
    // absolutas no colapsen el contenedor
    <div className="relative w-full" style={{ height: '88px' }}>
      {/* Renderizamos en orden inverso para que el z-index funcione bien */}
      {[...NOTIFICATIONS].reverse().map((n, reversedI) => {
        const i = NOTIFICATIONS.length - 1 - reversedI
        const cfg = STACK_CONFIG[i]
        return (
          <div
            key={n.id}
            ref={el => { cardRefs.current[i] = el }}
            className={`absolute inset-x-0 ${cfg.widthClass}`}
            style={{
              zIndex: cfg.zIndex,
              bottom: 0,
              transformOrigin: 'bottom center',
            }}
          >
            <NotifCard n={n} />
          </div>
        )
      })}
    </div>
  )
}

export default function Hero() {
  const lineOneRef   = useRef<HTMLSpanElement>(null)
  const lineTwoRef   = useRef<HTMLSpanElement>(null)
  const lineThreeRef = useRef<HTMLSpanElement>(null)
  const paraRef      = useRef<HTMLParagraphElement>(null)
  const footerRef    = useRef<HTMLDivElement>(null)
  const desktopNotif = useRef<HTMLDivElement>(null)
  const [stackVisible, setStackVisible] = useState(false)

  useEffect(() => {
    ;[
      { ref: lineOneRef,   delay: 0   },
      { ref: lineTwoRef,   delay: 100 },
      { ref: lineThreeRef, delay: 200 },
      { ref: paraRef,      delay: 280 },
      { ref: footerRef,    delay: 340 },
    ].forEach(({ ref, delay }) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(14px)'
      ref.current.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 60)
    })

    // Desktop notifs container
    if (desktopNotif.current) {
      desktopNotif.current.style.opacity = '0'
      desktopNotif.current.style.transform = 'translateY(20px)'
      desktopNotif.current.style.transition =
        'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 380ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 380ms'
      setTimeout(() => {
        if (!desktopNotif.current) return
        desktopNotif.current.style.opacity = '1'
        desktopNotif.current.style.transform = 'translateY(0)'
      }, 60)
    }

    // Activa el stack después de que el contenedor entra
    setTimeout(() => setStackVisible(true), 400)
  }, [])

  return (
    <section
      className="bg-[var(--color-bg)] h-svh grid pt-14"
      style={{ gridTemplateRows: '1fr auto' }}
    >
      <div className="container-site flex flex-col justify-center">
        <div
          className="grid items-center gap-8 md:gap-[clamp(2rem,5vw,4rem)]"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >

          {/* Izquierda — headline + párrafo en móvil también */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h1
              className="m-0"
              style={{
                fontSize: 'clamp(2.5rem, 6.5vw, 7.5rem)',
                fontWeight: 300,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
              }}
            >
              <span ref={lineOneRef} className="block text-[var(--color-text-primary)] whitespace-nowrap">
                Landing pages
              </span>
              <span ref={lineTwoRef} className="block text-[var(--color-text-primary)] whitespace-nowrap">
                para proyectos
              </span>
              <span ref={lineThreeRef} className="block text-[var(--color-text-muted)] whitespace-nowrap">
                inmobiliarios.
              </span>
            </h1>

            {/* Párrafo — visible en móvil junto al h1, oculto en desktop (vive en footer) */}
            <p
              ref={paraRef}
              className="md:hidden text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[38ch]"
            >
              Convertimos el tráfico de tu pauta en compradores
              reales contactando por WhatsApp.
            </p>

            {/* Stack de notifs en móvil */}
            <div className="md:hidden mt-2">
              <NotifStack visible={stackVisible} />
            </div>
          </div>

          {/* Derecha — stack de notifs en desktop */}
          <div
            ref={desktopNotif}
            className="hidden md:flex flex-col justify-center"
          >
            <NotifStack visible={stackVisible} />
            <p className="text-[0.625rem] text-[var(--color-text-muted)] m-0 mt-6 ml-1 tracking-wide">
              3 mensajes nuevos · Proyecto Reserva del Bosque
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="container-site pb-8 pt-5 md:border-t md:border-[var(--color-border)] flex items-end justify-between flex-wrap gap-8"
      >
        {/* Párrafo en desktop — oculto en móvil */}
        <p className="hidden md:block text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[44ch]">
          Convertimos el tráfico de tu pauta en compradores
          reales contactando por WhatsApp.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-primary-hero shrink-0"
        >
          Agendar llamada
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}