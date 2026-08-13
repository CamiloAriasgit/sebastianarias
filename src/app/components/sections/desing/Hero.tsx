'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

/* ─────────────────────────────────────────────────────────────
   INTEGRACIÓN EN TU PROYECTO (borrar este bloque al copiar):
   1) Reemplaza <MockWhatsAppButton /> por:
        import { WhatsAppButton } from '../../ui/WhatsAppButton'
   2) Reemplaza className="mock-container" por tu clase real "container"
   3) Reemplaza los bloques `tone` (gradientes) por tus <Image /> reales
      de Next — el punto exacto está marcado con // IMAGEN REAL AQUÍ
───────────────────────────────────────────────────────────────── */

const WaIcon = ({ size = 12 }) => (
    <svg viewBox="0 0 30.667 30.667" width={size} height={size} fill="currentColor">
        <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z" />
    </svg>
)

// Placeholder: reemplaza `tone` por tu fotografía real de cada proyecto.
const PROJECTS = [
    {
        id: 'bosque',
        name: 'Reserva del Bosque',
        location: 'Envigado, Antioquia',
        tone: 'linear-gradient(155deg, #3a4a3d 0%, #1b241d 55%, #0a0d0a 100%)',
        lead: {
            name: 'Carlos Mendoza',
            time: 'ahora',
            message: 'Buenas, vi el proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?',
        },
    },
    {
        id: 'altos',
        name: 'Altos de Provenza',
        location: 'Sabaneta, Antioquia',
        tone: 'linear-gradient(155deg, #4a4237 0%, #241f19 55%, #0d0b09 100%)',
        lead: {
            name: 'Valeria Ríos',
            time: '2 min',
            message: 'Me interesa el apartamento de 2 habitaciones. ¿Tienen sala de ventas este fin de semana?',
        },
    },
    {
        id: 'cielo',
        name: 'Cielo Nueve14',
        location: 'El Poblado, Medellín',
        tone: 'linear-gradient(155deg, #2b3040 0%, #171a24 55%, #0a0b10 100%)',
        lead: {
            name: 'Andrés Castillo',
            time: '5 min',
            message: '¿Aún hay unidades disponibles en el piso 8? Los planos me convencieron.',
        },
    },
]

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
const lerp = (a, b, t) => a + (b - a) * t
const ease = (t) => 1 - Math.pow(1 - t, 3) // easeOutCubic

function MockWhatsAppButton({ children = 'Agendar llamada' }) {
    return (
        <a
            href="https://wa.me/573235619283"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 text-white text-sm font-medium px-5 py-3 hover:bg-neutral-800 transition-colors"
        >
            <WaIcon size={14} />
            {children}
        </a>
    )
}

function LeadCard({ lead, style, floating }) {
    return (
        <div
            className="pointer-events-none absolute w-[240px] rounded-2xl px-4 py-3 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            style={{
                background: 'rgba(255,255,255,0.92)',
                ...style,
            }}
        >
            <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                    <div className="w-[16px] h-[16px] rounded-md flex items-center justify-center bg-[#25d366] text-white shrink-0">
                        <WaIcon size={10} />
                    </div>
                    <span className="text-[0.65rem] font-medium text-neutral-500 tracking-wide">WhatsApp</span>
                </div>
                <span className="text-[0.6rem] text-neutral-400">{lead.time}</span>
            </div>
            <p className="text-[0.8rem] font-semibold text-neutral-950 m-0 mb-0.5 text-left">{lead.name}</p>
            <p className="text-[0.72rem] text-neutral-700 m-0 leading-snug text-left">{lead.message}</p>
        </div>
    )
}

