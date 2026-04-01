export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-2xl items-center justify-between rounded-full bg-neutral-200/60 pl-6 pr-3 py-2.5 backdrop-blur-md ">
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono tracking-tight text-neutral-900">
            Scab
          </span>
        </div>

        <ul className="hidden items-center gap-6 sm:flex">
          <li>
            <a href="#servicios" className="text-base font-sans text-neutral-500 transition-colors hover:text-neutral-900">
              Servicios
            </a>
          </li>
          <li>
            <a href="#proyectos" className="text-base font-sans text-neutral-500 transition-colors hover:text-neutral-900">
              Proyectos
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a 
          href="#contacto" 
          className="rounded-full bg-neutral-900 font-sans px-4 py-2 text-white transition-all hover:bg-neutral-800 active:scale-95"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}