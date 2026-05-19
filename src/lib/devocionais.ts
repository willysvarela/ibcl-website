import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const CONTENT_DIR = path.join(process.cwd(), 'content/devocionais')

export interface Devocional {
  slug: string
  title: string
  date: string
  excerpt: string
  coverSeed: string
  readingTime: number
}

export interface DevocionalWithContent extends Devocional {
  contentHtml: string
}

function calcReadingTime(text: string): number {
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 200))
}

export function formatDevocionalDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export function getAllDevocionais(): Devocional[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  return fs
    .readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('_'))
    .flatMap(filename => {
      const slug = filename.replace(/\.md$/, '')
      const { data, content } = matter(fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8'))
      // Skip files that are missing required frontmatter fields
      if (!data.title || !data.date || !data.excerpt) return []
      return [{
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        coverSeed: (data.coverSeed as string | undefined) ?? slug,
        readingTime: calcReadingTime(content),
      }]
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getDevocional(slug: string): Promise<DevocionalWithContent | null> {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    coverSeed: (data.coverSeed as string | undefined) ?? slug,
    readingTime: calcReadingTime(content),
    contentHtml: processed.toString(),
  }
}
