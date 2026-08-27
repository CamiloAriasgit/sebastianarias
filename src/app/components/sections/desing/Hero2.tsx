'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { WhatsAppButton } from '../../ui/WhatsAppButton'

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

type Notif = typeof NOTIFICATIONS[0]

const NotifCard = ({ n }: { n: Notif }) => (
    <div
        className="rounded-2xl px-4 py-3 shadow-[0_12px_50px_rgba(0,0,0,0.16)] backdrop-blur-md flex items-center gap-3"
        style={{ background: 'rgba(255, 255, 255, 0.9)' }}
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
                <span className="text-[0.625rem] text-neutral-500 shrink-0 ml-2">{n.time}</span>
            </div>
            <p
                className="text-xs text-neutral-700 m-0 leading-relaxed text-left"
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textAlign: 'left',
                }}
            >
                {n.preview}
            </p>
        </div>
    </div>
)

const OrbitAvatar = ({
    n,
    position,
    reverse = false,
    duration = 18,
}: {
    n: Notif
    position: 'top' | 'bottom'
    reverse?: boolean
    duration?: number
}) => (
    <div
        className={`absolute w-[68px] h-[68px] sm:w-[84px] sm:h-[84px] ${
            position === 'top' ? 'top-[0%] right-[8%]' : 'bottom-[2%] left-[4%]'
        }`}
    >
        {/* Rotating dashed ring */}
        <div
            className="absolute inset-0 rounded-full border border-dashed border-neutral-400/70"
            style={{
                animation: `spin ${duration}s linear infinite${reverse ? ' reverse' : ''}`,
            }}
        />
        {/* Avatar */}
        <div className="absolute inset-[9px] rounded-full overflow-hidden ring-4 ring-white shadow-md">
            <Image src={n.avatar} alt={n.name} fill className="object-cover" />
        </div>
    </div>
)

const NotificationOrbit = ({ visible }: { visible: boolean }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [cardShown, setCardShown] = useState(true)

    useEffect(() => {
        if (!visible) return

        const id = setInterval(() => {
            setCardShown(false)
            setTimeout(() => {
                setActiveIndex(i => (i + 1) % NOTIFICATIONS.length)
                setCardShown(true)
            }, 350)
        }, 3800)

        return () => clearInterval(id)
    }, [visible])

    const active = NOTIFICATIONS[activeIndex]
    const others = NOTIFICATIONS.filter((_, i) => i !== activeIndex)

    return (
        <div
            className="relative w-full max-w-[380px] lg:max-w-[440px] mx-auto aspect-square transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0 }}
        >
            {/* Dotted connecting path, drawn behind the card */}
            <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                fill="none"
            >
                <path
                    d="M 380 -20 C 330 30, 300 60, 316 110
                       C 336 175, 60 175, 84 240
                       C 104 300, 60 330, 20 420"
                    stroke="rgb(23 23 23 / 0.22)"
                    strokeWidth="2"
                    strokeDasharray="1 10"
                    strokeLinecap="round"
                />
            </svg>

            <div className="z-10 relative">
                <OrbitAvatar n={others[0]} position="top" duration={20} />
                <OrbitAvatar n={others[1]} position="bottom" duration={24} reverse />
            </div>

            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[86%] z-20 transition-all duration-300 ease-out"
                style={{
                    opacity: cardShown ? 1 : 0,
                    transform: `translate(-50%, -50%) translateY(${cardShown ? 0 : 8}px)`,
                }}
            >
                <NotifCard n={active} />
            </div>
        </div>
    )
}

export default function Hero() {
    const [graphicVisible, setGraphicVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setGraphicVisible(true), 400)
        return () => clearTimeout(t)
    }, [])

    return (
        <section className="relative flex w-full padding-block min-h-[100svh] bg-section overflow-hidden">

            {/* === VISTA MÓVIL === */}
            <div className="lg:hidden bg-blue-20 relative z-20 container-site flex flex-col items-center justify-end gap-6">
                <div className="w-full flex justify-center relative">
                    <NotificationOrbit visible={graphicVisible} />
                </div>

                <div className="flex flex-col items-start text-start gap-6 bg-amber-20 pb-5">
                    <h1
                        className="m-0 block text-neutral-950 text-balance leading-[1.06] tracking-tighter drop-shadow-sm"
                        style={{ fontSize: 'clamp(1.9rem, 2vw, 3rem)' }}
                    >
                        Landing pages para proyectos inmobiliarios
                    </h1>

                    <p className="text-sm md:text-base leading-relaxed text-neutral-700 m-0 text-balance">
                        Convertimos tu tráfico en inversionistas reales<br className="hidden md:block" /> contactando por WhatsApp.
                    </p>

                    <WhatsAppButton className='w-full'/>
                </div>
            </div>

            {/* === VISTA DESKTOP === */}
            <div className="hidden lg:flex flex-row w-full lg:py-30 justify-center items-center z-20 container-full gap-12">

                <div className="flex flex-col gap-8 items-start w-full">
                    <div className="flex flex-col items-start gap-6 text-left">
                        <h1
                            className="m-0 block text-neutral-950 text-balance leading-[1.06] drop-shadow-sm"
                            style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.5rem)' }}
                        >
                            Landing pages para proyectos inmobiliarios
                        </h1>
                        <div className="flex items-start pt-2 w-full">
                            <p className="text-base md:text-lg text-balance leading-relaxed text-neutral-700 m-0 w-auto">
                                Convertimos tu tráfico en inversionistas reales contactando por WhatsApp.
                            </p>
                        </div>
                        <WhatsAppButton />
                    </div>
                </div>

                <div className="w-full bg-white rounded-xl overflow-hidden relative flex justify-center items-center h-[650px]">
                    <NotificationOrbit visible={graphicVisible} />
                </div>

            </div>

        </section>
    )
}