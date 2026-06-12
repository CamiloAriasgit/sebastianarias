'use client'

import React, { useEffect, useRef, useState } from 'react'

// --- CONSTANTES ---
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

// Configuración de la pila de notificaciones (posiciones, escalas, etc.)
const STACK_CONFIG = [
  { scale: 0.88, translateY: -56, zIndex: 10, marginX: 32 },
  { scale: 0.94, translateY: -28, zIndex: 20, marginX: 16 },
  { scale: 1, translateY: 0, zIndex: 30, marginX: 0 },
]

const TIME_BY_POSITION = ['3 min', '1 min', 'ahora']

type Notif = typeof NOTIFICATIONS[0]

// --- COMPONENTES INTERNOS ---

// Icono de WhatsApp SVG
const WaIcon = () => (
  <svg viewBox="0 0 30.667 30.667" width="12" height="12" fill="white">
    <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z" />
  </svg>
)

// Tarjeta individual de notificación
const NotifCard = ({ n, time }: { n: Notif; time: string }) => (
  <div
    className="rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-neutral-700/50"
    style={{
      background: 'rgba(20, 20, 23, 0.96)', // Fondo oscuro para las tarjetas
    }}
  >
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="w-[18px] h-[18px] rounded-md flex items-center justify-center shrink-0 bg-[#25d366]">
          <WaIcon />
        </div>
        <span className="text-xs font-medium text-neutral-300 tracking-wide">
          WhatsApp
        </span>
      </div>
      <span className="text-[0.625rem] text-neutral-500">{time}</span>
    </div>
    <p className="text-sm font-semibold text-white text-start m-0 mb-1">
      {n.name}
    </p>
    <p
      className="text-xs text-neutral-300 m-0 leading-relaxed text-start"
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

// Pila de notificaciones con lógica de animación
const NotifStack = ({ visible }: { visible: boolean }) => {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([])
  const positionsRef = useRef<number[]>([0, 1, 2])
  const [positions, setPositions] = useState<number[]>([0, 1, 2])

  const applyPosition = (el: HTMLDivElement, pos: number, animate: boolean) => {
    const cfg = STACK_CONFIG[pos]
    if (animate) {
      el.style.transition = 'transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease-out'
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

    // Estado inicial (ocultas)
    wrapperRefs.current.forEach(el => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(48px) scale(1)'
      el.style.transition = 'none'
    })

    // Animación de entrada secuencial
    NOTIFICATIONS.forEach((_, i) => {
      setTimeout(() => {
        const cur = wrapperRefs.current[i]
        if (cur) {
          applyPosition(cur, 2, false) // Aparece en la posición frontal
          cur.style.opacity = '1'
          // Forzar reflujo para asegurar que la transición de opacidad se aplique
          void cur.offsetWidth;
          cur.style.transition = 'transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.5s cubic-bezier(0.16,1,0.3,1)';
        }
        // Mover las anteriores hacia atrás
        const prev = wrapperRefs.current[i - 1]
        if (prev) applyPosition(prev, 1, true)

        const oldest = wrapperRefs.current[i - 2]
        if (oldest) applyPosition(oldest, 0, true)
      }, 700 + i * 380)
    })

    // Bucle infinito de rotación de posiciones
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
            // Cuando una tarjeta vuelve al frente, hacemos un "salto" rápido
            el.style.transition = 'none'
            el.style.transform = `translateY(40px) scale(0.85)`
            el.style.zIndex = '5'
            void el.offsetWidth; // Forzar reflujo
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
    <div className="relative w-full max-w-[400px] mx-auto" style={{ height: '140px' }}>
      {NOTIFICATIONS.map((n, i) => (
        <div
          key={n.id}
          ref={el => { wrapperRefs.current[i] = el }}
          className="absolute"
          style={{
            bottom: 0,
            left: STACK_CONFIG[positions[i]].marginX,
            right: STACK_CONFIG[positions[i]].marginX,
            transformOrigin: 'bottom center',
          }}
        >
          <NotifCard n={n} time={TIME_BY_POSITION[positions[i]]} />
        </div>
      ))}
    </div>
  )
}

// --- EFECTO PRISMA LINEAL DINÁMICO (SVG) ---
const PrismaBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-black">
    {/* Superposición de desenfoque global para suavizar todo el efecto */}
    <div className="absolute inset-0 blur-[60px] opacity-60">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full scale-110" // Escala un poco para cubrir bordes al animar
      >
        <defs>
          {/* Gradiente 1: Cian Brillante/Blanco (Haz principal) */}
          <linearGradient id="beamCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.7" />
          </linearGradient>

          {/* Gradiente 2: Blanco puro (Haz de alto contraste) */}
          <linearGradient id="beamWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* --- Renderizado de los Haces de Luz Lineales --- */}
        {/* Rotados diagonalmente hacia la esquina inferior derecha */}
        <g transform="rotate(-30 50 50)">
          
          {/* Haz 1: Principal Cian ancho */}
          <rect x="10" y="-50" width="6" height="200" fill="url(#beamCyan)">
            <animate attributeName="x" values="10; 16; 10" dur="18s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </rect>

          {/* Haz 2: Fino y brillante (Blanco) */}
          <rect x="25" y="-50" width="2" height="200" fill="url(#beamWhite)">
            <animate attributeName="x" values="25; 22; 25" dur="22s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </rect>

          {/* Haz 3: Cian medio */}
          <rect x="45" y="-50" width="4" height="200" fill="url(#beamCyan)" opacity="0.6">
            <animate attributeName="x" values="45; 48; 45" dur="15s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </rect>

          {/* Haz 4: Blanco suave ancho, más a la derecha */}
          <rect x="70" y="-50" width="8" height="200" fill="url(#beamWhite)" opacity="0.3">
            <animate attributeName="x" values="70; 65; 70" dur="25s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
          </rect>
        </g>
      </svg>
    </div>
  </div>
)

