'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { HandDrawnIcon, type HandDrawnIconName } from '@/components/ui/HandDrawnIcon'

const ministries = [
  {
    name: 'IBCL Kids',
    tag: 'Crianças 3–11 anos',
    tagColor: 'bg-accent-teal/15 text-accent-teal',
    desc: 'A Palavra também é para as crianças. Ensinamos a Bíblia de forma lúdica e criativa, com dinâmicas e atividades para cada faixa etária.',
    image: '/assets/ibcl-kids.png',
    schedule: 'Dom. 18h',
    href: '/ministerios',
    emoji: 'Star' as HandDrawnIconName,
    emojiColor: '#2D6A4F',
  },
  {
    name: 'IBCL Teens',
    tag: 'Adolescentes 12–14',
    tagColor: 'bg-accent-coral/15 text-accent-coral',
    desc: 'Dinâmicas, eventos especiais e ensinamentos pensados para a adolescência. Diversão com propósito.',
    image: '/assets/ibcl-teens.jpeg',
    schedule: 'Sáb. 16h–18h',
    href: '/ministerios',
    emoji: 'Signal' as HandDrawnIconName,
    emojiColor: '#E2725B',
  },
  {
    name: 'IBCL Jovem',
    tag: 'Jovens 15+',
    tagColor: 'bg-secondary/15 text-secondary',
    desc: 'O espaço para a juventude viver a fé de forma intensa e autêntica. Adoração, Palavra e conexões que marcam.',
    image: '/assets/ibcl-jovem.png',
    schedule: 'Sáb. 18h–20h',
    href: '/ministerios',
    emoji: 'Signals' as HandDrawnIconName,
    emojiColor: '#713638',
  },
  {
    name: 'Grupos de Oração',
    tag: 'Toda a família',
    tagColor: 'bg-primary/10 text-primary',
    desc: 'O coração relacional da IBCL. Toda quarta-feira, casais se reúnem em casas pela cidade para comunhão e oração.',
    image: '/assets/go.jpeg',
    schedule: 'Qua. 18h',
    href: '/grupos-de-oracao',
    emoji: 'Home' as HandDrawnIconName,
    emojiColor: '#0f5238',
  },
]

function MinistryCard({ m, index }: { m: (typeof ministries)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <motion.div
      ref={ref}
      className="group bg-surface rounded-2xl overflow-hidden border border-outline-variant/15 shadow-sm flex flex-col"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,0,0,0.10)' }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={m.image} alt={m.name} fill className="object-cover" />
        </motion.div>

        {/* Icon overlay */}
        <div className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm">
          <HandDrawnIcon name={m.emoji} size={20} color={m.emojiColor} />
        </div>

        {/* Schedule chip */}
        <div className="absolute bottom-3 left-3 px-3 py-1 bg-inverse-surface/85 backdrop-blur-sm rounded-full">
          <span className="font-sans font-bold text-xs text-inverse-on-surface">{m.schedule}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className={`inline-flex self-start px-2.5 py-1 rounded-full text-xs font-sans font-bold mb-3 ${m.tagColor}`}>
          {m.tag}
        </span>
        <h3 className="font-sans font-bold text-lg text-on-surface mb-2">{m.name}</h3>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">{m.desc}</p>
        <Link href={m.href}>
          <motion.span
            className="mt-4 inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-primary cursor-pointer"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            Saiba mais
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}

export function MinistriesPreview() {
  return (
    <section id="ministerios" className="py-20 md:py-28 bg-surface-container-low scroll-mt-16 md:scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div className="max-w-lg">
            <SectionHeading
              tag="Ministérios"
              title="Tem um lugar para cada fase da sua vida"
              subtitle="Da infância à maturidade, cada ministério é pensado para que você e sua família se sintam pertencentes."
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="shrink-0 mb-10 md:mb-14"
          >
            <Link href="/ministerios">
              <motion.span
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-primary cursor-pointer"
                whileHover={{ x: 4 }}
              >
                Ver todos os ministérios
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {ministries.map((m, i) => (
            <MinistryCard key={i} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
