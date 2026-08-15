// components/sections/CTAFinal.tsx
'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { WhatsAppButton } from '../../ui/WhatsAppButtonLight'

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
    <section className="bg-section relative overflow-hidden pb-6">
      <div className="container-site relative z-10">
        <div className="relative rounded-xl overflow-hidden py-16 px-2 md:py-24 flex flex-col justify-center items-center min-h-[400px] bg-neutral-900">

          <div ref={headRef} className="flex flex-col items-center text-center gap-6 relative z-10">
            <h2
              className="m-0 tracking-tighter"
              style={{
                fontSize: 'clamp(2rem, 4vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.02,
              }}
            >
              <span className="block text-white tracking-tighter">
                Tu próximo proyecto
              </span>
              <span className="block text-white tracking-tighter">
                merece más leads.
              </span>
            </h2>
            <p className="text-sm font-light leading-relaxed text-white m-0 max-w-[40ch] hidden md:block">
              El tráfico ya lo tienes.
              Lo que sigue es no desperdiciarlo.
            </p>
            
            <WhatsAppButton text="Agendar llamada" />
          </div>

        </div>
      </div>
    </section>
  )
}