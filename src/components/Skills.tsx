'use client'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const skills = [
  'Marketing de marque & communication',
  'Construction d\'univers de marque & chartes visuelles',
  'Coordination de projets multi-interlocuteurs',
  'Création de contenus — présentations, briefs, social, vidéo',
  'Web design & e-commerce — identité, vitrine, conversion',
  'Sales & relationnel client, business développé en face-à-face',
  'Intégration de l\'IA dans les workflows — prompt, automation, prototypage',
]

const tools = [
  'Microsoft Office',
  'PowerPoint',
  'Suite Adobe',
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Figma',
  'Framer',
  'Shopify',
  'Notion',
  'DaVinci Resolve',
  'ChatGPT',
  'Claude',
  'Claude Code',
  'Midjourney',
  'Perplexity',
]

const aiTools = ['ChatGPT', 'Claude', 'Claude Code', 'Midjourney', 'Perplexity']

export default function Skills() {
  return (
    <section id="competences" className="py-28 px-6 bg-paper-dark">
      <div className="max-w-screen-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <SectionLabel>06 / COMPÉTENCES & OUTILS</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-display uppercase text-ink leading-[0.9] mb-16"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6.5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          LA BOÎTE
          <br />À OUTILS.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Compétences */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink/40 mb-6">
              Compétences
            </h3>
            <ul className="space-y-4">
              {skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-marker mt-1.5" />
                  <span className="font-sans text-sm text-ink/75 leading-snug">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Outils */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink/40 mb-6">
              Outils
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className={`font-mono text-[0.62rem] uppercase tracking-[0.15em] px-3 py-2 border transition-colors duration-200 ${
                    aiTools.includes(tool)
                      ? 'border-marker/40 text-marker/80 bg-marker/4'
                      : 'border-ink/18 text-ink/55'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Citation Claude Code */}
        <motion.p
          className="mt-20 text-center font-serif italic text-ink/50 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          &ldquo;Claude Code est aujourd&apos;hui un de mes leviers les plus puissants : prototyper
          un site, un script ou un outil en quelques heures au lieu de plusieurs jours.&rdquo;
        </motion.p>
      </div>
    </section>
  )
}
