"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
  // El mensaje predeterminado: profesional, directo y con contexto
  const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20iniciar%20un%20proyecto%20con%20SCAB%20Systems.%20%C2%BFPodemos%20hablar%3F";

  return (
    <section className="relative w-full bg-neutral-950 px-6 py-10 sm:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }} // Para que la animación no se repita cada vez que haces scroll
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row font-sans sm:items-center sm:justify-center">
            
            {/* BOTÓN 1: WHATSAPP (Externo) */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-[2px] bg-gradient-to-tr from-amber-500 via-indigo-500 to-red-600 rounded-full inline-block"
            >
              <div className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-neutral-950 px-8 py-4 text-lg text-white transition-all hover:bg-neutral-900 active:scale-95">
                <span>Iniciar proyecto</span>
                <Sparkles className="h-5 w-5 text-indigo-500" strokeWidth={2} />
              </div>
            </a>

            {/* BOTÓN 2: SER COLABORADOR (Interno) 
            <Link 
              href="/colaborar" 
              className="group relative flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-900 px-8 py-4 text-lg text-white transition-all active:scale-95"
            >
              <span>Ser colaborador</span>
            </Link>*/}

          </div>

          <p className="font-sans text-sm text-neutral-500">
            Sin compromiso. Revisamos juntos qué solución encaja mejor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}