'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Hero({ setBg }: { setBg: (colors: any) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const colors = { 
    from: '#f8f8ff', 
    via: '#f8f8ff', // Azul medianoche muy sutil
    to: '#f8f8ff' 
  };

  useEffect(() => {
    if (isInView) setBg(colors);
  }, [isInView, setBg]);

  return (
    <section ref={ref} className="min-h-[100svh] flex flex-col items-center justify-center text-center px-4">
      <span className=" bg-black/5 rounded-full px-2 py-1 text-neutral-900 text-sm mb-4 shadow-inner shadow-black/0">
        Conversion
      </span>
      <h1 className="text-black text-4xl md:text-7xl tracking-tight max-w-4xl font-bold leading-[0.9]">
        Tu negocio es real. Tu infraestructura digital no.
      </h1>
      <p className="text-neutral-500 mt-6 max-w-xl text-lg leading-[1.2]">
        Desplegamos sistemas de conversión de alta velocidad para empresas que no pueden permitirse perder clientes.
      </p>
    </section>
  );
}