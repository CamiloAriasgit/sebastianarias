'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Hero({ setBg }: { setBg: (colors: any) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const colors = { 
    from: '#4262ab', 
    via: '#97a9b1', // Azul medianoche muy sutil
    to: '#a98672' 
  };

  useEffect(() => {
    if (isInView) setBg(colors);
  }, [isInView, setBg]);

  return (
    <section ref={ref} className="min-h-[100svh] flex flex-col items-center justify-center text-center px-4">
      <span className=" bg-white/10 rounded-full px-2 py-1 text-white text-sm mb-4 shadow-inner shadow-white/30">
        Conversion
      </span>
      <h1 className="text-white text-5xl md:text-7xl tracking-tight max-w-4xl leading-[0.9]">
        Tu negocio es real. Tu infraestructura digital no.
      </h1>
      <p className="text-white mt-6 max-w-xl text-lg leading-[1.2]">
        Desplegamos sistemas de conversión de alta velocidad para empresas que no pueden permitirse perder clientes.
      </p>
    </section>
  );
}