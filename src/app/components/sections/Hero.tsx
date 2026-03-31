
function StatusBadge() {
  return (
    <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full border border-neutral-200 bg-background/80 px-3.5 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-hero-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs font-medium tracking-wide text-neutral-900">
        Disponible para proyectos
      </span>
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-5 lg:gap-6">
      <h1 className="text-balance text-center text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-tight text-neutral-900">
        Sistemas web
        <br />
        que escalan negocios.
      </h1>

      <p className="max-w-xs text-pretty text-center text-lg leading-relaxed text-neutral-600 sm:max-w-sm sm:text-base lg:max-w-md lg:text-xl">
        Diseño y desarrollo pensados para operar, medir y crecer con claridad.
      </p>
    </div>
  );
}

function HeroActions() {
  return (
      <a
        href="#contacto"
        className="flex py-3 px-6 items-center justify-center gap-2 overflow-hidden rounded-full bg-neutral-900 text-sm font-semibold text-background transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20"
      >
        <span className="flex items-center">
          Empezar
        </span>
      </a>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-background selection:bg-lime-400">

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-16 sm:px-8 sm:py-24 lg:px-6 lg:py-32">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
          <StatusBadge />
          <HeroHeading />
          <HeroActions />
        </div>
      </div>
    </section>
  );
}
