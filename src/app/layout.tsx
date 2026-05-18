import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from 'next/font/google'
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

export const metadata: Metadata = {
  title: {
    default: 'IBCL — Igreja Batista Central Leste',
    template: '%s | IBCL',
  },
  description:
    'Somos uma igreja que acredita que a vida é melhor em comunidade. Localizada na Av. Cosme Ferreira, 2690 — Aleixo, Manaus/AM. Cultos aos domingos às 18h.',
  keywords: ['igreja', 'batista', 'manaus', 'IBCL', 'culto', 'comunidade', 'fé'],
  openGraph: {
    title: 'IBCL — Igreja Batista Central Leste',
    description: 'Muito mais que amigos — uma família que caminha junto na Palavra.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${vietnam.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-on-surface antialiased">
        <Navbar />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
