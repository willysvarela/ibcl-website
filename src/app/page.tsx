import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { InfoBar } from '@/components/home/InfoBar'
import { Values } from '@/components/home/Values'
import { MinistriesPreview } from '@/components/home/MinistriesPreview'
import { FirstVisitCTA } from '@/components/home/FirstVisitCTA'
import { MessagesPreview } from '@/components/home/MessagesPreview'
import { getYouTubeVideos } from '@/lib/youtube'

export const metadata: Metadata = {
  title: 'IBCL - Igreja Batista Central Leste | Manaus/AM',
  description:
    'Igreja Batista Central Leste em Manaus/AM — cultos aos domingos às 18h na Av. Cosme Ferreira, 2690, Aleixo. Uma família que caminha junto na Palavra.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'IBCL - Igreja Batista Central Leste | Manaus/AM',
    description:
      'Cultos aos domingos às 18h em Manaus/AM. Venha fazer parte de uma família que caminha junto na Palavra.',
    type: 'website',
    url: '/',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'IBCL - Igreja Batista Central Leste' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBCL - Igreja Batista Central Leste | Manaus/AM',
    description: 'Cultos aos domingos às 18h em Manaus/AM.',
    images: ['/opengraph-image'],
  },
}

export default async function HomePage() {
  const videos = await getYouTubeVideos(6)

  return (
    <>
      <Hero />
      <InfoBar />
      <Values />
      <MinistriesPreview />
      <FirstVisitCTA />
      <MessagesPreview videos={videos} />
    </>
  )
}
