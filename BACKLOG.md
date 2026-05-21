# Backlog

Items pending for a future sprint. Not blockers for launch.

---

## Analytics

- ✅ Cloudflare Web Analytics added to `layout.tsx` (cookie-free, no consent needed)
- Track key events: WhatsApp button clicks, form submissions, YouTube link clicks (requires Cloudflare Workers or a custom solution — low priority)

## Conteúdo — Devocionais

- Publish at least 5–10 posts in `content/devocionais/` before launch so the section doesn't look empty
- Use `content/devocionais/_template.md` as a guide

## Fotos reais (substituir picsum.photos)

- See `image-requests.md` for the full photo brief (20+ images needed)
- Affected components: `Hero`, `MinistriesPreview`, `PageHero`, all ministry cards in `ministerios/page.tsx`, history timeline and pastor photo in `HistorySection`, devocional covers

## Foto e bio do Pastor Leandro

- `HistorySection.tsx` — replace `picsum.photos/seed/pastor-leandro` with a real portrait
- Consider expanding the bio text
