"use client";

import React from "react";
const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20web.%20Me%20interesa%20implementar%20tu%20infraestructura%20de%20conversi%C3%B3n.%20%C2%BFPodemos%20agendar%20una%20auditor%C3%ADa%20inicial%3F";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-2xl items-center font-sans justify-between rounded-full pl-3 pr-3 py-2.5 backdrop-blur-md transition-all duration-300 bg-black/10 border border-white/10">
        
        <div className="h-7 w-7 bg-white/0 rounded-full shadow-inner shadow-white/60">
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-[2px] transition-all duration-300 active:scale-95 bg-white/70 shadow-inner shadow-white/60 rounded-full"
        >
          <div className="relative flex items-center justify-center gap-2 rounded-full px-3 py-1 text-sm tracking-tight transition-all text-neutral-900 ">
            <span>Empezar</span>
          </div>
        </a>
      </nav>
    </header>
  );
}