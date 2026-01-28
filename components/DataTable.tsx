import React from 'react';
import { DataTableProps, TableVariant } from '../types';
import { cn } from '../utils/cn';
import { formatTableValue } from '../utils/tableHelpers';

/**
 * Unified DataTable component with WeBank styling
 * Supports:
 * - Multiple style variants (default, bordered, minimal)
 * - Sticky header and optional sticky first column
 * - Custom cell colorization
 * - Responsive width/height
 * - Auto-adjusting row height to fit container (no vertical scroll)
 * - Type-safe generic data handling
 */
export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  variant = 'default',
  minWidth,
  stickyFirstColumn = false,
  cellColorizer,
  customHeader
}: DataTableProps<T>) {
  const tableRef = React.useRef<HTMLDivElement>(null);
  const [rowHeight, setRowHeight] = React.useState<string | undefined>(undefined);

  // Calculate optimal row height to fit all rows without vertical scroll
  React.useEffect(() => {
    const calculateRowHeight = () => {
      if (!tableRef.current || data.length === 0) return;

      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        if (!tableRef.current) return;

        const containerHeight = tableRef.current.clientHeight;

        // Try to get actual header height from DOM
        const theadElement = tableRef.current.querySelector('thead');
        const headerHeight = theadElement ? theadElement.offsetHeight : (customHeader ? 60 : 36);

        // Account for borders (1px per row + 1px for each cell border)
        const borderBuffer = data.length * 2;
        const availableHeight = containerHeight - headerHeight - borderBuffer;

        if (availableHeight > 0) {
          const calculatedHeight = availableHeight / data.length;

          // Set minimum row height to maintain readability
          // Smaller minimum for tables with many rows
          const minHeight = data.length > 20 ? 16 : data.length > 15 ? 18 : 20;
          const finalHeight = Math.max(calculatedHeight, minHeight);

          setRowHeight(`${finalHeight}px`);
        }
      });
    };

    // Initial calculation with delay to ensure container is sized
    const timer = setTimeout(calculateRowHeight, 100);

    // Recalculate on window resize
    window.addEventListener('resize', calculateRowHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateRowHeight);
    };
  }, [data.length, customHeader]);

  // Variant style mappings
  const getHeaderStyles = (variant: TableVariant): string => {
    switch (variant) {
      case 'bordered':
        return 'bg-slate-100 text-slate-600 border-slate-300';
      case 'minimal':
        return 'bg-slate-50 text-slate-500 border-slate-200';
      case 'default':
      default:
        return 'bg-webank-blue text-white border-slate-300';
    }
  };

  const getBorderStyles = (variant: TableVariant): string => {
    switch (variant) {
      case 'bordered':
        return 'border-slate-300';
      case 'minimal':
        return 'border-slate-200';
      case 'default':
      default:
        return 'border-slate-100';
    }
  };

  const headerStyles = getHeaderStyles(variant);
  const borderStyles = getBorderStyles(variant);

  // Calculate cell padding and font size based on row height
  const getCellPadding = (): string => {
    if (!rowHeight) return 'px-2 py-1.5';

    const heightNum = parseFloat(rowHeight);
    if (heightNum < 20) return 'px-1.5 py-0.5';
    if (heightNum < 24) return 'px-2 py-0.5';
    if (heightNum < 28) return 'px-2 py-1';
    return 'px-2 py-1.5';
  };

  const getFontSize = (): string => {
    if (!rowHeight) return 'text-[10px]';

    const heightNum = parseFloat(rowHeight);
    if (heightNum < 18) return 'text-[8px]';
    if (heightNum < 22) return 'text-[9px]';
    return 'text-[10px]';
  };

  const cellPadding = getCellPadding();
  const fontSize = getFontSize();

  return (
    <div
      ref={tableRef}
      className="flex-grow overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
      style={{ minWidth }}
    >
      <table className={cn('w-full h-full border-collapse', fontSize, minWidth && `min-w-[${minWidth}]`)}>
        <thead className="sticky top-0 z-20">
          {customHeader ? (
            customHeader
          ) : (
            <tr className={headerStyles}>
              {columns.map((col, idx) => (
                <th
                  key={col.key}
                  className={cn(
                    'px-2 py-2 font-semibold border',
                    borderStyles,
                    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left',
                    stickyFirstColumn && idx === 0 && 'sticky left-0 z-10',
                    stickyFirstColumn && idx === 0 && variant === 'default' && 'bg-webank-blue',
                    stickyFirstColumn && idx === 0 && variant === 'bordered' && 'bg-slate-100',
                    stickyFirstColumn && idx === 0 && variant === 'minimal' && 'bg-slate-50'
                  )}
                  style={{ width: col.width }}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="hover:bg-slate-50 transition-colors"
              style={{ height: rowHeight }}
            >
              {columns.map((col, colIdx) => {
                const value = row[col.key];
                const colorStyle = cellColorizer?.(value, rowIdx, col.key) || {};

                return (
                  <td
                    key={col.key}
                    className={cn(
                      cellPadding,
                      'border',
                      borderStyles,
                      col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left',
                      colorStyle.bgColor,
                      colorStyle.textColor || 'text-slate-600',
                      colorStyle.fontWeight === 'bold' && 'font-bold',
                      colorStyle.fontWeight === 'semibold' && 'font-semibold',
                      stickyFirstColumn && colIdx === 0 && 'sticky left-0 z-10 bg-white'
                    )}
                  >
                    {formatTableValue(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * TableContainer - Layout wrapper for DataTable
 * Provides:
 * - Title, unit, and source display
 * - Legend for color coding explanation
 * - Flex layout with auto-sizing
 */
interface TableContainerProps {
  title?: string;
  unit?: string;
  source?: string;
  legend?: Array<{ color: string; label: string }>;
  children: React.ReactNode;
}

export const TableContainer: React.FC<TableContainerProps> = ({ title, unit, source, legend, children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Title Section */}
      {(title || unit || source) && (
        <div className="flex-shrink-0 mb-2 flex items-baseline justify-between border-b border-slate-300 pb-1">
          {title && (
            <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide">
              {title}
            </h3>
          )}
          <div className="flex items-baseline gap-3 text-[9px] text-slate-500">
            {unit && <span>单位: {unit}</span>}
            {source && <span>数据来源: {source}</span>}
          </div>
        </div>
      )}

      {/* Table Section - Takes remaining space */}
      {children}

      {/* Legend Section */}
      {legend && legend.length > 0 && (
        <div className="flex-shrink-0 mt-1 flex justify-end items-center gap-3 text-[9px] text-slate-600">
          {legend.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <div className={cn('w-3 h-3 rounded', item.color)} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
