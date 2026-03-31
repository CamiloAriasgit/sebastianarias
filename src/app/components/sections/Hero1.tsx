
function StatusBadge() {
  return (
    <div className="animate-hero-fade-up flex items-center gap-2.5 rounded-full border border-foreground/[0.06] bg-background/80 px-3.5 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-hero-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs font-medium tracking-wide text-muted-foreground">
        Disponible para proyectos
      </span>
    </div>
  );
}

function HeroHeading() {
  return (
    <div className="animate-hero-fade-up-delay-1 flex flex-col items-center gap-5 lg:gap-6">
      <h1 className="text-balance text-center text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-tight text-foreground">
        Sistemas web
        <br />
        <span className="text-muted-foreground">que escalan negocios.</span>
      </h1>

      <p className="max-w-xs text-pretty text-center text-sm leading-relaxed text-muted-foreground sm:max-w-sm sm:text-base lg:max-w-md lg:text-lg">
        Diseno y desarrollo pensados para operar, medir y crecer con claridad.
      </p>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="animate-hero-fade-up-delay-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
      <a
        href="#contacto"
        className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-foreground text-sm font-semibold text-background transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20 active:scale-[0.97] sm:h-14 sm:w-52 sm:text-[15px]"
      >
        <span className="relative z-10 flex items-center gap-2">
          Empezar
        </span>
        <span className="absolute inset-0 -translate-x-full bg-foreground/80 transition-transform duration-500 group-hover:translate-x-0" />
      </a>

      <a
        href="#explorar"
        className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-foreground/[0.08] bg-secondary/50 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/[0.15] hover:bg-secondary hover:text-foreground active:scale-[0.97] sm:h-14 sm:w-52 sm:text-[15px]"
      >
        Explorar mas
      </a>
    </div>
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
    <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
      <span className="font-semibold tabular-nums text-foreground">{value}</span>
      <span className="text-muted-foreground/60">{label}</span>
    </div>
  );
}

function HeroMetrics() {
  return (
    <div className="animate-hero-fade-up-delay-3 flex items-center gap-4 sm:gap-6">
      <MetricPill value="+40" label="proyectos" />
      <span className="h-3 w-px bg-foreground/10" />
      <MetricPill value="99%" label="uptime" />
      <span className="h-3 w-px bg-foreground/10" />
      <MetricPill value="4.9" label="rating" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-background selection:bg-foreground/5">

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-16 sm:px-8 sm:py-24 lg:px-6 lg:py-32">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
          <StatusBadge />
          <HeroHeading />
          <HeroActions />
          <HeroMetrics />
        </div>
      </div>
    </section>
  );
}
