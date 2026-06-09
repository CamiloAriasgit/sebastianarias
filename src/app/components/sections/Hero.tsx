'use client'

import { useEffect, useRef, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

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

const WaIcon = () => (
  <svg
    viewBox="0 0 30.667 30.667"
    width="12" // Ajusta el tamaño de visualización aquí si lo necesitas más grande o más pequeño
    height="12"
    fill="white" // <--- Aquí forzamos que todo el contenido sea blanco
  >
    <path
      d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"
    />
  </svg>
)

// Posición 2 = frente, 1 = medio, 0 = fondo
const STACK = [
  { scale: 0.88, translateY: -56, zIndex: 10, marginX: 32 }, // fondo
  { scale: 0.94, translateY: -28, zIndex: 20, marginX: 16 }, // medio
  { scale: 1,    translateY: 0,   zIndex: 30, marginX: 0  }, // frente
]

const TIME_BY_POSITION = ['3 min', '1 min', 'ahora']

type Notif = typeof NOTIFICATIONS[0]

const NotifCard = ({ n, time }: { n: Notif; time: string }) => (
  <div
    className="rounded-2xl px-4 py-3 border border-white/[0.03] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
    style={{ 
      background: 'rgba(24, 24, 27, 0.96)', // Un tono neutral/zinc mate ultra sólido que no se rompe en ningún navegador
    }}
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] rounded-md flex items-center justify-center shrink-0 bg-[#25d366]">
          <WaIcon />
        </div>
        <span className="text-xs font-medium text-[var(--color-text-secondary)] tracking-wide">
          WhatsApp
        </span>
      </div>
      <span className="text-[0.625rem] text-[var(--color-text-muted)]">{time}</span>
    </div>
    <p className="text-sm font-medium text-[var(--color-text-primary)] m-0 mb-1">
      {n.name}
    </p>
    <p
      className="text-xs text-[var(--color-text-secondary)] m-0 leading-relaxed"
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
  const positionsRef = useRef<number[]>([0, 1, 2])
  const [positions, setPositions] = useState<number[]>([0, 1, 2])

  const applyPosition = (el: HTMLDivElement, pos: number, animate: boolean) => {
    const cfg = STACK[pos]
    if (animate) {
      el.style.transition = 'transform 0.7s cubic-bezier(0.16,1,0.3,1)'
    } else {
      el.style.transition = 'none'
    }
    el.style.transform = `translateY(${cfg.translateY}px) scale(${cfg.scale})`
    el.style.zIndex = String(cfg.zIndex)
    el.style.left = `${cfg.marginX}px`
    el.style.right = `${cfg.marginX}px`
  }

  useEffect(() => {
    if (!visible) return

    // Estado inicial
    wrapperRefs.current.forEach(el => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(48px) scale(1)'
      el.style.transition = 'none'
    })

    // Entrada en cascada
    NOTIFICATIONS.forEach((_, i) => {
      setTimeout(() => {
        const cur = wrapperRefs.current[i]
        if (cur) {
          cur.style.transition = 'transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.5s cubic-bezier(0.16,1,0.3,1)'
          applyPosition(cur, 2, false)
          cur.style.opacity = '1'
        }
        const prev = wrapperRefs.current[i - 1]
        if (prev) applyPosition(prev, 1, true)

        const oldest = wrapperRefs.current[i - 2]
        if (oldest) applyPosition(oldest, 0, true)
      }, 700 + i * 380)
    })

    // Loop de rotación
    let intervalId: ReturnType<typeof setInterval>
    const loopStart = setTimeout(() => {
      intervalId = setInterval(() => {
        const next = positionsRef.current.map(pos =>
          pos === 0 ? 2 : pos === 1 ? 0 : 1
        )
        positionsRef.current = next
        setPositions([...next])

        NOTIFICATIONS.forEach((_, i) => {
          const el = wrapperRefs.current[i]
          if (!el) return
          const newPos = next[i]

          if (newPos === 2) {
            // Este pasa del fondo al frente — sale por debajo primero
            el.style.transition = 'none'
            el.style.transform = `translateY(40px) scale(0.85)`
            el.style.zIndex = '5'
            setTimeout(() => {
              if (!el) return
              applyPosition(el, 2, true)
            }, 30)
          } else {
            applyPosition(el, newPos, true)
          }
        })
      }, 3500)
    }, 2500)

    return () => {
      clearTimeout(loopStart)
      clearInterval(intervalId)
    }
  }, [visible])

  return (
    <div className="relative w-full" style={{ height: '140px' }}>
      {NOTIFICATIONS.map((n, i) => (
        <div
          key={n.id}
          ref={el => { wrapperRefs.current[i] = el }}
          className="absolute"
          style={{
            bottom: 0,
            left: STACK[positions[i]].marginX,
            right: STACK[positions[i]].marginX,
            transformOrigin: 'bottom center',
          }}
        >
          <NotifCard n={n} time={TIME_BY_POSITION[positions[i]]} />
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
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h1
              className="m-0"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 6rem)',
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
              className="md:hidden text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 mb-8 md:mb-0 max-w-[38ch]"
            >
              Convertimos el tráfico de tu pauta en compradores
              reales contactando por WhatsApp.
            </p>

            <div className="md:hidden mt-8 md:mt-0">
              <NotifStack visible={stackVisible} />
            </div>
          </div>

          <div
            ref={desktopNotif}
            className="hidden md:flex flex-col justify-center"
          >
            <NotifStack visible={stackVisible} />
            <p className="text-[0.625rem] text-[var(--color-text-muted)] text-center m-0 mt-8 ml-1 tracking-wide">
              Mensajes entrantes · Proyecto Reserva del Bosque
            </p>
          </div>
        </div>
      </div>

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
          Empezar ahora
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}