'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { damping: 28, stiffness: 250 })
  const springY = useSpring(cursorY, { damping: 28, stiffness: 250 })

  useEffect(() => {
    if (window.innerWidth < 1024) return

    setVisible(true)

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovered(!!el.closest('a, button, [data-cursor-hover]'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [cursorX, cursorY])

  if (!visible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-multiply"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        className="rounded-full border border-ink/50 bg-transparent"
        animate={{ width: hovered ? 44 : 18, height: hovered ? 44 : 18 }}
        transition={{ type: 'spring', damping: 22, stiffness: 320 }}
      />
    </motion.div>
  )
}
