/**
 * Slide11：国内外机构对中国2026年工业增加值增速预测 + 全年目标区间
 * 数据来源：中金、华泰、银河证券、招商证券、中信证券、国泰君安
 */

export interface IndustrialForecastMetric {
  key: 'industrial';
  label: string;
  shortLabel: string;
  /** 上半年已公布实际值（1—6月累计） */
  actual: number;
  actualLabel: string;
  /** 机构共识区间 */
  low: number;
  high: number;
  mid: number;
  color: string;
}

/** 全年预测共识区间 */
export const industrialForecastConsensus: IndustrialForecastMetric[] = [
  {
    key: 'industrial',
    label: '2026年工业增加值全年增速',
    shortLabel: '工增',
    actual: 5.4,
    actualLabel: '上半年累计',
    low: 5.0,
    high: 5.5,
    mid: 5.25,
    color: '#4A79AA',
  },
];

/** 全年目标/情景区间（4.8%–5.6%） */
export const INDUSTRIAL_TARGET: [number, number] = [4.8, 5.6];
export const INDUSTRIAL_GOVERNMENT_TARGET: [number, number] = [4.8, 5.6];

/** 代表机构点预测 */
export const industrialForecastByInstitution = [
  { institution: '中金', value: 5.2, note: '最新预测' },
  { institution: '华泰', value: 5.1, note: '最新预测' },
  { institution: '银河证券', value: 5.4, note: '最新预测' },
  { institution: '招商', value: 5.3, note: '最新预测' },
  { institution: '中信', value: 5.5, note: '最新预测' },
  { institution: '国泰君安', value: 5.0, note: '最新预测' },
];

/** 兼容别名 */
export const industrialForecastByInstitutionNew = industrialForecastByInstitution;
