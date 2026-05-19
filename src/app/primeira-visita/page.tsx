import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { MotionSection } from '@/components/ui/MotionSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQSection } from '@/components/primeira-visita/FAQSection'
import { WHATSAPP_URL, CHURCH_MAPS_URL, CHURCH_MAPS_EMBED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Primeira Visita',
  description:
    'Vai visitar a IBCL pela primeira vez? Saiba tudo: culto aos domingos às 18h na Av. Cosme Ferreira, 2690, Aleixo, Manaus. Estacionamento, kids e o que esperar.',
  keywords: [
    'primeira visita IBCL', 'visitar Igreja Batista Manaus', 'culto domingo Manaus 18h',
    'IBCL primeira vez', 'como é o culto IBCL', 'church visitor Manaus',
  ],
  alternates: { canonical: '/primeira-visita' },
  openGraph: {
    title: 'Primeira Visita | IBCL Manaus',
    description:
      'Cultos aos domingos às 18h. Saiba tudo sobre estacionamento, kids e o que esperar na sua primeira visita à IBCL.',
    type: 'website',
    url: '/primeira-visita',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Primeira Visita à IBCL Manaus' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primeira Visita | IBCL Manaus',
    description: 'Domingos às 18h — saiba tudo antes de visitar a IBCL pela primeira vez.',
    images: ['/opengraph-image'],
  },
}

const nextSteps = [
  {
    n: '1',
    title: 'Participe de um Grupo de Oração',
    desc: 'É a forma mais rápida de entrar na comunidade e conhecer pessoas. Fale com a secretaria para encontrar o grupo mais perto de você.',
    cta: 'Chamar no WhatsApp',
    href: WHATSAPP_URL,
    external: true,
  },
  {
    n: '2',
    title: 'Conheça o curso "Um com Deus"',
    desc: 'Um percurso especial nos domingos às 17h para quem quer entender os fundamentos da caminhada cristã. Inscrição pela secretaria.',
    cta: 'Inscrever-se',
    href: WHATSAPP_URL,
    external: true,
  },
  {
    n: '3',
    title: 'Explore os ministérios',
    desc: 'Tem algo para cada membro da sua família. Conheça os ministérios e encontre onde você se encaixa.',
    cta: 'Ver ministérios',
    href: '/ministerios',
    external: false,
  },
]

export default function PrimeiraVisitaPage() {
  return (
    <>
      <PageHero
        tag="Primeira Visita"
        title="Conta pra gente o que você precisa saber."
        subtitle="Sabemos que visitar uma nova igreja pode gerar dúvidas. Estamos aqui para tornar tudo mais fácil."
        imageSeed="ibcl-visit"
      />

      {/* Main info grid */}
      <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Info cards */}
          <div className="space-y-5">
            {[
              {
                icon: '🕖',
                title: 'Horário do Culto',
                content: 'Domingos às 18h. O culto tem duração de aproximadamente 1h30, encerrando por volta das 20h30.',
              },
              {
                icon: '📍',
                title: 'Como chegar',
                content: 'Av. Cosme Ferreira, 2690, Aleixo, Manaus/AM.\nReferência: próximo ao DB Supermercados.',
                link: { label: 'Abrir no Google Maps', href: CHURCH_MAPS_URL },
              },
              {
                icon: '👔',
                title: 'O que vestir',
                content: 'Venha como se sentir confortável. Não existe código de vestimenta na IBCL. Pedimos apenas que o traje seja discreto e compatível com o ambiente familiar da igreja.',
              },
              {
                icon: '🚗',
                title: 'Estacionamento',
                content: 'Há vagas disponíveis dentro e ao lado da igreja. Nossa equipe de estacionamento está presente para orientar você no melhor lugar para parar.',
              },
              {
                icon: '📋',
                title: 'Preciso me inscrever?',
                content: 'Não. Basta chegar e participar. Você é bem-vindo sem aviso prévio, sem cadastro e sem compromisso.',
              },
              {
                icon: '👶',
                title: 'E os filhos?',
                content: 'O IBCL Baby (0–2 anos) e o IBCL Kids (3–11 anos) acontecem simultaneamente ao culto com programações específicas. Em caso de necessidade, seu nome aparecerá no telão.',
              },
            ].map((item, i) => (
              <MotionSection key={i} delay={i * 0.08} direction="left">
                <div className="bg-surface rounded-2xl p-5 md:p-6 border border-outline-variant/15 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base text-on-surface mb-1.5">{item.title}</h3>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">{item.content}</p>
                      {item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 font-sans font-semibold text-sm text-primary hover:underline"
                        >
                          {item.link.label} →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>

          {/* Map + What to expect */}
          <div className="space-y-6">
            <MotionSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-outline-variant/15 aspect-[4/3]">
                <iframe
                  src={CHURCH_MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da IBCL"
                />
              </div>
            </MotionSection>

            <MotionSection direction="right" delay={0.15}>
              <div className="bg-primary rounded-2xl p-6 md:p-8 text-on-primary">
                <h3 className="font-sans font-bold text-xl mb-2">O que esperar às 18h</h3>
                <p className="font-body text-sm text-on-primary/75 mb-5 leading-relaxed">
                  O culto começa com um momento de louvor - não apenas uma abertura, mas parte essencial do encontro. Em seguida, a mensagem bíblica do pastor.
                </p>
                <ul className="space-y-3">
                  {[
                    'Ambiente acolhedor e familiar',
                    'Louvor coletivo com participação de todos',
                    'Mensagem bíblica aplicada ao cotidiano',
                    'Baby e Kids acontecem simultaneamente',
                    'Equipe de recepção para te receber',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-on-primary-container">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-sm text-on-primary/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <SectionHeading
            tag="Próximos passos"
            title="Visitou? Ótimo. E agora?"
            subtitle="Que bom ter você conosco! Aqui estão algumas formas de aprofundar sua conexão com a IBCL."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {nextSteps.map((step, i) => (
              <MotionSection key={i} delay={i * 0.12} direction="up">
                <div className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/15 shadow-sm h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary font-sans font-bold text-lg flex items-center justify-center mb-5">
                    {step.n}
                  </div>
                  <h3 className="font-sans font-bold text-lg text-on-surface mb-3">{step.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">{step.desc}</p>
                  <a
                    href={step.href}
                    target={step.external ? '_blank' : undefined}
                    rel={step.external ? 'noopener noreferrer' : undefined}
                    className="mt-5 inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-primary hover:underline"
                  >
                    {step.cta} →
                  </a>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
