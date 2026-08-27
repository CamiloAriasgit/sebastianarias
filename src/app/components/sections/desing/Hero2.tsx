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
    // Calculamos el ángulo para que dé vueltas perfectas por todo el círculo
    const cycle = Math.floor(step / 3)
    const positionIndex = step % 3
    
    // Posiciones en grados: Arriba (-90deg), Izquierda (-180deg), Abajo (-270deg)
    const offsets = [-90, -180, -270]
    // El ángulo acumulado asegura que siga avanzando por el trazo hacia adelante
    const angle = -360 * cycle + offsets[positionIndex]

    // La posición "middle" (tarjeta abierta) es la índice 1 (Izquierda)
    const isCard = positionIndex === 1 

    return (
        <div
            className="absolute inset-0 pointer-events-none transition-transform duration-[900ms] ease-in-out"
            style={{
                transform: `rotate(${angle}deg)`,
                zIndex: isCard ? 20 : 10,
            }}
        >
            {/* Punto de anclaje: se ubica en el radio exacto del SVG (40% de distancia desde el centro) */}
            <div className="absolute top-1/2 left-[90%] w-0 h-0 pointer-events-none">
                
                {/* Contra-rotador: gira en dirección opuesta para mantener la tarjeta perfectamente derecha */}
                <div
                    className="absolute inset-0 transition-transform duration-[900ms] ease-in-out pointer-events-auto"
                    style={{ transform: `rotate(${-angle}deg)` }}
                >
                    <div
                        className="absolute flex items-center overflow-hidden transition-all duration-[900ms] ease-in-out"
                        style={{
                            // Usamos cqw (Container Query Width) para basarnos en el ancho del contenedor padre
                            width: isCard ? '90cqw' : 'clamp(56px, 19cqw, 84px)',
                            height: isCard ? 'auto' : 'clamp(56px, 19cqw, 84px)',
                            // Alinea el centro del avatar exacto en el trazo del círculo en todo momento
                            transform: `translate(${isCard ? '-34px' : '-50%'}, -50%)`,
                            borderRadius: isCard ? '1rem' : '9999px',
                            padding: isCard ? '0.75rem 1rem' : '4px',
                            gap: isCard ? '0.75rem' : 0,
                            background: isCard ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
                            boxShadow: isCard ? '0 12px 50px rgba(0,0,0,0.16)' : 'none',
                            backdropFilter: isCard ? 'blur(6px)' : 'none',
                        }}
                    >
                        {/* Anillo punteado que envuelve solo a los avatares */}
                        <div
                            className="absolute inset-0 rounded-full border border-dashed border-neutral-400/70 transition-opacity duration-500 pointer-events-none"
                            style={{
                                opacity: isCard ? 0 : 1,
                                animation: 'spin 22s linear infinite',
                            }}
                        />

                        <div
                            className="relative shrink-0 rounded-full overflow-hidden ring-4 ring-white shadow-md transition-all duration-[900ms] ease-in-out z-10"
                            style={{ width: isCard ? 36 : '100%', height: isCard ? 36 : '100%' }}
                        >
                            <Image src={n.avatar} alt={n.name} fill className="object-cover" />
                        </div>

                        <div
                            className="min-w-0 flex-1 transition-all duration-500 ease-in-out overflow-hidden z-10"
                            style={{ opacity: isCard ? 1 : 0, maxWidth: isCard ? '100%' : 0 }}
                        >
                            <div className="flex items-center justify-between mb-0.5 gap-2">
                                <p className="text-sm font-medium text-neutral-950 m-0 text-left truncate">
                                    {n.name}
                                </p>
                                <span className="text-[0.625rem] text-neutral-500 shrink-0">{n.time}</span>
                            </div>
                            <p
                                className="text-xs text-neutral-700 m-0 leading-relaxed text-left"
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
            style={{ opacity: visible ? 1 : 0, containerType: 'inline-size' }}
        >
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