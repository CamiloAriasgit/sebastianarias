"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Rocket } from "lucide-react";

function HeroHeading() {
    return (
        <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-4 sm:gap-6">
            <h1 className="text-balance text-start text-5xl mx-4 font-sans font-bold leading-[0.9] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                Sistemas web <br className="hidden sm:block" /> que escalan negocios.
            </h1>
        </div>
    );
}

function HeroActions() {
    const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20sitio%20web.%20Tengo%20una%20idea%20de%20proyecto%20y%20me%20gustar%C3%ADa%20discutir%20c%C3%B3mo%20podemos%20construir%20un%20sistema%20que%20escale%20mi%20negocio.";

    return (
        <div className="flex font-sans bg-blue-500 w-full">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mx-4 w-full relative flex items-center justify-center overflow-hidden rounded-full bg-neutral-900 px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition-all active:scale-95"
            >
                <span>Empezar proyecto</span>
            </a>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative flex min-h-[100svh] pt-30 md:pt-36 w-full flex-col items-center justify-end overflow-hidden bg-white px-0 py-4 selection:bg-lime-400 selection:text-neutral-900">
            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-10">
                <HeroHeading />
                <HeroActions />
            </div>
        </section>
    );
}