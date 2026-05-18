export interface YouTubeVideo {
  id: string
  title: string
  publishedAt: string
  thumbnail: string
  url: string
}

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i')
  const match = xml.match(re)
  return match ? match[1].trim() : ''
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const re = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, 'i')
  const match = xml.match(re)
  return match ? match[1] : ''
}

export async function getYouTubeVideos(maxResults = 9): Promise<YouTubeVideo[]> {
  const channelId = process.env.YOUTUBE_CHANNEL_ID
  if (!channelId) return getMockVideos(maxResults)

  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    const res = await fetch(rssUrl, { next: { revalidate: 3600 } })
    if (!res.ok) return getMockVideos(maxResults)

    const xml = await res.text()
    const entryRe = /<entry>([\s\S]*?)<\/entry>/gi
    const entries: RegExpExecArray[] = []
    let match
    while ((match = entryRe.exec(xml)) !== null) entries.push(match)

    return entries.slice(0, maxResults).map((e) => {
      const entry = e[1]
      const videoId = extractTag(entry, 'yt:videoId')
      const title = extractTag(entry, 'title').replace(/<!\[CDATA\[|\]\]>/g, '')
      const publishedAt = extractTag(entry, 'published')
      const thumbnail = extractAttr(entry, 'media:thumbnail', 'url') || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

      return {
        id: videoId,
        title,
        publishedAt,
        thumbnail,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      }
    })
  } catch {
    return getMockVideos(maxResults)
  }
}

function getMockVideos(count: number): YouTubeVideo[] {
  const titles = [
    'A fé que move montanhas — Domingo',
    'Vivendo em comunidade: lições de Atos',
    'O propósito de Deus para sua família',
    'Confiança em tempos difíceis',
    'A oração que transforma',
    'Identidade em Cristo',
    'Graça que restaura',
    'O poder do perdão',
    'Servir é crescer',
  ]

  return Array.from({ length: Math.min(count, titles.length) }, (_, i) => ({
    id: `mock-video-${i + 1}`,
    title: titles[i],
    publishedAt: new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000).toISOString(),
    thumbnail: `https://picsum.photos/seed/sermon${i + 1}/640/360`,
    url: 'https://www.youtube.com/videosibcl',
  }))
}

export function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}
