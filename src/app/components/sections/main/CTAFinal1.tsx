// components/sections/CTAFinal.tsx
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

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

export default function CTAFinal() {
  const headRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        })
      },
      { threshold: 0.15 }
    )

      ;[headRef.current, ctaRef.current].forEach((el, i) => {
        if (!el) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms`
        observer.observe(el)
      })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="bg-[#EDEFF3] relative overflow-hidden"
      style={{ paddingBlock: 'clamp(6rem, 15vw, 14rem)' }} 
    >
      <div className="container-site relative z-10">
        {/* Card con la imagen y bordes redondeados xl */}
        <div className="relative rounded-xl overflow-hidden py-16 px-6 md:py-24">
          
          {/* Imagen importada desde la carpeta public */}
          <Image
            src="/cta-bg.jpg" // Cambia esta ruta según el nombre exacto de tu imagen en la carpeta public
            alt="Fondo CTA"
            fill
            className="object-cover"
            priority
          />

          {/* Headline grande — como el hero */}
          <div ref={headRef} className="flex flex-col items-center text-center gap-6 pb-30 md:pb-0 relative z-10">
            <h2
              className="m-0"
              style={{
                fontSize: 'clamp(2rem, 4vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
              }}
            >
              <span className="block font-medium text-black tracking-tighter">
                Tu próximo proyecto
              </span>
              <span className="block font-medium text-black tracking-tighter">
                merece más leads.
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-black m-0 max-w-[40ch]">
              El tráfico ya lo tienes.
              Lo que sigue es no desperdiciarlo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-neutral-900 justify-center items-center gap-2 py-3 w-47 rounded-full text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-neutral-800 group"
            >
              <WaIconContact />
              Agendar llamada
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}