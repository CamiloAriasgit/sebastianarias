// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'; //

export const metadata: Metadata = {
  title: 'Sebastian Arias — Desarrollo web para proyectos inmobiliarios',
  description: 'Diseñado para convertir tráfico de pauta en leads reales. Con tracking, WhatsApp estratégico y estética premium.',
  metadataBase: new URL('https://sebastianarias.com'),
  openGraph: {
    title: 'Sebastian Arias — Desarrollo web para proyectos inmobiliarios',
    description: 'Diseñado para convertir tráfico de pauta en leads reales.',
    url: 'https://sebastianarias.com',
    siteName: 'Sebastian Arias',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Arias — Desarrollo web para proyectos inmobiliarios',
    description: 'Diseñado para convertir tráfico de pauta en leads reales.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png', // 180x180 para iOS
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-P2SQSJ5W" />
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}