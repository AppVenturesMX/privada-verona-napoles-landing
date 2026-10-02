import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Casa en Verona Residencial, Tijuana | $3,650,000 MXN — Bienes Raíces Hub',
  description:
    'Casa de 110 m² de construcción, 3 recámaras y 2.5 baños en el fraccionamiento privado Verona Residencial, Tijuana. Acceso controlado, seguridad 24 horas y áreas verdes. Agenda tu cita con el asesor.',
  openGraph: {
    title: 'Casa en Verona Residencial, Tijuana | $3,650,000 MXN',
    description:
      'Casa de 110 m² de construcción, 3 recámaras y 2.5 baños en el fraccionamiento privado Verona Residencial, Tijuana. Acceso controlado, seguridad 24 horas y áreas verdes.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Bienes Raíces Hub',
    images: [
      {
        url: '/images/fachada.jpg',
        width: 900,
        height: 1200,
        alt: 'Fachada de la casa en Privada Verona Nápoles, Tijuana',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <script
          src="https://isis-vercel.vercel.app/isis-widget.js"
          data-api="https://isis-vercel.vercel.app"
          data-avatar="https://isis-vercel.vercel.app/isis-avatar.webp"
          data-brand="BienesRaícesHub"
          data-whatsapp="5216641200764"
          data-property="privada-verona-napoles"
          data-catalog-url="https://www.bienesraiceshub.com/isis-catalog"
          data-catalog-json="https://www.bienesraiceshub.com/isis-catalog-json"
          data-alma-url="https://preaprueba.com"
          data-emailjs-service="service_pz5aqzz"
          data-emailjs-template="template_kyt29ma"
          data-emailjs-key="wSSGo0XmY23CNICP4"
          defer
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
