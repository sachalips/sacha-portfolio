'use client'
import { motion } from 'framer-motion'

interface Props {
  className?: string
  animated?: boolean
}

export default function MarkerUnderline({ className = '', animated = true }: Props) {
  return (
    <svg
      viewBox="0 0 400 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`w-full h-3 ${className}`}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M 2 6 C 60 3, 150 9, 240 5 C 320 2, 375 8, 398 6"
        stroke="#E63946"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      />
    </svg>
  )
}
