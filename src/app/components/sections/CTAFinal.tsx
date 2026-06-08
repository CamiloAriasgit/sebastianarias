// components/sections/CTAFinal.tsx
'use client'

import { useEffect, useRef } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

export default function CTAFinal() {
  const headRef = useRef<HTMLDivElement>(null)
  const ctaRef  = useRef<HTMLDivElement>(null)

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
      className="bg-[var(--color-bg)]"
      style={{ paddingBlock: 'clamp(5rem, 12vw, 11rem)' }}
    >
      <div className="container-site">

        {/* Headline grande — como el hero */}
        <div ref={headRef}>
          <h2
            className="m-0"
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 9rem)',
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            <span className="block text-[var(--color-text-primary)]">
              Tu próximo proyecto
            </span>
            <span className="block text-[var(--color-text-muted)]">
              merece más leads.
            </span>
          </h2>
        </div>

        {/* Párrafo + CTA */}
        <div
          ref={ctaRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-[clamp(2.5rem,5vw,4rem)] pt-[clamp(2rem,4vw,3rem)] border-t border-[var(--color-border)]"
        >
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] m-0 max-w-[40ch]">
            El tráfico ya lo tienes.
            Lo que sigue es no desperdiciarlo.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary-hero shrink-0"
          >
            Hablar por WhatsApp
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M7.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}