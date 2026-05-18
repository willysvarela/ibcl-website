import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MotionSection } from '@/components/ui/MotionSection'
import { GOForm } from '@/components/grupos-de-oracao/GOForm'
import { WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Grupos de Oração',
  description: 'Os Grupos de Oração são o coração relacional da IBCL. Encontre um grupo perto de você e participe toda quarta-feira.',
}

const pillars = [
  { icon: '📖', title: 'Revisão da mensagem', desc: 'Cada GO revisita a mensagem do domingo, aprofundando o que foi pregado e aplicando ao dia a dia.' },
  { icon: '🙏', title: 'Oração conjunta', desc: 'Oramos juntos pelas necessidades dos membros, da igreja e da cidade. A oração é o coração de cada encontro.' },
  { icon: '🤝', title: 'Amizades reais', desc: 'Nas casas, a intimidade acontece de verdade. GOs são onde amizades profundas são construídas.' },
  { icon: '🏠', title: 'Em casa, no seu bairro', desc: 'Os grupos acontecem em residências espalhadas por Manaus — basta falar com a secretaria para saber o mais próximo.' },
]

export default function GruposDeOracaoPage() {
  return (
    <>
      <PageHero
        tag="Grupos de Oração"
        title="A fé que acontece fora dos muros da igreja"
        subtitle="Toda quarta-feira, casais em Manaus se reúnem para comunhão, Palavra e oração."
        imageSeed="ibcl-gos-hero"
      />

      {/* What are GOs */}
      <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <MotionSection direction="left">
            <span className="inline-block font-sans font-bold text-xs uppercase tracking-widest text-primary/70 mb-3">
              O coração relacional da IBCL
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-on-surface leading-tight tracking-tight mb-6">
              O que são os Grupos de Oração?
            </h2>
            <div className="space-y-4 font-body text-base text-on-surface-variant leading-relaxed">
              <p>
                Os Grupos de Oração (GOs) são pequenos grupos que se reúnem semanalmente em residências de membros,
                espalhados pelos bairros de Manaus. São o espaço relacional mais importante da IBCL.
              </p>
              <p>
                Acreditamos que a vida cristã não acontece apenas no culto de domingo — ela se aprofunda nas
                conversas sinceras, nas orações compartilhadas e nas amizades construídas ao longo do tempo.
              </p>
              <p>
                Os GOs são abertos a casais e convidados. Você não precisa ser membro da IBCL para participar.
                Basta entrar em contato com a secretaria, informar seu bairro, e nós indicaremos o grupo mais
                próximo de você.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 p-4 bg-primary/6 rounded-xl border border-primary/15">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary shrink-0">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <div>
                <p className="font-sans font-semibold text-sm text-on-surface">Toda quarta-feira</p>
                <p className="font-body text-sm text-on-surface-variant">A partir das 18h · Endereços via secretaria</p>
              </div>
            </div>
          </MotionSection>

          <MotionSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div key={i} className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/15">
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <h3 className="font-sans font-bold text-sm text-on-surface mb-2">{p.title}</h3>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-12 bg-surface-container">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <MotionSection direction="up">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 bg-accent-yellow/20 rounded-2xl border border-accent-yellow/30">
              <span className="text-2xl shrink-0">🔒</span>
              <div>
                <h3 className="font-sans font-bold text-base text-on-surface mb-1">Privacidade dos endereços</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Os endereços dos Grupos de Oração não são divulgados publicamente para preservar a privacidade
                  dos anfitriões. Para participar, entre em contato com a secretaria e informe seu bairro.
                  Indicaremos o grupo mais próximo de você.
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <MotionSection direction="left">
            <SectionHeading
              tag="Participar"
              title="Quero participar de um GO"
              subtitle="Preencha o formulário e a secretaria entrará em contato para indicar o grupo mais próximo de você."
            />
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-outline-variant/15">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.23 1.18 2 2 0 012.23-.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.91v2z"/>
                </svg>
                <div>
                  <p className="font-sans font-semibold text-sm text-on-surface">WhatsApp da secretaria</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary hover:underline">
                    (92) 99208-2294
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface rounded-xl border border-outline-variant/15">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary shrink-0">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                  <p className="font-sans font-semibold text-sm text-on-surface">Atendimento</p>
                  <p className="font-body text-sm text-on-surface-variant">Segunda a sexta, das 9h às 17h</p>
                </div>
              </div>
            </div>
          </MotionSection>

          <MotionSection direction="right">
            <GOForm />
          </MotionSection>
        </div>
      </section>
    </>
  )
}
