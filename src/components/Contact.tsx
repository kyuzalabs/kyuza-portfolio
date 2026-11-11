import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import Reveal from './Reveal'
import MaskText from './MaskText'
import { profile } from '../data/profile'

interface Comment {
  id: string
  name: string
  text: string
  time: number
}

function timeAgo(t: number) {
  const s = Math.floor((Date.now() - t) / 1000)
  if (s < 60) return 'baru saja'
  if (s < 3600) return `${Math.floor(s / 60)}m lalu`
  if (s < 86400) return `${Math.floor(s / 3600)}j lalu`
  return `${Math.floor(s / 86400)}h lalu`
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [comName, setComName] = useState('')
  const [comText, setComText] = useState('')
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    try {
      setComments(JSON.parse(localStorage.getItem('kp_comments') || '[]'))
    } catch {
      /* noop */
    }
  }, [])

  const persist = (next: Comment[]) => {
    setComments(next)
    try {
      localStorage.setItem('kp_comments', JSON.stringify(next))
    } catch {
      /* noop */
    }
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.message.trim()) return
    const subject = encodeURIComponent(`[Portfolio] Pesan dari ${form.name || 'Anonim'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name || 'Anonim'} (${form.email || '-'})`)
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const post = (e: FormEvent) => {
    e.preventDefault()
    if (!comText.trim()) return
    const next: Comment[] = [
      { id: String(Date.now()), name: comName.trim() || 'Anonim', text: comText.trim(), time: Date.now() },
      ...comments,
    ]
    persist(next)
    setComText('')
    setComName('')
  }

  const remove = (id: string) => persist(comments.filter((c) => c.id !== id))

  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <MaskText
            className="font-sans text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight text-ink"
            lines={[<span>{profile.contact.title}</span>]}
          />
          <Reveal className="mt-4">
            <p className="mx-auto max-w-xl font-sans text-lg text-ink2">{profile.contact.lead}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="font-sans text-2xl font-bold text-ink">{profile.contact.sub}</h3>
            <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-ink2">
              {profile.contact.subLead}
            </p>
            <form onSubmit={submit} className="mt-7 space-y-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama"
                className="w-full rounded-xl border border-line bg-card px-4 py-3 font-sans text-sm text-ink placeholder:text-ink3 focus:border-ink3 focus:outline-none"
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-line bg-card px-4 py-3 font-sans text-sm text-ink placeholder:text-ink3 focus:border-ink3 focus:outline-none"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Pesan kamu..."
                rows={4}
                className="w-full rounded-xl border border-line bg-card px-4 py-3 font-sans text-sm text-ink placeholder:text-ink3 focus:border-ink3 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-ink px-7 py-3 font-mono text-sm text-bg transition hover:bg-neutral-300"
              >
                {sent ? '✓ Dibuka email...' : 'Send Message'}
              </button>
            </form>
          </Reveal>

          <div className="space-y-12">
            <Reveal delay={0.05}>
              <h3 className="font-sans text-2xl font-bold text-ink">Connect With Me</h3>
              <div className="mt-5 flex flex-col gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-line bg-card px-5 py-3.5 transition hover:bg-active"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line font-mono text-xs text-ink2">
                        {s.emoji}
                      </span>
                      <span className="font-sans font-semibold text-ink">{s.name}</span>
                    </div>
                    <span className="font-mono text-xs text-ink3">{s.handle}</span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-sans text-2xl font-bold text-ink">Comments</h3>
              <form onSubmit={post} className="mt-5 space-y-3">
                <input
                  value={comName}
                  onChange={(e) => setComName(e.target.value)}
                  placeholder="Nama (opsional)"
                  className="w-full rounded-xl border border-line bg-card px-4 py-3 font-sans text-sm text-ink placeholder:text-ink3 focus:border-ink3 focus:outline-none"
                />
                <textarea
                  value={comText}
                  onChange={(e) => setComText(e.target.value)}
                  placeholder="Leave your thoughts here"
                  rows={3}
                  className="w-full rounded-xl border border-line bg-card px-4 py-3 font-sans text-sm text-ink placeholder:text-ink3 focus:border-ink3 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-ink px-6 py-2.5 font-mono text-xs text-bg transition hover:bg-neutral-300"
                >
                  Post Comment
                </button>
              </form>
              <div className="mt-6 max-h-72 space-y-3 overflow-y-auto pr-1">
                {comments.length === 0 && <p className="font-mono text-xs text-ink3">// belum ada komentar</p>}
                {comments.map((c) => (
                  <div key={c.id} className="rounded-xl border border-line bg-card p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-semibold text-ink">{c.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-ink3">{timeAgo(c.time)}</span>
                        <button onClick={() => remove(c.id)} className="font-mono text-[10px] text-ink3 hover:text-ink">
                          hapus
                        </button>
                      </div>
                    </div>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-ink2">{c.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}