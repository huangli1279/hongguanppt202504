import React from 'react';
import { uiColors } from '@/utils/chartColors';

export interface ColumnConfig {
  key: string;
  title: string;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any, index: number) => React.ReactNode;
}

export interface BaseTableProps {
  data: any[];
  columns: ColumnConfig[];
  title?: string;
  subtitle?: string;
  /** 是否显示斑马纹 */
  striped?: boolean;
  /** 是否显示边框 */
  bordered?: boolean;
  /** 表头背景色 */
  headerBgColor?: string;
  /** 表头文字颜色 */
  headerTextColor?: string;
  /** 行高模式: compact | default | relaxed | auto (自适应容器高度) */
  rowHeight?: 'compact' | 'default' | 'relaxed' | 'auto';
  /** 是否固定表头 */
  stickyHeader?: boolean;
  /** 高亮行索引 */
  highlightRows?: number[];
  /** 高亮行背景色 */
  highlightColor?: string;
  /** 日期列的key，自动格式化为yy-mm */
  dateColumn?: string;
}

const rowHeightClasses = {
  compact: 'py-1.5',
  default: 'py-2.5',
  relaxed: 'py-4',
  auto: '' // auto模式不使用固定padding
};

export const BaseTable: React.FC<BaseTableProps> = ({
  data,
  columns,
  title,
  subtitle,
  striped = true,
  bordered = false,
  headerBgColor = '#051c2c',
  headerTextColor = '#ffffff',
  rowHeight = 'compact',
  stickyHeader = false,
  highlightRows = [],
  highlightColor = 'rgba(0, 169, 244, 0.1)',
  dateColumn
}) => {
  const isAuto = rowHeight === 'auto';

  const getAlignment = (align?: string) => {
    switch (align) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  };

  const formatDate = (value: any): string => {
    if (!value) return '';
    if (typeof value === 'number') {
      const str = value.toString();
      if (str.length === 8) {
        return `${str.slice(2, 4)}-${str.slice(4, 6)}`;
      }
    }
    if (typeof value === 'string') {
      if (/^\d{4}-\d{2}$/.test(value)) {
        return `${value.slice(2, 4)}-${value.slice(5, 7)}`;
      }
      if (/^\d{8}$/.test(value)) {
        return `${value.slice(2, 4)}-${value.slice(4, 6)}`;
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return `${value.slice(2, 4)}-${value.slice(5, 7)}`;
      }
    }
    return String(value);
  };

  const getCellValue = (row: any, col: ColumnConfig, index: number) => {
    const value = row[col.key];
    if (col.render) {
      return col.render(value, row, index);
    }
    if (dateColumn && col.key === dateColumn) {
      return formatDate(value);
    }
    return value;
  };

  const isHighlighted = (index: number) => highlightRows.includes(index);

  // auto模式：使用flex布局让行自动填充
  if (isAuto) {
    return (
      <div className="w-full h-full flex flex-col">
        {(title || subtitle) && (
          <div className="mb-2 flex-shrink-0">
            {title && (
              <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-webank-subtext mt-1">{subtitle}</p>
            )}
          </div>
        )}
        <div className="flex-1 flex flex-col min-h-0 text-xs">
          {/* Header */}
          <div 
            className="flex flex-shrink-0 items-center"
            style={{ backgroundColor: headerBgColor }}
          >
            {columns.map((col, colIndex) => (
              <div
                key={col.key}
                className={`px-3 py-2 font-semibold text-center flex-1 flex items-center justify-center ${colIndex < columns.length - 1 ? 'border-r border-slate-400/30' : ''}`}
                style={{ color: headerTextColor }}
              >
                {col.title}
              </div>
            ))}
          </div>
          {/* Body - flex-1 让它填满剩余空间 */}
          <div className="flex-1 flex flex-col min-h-0">
            {data.map((row, rowIndex) => {
              const highlighted = isHighlighted(rowIndex);
              const stripedBg = striped && rowIndex % 2 === 1 ? 'bg-slate-50' : 'bg-white';
              
              return (
                <div
                  key={rowIndex}
                  className={`flex flex-1 items-center border-b border-slate-100 transition-colors hover:bg-slate-100 ${highlighted ? '' : stripedBg}`}
                  style={highlighted ? { backgroundColor: highlightColor } : undefined}
                >
                  {columns.map((col, colIndex) => (
                    <div
                      key={col.key}
                      className={`px-3 ${getAlignment(col.align)} flex-1 ${colIndex < columns.length - 1 ? 'border-r border-slate-200' : ''}`}
                      style={{ color: uiColors.tick }}
                    >
                      {getCellValue(row, col, rowIndex)}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 非auto模式：使用传统table
  return (
    <div className="w-full h-full flex flex-col">
      {(title || subtitle) && (
        <div className="mb-4 flex-shrink-0">
          {title && (
            <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs text-webank-subtext mt-1">{subtitle}</p>
          )}
        </div>
      )}
      <div className="flex-grow min-h-0 overflow-auto">
        <table 
          className={`w-full text-xs ${bordered ? 'border border-slate-200' : ''}`}
          style={{ tableLayout: 'fixed' }}
        >
          <thead className={stickyHeader ? 'sticky top-0 z-10' : ''}>
            <tr style={{ backgroundColor: headerBgColor }}>
              {columns.map((col, colIndex) => (
                <th
                  key={col.key}
                  className={`${rowHeightClasses[rowHeight]} px-3 font-semibold text-center align-middle ${bordered ? 'border border-slate-300' : ''} ${colIndex < columns.length - 1 ? 'border-r border-slate-400/30' : ''}`}
                  style={{ 
                    color: headerTextColor,
                    width: col.width || 'auto',
                    verticalAlign: 'middle'
                  }}
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => {
              const highlighted = isHighlighted(rowIndex);
              const stripedBg = striped && rowIndex % 2 === 1 ? 'bg-slate-50' : 'bg-white';
              
              return (
                <tr
                  key={rowIndex}
                  className={`${highlighted ? '' : stripedBg} transition-colors hover:bg-slate-100`}
                  style={highlighted ? { backgroundColor: highlightColor } : undefined}
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={col.key}
                      className={`${rowHeightClasses[rowHeight]} px-3 ${getAlignment(col.align)} ${bordered ? 'border border-slate-200' : 'border-b border-slate-100'} ${colIndex < columns.length - 1 ? 'border-r border-slate-200' : ''}`}
                      style={{ color: uiColors.tick }}
                    >
                      {getCellValue(row, col, rowIndex)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
