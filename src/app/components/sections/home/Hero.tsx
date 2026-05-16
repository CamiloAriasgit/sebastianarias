"use client";

import React from "react";
import dynamic from 'next/dynamic';

const P5Spire = dynamic(() => import('../home/P5Sketches'), {
    ssr: false,
    loading: () => <div className="h-[350px] w-full animate-pulse bg-neutral-900/20 rounded-full" />
});

function HeroHeading() {
    return (
        <div className="animate-hero-fade-up-delay-1 flex flex-col items-start md:items-start gap-4 sm:gap-6 w-full -space-y-2">
            <h1 className="text-start bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-300 to-purple-400 font-medium">Convierte clicks en clientes</h1>
            <h1 className="text-balance text-left text-3xl font-sans font-medium leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Desarrollo web para el sector Real Estate
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

                className="group w-full md:w-auto relative flex items-center justify-center overflow-hidden rounded-full bg-blue-500 px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800 transition-all active:scale-95"

            >

                <span>Empezar proyecto</span>

            </a>

        </div>

    );

}

export default function Hero() {
    return (
        <section className="relative flex min-h-[100svh] w-full flex-col md:flex-row-reverse md:px-30 items-center justify-end overflow-hidden bg-black px-6 selection:bg-blue-500 selection:text-white">

            <div className="relative z-10 w-full flex justify-center items-center">
                <div className="w-full h-[350px] md:h-[500px] flex justify-center items-center">
                    <P5Spire />
                </div>
            </div>

            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 mb-5">
                <HeroHeading />
                <HeroActions />
            </div>
        </section>
    );
}

