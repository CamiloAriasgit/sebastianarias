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

export default function Hero() {
  const lineOneRef = useRef<HTMLSpanElement>(null)
  const lineTwoRef = useRef<HTMLSpanElement>(null)
  const footerRef  = useRef<HTMLDivElement>(null)
  const phoneRef   = useRef<HTMLDivElement>(null)
  const notifRefs  = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const textEls = [
      { ref: lineOneRef, delay: 0   },
      { ref: lineTwoRef, delay: 120 },
      { ref: footerRef,  delay: 260 },
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

    if (phoneRef.current) {
      phoneRef.current.style.opacity = '0'
      phoneRef.current.style.transform = 'translateY(28px)'
      phoneRef.current.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1) 380ms, transform 1s cubic-bezier(0.16,1,0.3,1) 380ms'
      setTimeout(() => {
        if (!phoneRef.current) return
        phoneRef.current.style.opacity = '1'
        phoneRef.current.style.transform = 'translateY(0)'
      }, 60)
    }

    notifRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(8px) scale(0.97)'
      const delay = 800 + i * 400
      el.style.transition = `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
      setTimeout(() => {
        if (!el) return
        el.style.opacity = '1'
        el.style.transform = 'translateY(0) scale(1)'
      }, 60)
    })
  }, [])

  // En móvil solo 1 notif, en desktop las 3
  const visibleNotifs = NOTIFICATIONS

  return (
    <section
      className="bg-[var(--color-bg)] h-svh grid pt-14"
      style={{ gridTemplateRows: '1fr auto' }}
    >
      <div className="container-site flex flex-col justify-end md:justify-center">

        {/* Layout: columna en móvil, dos columnas en desktop */}
        <div className="flex flex-col md:grid md:items-center gap-4 md:gap-[clamp(2rem,5vw,5rem)]"
          style={{ gridTemplateColumns: '1.15fr 0.85fr' }}
        >

          {/* Headline */}
          <h1 className="m-0 text-5xl md:text-8xl" style={{
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
          }}>
            <span ref={lineOneRef} className="block text-[var(--color-text-primary)]">
              <span className="inline md:block">Landing</span>
              {" "}
              <span className="inline md:block">pages</span>
            </span>
            <span ref={lineTwoRef} className="block text-[var(--color-text-muted)]">
              que cierran.
            </span>
          </h1>

          {/* Teléfono — medio frame con fade */}
          {/* justify-stretch en móvil para ocupar el ancho total del layout y -mb-px para pegarlo abajo */}
          <div
            ref={phoneRef}
            className="flex justify-stretch md:justify-end w-full -mb-px md:mb-0"
          >
            <div className="relative w-full md:max-w-[280px]">

              {/* Frame del teléfono — solo la mitad superior visible */}
              <div
                className="w-full h-[320px] md:h-auto flex justify-center"
                style={{
                  borderRadius: '2.25rem 2.25rem 0 0',
                  background: 'linear-gradient(160deg, #1c1c1e 0%, #0f0f0f 100%)',
                  border: '1px solid var(--color-border-hi)',
                  borderBottom: 'none',
                  padding: '2.5rem 0.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  boxShadow: '0 0 0 0.5px var(--color-border), 0 24px 48px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[var(--color-bg)] rounded-full"
                  style={{ width: '68px', height: '9px' }}
                />

                {/* Hora */}
                <div className="text-center mb-2">
                  <p className="text-[var(--color-text-primary)] m-0 leading-none font-light"
                    style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', letterSpacing: '-0.03em' }}
                  >
                    9:41
                  </p>
                  <p className="text-[var(--color-text-muted)] m-0 mt-1"
                    style={{ fontSize: '0.5625rem', letterSpacing: '0.06em' }}
                  >
                    LUNES, 3 DE JUNIO
                  </p>
                </div>

                {/* Notificaciones — 1 en móvil, 3 en desktop */}
                <div className="flex flex-col gap-2 px-0.5">
                  {visibleNotifs.map((n, i) => (
                    <div
                      key={n.id}
                      ref={el => { notifRefs.current[i] = el }}
                      className={`rounded-2xl px-3 py-2.5 ${i >= 1 ? 'hidden md:block' : ''}`}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '0.5px solid rgba(255,255,255,0.07)',
                        backdropFilter: 'blur(12px)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-md flex items-center justify-center shrink-0"
                            style={{ background: '#25d366' }}
                          >
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                            </svg>
                          </div>
                          <span style={{ fontSize: '0.5625rem', fontWeight: 500, color: 'var(--color-text-secondary)', letterSpacing: '0.02em' }}>
                            WhatsApp
                          </span>
                        </div>
                        <span style={{ fontSize: '0.50rem', color: 'var(--color-text-muted)' }}>
                          {n.time}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.625rem', fontWeight: 500, color: 'var(--color-text-primary)', margin: '0 0 2px' }}>
                        {n.name}
                      </p>
                      <p style={{ fontSize: '0.5625rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {n.preview}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Degradado inferior — dentro del frame */}
                <div
                  className="absolute bottom-0 inset-x-0 pointer-events-none"
                  style={{
                    height: '60%',
                    background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer — borde solo en desktop */}
      <div
        ref={footerRef}
        className="container-site pb-8 pt-5 md:border-t md:border-[var(--color-border)] flex items-end justify-between flex-wrap gap-8"
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