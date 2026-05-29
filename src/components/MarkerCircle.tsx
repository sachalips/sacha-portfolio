'use client'
import { motion } from 'framer-motion'

interface Props {
  className?: string
  style?: React.CSSProperties
  delay?: number
  inView?: boolean
}

export default function MarkerCircle({ className, style, delay = 0.9, inView = false }: Props) {
  const animProps = inView
    ? {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true, amount: 0.5 as const },
      }
    : {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
      }

  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <motion.path
        d="M 18 42 C 22 14, 72 5, 160 5 C 248 5, 298 14, 306 42 C 298 70, 248 75, 160 75 C 72 75, 22 70, 18 42 Z"
        stroke="#E63946"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        {...animProps}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0, 1], delay }}
      />
    </svg>
  )
}
