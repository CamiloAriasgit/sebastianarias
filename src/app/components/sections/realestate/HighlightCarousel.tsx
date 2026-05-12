"use client";

import React from "react";

const HIGHLIGHTS = [
  {
    id: 1,
    title: "Arquitectura de datos propietaria. Medimos lo que otros ignoran.",
    imageUrl: "/images/realestate/DataWeb.png",
  },
  {
    id: 2,
    title: "Ingeniería de ventas. El camino más corto a tu WhatsApp.",
    imageUrl: "/images/realestate/MessageNotification.png",
  },
  {
    id: 3,
    title: "Software prefabricado. Sin suscripciones. El código es tuyo.",
    imageUrl: "/images/realestate/DataPage.png",
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

      {/* 1. Cambiamos snap-center por snap-start para que la card se pegue a la izquierda
          2. El padding derecho del contenedor (pr-20) asegura que la última card no se corte pegada al borde
      */}
      <div className="flex w-full overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory px-6 md:px-30 gap-4 md:gap-6">
        {HIGHLIGHTS.map((card) => (
          <div
            key={card.id}
            // MÓVIL: w-[75vw] permite ver el 25% de la siguiente card.
            // DESKTOP: w-[350px] es un poco más esbelto para que quepan más en pantalla.
            className="relative flex-none w-[75vw] md:w-[350px] overflow-hidden rounded-[2rem] bg-black snap-center group"
          >
            {/* Imagen Real */}
            <img 
              src={card.imageUrl} 
              alt={card.title}
              className="w-full h-auto block transition-transform duration-700"
            />
            
            {/* Contenido de la Tarjeta */}
            <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col">
              <h3 className="text-white text-lg md:text-xl font-medium leading-[1.2] max-w-[220px]">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
        
        {/* Espaciador final para dar aire al terminar el scroll */}
        <div className="flex-none w-10 md:w-30" />
      </div>
    </section>
  );
}