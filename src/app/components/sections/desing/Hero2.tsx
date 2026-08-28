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

const OrbitItem = ({ n, step, scale = 1 }: { n: Notif; step: number; scale?: number }) => {
    const cycle = Math.floor(step / 3)
    const positionIndex = step % 3

    // Posiciones en grados: Arriba (-90deg), Izquierda/tarjeta (-180deg), Abajo (-270deg).
    // Arriba y Abajo caen justo sobre la línea vertical del centro del círculo, que coincide
    // con el borde derecho de la pantalla — por eso se recortan a la mitad al quedar en reposo.
    // Los acercamos levemente hacia la posición de la tarjeta (visible) para que no se corten:
    // el de arriba se acerca poco (recorrido más corto) y el de abajo se acerca más (recorrido
    // más extenso), manteniéndose ambos sobre la trayectoria punteada.
    const TOP_REST_ADJUST = 14
    const BOTTOM_REST_ADJUST = 24
    const offsets = [-90 - TOP_REST_ADJUST, -180, -270 + BOTTOM_REST_ADJUST]
    const angle = -360 * cycle + offsets[positionIndex]

    const isCard = positionIndex === 1

    // Dimensiones base escaladas (todas derivan del prop `scale` para mantener
    // proporciones idénticas al diseño original, solo más grandes en desktop)
    const dotSize = 56 * scale
    const dotRadius = dotSize / 2
    const cardW = 280 * scale
    const cardH = 72 * scale
    const cardRadius = 16 * scale
    const avatarCard = 44 * scale
    const avatarInset = 14 * scale
    const avatarBorderCard = Math.max(1.5, 2 * scale)
    const avatarBorderDot = Math.max(3, 4 * scale)
    const textLeftCard = 70 * scale
    const textLeftDot = 90 * scale
    const textWidth = cardW - textLeftCard - avatarInset
    const nameFontSize = 14 * scale
    const timeFontSize = 10.4 * scale
    const previewFontSize = 12 * scale

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
                            width: isCard ? cardW : dotSize,
                            height: isCard ? cardH : dotSize,
                            transform: 'translate(-50%, -50%)',
                            borderRadius: isCard ? cardRadius : dotRadius,
                            background: isCard ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                            boxShadow: isCard ? '0 12px 40px rgba(0,0,0,0.12)' : 'none',
                            backdropFilter: isCard ? 'blur(8px)' : 'none',
                        }}
                    >
                        {/* Anillo punteado (se desvanece al abrir la tarjeta) */}
                        <div
                            className="absolute transition-all duration-[900ms] ease-in-out rounded-full border border-dashed border-neutral-400/80 pointer-events-none"
                            style={{
                                width: dotSize,
                                height: dotSize,
                                left: isCard ? -20 * scale : 0,
                                top: 0,
                                opacity: isCard ? 0 : 1,
                                animation: 'spin 22s linear infinite',
                            }}
                        />

                        {/* AVATAR: Se mueve independientemente dentro de la caja */}
                        <div
                            className="absolute transition-all duration-[900ms] ease-in-out rounded-full overflow-hidden z-10"
                            style={{
                                width: isCard ? avatarCard : dotSize,
                                height: isCard ? avatarCard : dotSize,
                                left: isCard ? avatarInset : 0,
                                top: isCard ? avatarInset : 0,
                                border: isCard
                                    ? `${avatarBorderCard}px solid white`
                                    : `${avatarBorderDot}px solid white`,
                            }}
                        >
                            <Image src={n.avatar} alt={n.name} fill className="object-cover" />
                        </div>

                        {/* TEXTOS: Ancho fijo absoluto para evitar que se compriman durante el slide */}
                        <div
                            className="absolute flex flex-col justify-center transition-all duration-[900ms] ease-in-out z-10"
                            style={{
                                left: isCard ? textLeftCard : textLeftDot,
                                top: 0,
                                height: '100%',
                                width: textWidth,
                                opacity: isCard ? 1 : 0,
                                pointerEvents: isCard ? 'auto' : 'none',
                            }}
                        >
                            <div className="flex items-center justify-between mb-0.5 gap-2">
                                <p
                                    className="font-semibold text-neutral-900 m-0 truncate"
                                    style={{ fontSize: nameFontSize }}
                                >
                                    {n.name}
                                </p>
                                <span
                                    className="text-neutral-500 shrink-0"
                                    style={{ fontSize: timeFontSize }}
                                >
                                    {n.time}
                                </span>
                            </div>
                            <p
                                className="text-neutral-600 m-0 leading-snug"
                                style={{
                                    fontSize: previewFontSize,
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

const NotificationOrbit = ({
    visible,
    size,
    scale = 1,
}: {
    visible: boolean
    size: string
    scale?: number
}) => {
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
            className="relative transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0, width: size, height: size }}
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
                <OrbitItem key={n.id} n={n} step={i + rotation} scale={scale} />
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

            {/*
                === GRÁFICO ORBITAL ===
                Wrapper "full-bleed": rompe el padding del layout y mide 100vw real,
                anclado al viewport (no al contenedor). Así "right-0" más abajo
                corresponde al borde derecho real de la PANTALLA, no del contenedor.
            */}
            <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 pointer-events-none z-10">

                {/*
                    MOBILE: diámetro = 100vw.
                    translate-x-1/2 centra el círculo sobre el borde derecho de la pantalla,
                    lo que deja visible exactamente la mitad izquierda de la circunferencia.
                    Con diámetro = 100vw, el punto izquierdo del círculo (donde aparece la
                    tarjeta abierta) cae matemáticamente en el centro horizontal de la pantalla.
                    Ajusta el `top` si necesitas mover el gráfico verticalmente.
                */}
                <div className="lg:hidden absolute top-[34%] right-0 -translate-y-1/2 translate-x-1/2">
                    <NotificationOrbit visible={graphicVisible} size="100vw" scale={1} />
                </div>

                {/*
                    DESKTOP: círculo más grande (scale 1.4), mismo anclaje: centro
                    exactamente sobre el borde derecho de la pantalla. Ajusta `size`
                    y `scale` a gusto — todos los elementos internos escalan juntos.
                */}
                <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
                    <NotificationOrbit visible={graphicVisible} size="640px" scale={1.4} />
                </div>
            </div>

            {/* === VISTA MÓVIL === */}
            <div className="lg:hidden relative z-20 container-site flex flex-col items-center justify-end gap-6">
                <div className="flex flex-col items-start text-start gap-6 pb-5">
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

                {/*
                    Columna derecha "libre": ya no tiene fondo blanco ni recorte.
                    Se conserva vacía únicamente para mantener el balance del grid
                    de 2 columnas — el gráfico real vive en el overlay de arriba,
                    sin ningún contenedor que lo limite.
                */}
                <div className="w-full relative h-[650px]" aria-hidden="true" />
            </div>
        </section>
    )
}