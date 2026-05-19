import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { MotionSection, StaggerContainer, staggerChild } from '@/components/ui/MotionSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WHATSAPP_URL_MINISTERIOS, WHATSAPP_URL_GRUPOS_ORACAO, INSTAGRAM_KIDS, INSTAGRAM_TEENS, INSTAGRAM_JOVEM } from '@/lib/constants'
import { HandDrawnIcon, type HandDrawnIconName } from '@/components/ui/HandDrawnIcon'

export const metadata: Metadata = {
  title: 'Ministérios',
  description:
    'Explore os ministérios da IBCL em Manaus: IBCL Baby, Kids, Teens, Jovem, Grupos de Oração e Maturidade Cristã. Um espaço intencional para cada etapa da vida.',
  keywords: [
    'ministérios IBCL', 'IBCL Kids Manaus', 'IBCL Jovem Manaus', 'IBCL Teens Manaus',
    'grupos de oração Manaus', 'ministério infantil Manaus', 'jovens evangélicos Manaus',
  ],
  alternates: { canonical: '/ministerios' },
  openGraph: {
    title: 'Ministérios | IBCL Manaus',
    description:
      'IBCL Baby, Kids, Teens, Jovem, Grupos de Oração e Maturidade Cristã — um espaço para cada etapa da vida em Manaus/AM.',
    type: 'website',
    url: '/ministerios',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ministérios da IBCL Manaus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ministérios | IBCL Manaus',
    description: 'Baby, Kids, Teens, Jovem, GOs e Maturidade — um espaço para cada etapa da vida.',
    images: ['/opengraph-image'],
  },
}

const ministerios: Array<{
  emoji: HandDrawnIconName
  emojiColor: string
  name: string
  tag: string
  tagColor: string
  schedule: string
  scheduleNote: string
  instagram: string | null
  instagramHandle?: string
  image: string
  desc: string
  highlight: string
  cta?: { label: string; href: string; external: boolean }
}> = [
  {
    emoji: 'Profile',
    emojiColor: '#6b5778',
    name: 'IBCL Baby - Berçário',
    tag: 'Bebês 0–2 anos',
    tagColor: 'bg-accent-teal/15 text-accent-teal',
    schedule: 'Domingos às 18h',
    scheduleNote: 'Simultâneo ao culto',
    instagram: null,
    image: 'https://picsum.photos/seed/ibcl-baby/600/400',
    desc: 'Enquanto os pais participam do culto, o IBCL Baby cuida dos seus pequenos com amor e responsabilidade. Nossa equipe é treinada e dedicada para que seu bebê se sinta seguro, confortável e feliz. Em caso de necessidade, você será chamado discretamente pelo telão da igreja.',
    highlight: 'Equipe treinada e supervisionada',
  },
  {
    emoji: 'Star',
    emojiColor: '#2D6A4F',
    name: 'IBCL Kids',
    tag: 'Crianças 3–11 anos',
    tagColor: 'bg-accent-teal/15 text-accent-teal',
    schedule: 'Domingos às 18h',
    scheduleNote: 'Simultâneo ao culto',
    instagram: INSTAGRAM_KIDS,
    instagramHandle: '@ibclkids',
    image: 'https://picsum.photos/seed/ibcl-kids2/600/400',
    desc: 'A Palavra também é para as crianças. Ela pode ser ensinada de forma divertida! O IBCL Kids trabalha a Bíblia de forma lúdica, criativa e responsável, garantindo que cada criança aprenda e se sinta pertencente. Dinâmicas, histórias e atividades cuidadosamente planejadas para cada faixa etária.',
    highlight: 'Bíblia de forma lúdica e criativa',
  },
  {
    emoji: 'Signal',
    emojiColor: '#E2725B',
    name: 'IBCL Teens',
    tag: 'Adolescentes 12–14 anos',
    tagColor: 'bg-accent-coral/15 text-accent-coral',
    schedule: 'Sábados, 16h às 18h',
    scheduleNote: 'Semanal',
    instagram: INSTAGRAM_TEENS,
    instagramHandle: '@ibclteens',
    image: 'https://picsum.photos/seed/ibcl-teens2/600/400',
    desc: 'A adolescência é uma fase decisiva, e a IBCL quer caminhar junto com os jovens nela. O IBCL Teens é uma programação semanal repleta de dinâmicas, eventos especiais e ensinamentos da Palavra pensados para esse momento único da vida. Diversão com propósito.',
    highlight: 'Diversão com propósito',
  },
  {
    emoji: 'Signals',
    emojiColor: '#713638',
    name: 'IBCL Jovem',
    tag: 'Jovens solteiros 15+',
    tagColor: 'bg-secondary/15 text-secondary',
    schedule: 'Sábados, 18h às 20h',
    scheduleNote: 'Semanal',
    instagram: INSTAGRAM_JOVEM,
    instagramHandle: '@ibcljovem',
    image: 'https://picsum.photos/seed/ibcl-jovem2/600/400',
    desc: 'O IBCL Jovem é o espaço para a juventude viver a fé de forma intensa e autêntica. Um encontro semanal cheio de adoração, Palavra e conexões que marcam. Se você é jovem e quer crescer na fé junto com outros jovens, esse é o seu lugar.',
    highlight: 'Fé intensa e autêntica',
  },
  {
    emoji: 'Home',
    emojiColor: '#0f5238',
    name: 'Grupos de Oração',
    tag: 'Casais e convidados',
    tagColor: 'bg-primary/10 text-primary',
    schedule: 'Quartas-feiras, a partir das 18h',
    scheduleNote: 'Em residências de membros',
    instagram: null,
    image: 'https://picsum.photos/seed/ibcl-gos2/600/400',
    desc: 'Os Grupos de Oração são o coração relacional da IBCL. Toda semana, casais se reúnem em casas espalhadas pela cidade para revisitar a mensagem do domingo, orar juntos e cultivar amizades reais. Convidados são sempre bem-vindos. Para encontrar o grupo mais próximo da sua casa, entre em contato com a Secretaria.',
    highlight: 'O coração relacional da IBCL',
    cta: { label: 'Quero participar → WhatsApp', href: WHATSAPP_URL_GRUPOS_ORACAO, external: true },
  },
  {
    emoji: 'Star',
    emojiColor: '#c49b0a',
    name: 'Culto Familiar',
    tag: 'Toda a família',
    tagColor: 'bg-primary/10 text-primary',
    schedule: 'Domingos às 18h',
    scheduleNote: 'Duração: ~1h30',
    instagram: null,
    image: 'https://picsum.photos/seed/ibcl-culto/600/400',
    desc: 'O culto de domingo é o nosso encontro central como família. Começamos com um momento de louvor coletivo, seguido da mensagem bíblica. As mensagens são gravadas e disponibilizadas no YouTube semanalmente após o culto.',
    highlight: 'Nosso encontro central como família',
  },
  {
    emoji: 'Bookmark',
    emojiColor: '#2D6A4F',
    name: 'Maturidade Cristã',
    tag: 'Adultos 60+',
    tagColor: 'bg-accent-yellow/20 text-on-surface',
    schedule: 'A cada 2 semanas - Sábados, 16h às 18h',
    scheduleNote: 'Na sede IBCL',
    instagram: null,
    image: 'https://picsum.photos/seed/ibcl-maturidade/600/400',
    desc: 'Um encontro especial para quem tem muito a celebrar e ainda mais a aprender. A Maturidade Cristã reúne música, comunhão, boas conversas e desafios na Palavra para quem viveu o suficiente para saber que a fé é para toda a vida.',
    highlight: 'A fé é para toda a vida',
  },
]

