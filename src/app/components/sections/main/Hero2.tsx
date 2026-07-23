'use client'

import { useEffect, useRef, useState } from 'react'
import { Signal, Wifi, Battery, Fingerprint } from 'lucide-react'

const WHATSAPP_URL =
    'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const WaIconContact = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
        viewBox="0 0 30.667 30.667"
        className={className}
        fill="currentColor"
    >
        <path
            d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"
        />
    </svg>
)

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
                <span className="text-xs font-medium text-neutral-600 tracking-wide">
                    WhatsApp
                </span>
            </div>
            <span className="text-[0.625rem] text-neutral-500">{time}</span>
        </div>
        <p className="text-sm font-medium text-neutral-950 m-0 mb-1 text-left">
            {n.name}
        </p>
        <p
            className="text-xs text-neutral-700 m-0 leading-relaxed text-left"
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
        <div className="relative w-full max-w-[400px] lg:max-w-[340px] mx-auto lg:mx-0 lg:ml-auto" style={{ height: '140px' }}>
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

const formatPhoneTime = (date: Date) => {
    const parts = new Intl.DateTimeFormat([], {
        hour: 'numeric',
        minute: '2-digit',
    }).formatToParts(date)

    let time = ''
    let period = ''

    parts.forEach(part => {
        if (part.type === 'dayPeriod') {
            period = part.value
        } else if (part.type !== 'literal' || part.value.trim() !== '') {
            time += part.value
        }
    })

    return { time: time.trim(), period }
}

const formatPhoneDate = (date: Date) => {
    const raw = date.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    })
    return raw.charAt(0).toUpperCase() + raw.slice(1)
}

export default function Hero() {
    const paraRef = useRef<HTMLParagraphElement>(null)
    const [stackVisible, setStackVisible] = useState(false)
    const [now, setNow] = useState<Date | null>(null)

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

    useEffect(() => {
        setNow(new Date())
        const interval = setInterval(() => setNow(new Date()), 1000 * 30)
        return () => clearInterval(interval)
    }, [])


    const currentTime = now ? formatPhoneTime(now) : { time: '', period: '' }
    const currentDate = now ? formatPhoneDate(now) : ''

    return (
        <section className="relative flex w-full padding-block min-h-[100svh] bg-[#EDEFF3] overflow-hidden">
            <div className="relative z-20 container-site flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16 items-center justify-center text-center gap-6">

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:max-w-[46%]">
                    <h1
                        className="m-0 block text-neutral-950 font-semibold text-balance tracking-tighter drop-shadow-sm"
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
                        className="flex bg-neutral-900 justify-center items-center gap-2 py-3 w-47 rounded-full text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-neutral-800"
                    >
                        <WaIconContact className="w-5 h-5 fill-white" />
                        Agendar llamada
                    </a>
                </div>

             <div className="w-full mt-8 lg:mt-0 lg:w-[46%] flex justify-center lg:justify-end lg:relative group">

                    <div className="hidden lg:block absolute -top-40 right-18 w-[275px] h-[550px] rounded-[40px] border-[10px] border-neutral-900 bg-neutral-950 shadow-xl z-0 overflow-hidden">
                        <div className="absolute flex items-center justify-end top-3 left-1/2 -translate-x-1/2 w-15 h-4 bg-neutral-900 rounded-full z-10" >
                            <div className='bg-gray-800 flex flex-col items-center justify-center h-2 w-2 mr-1 rounded-full shadow-inner shadow-gray-800' >
                                <span className='flex bg-gradient-to-b from-blue-700 via-gray-800 to-blue-700 py-[1px] blur-[1px] rounded-full shadow-inner shadow-blue-700/20'>
                                    <span className='h-1 w-1 bg-gray-800 rounded-full'></span>
                                </span>
                            </div>
                        </div>
                        <div className="absolute top-3 left-0 right-0 px-6 flex items-center justify-between z-20 text-neutral-200">
                            <span className="text-[0.7rem] font-light">
                                {currentTime.time}
                                <span className="text-[0.6rem] ml-0.5">{currentTime.period}</span>
                            </span>
                            <div className="flex items-center gap-2">
                                <Signal className="w-2.5 h-2.5" strokeWidth={2.5} />
                                <Wifi className="w-2.5 h-2.5" strokeWidth={2.5} />
                                <Battery className="w-3 h-3" strokeWidth={2} />
                            </div>
                        </div>
                        <div className="absolute top-20 font-extralight left-0 right-0 flex flex-col items-center z-10 text-white">
                            <span className="text-5xl flex bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent items-end tracking-tight">
                                {currentTime.time}
                            </span>
                            <span className="text-xs text-white/80 mt-1">{currentDate}</span>
                        </div>

                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                backgroundImage: `
                                    radial-gradient(circle at 80% 20%, #3b82f680 0%, transparent 50%),
                                    radial-gradient(circle at 10% 40%, #60a5fa73 0%, transparent 45%),
                                    radial-gradient(circle at 90% 80%, #ffffff59 0%, transparent 55%),
                                    radial-gradient(circle at 30% 90%, #1d4ed880 0%, transparent 60%),
                                    linear-gradient(145deg, #0b0f19 0%, #111827 40%, #030712 100%)
                                `,
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center'
                            }}
                        />

                        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                            <Fingerprint className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
                        </div>
                    </div>
                    <div className="relative z-10 w-full lg:pr-10 lg:pt-10">
                        <NotifStack visible={stackVisible} />
                    </div>
                </div>
            </div>
        </section>
    )
}