// --- COMPONENTE HERO PRINCIPAL EXPORTADO ---
export default function Hero() {
  const paraRef = useRef<HTMLParagraphElement>(null)
  const [stackVisible, setStackVisible] = useState(false)

  // Animación de entrada del texto del párrafo y activación del stack
  useEffect(() => {
    if (paraRef.current) {
      paraRef.current.style.opacity = '0'
      paraRef.current.style.transform = 'translateY(14px)'
      // Forzar reflujo
      void paraRef.current.offsetWidth;
      paraRef.current.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 280ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 280ms'
      paraRef.current.style.opacity = '1'
      paraRef.current.style.transform = 'translateY(0)'
    }

    // Activar el stack de notificaciones un poco después
    const timer = setTimeout(() => setStackVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full h-svh flex items-center justify-center pt-14 bg-black overflow-hidden">
      
      {/* 1. Fondo Prisma Dinámico */}
      <PrismaBackground />

      {/* 2. Superposición de Gradiente Negro Sutil en la parte inferior para legibilidad */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-[40vh] pointer-events-none"
        style={{
          background: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.4) 45%, rgba(0, 0, 0, 0) 100%)`
        }}
      />

      {/* 3. Contenido Principal */}
      <div className="relative z-20 container-site w-full max-w-3xl px-4 flex flex-col items-center justify-center text-center gap-6">
        <h1
          className="m-0 block text-white font-light tracking-tight text-shadow"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.05,
          }}
        >
          Landing page para proyectos inmobiliarios
        </h1>

        <p
          ref={paraRef}
          className="text-sm md:text-base leading-relaxed text-neutral-200 m-0 max-w-[45ch] transition-opacity"
        >
          Convertimos el tráfico de tu pauta en inversionistas reales contactando por WhatsApp.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-white justify-center items-center gap-2 py-2.5 w-44 rounded-full text-black shadow-lg shadow-black/10 transition-all duration-300 hover:scale-105 hover:bg-zinc-100 group"
        >
          Empezar ahora
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Contenedor del Stack de Notificaciones */}
        <div className="w-full mt-8">
          <NotifStack visible={stackVisible} />
        </div>
      </div>

      {/* Estilos CSS adicionales para el text-shadow */}
      <style jsx global>{`
        .text-shadow {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  )
}