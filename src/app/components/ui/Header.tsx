"use client";

import React from "react";
import { Sparkles, Rocket } from "lucide-react";

interface NavbarProps {
  mode?: 'light' | 'dark';
}

export default function Navbar({ mode = 'light' }: NavbarProps) {
  const isDark = mode === 'dark';

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className={`flex w-full max-w-2xl items-center font-sans justify-between rounded-full pl-3 pr-3 py-2.5 backdrop-blur-md transition-all duration-300 ${isDark
          ? "bg-zinc-900/60 border border-white/5"
          : "bg-gray-200/60 border border-transparent"
        }`}>

        

        <div className="flex flex-col justify-center text-sm font-sans font-bold leading-[0.9] pl-1">
          <span>Sebastian</span>
          <span>Arias</span>
        </div>

        {/* CTA Evolucionado */}
        <a
          href="https://wa.me/573235619283"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group relative p-[2px] transition-all duration-300 active:scale-95
            bg-[#F6F8FB] rounded-full
          `}
        >
          <div className={`
            relative flex items-center justify-center gap-2 rounded-full px-4 py-2 
            text-sm font-bold tracking-tight transition-all
            ${isDark
              ? "bg-neutral-950 text-white group-hover:bg-neutral-900"
              : "bg-[#F6F8FB] text-neutral-900 group-hover:bg-white"
            }
          `}>
            <span>Empezar</span>
            <Rocket
              className={`h-4 w-4 transition-transform group-hover:rotate-12 ${isDark ? "text-indigo-400" : "text-indigo-500"
                }`}
              strokeWidth={2}
            />
          </div>
        </a>
      </nav>
    </header>
  );
}