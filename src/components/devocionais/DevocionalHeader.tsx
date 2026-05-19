'use client'

import { motion } from 'motion/react'

interface DevocionalHeaderProps {
  title: string
  date: string
  dateTime: string
  readingTime: number
}

export function DevocionalHeader({ title, date, dateTime, readingTime }: DevocionalHeaderProps) {
  return (
    <header>
      <motion.div
        className="flex items-center gap-2.5 font-sans text-sm text-on-surface-variant mb-5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
          Devocional
        </span>
        <span className="w-1 h-1 rounded-full bg-outline-variant" aria-hidden />
        <time dateTime={dateTime}>{date}</time>
        <span className="w-1 h-1 rounded-full bg-outline-variant" aria-hidden />
        <span>{readingTime} min de leitura</span>
      </motion.div>

      <motion.h1
        className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-on-surface leading-tight tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h1>
    </header>
  )
}
