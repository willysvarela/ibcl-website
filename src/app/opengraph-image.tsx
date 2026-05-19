import { ImageResponse } from 'next/og'

export const alt = 'IBCL - Igreja Batista Central Leste'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PRIMARY = '#0f5238'
const SURFACE = '#f8faf6'
const ON_SURFACE = '#191c1a'
const ON_SURFACE_VARIANT = '#404943'
const SECONDARY_CONTAINER = '#f0d7fe'
const ON_PRIMARY = '#ffffff'

export default async function Image() {
  const [jakartaBold, jakartaSemiBold] = await Promise.all([
    loadGoogleFont('Plus+Jakarta+Sans', 700),
    loadGoogleFont('Plus+Jakarta+Sans', 600),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: SURFACE,
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'rgba(15,82,56,0.07)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: -60,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(45,106,79,0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: '25%',
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'rgba(240,215,254,0.45)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '56px 72px',
            alignItems: 'center',
            gap: 48,
          }}
        >
          {/* Left — text column */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 0 }}>
            {/* Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: SECONDARY_CONTAINER,
                borderRadius: 999,
                padding: '8px 18px',
                width: 'fit-content',
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: PRIMARY,
                }}
              />
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#6f5b7c',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Domingos às 18h · Manaus/AM
              </span>
            </div>

            {/* Headline */}
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 24 }}>
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: ON_SURFACE,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                }}
              >
                Bem-vindo à{' '}
              </span>
              <span
                style={{
                  fontSize: 72,
                  fontWeight: 700,
                  color: PRIMARY,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                }}
              >
                IBCL
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 22,
                color: ON_SURFACE_VARIANT,
                lineHeight: 1.55,
                margin: 0,
                marginBottom: 40,
                maxWidth: 460,
              }}
            >
              Somos uma igreja que acredita que a vida é melhor em comunidade. Um lugar onde
              você é esperado, acolhido e desafiado a crescer.
            </p>

            {/* Stat */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                paddingTop: 28,
                borderTop: `1.5px solid rgba(191,201,193,0.4)`,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: PRIMARY }}>25+</span>
                <span style={{ fontSize: 14, color: ON_SURFACE_VARIANT }}>Anos de história</span>
              </div>
            </div>
          </div>

          {/* Right — mosaic column */}
          <div style={{ display: 'flex', flexDirection: 'column', width: 380, gap: 16 }}>
            {/* Green card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '36px 32px',
                borderRadius: 24,
                background: PRIMARY,
                height: 280,
              }}
            >
              <div style={{ fontSize: 44, marginBottom: 16 }}>🤝</div>
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: ON_PRIMARY,
                  lineHeight: 1.2,
                }}
              >
                Uma família
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.72)',
                  marginTop: 6,
                  lineHeight: 1.4,
                }}
              >
                que caminha junto na Palavra
              </span>
            </div>

            {/* Accent card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '28px 28px',
                borderRadius: 24,
                background: '#ffffff',
                border: '1.5px solid rgba(191,201,193,0.25)',
                flex: 1,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: 'rgba(226,114,91,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  marginBottom: 14,
                }}
              >
                ❤️
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: ON_SURFACE,
                  lineHeight: 1.3,
                  marginBottom: 6,
                }}
              >
                Acolhimento sem julgamento
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: ON_SURFACE_VARIANT,
                  lineHeight: 1.5,
                }}
              >
                Você não precisa estar com tudo resolvido para vir.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(to right, ${PRIMARY}, #2d6a4f, #6b5778)`,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Plus Jakarta Sans', data: jakartaBold, weight: 700, style: 'normal' },
        { name: 'Plus Jakarta Sans', data: jakartaSemiBold, weight: 600, style: 'normal' },
      ],
    }
  )
}

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`
  const css = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Next.js OG image generator)' },
  }).then((r) => r.text())

  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/)
  if (!match) throw new Error(`Could not parse font URL for ${family} ${weight}`)

  return fetch(match[1]).then((r) => r.arrayBuffer())
}
