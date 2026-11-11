import Reveal from './Reveal'
import { profile, photo } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pb-28 pt-32 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink3">
              → {profile.available}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-sans text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold leading-[0.92] tracking-tight">
              <span className="block text-ink">{profile.roleLines[0]}</span>
              <span className="block text-ink2">{profile.roleLines[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 font-mono text-sm text-ink3">{profile.subtitle}</p>
            <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-ink2">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap gap-3">
              {profile.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-panel px-4 py-1.5 font-mono text-xs text-ink2"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-ink3">
              <a href="#portfolio" className="transition-colors hover:text-ink2">
                ↓ {profile.hero.explore}
              </a>
              <span>↗ {profile.hero.open}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
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
        </Reveal>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <p className="font-mono text-[11px] tracking-[0.3em] text-ink3">SCROLL ↓</p>
      </div>
    </section>
  )
}