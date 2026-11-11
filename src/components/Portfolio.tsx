import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import MaskText from './MaskText'
import { projects, certificates, techstack } from '../data/projects'
import type { Project } from '../types'

const tabs = ['Projects', 'Certificates', 'Tech Stack'] as const
type Tab = (typeof tabs)[number]

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-card transition-transform duration-300 hover:-translate-y-1.5 hover:border-ink3/40">
      <div className="flex h-40 items-center justify-center" style={{ background: p.gradient }}>
        <span className="text-6xl opacity-90 grayscale">{p.emoji}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-xl font-bold text-ink">{p.title}</h3>
        <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-ink2">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-ink3">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => onOpen(p)}
            className="rounded-full border border-line px-4 py-2 font-mono text-xs text-ink transition hover:bg-active"
          >
            Details
          </button>
          {p.demo && p.demo !== '#' ? (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-4 py-2 font-mono text-xs text-ink2 transition hover:bg-active"
            >
              Live ↗
            </a>
          ) : (
            <span className="cursor-not-allowed rounded-full border border-line/50 px-4 py-2 font-mono text-xs text-ink3/60">
              No Link
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-lg rounded-3xl border border-line bg-panel p-7"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-5 top-5 font-mono text-sm text-ink3 hover:text-ink">
          ✕
        </button>
        <div className="flex h-28 items-center justify-center rounded-2xl" style={{ background: p.gradient }}>
          <span className="text-5xl grayscale">{p.emoji}</span>
        </div>
        <h3 className="mt-5 font-sans text-2xl font-bold text-ink">{p.title}</h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-ink2">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-ink3">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.demo && p.demo !== '#' && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-5 py-2.5 font-mono text-xs text-bg hover:bg-neutral-300">
              Live ↗
            </a>
          )}
          {p.repo && p.repo !== '#' && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 font-mono text-xs text-ink hover:bg-active">
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>('Projects')
  const [sel, setSel] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <MaskText
            className="font-sans text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight text-ink"
            lines={[<span>Portfolio Showcase</span>]}
          />
          <Reveal className="mt-4">
            <p className="mx-auto max-w-xl font-sans text-lg text-ink2">
              Explore my journey through projects, certifications, and technical expertise.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-10 flex justify-center">
          <div className="flex w-full max-w-xl rounded-full border border-line bg-panel p-1.5">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 rounded-full px-3 py-2.5 font-mono text-sm transition ${
                  tab === t ? 'bg-active text-ink' : 'text-ink3 hover:text-ink2'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-12"
          >
            {tab === 'Projects' && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                  <ProjectCard key={p.title} p={p} onOpen={setSel} />
                ))}
              </div>
            )}

            {tab === 'Certificates' && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((c) => (
                  <div key={c.title} className="rounded-3xl border border-line bg-card p-6">
                    <span className="text-4xl grayscale">{c.emoji}</span>
                    <h3 className="mt-4 font-sans text-lg font-bold text-ink">{c.title}</h3>
                    <p className="mt-1 font-mono text-xs text-ink3">
                      {c.issuer} · {c.year}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {tab === 'Tech Stack' && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {techstack.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center justify-between rounded-2xl border border-line bg-card px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl grayscale">{t.emoji}</span>
                      <span className="font-sans font-semibold text-ink">{t.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-ink3">{t.level}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {tab === 'Projects' && (
          <Reveal className="mt-10 text-center">
            <button className="rounded-full border border-line px-8 py-3 font-mono text-sm text-ink transition hover:bg-active">
              See More
            </button>
          </Reveal>
        )}
      </div>

      <AnimatePresence>{sel && <Modal p={sel} onClose={() => setSel(null)} />}</AnimatePresence>
    </section>
  )
}