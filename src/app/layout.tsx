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
    'Portfolio de Sacha Alips : marketing, création de contenu, brand et web design, augmentés par l\'IA.',
  openGraph: {
    title: 'Sacha Alips — Portfolio Marketing & Communication',
    description:
      'Marketing, création de contenu, brand et web design, augmentés par l\'IA.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sacha Alips — Portfolio Marketing & Communication',
    description: 'Marketing · Contenu · Brand · IA',
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
