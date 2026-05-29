'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from './SectionLabel'

export default function Contact() {
  const [hovered, setHovered] = useState(false)

  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col justify-center py-24 px-6 bg-paper"
    >
      <div className="max-w-screen-xl mx-auto w-full text-center">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <SectionLabel>06 / CONTACT</SectionLabel>
        </motion.div>

        {/* Headline display */}
        <motion.h2
          className="font-display uppercase text-ink leading-[0.88]"
          style={{ fontSize: 'clamp(3rem, 9vw, 10rem)' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          ON EN PARLE ?
        </motion.h2>

        {/* Sous-titre */}
        <motion.p
          className="mt-6 font-serif italic text-ink/55"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Disponible pour une alternance — rentrée septembre 2026.
        </motion.p>

        {/* Email */}
        <motion.div
          className="mt-12 inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="relative inline-block">
            <a
              href="mailto:sacha.alips@gmail.com"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="font-display uppercase text-ink block"
              style={{ fontSize: 'clamp(1rem, 3.5vw, 3.5rem)' }}
              data-cursor-hover
            >
              SACHA.ALIPS@GMAIL.COM
            </a>
            {/* Underline marker animé */}
            <AnimatePresence>
              {hovered && (
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 400 12"
                  fill="none"
                  preserveAspectRatio="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                >
                  <motion.path
                    d="M 2 6 C 60 3, 150 9, 240 5 C 320 2, 375 8, 398 6"
                    stroke="#E63946"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Boutons */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/sacha-alips-a50593294/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="font-mono text-[0.68rem] uppercase tracking-[0.2em] border border-ink/30 px-8 py-4 text-ink/70 hover:border-ink hover:text-ink transition-colors duration-200 min-w-[200px] text-center"
          >
            LINKEDIN ↗
          </a>
          <a
            href="/cv-sacha-alips.pdf"
            download="CV_Sacha_Alips.pdf"
            rel="noopener"
            data-cursor-hover
            className="font-mono text-[0.68rem] uppercase tracking-[0.2em] bg-ink text-paper px-8 py-4 hover:bg-ink/85 transition-colors duration-200 min-w-[200px] text-center"
          >
            TÉLÉCHARGER MON CV ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
