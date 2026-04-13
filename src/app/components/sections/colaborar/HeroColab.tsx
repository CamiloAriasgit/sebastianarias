"use client";

import React from "react";

import { Rocket } from "lucide-react";


function StatusBadge() {
  return (
    <div className="flex items-center gap-2.5 rounded-full border border-white/5 bg-white/5 px-3.5 py-1.5 backdrop-blur-md">
      <span className="text-xs tracking-[0.15em] uppercase text-neutral-400/80">
        Programa de Validación
      </span>
    </div>
  );
}

function HeroHeading() {
    return (
        <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-4 sm:gap-6">
            <h1 className="text-balance text-center text-5xl  font-sans font-bold leading-[0.9] tracking-tight text-neutral-300 sm:text-6xl lg:text-7xl">
                Construyamos sistemas reales, no ideas vacías.
            </h1>

            <p className="w-full max-w-[20rem] text-pretty text-center text-base font-sans leading-tight text-neutral-500 sm:max-w-md sm:text-lg lg:max-w-xl lg:text-xl px-4 md:px-0">
                Busco personas que trabajen en una industria específica y quieran convertir problemas reales en herramientas digitales útiles.
            </p>
        </div>
    );
}

function HeroActions() {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">

            <button className="p-[2px] bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-600 rounded-full">
                <div className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-neutral-950 px-8 py-4 text-lg text-white transition-all hover:bg-neutral-900 active:scale-95">
                    <span>Quiero Colaborar</span>
                    <Rocket className="h-5 w-5" strokeWidth={2} />
                </div>
            </button>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative flex min-h-[99svh] md:min-h-[90svh] md:pt-36 w-full flex-col items-center justify-center overflow-hidden bg-neutral-950 px-0 py-20 selection:bg-lime-400 selection:text-neutral-900">
            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-10">
                <StatusBadge />
                <HeroHeading />
                <HeroActions />
            </div>
        </section>
    );
}