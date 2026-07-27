# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based presentation slide deck application for displaying 2025 economic reports. It features:
- Full-screen, scaled slide presentations (1280x720 target resolution)
- Wheel/keyboard navigation with smooth transitions
- Interactive data visualizations using Recharts
- Component-based architecture with reusable base components

## Commands

**Development:**
```bash
npm run build    # Build for production
npm run preview  # Preview production build
```

**Important:** DO NOT start the dev server automatically. Only run it if explicitly requested.

## Architecture

### Application Structure

**Main App (`App.tsx`):**
- Central slide controller with navigation state management
- Handles mouse wheel, keyboard (arrow keys) navigation
- Responsive scaling logic: maintains 16:9 aspect ratio at 95% viewport fit
- Slide indicator on the right side (shows 3 visible slides max)
- Update `TOTAL_SLIDES` constant when adding/removing slides

**Slide Types:**
1. `CoverSlide` - Title/cover page
2. `TableOfContentsSlide` - Table of contents
3. `SectionTransitionSlide` - Section dividers (parameterized with id/title/subtitle)
4. Content slides (e.g., `ContentSlide04`) - Data visualization slides
5. `ThankYouSlide` - Closing slide

### Base Components

**`BaseContentSlide`** - Standard content slide layout:
- Props: `subtitle`, `title`, `cards`, `charts`, `footer`, `cardColumns`, `chartColumns`
- Default footer: "个金管理部-数据管理室"
- Supports both grid-based layout (cards + charts) and fully custom children
- Built-in fade-in animations

**`BaseLineChart`** - Reusable line chart component:
- Uses Recharts with custom styling
- Props: `data`, `title`, `subtitle`, `lines[]`, `yAxisDomain`, `showYAxis`, `showReferenceLine`, `legendOrder`
- Endpoint labels on the right side (last data point)
- Custom tooltip and legend rendering

**`BaseCard`** - Card component for metrics display

**`ChartContainer`** - Wrapper with staggered fade-in animation delays

### Data Organization

**`data/`** directory contains all chart data:
- `gdp.ts` - GDP trend and deflator data
- `index.ts` - Re-exports all data modules
- Add new data files here and import via `data/index.ts`

**Types (`types.ts`):**
- `GdpDataPoint` - GDP data structure
- `DeflatorDataPoint` - Deflator data by sector

### Styling

**Tailwind CSS (via CDN):**
- Custom theme with WeBank brand colors in `index.html`:
  - `webank-blue`: #051c2c (primary brand)
  - `webank-lightBlue`: #00a9f4
  - `webank-grey`: #f0f0f0
  - `webank-text`: #333333
  - `webank-subtext`: #666666
  - `webank-accent`: #005c8f
- Font stack: Inter + Noto Sans SC (loaded from Google Fonts)

**Path Alias:**
- Use `@/` for imports from project root (configured in `vite.config.ts` and `tsconfig.json`)

## Adding New Slides

1. Create component in `components/` (consider using `BaseContentSlide`)
2. Import in `App.tsx`
3. Add conditional render in main div (e.g., `{currentSlide === 6 && <NewSlide />}`)
4. Update `TOTAL_SLIDES` constant
5. If chart data is needed, add to `data/` directory

## Development Guidelines

- **必须复用已存在的Base Components** - Always reuse existing base components (`BaseContentSlide`, `BaseLineChart`, `BaseCard`, `ChartContainer`, etc.) for consistency
- Data should be centralized in `data/` directory, not inline in components
- Chart colors should use WeBank brand palette
- Maintain 1280x720 slide dimensions
- Animation delays for staggered effects: use `ChartContainer` with `delay` prop
- **Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.**

## Recent Refactoring History

The codebase has been recently refactored (Jan 2026) to:
- Extract reusable base components from specific slide implementations
- Consolidate slide layouts using composition patterns
- Improve data organization and maintainability
- Optimize chart rendering and animations
