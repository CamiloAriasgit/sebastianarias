// app/not-found.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Special_Elite, IBM_Plex_Mono } from 'next/font/google';
import { Search, Home, MapPin } from 'lucide-react';

const stamp = Special_Elite({ subsets: ['latin'], weight: '400', variable: '--font-stamp' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.';

const WaIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 30.667 30.667" className={className} fill="currentColor">
    <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z" />
  </svg>
);

export default function NotFound() {
  const pathname = usePathname();

  return (
    <section
      className={`${stamp.variable} ${mono.variable} relative w-full min-h-[100svh] flex items-center justify-center px-4 overflow-hidden`}
      style={{
        background: '#EDEFF3',
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(24,24,27,0.05) 0px, rgba(24,24,27,0.05) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(24,24,27,0.05) 0px, rgba(24,24,27,0.05) 1px, transparent 1px, transparent 40px)',
      }}
    >
      <div
        className="relative w-full max-w-md animate-[folderIn_0.5s_ease-out_forwards] opacity-0"
        style={{ transformOrigin: 'center' }}
      >
        {/* Pestaña de la carpeta */}
        <div
          className="absolute -top-6 left-8 h-8 w-32 rounded-t-md z-0"
          style={{ background: '#E4E4E7', border: '1px solid rgba(24,24,27,0.14)', borderBottom: 'none' }}
        />

        {/* Carpeta */}
        <div
          className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 rounded-sm shadow-[0_8px_0_rgba(24,24,27,0.06),0_2px_10px_rgba(24,24,27,0.12)]"
          style={{ background: '#F4F4F5', border: '1px solid rgba(24,24,27,0.14)' }}
        >
          {/* Clip */}
          <div
            className="absolute -top-3 right-10 w-6 h-14 rounded-full z-20"
            style={{
              border: '3px solid rgba(24,24,27,0.3)',
              borderRight: 'none',
              transform: 'rotate(8deg)',
            }}
          />

          {/* Encabezado del expediente */}
          <div
            className="flex flex-col items-start justify-start text-[10px] uppercase tracking-[0.2em] pb-3 mb-5"
            style={{ borderBottom: '1px dashed rgba(24,24,27,0.25)', color: '#71717A', fontFamily: 'var(--font-mono)' }}
          >
            <span>Archivo de páginas perdidas</span>
            <span className="font-semibold text-zinc-800">Caso N.º 404</span>
          </div>

          <div className="flex gap-5">
            {/* Recuadro tipo "se busca" */}
            <div
              className="relative shrink-0 w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center"
              style={{ background: '#EDEFF3', border: '1px dashed rgba(24,24,27,0.3)' }}
            >
              {/* Cinta adhesiva */}
              <span
                className="absolute -top-2 -left-2 w-7 h-3 opacity-60"
                style={{ background: '#fafafa', border: '1px solid rgba(24,24,27,0.1)', transform: 'rotate(-18deg)' }}
              />
              <span
                className="absolute -top-2 -right-2 w-7 h-3 opacity-60"
                style={{ background: '#fafafa', border: '1px solid rgba(24,24,27,0.1)', transform: 'rotate(18deg)' }}
              />
              <Search className="w-9 h-9 sm:w-10 sm:h-10" style={{ color: '#a1a1aa' }} strokeWidth={1.75} />
            </div>

            {/* Datos del caso */}
            <div className="flex-1 space-y-2.5 pt-1" style={{ fontFamily: 'var(--font-mono)' }}>
              <div>
                <p className="text-[9px] uppercase tracking-wider" style={{ color: '#a1a1aa' }}>
                  Estado
                </p>
                <p className="text-[13px] font-medium" style={{ color: '#18181B' }}>
                  No localizada
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1 text-[9px] uppercase tracking-wider" style={{ color: '#a1a1aa' }}>
                  <MapPin className="w-2.5 h-2.5" />
                  Último paradero conocido
                </p>
                <p className="text-[13px] break-all" style={{ color: '#18181B' }}>
                  {pathname || '/ubicación-desconocida'}
                </p>
              </div>
            </div>
          </div>

          {/* Descripción */}
          <p
            className="mt-5 text-[13px] leading-relaxed"
            style={{ color: '#52525B', fontFamily: 'var(--font-mono)' }}
          >
            Se perdió el rastro de esta página. Puede que tomara un enlace equivocado,
            o que este proyecto nunca llegara a construirse. Si tienes prisa, mejor
            escríbenos por WhatsApp y seguimos buscando por ti.
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

          {/* Botones */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 text-xs tracking-widest uppercase rounded-full text-white transition-all duration-300 active:scale-95 hover:bg-neutral-800"
              style={{ background: '#18181B', fontFamily: 'var(--font-mono)', fontWeight: 500 }}
            >
              <WaIcon className="w-4 h-4" />
              WhatsApp
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 h-10 px-6 text-xs tracking-widest uppercase rounded-full transition-all duration-300 active:scale-95 hover:bg-zinc-100"
              style={{
                background: 'transparent',
                border: '1px solid rgba(24,24,27,0.25)',
                color: '#18181B',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
              }}
            >
              <Home className="w-4 h-4" />
              Inicio
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
    </section>
  );
}