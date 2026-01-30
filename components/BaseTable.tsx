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
  /** 行高模式: compact | default | relaxed */
  rowHeight?: 'compact' | 'default' | 'relaxed';
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
  relaxed: 'py-4'
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
  rowHeight = 'default',
  stickyHeader = false,
  highlightRows = [],
  highlightColor = 'rgba(0, 169, 244, 0.1)',
  dateColumn
}) => {
  const getAlignment = (align?: string) => {
    switch (align) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  };

  // 格式化日期为 yy-mm 格式
  const formatDate = (value: any): string => {
    if (!value) return '';
    // 如果是数字格式如 20250331，转换为 25-03
    if (typeof value === 'number') {
      const str = value.toString();
      if (str.length === 8) {
        return `${str.slice(2, 4)}-${str.slice(4, 6)}`;
      }
    }
    // 如果已经是字符串，尝试解析
    if (typeof value === 'string') {
      // yyyy-mm 格式，转换为 yy-mm
      if (/^\d{4}-\d{2}$/.test(value)) {
        return `${value.slice(2, 4)}-${value.slice(5, 7)}`;
      }
      // yyyymmdd 格式
      if (/^\d{8}$/.test(value)) {
        return `${value.slice(2, 4)}-${value.slice(4, 6)}`;
      }
      // yyyy-mm-dd 格式
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
    // 如果是日期列，自动格式化
    if (dateColumn && col.key === dateColumn) {
      return formatDate(value);
    }
    return value;
  };

  const isHighlighted = (index: number) => highlightRows.includes(index);

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
              {columns.map((col, idx) => (
                <th
                  key={col.key}
                  className={`${rowHeightClasses[rowHeight]} px-3 font-semibold ${getAlignment(col.align)} ${bordered ? 'border border-slate-300' : ''}`}
                  style={{ 
                    color: headerTextColor,
                    width: col.width || 'auto'
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
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`${rowHeightClasses[rowHeight]} px-3 ${getAlignment(col.align)} ${bordered ? 'border border-slate-200' : 'border-b border-slate-100'}`}
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
