"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Rocket } from "lucide-react";


function StatusBadge() {
  return (
    <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0 opacity-75" />
        <span
          style={{ animationDelay: '0.2s' }}
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-b from-indigo-500/0 via-violet-500 to-indigo-500/0 opacity-75"
        />
        <span
          style={{ animationDelay: '0.4s' }}
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-br from-indigo-500/0 via-purple-500 to-indigo-500/0 opacity-75"
        />
        <span
          style={{ animationDelay: '0.6s' }}
          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-bl from-indigo-500/0 via-cyan-500 to-indigo-500/0 opacity-75"
        />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500/0" />
      </span>
      <span className="text-xs font-medium tracking-wide text-[#5E6472]">
        Disponible para proyectos
      </span>
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-4 sm:gap-6">
      <h1 className="text-balance text-center text-5xl  font-sans font-bold leading-[0.9] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
        Sistemas web <br className="hidden sm:block" /> que escalan negocios.
      </h1>

      <p className="w-full max-w-[20rem] text-pretty text-center text-base font-sans leading-tight text-neutral-500 sm:max-w-md sm:text-lg lg:max-w-xl lg:text-xl px-6 md:px-0">
        Desde una landing de alto impacto hasta sistemas que te permiten operar y crecer.
      </p>
    </div>
  );
}

function HeroActions() {
  const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20sitio%20web.%20Tengo%20una%20idea%20de%20proyecto%20y%20me%20gustar%C3%ADa%20discutir%20c%C3%B3mo%20podemos%20construir%20un%20sistema%20que%20escale%20mi%20negocio.";

  return (
    <div className="flex flex-col gap-4 sm:flex-row font-sans sm:items-center sm:justify-center">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-[2px] bg-gradient-to-tr from-amber-500 via-indigo-500 to-red-600 rounded-full shadow-lg shadow-indigo-500/10"
      >
        <div className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#F6F8FB] px-8 py-4 text-lg font-bold text-neutral-900 transition-all active:scale-95">
          <span>Empezar proyecto</span>
          <Rocket className="h-5 w-5 text-indigo-500" strokeWidth={2} />
        </div>
      </a>

      {/* Internal Route Link 
      <Link 
        href="/colaborar"
        className="group relative flex items-center justify-center rounded-full bg-gray-200 px-8 py-4 text-lg font-bold text-neutral-900 transition-all hover:bg-gray-300 active:scale-95"
      >
        <span>Ser colaborador</span>
      </Link>*/}
    </div>
  );
}

function MetricPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <span className="font-semibold tabular-nums text-neutral-800">{value}</span>
      <span className="text-neutral-500">{label}</span>
    </div>
  );
}

function HeroMetrics() {
  return (
    <div className="animate-hero-fade-up-delay-3 flex items-center gap-4 sm:gap-6">
      <MetricPill value="+2" label="years" />
      <span className="h-3 w-px bg-foreground/10" />
      <MetricPill value="99%" label="uptime" />
      <span className="h-3 w-px bg-foreground/10" />
      <MetricPill value="4.9" label="rating" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[99svh] md:min-h-[90svh] md:pt-36 w-full flex-col items-center justify-center overflow-hidden bg-[#F6F8FB] px-0 py-20 selection:bg-lime-400 selection:text-neutral-900">
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-10">
        <StatusBadge />
        <HeroHeading />
        <HeroActions />
        <HeroMetrics />
      </div>
    </section>
  );
}