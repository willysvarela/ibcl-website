'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { CHURCH_ADDRESS_SHORT, CULTO_HORARIO, CHURCH_MAPS_URL } from '@/lib/constants'

const items = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'LOCALIZAÇÃO',
    value: CHURCH_ADDRESS_SHORT,
    href: CHURCH_MAPS_URL,
    external: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'CULTO',
    value: CULTO_HORARIO,
    sub: 'Duração: ~1h30',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    label: 'CRIANÇAS',
    value: 'Baby (0–2) e Kids (3–11)',
    sub: 'Simultâneo ao culto',
  },
]

export function InfoBar() {
  return (
    <section className="bg-primary py-5 md:py-0 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 md:h-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 w-full md:w-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              {i > 0 && (
                <div className="hidden md:block w-px h-8 bg-white/20 mx-4" />
              )}
              <div className="text-on-primary/70 shrink-0">{item.icon}</div>
              <div>
                <p className="font-sans font-bold text-[10px] uppercase tracking-widest text-on-primary/60">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="font-body font-semibold text-sm text-on-primary hover:text-on-primary/80 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-body font-semibold text-sm text-on-primary">{item.value}</p>
                )}
                {item.sub && (
                  <p className="font-body text-xs text-on-primary/60">{item.sub}</p>
                )}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-auto md:ml-4"
          >
            <Link href="/primeira-visita">
              <motion.span
                className="flex items-center justify-center gap-2 bg-on-primary text-primary px-5 py-2.5 rounded-lg font-sans font-bold text-sm whitespace-nowrap cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Planeje sua Visita →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
