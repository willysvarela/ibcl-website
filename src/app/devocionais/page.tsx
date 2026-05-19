import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { MotionSection } from '@/components/ui/MotionSection'
import { getAllDevocionais, formatDevocionalDate } from '@/lib/devocionais'

export const metadata: Metadata = {
  title: 'Devocionais',
  description:
    'Reflexões diárias com versículo, meditação e oração para nutrir sua caminhada com Deus. Publicados pela equipe da IBCL — Igreja Batista Central Leste, Manaus/AM.',
  keywords: [
    'devocionais cristãos', 'reflexão bíblica diária', 'devocional evangélico',
    'versículo do dia', 'meditação bíblica', 'IBCL devocionais', 'vida cristã Manaus',
  ],
  alternates: { canonical: '/devocionais' },
  openGraph: {
    title: 'Devocionais | IBCL Manaus',
    description:
      'Reflexões diárias com versículo, meditação e oração para nutrir sua caminhada com Deus.',
    type: 'website',
    url: '/devocionais',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Devocionais da IBCL' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devocionais | IBCL Manaus',
    description: 'Reflexões diárias com versículo, meditação e oração — Igreja Batista Central Leste.',
    images: ['/opengraph-image'],
  },
}

export default function DevocionaisPage() {
  const all = getAllDevocionais()
  const [featured, ...rest] = all

  return (
    <>
      <PageHero
        tag="Devocionais"
        title="Reflexões para cada dia"
        subtitle="Textos curtos com versículo, reflexão e oração para nutrir sua caminhada com Deus."
        imageSeed="ibcl-devocionais-natureza"
      />

      <section className="max-w-[800px] mx-auto px-5 md:px-8 py-16 md:py-24">

        {all.length === 0 && (
          <div className="text-center py-24">
            <p className="font-body text-lg text-on-surface-variant">Nenhum devocional publicado ainda.</p>
          </div>
        )}

        {/* Featured post */}
        {featured && (
          <MotionSection direction="up">
            <Link href={`/devocionais/${featured.slug}`} className="group block">
              <article className="grid md:grid-cols-[1fr_280px] gap-6 md:gap-10 items-center pb-12 border-b border-outline-variant/25">

                {/* Text */}
                <div className="order-2 md:order-1 flex flex-col gap-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans font-bold text-xs uppercase tracking-wider w-fit">
                    Mais recente
                  </span>
                  <h2 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-on-surface leading-tight tracking-tight group-hover:text-primary transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-2.5 font-sans text-sm text-on-surface-variant">
                    <time dateTime={featured.date}>{formatDevocionalDate(featured.date)}</time>
                    <span className="w-1 h-1 rounded-full bg-outline-variant" aria-hidden />
                    <span>{featured.readingTime} min de leitura</span>
                  </div>
                  <span className="font-sans font-semibold text-sm text-primary group-hover:underline underline-offset-4 w-fit mt-1">
                    Ler devocional →
                  </span>
                </div>

                {/* Cover image */}
                <div className="order-1 md:order-2 relative w-full aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container shrink-0">
                  <Image
                    src={`https://picsum.photos/seed/${featured.coverSeed}/640/480`}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </article>
            </Link>
          </MotionSection>
        )}

        {/* Remaining posts */}
        {rest.length > 0 && (
          <div className="mt-12 flex flex-col gap-0">
            {rest.map((post, i) => (
              <MotionSection key={post.slug} direction="up" delay={i * 0.09}>
                <Link href={`/devocionais/${post.slug}`} className="group block">
                  <article className="grid grid-cols-[1fr_auto] gap-5 md:gap-8 items-start py-10 border-b border-outline-variant/25">

                    {/* Text */}
                    <div className="flex flex-col gap-2.5 min-w-0">
                      <h3 className="font-sans font-bold text-lg md:text-xl text-on-surface leading-snug tracking-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed line-clamp-2 hidden sm:block">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 font-sans text-xs text-on-surface-variant mt-0.5">
                        <time dateTime={post.date}>{formatDevocionalDate(post.date)}</time>
                        <span className="w-1 h-1 rounded-full bg-outline-variant" aria-hidden />
                        <span>{post.readingTime} min</span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden bg-surface-container shrink-0">
                      <Image
                        src={`https://picsum.photos/seed/${post.coverSeed}/240/240`}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </article>
                </Link>
              </MotionSection>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
