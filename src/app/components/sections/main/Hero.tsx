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
        width="12"
        height="12"
        fill="white"
    >
        <path
            d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"
        />
    </svg>
)

const STACK = [
    { scale: 0.88, translateY: -56, zIndex: 10, marginX: 32 },
    { scale: 0.94, translateY: -28, zIndex: 20, marginX: 16 },
    { scale: 1, translateY: 0, zIndex: 30, marginX: 0 },
]

const TIME_BY_POSITION = ['3 min', '1 min', 'ahora']

type Notif = typeof NOTIFICATIONS[0]

const NotifCard = ({ n, time }: { n: Notif; time: string }) => (
    <div
        className="rounded-2xl px-4 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.16)] backdrop-blur-md"
        style={{
            background: 'rgba(255, 255, 255, 0.75)',
        }}
    >
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
                <div className="w-[18px] h-[18px] rounded-md flex items-center justify-center shrink-0 bg-[#25d366]">
                    <WaIcon />
                </div>
                <span className="text-xs font-medium text-zinc-600 tracking-wide">
                    WhatsApp
                </span>
            </div>
            <span className="text-[0.625rem] text-zinc-500">{time}</span>
        </div>
        <p className="text-sm font-medium text-zinc-950 m-0 mb-1 text-left">
            {n.name}
        </p>
        <p
            className="text-xs text-zinc-700 m-0 leading-relaxed text-left"
            style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textAlign: 'left'
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

        wrapperRefs.current.forEach(el => {
            if (!el) return
            el.style.opacity = '0'
            el.style.transform = 'translateY(48px) scale(1)'
            el.style.transition = 'none'
        })

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
        <div className="relative w-full max-w-[400px] mx-auto" style={{ height: '140px' }}>
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
    const paraRef = useRef<HTMLParagraphElement>(null)
    const [stackVisible, setStackVisible] = useState(false)

    useEffect(() => {
        if (paraRef.current) {
            paraRef.current.style.opacity = '0'
            paraRef.current.style.transform = 'translateY(14px)'
            paraRef.current.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 280ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 280ms'
            setTimeout(() => {
                if (!paraRef.current) return
                paraRef.current.style.opacity = '1'
                paraRef.current.style.transform = 'translateY(0)'
            }, 60)
        }

        setTimeout(() => setStackVisible(true), 400)
    }, [])

    return (
        <section className="relative w-full padding-block py-40 md:py-30 bg-[#EDEFF3] overflow-hidden">
            <div className="relative z-20 container-site w-full max-w-3xl px-4 flex flex-col items-center justify-center text-center gap-6">
                <h1
                    className="m-0 block text-neutral-950 font-medium tracking-tighter drop-shadow-sm"
                    style={{
                        fontSize: 'clamp(1.9rem, 4vw, 4.5rem)',
                        lineHeight: 1.05,
                    }}
                >
                    Landing pages para proyectos inmobiliarios
                </h1>

                <p
                    ref={paraRef}
                    className="text-sm md:text-base leading-relaxed text-neutral-700 m-0 max-w-[45ch]"
                >
                    Convertimos el tráfico de tu pauta en inversionistas reales contactando por WhatsApp.
                </p>

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex bg-black justify-center items-center gap-2 py-3 w-47 rounded-full text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-neutral-800"
                >
                    Agendar llamada
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>

                <div className="w-full mt-8">
                    <NotifStack visible={stackVisible} />
                </div>
            </div>
        </section>
    )
}