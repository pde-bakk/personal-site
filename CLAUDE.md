# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build to /dist
- `npm run preview` — preview production build locally
- CI runs: `npm ci && npm run build` on Node 20/22/24

## Architecture

React 19 + TypeScript SPA built with Vite, styled with TailwindCSS, deployed on Netlify.

### Single-Page Scroll Layout (App.tsx → Home.tsx)

No client-side routing between pages. App.tsx renders Navbar + Home + Footer. Home.tsx stacks all sections vertically: Hero, AboutSection, Experience, Projects, SkillsSection, Competitive, Contact. Navigation uses react-scroll for smooth scrolling to section IDs (`#hero`, `#about`, `#experience`, `#projects`, `#skills`, `#competitive`, `#contact`). Netlify redirects `/manoftheyear` → `/#about` and `/*` → `/index.html` for SPA fallback.

### Component Patterns

- **Section components** (`src/components/sections/`): Each section uses the `useInView` hook for scroll-triggered fade-in animations. Sections follow a consistent structure: gradient divider line, section title, responsive grid content.
- **UI components** (`src/components/ui/`): Reusable pieces — ProjectCard, TimelineItem, TabToggle, TechPill, MetricCard, MediaModal.
- **Data-driven sections**: Projects and Experience render from hardcoded data arrays, filtered by TabToggle categories (Work/Education, Work/University).
- No external state management — local `useState` only.

### Custom Hooks

- `useInView` (`src/hooks/useInView.ts`) — Intersection Observer wrapper returning `{ ref, isVisible }`. Used on every section for scroll animations.
- `UseTitle` (`src/components/UseTitle.tsx`) — sets document title dynamically.

### Internationalization (src/i18n/)

i18next with three locales: `en`, `nl`, `zh`. Translation files in `src/i18n/locales/{lang}/`. Namespaces: home, navigation, codingame, about. Fallback: English. Config in `src/i18n/config.js` uses ESM imports.

### Animation System (src/main.css)

CSS classes for scroll animations: `.fade-in-section` (opacity + translateY), `.fade-item` with `.stagger-1` through `.stagger-6` for progressive delays, `.timeline-dot` pulse animation. Driven by `useInView` hook adding `is-visible` class.

## Configuration

- **Tailwind** (`tailwind.config.js`): custom colors — `background_colour` (#0a192f), `footer_colour` (#09162a), `almost_black` (#040c16), `accent_purple` (#8B5CF6), `accent_cyan` (#06B6D4), `slate_body` (#94A3B8). Fonts: Inter (sans), JetBrains Mono (mono).
- **TypeScript**: strict mode, target ES2020, module ESNext, bundler resolution (Vite).
- **Vite** (`vite.config.js`): @vitejs/plugin-react, minimal config.
- **PWA**: service worker via Workbox (`workbox-config.js`), registered in `public/index.html`.
- **Analytics**: Google Analytics 4 via react-ga4, measurement ID from `VITE_GA_MEASUREMENT_ID` env var.

## Deployment

Netlify (keen-tereshkova-1ca09e). GitHub Actions CI on push to master and all PRs. Build output: `dist/`.
