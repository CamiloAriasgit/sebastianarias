"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Rocket, Wifi, Battery } from "lucide-react";
import Image from "next/image";

function Mobile() {
    return (
        <div className="w-full flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="relative w-full max-w-[320px] h-[400px] md:h-[500px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-neutral-700 via-transparent to-transparent rounded-[2rem] p-1">
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
                                    <h1 className="font-normal text-neutral-300">John Doe</h1>
                                    <h2 className="text-[10px] text-neutral-500">Investor</h2>
                                </div>
                            </div>

                            {/* Chart Grid Skeleton 
                            <div className="p-3 border border-neutral-800 rounded-2xl bg-neutral-900/50">
                                <div className="flex items-end justify-between h-20 gap-1 px-2">
                                    {[40, 70, 45, 90, 65, 80, 30].map((height, i) => (
                                        <div
                                            key={i}
                                            className="w-full bg-blue-600/20 rounded-t-sm animate-pulse"
                                            style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                                        />
                                    ))}
                                </div>
                                <div className="mt-3 w-full h-2 bg-neutral-800 rounded-full" />
                            </div>*/}

                            <div className="rounded-2xl bg-neutral-900/50">
                                <img src="https://cabintrippers.com/wp-content/uploads/2021/12/Romantic-cabins-with-hot-tubs-in-Texas.webp" alt="Real estate project to invest" className="h-30 w-full object-cover rounded-2xl" />
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 border border-neutral-800 rounded-xl flex flex-col gap-2">
                                    <div className="w-4 h-4 rounded bg-blue-500/20" />
                                    <div className="w-full h-2 bg-neutral-800 rounded-full" />
                                </div>
                                <div className="p-3 bg-neutral-950 rounded-xl items-end flex gap-2">
                                    <div className="w-2 h-2 rounded bg-neutral-700" />
                                    <div className="w-2 h-5 rounded bg-neutral-700" />
                                    <div className="w-2 h-3 rounded bg-neutral-700" />
                                    <div className="w-2 h-8 rounded bg-neutral-700" />
                                    <div className="w-2 h-5 rounded bg-neutral-700" />
                                    <div className="w-2 h-7 rounded bg-neutral-700" />
                                    <div className="w-2 h-5 rounded bg-neutral-700" />
                                </div>
                            </div>

                            {/* List Skeleton */}
                            <div className="space-y-3 pt-2">
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
                        <div className="w-full flex justify-center pb-2">
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