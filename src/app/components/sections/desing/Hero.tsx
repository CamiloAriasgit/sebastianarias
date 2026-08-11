import { WhatsAppButton } from '../../ui/WhatsAppButton';


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

/* --- WhatsApp notifications (columna derecha) --- */

const NOTIFICATIONS = [
  {
    id: 3,
    name: "Andrés Castillo",
    preview: "¿Aún hay unidades en el piso 8? Vi los planos y me convencieron.",
    time: "3 min",
  },
  {
    id: 2,
    name: "Valeria Ríos",
    preview: "Hola, me interesa el de 2 hab. ¿Tienen sala de ventas este fin de semana?",
    time: "1 min",
  },
  {
    id: 1,
    name: "Carlos Mendoza",
    preview: "Buenas, vi el proyecto Reserva del Bosque. ¿Cuándo puedo agendar una visita?",
    time: "ahora",
  },
];

function WaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30.667 30.667" className={className} fill="white" aria-hidden="true">
      <path
        d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
        c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
        c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
        c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
        c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
        c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
        c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
        c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
        c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
        c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
        C23.307,19.268,23.307,18.533,23.214,18.38z"
      />
    </svg>
  );
}

type Notif = (typeof NOTIFICATIONS)[number];

function NotifCard({ n }: { n: Notif }) {
  return (
    <div className="w-full shrink-0 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_30px_rgba(18,20,26,0.08)] sm:rounded-2xl sm:px-5 sm:py-3.5 lg:rounded-3xl lg:px-6 lg:py-4 xl:px-7 xl:py-5">
      <div className="mb-2 flex items-center justify-between sm:mb-2.5 lg:mb-3">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md bg-[#25D366] sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7">
            <WaIcon className="h-[10px] w-[10px] sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4" />
          </div>
          <span className="text-[11px] font-medium tracking-wide text-neutral-600 sm:text-xs lg:text-sm">
            WhatsApp
          </span>
        </div>
        <span className="font-mono text-[9px] text-neutral-400 sm:text-[10px] lg:text-xs">
          {n.time}
        </span>
      </div>
      <p className="m-0 mb-1 text-left text-sm font-medium text-neutral-950 sm:text-base lg:text-lg">
        {n.name}
      </p>
      <p className="m-0 line-clamp-2 text-left text-xs leading-relaxed text-neutral-600 sm:text-sm lg:text-base">
        {n.preview}
      </p>
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

          {/* Columna izquierda: Título + Párrafo + Botón */}
          <div className="relative flex flex-1 flex-col items-start justify-center gap-6 p-8 pt-12 sm:p-10 sm:pt-14 lg:col-span-7 lg:p-14 lg:pt-16 xl:p-20 xl:pt-24 2xl:p-24">
            <Meta index="01" />

            <h1 className="text-balance text-[2.35rem] font-medium  leading-[1.06] tracking-tight text-black sm:text-5xl lg:text-[3.6rem] xl:text-[4.4rem] 2xl:text-[5.2rem]">
              Landing pages para proyectos inmobiliarios
            </h1>

            <p className="max-w-[30ch] text-base leading-relaxed text-neutral-700 sm:text-lg lg:text-xl xl:text-2xl">
              Convertimos tu tráfico en inversionistas reales contactando por WhatsApp.
            </p>

            <WhatsAppButton />
          </div>

          {/* Columna derecha: notificaciones de WhatsApp, planas, mismo tamaño */}
          <div className="relative flex flex-1 flex-col justify-center gap-4 p-8 pt-12 sm:p-10 sm:pt-14 lg:col-span-5 lg:gap-5 lg:p-14 lg:pt-16 xl:gap-6 xl:p-16 xl:pt-24 2xl:p-20">
            <Meta index="02" />
            {NOTIFICATIONS.map((n) => (
              <NotifCard key={n.id} n={n} />
            ))}
          </div>
        </div>

        {/* Franja inferior: banda diagonal */}
        <HatchBand className="h-3 w-full border-t border-[#B9BFC9] sm:h-4" />
      </div>
    </section>
  );
}