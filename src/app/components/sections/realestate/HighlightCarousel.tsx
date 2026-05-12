"use client";

import React from "react";

const HIGHLIGHTS = [
  {
    id: 1,
    title: "Arquitectura de datos propietaria. Medimos lo que otros ignoran.",
    imageUrl: "URL_AQUÍ", // Formato sugerido 4:6
  },
  {
    id: 2,
    title: "Ingeniería de ventas. El camino más corto a tu WhatsApp.",
    imageUrl: "/images/realestate/Mensaje.png",
  },
  {
    id: 3,
    title: "Software prefabricado. Sin suscripciones. El código es tuyo.",
    imageUrl: "URL_AQUÍ",
  },
  {
    id: 4,
    title: "Velocidad sub-segundo. La atención del inversor no espera.",
    imageUrl: "URL_AQUÍ",
  },
];

export default function HighlightCarousel() {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="px-6 mb-12 md:px-30">
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
          Get the highlights.
        </h2>
      </div>

      {/* Contenedor del Carrusel */}
      <div className="flex w-full overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory px-6 md:px-30 gap-6">
        {HIGHLIGHTS.map((card) => (
          <div
            key={card.id}
            className="relative flex-none w-[85vw] md:w-[400px] aspect-[4/6] md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-black snap-center group"
          >
            {/* Imagen de Fondo */}
            <div 
              className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${card.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Contenido de la Tarjeta */}
            <div className="relative z-20 p-8 flex flex-col h-full">
              <h3 className="text-white text-2xl md:text-3xl font-medium leading-tight max-w-[250px]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
        
        {/* Espaciador final para que la última card pueda centrarse */}
        <div className="flex-none w-6 md:w-30" />
      </div>
    </section>
  );
}