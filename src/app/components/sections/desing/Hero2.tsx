'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { WhatsAppButton } from '../../ui/WhatsAppButton'

const NOTIFICATIONS = [
    {
        id: 1,
        name: 'Carlos Mendoza',
        preview: 'Buenas, vi el proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?',
        time: 'ahora',
        avatar: '/avatars/profile-avatar-1.png',
    },
    {
        id: 2,
        name: 'Valeria Ríos',
        preview: 'Hola, me interesa el de 2 hab. ¿Tienen sala de ventas este fin de semana?',
        time: '1 min',
        avatar: '/avatars/profile-avatar-2.png',
    },
    {
        id: 3,
        name: 'Andrés Castillo',
        preview: '¿Aún hay unidades en el piso 8? Vi los planos y me convencieron.',
        time: '3 min',
        avatar: '/avatars/profile-avatar-3.jpg',
    },
]

type Notif = typeof NOTIFICATIONS[0]

const OrbitItem = ({ n, step }: { n: Notif; step: number }) => {
    const cycle = Math.floor(step / 3)
    const positionIndex = step % 3
    
    // Posiciones en grados: Arriba (-90deg), Izquierda (-180deg), Abajo (-270deg)
    const offsets = [-90, -180, -270]
    const angle = -360 * cycle + offsets[positionIndex]

    const isCard = positionIndex === 1 

    return (
        <div
            className="absolute inset-0 pointer-events-none transition-transform duration-[900ms] ease-in-out"
            style={{
                transform: `rotate(${angle}deg)`,
                zIndex: isCard ? 20 : 10,
            }}
        >
            <div className="absolute top-1/2 left-[90%] w-0 h-0 pointer-events-none">
                
                <div
                    className="absolute inset-0 transition-transform duration-[900ms] ease-in-out pointer-events-auto"
                    style={{ transform: `rotate(${-angle}deg)` }}
                >
                    {/* 
                        CONTENEDOR PRINCIPAL:
                        Mantiene siempre su transform en -50% -50% para que el crecimiento 
                        sea simétrico y el centro EXACTO de la tarjeta se quede sobre el trazo.
                    */}
                    <div
                        className="absolute overflow-hidden transition-all duration-[900ms] ease-in-out shadow-xl"
                        style={{
                            width: isCard ? 280 : 56,
                            height: isCard ? 72 : 56,
                            transform: 'translate(-50%, -50%)',
                            borderRadius: isCard ? 16 : 28,
                            background: isCard ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                            boxShadow: isCard ? '0 12px 40px rgba(0,0,0,0.12)' : 'none',
                            backdropFilter: isCard ? 'blur(8px)' : 'none',
                        }}
                    >
                        {/* Anillo punteado (se desvanece al abrir la tarjeta) */}
                        <div
                            className="absolute transition-all duration-[900ms] ease-in-out rounded-full border border-dashed border-neutral-400/80 pointer-events-none"
                            style={{
                                width: 56,
                                height: 56,
                                left: isCard ? -20 : 0, 
                                top: 0,
                                opacity: isCard ? 0 : 1,
                                animation: 'spin 22s linear infinite',
                            }}
                        />

                        {/* AVATAR: Se mueve independientemente dentro de la caja */}
                        <div
                            className="absolute transition-all duration-[900ms] ease-in-out rounded-full overflow-hidden z-10"
                            style={{
                                width: isCard ? 44 : 56,
                                height: isCard ? 44 : 56,
                                left: isCard ? 14 : 0,
                                top: isCard ? 14 : 0, // 72 (alto total) - 44 / 2 = 14px (centrado perfecto)
                                border: isCard ? '2px solid white' : '4px solid white',
                            }}
                        >
                            <Image src={n.avatar} alt={n.name} fill className="object-cover" />
                        </div>

                        {/* TEXTOS: Ancho fijo absoluto para evitar que se compriman durante el slide */}
                        <div
                            className="absolute flex flex-col justify-center transition-all duration-[900ms] ease-in-out z-10"
                            style={{
                                left: isCard ? 70 : 90, // Deslizamiento suave hacia la izquierda
                                top: 0,
                                height: '100%',
                                width: 196, // 280px - 70px(left) - 14px(padding right)
                                opacity: isCard ? 1 : 0,
                                pointerEvents: isCard ? 'auto' : 'none',
                            }}
                        >
                            <div className="flex items-center justify-between mb-0.5 gap-2">
                                <p className="text-sm font-semibold text-neutral-900 m-0 truncate">
                                    {n.name}
                                </p>
                                <span className="text-[0.65rem] text-neutral-500 shrink-0">{n.time}</span>
                            </div>
                            <p
                                className="text-xs text-neutral-600 m-0 leading-snug"
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
                    </div>
                </div>
            </div>
        </div>
    )
}

const NotificationOrbit = ({ visible }: { visible: boolean }) => {
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        if (!visible) return
        const id = setInterval(() => {
            setRotation(r => r + 1)
        }, 3800)
        return () => clearInterval(id)
    }, [visible])

    return (
        <div
            className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] mx-auto aspect-square transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0 }}
        >
            {/* Aro punteado geométricamente perfecto (Círculo completo) */}
            <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                    d="M 200 40 A 160 160 0 1 1 199.99 40"
                    stroke="rgb(23 23 23 / 0.22)"
                    strokeWidth="2"
                    strokeDasharray="4 8"
                    strokeLinecap="round"
                />
            </svg>

            {NOTIFICATIONS.map((n, i) => (
                <OrbitItem key={n.id} n={n} step={i + rotation} />
            ))}
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