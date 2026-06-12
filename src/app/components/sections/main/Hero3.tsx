'use client'

import React from 'react'

export default function HeroAmbient() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-white dark:bg-zinc-950"
      style={{ minHeight: '80vh' }}
    >
      {/* --- CONTENEDOR DEL VÍDEO AMBIENTAL (CÓDIGO REPLICADO) --- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -z-10 overflow-hidden"
        style={{
          // Se posiciona hacia arriba ignorando el espacio del header (ajusta -64px según tu navbar)
          top: '-64px', 
          height: '1200px',
          // Color de respaldo inteligente (Light / Dark)
          backgroundColor: 'var(--ambient-bg, #D5E8FC)',
          // Máscara de desvanecimiento progresivo hacia abajo (fade out a los 1200px)
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 480px, rgba(0,0,0,0) 1200px)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 480px, rgba(0,0,0,0) 1200px)',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      >
        {/* Inyección de variables de color dinámicas para el fondo de respaldo */}
        <style jsx global>{`
          :root { --ambient-bg: #D5E8FC; }
          .dark { --ambient-bg: #213C95; }
        `}</style>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-100 transition-opacity duration-1000 ease-in-out">
            <video
              crossOrigin="anonymous"
              playsInline
              autoPlay
              loop
              muted
              className="absolute inset-0 size-full min-w-full object-cover"
            >
              <source src="/public/hero-ambient.mp4" type="video/mp4" />
              Tu navegador no es compatible con la etiqueta de vídeo.
            </video>
          </div>
        </div>
      </div>

      {/* --- CONTENIDO PRINCIPAL (EDITORIAL / MINIMALISTA) --- */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24 text-center md:pt-44 md:pb-36">
        <span className="inline-block rounded-full bg-zinc-900/5 px-3 py-1 text-xs font-medium tracking-tight text-zinc-600 backdrop-blur-md dark:bg-white/10 dark:text-zinc-300">
          Presentando Prism Inteligente
        </span>
        
        <h1 className="mt-6 block font-light tracking-tight text-zinc-900 dark:text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)', lineHeight: 1.05 }}>
          Rediseña la forma <br /> en que construyes software.
        </h1>

        <p className="mx-auto mt-8 max-w-[46ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
          Una infraestructura integrada con inteligencia nativa para interfaces de alta conversión. Menos configuración, más impacto visual.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="flex h-[2.5rem] items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
          >
            Comenzar a redactar
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="11" 
              fill="none" 
              viewBox="0 0 11 12" 
              className="ml-1.5 -translate-y-[1px] transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M1.71 4.5h6.07m0 0v6.07m0-6.07-7 7" />
            </svg>
          </a>
          
          <a
            href="#"
            className="flex h-[2.5rem] items-center justify-center rounded-full border border-zinc-200 bg-white/40 px-5 text-sm font-medium text-zinc-900 backdrop-blur-sm transition-all duration-200 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Ver documentación
          </a>
        </div>
      </div>
    </section>
  )
}