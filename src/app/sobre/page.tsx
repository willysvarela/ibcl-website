import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { ValuesSection } from '@/components/sobre/ValuesSection'
import { HistorySection } from '@/components/sobre/HistorySection'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a história, a liderança e os valores da Igreja Batista Central Leste — 25 anos de fé e comunidade em Manaus.',
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
