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

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="fixed bottom-4 inset-x-0 z-50">
            <div className="container-site md:max-w-md md:mx-auto">
                <div
                    className={`bg-black/30 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out rounded-[30px]`}
                >
                    {/* Lista de enlaces (se abre arriba, empuja la altura) */}
                    <nav
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <ul className="flex flex-col gap-1 px-3 pt-4 pb-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="block px-3 py-2.5 text-base font-medium text-white/90 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Fila fija: avatar / contactar / menu */}
                    <div className="flex items-center justify-between h-15 px-3">
                        <Link
                            href="https://sebastianarias.com"
                            className="flex items-center justify-center shrink-0"
                        >
                            <Image
                                src="/images/sebastian-profile.jpg"
                                alt="Sebastian Arias"
                                width={44}
                                height={44}
                                className="rounded-full object-cover"
                            />
                        </Link>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full mx-2 h-10 rounded-full bg-neutral-300 text-black text-sm font-medium shadow-inner shadow-white hover:bg-neutral-300 transition-colors"
                        >
                            Contactar
                        </a>

                        <button
                            onClick={toggleMenu}
                            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 shrink-0"
                        >
                            <div className="flex flex-col justify-center items-end gap-1">
                                <span
                                    className={`w-4 h-[2px] bg-neutral-300 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[6px]' : ''
                                        }`}
                                />
                                <span
                                    className={`w-4 h-[2px] bg-neutral-300 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''
                                        }`}
                                />
                                <span
                                    className={`h-[2px] bg-neutral-300 rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'w-4 -rotate-45 -translate-y-[6px]' : 'w-4'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}