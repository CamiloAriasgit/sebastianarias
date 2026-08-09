function CornerBracket({ className }: { className: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <div className="absolute h-px w-3.5 bg-[#2A4A73]" />
      <div className="absolute h-3.5 w-px bg-[#2A4A73]" />
    </div>
  );
}

function CrossTick({ className }: { className: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <span className="absolute left-1/2 top-1/2 h-[9px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#B9BFC9]" />
      <span className="absolute left-1/2 top-1/2 h-px w-[9px] -translate-x-1/2 -translate-y-1/2 bg-[#B9BFC9]" />
    </div>
  );
}

function HatchBand({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-[repeating-linear-gradient(135deg,#B9BFC9_0px,#B9BFC9_1px,transparent_1px,transparent_9px)] ${className}`}
      aria-hidden="true"
    />
  );
}

function Meta({ index }: { index: string }) {
  return (
    <div className="absolute left-4 top-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[#9AA1AC] sm:left-6 lg:left-8">
      <span className="text-[#2A4A73]">{index}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col bg-[#EDEFF3] p-3 sm:p-4 lg:min-h-screen lg:p-6">
      <div className="relative flex flex-1 flex-col border border-[#B9BFC9]">
        <CornerBracket className="left-0 top-0" />
        <CornerBracket className="right-0 top-0 rotate-90" />
        <CornerBracket className="bottom-0 left-0 -rotate-90" />
        <CornerBracket className="bottom-0 right-0 rotate-180" />

        {/* Grid principal */}
        <div className="relative flex flex-1 flex-col divide-y divide-dotted divide-[#B9BFC9] lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
          <CrossTick className="left-0 top-0 hidden -translate-x-1/2 -translate-y-1/2 lg:block lg:left-[58.333%]" />
          <CrossTick className="bottom-0 left-0 hidden -translate-x-1/2 translate-y-1/2 lg:block lg:left-[58.333%]" />

          {/* Columna Izquierda: Título + Párrafo + Botón */}
          <div className="relative flex flex-1 flex-col justify-center items-start gap-6 p-8 pt-12 sm:p-10 sm:pt-14 lg:col-span-7 lg:p-14 lg:pt-16 xl:p-20 xl:pt-24 2xl:p-24">
            <Meta index="01" />
            
            <h1 className="text-[2.35rem] font-medium leading-[1.06] tracking-tight uppercase text-[#12141A] sm:text-5xl lg:text-[3.6rem] xl:text-[4.4rem] 2xl:text-[5.2rem]">
              Landing pages para proyectos inmobiliarios
            </h1>

            <p className="max-w-[30ch] text-base leading-relaxed text-[#4B5160] sm:text-lg lg:text-xl xl:text-2xl">
              Convertimos tu tráfico en inversionistas reales contactando por WhatsApp.
            </p>

            <button
              type="button"
              className="group inline-flex items-center gap-3 bg-[#12141A] px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#20406B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#20406B] sm:text-base lg:px-7 lg:py-4"
            >
              Agendar llamada
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path
                  d="M2 8h12M9 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Columna Derecha: Recuadro libre */}
          <div className="relative flex flex-1 items-center p-8 pt-12 sm:p-10 sm:pt-14 lg:col-span-5 lg:p-14 lg:pt-16 xl:p-20 xl:pt-24 2xl:p-24">
            <Meta index="02" />
          </div>
        </div>

        {/* Franja inferior: banda diagonal */}
        <HatchBand className="h-3 w-full border-t border-[#B9BFC9] sm:h-4" />
      </div>
    </section>
  );
}