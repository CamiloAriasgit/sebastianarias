'use client'

import { useEffect, useRef, useState } from 'react'
import { Signal, Wifi, Battery, Fingerprint } from 'lucide-react'
import Image from 'next/image';
import { WhatsAppButton } from '../../ui/WhatsAppButton';

const NOTIFICATIONS = [
    {
        id: 3,
        name: 'Andrés Castillo',
        preview: '¿Aún hay unidades en el piso 8? Vi los planos y me convencieron.',
        time: '3 min',
        avatar: '/avatars/profile-avatar-3.jpg',
    },
    {
        id: 2,
        name: 'Valeria Ríos',
        preview: 'Hola, me interesa el de 2 hab. ¿Tienen sala de ventas este fin de semana?',
        time: '1 min',
        avatar: '/avatars/profile-avatar-2.png',
    },
    {
        id: 1,
        name: 'Carlos Mendoza',
        preview: 'Buenas, vi el proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?',
        time: 'ahora',
        avatar: '/avatars/profile-avatar-1.png',
    },
]

const STACK = [
    { scale: 0.88, translateY: -56, zIndex: 10, marginX: 32 },
    { scale: 0.94, translateY: -28, zIndex: 20, marginX: 16 },
    { scale: 1, translateY: 0, zIndex: 30, marginX: 0 },
]

const TIME_BY_POSITION = ['3 min', '1 min', 'ahora']

type Notif = typeof NOTIFICATIONS[0]

const NotifCard = ({ n, time }: { n: Notif; time: string }) => (
    <div
        className="rounded-2xl px-4 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.16)] backdrop-blur-md flex items-center gap-3"
        style={{
            background: 'rgba(255, 255, 255, 0.85)',
        }}
    >
        <Image
            src={n.avatar}
            alt={n.name}
            width={36}
            height={36}
            className="rounded-full shrink-0 object-cover"
        />
        <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
                <p className="text-sm font-medium text-neutral-950 m-0 text-left truncate">
                    {n.name}
                </p>
                <span className="text-[0.625rem] text-neutral-500 shrink-0 ml-2">{time}</span>
            </div>
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
        <div className="relative w-full max-w-[400px] lg:max-w-none mx-auto" style={{ height: '140px' }}>
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

    const MobilePhoneMockup = ({ showNotifications = false }: { showNotifications?: boolean }) => (
        <div className="w-[275px] h-[550px] rounded-[40px] border-[10px] border-neutral-900 bg-neutral-950 shadow-xl z-0 relative">
            
            {/* Notch */}
            <div className="absolute flex items-center justify-end top-3 left-1/2 -translate-x-1/2 w-15 h-4 bg-neutral-900 rounded-full z-10">
                <div className='bg-gray-800 flex flex-col items-center justify-center h-2 w-2 mr-1 rounded-full shadow-inner shadow-gray-800'>
                    <span className='flex bg-gradient-to-b from-blue-500 via-gray-800 to-blue-500 py-[1px] blur-[1px] rounded-full shadow-inner shadow-blue-700/20'>
                        <span className='h-1 w-1 bg-gray-800 rounded-full'></span>
                    </span>
                </div>
            </div>

            {/* Status bar */}
            <div className="absolute top-3 left-0 right-0 px-6 flex items-center justify-between z-20 text-neutral-900">
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

            {/* Clock */}
            <div className="absolute top-16 left-0 right-0 flex flex-col items-center z-10 text-white">
                <span className="text-5xl flex bg-neutral-950 bg-clip-text text-transparent font-extralight items-end tracking-tight">
                    {currentTime.time}
                </span>
                <span className="text-xs text-neutral-900 mt-1">{currentDate}</span>
            </div>

            {/* Notifications (sobresalientes con -mx-8) */}
            {showNotifications && (
                <div className="absolute top-50 -left-10 -right-10 z-30">
                    <NotifStack visible={stackVisible} />
                </div>
            )}

            {/* Pantalla blanca recortada a las esquinas redondeadas del marco */}
            <div className="absolute inset-0 z-0 bg-white rounded-[30px] overflow-hidden"></div>

            {/* Sensor / Huella */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                <Fingerprint className="w-7 h-7 text-neutral-600" strokeWidth={1.5} />
            </div>
        </div>
    )

    return (
        <section className="relative flex w-full padding-block min-h-[100svh] bg-section overflow-hidden">

            {/* === VISTA MÓVIL (Sin alteraciones) === */}
            <div className="lg:hidden bg-section relative z-20 container-site flex flex-col items-center justify-center text-center gap-6">
                <div className="flex flex-col items-center text-center gap-6">
                    <h1
                        className="m-0 block text-neutral-950 text-balance leading-[1.06] tracking-tighter drop-shadow-sm"
                        style={{ fontSize: 'clamp(1.9rem, 2vw, 3rem)' }}
                    >
                        Landing pages para proyectos inmobiliarios
                    </h1>

                    <p
                        ref={paraRef}
                        className="text-sm md:text-base leading-relaxed text-neutral-700 m-0 text-balance"
                    >
                        Convertimos tu tráfico en inversionistas reales<br className="hidden md:block" /> contactando por WhatsApp.
                    </p>

                    <WhatsAppButton />
                </div>

                <div className="w-full mt-8 flex justify-center relative group">
                    <div className="relative z-10 w-full">
                        <NotifStack visible={stackVisible} />
                    </div>
                </div>
            </div>

            {/* === VISTA DESKTOP === */}
            <div className="hidden lg:flex flex-row w-full lg:py-30 justify-center items-center z-20 container-full gap-12">

                {/* Arriba: Dos columnas */}
                <div className="flex flex-col gap-8 items-start w-full">
                    {/* Columna Izquierda: Título y Botón */}
                    <div className="flex flex-col items-start gap-6 text-left">
                        <h1
                            className="m-0 block text-neutral-950 text-balance leading-[1.06] drop-shadow-sm"
                            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.5rem)' }}
                        >
                            Landing pages para proyectos inmobiliarios
                        </h1>
                        <div className="flex items-start pt-2 w-full">
                        <p
                            className="text-base md:text-lg text-balance leading-relaxed text-neutral-700 m-0 w-auto"
                        >
                            Convertimos tu tráfico en inversionistas reales contactando por WhatsApp.
                        </p>
                    </div>
                        <WhatsAppButton />
                    </div>

                    {/* Columna Derecha */}
                    
                </div>

                {/* Abajo: Contenedor con el mockup */}
                <div className="w-full bg-white rounded-xl overflow-hidden relative flex justify-center h-[650px]">
                    <div className="absolute top-13">
                        <MobilePhoneMockup showNotifications={true} />
                    </div>
                </div>

            </div>

        </section>
    )
}