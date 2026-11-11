import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home'
      for (const l of links) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top <= 160) cur = l.id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-5">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-line bg-panel/80 px-5 py-3 backdrop-blur">
        <a href="#home" className="font-mono text-sm text-ink">
          {profile.logo}
        </a>
        <div className="flex items-center gap-5 md:gap-9">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative font-mono text-sm transition-colors ${
                active === l.id ? 'nav-active text-ink' : 'text-ink3 hover:text-ink2'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}