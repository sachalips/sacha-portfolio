'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from './SectionLabel'

const entries = [
  {
    period: '2026–2028',
    place: 'ISG Paris',
    desc: 'Master PGE, spécialité Marketing & Communication. En recherche d\'alternance.',
    current: true,
  },
  {
    period: '2025–2026',
    place: 'ISG Bordeaux + EAE Barcelone',
    desc: '3ᵉ année Business & Management. Semestre international en Finance à l\'EAE Business School, Barcelone.',
    current: false,
  },
  {
    period: '2023–2025',
    place: 'ISEG Bordeaux',
    desc: '1ʳᵉ et 2ᵉ années Marketing & Communication, majeure Digital.',
    current: false,
  },
  {
    period: '2023',
    place: 'Lycée Saint-Paul, Angoulême',
    desc: 'Baccalauréat SES / HGGSP.',
    current: false,
  },
]

export default function Parcours() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="parcours" className="py-28 px-6 bg-paper-dark">
      <div className="max-w-screen-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <SectionLabel>02 / PARCOURS</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-display uppercase text-ink leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6.5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          LE CHEMIN.
        </motion.h2>

        {/* Timeline */}
        <div ref={containerRef} className="relative mt-20 max-w-4xl mx-auto">

          {/* Ligne centre (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/10 -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-ink origin-top"
              style={{ height: '100%', scaleY }}
            />
          </div>

          {/* Ligne gauche (mobile) */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-ink/10 md:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-ink origin-top"
              style={{ height: '100%', scaleY }}
            />
          </div>

          {entries.map((entry, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={i}
                className={`relative flex items-start gap-6 mb-14 md:mb-16 ${
                  isLeft
                    ? 'md:flex-row pl-6 md:pl-0 md:pr-[52%]'
                    : 'md:flex-row-reverse pl-6 md:pl-[52%]'
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1.5 w-2.5 h-2.5 rounded-full bg-marker border-2 border-paper-dark flex-shrink-0 md:left-1/2 md:-translate-x-1/2 left-0 -translate-x-1`}
                />

                {/* Texte */}
                <div className={isLeft ? 'md:text-right' : 'md:text-left'}>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-marker/80">
                    {entry.period}
                  </span>
                  <h3 className="font-sans font-medium text-ink mt-1 text-base">
                    {entry.place}
                    {entry.current && (
                      <span className="ml-2 font-mono text-[0.55rem] uppercase tracking-widest bg-marker text-paper px-1.5 py-0.5 align-middle">
                        EN COURS
                      </span>
                    )}
                  </h3>
                  <p className="font-sans text-sm text-ink/60 mt-1 leading-relaxed">
                    {entry.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