/* ── Panel individual (columna en desktop / fila en mobile) ── */
function ProjectPanel({ project, index, growValue, isActive, onEnter, onLeave, reduceMotion, isRow }) {
    const panelRef = useRef(null)
    const cardRef = useRef(null)
    const targetOffset = useRef({ x: 0, y: 0 })
    const currentOffset = useRef({ x: 0, y: 0 })
    const rafId = useRef(null)

    const handleMouseMove = useCallback((e) => {
        if (reduceMotion || !panelRef.current) return
        const rect = panelRef.current.getBoundingClientRect()
        const relX = e.clientX - rect.left
        const relY = e.clientY - rect.top
        // desplazamiento magnético acotado respecto al centro del panel
        const maxOffset = 26
        const cx = clamp(((relX / rect.width) - 0.5) * 2, -1, 1)
        const cy = clamp(((relY / rect.height) - 0.5) * 2, -1, 1)
        targetOffset.current = { x: cx * maxOffset, y: cy * maxOffset }

        // posiciona la tarjeta cerca del cursor (offset base + magnetismo)
        if (cardRef.current) {
            cardRef.current.style.left = `${clamp(relX, 90, rect.width - 90)}px`
            cardRef.current.style.top = `${clamp(relY - 70, 10, rect.height - 90)}px`
        }
    }, [reduceMotion])

    useEffect(() => {
        if (!isActive || reduceMotion) {
            if (rafId.current) cancelAnimationFrame(rafId.current)
            return
        }
        const tick = () => {
            currentOffset.current.x = lerp(currentOffset.current.x, targetOffset.current.x, 0.14)
            currentOffset.current.y = lerp(currentOffset.current.y, targetOffset.current.y, 0.14)
            if (cardRef.current) {
                cardRef.current.style.transform = `translate(${currentOffset.current.x}px, ${currentOffset.current.y}px)`
            }
            rafId.current = requestAnimationFrame(tick)
        }
        rafId.current = requestAnimationFrame(tick)
        return () => rafId.current && cancelAnimationFrame(rafId.current)
    }, [isActive, reduceMotion])

    return (
        <div
            ref={panelRef}
            tabIndex={0}
            role="button"
            aria-label={`Ver mensaje de lead recibido para ${project.name}`}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onFocus={onEnter}
            onBlur={onLeave}
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            style={{
                flexGrow: growValue,
                flexBasis: 0,
                minWidth: isRow ? undefined : 0,
                minHeight: isRow ? 0 : undefined,
                transition: reduceMotion ? 'none' : 'flex-grow 0.7s cubic-bezier(0.16,1,0.3,1)',
                background: project.tone, // IMAGEN REAL AQUÍ → reemplazar por <Image fill className="object-cover" />
                cursor: 'pointer',
            }}
        >
            {/* velo oscuro para legibilidad del texto sobre la foto */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 45%, transparent 70%)',
                    opacity: isActive ? 0.35 : 0.75,
                    transition: 'opacity 0.6s ease',
                }}
            />

            {/* etiqueta del proyecto — siempre visible */}
            <div
                className="absolute left-4 bottom-4 right-4 text-white"
                style={{
                    opacity: isActive ? 0 : 1,
                    transform: isActive ? 'translateY(6px)' : 'translateY(0)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
            >
                <p className="text-sm font-semibold m-0 tracking-tight">{project.name}</p>
                <p className="text-[0.7rem] text-white/70 m-0 mt-0.5">{project.location}</p>
            </div>

            {/* tarjeta de lead flotante */}
            <div
                ref={cardRef}
                style={{
                    position: 'absolute',
                    left: isRow ? '50%' : '30%',
                    top: isRow ? '50%' : '40%',
                    marginLeft: isRow ? -120 : 0,
                    marginTop: isRow ? -46 : 0,
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.45s ease',
                }}
            >
                <LeadCard lead={project.lead} />
            </div>
        </div>
    )
}

