// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 px-4">
      <div className="text-center space-y-6 max-w-md">
        {/* Badge / Indicator */}
        <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
          Error 404
        </span>

        {/* Título y Mensaje */}
        <h1 className="text-4xl font-light tracking-tight text-zinc-100">
          Página no encontrada
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Lo sentimos, el recurso al que intentas acceder no existe o fue movido a otra dirección.
        </p>

        {/* Botón de retorno */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-10 px-6 text-xs font-medium tracking-wide text-zinc-950 bg-zinc-100 hover:bg-zinc-200 transition-colors rounded-full"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}