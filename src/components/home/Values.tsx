'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const values = [
  {
    icon: '📖',
    title: 'A Bíblia como fundamento',
    desc: 'A Palavra de Deus é nossa maior e única fonte de verdade. Não seguimos tendências, seguimos a Palavra de Deus.',
    accent: 'bg-accent-teal/10 border-accent-teal/30',
    iconBg: 'bg-accent-teal/15',
    span: 'lg:col-span-2',
  },
  {
    icon: '🤝',
    title: 'Comunidade de verdade',
    desc: 'Na IBCL, você encontra pessoas reais que se importam de verdade, nos momentos de alegria e nas dificuldades.',
    accent: 'bg-accent-coral/8 border-accent-coral/25',
    iconBg: 'bg-accent-coral/15',
    span: 'lg:col-span-1',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Família em Cristo',
    desc: 'A igreja não é um evento semanal. É uma família. Aqui, relações genuínas são formadas e sustentadas ao longo do tempo.',
    accent: 'bg-secondary-container/60 border-secondary/20',
    iconBg: 'bg-secondary/15',
    span: 'lg:col-span-1',
  },
  {
    icon: '🌱',
    title: 'Crescimento intencional',
    desc: 'Crescer na fé exige intenção. Oferecemos espaços para todas as idades, da infância à maturidade.',
    accent: 'bg-primary/5 border-primary/15',
    iconBg: 'bg-primary/10',
    span: 'lg:col-span-1',
  },
  {
    icon: '❤️',
    title: 'Acolhimento sem julgamento',
    desc: 'Você não precisa estar com tudo resolvido para vir. A IBCL é um espaço seguro para quem quer recomeçar, tem dúvidas ou quer começar a caminhar na fé.',
    accent: 'bg-tertiary/5 border-tertiary/15',
    iconBg: 'bg-tertiary/10',
    span: 'lg:col-span-2',
  },
  {
    icon: '🙏',
    title: 'Adoração que transforma',
    desc: 'O louvor e a pregação são encontros com Deus. Valorizamos profundamente o momento de adoração coletiva.',
    accent: 'bg-accent-yellow/15 border-accent-yellow/30',
    iconBg: 'bg-accent-yellow/20',
    span: 'lg:col-span-1',
  },
]

function ValueCard({ item, index }: { item: (typeof values)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={`relative group p-6 md:p-8 rounded-2xl border ${item.accent} ${item.span} transition-shadow duration-300`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
    >
      {/* Hover shimmer */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"
        initial={false}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center text-2xl mb-5`}>
        <motion.span
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        >
          {item.icon}
        </motion.span>
      </div>
      <h3 className="font-sans font-bold text-lg md:text-xl text-on-surface mb-3 leading-snug">
        {item.title}
      </h3>
      <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  )
}

export function Values() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto">
      <SectionHeading
        tag="Quem Somos"
        title="O que nos move como igreja"
        subtitle="Seis valores que definem como vivemos a fé juntos. Convicções que moldam cada parte da IBCL."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {values.map((item, i) => (
          <ValueCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
