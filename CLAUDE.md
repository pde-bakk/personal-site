# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm start` — dev server on localhost:3000
- `npm run build` — production build to /build
- `npm test` — Jest test runner (watch mode)
- CI runs: `npm ci && npm run build` on Node 16/18/20

## Architecture

React 18 + TypeScript SPA built with Create React App, styled with TailwindCSS, deployed on Netlify.

### Routing (App.tsx)
React Router v6 with client-side routes: `/`, `/home`, `/about`, `/portfolio`, `/codingame`, `/work`, `/skills`. Netlify redirects handle SPA fallback and `/manoftheyear` → `/about`.

### Components (src/components/)
Functional components with hooks. No external state management — local useState only. Each page is a single component file (Home.tsx, About.tsx, Portfolio.tsx, etc.).

### Internationalization (src/i18n/)
i18next with three active locales: `en`, `nl`, `zh`. Translation files live in `src/i18n/locales/{lang}/`. Namespaces: home, navigation, codingame, about. Fallback language is English.

### Assets (src/assets/)
Images organized by category (Codam/, Codingame/, Projects/, Skills/). Each folder has an `index.tsx` that re-exports all images.

### Custom Hooks
- `UseTitle.tsx` — sets document title dynamically per page

## Configuration

- **Tailwind** (`tailwind.config.js`): custom colors — `background_colour` (#0a192f), `footer_colour` (#09162a), `almost_black` (#040c16)
- **TypeScript**: strict mode, target ES2016, noEmit (CRA handles compilation)
- **ESLint**: CRA defaults (react-app + react-app/jest), configured in package.json
- **PWA**: service worker via Workbox (`workbox-config.js`), manifest in public/

## Deployment

Netlify (keen-tereshkova-1ca09e). GitHub Actions CI on push to master and all PRs.
