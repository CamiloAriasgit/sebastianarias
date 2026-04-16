"use client";

import React from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20web%20y%20me%20gustar%C3%ADa%20que%20hablemos.";

  return (
    <footer className="w-full bg-neutral-950 px-4 pb-10 pt-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          <div className="max-w-md">
            <h2 className="text-lg font-bold tracking-tight text-white mb-4">
              Sebastian Arias <span className="text-neutral-600 font-normal">/ Software And Business</span>
            </h2>
            <p className="text-base font-medium leading-[1] text-neutral-500">
              Enfocado en transformar problemas complejos en soluciones simples y escalables.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">Contacto Directo</h3>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xl font-bold text-neutral-300 transition-colors hover:text-white"
            >
              <span>+57 323 561 9283</span>
              <ArrowUpRight className="h-5 w-5 text-neutral-600 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <p className="text-sm text-neutral-600">Antioquia, Colombia.</p>
          </div>
        </div>

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