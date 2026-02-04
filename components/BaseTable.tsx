import React from 'react';
import { uiColors } from '@/utils/chartColors';
import { cn } from '@/utils/cn';

export interface ColumnConfig {
  key: string;
  title: string;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: any, index: number) => React.ReactNode;
  /** 子列，用于二级表头 */
  children?: ColumnConfig[];
  /** 是否高亮列 */
  highlight?: boolean;
  /** 自定义红色着色阈值 */
  redThreshold?: number;
  /** 自定义绿色着色阈值 */
  greenThreshold?: number;
}

export interface BaseTableProps {
  data: any[];
  columns: ColumnConfig[];
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** 标题区自定义类名 */
  titleBlockClassName?: string;
  /** 副标题自定义类名 */
  subtitleClassName?: string;
  /** 表格自定义类名 */
  tableClassName?: string;
  /** 单元格自定义类名 */
  cellClassName?: string;
  /** 是否显示斑马纹 */
  striped?: boolean;
  /** 是否显示边框 */
  bordered?: boolean;
  /** 表头背景色 */
  headerBgColor?: string;
  /** 表头文字颜色 */
  headerTextColor?: string;
  /** 表体文字颜色 */
  bodyTextColor?: string;
  /** 行高模式: compact | default | relaxed | auto (自适应容器高度) | dense (极简紧凑) */
  rowHeight?: 'compact' | 'default' | 'relaxed' | 'auto' | 'dense';
  /** 是否固定表头 */
  stickyHeader?: boolean;
  /** 高亮行索引 */
  highlightRows?: number[];
  /** 高亮行背景色 */
  highlightColor?: string;
  /** 高亮列背景色 */
  highlightColumnColor?: string;
  /** 日期列的key，自动格式化为yy-mm */
  dateColumn?: string;
  /** 是否启用数值自动着色（正值红色，负值绿色，null显示"-"） */
  colorizeNumbers?: boolean;
  /** 自定义行类名 */
  getRowClassName?: (row: any, index: number) => string;
}

const rowHeightClasses = {
  dense: 'py-0.5 text-[10px]',
  compact: 'py-1.5',
  default: 'py-2.5',
  relaxed: 'py-4',
  auto: '' // auto模式不使用固定padding
};

// 判断是否使用二级表头
const hasGroupedColumns = (columns: ColumnConfig[]): boolean => {
  return columns.some(col => col.children && col.children.length > 0);
};

// 获取所有叶子节点列（用于渲染数据单元格）
const getLeafColumns = (columns: ColumnConfig[]): ColumnConfig[] => {
  const leafs: ColumnConfig[] = [];
  columns.forEach(col => {
    if (col.children && col.children.length > 0) {
      leafs.push(...getLeafColumns(col.children));
    } else {
      leafs.push(col);
    }
  });
  return leafs;
};

// 计算分组边界位置（返回应该显示边框的叶子列索引集合）
const getGroupBoundaries = (columns: ColumnConfig[]): Set<number> => {
  const boundaries = new Set<number>();
  let leafIndex = 0;

  columns.forEach((col, groupIndex) => {
    const childCount = col.children?.length || 1;
    leafIndex += childCount;
    // 在每个分组后添加边界（除了最后一个分组）
    if (groupIndex < columns.length - 1) {
      boundaries.add(leafIndex - 1); // 该分组最后一个子列的索引
    }
  });

  return boundaries;
};

