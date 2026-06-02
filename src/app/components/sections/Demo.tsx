// components/sections/Demo.tsx
'use client'

import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Demo() {
  const headRef    = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.1 }
    )

    ;[headRef.current, previewRef.current].forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 140}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 140}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="demo"
      className="section-dark"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBlock: 'clamp(4rem, 9vw, 8rem)',
      }}
    >
      <div className="container-site">

        {/* Cabecera */}
        <div
          ref={headRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 4vw, 4rem)',
            alignItems: 'end',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '1.25rem',
              }}
            >
              Demo
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--color-text-primary)',
                margin: 0,
              }}
            >
              Así se ve<br />
              en la práctica.
            </h2>
          </div>

          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
              margin: 0,
              maxWidth: '38ch',
            }}
          >
            Una landing construida para convertir.
            Diseño, tracking y WhatsApp estratégico
            funcionando desde el primer día.
          </p>
        </div>

        {/* Preview */}
        <div ref={previewRef}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textDecoration: 'none',
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '0.5px solid var(--color-border)',
              transition: 'border-color 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-border-hi)'
              const overlay = e.currentTarget.querySelector('.demo-overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '1'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              const overlay = e.currentTarget.querySelector('.demo-overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '0'
            }}
          >
            {/* Placeholder */}
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                background: 'var(--color-surface)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div style={{
                width: '100%',
                maxWidth: '480px',
                padding: '0 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                opacity: 0.25,
              }}>
                <div style={{ height: '2px', width: '3rem', background: 'var(--color-text-primary)', borderRadius: '1px' }} />
                <div style={{ height: '12px', width: '75%', background: 'var(--color-text-primary)', borderRadius: '2px' }} />
                <div style={{ height: '12px', width: '55%', background: 'var(--color-text-primary)', borderRadius: '2px' }} />
                <div style={{ height: '1px', width: '100%', background: 'var(--color-border-hi)', margin: '0.5rem 0' }} />
                <div style={{ height: '8px', width: '90%', background: 'var(--color-text-secondary)', borderRadius: '2px' }} />
                <div style={{ height: '8px', width: '70%', background: 'var(--color-text-secondary)', borderRadius: '2px' }} />
                <div style={{ height: '8px', width: '80%', background: 'var(--color-text-secondary)', borderRadius: '2px' }} />
                <div style={{ height: '1px', width: '100%', background: 'var(--color-border)', margin: '0.25rem 0' }} />
                <div style={{ height: '32px', width: '9rem', background: 'var(--color-surface-hi)', borderRadius: '5px', border: '0.5px solid var(--color-border-hi)' }} />
              </div>

              <p
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                }}
              >
                Demo disponible próximamente
              </p>
            </div>

            {/* Overlay hover */}
            <div
              className="demo-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(10,10,10,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                backdropFilter: 'blur(2px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--color-text-primary)',
                  color: 'var(--color-bg)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                Ver demo
                <ArrowUpRight size={15} strokeWidth={2} />
              </div>
            </div>
          </a>

          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              marginTop: '1rem',
              letterSpacing: '0.02em',
            }}
          >
            Proyecto ficticio · Muestra del estándar de entrega
          </p>
        </div>

      </div>
    </section>
  )
}