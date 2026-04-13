"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
  const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20sitio%20web.%20Tengo%20una%20idea%20de%20proyecto%20y%20me%20gustar%C3%ADa%20discutir%20c%C3%B3mo%20podemos%20construir%20un%20sistema%20que%20escale%20mi%20negocio.";

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
      {/* WhatsApp Link - Dark Version */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-[2px] bg-gradient-to-tr from-amber-500 via-indigo-500 to-red-600 rounded-full"
      >
        <div className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-neutral-950 px-8 py-4 text-lg text-white transition-all hover:bg-neutral-900 active:scale-95">
          <span>Empezar proyecto</span>
          <Sparkles className="h-5 w-5 text-indigo-500" strokeWidth={2} />
        </div>
      </a>

      {/* Internal Route Link - Dark Version */}
      <Link 
        href="/colaborar"
        className="group relative flex items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-lg text-white transition-all hover:bg-neutral-800 border border-white/5 active:scale-95"
      >
        <span>Ser colaborador</span>
      </Link>
    </div>
  );
}