export const BaseTable: React.FC<BaseTableProps> = ({
  data,
  columns,
  title,
  subtitle,
  titleBlockClassName,
  subtitleClassName,
  tableClassName,
  cellClassName,
  striped = true,
  bordered = false,
  headerBgColor = '#051c2c',
  headerTextColor = '#ffffff',
  bodyTextColor,
  rowHeight = 'auto',
  stickyHeader = true,
  highlightRows = [],
  highlightColor = 'rgba(0, 169, 244, 0.1)',
  highlightColumnColor = 'rgba(0, 169, 244, 0.12)',
  dateColumn,
  colorizeNumbers = true,
  getRowClassName
}) => {
  const isAuto = rowHeight === 'auto';
  const isGrouped = hasGroupedColumns(columns);
  const leafColumns = isGrouped ? getLeafColumns(columns) : columns;
  const groupBoundaries = isGrouped ? getGroupBoundaries(columns) : new Set<number>();
  const highlightedColumns = React.useMemo(
    () => new Set(leafColumns.filter(col => col.highlight).map(col => col.key)),
    [leafColumns]
  );

  const getAlignment = (align?: string) => {
    switch (align) {
      case 'center': return 'text-center justify-center';
      case 'right': return 'text-right justify-end';
      default: return 'text-left justify-start';
    }
  };

  const formatDate = (value: any): string => {
    if (!value) return '';
    if (typeof value === 'number') {
      const str = value.toString();
      if (str.length === 8) {
        return `${str.slice(2, 4)}${str.slice(4, 6)}`;
      }
    }
    if (typeof value === 'string') {
      if (/^\d{4}-\d{2}$/.test(value)) {
        return `${value.slice(2, 4)}${value.slice(5, 7)}`;
      }
      if (/^\d{8}$/.test(value)) {
        return `${value.slice(2, 4)}${value.slice(4, 6)}`;
      }
      if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return `${value.slice(2, 4)}${value.slice(5, 7)}`;
      }
    }
    return String(value);
  };

  // 收集所有数值并计算分位数阈值
  const allNumbers = React.useMemo(() => {
    if (!colorizeNumbers) return { p20: 0, p80: 0 };

    const nums: number[] = [];
    data.forEach(row => {
      leafColumns.forEach(col => {
        if (col.key !== dateColumn && !col.render) {
          const val = row[col.key];
          if (typeof val === 'number' && !isNaN(val)) {
            nums.push(val);
          }
        }
      });
    });

    if (nums.length === 0) return { p20: 0, p80: 0 };

    nums.sort((a, b) => a - b);
    const p20Index = Math.floor(nums.length * 0.2);
    const p80Index = Math.floor(nums.length * 0.8);

    return {
      p20: nums[p20Index],
      p80: nums[p80Index]
    };
  }, [data, leafColumns, dateColumn, colorizeNumbers]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
  };

  // 数值着色渲染：前20%红色，后20%绿色，其他正常
  const renderColorizedNumber = (value: any, customRed?: number, customGreen?: number): React.ReactNode => {
    if (value === null || value === undefined) {
      return <span className="text-slate-400">-</span>;
    }
    const num = typeof value === 'number' ? value : parseFloat(value);
    if (isNaN(num)) {
      return value;
    }
    
    const formatted = formatNumber(num);
    const redLimit = customRed ?? allNumbers.p80;
    const greenLimit = customGreen ?? allNumbers.p20;
    
    if (num >= redLimit) {
      return <span className="text-red-500">{formatted}</span>;
    } else if (num <= greenLimit) {
      return <span className="text-green-600">{formatted}</span>;
    }
    return <span className="text-slate-600">{formatted}</span>;
  };

  const getCellValue = (row: any, col: ColumnConfig, index: number) => {
    const value = row[col.key];
    // 优先使用自定义render
    if (col.render) {
      return col.render(value, row, index);
    }
    // 日期列格式化
    if (dateColumn && col.key === dateColumn) {
      return formatDate(value);
    }
    // 数值处理（非日期列的数值）
    if (typeof value === 'number') {
      if (colorizeNumbers) {
        return renderColorizedNumber(value, col.redThreshold, col.greenThreshold);
      }
      return formatNumber(value);
    }

    // 处理空值
    if (value === null || value === undefined) {
      return <span className="text-slate-400">-</span>;
    }
    return value;
  };

  const isHighlighted = (index: number) => highlightRows.includes(index);
  const isColumnHighlighted = (col: ColumnConfig) => highlightedColumns.has(col.key);

  // auto模式：使用flex布局让行自动填充
  if (isAuto) {
    return (
      <div className="w-full h-full flex flex-col">
        {(title || subtitle) && (
          <div className={cn('mb-1 flex-shrink-0', titleBlockClassName)}>
            {title && (
              <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className={cn('text-xs text-webank-subtext mt-1', subtitleClassName)}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="flex-1 flex flex-col min-h-0 text-xs">
          {/* Header */}
          {isGrouped ? (
            // 二级表头模式 - 使用 Grid 布局确保对齐
            <>
              {/* 第一行：分组表头 */}
              <div
                className="grid flex-shrink-0"
                style={{
                  backgroundColor: headerBgColor,
                  gridTemplateColumns: `repeat(${leafColumns.length}, minmax(0, 1fr))`
                }}
              >
                {columns.map((col, groupIndex) => {
                  const childCount = col.children?.length || 1;
                  const showBorder = groupIndex < columns.length - 1;
                  return (
                    <div
                      key={col.key}
                      className={cn(
                        `min-w-0 px-3 py-1.5 font-semibold text-center flex items-center justify-center ${showBorder ? 'border-r border-slate-400/30' : ''}`,
                        cellClassName
                      )}
                      style={{
                        color: headerTextColor,
                        gridColumn: `span ${childCount}`,
                        ...(col.highlight ? { backgroundColor: highlightColumnColor } : undefined)
                      }}
                    >
                      {col.title}
                    </div>
                  );
                })}
              </div>
              {/* 第二行：子列表头 */}
              <div
                className="grid flex-shrink-0 border-t border-slate-400/30"
                style={{
                  backgroundColor: headerBgColor,
                  gridTemplateColumns: `repeat(${leafColumns.length}, minmax(0, 1fr))`
                }}
              >
                {leafColumns.map((col, colIndex) => {
                  const isGroupBoundary = groupBoundaries.has(colIndex);
                  return (
                    <div
                      key={col.key}
                      className={cn(
                        `min-w-0 px-3 py-1.5 font-semibold text-center flex items-center justify-center ${isGroupBoundary ? 'border-r border-slate-400/30' : ''}`,
                        cellClassName
                      )}
                      style={{
                        color: headerTextColor,
                        ...(col.highlight ? { backgroundColor: highlightColumnColor } : undefined)
                      }}
                    >
                      {col.title}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            // 单级表头模式
            <div
              className="flex flex-shrink-0 items-center"
              style={{ backgroundColor: headerBgColor }}
            >
              {columns.map((col, colIndex) => (
                <div
                  key={col.key}
                  className={cn(
                    `px-3 py-2 font-semibold text-center flex-1 flex items-center justify-center ${colIndex < columns.length - 1 ? 'border-r border-slate-400/30' : ''}`,
                    cellClassName
                  )}
                  style={{
                    color: headerTextColor,
                    ...(col.highlight ? { backgroundColor: highlightColumnColor } : undefined)
                  }}
                >
                  {col.title}
                </div>
              ))}
            </div>
          )}
          {/* Body - flex-1 让它填满剩余空间 */}
          <div className="flex-1 flex flex-col min-h-0">
            {data.map((row, rowIndex) => {
              const highlighted = isHighlighted(rowIndex);
              const stripedBg = striped && rowIndex % 2 === 1 ? 'bg-slate-50' : 'bg-white';
              const customRowClass = getRowClassName ? getRowClassName(row, rowIndex) : '';

              return (
                <div
                  key={rowIndex}
                  className={`${isGrouped ? 'grid' : 'flex'} flex-1 items-center border-b border-slate-100 transition-colors hover:bg-slate-100 ${highlighted ? '' : stripedBg} ${customRowClass}`}
                  style={{
                    ...(highlighted ? { backgroundColor: highlightColor } : undefined),
                    ...(isGrouped ? { gridTemplateColumns: `repeat(${leafColumns.length}, minmax(0, 1fr))` } : {})
                  }}
                >
                  {leafColumns.map((col, colIndex) => {
                    const isGroupBoundary = isGrouped && groupBoundaries.has(colIndex);
                    return (
                      <div
                        key={col.key}
                        className={cn(
                          `min-w-0 px-3 self-stretch h-full flex items-center ${getAlignment(col.align)} ${isGrouped ? '' : 'flex-1'} ${isGroupBoundary ? 'border-r border-slate-200' : ''}`,
                          cellClassName
                        )}
                        style={{
                          color: bodyTextColor ?? uiColors.tick,
                          ...(!highlighted && isColumnHighlighted(col)
                            ? { backgroundColor: highlightColumnColor }
                            : undefined)
                        }}
                      >
                        {getCellValue(row, col, rowIndex)}
                      </div>
                    );
                  })}
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
        <div className={cn('mb-2 flex-shrink-0', titleBlockClassName)}>
          {title && (
            <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={cn('text-xs text-webank-subtext mt-1', subtitleClassName)}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="flex-1 overflow-auto">
        <table
          className={cn(
            `w-full border-collapse ${rowHeight === 'dense' ? 'text-[10px]' : 'text-xs'} ${bordered ? 'border border-slate-200' : ''}`,
            tableClassName
          )}
          style={{ tableLayout: 'fixed' }}
        >
          <thead className={stickyHeader ? 'sticky top-0 z-10' : ''}>
            {isGrouped ? (
              // 二级表头模式
              <>
                {/* 第一行：分组表头（在分组边界显示边框） */}
                <tr style={{ backgroundColor: headerBgColor }}>
                  {columns.map((col, groupIndex) => {
                    const childCount = col.children?.length || 1;
                    const hasChildren = col.children && col.children.length > 0;
                    const showBorder = groupIndex < columns.length - 1;
                    return (
                      <th
                        key={col.key}
                        colSpan={childCount}
                        rowSpan={hasChildren ? 1 : 2}
                        className={cn(
                          `${rowHeightClasses[rowHeight]} px-3 font-semibold text-center align-middle ${bordered ? 'border border-slate-300' : ''} ${showBorder ? 'border-r border-slate-400/30' : ''}`,
                          cellClassName
                        )}
                        style={{
                          color: headerTextColor,
                          width: col.width || 'auto',
                          verticalAlign: 'middle',
                          ...(col.highlight ? { backgroundColor: highlightColumnColor } : undefined)
                        }}
                      >
                        {col.title}
                      </th>
                    );
                  })}
                </tr>
                {/* 第二行：子列表头（在分组边界显示边框） */}
                <tr style={{ backgroundColor: headerBgColor }} className="border-t border-slate-400/30">
                  {leafColumns.map((col, colIndex) => {
                    const isGroupBoundary = groupBoundaries.has(colIndex);
                    return (
                      <th
                        key={col.key}
                        className={cn(
                          `${rowHeightClasses[rowHeight]} px-3 font-semibold text-center align-middle ${bordered ? 'border border-slate-300' : ''} ${isGroupBoundary ? 'border-r border-slate-400/30' : ''}`,
                          cellClassName
                        )}
                        style={{
                          color: headerTextColor,
                          width: col.width || 'auto',
                          verticalAlign: 'middle',
                          ...(col.highlight ? { backgroundColor: highlightColumnColor } : undefined)
                        }}
                      >
                        {col.title}
                      </th>
                    );
                  })}
                </tr>
              </>
            ) : (
              // 单级表头模式
              <tr style={{ backgroundColor: headerBgColor }}>
                {columns.map((col, colIndex) => (
                  <th
                    key={col.key}
                    className={cn(
                      `${rowHeightClasses[rowHeight]} px-3 font-semibold text-center align-middle ${bordered ? 'border border-slate-300' : ''} ${colIndex < columns.length - 1 ? 'border-r border-slate-400/30' : ''}`,
                      cellClassName
                    )}
                    style={{
                      color: headerTextColor,
                      width: col.width || 'auto',
                      verticalAlign: 'middle',
                      ...(col.highlight ? { backgroundColor: highlightColumnColor } : undefined)
                    }}
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {data.map((row, rowIndex) => {
              const highlighted = isHighlighted(rowIndex);
              const stripedBg = striped && rowIndex % 2 === 1 ? 'bg-slate-50' : 'bg-white';
              const customRowClass = getRowClassName ? getRowClassName(row, rowIndex) : '';

              return (
                <tr
                  key={rowIndex}
                  className={`${highlighted ? '' : stripedBg} transition-colors hover:bg-slate-100 ${customRowClass}`}
                  style={highlighted ? { backgroundColor: highlightColor } : undefined}
                >
                  {leafColumns.map((col, colIndex) => (
                    <td
                      key={col.key}
                      className={cn(
                        `${rowHeightClasses[rowHeight]} px-3 ${getAlignment(col.align)} ${bordered ? 'border border-slate-200' : 'border-b border-slate-100'} ${colIndex < leafColumns.length - 1 ? 'border-r border-slate-200' : ''}`,
                        cellClassName
                      )}
                      style={{
                        color: bodyTextColor ?? uiColors.tick,
                        ...(!highlighted && isColumnHighlighted(col)
                          ? { backgroundColor: highlightColumnColor }
                          : undefined)
                      }}
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
