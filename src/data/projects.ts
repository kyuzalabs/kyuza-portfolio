import type { Project, Certificate, Tech } from '../types'

export const projects: Project[] = [
  {
    title: 'Kasir Coffee Shop',
    description: 'Aplikasi kasir (POS) coffee shop sebagai PWA — katalog menu, varian, keranjang, pembayaran, struk digital & riwayat. Realtime, ringan, jalan offline.',
    tags: ['React', 'TypeScript', 'Tailwind', 'PWA'],
    emoji: '☕',
    gradient: 'linear-gradient(135deg, #2b2b2b 0%, #171717 100%)',
    demo: 'https://kyuzalabs.github.io/kasir-coffee/',
    repo: 'https://github.com/kyuzalabs/kasir-coffee',
  },
  {
    title: 'Portfolio 3D',
    description: 'Portofolio interaktif dengan kartu foto 3D (Three.js), latar bintang, typewriter & cursor kustom. Responsif 360–1920px.',
    tags: ['React', 'Three.js', 'Framer Motion'],
    emoji: '🌀',
    gradient: 'linear-gradient(135deg, #202020 0%, #131313 100%)',
    demo: 'https://kyuzalabs.github.io/portfolio-3d/',
    repo: 'https://github.com/kyuzalabs/portfolio-3d',
  },
  {
    title: 'Kyuza Shop',
    description: 'Toko top-up game online — 28 produk, 7 kategori, keranjang, checkout & admin panel. Mini e-commerce end-to-end.',
    tags: ['Flask', 'SQLite', 'Bootstrap'],
    emoji: '🛒',
    gradient: 'linear-gradient(135deg, #262626 0%, #151515 100%)',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Mint Radar',
    description: 'Detektor NFT mint & airdrop otomatis — pantau katalog project, filter free-mint, dan log eksekusi claim ke Discord.',
    tags: ['Python', 'Telegram', 'Automation'],
    emoji: '📡',
    gradient: 'linear-gradient(135deg, #232323 0%, #141414 100%)',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Crypto Dashboard',
    description: 'Dashboard harga crypto realtime dengan grafik, watchlist & ringkasan portfolio. Bersih dan informatif.',
    tags: ['React', 'Chart.js', 'API'],
    emoji: '📈',
    gradient: 'linear-gradient(135deg, #252525 0%, #131313 100%)',
    demo: '#',
    repo: '#',
  },
  {
    title: 'Job Scraper Bot',
    description: 'Bot Telegram yang memantau lowongan (bounty/gig) dan mengirim notifikasi ke channel Discord secara otomatis.',
    tags: ['Python', 'Telegram Bot', 'Cron'],
    emoji: '🤖',
    gradient: 'linear-gradient(135deg, #222222 0%, #121212 100%)',
    demo: '#',
    repo: '#',
  },
]

export const certificates: Certificate[] = [
  { title: 'Belajar Dasar Pemrograman Web', issuer: 'Dicoding', year: '2025', emoji: '🎓' },
  { title: 'Frontend Web Development', issuer: 'Indosat Ooredoo Digital Camp', year: '2025', emoji: '📜' },
]

export const techstack: Tech[] = [
  { name: 'TypeScript', level: 'Advanced', emoji: '🟦' },
  { name: 'React.js', level: 'Advanced', emoji: '⚛️' },
  { name: 'Tailwind CSS', level: 'Advanced', emoji: '🌊' },
  { name: 'Next.js', level: 'Intermediate', emoji: '▲' },
  { name: 'Python', level: 'Intermediate', emoji: '🐍' },
  { name: 'Flask', level: 'Intermediate', emoji: '🧪' },
  { name: 'Three.js', level: 'Intermediate', emoji: '🧊' },
  { name: 'Framer Motion', level: 'Intermediate', emoji: '🌀' },
  { name: 'Node.js', level: 'Basic', emoji: '🟢' },
  { name: 'Git & GitHub', level: 'Intermediate', emoji: '🐙' },
]