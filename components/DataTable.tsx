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
  customHeader,
  minRowHeight = 8
}: DataTableProps<T>) {
  const tableRef = React.useRef<HTMLDivElement>(null);
  const [rowHeight, setRowHeight] = React.useState<string | undefined>(undefined);

  // Calculate optimal row height to fit all rows without vertical scroll
  React.useEffect(() => {
    const calculateRowHeight = () => {
      if (!tableRef.current || data.length === 0) return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!tableRef.current) return;

          const containerHeight = tableRef.current.clientHeight;
          const theadElement = tableRef.current.querySelector('thead');

          if (!theadElement || containerHeight === 0) {
            // Retry if not ready
            setTimeout(calculateRowHeight, 50);
            return;
          }

          const headerHeight = theadElement.clientHeight;
          const availableHeight = containerHeight - headerHeight;

          if (availableHeight > 0) {
            // Distribute available height evenly across all rows
            const calculatedHeight = Math.floor(availableHeight / data.length);

            // Apply configurable minimum row height
            const finalHeight = Math.max(calculatedHeight, minRowHeight);

            setRowHeight(`${finalHeight}px`);
          }
        });
      });
    };

    // Multiple calculation attempts to ensure accuracy
    const timer1 = setTimeout(calculateRowHeight, 0);
    const timer2 = setTimeout(calculateRowHeight, 100);
    const timer3 = setTimeout(calculateRowHeight, 300);

    // Use ResizeObserver for more reliable container size tracking
    let resizeObserver: ResizeObserver | null = null;
    if (tableRef.current) {
      resizeObserver = new ResizeObserver(calculateRowHeight);
      resizeObserver.observe(tableRef.current);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [data.length, customHeader, minRowHeight]);

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
    if (!rowHeight) return 'px-2 py-1';

    const heightNum = parseFloat(rowHeight);
    if (heightNum <= 15) return 'px-1.5 py-0.5';
    if (heightNum <= 20) return 'px-2 py-1';
    if (heightNum <= 28) return 'px-2 py-1.5';
    if (heightNum <= 35) return 'px-3 py-2';
    return 'px-3 py-2.5';
  };

  const getFontSize = (): string => {
    if (!rowHeight) return 'text-[9px]';

    const heightNum = parseFloat(rowHeight);
    if (heightNum <= 15) return 'text-[8px]';
    if (heightNum <= 20) return 'text-[9px]';
    if (heightNum <= 28) return 'text-[10px]';
    if (heightNum <= 35) return 'text-[11px]';
    return 'text-xs';
  };

  const cellPadding = getCellPadding();
  const fontSize = getFontSize();

  return (
    <div
      ref={tableRef}
      className="w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
      style={{ minWidth }}
    >
      <table className={cn('w-full border-collapse', fontSize, minWidth && `min-w-[${minWidth}]`)}>
        <thead className="sticky top-0 z-20">
          {customHeader ? (
            customHeader
          ) : (
            <tr className={headerStyles}>
              {columns.map((col, idx) => (
                <th
                  key={col.key}
                  className={cn(
                    'px-2 py-1 font-semibold border',
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
  inlineLegend?: Array<{ color: string; label: string }>;
  children: React.ReactNode;
}

export const TableContainer: React.FC<TableContainerProps> = ({ title, unit, source, legend, inlineLegend, children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Title Section */}
      {(title || unit || source || inlineLegend) && (
        <div className="flex-shrink-0 mb-1 flex items-baseline justify-between border-b border-slate-300 pb-0.5">
          {title && (
            <h3 className="text-xs font-bold text-webank-blue uppercase tracking-wide">
              {title}
            </h3>
          )}
          <div className="flex items-baseline gap-3 text-[9px] text-slate-500">
            {inlineLegend && inlineLegend.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <div className={cn('w-3 h-3 rounded', item.color)} />
                <span>{item.label}</span>
              </div>
            ))}
            {unit && <span>单位: {unit}</span>}
            {source && <span>数据来源: {source}</span>}
          </div>
        </div>
      )}

      {/* Table Section - Takes remaining space */}
      <div className="flex-grow min-h-0 overflow-hidden">
        {children}
      </div>

      {/* Legend Section */}
      {legend && legend.length > 0 && (
        <div className="flex-shrink-0 mt-0.5 flex justify-end items-center gap-3 text-[9px] text-slate-600">
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
