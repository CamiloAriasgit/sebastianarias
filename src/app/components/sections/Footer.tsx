"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 px-6 pb-12 pt-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h2 className="font-sans text-2xl font-bold tracking-tighter text-white">
              SCAB <span className="text-neutral-500 font-medium text-lg">Systems</span>
            </h2>
            <p className="max-w-xs font-sans text-base font-medium leading-relaxed text-neutral-500">
              Desarrollo de sistemas web de alto impacto y soluciones digitales a medida. Enfocado en escalabilidad y diseño.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white/40">Navegación</h3>
            <nav className="flex flex-col gap-4">
              {["Servicios", "Proceso", "FAQ"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="font-sans text-base font-semibold text-neutral-400 transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white/40">Contacto</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:tu-email@dominio.com" 
                className="font-sans text-base font-semibold text-neutral-400 transition-colors hover:text-white"
              >
                hola@sebastianarias.com
              </a>
              <span className="font-sans text-sm font-medium text-neutral-600">
                Antioquia, Colombia.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <p className="font-sans text-sm font-medium text-neutral-600">
            © {currentYear} SCAB Systems. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            <p className="font-sans text-sm font-medium text-neutral-500 tracking-tight">
              Disponible para nuevos proyectos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}