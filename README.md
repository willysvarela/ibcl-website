# IBCL — Igreja Batista Central Leste

Site institucional da Igreja Batista Central Leste, Manaus/AM.

> **"Muito mais que amigos — uma família que caminha junto na Palavra."**

---

## Stack

| Tecnologia | Uso |
|---|---|
| **Next.js 16** (App Router) | Framework principal |
| **Tailwind CSS v4** | Estilização com tokens via `@theme` no CSS |
| **motion.dev** (`motion/react`) | Animações — parallax, scroll-reveal, stagger |
| **Resend** | Envio de e-mail pelo formulário de contato |
| **next/font** | Plus Jakarta Sans (títulos) + Be Vietnam Pro (corpo) |
| **Vercel** | Deploy |

---

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home: Hero animado, InfoBar, Valores, Ministérios, CTA Primeira Visita, Mensagens |
| `/sobre` | História (timeline), Liderança, Valores |
| `/ministerios` | Todos os 7 ministérios com cards detalhados |
| `/primeira-visita` | Infos práticas, mapa embed, FAQ acordeão, Próximos passos |
| `/grupos-de-oracao` | Explicação dos GOs, formulário de pedido de grupo |
| `/mensagens` | Último vídeo em destaque + grade de anteriores (YouTube RSS) |
| `/contato` | Formulário (Resend) + mapa + redes sociais |
| `/api/contato` | POST — envia e-mail via Resend |

---

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```bash
cp .env.example .env.local
```

| Variável | Descrição |
|---|---|
| `YOUTUBE_CHANNEL_ID` | ID do canal do YouTube (não o handle). Para encontrar: canal → Sobre → Compartilhar → Copiar ID |
| `RESEND_API_KEY` | Chave da API Resend |
| `RESEND_FROM_EMAIL` | E-mail remetente (ex: `noreply@ibcl.com.br`) |
| `RESEND_TO_EMAIL` | E-mail destinatário (ex: `secretaria@ibcentralleste.com.br`) |

> Sem `YOUTUBE_CHANNEL_ID`, o site exibe vídeos mock. Sem `RESEND_API_KEY`, o formulário retorna erro 503.

---

## Rodando localmente

```bash
npm install
cp .env.example .env.local  # preencher as vars
npm run dev
```

Acesse em [http://localhost:3000](http://localhost:3000).

---

## Deploy (Vercel)

1. Conecte o repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente no painel do projeto
3. Deploy automático a cada push na branch principal

---

## Estrutura de arquivos

```
src/
  app/
    layout.tsx                  # Root layout: Navbar + Footer + WhatsApp FAB
    page.tsx                    # Home
    sobre/page.tsx
    ministerios/page.tsx
    primeira-visita/page.tsx
    grupos-de-oracao/page.tsx
    mensagens/page.tsx
    contato/page.tsx
    api/contato/route.ts        # POST — envio de e-mail via Resend
    globals.css                 # Design tokens (Tailwind v4 @theme)
  components/
    layout/
      Navbar.tsx                # Navbar responsiva com drawer mobile animado
      Footer.tsx
      WhatsAppFAB.tsx           # Botão flutuante WhatsApp com pulse ring
    ui/
      MotionSection.tsx         # Wrappers de animação (scroll-reveal, stagger)
      SectionHeading.tsx        # Cabeçalho de seção padronizado
      PageHero.tsx              # Hero de página interna
    home/                       # Seções da homepage
    sobre/                      # Componentes da página Sobre
    primeira-visita/            # FAQSection (acordeão animado)
    grupos-de-oracao/           # GOForm
    contato/                    # ContactForm
  lib/
    constants.ts                # Textos, URLs, dados estáticos da igreja
    youtube.ts                  # Busca vídeos via RSS + fallback mock
```

---

## Design System

Definido em `/DESIGN.md` (raiz do projeto). Tema: **"Lively Faith"**.

- **Primária:** Forest Green `#0f5238`
- **Secundária:** Muted Purple `#6b5778`
- **Fontes:** Plus Jakarta Sans (títulos) · Be Vietnam Pro (corpo)
- **Modo:** somente claro

Os tokens são declarados em `globals.css` via `@theme` e usados diretamente como classes Tailwind (`bg-primary`, `text-on-surface`, etc.).

---

## Animações

Todas as animações usam `motion/react` (motion.dev):

- **Hero:** parallax scroll, palavras entrando em cascata, blobs flutuantes
- **Seções:** scroll-reveal com `useInView` + `once: true`
- **Cards:** stagger de entrada, hover lift com sombra
- **FAQ:** animação de altura com `AnimatePresence`
- **Navbar:** hamburger animado, drawer com spring
- **WhatsApp FAB:** pulse ring em loop

---

## Itens pendentes

- [ ] Substituir imagens mock por fotos reais da IBCL
- [ ] Foto e bio real do Pastor Leandro Souza
- [ ] Confirmar Channel ID do YouTube e configurar `YOUTUBE_CHANNEL_ID`
- [ ] Configurar domínio e variáveis de ambiente no Vercel
- [ ] Configurar Resend com domínio verificado (`ibcl.com.br`)
- [ ] Validar embed do Google Maps com o endereço correto

---

## Conteúdo

Todo o conteúdo do site está definido em:

- `src/lib/constants.ts` — contatos, horários, URLs
- Diretamente nos componentes de cada página — texto dos ministérios, história, FAQ, etc.

Para migrar para um CMS no futuro, os dados de cada seção estão estruturados como arrays de objetos, facilitando a extração.
