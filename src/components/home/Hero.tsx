'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { WHATSAPP_URL } from '@/lib/constants'

const WORDS = ['Bem-vindo', 'à', 'IBCL']

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })
  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(smoothProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(smoothProgress, [0, 0.6], [1, 0])

  return (
    <section id="hero" ref={containerRef} className="relative min-h-[92svh] md:min-h-[88vh] flex items-center overflow-hidden bg-surface scroll-mt-16 md:scroll-mt-20">
      {/* Animated background blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <motion.div
          className="absolute -top-24 -right-24 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-primary/6"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 -left-20 w-48 h-48 md:w-80 md:h-80 rounded-full bg-accent-teal/8"
          animate={{ scale: [1, 1.12, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-32 h-32 md:w-56 md:h-56 rounded-full bg-secondary-container/40"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text column */}
          <motion.div className="lg:col-span-6 xl:col-span-5" style={{ y: textY, opacity }}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container mb-6"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-sans font-bold text-xs uppercase tracking-wider">
                Culto todos os domingos às 18h
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight text-on-background mb-6">
              {WORDS.map((word, wi) => (
                <motion.span
                  key={wi}
                  className={`inline-block mr-3 ${word === 'IBCL' ? 'text-primary' : ''}`}
                  initial={{ opacity: 0, y: 40, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.3 + wi * 0.13,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed max-w-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Somos uma igreja que acredita que a vida é melhor em comunidade. Um lugar onde
              você é esperado, acolhido e desafiado a crescer.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href="/primeira-visita">
                <motion.span
                  className="flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3.5 rounded-xl font-sans font-semibold text-sm shadow-lg cursor-pointer w-full sm:w-auto"
                  whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(15,82,56,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Planeje sua Visita
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </Link>
              <Link href="/ministerios">
                <motion.span
                  className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 rounded-xl font-sans font-semibold text-sm cursor-pointer w-full sm:w-auto"
                  whileHover={{ y: -3, backgroundColor: 'rgba(15,82,56,0.06)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  Conheça os Ministérios
                </motion.span>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex items-center gap-6 mt-10 pt-8 border-t border-outline-variant/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {[
                { value: '25+', label: 'Anos de história' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                >
                  <p className="font-sans font-bold text-xl text-primary">{stat.value}</p>
                  <p className="font-body text-xs text-on-surface-variant leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image mosaic column */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Main large image */}
              <motion.div
                className="col-span-2 sm:col-span-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://picsum.photos/seed/ibcl-worship/600/450"
                  alt="Culto IBCL"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </motion.div>

              {/* Stat card */}
              <motion.div
                className="hidden sm:flex flex-col justify-end p-6 rounded-2xl bg-primary text-on-primary shadow-xl"
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="text-4xl mb-4"
                >
                  🤝
                </motion.div>
                <p className="font-sans font-bold text-2xl">Uma família</p>
                <p className="font-body text-sm text-on-primary/75 mt-1 leading-snug">
                  que caminha junto na Palavra
                </p>
              </motion.div>

              {/* Second image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-video shadow-xl"
                initial={{ opacity: 0, y: 30, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="https://picsum.photos/seed/ibcl-community/600/400"
                  alt="Comunidade IBCL"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* CTA card */}
              <motion.div
                className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col justify-between shadow-sm"
                initial={{ opacity: 0, y: 30, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-accent-coral/15 flex items-center justify-center mb-3">
                    <span className="text-lg">❤️</span>
                  </div>
                  <p className="font-sans font-bold text-base text-on-surface leading-snug">
                    Acolhimento sem julgamento
                  </p>
                  <p className="font-body text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                    Você não precisa estar com tudo resolvido para vir.
                  </p>
                </div>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-sans font-semibold text-primary flex items-center gap-1"
                  whileHover={{ x: 4 }}
                >
                  Fale conosco →
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-sans font-semibold text-xs text-on-surface-variant/50 uppercase tracking-widest">
          Role para baixo
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-outline-variant/40 flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
