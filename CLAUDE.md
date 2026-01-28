# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based presentation application for WeBank's 2025 Q4 China Macroeconomic Report. It's a 34-slide slideshow with interactive charts and data visualizations covering GDP, production, consumption, investment, trade, fiscal policy, and financial data.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Flat File Structure
The project uses a flat structure with **no src folder**. All source files are in the root directory:
- `App.tsx` - Main slideshow controller
- `index.tsx` - React entry point
- `data.ts` - All chart data exports
- `types.ts` - All TypeScript type definitions
- `components/` - All slide and chart components
- `index.html` - HTML entry with Tailwind CDN config

### Slideshow System
**App.tsx** implements the core slideshow functionality:
- 34 total slides with wheel/scroll navigation
- Fixed **1280x720** (16:9) aspect ratio
- Automatic scaling based on viewport size
- Throttled scroll events (1s cooldown) to prevent rapid slide changes
- Right-side slide indicator showing current position

Each slide number maps to a specific component:
- Slide 1: Cover
- Slide 2: Table of Contents
- Slides 3, 7, 12, 17, 22, 26, 30: Section transitions
- Slides 4-6, 8-11, 13-16, 18-21, 23-25, 27-29, 31-33: Content slides
- Slide 34: Thank you

### Data-Driven Components
**Two-layer component architecture:**

1. **Content Slides** (SlideContent*.tsx): Layout slides that import multiple chart components and pass data from `data.ts`
2. **Chart Components** (*Chart.tsx): Reusable Recharts-based visualization components that receive typed data via props

**Adding new charts:**
1. Define the data type in `types.ts`
2. Export the data in `data.ts`
3. Create a chart component in `components/` that accepts the typed data as props
4. Import and use the chart in a content slide component

### Unified Table System
**All 10 table components now use the unified DataTable system** (`components/DataTable.tsx`):

**Key Features:**
- **Auto-adjusting row height**: Automatically reduces row height when there are many rows to avoid vertical scrollbars
- **Responsive sizing**: Tables fill available space and adjust font size/padding based on row count
- **Three style variants**: `default` (blue header), `bordered` (gray header), `minimal`
- **Sticky positioning**: Sticky headers and optional sticky first column for better navigation
- **Type-safe**: Full TypeScript support with generic data handling
- **Custom colorizers**: Flexible cell coloring based on value thresholds

**Auto Row Height Logic:**
- Row height is dynamically calculated based on container height and data row count
- Minimum row heights: 20px (≤15 rows), 18px (16-20 rows), 16px (>20 rows)
- Font size auto-adjusts: 10px → 9px → 8px as rows increase
- Cell padding auto-adjusts: py-1.5 → py-1 → py-0.5 → py-0.5 as rows increase
- **Result**: All data fits in one screen without vertical scrolling

**Creating new tables:**
```tsx
import { DataTable, TableContainer } from './DataTable';
import { createColumnsFromTimeSeries, transformToRowArray } from '../utils/tableHelpers';

export const MyTable: React.FC<Props> = ({ data }) => {
  const columns = createColumnsFromTimeSeries(data, '月份');
  const rows = transformToRowArray(data);

  return (
    <TableContainer title={data.title} unit={data.unit} source={data.source}>
      <DataTable
        data={rows}
        columns={columns}
        variant="default"
        stickyFirstColumn
        cellColorizer={conservativeColorizer}
      />
    </TableContainer>
  );
};
```

**Helper utilities** (`utils/tableHelpers.ts`):
- `createColumnsFromTimeSeries()` - Generate columns from time series data
- `transformToRowArray()` - Convert wide-format data to row arrays
- `growthRateColorizer()` - Standard growth rate color coding
- `conservativeColorizer()` - Conservative color coding (only extremes)
- `cpiCategoryColorizer()` - CPI-specific color rules

### Styling & Branding
- **Tailwind CSS** via CDN (configured in index.html)
- **WeBank color palette** (defined in index.html Tailwind config):
  - `webank-blue`: #051c2c (primary dark blue)
  - `webank-lightBlue`: #00a9f4 (accent light blue)
  - `webank-grey`: #f0f0f0 (background)
  - `webank-text`: #333333
  - `webank-subtext`: #666666
  - `webank-accent`: #005c8f
- Use inline Tailwind classes for all styling
- Custom animations defined with CSS keyframes in component style tags

### Type Safety
All data structures have corresponding TypeScript interfaces in `types.ts`. When creating new charts:
- Define the interface for the data structure first
- Export properly typed data from `data.ts`
- Ensure chart components accept the correct typed props

## Key Patterns

### Adding a New Slide
1. Create the slide component in `components/` (or reuse SlideContent pattern)
2. Import it in App.tsx
3. Add conditional render in the slide container: `{currentSlide === X && <YourSlide />}`
4. Update `TOTAL_SLIDES` constant in App.tsx

### Creating Chart Components
Chart components should:
- Accept data via props with proper TypeScript types
- Use Recharts library for visualizations
- Return JSX with dimensions that fit within slide layouts
- Use WeBank color palette for consistency
- Handle empty/missing data gracefully

Example structure:
```tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { YourDataType } from '../types';

interface YourChartProps {
  data: YourDataType[];
}

export const YourChart: React.FC<YourChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        {/* Chart configuration */}
      </BarChart>
    </ResponsiveContainer>
  );
};
```

### Content Slide Layout Pattern
Content slides typically follow this structure:
- Top decoration bar (2px blue line)
- Header with title and subtitle
- Key takeaways or bullet points (often in a grid)
- Charts section (1-3 charts)
- Footer with page info

## Important Notes

- **Path alias**: `@/` maps to the project root (configured in vite.config.ts and tsconfig.json)
- **No hot reload for data changes**: When editing `data.ts`, you may need to refresh the browser manually
- **16:9 aspect ratio**: All slides are designed for 1280x720px. Maintain this ratio when adding visual elements
- **Animation delays**: Use CSS animation delays for staggered fade-in effects on list items
- **Chinese language**: All content is in Chinese (Simplified). Maintain this when adding new text