export default function LiveLeadsSection() {
    const [activeIndex, setActiveIndex] = useState(null)
    const [scrollGrow, setScrollGrow] = useState([1, 1, 1])
    const [reduceMotion, setReduceMotion] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)
    const scrollWrapRef = useRef(null)
    const tickingRef = useRef(false)

    useEffect(() => {
        const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
        const mqlDesktop = window.matchMedia('(min-width: 1024px)')
        const update = () => {
            setReduceMotion(mql.matches)
            setIsDesktop(mqlDesktop.matches)
        }
        update()
        mql.addEventListener('change', update)
        mqlDesktop.addEventListener('change', update)
        return () => {
            mql.removeEventListener('change', update)
            mqlDesktop.removeEventListener('change', update)
        }
    }, [])

    // scroll-linked (sin pin) — solo corre en mobile
    useEffect(() => {
        if (isDesktop || reduceMotion) {
            setScrollGrow([1, 1, 1])
            return
        }
        const handleScroll = () => {
            if (tickingRef.current) return
            tickingRef.current = true
            requestAnimationFrame(() => {
                const el = scrollWrapRef.current
                if (el) {
                    const rect = el.getBoundingClientRect()
                    const total = rect.height - window.innerHeight
                    const progress = clamp(total > 0 ? -rect.top / total : 0, 0, 1)

                    const grows = PROJECTS.map((_, i) => {
                        // ventana triangular: cada panel "pesa" más cerca de su tercio de scroll
                        const center = (i + 0.5) / PROJECTS.length
                        const dist = Math.abs(progress - center) * PROJECTS.length
                        const weight = clamp(1 - dist, 0, 1)
                        return 1 + ease(weight) * 3.2
                    })
                    setScrollGrow(grows)
                }
                tickingRef.current = false
            })
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [isDesktop, reduceMotion])

    const growFor = (i) => {
        if (isDesktop) {
            if (reduceMotion) return 1
            if (activeIndex === null) return 1
            return activeIndex === i ? 3.1 : 0.75
        }
        return scrollGrow[i]
    }

    const isActiveFor = (i) => (isDesktop ? activeIndex === i : scrollGrow[i] > 2.2)

    return (
        <section className="w-full bg-neutral-950 py-20 lg:py-28">
            <div className="container mx-auto max-w-[1400px] px-6 lg:px-10">
                <div className="max-w-xl mb-10 lg:mb-14 text-center lg:text-left mx-auto lg:mx-0">
                    <span className="text-xs font-medium tracking-widest uppercase text-white/50">
                        Leads en tiempo real
                    </span>
                    <h2 className="mt-3 text-3xl lg:text-4xl font-medium text-white tracking-tight text-balance">
                        Cada proyecto, con su propia conversación abierta.
                    </h2>
                    <p className="mt-3 text-sm lg:text-base text-white/60 leading-relaxed">
                        Así llegan los mensajes reales de inversionistas cuando el WhatsApp está
                        donde tiene que estar.
                    </p>
                </div>

                {/* ── Desktop: fila de columnas, hover expande ── */}
                <div className="hidden lg:flex gap-1 h-[560px] rounded-2xl overflow-hidden">
                    {PROJECTS.map((project, i) => (
                        <ProjectPanel
                            key={project.id}
                            project={project}
                            index={i}
                            growValue={growFor(i)}
                            isActive={isActiveFor(i)}
                            onEnter={() => setActiveIndex(i)}
                            onLeave={() => setActiveIndex(null)}
                            reduceMotion={reduceMotion}
                            isRow={false}
                        />
                    ))}
                </div>

                {/* ── Mobile: columna de filas, scroll expande (sin pin) ──
                     El contenedor mismo mide ~230vh: esa altura ES el recorrido
                     de scroll. No hay sticky ni spacer — la página nunca deja
                     de moverse con el dedo del usuario. */}
                <div
                    ref={scrollWrapRef}
                    className="lg:hidden flex flex-col gap-1 rounded-2xl overflow-hidden"
                    style={{ height: reduceMotion ? 'auto' : '230vh' }}
                >
                    {PROJECTS.map((project, i) => (
                        <ProjectPanel
                            key={project.id}
                            project={project}
                            index={i}
                            growValue={reduceMotion ? 1 : growFor(i)}
                            isActive={reduceMotion ? true : isActiveFor(i)}
                            onEnter={() => {}}
                            onLeave={() => {}}
                            reduceMotion={reduceMotion}
                            isRow={true}
                        />
                    ))}
                </div>

                <div className="mt-12 lg:mt-16 flex justify-center lg:justify-start">
                    <MockWhatsAppButton>¿Y tu proyecto? Agendar llamada</MockWhatsAppButton>
                </div>
            </div>
        </section>
    )
}