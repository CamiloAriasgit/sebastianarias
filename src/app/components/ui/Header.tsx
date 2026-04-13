"use client";

import React from "react";
import { Globe } from "lucide-react";

interface NavbarProps {
  mode?: 'light' | 'dark';
}

export default function Navbar({ mode = 'light' }: NavbarProps) {
  const isDark = mode === 'dark';

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`flex w-full max-w-2xl items-center justify-between rounded-full pl-3 pr-3 py-2.5 backdrop-blur-md transition-all duration-300 ${
        isDark 
          ? "bg-zinc-900/60 border border-white/5" 
          : "bg-gray-200/60 border border-transparent"
      }`}>

        {/* Logo / Icono */}
        <div className="flex items-center rounded-full">
          <Globe className={`h-10 w-10 transition-colors ${
            isDark ? "text-zinc-700" : "text-gray-300/80"
          }`} />
        </div>

        {/* CTA - Se adapta al modo */}
        <a 
          href="#contacto" 
          className={`rounded-full font-sans px-5 py-2 text-sm font-bold transition-all active:scale-95 ${
            isDark 
              ? "bg-[#F6F8FB] text-neutral-950 hover:bg-white" 
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          }`}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}