'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'

const expects = [
  { icon: '😊', text: 'Ambiente acolhedor e familiar — venha como se sentir confortável' },
  { icon: '🎵', text: 'Louvor que abre o coração, seguido de mensagem bíblica' },
  { icon: '👶', text: 'Baby (0–2) e Kids (3–11) acontecem simultaneamente' },
  { icon: '🚗', text: 'Estacionamento disponível com equipe para orientar você' },
]

export function FirstVisitCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section className="py-20 md:py-28 bg-primary-container relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-on-primary-container/10 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-10 right-10 w-48 h-48 rounded-full bg-on-primary-container/8 pointer-events-none"
        animate={{ scale: [1, 1.3, 1], x: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-primary/20 pointer-events-none"
        animate={{ scale: [1, 1.4, 1], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: CTA content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary font-sans font-bold text-xs uppercase tracking-wider mb-5">
              Primeira Visita
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-on-surface leading-tight tracking-tight mb-6">
              Pensando em nos visitar?
              <span className="block text-primary">A porta está aberta.</span>
            </h2>
            <p className="font-body text-base md:text-lg text-white leading-relaxed mb-8 max-w-md">
              Não precisa de inscrição, convite ou aviso prévio. Basta chegar aos domingos às 18h.
              Nossa equipe de recepção estará esperando por você.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/primeira-visita">
                <motion.span
                  className="flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3.5 rounded-xl font-sans font-bold text-sm shadow-lg cursor-pointer w-full sm:w-auto"
                  whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(15,82,56,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  O que esperar
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </Link>
              <a
                href="https://www.google.com/maps?daddr=Av.+Cosme+Ferreira+-+Coroado,+Manaus+-+AM,+69083-000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.span
                  className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 rounded-xl font-sans font-bold text-sm cursor-pointer w-full sm:w-auto"
                  whileHover={{ backgroundColor: 'rgba(15,82,56,0.06)', y: -3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Como chegar
                </motion.span>
              </a>
            </div>
          </motion.div>

          {/* Right: What to expect card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl border border-outline-variant/10">
              <h3 className="font-sans font-bold text-xl text-on-surface mb-6">O que esperar</h3>
              <ul className="space-y-5">
                {expects.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/8 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed pt-1.5">
                      {item.text}
                    </p>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-outline-variant/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary text-lg font-bold shrink-0">
                  🙋
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-on-surface">Alguma dúvida?</p>
                  <a
                    href="https://wa.me/5592992082294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-primary hover:underline"
                  >
                    Fale com a secretaria pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
