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
    // Agregamos un padding superior (pt-4) para que el header "flote" al hacer scroll
    <header className="fixed top-0 inset-x-0 z-50 p-4 transition-all duration-300">
      <div 
        className={`container-site mx-auto transition-all duration-300 ${
          scrolled
            ? 'bg-neutral-900/80 backdrop-blur-md border border-[var(--color-border)] rounded-full shadow-lg px-6'
            : 'bg-transparent border border-transparent px-4'
        }`}
      >
        <div className="flex items-center justify-between h-14">
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
      </div>
    </header>
  )
}