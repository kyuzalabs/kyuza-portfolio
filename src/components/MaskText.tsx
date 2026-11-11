import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

/**
 * MaskText — judul/besaran muncul bertahap (stagger) dengan efek "slide up dari balik mask".
 * Defaultnya re-trigger tiap kali masuk viewport. `onLoad` buat animasi saat halaman dibuka.
 */
export default function MaskText({
  lines,
  className = '',
  stagger = 0.08,
  delay = 0,
  onLoad = false,
}: {
  lines: ReactNode[]
  className?: string
  stagger?: number
  delay?: number
  onLoad?: boolean
}) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }
  const item = {
    hidden: { y: '110%' },
    show: { y: '0%', transition: { duration: 0.85, ease } },
  }

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      {...(onLoad
        ? { animate: 'show' }
        : { whileInView: 'show', viewport: { once: false, amount: 0.6 } })}
    >
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span variants={item} className="block will-change-transform">
            {l}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}