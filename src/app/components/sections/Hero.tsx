'use client'

import { useEffect, useRef } from 'react'

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

const NotifCard = ({
  n,
  notifRef,
  className = '',
}: {
  n: Notif
  notifRef?: (el: HTMLDivElement | null) => void
  className?: string
}) => (
  <div
    ref={notifRef}
    className={`rounded-2xl px-3 py-2.5 bg-white/[0.06] backdrop-blur-md  border-white/[0.08] ${className}`}
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
      style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
    >
      {n.preview}
    </p>
  </div>
)

export default function Hero() {
  const lineOneRef = useRef<HTMLSpanElement>(null)
  const lineTwoRef = useRef<HTMLSpanElement>(null)
  const lineThreeRef = useRef<HTMLSpanElement>(null)
  const footerRef  = useRef<HTMLDivElement>(null)
  const notifsRef  = useRef<HTMLDivElement>(null)
  const notifRefs  = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    ;[
      { ref: lineOneRef,   delay: 0   },
      { ref: lineTwoRef,   delay: 100 },
      { ref: lineThreeRef, delay: 200 },
      { ref: footerRef,    delay: 320 },
    ].forEach(({ ref, delay }) => {
      if (!ref.current) return
      ref.current.style.opacity = '0'
      ref.current.style.transform = 'translateY(16px)'
      ref.current.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      setTimeout(() => {
        if (!ref.current) return
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'translateY(0)'
      }, 60)
    })

    if (notifsRef.current) {
      notifsRef.current.style.opacity = '0'
      notifsRef.current.style.transform = 'translateY(20px)'
      notifsRef.current.style.transition =
        'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 360ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 360ms'
      setTimeout(() => {
        if (!notifsRef.current) return
        notifsRef.current.style.opacity = '1'
        notifsRef.current.style.transform = 'translateY(0)'
      }, 60)
    }

    notifRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px) scale(0.98)'
      const delay = 700 + i * 350
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      setTimeout(() => {
        if (!el) return
        el.style.opacity = '1'
        el.style.transform = 'translateY(0) scale(1)'
      }, 60)
    })
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

          {/* Izquierda — headline */}
          <h1
            className="m-0 col-span-2 md:col-span-1"
            style={{
              fontSize: 'clamp(2.75rem, 7.5vw, 8.5rem)',
              fontWeight: 300,
              lineHeight: 1.0,
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

          {/* Derecha — notificaciones flotando */}
          <div
            ref={notifsRef}
            className="hidden md:flex flex-col gap-2.5 justify-center"
          >
            {NOTIFICATIONS.map((n, i) => (
              <NotifCard
                key={n.id}
                n={n}
                notifRef={el => { notifRefs.current[i] = el }}
                className={i === 1 ? 'ml-6' : i === 2 ? 'ml-3' : ''}
              />
            ))}
            <p className="text-[0.625rem] text-[var(--color-text-muted)] m-0 mt-1 ml-1 tracking-wide">
              3 mensajes nuevos · Proyecto Reserva del Bosque
            </p>
          </div>

          {/* Móvil — 3 notifs, la del medio más ancha */}
          <div
            ref={notifsRef}
            className="md:hidden col-span-2 flex flex-col gap-2 mt-2"
          >
            {NOTIFICATIONS.map((n, i) => (
              <NotifCard
                key={n.id}
                n={n}
                notifRef={el => { notifRefs.current[i] = el }}
                className={
                  i === 0 ? 'mx-4' :
                  i === 2 ? 'mx-4' :
                  ''
                }
              />
            ))}
          </div>

        </div>
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="container-site pb-8 pt-5 md:border-t md:border-[var(--color-border)] flex items-end justify-between flex-wrap gap-8"
      >
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[44ch]">
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