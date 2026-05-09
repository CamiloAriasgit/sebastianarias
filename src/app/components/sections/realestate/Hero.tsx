"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Rocket, Wifi, Battery } from "lucide-react";

function Mobile() {
  return (
    <div className="w-full flex justify-center md:justify-end mb-8 md:mb-0">
      <div className="relative border-blue-50 h-[350px] md:h-[500px] w-[240px] md:w-[320px] overflow-hidden">
        
        {/* Cuerpo del Móvil */}
        <div className="w-full aspect-[10/20] bg-gradient-to-b from-neutral-700 via-transparent to-transparent rounded-[2rem] p-1">
          
          {/* Pantalla Interna */}
          <div className="relative w-full h-full bg-gradient-to-b from-neutral-900 to-transparent rounded-[1.8rem] overflow-hidden">
            
            {/* Elementos decorativos internos simples */}
            <div className="flex justify-between items-center px-6 pt-4">
              <span className="text-[10px] font-bold text-neutral-400">9:41</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-neutral-300 rounded-full"></div>
                <div className="w-2 h-2 bg-neutral-300 rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-full pb-20">
               <div className="w-12 h-12 bg-neutral-500 rounded-2xl mb-4 animate-pulse"></div>
               <div className="w-32 h-3 bg-neutral-500 rounded-full mb-2"></div>
               <div className="w-24 h-2 bg-neutral-500 rounded-full"></div>
            </div>

          </div>
        </div>

        {/* Gradiente transparente abajo (desapareciendo) 
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent to-70% z-10 pointer-events-none"></div>*/}
      </div>
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="animate-hero-fade-up-delay-1 flex flex-col items-center md:items-start gap-4 sm:gap-6 w-full">
      <h1 className="text-balance text-left text-3xl font-sans font-medium leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-6xl">
        Arquitectura digital para proyectos de élite.
      </h1>
    </div>
  );
}

function HeroActions() {
  const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20sitio%20web.%20Tengo%20una%20idea%20de%20proyecto%20y%20me%20gustar%C3%ADa%20discutir%20c%C3%B3mo%20podemos%20construir%20un%20sistema%20que%20escale%20mi%20negocio.";

  return (
    <div className="flex font-sans w-full justify-center md:justify-start">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full md:w-auto relative flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition-all active:scale-95"
      >
        <span>Empezar proyecto</span>
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col-reverse md:flex-row items-center justify-start md:justify-center overflow-hidden bg-black px-6 md:px-20 lg:px-32 py-4 selection:bg-lime-400 selection:text-neutral-900">
      
      <div className="relative z-10 flex w-full flex-col items-center md:items-start gap-8 sm:gap-10">
        <HeroHeading />
        <HeroActions />
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Mobile />
      </div>

    </section>
  );
}