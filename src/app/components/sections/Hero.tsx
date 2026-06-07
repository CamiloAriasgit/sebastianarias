'use client'

import { useEffect, useRef, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573003607632?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const NOTIFICATIONS = [
  {
    id: 3,
    name: 'Andrés Castillo',
    preview: '¿Aún hay unidades en el piso 8? Vi los planos y me convencieron.',
    time: '3 min',
  },
  {
    id: 2,
    name: 'Valeria Ríos',
    preview: 'Hola, me interesa el de 2 hab. ¿Tienen sala de ventas este fin de semana?',
    time: '1 min',
  },
  {
    id: 1,
    name: 'Carlos Mendoza',
    preview: 'Buenas, vi el proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?',
    time: 'ahora',
  },
]

const WaIcon = ({ size = 9 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
  </svg>
)

type Notif = typeof NOTIFICATIONS[0]

// CAMBIO CLAVE: Se incrementó la distancia vertical (translateY) de las tarjetas traseras
const STACK_FINAL = [
  { scale: 0.88, translateY: -80, zIndex: 10, mx: 'mx-8' }, // Antes: -56
  { scale: 0.94, translateY: -40, zIndex: 20, mx: 'mx-4' }, // Antes: -28
  { scale: 1,    translateY: 0,   zIndex: 30, mx: ''     },
]

const NotifCard = ({
  n,
  cardRef,
}: {
  n: Notif
  cardRef?: (el: HTMLDivElement | null) => void
}) => (
  <div
    ref={cardRef}
    className="rounded-2xl px-3 py-2.5 border border-white/[0.09]"
    style={{ background: 'rgba(28,28,30,0.95)', backdropFilter: 'blur(12px)' }}
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

const NotifStack = ({ visible }: { visible: boolean }) => {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!visible) return

    wrapperRefs.current.forEach((el) => {
      if (!el) return
      el.style.transform = 'translateY(48px) scale(1)'
      el.style.opacity = '0'
    })

    NOTIFICATIONS.forEach((_, i) => {
      const delay = 700 + i * 380

      setTimeout(() => {
        const current = wrapperRefs.current[i]
        if (current) {
          current.style.transition =
            'transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.5s cubic-bezier(0.16,1,0.3,1)'
          current.style.transform = `translateY(${STACK_FINAL[2].translateY}px) scale(${STACK_FINAL[2].scale})`
          current.style.opacity = '1'
        }

        const prev = wrapperRefs.current[i - 1]
        if (prev) {
          prev.style.transition =
            'transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.5s cubic-bezier(0.16,1,0.3,1)'
          prev.style.transform = `translateY(${STACK_FINAL[1].translateY}px) scale(${STACK_FINAL[1].scale})`
        }

        const oldest = wrapperRefs.current[i - 2]
        if (oldest) {
          oldest.style.transition =
            'transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.5s cubic-bezier(0.16,1,0.3,1)'
          oldest.style.transform = `translateY(${STACK_FINAL[0].translateY}px) scale(${STACK_FINAL[0].scale})`
        }
      }, delay)
    })
  }, [visible])

  return (
    // CAMBIO CLAVE: Se amplió la altura del contenedor de 110px a 140px para albergar el desplazamiento más alto
    <div className="relative w-full" style={{ height: '165px' }}>
      {NOTIFICATIONS.map((n, i) => (
        <div
          key={n.id}
          ref={el => { wrapperRefs.current[i] = el }}
          className={`absolute inset-x-0 ${STACK_FINAL[i].mx}`}
          style={{
            bottom: 0,
            zIndex: i + 1,
            transformOrigin: 'bottom center',
          }}
        >
          <NotifCard n={n} />
        </div>
      ))}
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
          {/* Izquierda — headline + párrafo en móvil */}
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

            <p
              ref={paraRef}
              className="md:hidden text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[38ch]"
            >
              Convertimos el tráfico de tu pauta en compradores
              reales contactando por WhatsApp.
            </p>

            <div className="md:hidden mt-2">
              <NotifStack visible={stackVisible} />
            </div>
          </div>

          {/* Derecha — stack desktop */}
          <div
            ref={desktopNotif}
            className="hidden md:flex flex-col justify-center"
          >
            <NotifStack visible={stackVisible} />
            <p className="text-[0.625rem] text-[var(--color-text-muted)] m-0 mt-8 ml-1 tracking-wide">
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