// components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const NAV_LINKS = [
  { name: 'Servicio', href: '#servicio' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Demo', href: '#demo' },
  { name: 'Planes', href: '#planes' },
  { name: 'Preguntas', href: '#faq' },
]

const WaIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-[#EDEFF3] via-[#EDEFF3] to-[#EDEFF3]/90 backdrop-blur-md">
      <div className="container-site mx-auto px-4">
        <div className="flex items-center justify-between h-15">

          <Link
            href="https://sebastianarias.com"
            className="flex items-center gap-3 no-underline"
          >
            <Image
              src="/images/sebastian-profile.jpg"
              alt="Sebastian Arias"
              width={35}
              height={35}
              className="rounded-full object-cover"
            />
            <span className="text-sm font-medium tracking-tight text-neutral-900">
              Sebastian Arias
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacto por WhatsApp"
              className="flex items-center justify-center p-2 rounded-full text-neutral-800 hover:text-black transition-colors duration-200"
            >
              <WaIcon />
            </a>

            <button
              onClick={toggleMenu}
              aria-label="Abrir menú"
              className="md:hidden flex flex-col justify-center items-end w-9 h-9 gap-1.5 p-2 text-neutral-800"
            >
              <span
                className={`w-5 h-[2px] bg-neutral-900 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[7.5px]' : ''
                  }`}
              />
              <span
                className={`w-5 h-[2px] bg-neutral-900 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`h-[2px] bg-neutral-900 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-5 -rotate-45 -translate-y-[7.5px]' : 'w-2.5'
                  }`}
              />
            </button>
          </div>

        </div>
      </div>

      <div
        className={`md:hidden fixed top-15 inset-x-0 h-[calc(100svh-3.75rem)] bg-[#EDEFF3] transition-all duration-300 flex flex-col justify-between p-6 ${isOpen
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
      >
        <nav className="flex flex-col gap-6 mt-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl font-medium tracking-tighter text-neutral-900 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-base"
          >
            <WaIcon className="w-5 h-5 fill-white" />
            <span>Agendar llamada</span>
          </a>
        </div>
      </div>
    </header>
  )
}