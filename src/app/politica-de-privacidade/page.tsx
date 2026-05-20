import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade da IBCL — Igreja Batista Central Leste. Saiba como coletamos, usamos e protegemos seus dados em conformidade com a LGPD.',
  alternates: { canonical: '/politica-de-privacidade' },
  robots: { index: true, follow: true },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="max-w-[760px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-sans font-bold text-xs uppercase tracking-wider mb-5">
          Legal
        </span>
        <h1 className="font-sans font-bold text-3xl md:text-4xl text-on-surface leading-tight tracking-tight mb-4">
          Política de Privacidade
        </h1>
        <p className="font-body text-sm text-on-surface-variant">
          Última atualização: maio de 2025
        </p>
      </div>

      <div className="prose-ibcl space-y-10 font-body text-base text-on-surface-variant leading-relaxed">

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">1. Quem somos</h2>
          <p>
            A <strong className="text-on-surface font-semibold">Igreja Batista Central Leste (IBCL)</strong>, localizada na
            Av. Cosme Ferreira, 2690, Aleixo, Manaus/AM, é a responsável pelo tratamento dos dados coletados
            neste site (<span className="text-primary">ibcl.com.br</span>).
          </p>
          <p className="mt-3">
            Para dúvidas ou solicitações relacionadas a esta política, entre em contato com nossa secretaria:
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>E-mail: <a href="mailto:secretaria@ibcl.com.br" className="text-primary hover:underline">secretaria@ibcl.com.br</a></li>
            <li>WhatsApp: <a href="https://wa.me/5592992082294" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">(92) 99208-2294</a></li>
          </ul>
        </section>

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">2. Quais dados coletamos</h2>
          <p>Coletamos apenas os dados que você nos fornece voluntariamente por meio dos formulários deste site:</p>
          <div className="mt-4 space-y-4">
            <div className="bg-surface rounded-xl p-5 border border-outline-variant/20">
              <p className="font-sans font-semibold text-sm text-on-surface mb-2">Formulário de Contato</p>
              <p className="text-sm">Nome, endereço de e-mail, assunto e mensagem.</p>
            </div>
            <div className="bg-surface rounded-xl p-5 border border-outline-variant/20">
              <p className="font-sans font-semibold text-sm text-on-surface mb-2">Pedido de Oração</p>
              <p className="text-sm">Nome, número de telefone (opcional) e texto do pedido de oração.</p>
              <p className="text-sm mt-1 text-on-surface-variant/70 italic">
                Pedidos de oração são considerados dados sensíveis de natureza religiosa e tratados com
                sigilo absoluto, conforme o Art. 11 da LGPD.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-5 border border-outline-variant/20">
              <p className="font-sans font-semibold text-sm text-on-surface mb-2">Grupos de Oração</p>
              <p className="text-sm">Nome, número de WhatsApp, bairro, situação civil (opcional) e mensagem (opcional).</p>
            </div>
          </div>
          <p className="mt-4">
            Este site utiliza o <strong className="text-on-surface font-semibold">Cloudflare Web Analytics</strong> para
            medir o número de visitas às páginas. Esse serviço não usa cookies, não rastreia usuários individualmente
            e não coleta dados pessoais identificáveis — apenas contagens agregadas de visitas, país de origem
            (aproximado), tipo de dispositivo e referenciador. Não utilizamos pixels de terceiros nem ferramentas
            de rastreamento comportamental.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">3. Para que usamos seus dados</h2>
          <p>Os dados são usados exclusivamente para as finalidades declaradas no momento da coleta:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Responder às mensagens enviadas pelo formulário de contato.</li>
            <li>Encaminhar seu pedido de oração à equipe pastoral da IBCL.</li>
            <li>Indicar o Grupo de Oração mais próximo do seu bairro e facilitar o contato com a secretaria.</li>
          </ul>
          <p className="mt-4">
            Não usamos seus dados para marketing não solicitado, não os compartilhamos com empresas parceiras
            e não os vendemos a terceiros em hipótese alguma.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">4. Base legal para o tratamento</h2>
          <p>
            O tratamento dos seus dados é realizado com base no seu <strong className="text-on-surface font-semibold">consentimento explícito</strong> (Art. 7º, I da Lei 13.709/2018 — LGPD),
            manifestado no ato de preenchimento e envio de cada formulário.
          </p>
          <p className="mt-3">
            Você pode retirar seu consentimento a qualquer momento entrando em contato conosco pelos
            canais listados na seção 1.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">5. Com quem compartilhamos</h2>
          <p>
            Seus dados são acessados somente pela secretaria e pela equipe pastoral da IBCL, que são as
            pessoas responsáveis por responder às suas mensagens.
          </p>
          <p className="mt-3">
            Utilizamos o serviço <strong className="text-on-surface font-semibold">Resend</strong> (resend.com) para o envio de notificações por e-mail.
            Esse serviço processa as mensagens enviadas pelos formulários em trânsito, sem armazenar
            permanentemente seus dados. O Resend é certificado e opera em conformidade com o GDPR.
          </p>
          <p className="mt-3">
            Nenhum outro terceiro tem acesso aos dados que você nos fornece.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">6. Por quanto tempo guardamos seus dados</h2>
          <p>
            As mensagens e pedidos recebidos pelos formulários são mantidos nos sistemas internos da secretaria
            pelo tempo necessário para atender sua solicitação e, no máximo, por <strong className="text-on-surface font-semibold">12 meses</strong>, salvo
            obrigação legal que exija retenção por prazo maior.
          </p>
          <p className="mt-3">
            Após esse período, os dados são excluídos ou anonimizados.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">7. Seus direitos (LGPD, Art. 18)</h2>
          <p>Como titular dos dados, você tem direito a:</p>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Confirmar se tratamos seus dados e acessar uma cópia deles.</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>Solicitar a portabilidade dos seus dados a outro fornecedor de serviço.</li>
            <li>Revogar seu consentimento a qualquer momento.</li>
            <li>Peticionar à Autoridade Nacional de Proteção de Dados (ANPD) em caso de descumprimento.</li>
          </ul>
          <p className="mt-4">
            Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
            <a href="mailto:secretaria@ibcl.com.br" className="text-primary hover:underline">secretaria@ibcl.com.br</a>.
            Atenderemos em até <strong className="text-on-surface font-semibold">15 dias úteis</strong>.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">8. Segurança</h2>
          <p>
            Este site é servido exclusivamente via HTTPS. Os formulários utilizam criptografia em trânsito (TLS).
            O acesso aos dados recebidos é restrito às pessoas autorizadas da secretaria da IBCL.
          </p>
          <p className="mt-3">
            Embora adotemos medidas razoáveis de segurança, nenhum sistema é 100% inviolável. Em caso de
            incidente que afete seus dados, notificaremos os titulares e a ANPD nos prazos previstos pela LGPD.
          </p>
        </section>

        <section>
          <h2 className="font-sans font-bold text-xl text-on-surface mb-3">9. Alterações nesta política</h2>
          <p>
            Podemos atualizar esta política periodicamente. A data de "última atualização" no topo da página
            refletirá sempre a versão mais recente. Mudanças significativas serão comunicadas nos canais
            oficiais da IBCL (Instagram e WhatsApp da secretaria).
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-outline-variant/25 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-3 rounded-xl font-sans font-semibold text-sm"
          >
            Falar com a secretaria
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-outline-variant/40 text-on-surface-variant px-5 py-3 rounded-xl font-sans font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
          >
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  )
}
