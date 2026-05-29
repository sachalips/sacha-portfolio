'use client'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const xps = [
  {
    date: '— 3 mois',
    title: 'Chef de projet',
    company: 'Agence de communication',
    type: 'Stage',
    body: "Organisation et logistique d'événements de marque, coordination des prestataires et équipes internes, création de supports — présentations, briefs, scripts, visuels — suivi des plannings et livrables.",
    tags: ['BRAND', 'ÉVÉNEMENTIEL', 'COORDINATION', 'CONTENT'],
  },
  {
    date: '— 3 mois',
    title: 'Chargé de contenu & communication',
    company: 'Agence de communication',
    type: 'Stage',
    body: "Création de contenus pour des marques, coordination avec créatifs et clients, production de supports digitaux et social media, veille tendances et benchmark concurrentiel.",
    tags: ['CONTENT', 'SOCIAL', 'BRAND', 'CRÉATIFS'],
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="py-28 px-6 bg-paper">
      <div className="max-w-screen-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <SectionLabel>03 / EXPÉRIENCES</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-display uppercase text-ink leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6.5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          SUR LE TERRAIN.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {xps.map((xp, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="border border-ink/12 p-8 flex flex-col gap-4 hover:border-ink/25 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-marker/80">
                    {xp.type} {xp.date}
                  </span>
                  <h3 className="font-sans font-medium text-ink text-lg mt-1">{xp.title}</h3>
                  <p className="font-serif italic text-ink/50 text-sm mt-0.5">{xp.company}</p>
                </div>
              </div>

              <p className="font-sans text-sm text-ink/65 leading-relaxed">{xp.body}</p>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {xp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.58rem] uppercase tracking-[0.18em] border border-ink/20 px-2.5 py-1 text-ink/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
