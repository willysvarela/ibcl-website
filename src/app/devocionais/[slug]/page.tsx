import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllDevocionais, getDevocional, formatDevocionalDate } from '@/lib/devocionais'
import { MotionSection } from '@/components/ui/MotionSection'
import { DevocionalHeader } from '@/components/devocionais/DevocionalHeader'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllDevocionais().map(d => ({ slug: d.slug }))
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ibcl.com.br'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getDevocional(slug)
  if (!post) return { title: 'Devocional não encontrado' }

  const ogImage = `https://picsum.photos/seed/${post.coverSeed}/1200/630`
  const url = `/devocionais/${slug}`

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      'devocional cristão', 'reflexão bíblica', 'versículo do dia', 'IBCL',
      'meditação bíblica', 'vida cristã', 'Igreja Batista Central Leste',
    ],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url,
      publishedTime: post.date,
      section: 'Devocionais',
      tags: ['devocional', 'reflexão bíblica', 'fé'],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  }
}

export default async function DevocionalPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getDevocional(slug)
  if (!post) notFound()

  const all = getAllDevocionais()
  const related = all.filter(d => d.slug !== slug).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `https://picsum.photos/seed/${post.coverSeed}/1200/630`,
    url: `${BASE_URL}/devocionais/${slug}`,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      name: 'Igreja Batista Central Leste',
      url: BASE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/devocionais/${slug}`,
    },
    articleSection: 'Devocionais',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Back navigation */}
      <div className="max-w-[800px] mx-auto px-5 md:px-8 pt-10 pb-0">
        <MotionSection direction="left" delay={0}>
          <Link
            href="/devocionais"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-on-surface-variant hover:text-primary transition-colors duration-200 group"
            aria-label="Voltar para Devocionais"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Devocionais
          </Link>
        </MotionSection>
      </div>

      <article className="max-w-[800px] mx-auto px-5 md:px-8 pt-8 pb-20">

        {/* Header */}
        <DevocionalHeader
          title={post.title}
          date={formatDevocionalDate(post.date)}
          dateTime={post.date}
          readingTime={post.readingTime}
        />

        {/* Cover image */}
        <MotionSection direction="up" delay={0.25}>
          <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden bg-surface-container mt-8 mb-10">
            <Image
              src={`https://picsum.photos/seed/${post.coverSeed}/1200/600`}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </MotionSection>

        {/* Body */}
        <MotionSection direction="up" delay={0.35}>
          <div
            className="devocional-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </MotionSection>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-outline-variant/25 bg-surface-container-low py-16 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-8">
            <MotionSection direction="up">
              <h2 className="font-sans font-bold text-xl md:text-2xl text-on-surface mb-8">
                Mais devocionais
              </h2>
            </MotionSection>

            <div className="flex flex-col gap-0">
              {related.map((rel, i) => (
                <MotionSection key={rel.slug} direction="up" delay={i * 0.08}>
                  <Link href={`/devocionais/${rel.slug}`} className="group block">
                    <article className="grid grid-cols-[1fr_auto] gap-5 items-center py-6 border-b border-outline-variant/20 last:border-b-0">
                      <div className="flex flex-col gap-1.5 min-w-0">
                        <h3 className="font-sans font-semibold text-base text-on-surface group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
                          {rel.title}
                        </h3>
                        <div className="flex items-center gap-2 font-sans text-xs text-on-surface-variant">
                          <time dateTime={rel.date}>{formatDevocionalDate(rel.date)}</time>
                          <span className="w-1 h-1 rounded-full bg-outline-variant" aria-hidden />
                          <span>{rel.readingTime} min</span>
                        </div>
                      </div>
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-surface-container shrink-0">
                        <Image
                          src={`https://picsum.photos/seed/${rel.coverSeed}/160/160`}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </article>
                  </Link>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
