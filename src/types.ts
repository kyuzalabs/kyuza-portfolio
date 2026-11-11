export interface Project {
  title: string
  description: string
  tags: string[]
  emoji: string
  demo?: string
  repo?: string
  gradient: string
}

export interface Certificate {
  title: string
  issuer: string
  year: string
  emoji: string
}

export interface Tech {
  name: string
  level: string
  emoji: string
}