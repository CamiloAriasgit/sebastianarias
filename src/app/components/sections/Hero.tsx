function StatusBadge() {
  return (
    <div className="animate-hero-fade-up flex items-center gap-2 rounded-full border border-neutral-200 bg-background/80 px-3 py-1 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-hero-pulse absolute h-full w-full rounded-full bg-emerald-500 opacity-75" />
        <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-900 font-sans sm:text-xs">
        Disponible para proyectos
      </span>
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-4 sm:gap-6">
      <h1 className="text-balance text-center text-5xl  font-sans font-semibold leading-[0.9] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
        Sistemas web <br className="hidden sm:block" /> que escalan negocios.
      </h1>

      <p className="w-full max-w-[20rem] text-pretty text-center text-base font-sans leading-tight text-neutral-500 sm:max-w-md sm:text-lg lg:max-w-xl lg:text-xl">
        Diseño y desarrollo pensados para operar, medir y crecer con claridad.
      </p>
    </div>
  );
}

function HeroActions() {
  return (
    <a
      href="#contacto"
      className="inline-flex h-12 items-center justify-center font-sans rounded-full bg-neutral-900 px-8 text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-95"
    >
      Empezar proyecto
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[99svh] w-full flex-col items-center justify-center overflow-hidden bg-[#F6F8FB] px-6 py-20 selection:bg-lime-400">
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-12">
        <StatusBadge />
        <HeroHeading />
        <HeroActions />
      </div>
    </section>
  );
}