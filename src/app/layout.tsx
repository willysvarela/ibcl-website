import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFAB } from '@/components/layout/WhatsAppFAB'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const vietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: '--font-vietnam',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ibcl.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'IBCL - Igreja Batista Central Leste | Manaus/AM',
    template: '%s | IBCL Manaus',
  },
  description:
    'Igreja Batista Central Leste em Manaus/AM — cultos aos domingos às 18h na Av. Cosme Ferreira, 2690, Aleixo. Uma família que caminha junto na Palavra.',
  keywords: [
    'IBCL',
    'Igreja Batista Central Leste',
    'igreja em Manaus',
    'Igreja Batista Manaus',
    'culto domingo Manaus',
    'Aleixo Manaus',
    'Av Cosme Ferreira',
    'igreja evangélica Manaus',
    'comunidade cristã Manaus',
    'fé família Manaus',
  ],
  authors: [{ name: 'Igreja Batista Central Leste', url: BASE_URL }],
  creator: 'IBCL',
  publisher: 'Igreja Batista Central Leste',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'IBCL - Igreja Batista Central Leste | Manaus/AM',
    description:
      'Cultos aos domingos às 18h na Av. Cosme Ferreira, 2690, Aleixo, Manaus/AM. Venha fazer parte de uma família que caminha junto na Palavra.',
    locale: 'pt_BR',
    type: 'website',
    siteName: 'IBCL',
    url: BASE_URL,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'IBCL - Igreja Batista Central Leste, Manaus/AM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBCL - Igreja Batista Central Leste | Manaus/AM',
    description: 'Cultos aos domingos às 18h em Manaus/AM. Uma família que caminha junto na Palavra.',
    images: ['/opengraph-image'],
  },
}

const churchJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Church', 'Organization'],
  name: 'Igreja Batista Central Leste',
  alternateName: 'IBCL',
  description:
    'Uma comunidade cristã em Manaus/AM que acredita que a vida é melhor em comunidade. Cultos aos domingos às 18h.',
  url: BASE_URL,
  telephone: '+5592992082294',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Cosme Ferreira, 2690',
    addressLocality: 'Manaus',
    addressRegion: 'AM',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -3.087,
    longitude: -59.9763,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '18:00',
      closes: '19:30',
      description: 'Culto dominical',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
      description: 'Secretaria',
    },
  ],
  sameAs: [
    'https://www.instagram.com/ibcentralleste',
    'https://www.youtube.com/videosibcl',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${vietnam.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-on-surface antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
        />
        <Navbar />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a5874867be164557825967e6f781ee7d"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
