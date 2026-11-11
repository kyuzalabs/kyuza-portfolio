# Kyuza — Portfolio

Website portofolio personal bergaya **monokrom editorial** (dark, minimal, brutalist) — terinspirasi portofolio developer modern dengan tipografi raksasa, grid subtle, dan aksen monospace.

**Live:** https://kyuzalabs.github.io/kyuza-portfolio/

## Stack
- React + Vite + TypeScript
- Tailwind CSS v4 (tema custom monokrom)
- Framer Motion (reveal scroll + counter)
- Font: Syne (headings/body) + JetBrains Mono (details)

## Struktur
- `src/data/profile.ts` → identitas, role, bio, sosmed, statistik
- `src/data/projects.ts` → project, sertifikat, tech stack
- `src/components/` → Navbar, Hero, About, Portfolio, Contact, Footer

## Jalankan lokal
```bash
npm install
npm run dev        # dev server
npm run build      # typecheck + build ke dist/
npm run preview    # lihat hasil build
```

## Kustomisasi
Semua konten ada di `src/data/`. Ganti nama, role, foto (`public/images/profile.jpg`), project, link sosial, dan statistik di file-file itu — tanpa perlu sentuh komponen.

## Deploy ke GitHub Pages
```bash
bash deploy.sh
```

## Catatan
- Form kontak memakai `mailto:` (tanpa backend); ganti email di `profile.contact.email`.
- Kolom komentar tersimpan lokal (localStorage browser pengunjung).
- Foto polaroid di-grayscale biar nyatu sama tema; hapus class `grayscale-photo` di `Hero.tsx` kalau mau full warna.