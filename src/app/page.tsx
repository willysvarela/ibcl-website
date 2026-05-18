import { Hero } from '@/components/home/Hero'
import { InfoBar } from '@/components/home/InfoBar'
import { Values } from '@/components/home/Values'
import { MinistriesPreview } from '@/components/home/MinistriesPreview'
import { FirstVisitCTA } from '@/components/home/FirstVisitCTA'
import { MessagesPreview } from '@/components/home/MessagesPreview'
import { getYouTubeVideos } from '@/lib/youtube'

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
