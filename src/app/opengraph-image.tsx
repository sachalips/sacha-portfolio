import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#F4EFE7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px',
            backgroundColor: '#E63946',
          }}
        />

        {/* Label mono */}
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 16,
            color: '#E63946',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 28,
            opacity: 0.85,
          }}
        >
          PORTFOLIO · MARKETING & COMMUNICATION
        </div>

        {/* Nom display */}
        <div
          style={{
            fontFamily: 'sans-serif',
            fontSize: 120,
            fontWeight: 900,
            color: '#0A0A0A',
            lineHeight: 0.88,
            textTransform: 'uppercase',
            letterSpacing: '-0.01em',
          }}
        >
          SACHA ALIPS
        </div>

        {/* Sous-titre */}
        <div
          style={{
            marginTop: 36,
            fontFamily: 'monospace',
            fontSize: 18,
            color: '#0A0A0A',
            opacity: 0.45,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          ISG PARIS · MASTER PGE · ALTERNANCE SEPT. 2026
        </div>
      </div>
    ),
    { ...size },
  )
}
