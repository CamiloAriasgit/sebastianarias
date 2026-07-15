'use client'

import { useEffect, useRef } from 'react'

const WHATSAPP_URL =
    'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const WaIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg viewBox="0 0 30.667 30.667" className={className} fill="currentColor">
        <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z" />
    </svg>
)

// Crooked "for sale" style yard sign standing in an empty, dashed-off plot.
// The board reads 404 the way a lot number would, and a second tag
// swings underneath announcing the listing doesn't exist.
const LostLotSign = () => {
    const signRef = useRef<SVGGElement>(null)
    const tagRef = useRef<SVGGElement>(null)

    useEffect(() => {
        const sign = signRef.current
        const tag = tagRef.current
        if (!sign || !tag) return

        sign.style.transform = 'translateY(-60px) rotate(0deg)'
        sign.style.opacity = '0'
        tag.style.opacity = '0'

        const t1 = setTimeout(() => {
            sign.style.transition = 'transform 0.9s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease'
            sign.style.transform = 'translateY(0px) rotate(-7deg)'
            sign.style.opacity = '1'
        }, 150)

        const t2 = setTimeout(() => {
            tag.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)'
            tag.style.opacity = '1'
            tag.style.transform = 'rotate(11deg)'
        }, 650)

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
        }
    }, [])

    return (
        <svg viewBox="0 0 260 300" className="w-[220px] md:w-[260px] h-auto mx-auto" aria-hidden="true">
            {/* empty plot outline */}
            <rect
                x="20" y="230" width="220" height="46" rx="4"
                fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="6 6"
            />
            <line x1="20" y1="276" x2="240" y2="276" stroke="#a1a1aa" strokeWidth="1.5" />

            <g ref={signRef} style={{ transformOrigin: '128px 200px' }}>
                {/* post */}
                <rect x="125" y="150" width="6" height="110" fill="#18181b" />
                {/* board */}
                <rect x="48" y="96" width="160" height="70" rx="10" fill="#18181b" />
                <text
                    x="128" y="146"
                    textAnchor="middle"
                    fontSize="46"
                    fontWeight="700"
                    fill="#EDEFF3"
                    fontFamily="inherit"
                >
                    404
                </text>
            </g>

            <g ref={tagRef} style={{ transformOrigin: '178px 176px', opacity: 0 }}>
                <line x1="168" y1="150" x2="176" y2="168" stroke="#a1a1aa" strokeWidth="1.5" />
                <line x1="192" y1="150" x2="184" y2="168" stroke="#a1a1aa" strokeWidth="1.5" />
                <rect x="152" y="168" width="72" height="26" rx="6" fill="#ffffff" stroke="#d4d4d8" />
                <text x="188" y="185" textAnchor="middle" fontSize="10" fontWeight="600" fill="#3f3f46" letterSpacing="0.5">
                    NO EXISTE
                </text>
            </g>
        </svg>
    )
}

export default function NotFound() {
    const paraRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (!paraRef.current) return
        paraRef.current.style.opacity = '0'
        paraRef.current.style.transform = 'translateY(14px)'
        paraRef.current.style.transition =
            'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 280ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 280ms'
        const t = setTimeout(() => {
            if (!paraRef.current) return
            paraRef.current.style.opacity = '1'
            paraRef.current.style.transform = 'translateY(0)'
        }, 60)
        return () => clearTimeout(t)
    }, [])

    return (
        <section
            className="relative w-full padding-block py-40 md:py-32 bg-[#EDEFF3] overflow-hidden"
            style={{
                backgroundImage:
                    'repeating-linear-gradient(0deg, rgba(161,161,170,0.14) 0px, rgba(161,161,170,0.14) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(161,161,170,0.14) 0px, rgba(161,161,170,0.14) 1px, transparent 1px, transparent 40px)',
            }}
        >
            <div className="relative z-20 container-site w-full max-w-3xl px-4 flex flex-col items-center justify-center text-center gap-6">
                <span className="text-xs font-medium tracking-[0.2em] text-zinc-500">
                    ERROR 404
                </span>

                <LostLotSign />

                <h1
                    className="m-0 block text-neutral-950 font-medium tracking-tighter drop-shadow-sm"
                    style={{ fontSize: 'clamp(1.6rem, 3.4vw, 3.2rem)', lineHeight: 1.1 }}
                >
                    Esta dirección no aparece en ningún plano.
                </h1>

                <p
                    ref={paraRef}
                    className="text-sm md:text-base leading-relaxed text-neutral-700 m-0 max-w-[48ch]"
                >
                    El enlace puede estar mal escrito, la página se movió, o este lote nunca se construyó.
                    Mientras lo revisamos, escríbenos y seguimos la conversación por WhatsApp.
                </p>

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex bg-neutral-900 justify-center items-center gap-2 py-3 px-6 rounded-full text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-neutral-800"
                >
                    <WaIcon className="w-5 h-5 fill-white" />
                    Escribir por WhatsApp
                </a>

                <a
                    href="/"
                    className="text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-800 transition-colors"
                >
                    Volver al inicio
                </a>
            </div>
        </section>
    )
}