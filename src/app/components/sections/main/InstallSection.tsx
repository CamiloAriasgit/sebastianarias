'use client'

import { useState } from 'react'

const APP = {
  name: 'Buscador Flotante',
  version: '1.0',
  file: '/downloads/buscador-flotante.apk',
  size: '≈ 9 MB',
}

const steps = [
  {
    t: 'Descarga el archivo',
    d: 'Toca el botón de descarga desde tu celular. Es el instalador de la app y se guardará en tus descargas.',
  },
  {
    t: 'Permite la instalación',
    d: 'Esta app no está en la tienda de Google, así que Android te pedirá permiso para instalar algo que viene de fuera. Es un aviso normal. Dalo solo al navegador o gestor de archivos que estés usando, y puedes quitarlo después.',
  },
  {
    t: 'Confirma la instalación',
    d: 'Android puede avisarte de que no reconoce al creador de la app, porque no pasó por una tienda. Si confías en esta página, elige "Instalar de todas formas".',
  },
  {
    t: 'Activa la burbuja',
    d: 'Para aparecer encima de tus otras apps, la burbuja necesita el permiso de Accesibilidad, que es la forma que Android ofrece para eso. Abre la app, toca el botón y activa "Buscador Flotante".',
  },
  {
    t: 'Si el interruptor está gris',
    d: 'Android bloquea este permiso por defecto en las apps instaladas fuera de la tienda, como medida de protección. Para habilitarlo ve a Ajustes → Aplicaciones → Buscador Flotante → ⋮ → Permitir configuración restringida.',
  },
]

export default function InstallSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative flex h-[100dvh] w-full items-center justify-center bg-neutral-950 px-4 py-6 text-neutral-100">
      {/* Contenedor centralizado */}
      <div className="flex h-full w-full max-w-md flex-col justify-between rounded-3xl bg-neutral-900/60 p-6 md:h-auto md:max-w-xl md:p-10 md:shadow-2xl">
        
        {/* Header & Main Info */}
        <header className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-medium tracking-tight text-neutral-100 md:text-2xl">
                {APP.name}
              </h2>
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                <span>Versión {APP.version}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-600" />
                <span>Android</span>
                <span className="h-1 w-1 rounded-full bg-neutral-600" />
                <span>{APP.size}</span>
              </div>
            </div>
            <div className="rounded-full bg-blue-900/40 shadow shadow-inner shadow-blue-700 px-3 py-1 text-xs font-semibold text-blue-700">
              APK
            </div>
          </div>

          {/* Botón de descarga principal */}
          <button
            onClick={() => setIsOpen(true)}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-neutral-400 px-6 py-4 text-sm font-semibold text-neutral-900 shadow shadow-inner shadow-white *:transition-all hover:bg-neutral-300 active:scale-[0.99]"
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
          </button>
        </header>

        {/* Indicación central */}
        <div className="my-auto text-center space-y-2 py-6">
          <p className="text-sm text-neutral-400">
            Sigue los pasos de instalación guiados para configurar tu dispositivo correctamente.
          </p>
        </div>

        {/* Trust & Security Footnote */}
        <footer className="rounded-2xl bg-neutral-800/20 p-4">
          <div className="flex items-start gap-3">
            <svg className="h-4 w-4 shrink-0 text-neutral-500 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <p className="text-xs leading-relaxed text-neutral-600">
              La app no lee el contenido de tu pantalla. Solo muestra la burbuja y envía lo que tú escribas al buscador.
            </p>
          </div>
        </footer>
      </div>

      {/* Modal (Desktop) / Sheet (Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-xs md:items-center p-0 md:p-4">
          <div className="flex max-h-[85vh] w-full flex-col rounded-t-3xl bg-neutral-900 p-6 shadow-2xl md:max-w-lg md:rounded-3xl">
            {/* Header del modal sin background extra */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-medium text-neutral-100">Pasos de instalación</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Lista sin backgrounds ni padding individual en cada ítem */}
            <div className="my-2 flex-1 overflow-y-auto space-y-5 pr-1">
              {steps.map((s, i) => (
                <div key={s.t} className="space-y-1">
                  <h4 className="text-sm text-neutral-200">
                    {i + 1}. {s.t}
                  </h4>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>

            {/* Botón de descarga final */}
            <div className="mt-6">
              <a
                href={APP.file}
                download
                className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-400 px-6 py-4 text-sm font-semibold text-neutral-900 shadow shadow-inner shadow-white transition-all hover:bg-neutral-300 active:scale-[0.99]"
              >
                <span>Descargar APK ahora</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}