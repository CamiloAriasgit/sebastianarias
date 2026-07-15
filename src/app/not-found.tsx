// app/not-found.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Special_Elite, IBM_Plex_Mono } from 'next/font/google';

const stamp = Special_Elite({ subsets: ['latin'], weight: '400', variable: '--font-stamp' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main
      className={`${stamp.variable} ${mono.variable} min-h-screen flex items-center justify-center px-4 py-16`}
      style={{
        background: '#EFE6CD',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(43,36,29,0.025) 0px, rgba(43,36,29,0.025) 1px, transparent 1px, transparent 3px)',
      }}
    >
      <div
        className="relative w-full max-w-md animate-[folderIn_0.5s_ease-out_forwards] opacity-0"
        style={{ transformOrigin: 'center' }}
      >
        {/* Pestaña de la carpeta */}
        <div
          className="absolute -top-6 left-8 h-8 w-32 rounded-t-md z-0"
          style={{ background: '#D8C39A', border: '1px solid rgba(43,36,29,0.2)', borderBottom: 'none' }}
        />

        {/* Carpeta */}
        <div
          className="relative z-10 px-2 py-8 sm:px-10 sm:py-10 rounded-sm shadow-[0_8px_0_rgba(43,36,29,0.08),0_2px_6px_rgba(43,36,29,0.15)]"
          style={{ background: '#DCC9A0', border: '1px solid rgba(43,36,29,0.2)' }}
        >
          {/* Clip */}
          <div
            className="absolute -top-3 right-10 w-6 h-14 rounded-full z-20"
            style={{
              border: '3px solid rgba(43,36,29,0.35)',
              borderRight: 'none',
              transform: 'rotate(8deg)',
            }}
          />

          {/* Encabezado del expediente */}
          <div
            className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] pb-3 mb-5"
            style={{ borderBottom: '1px dashed rgba(43,36,29,0.35)', color: '#5A4E3E', fontFamily: 'var(--font-mono)' }}
          >
            <span>Unidad de páginas perdidas</span>
            <span>Caso N.º 404</span>
          </div>

          <div className="flex gap-5">
            {/* Foto tipo "se busca" */}
            <div
              className="relative shrink-0 w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center"
              style={{ background: '#EFE6CD', border: '1px dashed rgba(43,36,29,0.4)' }}
            >
              {/* Cinta adhesiva */}
              <span
                className="absolute -top-2 -left-2 w-7 h-3 opacity-60"
                style={{ background: '#f4eecf', border: '1px solid rgba(43,36,29,0.15)', transform: 'rotate(-18deg)' }}
              />
              <span
                className="absolute -top-2 -right-2 w-7 h-3 opacity-60"
                style={{ background: '#f4eecf', border: '1px solid rgba(43,36,29,0.15)', transform: 'rotate(18deg)' }}
              />
              <svg viewBox="0 0 48 48" className="w-9 h-9 sm:w-10 sm:h-10" style={{ color: '#8A7A63' }}>
                <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="3" />
                <line x1="29" y1="29" x2="41" y2="41" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Datos del caso */}
            <div className="flex-1 space-y-2.5 pt-1" style={{ fontFamily: 'var(--font-mono)' }}>
              <div>
                <p className="text-[9px] uppercase tracking-wider" style={{ color: '#8A7A63' }}>
                  Estado
                </p>
                <p className="text-[13px] font-medium" style={{ color: '#2B241D' }}>
                  No localizada
                </p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-wider" style={{ color: '#8A7A63' }}>
                  Último paradero conocido
                </p>
                <p className="text-[13px] break-all" style={{ color: '#2B241D' }}>
                  {pathname || '/ubicación-desconocida'}
                </p>
              </div>
            </div>
          </div>

          {/* Descripción */}
          <p
            className="mt-5 text-[13px] leading-relaxed"
            style={{ color: '#5A4E3E', fontFamily: 'var(--font-mono)' }}
          >
            Desapareció sin dejar rastro. Se sospecha que tomó un enlace equivocado,
            o que nunca existió para empezar. Si la ves, no te acerques: probablemente
            solo era un typo.
          </p>

          {/* Sello */}
          <div
            className="pointer-events-none select-none absolute right-4 sm:right-6 top-[52%] sm:top-1/2 -translate-y-1/2 animate-[stampHit_0.6s_cubic-bezier(0.36,0,0.66,-0.56)_0.5s_forwards] opacity-0"
          >
            <div
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md"
              style={{
                border: '3px double #9C2B2B',
                color: '#9C2B2B',
                transform: 'rotate(-13deg)',
                fontFamily: 'var(--font-stamp)',
              }}
            >
              <span className="text-base sm:text-lg tracking-widest">NO ENCONTRADO</span>
            </div>
          </div>

          {/* Botón */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex text-center items-center justify-center h-10 px-7 text-xs tracking-widest uppercase rounded-full transition-transform active:scale-95 hover:brightness-110"
              style={{ background: '#9C2B2B', color: '#EFE6CD', fontFamily: 'var(--font-mono)', fontWeight: 500 }}
            >
              Volver a territorio conocido
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes folderIn {
          from { opacity: 0; transform: translateY(14px) rotate(-1.5deg) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) rotate(-0.6deg) scale(1); }
        }
        @keyframes stampHit {
          0%   { opacity: 0; transform: translateY(-50%) rotate(-13deg) scale(1.6); }
          60%  { opacity: 1; transform: translateY(-50%) rotate(-13deg) scale(0.92); }
          80%  { transform: translateY(-50%) rotate(-13deg) scale(1.04); }
          100% { opacity: 1; transform: translateY(-50%) rotate(-13deg) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </main>
  );
}