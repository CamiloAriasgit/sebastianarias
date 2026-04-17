"use client";

import React from "react";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // WhatsApp con mensaje predeterminado estratégico
  const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vi%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto%20o%20colaborar%20contigo.";

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-arias-14646831a", icon: "/social/linkedin.png" },
    { name: "Instagram", href: "https://www.instagram.com/sebastianariasbe?igsh=aHhwaWF4cnRnNjBm", icon: "/social/instagram.webp" },
    { name: "Facebook", href: "https://www.facebook.com/share/1KnkhR9p9R/", icon: "/social/facebook.png" },
  ];

  return (
    <footer className="w-full bg-neutral-950 px-4 pb-10 pt-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          
          {/* Columna 1: Brand & Vision */}
          <div className="max-w-md">
            <h2 className="text-lg font-bold tracking-tight text-white mb-4">
              Sebastian Arias <span className="text-neutral-600 font-normal">/ Software And Business</span>
            </h2>
            <p className="text-base font-medium leading-relaxed text-neutral-500">
              Enfocado en transformar problemas complejos en soluciones simples y escalables.
            </p>
          </div>

          {/* Columna 2: Contacto Directo (WhatsApp Destacado) */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">Contacto Directo</h3>
            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xl font-bold text-[#25D366]/70 transition-colors hover:text-white"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 text-neutral-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <span className="text-lg font-bold text-neutral-500">+57 323 561 9283</span>
              <p className="text-sm text-neutral-600">Antioquia, Colombia.</p>
            </div>
          </div>

          {/* Columna 3: Redes Sociales (Con lugar para PNGs) */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">Social</h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm font-bold text-neutral-400 transition-all hover:text-white"
                >
                  {/* Contenedor para tu imagen PNG */}
                  <div className="h-5 w-5 opacity-90">
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Disponible para proyectos 2026
            </p>
          </div>

          <p className="text-[11px] font-medium text-neutral-700 uppercase text-center tracking-wider">
            © {currentYear} Sebastian Arias. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}