// components/sections/CTAFinal.tsx
'use client'

import { useEffect, useRef } from 'react'

const WHATSAPP_URL =
  'https://wa.me/57TUNUMERO?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

export default function CTAFinal() {
  const innerRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.2 }
    )
    if (innerRef.current) {
      innerRef.current.style.opacity = '0'
      innerRef.current.style.transform = 'translateY(20px)'
      innerRef.current.style.transition = 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)'
      observer.observe(innerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="bg-[var(--color-bg)]"
      style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}
    >
      <div className="container-site">
        <div
          ref={innerRef}
          className="border-t border-[var(--color-border)] pt-[clamp(3rem,6vw,5rem)] grid gap-[clamp(2rem,5vw,5rem)] items-end"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          <h2
            className="text-[var(--color-text-primary)] m-0"
            style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 300, lineHeight: 1.08, letterSpacing: '-0.035em' }}
          >
            Tu próximo proyecto
            merece una landing
            que{' '}
            <span style={{ color: 'var(--color-accent)' }}>convierta.</span>
          </h2>

          <div className="flex flex-col items-start gap-7">
            <p className="text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[36ch]">
              El tráfico ya lo tienes.
              Lo que sigue es no desperdiciarlo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary-hero"
            >
              Hablar por WhatsApp
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-[clamp(3rem,6vw,5rem)] pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
          <span className="text-[0.8125rem] font-medium tracking-tight text-[var(--color-text-primary)]">
            Sebastian Arias
          </span>
          <span className="text-xs text-[var(--color-text-muted)] tracking-wide">
            © {new Date().getFullYear()} · Colombia
          </span>
        </div>
      </div>
    </section>
  )
}