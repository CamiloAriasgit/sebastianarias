"use client";

import React from "react";

export default function Tesis() {
  return (
    <section className="w-full bg-neutral-950 px-6 py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        
        <h2 className="font-sans text-3xl font-bold tracking-tight text-neutral-200 sm:text-4xl mb-12">
          La mayoría de SaaS fallan por una razón
        </h2>

        <div className="space-y-6 font-sans text-lg leading-relaxed text-neutral-500">
          <p className="text-neutral-200 font-semibold">
            No fallan por falta de código.
          </p>
          
          <p>
            Fallan porque nadie validó si realmente eran necesarios.
          </p>

          <p className="pt-4">
            Este proceso es diferente.
          </p>

          <p className="text-neutral-300">
            En lugar de construir desde suposiciones, se construye desde la experiencia directa de personas que viven los problemas todos los días.
          </p>
        </div>

      </div>
    </section>
  );
}