'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { MotionSection } from '@/components/ui/MotionSection'

const values = [
  { icon: '📖', title: 'A Bíblia como fundamento', desc: 'Não seguimos tendências, seguimos a Palavra de Deus.' },
  { icon: '🤝', title: 'Comunidade de verdade', desc: 'Pessoas reais que se importam de verdade.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Família em Cristo', desc: 'Relações genuínas formadas e sustentadas.' },
  { icon: '🌱', title: 'Crescimento intencional', desc: 'Espaços para todas as idades e fases da vida.' },
  { icon: '❤️', title: 'Acolhimento sem julgamento', desc: 'Um espaço seguro para quem quer recomeçar.' },
  { icon: '🙏', title: 'Adoração que transforma', desc: 'Encontro com Deus como parte central da nossa vida.' },
]

export function ValuesSection() {
  return (
    <section className="py-20 md:py-24 bg-primary">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        <SectionHeading
          tag="Nossos Valores"
          title="O que nos define como igreja"
          subtitle="Não são apenas palavras. São os pilares que sustentam cada decisão, cada ministério e cada relacionamento dentro da IBCL."
          align="center"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-12">
          {values.map((v, i) => (
            <MotionSection key={i} delay={i * 0.1} direction="up">
              <div className="bg-on-primary/10 backdrop-blur-sm border border-on-primary/10 rounded-2xl p-6 md:p-7 hover:bg-on-primary/15 transition-colors">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-sans font-bold text-lg text-on-primary mb-2">{v.title}</h3>
                <p className="font-body text-sm text-on-primary/70 leading-relaxed">{v.desc}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  )
}
