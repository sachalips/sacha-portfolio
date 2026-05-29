'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import MarkerCircle from './MarkerCircle'
import Marquee from './Marquee'

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const line = (
  delay: number,
  direction: 'left' | 'right',
  children: React.ReactNode,
) => (
  <motion.span
    className="block"
    initial={{ x: direction === 'left' ? -48 : 48, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.9, delay, ease: [0.25, 0.1, 0, 1] }}
  >
    {children}
  </motion.span>
)

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-13%'])

  return (
    <header
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-paper px-6 pt-24 pb-0"
    >
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] gap-10 md:gap-16 items-center">

          {/* LEFT — texte hero */}
          <div className="order-2 md:order-1">
            <h1
              className="font-display uppercase leading-[0.88] tracking-tight"
              style={{ fontSize: 'clamp(1.8rem, 7vw, 7.5rem)' }}
            >
              {line(0.15, 'left', 'MARKETING × DESIGN')}
              {line(0.3, 'right', '× RELATION')}
              {line(0.45, 'left',
                <span className="relative inline-block">
                  HUMAINE.
                  <MarkerCircle
                    delay={1.1}
                    style={{
                      position: 'absolute',
                      top: '-18%',
                      left: '-6%',
                      width: '112%',
                      height: '136%',
                      pointerEvents: 'none',
                    }}
                  />
                </span>
              )}
              {line(0.6, 'right', 'AUGMENTÉ PAR L\'IA.')}
            </h1>

            <motion.p
              className="mt-8 font-serif italic text-ink/60"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: 'easeOut' }}
            >
              Étudiant en Master PGE — ISG Paris.
              <br />
              En recherche d&apos;alternance, rentrée septembre 2026.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 mt-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                className="w-px h-10 bg-ink/30 origin-top"
                animate={{ scaleY: [0.6, 1, 0.6] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink/40">
                01 / À PROPOS
              </span>
            </motion.div>
          </div>

          {/* RIGHT — portrait */}
          <div className="order-1 md:order-2 flex flex-col items-center md:items-end">
            <motion.div
              className="relative w-full max-w-[70vw] md:max-w-full overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.16)]"
              style={{ aspectRatio: '4/5' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0, 1] }}
            >
              <motion.div
                style={{ y: portraitY }}
                className="absolute inset-[-8%] w-[116%] h-[116%]"
              >
                <Image
                  src="/sacha-portrait.jpg"
                  alt="Sacha Alips — portrait"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 70vw, 40vw"
                  priority
                />
              </motion.div>
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{ backgroundImage: GRAIN_SVG, opacity: 0.09 }}
              />
            </motion.div>

            <motion.span
              className="font-mono text-[0.52rem] uppercase tracking-[0.2em] text-ink/30 mt-2 self-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              SACHA, PARIS — 2026
            </motion.span>
          </div>

        </div>
      </div>

      {/* Marquee en bas du hero */}
      <div className="mt-16">
        <Marquee />
      </div>
    </header>
  )
}
