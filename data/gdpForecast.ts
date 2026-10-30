/**
 * Slide06：国内外机构对中国2026年GDP增速预测 + 政府目标区间
 * 数据来源：IMF、OECD、花旗、一财一致预期
 */

export interface GdpForecastMetric {
  key: 'gdp';
  label: string;
  shortLabel: string;
  /** 上半年已公布实际值（H1 算术平均：2026Q1 5.0% + 2026Q2 4.3% = 4.65%） */
  actual: number;
  actualLabel: string;
  /** 机构共识区间 */
  low: number;
  high: number;
  mid: number;
  color: string;
}

/** 全年预测共识区间 */
export const gdpForecastConsensus: GdpForecastMetric[] = [
  {
    key: 'gdp',
    label: '2026年GDP全年增速',
    shortLabel: 'GDP',
    actual: 4.65,
    actualLabel: '上半年均值',
    low: 4.5,
    high: 4.8,
    mid: 4.65,
    color: '#4A79AA',
  },
];

/** 政府工作目标区间（4.5%–5.0%） */
export const GOVERNMENT_TARGET: [number, number] = [4.5, 5.0];

/** 代表机构点预测（与共识一致） */
export const gdpForecastByInstitutionNew = [
  { institution: 'IMF', value: 4.5, note: '7月' },
  { institution: 'OECD', value: 4.5, note: '6月基准情景' },
  { institution: '花旗', value: 4.6, note: '10月' },
  { institution: '一财一致预期', value: 4.6, note: '10月最新' },
];