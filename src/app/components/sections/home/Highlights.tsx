"use client";

import React from "react";

const HIGHLIGHTS = [
  {
    id: 1,
    title: "Entornos inmersivos. La exclusividad de sus proyectos plasmada en código.", 
    imageUrl: "/images/home/MobileInterface.png",
  },
  {
    id: 2,
    title: "Velocidad nativa. La atención del inversor no espera.",
    imageUrl: "/images/home/VelocityTime.png",
  },
  {
    id: 3,
    title: "Trazabilidad absoluta. Auditoría y medición objetiva de cada interacción.",
    imageUrl: "/images/home/UsersPointsMap.png",
  },
  {
    id: 4,
    title: "Operación delegada. Nosotros gestionamos el motor técnico de su negocio.",
    imageUrl: "/images/home/Fingerprint.png",
  },
];

export default function Highlight() {
  return (
    <section className="bg-zinc-900 flex flex-col justify-center min-h-screen md:pt-20">
      <div className="px-6 mb-12 md:px-30">
        <h2 className="text-2xl md:text-5xl font-medium text-white tracking-tight">
          Eleva el estándar de tus proyectos.
        </h2>
      </div>


      <div className="flex w-full overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory px-6 md:px-30 gap-4 md:gap-6">
        {HIGHLIGHTS.map((card) => (
          <div
            key={card.id}
            className="relative flex-none w-[75vw] md:w-[350px] overflow-hidden rounded-[2rem] bg-black snap-center group"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-auto block transition-transform duration-700"
            />

            <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col">
              <h3 className="text-white text-lg md:text-xl font-medium leading-[1.2] max-w-[220px]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}

        <div className="flex-none w-10 md:w-30" />
      </div>
    </section>
  );
}