'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

interface PageHeroProps {
  tag?: string
  title: string
  subtitle?: string
  imageSeed?: string
}

export function PageHero({ tag, title, subtitle, imageSeed = 'hero' }: PageHeroProps) {
  return (
    <section className="relative min-h-[52vh] md:min-h-[56vh] flex items-center overflow-hidden bg-surface-container-low">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={`https://picsum.photos/seed/${imageSeed}/1400/600`}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low/60 via-surface-container-low/80 to-surface-container-low" />
      </div>

      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/8 pointer-events-none"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/8 pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-16 py-20 md:py-24">
        {tag && (
          <motion.span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans font-bold text-xs uppercase tracking-wider mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tag}
          </motion.span>
        )}
        <motion.h1
          className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-on-surface leading-tight tracking-tight max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="font-body text-base md:text-xl text-on-surface-variant leading-relaxed mt-5 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
