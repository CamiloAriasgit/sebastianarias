function StatusBadge() {
  return (
    <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full px-3.5 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0 opacity-75" />
                <span
                    style={{ animationDelay: '0.2s' }}
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-b from-indigo-500/0 via-violet-500 to-indigo-500/0 opacity-75"
                />
                <span
                    style={{ animationDelay: '0.4s' }}
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-br from-indigo-500/0 via-purple-500 to-indigo-500/0 opacity-75"
                />
                <span
                    style={{ animationDelay: '0.6s' }}
                    className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-bl from-indigo-500/0 via-cyan-500 to-indigo-500/0 opacity-75"
                />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-500/0" />
            </span>
            <span className="text-xs font-medium tracking-wide text-[#5E6472]">
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
        Desde una landing de alto impacto hasta sistemas que te permiten operar y crecer.
      </p>
    </div>
  );
}

function HeroActions() {
  return (
    <a
      href="#contacto"
      className="inline-flex h-12 items-center justify-center font-sans rounded-full bg-neutral-900 px-8 text-base text-white transition-all hover:scale-[1.02] active:scale-95"
    >
      Empezar proyecto
    </a>
  );
}

function MetricPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <span className="font-semibold tabular-nums text-neutral-800">{value}</span>
      <span className="text-neutral-500">{label}</span>
    </div>
  );
}

function HeroMetrics() {
  return (
    <div className="animate-hero-fade-up-delay-3 flex items-center gap-4 sm:gap-6">
      <MetricPill value="+2" label="years" />
      <span className="h-3 w-px bg-foreground/10" />
      <MetricPill value="99%" label="uptime" />
      <span className="h-3 w-px bg-foreground/10" />
      <MetricPill value="4.9" label="rating" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[99svh] w-full flex-col items-center justify-center overflow-hidden bg-[#F6F8FB] px-6 py-20 selection:bg-lime-400 selection:text-neutral-900">
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-10">
        <StatusBadge />
        <HeroHeading />
        <HeroActions />
        <HeroMetrics />
      </div>
    </section>
  );
}