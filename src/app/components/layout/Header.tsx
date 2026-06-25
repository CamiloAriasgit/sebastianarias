// components/layout/Header.tsx
'use client'

import { useEffect, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-900/80 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-site flex items-center justify-between h-14">
        <span
          className={`text-sm font-medium tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-[var(--color-text-primary)]' : 'text-black'
          }`}
        >
          Sebastian Arias
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm hover:text-[var(--color-text-primary)] transition-colors duration-300 no-underline ${
            scrolled ? 'text-[var(--color-text-secondary)]' : 'text-black'
          }`}
        >
          Contacto
        </a>
      </div>
    </header>
  )
}