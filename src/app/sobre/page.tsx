import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { ValuesSection } from '@/components/sobre/ValuesSection'
import { HistorySection } from '@/components/sobre/HistorySection'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a história e os valores da IBCL — Igreja Batista Central Leste. 25 anos de fé e comunidade no coração do Aleixo, Manaus/AM.',
  keywords: ['história IBCL', 'Igreja Batista Central Leste história', 'valores IBCL', 'missão IBCL Manaus'],
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre Nós | IBCL Manaus',
    description:
      'Conheça a história e os valores da IBCL — 25 anos de fé e comunidade no coração do Aleixo, Manaus/AM.',
    type: 'website',
    url: '/sobre',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Sobre a IBCL - Igreja Batista Central Leste' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nós | IBCL Manaus',
    description: 'Conheça a história e os valores da IBCL — 25 anos de fé em Manaus/AM.',
    images: ['/opengraph-image'],
  },
}

export default function SobrePage() {
  return (
    <>
      <PageHero
        tag="Quem Somos"
        title="Uma semente plantada no Leste de Manaus"
        subtitle="Desde 1999, construindo não apenas uma reunião semanal, mas uma família."
        imageSeed="ibcl-about"
      />
      <HistorySection />
      <ValuesSection />
    </>
  )
}
