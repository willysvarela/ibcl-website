import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MotionSection } from '@/components/ui/MotionSection'
import { getYouTubeVideos, formatDate } from '@/lib/youtube'
import { YOUTUBE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mensagens',
  description: 'Ouça as pregações da IBCL. Toda semana, uma nova mensagem disponível no YouTube.',
}

export default async function MensagensPage() {
  const videos = await getYouTubeVideos(9)
  const [latest, ...rest] = videos

  return (
    <>
      <PageHero
        tag="Mensagens"
        title="A Palavra para onde você estiver"
        subtitle="Nossas pregações são gravadas semanalmente e publicadas no YouTube. Ouça quando e onde quiser."
        imageSeed="ibcl-mensagens"
      />

      {/* Latest video */}
      <section className="py-20 md:py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <SectionHeading
          tag="Última mensagem"
          title="Assista agora"
        />

        {latest && (
          <MotionSection direction="up">
            <a
              href={latest.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6">
                <Image src={latest.thumbnail} alt={latest.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="font-sans font-bold text-2xl md:text-3xl text-white leading-snug max-w-2xl">
                    {latest.title}
                  </h2>
                  <p className="font-body text-sm text-white/70 mt-1">{formatDate(latest.publishedAt)}</p>
                </div>
              </div>
            </a>
          </MotionSection>
        )}

        {/* YouTube CTA */}
        <MotionSection direction="up" delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-container-low rounded-2xl p-5 border border-outline-variant/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF0000]/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </div>
              <div>
                <p className="font-sans font-semibold text-sm text-on-surface">Canal da IBCL no YouTube</p>
                <p className="font-body text-xs text-on-surface-variant">Nova mensagem toda semana</p>
              </div>
            </div>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#FF0000] text-white px-5 py-2.5 rounded-xl font-sans font-bold text-sm hover:bg-[#cc0000] transition-colors"
            >
              Inscrever-se
            </a>
          </div>
        </MotionSection>
      </section>

      {/* Grid of other videos */}
      {rest.length > 0 && (
        <section className="py-12 md:py-20 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-5 md:px-16">
            <SectionHeading
              tag="Arquivo"
              title="Mensagens anteriores"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {rest.map((v, i) => (
                <MotionSection key={v.id} delay={i * 0.08} direction="up">
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-surface rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={v.thumbnail}
                        alt={v.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="font-sans font-semibold text-base text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {v.title}
                      </h3>
                      <p className="font-body text-xs text-on-surface-variant mt-2">{formatDate(v.publishedAt)}</p>
                    </div>
                  </a>
                </MotionSection>
              ))}
            </div>

            <MotionSection direction="up" delay={0.3} className="mt-10 text-center">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans font-bold text-sm text-primary border-2 border-primary px-6 py-3 rounded-xl hover:bg-primary/5 transition-colors"
              >
                Ver mais no YouTube →
              </a>
            </MotionSection>
          </div>
        </section>
      )}
    </>
  )
}
