import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './Reveal'
import { profile } from '../data/profile'
import { useCountUp } from '../hooks/useCountUp'

function Stat({ value, label, started }: { value: number; label: string; started: boolean }) {
  const n = useCountUp(value, 1500, started)
  return (
    <div>
      <div className="font-mono text-4xl font-medium text-ink md:text-5xl">{n}</div>
      <div className="mt-1 font-mono text-[10px] tracking-[0.2em] text-ink3">{label}</div>
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const nameLines = profile.fullName.filter(Boolean)
  const display = nameLines.length ? nameLines : [profile.name]
  const spaced = display.map((w) => (w + ' ').trim()).join(' ')

  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink3">{profile.about.label}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 font-sans text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.9] tracking-tight">
            {display.map((w, i) => (
              <span key={i} className={`block ${i % 2 === 0 ? 'text-ink' : 'text-ink2'}`}>
                {w}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="max-w-xl font-sans text-[15px] leading-relaxed text-ink2">{profile.about.bio}</p>
            <p className="mt-6 max-w-xl border-l border-line pl-4 font-mono text-sm italic text-ink3">
              “{profile.about.quote}”
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-ink px-6 py-3 font-mono text-sm text-bg transition hover:bg-neutral-300"
              >
                Download CV
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-line px-6 py-3 font-mono text-sm text-ink transition hover:bg-panel"
              >
                View Projects
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div ref={ref} className="flex flex-col justify-between gap-10 md:gap-0">
              <div className="grid grid-cols-3 gap-6">
                {profile.about.stats.map((s) => (
                  <Stat key={s.label} value={s.value} label={s.label} started={inView} />
                ))}
              </div>
              <p className="mt-10 max-w-xs border-t border-line pt-6 font-mono text-xs leading-relaxed text-ink3">
                // {spaced}_{profile.roleLines.join(' ').replace(' ', '')}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}