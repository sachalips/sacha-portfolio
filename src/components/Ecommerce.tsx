'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const processWords = [
  'SOURCING',
  'IDENTITÉ',
  'CATALOGUE',
  'MISE EN LIGNE',
  "PARCOURS D'ACHAT",
  'STOCKS',
  'CLIENT',
]

export default function Ecommerce() {
  const stripRef = useRef<HTMLDivElement>(null)
  const stripInView = useInView(stripRef, { once: true, margin: '-40px' })

  return (
    <section className="py-28 px-6 bg-paper">
      <div className="max-w-screen-xl mx-auto">

        {/* Header bicolonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-marker/80 block mb-6">
              BONUS · ENTREPRENEURIAT
            </span>
            <h2
              className="font-display uppercase text-ink leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 6rem)' }}
            >
              J&apos;AI AUSSI
              <br />
              LANCÉ MA
              <br />
              PROPRE
              <br />
              BOUTIQUE.
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-sans text-ink/70 leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
              Mon premier vrai laboratoire entrepreneurial&nbsp;: de l&apos;idée au panier client, en autonomie complète. Sourcing, identité, catalogue, parcours d&apos;achat, mise en ligne, gestion fournisseurs. Plus qu&apos;un business, une école accélérée du marketing opérationnel et de la décision quotidienne.
            </p>
            <span className="mt-6 inline-block font-mono text-[0.62rem] uppercase tracking-[0.2em] border border-ink/25 px-3 py-1.5 text-ink/50 w-fit">
              SHOPIFY
            </span>
          </motion.div>
        </div>

        {/* Strip process */}
        <div ref={stripRef} className="border-t border-ink/12 pt-12">
          <div className="flex flex-wrap items-baseline gap-y-2">
            {processWords.map((word, i) => (
              <span key={word} className="flex items-baseline">
                <motion.span
                  className="font-mono uppercase tracking-[0.18em] text-ink"
                  style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
                  initial={{ opacity: 0.1, y: 6 }}
                  animate={stripInView ? { opacity: 1, y: 0 } : { opacity: 0.1, y: 6 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  {word}
                </motion.span>
                {i < processWords.length - 1 && (
                  <motion.span
                    className="font-mono text-marker mx-3"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
                    initial={{ opacity: 0.1 }}
                    animate={stripInView ? { opacity: 1 } : { opacity: 0.1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 + 0.03 }}
                  >
                    ·
                  </motion.span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
