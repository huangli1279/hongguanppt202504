/**
 * Slide16：主流机构对2026年社零/CPI预测 + 上半年分品类表现
 * 数据来源：浦银国际中期展望、Wind 8月一致预测、国家统计局、国泰海通等
 */

export interface RetailCpiForecastMetric {
  key: 'retail' | 'cpi';
  label: string;
  shortLabel: string;
  /** 上半年已公布实际值 */
  actual: number;
  actualLabel: string;
  /** 全年预测共识区间 */
  low: number;
  high: number;
  mid: number;
  color: string;
}

/** 全年预测共识区间（中期修订后） */
export const retailCpiForecastConsensus: RetailCpiForecastMetric[] = [
  {
    key: 'retail',
    label: '社零全年累计增速',
    shortLabel: '社零',
    actual: 1.3,
    actualLabel: '1—6月',
    low: 3.0,
    high: 3.5,
    mid: 3.3,
    color: '#4A79AA',
  },
  {
    key: 'cpi',
    label: 'CPI全年同比',
    shortLabel: 'CPI',
    actual: 1.0,
    actualLabel: '上半年',
    low: 0.9,
    high: 1.0,
    mid: 0.95,
    color: '#2F5F5A',
  },
];

/** 代表机构点预测 */
export const retailCpiForecastByInstitution = [
  { institution: '浦银国际', retail: 3.5, cpi: 0.9, note: '中期由4.8%下调' },
  { institution: 'Wind一致(1.8%)', retail: 1.8, cpi: 1.2, note: '8月一致预测' },
];

export interface RetailCategoryH1Point {
  period: string;
  yoy: number;
  fill: string;
  group: 'support' | 'total' | 'drag';
}

/** 上半年累计同比：结构支撑项 vs 拖累项（单位：%） */
export const retailCategoryH1Data: RetailCategoryH1Point[] = [
  { period: '通讯器材', yoy: 14.4, fill: '#4A79AA', group: 'support' },
  { period: '粮油食品', yoy: 7.4, fill: '#4A79AA', group: 'support' },
  { period: '服务零售', yoy: 5.3, fill: '#5C9A8A', group: 'support' },
  { period: '网上商品', yoy: 4.8, fill: '#5C9A8A', group: 'support' },
  { period: '餐饮收入', yoy: 2.8, fill: '#5C9A8A', group: 'support' },
  { period: '除汽车社零', yoy: 2.8, fill: '#8CB27A', group: 'total' },
  { period: '商品+服务', yoy: 2.7, fill: '#8CB27A', group: 'total' },
  { period: '社零总额', yoy: 1.3, fill: '#C09A4A', group: 'total' },
  { period: '商品零售', yoy: 1.1, fill: '#C09A4A', group: 'total' },
  { period: '家电音像', yoy: -7.4, fill: '#B85E5B', group: 'drag' },
  { period: '汽车类', yoy: -12.6, fill: '#B85E5B', group: 'drag' },
];
