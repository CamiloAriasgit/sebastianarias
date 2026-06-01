// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sebastian Arias — Landing pages para proyectos inmobiliarios',
  description: 'Diseñadas para convertir tráfico de pauta en leads reales. Con tracking, WhatsApp estratégico y estética premium.',
  metadataBase: new URL('https://sebastianarias.com'),
  openGraph: {
    title: 'Sebastian Arias — Landing pages para proyectos inmobiliarios',
    description: 'Diseñadas para convertir tráfico de pauta en leads reales.',
    url: 'https://sebastianarias.com',
    siteName: 'Sebastian Arias',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Arias — Landing pages para proyectos inmobiliarios',
    description: 'Diseñadas para convertir tráfico de pauta en leads reales.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}