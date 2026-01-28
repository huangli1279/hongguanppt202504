import { ColumnDefinition, CellColorStyle, IndustryGrowthTableData } from '../types';

/**
 * Creates column definitions from time series data
 * Useful for tables with dynamic time-based columns (months, quarters, etc.)
 *
 * @param data - Table data with timeSeries array
 * @param firstColumnLabel - Label for the first column (e.g., "行业", "类别")
 * @returns Array of column definitions
 */
export function createColumnsFromTimeSeries(
  data: IndustryGrowthTableData,
  firstColumnLabel: string = '行业'
): ColumnDefinition[] {
  const columns: ColumnDefinition[] = [
    { key: 'name', label: firstColumnLabel, align: 'left', sticky: true }
  ];

  data.timeSeries.forEach((period) => {
    columns.push({
      key: period,
      label: period,
      align: 'center'
    });
  });

  return columns;
}

/**
 * Transforms wide-format time series data to row array format
 * Converts { industryName: [val1, val2, ...] } to [{ name, period1, period2, ... }, ...]
 *
 * @param data - Industry growth table data
 * @returns Array of row objects
 */
export function transformToRowArray(data: IndustryGrowthTableData): Record<string, string | number | null>[] {
  const rows: Record<string, string | number | null>[] = [];

  Object.entries(data.industryData).forEach(([industryName, values]) => {
    const row: Record<string, string | number | null> = { name: industryName };

    data.timeSeries.forEach((period, idx) => {
      row[period] = values[idx];
    });

    rows.push(row);
  });

  return rows;
}

/**
 * Creates column definitions from industry keys (Transposed view)
 * Columns: Date/Period + Industries
 *
 * @param data - Table data with industryData map
 * @param firstColumnLabel - Label for the first column (e.g., "日期", "月份")
 * @returns Array of column definitions
 */
export function createColumnsFromIndustries(
  data: IndustryGrowthTableData,
  firstColumnLabel: string = '日期'
): ColumnDefinition[] {
  const columns: ColumnDefinition[] = [
    { key: 'name', label: firstColumnLabel, align: 'left', sticky: true, width: '120px' }
  ];

  Object.keys(data.industryData).forEach((industry) => {
    columns.push({
      key: industry,
      label: industry,
      align: 'center',
      width: '100px'
    });
  });

  return columns;
}

/**
 * Transforms data to transposed row array (Time series as rows)
 * Converts { industryName: [val1, val2] } to [{ name: period1, Ind1: val1, Ind2: val1 }, ...]
 *
 * @param data - Industry growth table data
 * @returns Array of row objects
 */
export function transformToTransposedRowArray(data: IndustryGrowthTableData): Record<string, string | number | null>[] {
  return data.timeSeries.map((period, idx) => {
    const row: Record<string, string | number | null> = { name: period };

    Object.entries(data.industryData).forEach(([industry, values]) => {
      row[industry] = values[idx];
    });

    return row;
  });
}


/**
 * Standard colorizer for growth rate tables
 * High growth (≥10%): Blue highlight
 * Medium growth (5-10%): Green highlight
 * Negative growth (<0): Red highlight
 * Normal (0-5%): Default
 */
export function growthRateColorizer(value: unknown): CellColorStyle {
  if (typeof value !== 'number') return {};

  if (value >= 10) {
    return {
      bgColor: 'bg-blue-50',
      textColor: 'text-webank-blue',
      fontWeight: 'bold'
    };
  }

  if (value >= 5) {
    return {
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      fontWeight: 'semibold'
    };
  }

  if (value < 0) {
    return {
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      fontWeight: 'semibold'
    };
  }

  return { textColor: 'text-slate-600' };
}

/**
 * Conservative colorizer for industrial/financial data
 * Only highlights extreme values (≥10% or <0)
 */
export function conservativeColorizer(value: unknown): CellColorStyle {
  if (typeof value !== 'number') return {};

  if (value >= 10) {
    return {
      bgColor: 'bg-blue-50',
      textColor: 'text-webank-blue',
      fontWeight: 'bold'
    };
  }

  if (value < 0) {
    return {
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      fontWeight: 'bold'
    };
  }

  return {};
}

/**
 * Colorizer for CPI categories (significant changes ≥1.0%)
 */
export function cpiCategoryColorizer(value: unknown): CellColorStyle {
  if (typeof value !== 'number') return {};

  const isSignificant = Math.abs(value) >= 1.0;

  if (isSignificant && value > 0) {
    return {
      bgColor: 'bg-blue-50',
      textColor: 'text-slate-700',
      fontWeight: 'bold'
    };
  }

  if (isSignificant && value < 0) {
    return {
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      fontWeight: 'bold'
    };
  }

  return { textColor: value < 0 ? 'text-red-600' : 'text-slate-700' };
}

/**
 * Conditional colorizer based on specific months
 * Used for PPI and other tables that only highlight recent months
 */
export function conditionalMonthColorizer(
  highlightMonths: string[],
  thresholds: { high: number; mid?: number; low: number }
) {
  return (value: unknown, rowIndex: number, colKey: string): CellColorStyle => {
    if (typeof value !== 'number') return {};

    // Check if this column should be highlighted
    const shouldHighlight = highlightMonths.some(month => colKey.includes(month));
    if (!shouldHighlight) return { textColor: 'text-gray-700' };

    if (value >= thresholds.high) {
      return {
        bgColor: 'bg-green-50',
        textColor: 'text-green-700',
        fontWeight: 'bold'
      };
    }

    if (thresholds.mid && value >= thresholds.mid) {
      return {
        bgColor: 'bg-green-50/50',
        textColor: 'text-green-600',
        fontWeight: 'semibold'
      };
    }

    if (value < thresholds.low) {
      return {
        bgColor: 'bg-red-50',
        textColor: 'text-red-600',
        fontWeight: 'semibold'
      };
    }

    return {};
  };
}

/**
 * Formats numeric values for table display
 * Handles nulls, decimals, and percentage formatting
 */
export function formatTableValue(value: unknown, decimals: number = 1): string {
  if (value === null || value === undefined) return '-';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toFixed(decimals);
  return String(value);
}
