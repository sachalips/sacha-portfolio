'use client'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0, 1] as const },
})

function VideoFrame({ src, ratio }: { src: string; ratio: '16/9' | '9/16' }) {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-[0_4px_32px_rgba(0,0,0,0.10)] bg-ink/5"
      style={{ aspectRatio: ratio }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

function VideoCard({
  tag,
  src,
  ratio,
  title,
  desc,
  badge,
  className = '',
}: {
  tag: string
  src: string
  ratio: '16/9' | '9/16'
  title: string
  desc: string
  badge?: string
  className?: string
}) {
  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0, 1] }}
    >
      {/* Coin rouge marker au hover */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-marker opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-marker opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

      {/* Tag */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/40">
          {tag}
        </span>
        {badge && (
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-marker/85">
            {badge}
          </span>
        )}
      </div>

      <VideoFrame src={src} ratio={ratio} />

      <h3
        className="font-display uppercase text-ink leading-[0.9] mt-4"
        style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}
      >
        {title}
      </h3>
      <p
        className="font-serif italic text-ink/55 mt-2 leading-snug"
        style={{ fontSize: 'clamp(0.82rem, 1.2vw, 0.95rem)' }}
      >
        {desc}
      </p>
    </motion.div>
  )
}

export default function Videos() {
  return (
    <section id="videos" className="py-28 px-6 bg-paper">
      <div className="max-w-screen-xl mx-auto">

        <motion.div {...fadeUp(0)} className="mb-8">
          <SectionLabel>05 / VIDÉO</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-display uppercase text-ink leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6.5rem)' }}
          {...fadeUp(0.1)}
        >
          LA VIDÉO AUSSI.
        </motion.h2>

        <motion.p
          className="mt-4 font-serif italic text-ink/50"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
          {...fadeUp(0.2)}
        >
          Du long format YouTube au format vertical TikTok, les codes des deux mondes.
        </motion.p>

        {/* Rangée 1 — Vidéo YouTube 16:9 */}
        <motion.div className="mt-20 max-w-[720px]" {...fadeUp(0.25)}>
          <VideoCard
            tag="PERSONAL BRAND · YOUTUBE"
            src="/videos/video-01.mp4"
            ratio="16/9"
            title="FORMAT PERSONAL BRAND YOUTUBE"
            desc="Format prise de parole long, sous-titres dynamiques, zoom rythmé. L'identité posée à la caméra."
          />
        </motion.div>

        {/* Rangée 2 — 2 vidéos TikTok 9:16 côte à côte */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-[720px]">
          <motion.div {...fadeUp(0.1)}>
            <VideoCard
              tag="EDIT · CONTENU VIRAL"
              src="/videos/video-02.mp4"
              ratio="9/16"
              title="CONTENU VIRAL TIKTOK"
              desc="Edit sport rythmé pour TikTok : cuts secs, motion design léger, codes natifs de la plateforme."
            />
          </motion.div>

          {/* Vidéo 3 — décalée vers le bas (~35px) */}
          <motion.div className="md:mt-10" {...fadeUp(0.2)}>
            <VideoCard
              tag="TREND · COMMUNITY GROWTH"
              src="/videos/video-03.mp4"
              ratio="9/16"
              title="UTILISATION DE TRENDS VIRALES"
              desc="Lecture des trends en temps réel, déclinaison rapide. Comprendre les codes d'une plateforme avant de produire."
              badge="60K+ VUES · 2 POSTS"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
