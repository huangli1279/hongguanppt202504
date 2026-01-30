/**
 * 统一的图表配色方案
 * 所有 Base 组件共用此配色，确保视觉一致性
 * 风格：沉稳、专业、低饱和度
 */

// 主色板 - 用于图表系列数据
export const chartColors = {
  // 主要系列色（按优先级排序）- 沉稳色调
  primary: '#005c8f',    // WeBank 深蓝色 - 最重要的数据
  secondary: '#64748b',  // 石板灰 - 次要数据
  tertiary: '#78716c',   // 暖灰色 - 第三系列
  quaternary: '#6b7280', // 中性灰 - 第四系列
  quinary: '#475569',    // 深石板灰 - 第五系列
  senary: '#334155',     // 更深石板灰 - 第六系列
  
  // 语义色 - 低饱和度
  positive: '#005c8f',   // 深蓝 - 正向/主要
  negative: '#ef4444',   // 红色 - 负向/下降（保留用于强调）
  neutral: '#94a3b8',    // 中性灰 - 参考线
  warning: '#78716c',    // 暖灰 - 注意
  
  // 灰度色
  grey100: '#f1f5f9',
  grey200: '#e2e8f0',
  grey300: '#cbd5e1',
  grey400: '#94a3b8',
  grey500: '#64748b',
  grey600: '#475569',
} as const;

// 预设的系列色数组（用于多系列图表）- 沉稳渐变
export const seriesColors = [
  '#005c8f',  // 深蓝
  '#64748b',  // 石板灰
  '#78716c',  // 暖灰
  '#475569',  // 深石板灰
  '#94a3b8',  // 浅灰
  '#334155',  // 更深灰
] as const;

// 季度对比色（Q1-Q4）- 沉稳色调
export const quarterColors = {
  Q1: '#005c8f',  // 深蓝
  Q2: '#64748b',  // 石板灰
  Q3: '#78716c',  // 暖灰
  Q4: '#475569',  // 深石板灰
} as const;

// 产业对比色 - 沉稳色调
export const industryColors = {
  primary: '#94a3b8',    // 第一产业 - 浅灰
  secondary: '#ef4444',  // 第二产业 - 红色（负向拖累）
  tertiary: '#005c8f',   // 第三产业 - 深蓝（正向支撑）
} as const;

// UI 元素色
export const uiColors = {
  grid: '#e5e7eb',
  axis: '#e5e7eb',
  tick: '#666666',
  tickSecondary: '#999999',
  cursor: '#cbd5e1',
  tooltipBorder: '#e2e8f0',
} as const;

// 获取系列颜色的辅助函数
export const getSeriesColor = (index: number): string => {
  return seriesColors[index % seriesColors.length];
};

// 类型导出
export type ChartColorKey = keyof typeof chartColors;
export type SeriesColor = typeof seriesColors[number];
