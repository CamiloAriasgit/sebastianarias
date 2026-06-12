'use client'

import React from 'react';

// Este componente genera haces de luz lineales, paralelos e iridiscentes
// que se mueven suavemente.

export const PrismaBeams: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-black">
      {/* Superposición de desenfoque global para suavizar todo el efecto */}
      <div className="absolute inset-0 blur-[50px] opacity-70">
        
        {/* Contenedor SVG que mantiene la relación de aspecto */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full scale-110" // Escala un poco para cubrir bordes al animar
        >
          {/* Definición de los gradientes para cada haz de luz */}
          <defs>
            {/* Gradiente 1: Cian Brillante (Core principal) */}
            <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" /> {/* cyan-400 */}
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
            </linearGradient>

            {/* Gradiente 2: Azul/Violeta suave (Prisma secundario) */}
            <linearGradient id="beam2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" /> {/* blue-400 */}
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.6" /> {/* purple-400 */}
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
            </linearGradient>

            {/* Gradiente 3: Blanco Puro (Alto contraste) */}
            <linearGradient id="beam3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* --- Renderizado de los Haces de Luz Lineales --- */}
          {/* Están rotados diagonalmente y tienen animaciones de posición suaves */}
          
          <g transform="rotate(-30 50 50)"> {/* Rotación diagonal global */}
            
            {/* Haz 1: Principal Cian/Blanco */}
            <rect x="10" y="-50" width="4" height="200" fill="url(#beam1)">
              <animate 
                attributeName="x" 
                values="10; 15; 10" 
                dur="15s" 
                repeatCount="indefinite" 
                calcMode="spline" 
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </rect>

            {/* Haz 2: Paralelo Iridiscente (Azul/Violeta) */}
            <rect x="25" y="-50" width="6" height="200" fill="url(#beam2)">
              <animate 
                attributeName="x" 
                values="25; 20; 25" 
                dur="18s" 
                repeatCount="indefinite" 
                calcMode="spline" 
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </rect>

            {/* Haz 3: Fino y brillante (Blanco) */}
            <rect x="40" y="-50" width="2" height="200" fill="url(#beam3)">
              <animate 
                attributeName="x" 
                values="40; 43; 40" 
                dur="20s" 
                repeatCount="indefinite" 
                calcMode="spline" 
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </rect>

            {/* Haz 4: Otro Cian ancho, más a la derecha */}
            <rect x="60" y="-50" width="5" height="200" fill="url(#beam1)" opacity="0.6">
              <animate 
                attributeName="x" 
                values="60; 55; 60" 
                dur="12s" 
                repeatCount="indefinite" 
                calcMode="spline" 
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </rect>
          </g>
        </svg>
      </div>

      {/* --- Superposición de Gradiente Negro Sutil en la parte inferior --- */}
      {/* Esta capa es para asegurar que el contenido inferior (notificaciones) se lea bien */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-[50vh] pointer-events-none"
        style={{
          background: `linear-gradient(
            to top, 
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.8) 20%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0) 100%
          )`
        }}
      />
    </div>
  );
};