'use client'

import { useEffect, useRef } from 'react'

const WHATSAPP_URL =
  'https://wa.me/57TUNUMERO?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const MESSAGES = [
  {
    id: 1,
    from: 'Carlos M.',
    text: 'Buenas, vi el proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?',
    time: '9:41',
    isLead: true,
  },
  {
    id: 2,
    from: 'Carlos M.',
    text: '¿Aún hay unidades disponibles en el piso 8?',
    time: '9:43',
    isLead: true,
  },
  {
    id: 3,
    from: 'Valeria R.',
    text: 'Hola, me interesa el apartamento de 2 hab. ¿Tienen sala de ventas este fin de semana?',
    time: '10:02',
    isLead: true,
  },
]

export default function Hero() {
  const lineOneRef  = useRef<HTMLSpanElement>(null)
  const lineTwoRef  = useRef<HTMLSpanElement>(null)
  const lineThreeRef = useRef<HTMLSpanElement>(null)
  const footerRef   = useRef<HTMLDivElement>(null)
  const chatRef     = useRef<HTMLDivElement>(null)
  const msgRefs     = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Entrada del headline y footer
    const textEls = [
      { ref: lineOneRef, delay: 0   },
      { ref: lineTwoRef, delay: 120 },
      { ref: lineThreeRef, delay: 240 },
      { ref: footerRef,  delay: 360 },
    ]
    textEls.forEach(({ ref, delay }) => {
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

    // Entrada del contenedor del chat
    if (chatRef.current) {
      chatRef.current.style.opacity = '0'
      chatRef.current.style.transform = 'translateY(24px)'
      chatRef.current.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 500ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 500ms'
      setTimeout(() => {
        if (chatRef.current) {
          chatRef.current.style.opacity = '1'
          chatRef.current.style.transform = 'translateY(0)'
        }
      }, 60)
    }

    // Mensajes entran en cascada después del chat
    msgRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(10px)'
      const delay = 800 + i * 350
      el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      setTimeout(() => {
        if (el) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      }, 60)
    })
  }, [])

  return (
    <section
      className="bg-[var(--color-bg)] min-h-svh md:h-svh grid pt-20 md:pt-14"
      style={{ gridTemplateRows: '1fr auto' }}
    >
      {/* Centro */}
      <div className="container-site flex flex-col justify-center py-8 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          
          {/* Izquierda — headline responsivo y de gran tamaño en desktop */}
          <h1
            className="m-0 text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight"
            style={{
              fontWeight: 300,
              lineHeight: 0.95,
            }}
          >
            <span
              ref={lineOneRef}
              className="block text-[var(--color-text-primary)]"
            >
              Landing
            </span>
            <span
              ref={lineTwoRef}
              className="block text-[var(--color-text-primary)]"
            >
              pages
            </span>
            <span
              ref={lineThreeRef}
              className="block text-[var(--color-text-muted)]"
            >
              que cierran.
            </span>
          </h1>

          {/* Derecha — chat de WhatsApp visible en todos los dispositivos */}
          <div
            ref={chatRef}
            className="flex flex-col gap-2 justify-center w-full max-w-md md:max-w-none justify-self-start md:justify-self-auto"
          >
            {/* Header del chat */}
            <div
              className="flex items-center gap-3 pb-3 mb-1 border-b border-[var(--color-border)]"
            >
              <div className="relative shrink-0">
                <div className="w-8 h-8 rounded-full bg-[var(--color-surface-hi)]" />
                {/* Online indicator */}
                <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#25d366] border border-[var(--color-bg)]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--color-text-primary)] m-0 leading-none mb-1">
                  Proyecto Reserva del Bosque
                </p>
                <p className="text-[10px] text-[var(--color-text-muted)] m-0 leading-none">
                  3 mensajes nuevos
                </p>
              </div>
            </div>

            {/* Mensajes */}
            <div className="flex flex-col gap-2">
              {MESSAGES.map((msg, i) => (
                <div
                  key={msg.id}
                  ref={el => { msgRefs.current[i] = el }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-[10px] text-[var(--color-text-muted)] ml-1">
                    {msg.from}
                  </span>
                  <div
                    className="flex items-end gap-2 max-w-[90%] md:max-w-[85%]"
                  >
                    <div
                      className="px-3 py-2 rounded-2xl rounded-tl-sm"
                      style={{
                        background: 'var(--color-surface-hi)',
                        border: '0.5px solid var(--color-border)',
                      }}
                    >
                      <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] m-0">
                        {msg.text}
                      </p>
                    </div>
                    <span className="text-[10px] text-[var(--color-text-muted)] shrink-0 pb-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota */}
            <p className="text-[10px] text-[var(--color-text-muted)] mt-2 m-0" style={{ letterSpacing: '0.04em' }}>
              Esto es lo que genera una landing que convierte.
            </p>
          </div>
        </div>
      </div>

      {/* Footer anclado */}
      <div
        ref={footerRef}
        className="container-site pb-8 pt-5 border-t border-[var(--color-border)] flex items-end justify-between flex-wrap gap-8"
      >
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[38ch]">
          Diseñadas para proyectos inmobiliarios en preventa.
          Tráfico de pauta convertido en leads reales,
          con tracking y WhatsApp estratégico.
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