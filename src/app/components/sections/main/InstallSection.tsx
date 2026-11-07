const APP = {
  name: 'Buscador Flotante',
  version: '1.0',
  file: '/downloads/buscador-flotante.apk',
  size: '≈ 6 MB', // ajusta al tamaño real
}

const steps = [
  { t: 'Descarga el APK', d: 'Toca el botón de arriba desde tu Huawei.' },
  { t: 'Permite la instalación', d: 'Al abrirlo, Android pedirá permitir apps de fuentes desconocidas. Acepta solo para tu navegador o gestor de archivos.' },
  { t: 'Instala', d: 'Si aparece un aviso de seguridad por ser una app fuera de tienda, elige "Instalar de todas formas".' },
  { t: 'Activa el servicio', d: 'Abre la app, toca el botón y en Accesibilidad activa "Buscador Flotante".' },
  { t: 'Si el interruptor está gris', d: 'Ajustes → Aplicaciones → Buscador Flotante → ⋮ → Permitir configuración restringida.' },
]

export default function InstallSection() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-between bg-neutral-50 px-5 py-8 text-neutral-900 md:min-h-0 md:max-w-2xl md:rounded-3xl md:border md:border-neutral-200/80 md:bg-white md:p-10 md:shadow-sm md:mx-auto">
      {/* Header & Main Download CTA */}
      <header className="space-y-6">
        <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-5">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
              {APP.name}
            </h2>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
              <span>Versión {APP.version}</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>Android</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              <span>{APP.size}</span>
            </div>
          </div>
          <div className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
            APK
          </div>
        </div>

        <a
          href={APP.file}
          download
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <span>Descargar APK</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </a>
      </header>

      {/* Ordered Steps Timeline */}
      <div className="my-8 flex-1">
        <ol className="relative space-y-6 border-l border-neutral-200 pl-6">
          {steps.map((s, i) => (
            <li key={s.t} className="relative group">
              {/* Badge Indicator */}
              <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-[11px] font-bold text-neutral-700 shadow-xs">
                {i + 1}
              </span>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold leading-none text-neutral-900">
                  {s.t}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-600">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Trust & Security Footnote */}
      <footer className="rounded-2xl border border-neutral-200/60 bg-white p-4 shadow-xs md:bg-neutral-50/50">
        <div className="flex items-start gap-3">
          <svg className="h-4 w-4 shrink-0 text-neutral-400 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <p className="text-xs leading-relaxed text-neutral-500">
            La app no lee el contenido de tu pantalla. Solo muestra la burbuja y envía lo que tú escribas al buscador.
          </p>
        </div>
      </footer>
    </section>
  )
}