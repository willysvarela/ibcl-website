# Backlog

Items pending for a future sprint. Not blockers for launch.

---

## Analytics

- Add Vercel Analytics (`@vercel/analytics`) or Google Analytics to `layout.tsx`
- Track key events: WhatsApp button clicks, form submissions, YouTube link clicks

## Conteúdo — Devocionais

- Publish at least 5–10 posts in `content/devocionais/` before launch so the section doesn't look empty
- Use `content/devocionais/_template.md` as a guide

## Fotos reais (substituir picsum.photos)

- See `image-requests.md` for the full photo brief (20+ images needed)
- Affected components: `Hero`, `MinistriesPreview`, `PageHero`, all ministry cards in `ministerios/page.tsx`, history timeline and pastor photo in `HistorySection`, devocional covers

## Foto e bio do Pastor Leandro

- `HistorySection.tsx` — replace `picsum.photos/seed/pastor-leandro` with a real portrait
- Consider expanding the bio text

## Verificação de estatísticas

- `Hero.tsx:134`, `opengraph-image.tsx:169`, `sobre/page.tsx` — all display "25+ anos de história"
- Confirm with leadership whether "25+" or "26+" is the preferred figure for 2026

## Domínio `ibcl.com.br`

- Confirm domain is registered and DNS is pointing to Vercel
- Verify SSL certificate is issued in the Vercel dashboard
- Set `NEXT_PUBLIC_SITE_URL=https://ibcl.com.br` in Vercel production environment variables

## Verificação de handles do Instagram

- `@ibclkids`, `@ibclteens`, `@ibcljovem` — confirm these handles exist and are the correct accounts before launch
