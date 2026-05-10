"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Rocket, Wifi, Battery } from "lucide-react";
import Image from "next/image";

function Mobile() {
    return (
        <div className="w-full flex justify-center md:justify-end mb-8 md:mb-0 md:mt">
            {/* Aumentado max-w y h solo en md: para desktop */}
            <div className="relative w-full max-w-[320px] md:max-w-[420px] h-[400px] md:h-[650px] overflow-hidden transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-b from-neutral-700 via-transparent to-transparent rounded-[2rem] p-[0.1rem]">
                    <div className="relative w-full h-full bg-gradient-to-b from-neutral-950 via-neutral-950 to-transparent rounded-[1.8rem] overflow-hidden flex flex-col">

                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-6 pt-5 pb-2">
                            <span className="text-[10px] font-bold text-neutral-500">9:41</span>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-1.5 bg-neutral-700 rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></div>
                            </div>
                        </div>

                        {/* Skeleton Interface */}
                        <div className="flex-1 px-4 py-2 flex flex-col gap-4">
                            {/* Header Skeleton */}
                            <div className="flex items-center gap-3">
                                <img src="/images/conversion/HeadshotWp.png" alt="Profile" className="h-10 w-10 rounded-full shrink-0" />
                                <div className="-space-y-1">
                                    <h1 className="font-normal text-neutral-300 text-sm">John Doe</h1>
                                    <h2 className="text-[10px] text-neutral-500">Investor</h2>
                                </div>
                            </div>

                            <div className="relative rounded-2xl overflow-hidden group">
                                <img
                                    src="https://cabintrippers.com/wp-content/uploads/2021/12/Romantic-cabins-with-hot-tubs-in-Texas.webp"
                                    alt="Real estate Airbnb project"
                                    className="h-32 md:h-44 w-full object-cover rounded-2xl"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                                    <div className="flex justify-between items-end">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] text-neutral-400 uppercase tracking-wider">Ubicación</span>
                                            <span className="text-[10px] text-white font-medium">Austin, Texas</span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-[8px] text-neutral-400 uppercase tracking-wider">Costo / Noche</span>
                                            <span className="text-[10px] text-blue-400 font-bold">$240 USD</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-2 bg-neutral-900/70 rounded-xl flex flex-col">
                                    <h1 className="text-[10px] text-neutral-400 flex items-center gap-1">LTI</h1>
                                    <div className="w-full h-8 flex justify-end pr-4">
                                        <h1 className="text-neutral-400 font-bold text-2xl">0,4s</h1>
                                    </div>
                                </div>
                                <div className="p-2 bg-neutral-900/70 rounded-xl flex flex-col">
                                    <h1 className="text-[10px] text-neutral-400 flex items-center gap-1"><span className="h-1 w-1 rounded-full bg-green-600 animate-pulse"></span>Trafic</h1>
                                    <div className="flex gap-2 items-end justify-end">
                                        <div className="w-2 h-2 rounded bg-neutral-700" />
                                        <div className="w-2 h-5 rounded bg-neutral-700" />
                                        <div className="w-2 h-3 rounded bg-neutral-700" />
                                        <div className="w-2 h-8 rounded bg-neutral-700" />
                                        <div className="w-2 h-5 rounded bg-neutral-700" />
                                        <div className="w-2 h-7 rounded bg-neutral-700" />
                                        <div className="w-2 h-5 rounded bg-neutral-700" />
                                    </div>
                                </div>
                            </div>

                            {/* List Skeleton */}
                            <div className="space-y-4 pt-2">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex justify-between items-center opacity-40">
                                        <div className="flex gap-2 items-center">
                                            <div className="w-6 h-6 rounded-lg bg-neutral-800" />
                                            <div className="w-16 h-1.5 bg-neutral-800 rounded-full" />
                                        </div>
                                        <div className="w-8 h-1.5 bg-neutral-900 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Indicator */}
                        <div className="w-full flex justify-center pb-2 mt-auto">
                            <div className="w-16 h-1 bg-neutral-800 rounded-full" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

function HeroHeading() {

    return (

        <div className="animate-hero-fade-up-delay-1 flex flex-col items-center md:items-start gap-4 sm:gap-6 w-full">

            <h1 className="text-balance text-left text-2xl font-sans font-medium leading-[0.9] tracking-tight text-white sm:text-5xl lg:text-6xl">

                Webs de alto nivel para vender tu proyecto

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
        <section className="relative flex min-h-[100svh] w-full flex-col-reverse md:flex-row items-center justify-start md:justify-center overflow-hidden bg-black px-6 md:px-16 lg:px-34 py-12 selection:bg-lime-400 selection:text-neutral-900">

            <div className="relative z-10 flex w-full flex-col items-center md:items-start gap-8 sm:gap-10 md:flex-1">
                <HeroHeading />
                <HeroActions />
            </div>

            <div className="w-full md:flex-1 flex justify-center md:justify-end">
                <Mobile />
            </div>

        </section>
    );
}