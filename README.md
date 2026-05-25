# Galaxy Volleyball Club (GVC)

A premium volleyball-club website with a futuristic, dark sports-tech aesthetic, built on a modern Next.js 15 stack.

## Stack

- **Next.js 15** (App Router) + React 19
- **TypeScript** in strict mode
- **Tailwind CSS** + `tailwindcss-animate` + design tokens (HSL CSS variables)
- **Framer Motion** — wired up and ready for premium animations
- **lucide-react** — iconography
- **shadcn/ui approach** — `class-variance-authority`, `clsx`, `tailwind-merge`, `@radix-ui/react-slot`
- **next/font** — Inter (UI) + Space Grotesk (display) + JetBrains Mono (mono)
- ESLint 9 (flat config) + Prettier with the Tailwind plugin

## Getting started

```bash
npm install
npm run dev        # dev server at http://localhost:3000
npm run build      # production build
npm run start      # production server
npm run lint       # ESLint
npm run type-check # tsc --noEmit
npm run format     # Prettier
```

## Architecture

```
src/
├─ app/                    # App Router: layouts, pages, globals.css
│  ├─ layout.tsx           # root layout, metadata, fonts
│  ├─ page.tsx             # home (Hero + Stats + About + Achievements + CTA)
│  ├─ not-found.tsx        # premium 404
│  └─ globals.css          # design tokens, base styles, utility classes
├─ components/
│  ├─ ui/                  # reusable primitives (Button, Card, Badge, Container, Section)
│  ├─ layout/              # Header, Footer, Logo, NavLink
│  ├─ sections/            # home-page sections
│  └─ effects/             # decorative effects (Glow, GridBackground, Noise, Reveal)
├─ config/
│  ├─ site.ts              # site name, description, links, keywords
│  └─ nav.ts               # header and footer navigation
├─ hooks/                  # useMounted, useMediaQuery (ready to extend)
├─ lib/
│  └─ utils.ts             # cn(), formatters, getSiteUrl()
└─ types/
   └─ index.ts             # domain types (NavItem, StatItem, FeatureItem, ...)
```

## Design system

- Dark theme **by default** (`<html className="dark">`); colors are defined via CSS variables in `globals.css`. A light theme can be added without refactors — simply extend the `:root` block with a `.light` theme.
- Color tokens: `background`, `surface`, `surface-elevated`, `primary`, `accent`, `nebula`, `star`, `muted`. Use them as `bg-primary`, `text-nebula`, `border-border`, etc.
- Complex visuals are exposed as utility classes: `glass`, `gradient-border`, `text-gradient`, `bg-grid`.
- Animations: `animate-fade-in`, `animate-fade-up`, `animate-pulse-soft`, `animate-float`, `animate-spin-slow`, `animate-shimmer`. They respect `prefers-reduced-motion`.

## Ready for animations

- **Framer Motion** is wired up with a ready-made `Reveal` component (`src/components/effects/reveal.tsx`) for scroll-triggered section reveals.
- `tailwind.config.ts` already defines keyframes for micro-animations.
- `optimizePackageImports` in `next.config.ts` keeps the bundle lean when importing Framer Motion and Lucide.

## Roadmap

- Add pages: `/team`, `/schedule`, `/news/[slug]`, `/contact`.
- Plug in a CMS (Sanity / Payload) or MDX for news.
- Add forms (`react-hook-form` + `zod`) and a training sign-up page.
- Wire up analytics (Vercel Analytics) and Vercel OG for social cards.

## Performance

- Images via `next/image` with AVIF/WebP.
- Fonts via `next/font` with `display: swap`, zero CLS.
- Glows and gradients are pure CSS — no JS calculations.
- Minimal client components — only `Header` and `Reveal` are marked `"use client"`.
