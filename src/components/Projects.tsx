'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from './SectionLabel'

const projects = [
  {
    id: '01',
    name: 'PROJET 01',
    tags: ['IDENTITÉ', 'SITE VITRINE'],
    desc: 'Création d\'un univers de marque et développement d\'un site vitrine pour un consultant indépendant — hiérarchisation des expertises, mise en avant des offres, parcours de prise de contact optimisé et identité visuelle professionnelle cohérente.',
    img: '/projects/project-01.jpg',
    alt: 'Aperçu du projet 01 — identité visuelle et site vitrine',
  },
  {
    id: '02',
    name: 'PROJET 02',
    tags: ['IDENTITÉ', 'SITE VITRINE'],
    desc: 'Création d\'un univers de marque et conception d\'un site vitrine — structuration des contenus, valorisation des services, parcours utilisateur fluide et identité visuelle harmonisée.',
    img: '/projects/project-02.jpg',
    alt: 'Aperçu du projet 02 — identité visuelle et e-commerce',
  },
]

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <div
      ref={ref}
      className="bg-paper p-4 md:p-6 shadow-[0_4px_32px_rgba(0,0,0,0.08)]"
    >
      <motion.div style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto block"
        />
      </motion.div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projets" className="py-28 px-6 bg-paper-dark">
      <div className="max-w-screen-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <SectionLabel>04 / PROJETS FREELANCE</SectionLabel>
        </motion.div>

        <motion.h2
          className="font-display uppercase text-ink leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 6.5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          WEB DESIGN
          <br />& IDENTITÉ.
        </motion.h2>

        <motion.p
          className="mt-4 font-serif italic text-ink/50"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Deux projets de design digital et d&apos;identité visuelle, conçus en freelance.
        </motion.p>

        <div className="mt-20 flex flex-col gap-24">
          {projects.map((project, i) => {
            const imgLeft = i % 2 === 0
            return (
              <motion.div
                key={project.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-0 group`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
              >
                {/* Image */}
                <div
                  className={`relative ${imgLeft ? 'md:order-1' : 'md:order-2'} overflow-hidden`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
                    className="relative"
                  >
                    <ParallaxImage src={project.img} alt={project.alt} />
                    {/* Coin rouge marker au hover */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-marker opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-marker opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                {/* Texte */}
                <div
                  className={`flex flex-col justify-center px-0 py-8 ${
                    imgLeft ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'
                  }`}
                >
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/40 mb-3">
                    {project.id} / {project.tags.join(' + ')}
                  </span>
                  <h3
                    className="font-display uppercase text-ink leading-[0.9]"
                    style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-4 font-sans text-sm text-ink/65 leading-relaxed max-w-sm">
                    {project.desc}
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
