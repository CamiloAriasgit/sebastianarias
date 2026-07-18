// components/layout/Footer.tsx
import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_URL =
  'https://wa.me/573235619283?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20landing%20pages%20para%20mi%20proyecto%20inmobiliario.'

const NAV_LINKS = [
  { name: 'Servicio', href: '#servicio' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Demo', href: '#demo' },
  { name: 'Planes', href: '#planes' },
  { name: 'Preguntas', href: '#faq' },
]

const WaIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 30.667 30.667" className={className} fill="currentColor">
    <path
      d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"
    />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-white/10">
      <div className="container-site py-12">
        <div className="flex flex-col gap-10">

          {/* Perfil */}
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/images/sebastian-profile.jpg"
                  alt="Sebastian Arias"
                  width={38}
                  height={38}
                  className="rounded-full object-cover grayscale-[30%]"
                />
                {/* Indicador creativo: Disponibilidad / Active Status */}
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-neutral-900" />
              </div>
              <div className="flex flex-col space-y-[-2px]">
                <span className="text-sm tracking-tight text-white">
                  Sebastian Arias
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-400 font-normal">
                  Disponible
                </span>
              </div>
            </div>

            {/* Botón Desktop (Oculto por defecto en móvil, flex en desktop) */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-neutral-800 justify-center items-center gap-2 py-3 w-35 rounded-full text-white transition-all duration-300 hover:bg-neutral-800 group"
            >
              <WaIcon />
              Contacto
            </a>
          </div>

          {/* Navegación */}
          <nav className="flex flex-col gap-2.5">
            <span className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
              Navegación
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors w-fit"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botón Móvil (Flex por defecto en móvil, oculto en desktop) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex bg-neutral-800 justify-center items-center gap-2 py-3 w-full rounded-full text-white transition-all duration-300 hover:bg-neutral-800 group"
          >
            <WaIcon />
            Contacto
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col-reverse md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-neutral-500 tracking-wide">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </span>
          <Link
            href="https://sebastianarias.com"
            className="text-xs text-neutral-500 hover:text-white transition-colors no-underline"
          >
            sebastianarias.com
          </Link>
        </div>
      </div>
    </footer>
  )
}