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

Open the live showcase at [`/design`](http://localhost:3000/design) — every primitive, token and effect is documented there.

**Color tokens** (HSL CSS variables in `globals.css`):

- **Surface**: `background`, `surface`, `surface-elevated`, `surface-overlay`, `muted`
- **Borders**: `border`, `border-subtle`, `border-strong`
- **Brand**: `primary`, `accent`, `nebula`, `star`
- **Neon accents**: `neon-blue`, `neon-cyan`, `neon-violet`, `neon-magenta`, `neon-pink`, `neon-lime`
- **Semantic**: `success`, `warning`, `info`, `destructive`

Use them as Tailwind classes — `bg-primary`, `text-neon-cyan`, `border-border-strong`, `shadow-glow-magenta`, etc.

**Typography**:

- `font-display` — Space Grotesk (headlines)
- `font-sans` — Inter (UI & body)
- `font-mono` — JetBrains Mono (code, metadata, tags)
- Type scale (`text-2xs` → `text-8xl`) ships with paired line-heights and letter-spacing.

**Spacing**:

- 4 px base scale + Tailwind defaults
- Extended: `space-18`, `space-22`, `space-26`, `space-30`
- Fluid semantic tokens: `space-section` (`clamp(4rem, 8vw, 7.5rem)`), `space-gutter` (`clamp(1rem, 4vw, 2.5rem)`)

**Reusable primitives** (`src/components/ui/`):

- `Button` — 7 variants × 7 sizes, with `loading`, `leftIcon`, `rightIcon`, and `asChild`
- `Badge` — 9 variants (incl. `neon`, `live`, semantic)
- `Card` — 5 variants (`default`, `elevated`, `bordered`, `ghost`, `neon`) with `interactive` lift
- `Input`, `Textarea`, `Label` — dark-tuned form primitives
- `Spinner`, `Container`, `Section`

**Effects & utility classes**:

- `.glass`, `.glass-strong`, `.glass-soft` — glassmorphism surfaces
- `.gradient-border`, `.holographic-border` — animated hairline borders
- `.text-gradient`, `.text-gradient-neon`, `.text-glow`, `.text-glow-cyan` — text effects
- `.glow-primary`, `.glow-cyan`, `.glow-violet`, `.glow-magenta` — directional glows
- `.bg-grid`, `.bg-dots`, `.bg-holographic`, `.scan-line-overlay` — backgrounds
- `.hover-lift` — universal premium hover micro-animation
- `.hairline` — subtle gradient divider
- Shadows: `shadow-glow`, `shadow-glow-strong`, `shadow-glow-cyan`, `shadow-glow-violet`, `shadow-glow-magenta`, `shadow-glow-lime`, `shadow-elevated`

**Animations**:

- Keyframes: `animate-fade-in`, `animate-fade-up`, `animate-pulse-soft`, `animate-float`, `animate-spin-slow`, `animate-shimmer`, `animate-glow-pulse`, `animate-gradient-shift`, `animate-scan-line`
- Timing: `ease-smooth`, `ease-snap`, `ease-bounce`
- All animations respect `prefers-reduced-motion`.

## Ready for animations

- **Framer Motion** is wired up with a ready-made `Reveal` component (`src/components/effects/reveal.tsx`) for scroll-triggered section reveals.
- `tailwind.config.ts` already defines keyframes for micro-animations.
- `optimizePackageImports` in `next.config.ts` keeps the bundle lean when importing Framer Motion and Lucide.

## Deploy to GitHub Pages

The repo ships with a GitHub Actions workflow at `.github/workflows/deploy.yml` that produces a fully static build and publishes it to GitHub Pages.

**One-time setup** (GitHub UI):

1. Push your code to `main` (or `master`).
2. Open **Repository → Settings → Pages**.
3. Set **Source** to **GitHub Actions**.

That's it — every push to `main`/`master` re-deploys the site at:

```
https://<your-username>.github.io/<repo-name>/
```

**How it works**:

- When `GITHUB_ACTIONS=true`, `next.config.ts` switches to `output: "export"`, sets `basePath` and `assetPrefix` from the repo name, disables image optimization, and writes a static site to `./out/`.
- The workflow adds `.nojekyll` so GitHub serves the files as-is (without Jekyll processing) — that's why you previously saw the README instead of the site.
- Local `npm run dev` and Vercel deployments are unaffected — those flags only apply inside GitHub Actions.

**Custom domain / different basePath**:

Set `NEXT_PUBLIC_BASE_PATH` in the workflow (e.g. `""` for a custom domain at root, or any other prefix).

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
