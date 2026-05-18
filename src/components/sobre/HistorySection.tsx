'use client'

import { MotionSection } from '@/components/ui/MotionSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Image from 'next/image'

const timeline = [
  {
    year: '1999',
    title: 'Uma semente plantada',
    desc: 'O Pastor Moisés Pinto Souza reuniu um pequeno grupo de pessoas no Bairro Ouro Verde com uma visão clara: construir algo além de uma reunião semanal — uma família.',
    image: 'https://picsum.photos/seed/ibcl-1999/600/400',
    side: 'right',
  },
  {
    year: '2000s',
    title: 'Crescimento e novo lar',
    desc: 'Com a comunidade crescendo, a IBCL se mudou para a Av. Cosme Ferreira, 2690, no Aleixo. Mais espaço para mais famílias, e o desenvolvimento dos primeiros ministérios.',
    image: 'https://picsum.photos/seed/ibcl-2000/600/400',
    side: 'left',
  },
  {
    year: '2010s',
    title: 'Multiplicação dos ministérios',
    desc: 'Surgem o IBCL Kids, IBCL Teens e IBCL Jovem. Os Grupos de Oração se multiplicam pelos bairros de Manaus, levando a comunidade além dos muros da sede.',
    image: 'https://picsum.photos/seed/ibcl-2010/600/400',
    side: 'right',
  },
  {
    year: 'Hoje',
    title: 'Uma nova geração de liderança',
    desc: 'Sob a liderança do Pastor Leandro Souza, a IBCL aprofunda seu compromisso com a comunidade, o discipulado e a missão de ser, de fato, muito mais que amigos.',
    image: 'https://picsum.photos/seed/ibcl-hoje/600/400',
    side: 'left',
  },
]

export function HistorySection() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto">
      <SectionHeading
        tag="Nossa História"
        title="25 anos de fé e comunidade"
        subtitle="Uma história de pessoas comuns com uma fé extraordinária, construindo juntos algo que vai além de uma igreja."
        align="center"
      />

      {/* Timeline */}
      <div className="relative mt-16">
        {/* Center line — hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/40 -translate-x-1/2" />

        <div className="space-y-16 md:space-y-24">
          {timeline.map((item, i) => (
            <MotionSection key={i} direction={item.side === 'right' ? 'left' : 'right'} delay={0.1}>
              <div className={`flex flex-col ${item.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0 items-center`}>
                {/* Content side */}
                <div className="flex-1 md:px-10">
                  <div className={`max-w-md ${item.side === 'left' ? 'md:ml-auto' : ''}`}>
                    <span className="inline-block font-sans font-bold text-3xl text-primary mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-sans font-bold text-xl md:text-2xl text-on-surface mb-3">
                      {item.title}
                    </h3>
                    <p className="font-body text-base text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div className="hidden md:flex w-5 h-5 rounded-full bg-primary border-4 border-surface shadow-md shrink-0 z-10" />

                {/* Image side */}
                <div className="flex-1 md:px-10 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>

      {/* Leadership card */}
      <MotionSection delay={0.2} className="mt-20">
        <div className="bg-surface-container rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start border border-outline-variant/15">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 bg-surface-container-high">
            <Image
              src="https://picsum.photos/seed/pastor-leandro/200/200"
              alt="Pastor Leandro Souza"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block font-sans font-bold text-xs uppercase tracking-widest text-primary/70 mb-2">
              Liderança pastoral
            </span>
            <h3 className="font-sans font-bold text-2xl text-on-surface mb-1">Pastor Leandro Souza</h3>
            <p className="font-body text-sm text-on-surface-variant mb-4">
              Pastor presidente da IBCL
            </p>
            <p className="font-body text-base text-on-surface-variant leading-relaxed max-w-xl">
              Leandro Souza dá continuidade à visão fundadora com um olhar voltado para o futuro.
              Sob sua liderança, a IBCL aprofunda seu compromisso com a comunidade e com o discipulado,
              sendo para cada pessoa muito mais que uma religião — uma família.
            </p>
          </div>
        </div>
      </MotionSection>
    </section>
  )
}
