# OpenCut Arabic — Replit Project

## Overview
Arabic-localized fork of OpenCut (Next.js 16 video editor monorepo, Bun runtime) running on Replit.

## Stack
- **Runtime**: Bun 1.3.6 (from Nix)
- **Framework**: Next.js 16 (Turbopack), React 19.2.4
- **Styling**: Tailwind v4, shadcn/ui components
- **Database**: PostgreSQL via Drizzle ORM
- **Monorepo**: pnpm workspace style, primary app at `opencut/apps/web/`

## Workflow
`Start application` → `cd opencut/apps/web && exec bun run next dev --turbopack -p 5000 -H 0.0.0.0`

## Internationalization
Custom i18n in `opencut/apps/web/src/i18n/`:
- `dictionary.ts` — typed `DictionaryShape` covering all sections (header, hero, features, comparison, templates, testimonials, faq, pricing, ctaFinal, footer, locale). Both `en` and `ar` provided.
- `provider.tsx` — `useLocale()` React context hook, manages locale + cookie + RTL direction.
- `lang-bootstrap.tsx` — applies `?lang=` URL parameter to locale on mount.
- Cairo font loaded via `next/font` for Arabic.
- Direction toggled via `<html dir="rtl">` for Arabic; Tailwind v4 logical properties handle most layout swaps.

## Project Structure (key files added/modified)
```
opencut/apps/web/src/
├── app/page.tsx                          # Landing: Hero + 7 marketing sections
├── i18n/dictionary.ts                    # +400 lines: all marketing copy EN/AR
├── data/
│   ├── text-templates.ts                 # 19 Arabic text templates (Islamic, marketing, etc.)
│   └── content-templates.ts              # 12 video templates (YouTube, Reels, ads, religious...)
└── components/landing/
    ├── features.tsx                       # 6-feature grid with Lucide icons
    ├── comparison.tsx                     # comparison table (us vs typical SaaS)
    ├── templates-showcase.tsx             # reads from data/content-templates.ts
    ├── testimonials.tsx                   # 3 user testimonials
    ├── faq.tsx                            # Accordion-based FAQ
    ├── pricing.tsx                        # Community vs Self-host tiers
    └── cta-final.tsx                      # Closing call-to-action
```

## Key Decisions
- **No Docker**: Replaced Upstash Redis with in-memory store; PostgreSQL via Replit DB.
- **`allowedDevOrigins`** in `next.config.ts` lets Replit's iframe proxy serve the dev server.
- **Custom i18n** instead of `next-intl` route-based locales — avoids App Router refactor; switches via cookie + state without page reload.
- **`DictionaryShape` interface** instead of `as const` — enables both `en` and `ar` to satisfy the same type without literal-type incompatibility errors.
- **Data layer separation** (`src/data/`) — templates are plain TS data so they can be reused by both the landing page showcase and (future) the editor's template picker.

## Environment Variables
`opencut/apps/web/.env.local` contains placeholder values (DATABASE_URL, BETTER_AUTH_SECRET, etc.). Real secrets should be set via Replit Secrets before deployment.

## Status
- Phases 1-3 (env, run, basic i18n+RTL+Cairo): ✅ done
- Phase 4 (advanced Arabic features): 🟡 35% — text/content templates done; Whisper, AI features, resource libraries deferred (require paid APIs or external assets)
- Phase 5 (marketing landing page): ✅ done
- Phase 6 (testing/deployment): 🟡 60% — functional tests pass, deployment awaits user action

See `PROJECT_PLAN.md` (Arabic) for the full task-by-task breakdown.

## Known Issues
- Pre-existing hydration warnings from Radix UI menu IDs (non-functional).
- Pre-existing biome formatting issues in unrelated files (`utils/math.ts`, animations) — all our new files lint clean.
