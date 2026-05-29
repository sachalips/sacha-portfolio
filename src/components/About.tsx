'use client'
import { motion, type Variants } from 'framer-motion'
import SectionLabel from './SectionLabel'

const pillars = [
  {
    title: 'Marketing & Communication',
    body: 'Agence, brand, contenu, événementiel. Construire des marques qui parlent à des humains.',
  },
  {
    title: 'Design & Web',
    body: 'Chartes, identités visuelles, sites e-commerce et vitrines. Du concept au pixel final.',
  },
  {
    title: 'AI-augmented workflow',
    body: "J'intègre Claude, Claude Code, ChatGPT et Midjourney dans mes process pour aller plus vite et prototyper plus loin.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0, 1] as [number, number, number, number] },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-paper">
      <div className="max-w-screen-xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <SectionLabel>01 / À PROPOS</SectionLabel>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-serif italic text-ink"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Je suis Sacha.
        </motion.h2>

        {/* Paragraphe */}
        <motion.p
          className="mt-6 font-sans text-ink/75 max-w-2xl leading-relaxed"
          style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Étudiant en Master PGE Marketing &amp; Communication à l&apos;ISG Paris, je construis
          des marques et des projets là où le marketing, le design et la relation humaine se
          rencontrent. J&apos;ai cette double énergie : très opérationnel sur le digital et l&apos;IA,
          et profondément à l&apos;aise dans la relation client, le commercial et le face-à-face.
          Je crois qu&apos;un bon projet, c&apos;est d&apos;abord une bonne conversation.
        </motion.p>

        {/* Trois piliers */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="border border-ink/12 p-7 bg-paper hover:border-marker/40 transition-colors duration-300 group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-marker mb-4" />
              <h3 className="font-sans font-medium text-ink text-sm mb-2">{p.title}</h3>
              <p className="font-sans text-ink/60 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Ligne signature */}
        <motion.p
          className="mt-8 text-right font-serif italic text-ink/40"
          style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          L&apos;IA est un levier. Le métier reste humain.
        </motion.p>
      </div>
    </section>
  )
}
