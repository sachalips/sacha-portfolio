import type { Metadata } from 'next'
import { fontDisplay, fontSerif, fontMono, fontSans } from '@/lib/fonts'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import GrainOverlay from '@/components/GrainOverlay'
import CursorFollower from '@/components/CursorFollower'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://sacha-alips.vercel.app'),
  title: 'Sacha Alips — Portfolio Marketing & Communication',
  description:
    'Étudiant en Master PGE Marketing & Communication à l\'ISG Paris, en recherche d\'alternance pour septembre 2026. Portfolio web design, brand, communication et AI.',
  openGraph: {
    title: 'Sacha Alips — Portfolio Marketing & Communication',
    description:
      'Étudiant en Master PGE Marketing & Communication à l\'ISG Paris. En recherche d\'alternance, rentrée septembre 2026.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sacha Alips — Portfolio Marketing & Communication',
    description: 'Master PGE ISG Paris · Alternance septembre 2026',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${fontDisplay.variable} ${fontSerif.variable} ${fontMono.variable} ${fontSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SmoothScrollProvider>
          <GrainOverlay />
          <CursorFollower />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
