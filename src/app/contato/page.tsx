import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { MotionSection } from '@/components/ui/MotionSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/contato/ContactForm'
import {
  CHURCH_ADDRESS,
  CHURCH_MAPS_URL,
  CHURCH_MAPS_EMBED,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  INSTAGRAM_IBCL,
  YOUTUBE_URL,
  CULTO_HORARIO,
  SECRETARIA_HORARIO,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a IBCL em Manaus. WhatsApp, Instagram, endereço e formulário. Secretaria: segunda a sexta das 9h às 17h na Av. Cosme Ferreira, 2690, Aleixo.',
  keywords: [
    'contato IBCL', 'endereço Igreja Batista Central Leste', 'WhatsApp IBCL Manaus',
    'secretaria IBCL', 'Av Cosme Ferreira 2690 Manaus',
  ],
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato | IBCL Manaus',
    description:
      'Fale com a IBCL via WhatsApp, Instagram ou pelo formulário. Av. Cosme Ferreira, 2690, Aleixo, Manaus/AM.',
    type: 'website',
    url: '/contato',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contato IBCL - Igreja Batista Central Leste' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato | IBCL Manaus',
    description: 'WhatsApp, Instagram ou formulário. Av. Cosme Ferreira, 2690, Aleixo, Manaus/AM.',
    images: ['/opengraph-image'],
  },
}

const contactItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.23 1.18 2 2 0 012.23-.01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.91v2z"/>
      </svg>
    ),
    label: 'WhatsApp / Secretaria',
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
    note: SECRETARIA_HORARIO,
    external: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Endereço',
    value: CHURCH_ADDRESS,
    href: CHURCH_MAPS_URL,
    note: 'Referência: próximo ao DB Supermercados',
    external: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Culto',
    value: CULTO_HORARIO,
    note: 'Duração: ~1h30',
  },
]

const socialLinks = [
  {
    label: 'Instagram IBCL',
    handle: '@ibcentralleste',
    href: INSTAGRAM_IBCL,
    color: 'bg-[#E1306C]/10 text-[#E1306C]',
  },
  {
    label: 'YouTube',
    handle: 'youtube.com/videosibcl',
    href: YOUTUBE_URL,
    color: 'bg-[#FF0000]/10 text-[#FF0000]',
  },
  {
    label: 'Instagram Kids',
    handle: '@ibclkids',
    href: 'https://www.instagram.com/ibclkids',
    color: 'bg-secondary/10 text-secondary',
  },
  {
    label: 'Instagram Teens',
    handle: '@ibclteens',
    href: 'https://www.instagram.com/ibclteens',
    color: 'bg-accent-coral/10 text-accent-coral',
  },
  {
    label: 'Instagram Jovem',
    handle: '@ibcljovem',
    href: 'https://www.instagram.com/ibcljovem',
    color: 'bg-primary/10 text-primary',
  },
]

export default function ContatoPage() {
  return (
    <>
      <PageHero
        tag="Contato"
        title="Fale conosco"
        subtitle="Estamos aqui para ajudar. Escolha o canal mais fácil para você."
        imageSeed="ibcl-contato"
      />

      <section className="py-20 md:py-28 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <SectionHeading
              tag="Informações"
              title="Como nos encontrar"
            />

            {/* Contact items */}
            <div className="space-y-4 mb-10">
              {contactItems.map((item, i) => (
                <MotionSection key={i} delay={i * 0.1} direction="left">
                  <div className="flex gap-4 p-5 bg-surface rounded-2xl border border-outline-variant/15 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-sans font-bold text-xs uppercase tracking-wider text-on-surface-variant/70 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="font-body font-semibold text-base text-on-surface hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body font-semibold text-base text-on-surface">{item.value}</p>
                      )}
                      {item.note && (
                        <p className="font-body text-sm text-on-surface-variant mt-0.5">{item.note}</p>
                      )}
                    </div>
                  </div>
                </MotionSection>
              ))}
            </div>

            {/* Social links */}
            <MotionSection direction="left" delay={0.3}>
              <h3 className="font-sans font-bold text-base text-on-surface mb-4">Redes sociais</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-outline-variant/15 hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <span className={`font-sans font-bold text-xs px-2 py-1 rounded-lg ${s.color}`}>
                      {s.label.split(' ').pop()}
                    </span>
                    <span className="font-body text-sm text-on-surface-variant">{s.handle}</span>
                  </a>
                ))}
              </div>
            </MotionSection>

            {/* Map */}
            <MotionSection direction="left" delay={0.4} className="mt-8">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-outline-variant/15 aspect-[4/3]">
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
          </div>

          {/* Right column: form */}
          <MotionSection direction="right" delay={0.1}>
            <ContactForm />
          </MotionSection>
        </div>
      </section>
    </>
  )
}
