# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

Next.js 16 / React 19 is newer than most training data: check `node_modules/next/dist/docs/` (`01-app/` for the App Router) before using a Next API you're unsure of.

## Language rule

All code is written in English: identifiers, comments, commit messages and new file names. All user-facing UI text (copy, labels, `aria-label`s, metadata titles and descriptions) is in Spanish. The Spanish route folder names (`servicios`, `sobre_nosotros`, …) are an exception because they are the public URLs.

## Commands

Uses pnpm on Node.js 24 (there is also a stale `package-lock.json`; use pnpm).

- `pnpm dev`: dev server at http://localhost:3000
- `pnpm build`: production build; also the closest thing to a full check today
- `pnpm start`: serve the production build
- `pnpm exec tsc --noEmit`: type-check

The README lists `pnpm lint` and `pnpm typecheck`, but `package.json` defines neither script, and there is no ESLint config and no test suite. The `testing` branch CI (`testing.yml`, triggered from `.github/workflows/develop.yml`) expects lint/typecheck/test/build, so add those scripts there if you add the tooling.

## Branch flow

`develop` → `testing` → `main`. Work on `develop`; every push to `develop` is auto-merged into `testing` by `.github/workflows/develop.yml`, whose CI then opens a PR to `main`. A merge conflict between `develop` and `testing` fails that workflow and must be resolved manually.

## Architecture

Marketing site for Neurovix (Spanish-language, `lang="es"`), recently migrated from Astro to the Next.js App Router. All pages are static server components; only `Navbar` and `ThemeToggle` are client components.

- **Content lives in `src/lib/site.ts`**: contact details, nav links, stats, clients, services, process, projects, values. Pages and sections render from these arrays, so most copy changes belong there, not in JSX. `ProjectId` there is a closed union that `src/components/ProjectMockup.tsx` switches over: adding a project means adding an id, a `PROJECTS` entry and a mockup.
- **Routes** (`src/app/`): `/`, `/servicios`, `/proyectos`, `/sobre_nosotros`, `/contacto`, plus `/landing`, a standalone page for Meta ads campaigns. Route folder names are the Spanish URLs; keep them as-is. Each page exports its own `metadata`; the root layout sets the `%s | Neurovix` title template.
- **Components**: `ui.tsx` holds primitives (`Container`, `Section`, `SectionHeading`, `ButtonLink`/`buttonClass`, `Tag`, `IconBadge`, `PageHeader`); `sections.tsx` holds data-driven page sections reused across pages (`ServicesSection`, `ProjectsSection`, `CTASection`, …). `Icon.tsx` is a map of inline SVG paths: add a path there for a new icon (its keys form the `IconName` type).
- **Images**: served from `public/` (`/companies/*`, `/icons/*`, service photos) via `next/image`.

## Theming (Tailwind v4, no tailwind config file)

Tokens are defined in `src/app/globals.css` with `@theme` and shared with store.neurovix.app. The theme is the `data-theme` attribute on `<html>`, set before paint by an inline script in `layout.tsx` (dark by default, `localStorage["neurovix-theme"]` overrides) and flipped by `ThemeToggle`; the `dark:` variant is a custom variant keyed to it.

Dark mode works by **remapping Tailwind's `white` and `neutral-*` palette**, so write `bg-white`, `bg-neutral-50`, `text-neutral-900`, etc. once and both themes follow. Don't use `text-white`/`text-black` for theme text: use `text-neutral-900`, and `text-ink` on accent (blue) fills. Accent colors are `accent`, `accent-hover`, `accent-text`; `paper` is a fixed light tile (used behind client logos).
