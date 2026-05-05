# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export)
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture Overview

This is a **Next.js 14 App Router** marketing website for Fantastech, statically exported (`output: 'export'` in `next.config.mjs`). Image optimization is disabled due to static export.

### Routing

Uses dynamic `[locale]` segments for internationalization. Supported locales: `en`, `es`, `it`, `de`.

- `/` and `/[locale]/` → homepage
- `/taas` and `/[locale]/taas` → Talent as a Service product page

Each localized route exports `generateStaticParams()` to enumerate locales at build time.

### Internationalization

**next-intl v4** is the single translation system. Configuration:
- `i18n/request.ts` — `getRequestConfig` loads `messages/{locale}.json` at build time
- `next.config.mjs` — wrapped with `createNextIntlPlugin`
- `app/[locale]/layout.tsx` — calls `setRequestLocale(locale)` and provides `<NextIntlClientProvider messages={messages}>`

In every component, translations are accessed via:
```ts
const t = useTranslations(); // then t('hero.title'), t('nav.about'), etc.
```
For the current locale in client components: `useLocale()` from `next-intl`.

Language switching is handled by `LanguageSelector` using `useRouter().push()` with the new locale segment.

### SEO Infrastructure

All locale pages generate:
- Dynamic `lang` attribute via `app/[locale]/layout.tsx`
- Translated `<title>` and `<meta description>` via `generateMetadata` in each `[locale]/page.tsx`
- `hreflang` alternates via `alternates.languages` in metadata
- Root `/` and `/taas` redirect client-side to the locale-prefixed equivalents

`app/sitemap.ts` and `app/robots.ts` generate the sitemap and robots.txt at build time.

### Component Organization

- `components/ui/` — reusable UI primitives (Navbar, animated effects, etc.)
- `components/ui/taas/` — TaaS page-specific sections
- `components/` root — homepage sections (Hero, About, Services, Contact, Footer)
- `app/provider.tsx` — wraps the app in `next-themes` ThemeProvider
- `app/[locale]/taas/page.tsx` — server component that exports `generateMetadata`; actual UI is in `components/ui/taas/TaasPageContent.tsx`

### Styling

The existing codebase uses **Tailwind CSS** extensively. However, for any **new custom components**, follow the project-wide rule: use **SCSS Modules** (`.module.scss` files), not Tailwind utility classes. All CSS class names must be `kebab-case`. Existing components downloaded from shadcn/ui may keep their Tailwind classes.

Global styles and CSS custom properties are in `app/globals.css`.

### Key Libraries

- **Framer Motion / Motion** — animations throughout the site
- **COBE** — 3D globe in the Contact section
- **next-themes** — dark/light mode via class strategy
- **React Icons / Tabler Icons** — icon sets
- **`lib/utils.ts`** exports `cn()` — a `clsx` + `tailwind-merge` helper used by existing components