export default function MinisteriosPage() {
  return (
    <>
      <PageHero
        tag="Ministérios"
        title="Um lugar para cada pessoa"
        subtitle="Da infância à maturidade - cada ministério é um espaço intencional para você crescer, pertencer e se conectar."
        imageSeed="ibcl-ministerios"
      />

      <section id="cards" className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto scroll-mt-16 md:scroll-mt-20">
        <SectionHeading
          tag="Todos os ministérios"
          title="Encontre onde você se encaixa"
          subtitle="Cada ministério tem um público, um propósito e uma equipe dedicada. Explore e descubra o seu lugar."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {ministerios.map((m, i) => (
            <MotionSection key={i} delay={i * 0.08} direction="up">
              <div className="group bg-surface rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image src={m.image} alt={m.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
                      <HandDrawnIcon name={m.emoji} size={24} color={m.emojiColor} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-sans font-bold ${m.tagColor} bg-white/90 backdrop-blur-sm`}>
                      {m.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-sans font-bold text-xl text-on-surface">{m.name}</h3>
                    {m.instagram && (
                      <a
                        href={m.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 px-2.5 py-1 rounded-lg bg-secondary/10 text-secondary font-sans font-bold text-xs hover:bg-secondary/20 transition-colors"
                      >
                        {m.instagramHandle}
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary shrink-0">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span className="font-body text-sm text-on-surface-variant">
                      {m.schedule} · <span className="italic">{m.scheduleNote}</span>
                    </span>
                  </div>

                  <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">{m.desc}</p>

                  <div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-sans font-semibold text-xs text-primary bg-primary/8 px-3 py-1 rounded-full">
                      {m.highlight}
                    </span>
                    {m.cta ? (
                      <a
                        href={m.cta.href}
                        target={m.cta.external ? '_blank' : undefined}
                        rel={m.cta.external ? 'noopener noreferrer' : undefined}
                        className="font-sans font-semibold text-sm text-primary hover:underline"
                      >
                        {m.cta.label}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 bg-surface-container-high">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 text-center">
          <MotionSection direction="up">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-on-surface mb-4">
              Quer saber mais? Fale conosco.
            </h2>
            <p className="font-body text-base text-on-surface-variant mb-8 max-w-lg mx-auto">
              Nossa secretaria pode te ajudar a encontrar o ministério ideal para você e sua família.
            </p>
            <a
              href={WHATSAPP_URL_MINISTERIOS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-sans font-bold text-sm shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Falar com a secretaria
            </a>
          </MotionSection>
        </div>
      </section>
    </>
  )
}
