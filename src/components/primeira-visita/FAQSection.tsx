'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const faqs = [
  {
    q: 'Preciso ser batizado para participar da IBCL?',
    a: 'Não. A IBCL é aberta a qualquer pessoa, independente da sua história ou caminhada espiritual. Você pode participar dos cultos, eventos e grupos antes de qualquer decisão.',
  },
  {
    q: 'As crianças podem participar do culto com os pais?',
    a: 'Sim, mas oferecemos o IBCL Baby e o IBCL Kids como alternativas. Ambos acontecem no mesmo horário do culto com programações especiais para cada faixa etária.',
  },
  {
    q: 'Quanto tempo dura o culto?',
    a: 'Em média 1h30. O culto começa às 18h e termina por volta das 19h30.',
  },
  {
    q: 'O que vestir para os cultos?',
    a: 'Venha como se sentir confortável. Não há dress code. Pedimos apenas discrição e respeito ao ambiente familiar da igreja.',
  },
  {
    q: 'Tem estacionamento?',
    a: 'Sim. Há vagas dentro e ao lado da igreja. Nossa equipe de estacionamento estará disponível para ajudar.',
  },
  {
    q: 'Como saber se meu filho está bem durante o culto?',
    a: 'Temos equipes treinadas nos ministérios de crianças. Em caso de necessidade, uma mensagem discreta com o seu nome aparecerá no telão da igreja.',
  },
  {
    q: 'Posso ir sozinho ou preciso de alguém me apresentando?',
    a: 'Pode vir sozinho. Não precisa de convite, apresentação ou aviso prévio. Basta chegar.',
  },
  {
    q: 'Posso assistir às mensagens online?',
    a: 'Sim. As pregações são gravadas e publicadas no YouTube semanalmente após os cultos.',
  },
  {
    q: 'Como participar de um Grupo de Oração?',
    a: 'Entre em contato com a Secretaria pelo WhatsApp e informe o seu bairro. Indicaremos o grupo mais próximo de você.',
  },
  {
    q: 'Como falar com a secretaria da igreja?',
    a: 'WhatsApp: (92) 99208-2294. O atendimento acontece de segunda a sexta, das 9h às 17h.',
  },
]

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-outline-variant/25 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-sans font-semibold text-base text-on-surface">{item.q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-on-surface-variant leading-relaxed pb-5 max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto">
      <SectionHeading
        tag="FAQ"
        title="Perguntas frequentes"
        subtitle="Ainda tem dúvidas? Veja as respostas para as perguntas mais comuns."
        align="center"
      />
      <div className="max-w-3xl mx-auto mt-10 bg-surface rounded-2xl px-6 md:px-10 border border-outline-variant/15 shadow-sm">
        {faqs.map((faq, i) => (
          <FAQItem key={i} item={faq} index={i} />
        ))}
      </div>
    </section>
  )
}
