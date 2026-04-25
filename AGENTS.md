# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite, http://localhost:5173)
npm run build    # TypeScript compile + Vite build
npm run preview  # Preview production build
```

No test suite or linter is configured.

## Architecture

This is a React + TypeScript + Vite presentation app that renders a 40-slide macroeconomic report (China 2025 GDP) in the browser. The slide deck is fixed at 1280×720px and scaled to fit the viewport.

**Navigation** (`App.tsx`): Wheel scroll, arrow keys, and slide index state control which slide component is rendered. `TOTAL_SLIDES = 40` must be updated when adding/removing slides.

**Slide components** (`components/`):
- `BaseContentSlide.tsx` — the primary layout shell used by almost all content slides. Accepts `title`, `subtitle`, `cards`, `charts`, `footer`, `cardColumns`, `chartColumns`, or `children` for full custom layout.
- `BaseCard.tsx` — stat/highlight card used inside `BaseContentSlide` card grids.
- `BaseLineChart.tsx`, `BaseBarChart.tsx`, `BaseStackedBarChart.tsx` — thin wrappers around Recharts with WeBank styling.
- `BaseTable.tsx` — styled table component.
- `BaseSectionTransitionSlide.tsx` — section divider slides (takes `id`, `title`, `subtitle`).
- `ContentSlideNN.tsx` — individual slides, numbered to match position in the deck (gaps exist where section-transition slides occupy a slot, e.g., slides 10, 17, 23, 28, 33, 35 are `BaseSectionTransitionSlide` instances in `App.tsx`).

**Data** (`data/`): Each file exports typed arrays for a single economic indicator (e.g., `gdp.ts`, `cpi.ts`, `pmi.ts`). `data/index.ts` re-exports all of them. Data is static — no API calls.

**Styling**: Tailwind CSS with custom WeBank design tokens (`webank-blue`, `webank-subtext`). Animations are defined inline via `<style>` tags inside `BaseContentSlide`.

**Utils**:
- `utils/cn.ts` — `clsx`/`tailwind-merge` helper.
- `utils/chartColors.ts` — shared color palette for Recharts.

## IMPORTANT: Component Reuse Rule

**All slide components MUST reuse existing Base components.** Never create custom chart, card, table, or layout implementations from scratch. Always use:
- `BaseContentSlide` for slide layout
- `BaseCard` for stat/highlight cards
- `BaseLineChart`, `BaseBarChart`, `BaseStackedBarChart` for charts
- `BaseTable` for tables
- `BaseSectionTransitionSlide` for section dividers

If a Base component lacks a needed feature, extend it by adding a new prop — do not bypass it.

## Conventions

- Each new content slide gets the next sequential number and is wired into `App.tsx` with a `{currentSlide === N && <ContentSlideNN />}` conditional.
- Section-transition slides reuse `BaseSectionTransitionSlide` directly in `App.tsx` rather than creating a dedicated component file.
- All chart data lives in `data/` and is imported directly into the slide component that needs it.
- The default `footer` prop on `BaseContentSlide` is `'个金管理部-数据管理室'`; override per slide if needed.
