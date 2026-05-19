'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import { type YouTubeVideo, formatDate } from '@/lib/youtube'
import { YOUTUBE_URL } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Props {
  videos: YouTubeVideo[]
}

function VideoCard({ v, index, featured }: { v: YouTubeVideo; index: number; featured?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })

  if (featured) {
    return (
      <motion.a
        ref={ref}
        href={v.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-5">
          <motion.div className="absolute inset-0" whileHover={{ scale: 1.03 }} transition={{ duration: 0.5 }}>
            <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          {/* Play button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Latest badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary rounded-full">
            <span className="font-sans font-bold text-xs text-on-primary uppercase tracking-wider">
              Última mensagem
            </span>
          </div>
        </div>

        <h3 className="font-sans font-bold text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors leading-snug">
          {v.title}
        </h3>
        <p className="font-body text-sm text-on-surface-variant mt-2">{formatDate(v.publishedAt)}</p>
      </motion.a>
    )
  }

  return (
    <motion.a
      ref={ref}
      href={v.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-3 items-start"
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="relative w-28 md:w-32 aspect-video rounded-xl overflow-hidden shrink-0 shadow-sm">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }}>
          <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-sans font-semibold text-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
          {v.title}
        </h4>
        <p className="font-body text-xs text-on-surface-variant mt-1">{formatDate(v.publishedAt)}</p>
      </div>
    </motion.a>
  )
}

export function MessagesPreview({ videos }: Props) {
  const [latest, ...rest] = videos

  return (
    <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
        <SectionHeading
          tag="Mensagens"
          title="Mensagens"
          subtitle="Ouça quando e onde quiser. Toda semana, uma nova mensagem disponível no YouTube."
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="shrink-0 mb-10 md:mb-14"
        >
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-primary cursor-pointer"
              whileHover={{ x: 4 }}
            >
              Ver canal no YouTube →
            </motion.span>
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Featured video */}
        <div className="lg:col-span-7">
          {latest && <VideoCard v={latest} index={0} featured />}
        </div>

        {/* Recent list */}
        <div className="lg:col-span-5">
          <h3 className="font-sans font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-6">
            Mensagens recentes
          </h3>
          <div className="space-y-5">
            {rest.slice(0, 5).map((v, i) => (
              <VideoCard key={v.id} v={v} index={i} />
            ))}
          </div>

          <motion.div
            className="mt-8 pt-6 border-t border-outline-variant/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/mensagens">
              <motion.span
                className="flex items-center justify-center gap-2 bg-primary/8 text-primary px-5 py-3 rounded-xl font-sans font-bold text-sm cursor-pointer w-full border border-primary/15"
                whileHover={{ backgroundColor: 'rgba(15,82,56,0.14)', y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Ver arquivo completo de mensagens
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
