import { motion } from 'framer-motion'
import MaskText from './MaskText'
import { profile, photo } from '../data/profile'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pb-28 pt-32 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink3"
          >
            → {profile.available}
          </motion.p>

          <MaskText
            onLoad
            className="mt-5 block font-sans text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold leading-[0.92] tracking-tight"
            stagger={0.12}
            delay={0.2}
            lines={[
              <span className="text-ink">{profile.roleLines[0]}</span>,
              <span className="text-ink2">{profile.roleLines[1]}</span>,
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease }}
            className="mt-5 font-mono text-sm text-ink3"
          >
            {profile.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease }}
            className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-ink2"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.75 } } }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {profile.tags.map((t) => (
              <motion.span
                key={t}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
                }}
                className="rounded-full border border-line bg-panel px-4 py-1.5 font-mono text-xs text-ink2"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-ink3"
          >
            <a href="#portfolio" className="transition-colors hover:text-ink2">
              ↓ {profile.hero.explore}
            </a>
            <span>↗ {profile.hero.open}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative -rotate-3">
            <div className="absolute -top-4 left-1/2 z-10 h-9 w-4 -translate-x-1/2 rounded-sm border border-neutral-400 bg-neutral-200 shadow-md" />
            <div className="bg-white p-3 pb-7 shadow-2xl">
              <img
                src={photo}
                alt={profile.name}
                className="grayscale-photo h-[320px] w-[250px] object-cover md:h-[430px] md:w-[330px]"
              />
              <p className="mt-3 text-center font-mono text-[11px] text-neutral-500">{profile.name}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="font-mono text-[11px] tracking-[0.3em] text-ink3"
        >
          SCROLL ↓
        </motion.p>
      </motion.div>
    </section>
  )
}