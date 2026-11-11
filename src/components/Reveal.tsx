import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Reveal({
  children,
  delay = 0,
  y = 36,
  once = false,
  duration = 0.7,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  once?: boolean
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}