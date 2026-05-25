# Galaxy Volleyball Club (GVC)

Премиальный сайт волейбольного клуба нового поколения. Футуристичная тёмная sports-tech эстетика, построенная на современном стеке.

## Стек

- **Next.js 15** (App Router) + React 19
- **TypeScript** в строгом режиме
- **Tailwind CSS** + `tailwindcss-animate` + дизайн-токены (HSL CSS-переменные)
- **Framer Motion** — заготовлен для будущих премиум-анимаций
- **lucide-react** — иконография
- **shadcn/ui-подход** — `class-variance-authority`, `clsx`, `tailwind-merge`, `@radix-ui/react-slot`
- **next/font** — Inter (UI) + Space Grotesk (display) + JetBrains Mono (моно)
- ESLint 9 (flat config) + Prettier с плагином Tailwind

## Запуск

```bash
npm install
npm run dev        # запуск дев-сервера на http://localhost:3000
npm run build      # production-сборка
npm run start      # запуск production-сервера
npm run lint       # ESLint
npm run type-check # tsc --noEmit
npm run format     # Prettier
```

## Архитектура

```
src/
├─ app/                    # App Router: layouts, pages, globals.css
│  ├─ layout.tsx           # корневой layout, метаданные, шрифты
│  ├─ page.tsx             # главная (Hero + Stats + About + Achievements + CTA)
│  ├─ not-found.tsx        # премиум 404
│  └─ globals.css          # дизайн-токены, базовые стили, утилитарные классы
├─ components/
│  ├─ ui/                  # переиспользуемые примитивы (Button, Card, Badge, Container, Section)
│  ├─ layout/              # Header, Footer, Logo, NavLink
│  ├─ sections/            # секции главной страницы
│  └─ effects/             # декоративные эффекты (Glow, GridBackground, Noise, Reveal)
├─ config/
│  ├─ site.ts              # имя, описание, ссылки, ключевые слова
│  └─ nav.ts               # навигация шапки и футера
├─ hooks/                  # useMounted, useMediaQuery (готовы к расширению)
├─ lib/
│  └─ utils.ts             # cn(), форматтеры, getSiteUrl()
└─ types/
   └─ index.ts             # доменные типы (NavItem, StatItem, FeatureItem...)
```

## Дизайн-система

- Тёмная тема **по умолчанию** (`<html className="dark">`), цвета описаны через CSS-переменные в `globals.css`. Светлая тема может быть добавлена без переделок — достаточно расширить блок `:root` темой `.light`.
- Цвета: `background`, `surface`, `surface-elevated`, `primary`, `accent`, `nebula`, `star`, `muted`. Используются как `bg-primary`, `text-nebula`, `border-border` и т.д.
- Сложные эффекты — через утилитарные классы `glass`, `gradient-border`, `text-gradient`, `bg-grid`.
- Анимации: `animate-fade-in`, `animate-fade-up`, `animate-pulse-soft`, `animate-float`, `animate-spin-slow`, `animate-shimmer`. Уважают `prefers-reduced-motion`.

## Готовность к анимациям

- Подключён **Framer Motion** + готовый компонент `Reveal` (`src/components/effects/reveal.tsx`) для появления секций при скролле.
- В `tailwind.config.ts` уже описаны keyframes для микро-анимаций.
- `optimizePackageImports` в `next.config.ts` минимизирует bundle при импорте Framer Motion и Lucide.

## Дальнейшее развитие

- Добавить страницы: `/team`, `/schedule`, `/news/[slug]`, `/contact`.
- Подключить CMS (Sanity / Payload) или MDX для новостей.
- Добавить формы (react-hook-form + zod) и страницу регистрации на тренировки.
- Подключить аналитику (Vercel Analytics) и Vercel OG для соц-карточек.

## Производительность

- Изображения — через `next/image` с AVIF/WebP.
- Шрифты — через `next/font` с `display: swap`, без CLS.
- Подсветка/градиенты сделаны на CSS, без JS-расчётов.
- Минимум клиентских компонентов; только `Header` и `Reveal` помечены `"use client"`.
