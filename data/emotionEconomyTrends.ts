// 数据来源：
// 旅游 — 文旅部、国家统计局公报
// 演出 — 中国演出行业协会《全国演出市场年度监测报告》
// 情绪经济 — 艾媒咨询《2025—2029年中国情绪经济消费趋势洞察报告》

export interface TourismTrendPoint {
  year: string;
  /** 国内出游总花费（万亿元） */
  spending: number;
  /** 出游人次（亿人次） */
  trips: number;
}

export const tourismTrend: TourismTrendPoint[] = [
  { year: '2023', spending: 4.91, trips: 48.9 },
  { year: '2024', spending: 5.75, trips: 56.2 },
  { year: '2025', spending: 6.3, trips: 65.22 },
];

export interface PerformanceTrendPoint {
  year: string;
  /** 市场总收入（亿元） */
  revenue: number;
  /** 票房收入（亿元） */
  boxOffice: number;
  /** 总场次（万场） */
  shows: number;
  /** 观众人次（亿人次） */
  audience: number;
}

export const performanceTrend: PerformanceTrendPoint[] = [
  { year: '2023', revenue: 739.56, boxOffice: 509.26, shows: 44.23, audience: 1.68 },
  { year: '2024', revenue: 795.9, boxOffice: 579.5, shows: 60.09, audience: 1.86 },
  { year: '2025', revenue: 837.22, boxOffice: 616.55, shows: 64.04, audience: 1.94 },
];

export interface EmotionMarketTrendPoint {
  year: string;
  /** 情绪经济市场规模（万亿元） */
  size: number;
}

export const emotionMarketTrend: EmotionMarketTrendPoint[] = [
  { year: '2023', size: 1.95 },
  { year: '2024', size: 2.31 },
  { year: '2025', size: 2.72 },
  { year: '2026E', size: 3.17 },
  { year: '2029E', size: 4.5 },
];
