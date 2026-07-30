/**
 * CPI 数据 - 居民消费价格指数
 */

export interface CpiTrendDataPoint {
  period: string;
  cpi: number;
  coreCpi: number;
}

export interface CpiCategoryDataPoint {
  period: string;
  foodTobaccoAlcohol: number; // 食品烟酒
  transportation: number;     // 交通和通信
  housing: number;            // 居住
  education: number;          // 教育文化和娱乐
  clothing: number;           // 衣着
  healthcare: number;         // 医疗保健
  householdServices: number;  // 生活用品及服务
  otherGoodsServices: number; // 其他用品和服务
}

// CPI及核心CPI当月同比走势数据 (2024-01 至 2026-06)
export const cpiTrendData: CpiTrendDataPoint[] = [
  { period: '2024-01', cpi: -0.80, coreCpi: 0.40 },
  { period: '2024-02', cpi: 0.70, coreCpi: 1.20 },
  { period: '2024-03', cpi: 0.10, coreCpi: 0.60 },
  { period: '2024-04', cpi: 0.30, coreCpi: 0.70 },
  { period: '2024-05', cpi: 0.30, coreCpi: 0.60 },
  { period: '2024-06', cpi: 0.20, coreCpi: 0.60 },
  { period: '2024-07', cpi: 0.50, coreCpi: 0.40 },
  { period: '2024-08', cpi: 0.60, coreCpi: 0.30 },
  { period: '2024-09', cpi: 0.40, coreCpi: 0.10 },
  { period: '2024-10', cpi: 0.30, coreCpi: 0.20 },
  { period: '2024-11', cpi: 0.20, coreCpi: 0.30 },
  { period: '2024-12', cpi: 0.10, coreCpi: 0.40 },
  { period: '2025-01', cpi: 0.50, coreCpi: 0.60 },
  { period: '2025-02', cpi: -0.70, coreCpi: -0.10 },
  { period: '2025-03', cpi: -0.10, coreCpi: 0.50 },
  { period: '2025-04', cpi: -0.10, coreCpi: 0.50 },
  { period: '2025-05', cpi: -0.10, coreCpi: 0.60 },
  { period: '2025-06', cpi: 0.10, coreCpi: 0.70 },
  { period: '2025-07', cpi: 0.00, coreCpi: 0.80 },
  { period: '2025-08', cpi: -0.40, coreCpi: 0.90 },
  { period: '2025-09', cpi: -0.30, coreCpi: 1.00 },
  { period: '2025-10', cpi: 0.20, coreCpi: 1.20 },
  { period: '2025-11', cpi: 0.70, coreCpi: 1.20 },
  { period: '2025-12', cpi: 0.80, coreCpi: 1.20 },
  { period: '2026-01', cpi: 0.20, coreCpi: 0.80 },
  { period: '2026-02', cpi: 1.30, coreCpi: 1.80 },
  { period: '2026-03', cpi: 1.00, coreCpi: 1.10 },
  { period: '2026-04', cpi: 1.20, coreCpi: 1.20 },
  { period: '2026-05', cpi: 1.20, coreCpi: 1.10 },
  { period: '2026-06', cpi: 1.00, coreCpi: 1.00 },
];

// CPI八大类当月同比数据 (2025-01 至 2026-06)
// 数据来源：国家统计局月度发布（2025年为“食品烟酒”，2026年起为“食品烟酒及在外餐饮”）
export const cpiCategoryData: CpiCategoryDataPoint[] = [
  { period: '2025-01', foodTobaccoAlcohol: 0.60, transportation: -0.60, housing: 0.10, education: 1.70, clothing: 1.10, healthcare: 0.70, householdServices: -1.10, otherGoodsServices: 5.40 },
  { period: '2025-02', foodTobaccoAlcohol: -1.90, transportation: -2.50, housing: 0.10, education: -0.50, clothing: 1.20, healthcare: 0.20, householdServices: -0.70, otherGoodsServices: 6.50 },
  { period: '2025-03', foodTobaccoAlcohol: -0.60, transportation: -2.60, housing: 0.10, education: 0.80, clothing: 1.30, healthcare: 0.10, householdServices: 0.60, otherGoodsServices: 6.20 },
  { period: '2025-04', foodTobaccoAlcohol: 0.30, transportation: -3.90, housing: 0.10, education: 0.70, clothing: 1.30, healthcare: 0.20, householdServices: 0.20, otherGoodsServices: 6.60 },
  { period: '2025-05', foodTobaccoAlcohol: 0.10, transportation: -4.30, housing: 0.10, education: 0.90, clothing: 1.50, healthcare: 0.30, householdServices: 0.10, otherGoodsServices: 7.30 },
  { period: '2025-06', foodTobaccoAlcohol: 0.10, transportation: -3.70, housing: 0.10, education: 1.00, clothing: 1.60, healthcare: 0.40, householdServices: 0.70, otherGoodsServices: 8.10 },
  { period: '2025-07', foodTobaccoAlcohol: -0.80, transportation: -3.10, housing: 0.10, education: 0.90, clothing: 1.70, healthcare: 0.50, householdServices: 1.20, otherGoodsServices: 8.00 },
  { period: '2025-08', foodTobaccoAlcohol: -2.50, transportation: -2.40, housing: 0.10, education: 1.00, clothing: 1.80, healthcare: 0.90, householdServices: 1.80, otherGoodsServices: 8.60 },
  { period: '2025-09', foodTobaccoAlcohol: -2.60, transportation: -2.00, housing: 0.10, education: 0.80, clothing: 1.70, healthcare: 1.10, householdServices: 2.20, otherGoodsServices: 9.90 },
  { period: '2025-10', foodTobaccoAlcohol: -1.60, transportation: -1.50, housing: 0.10, education: 0.90, clothing: 1.70, healthcare: 1.40, householdServices: 1.90, otherGoodsServices: 12.80 },
  { period: '2025-11', foodTobaccoAlcohol: 0.30, transportation: -2.30, housing: 0.00, education: 0.80, clothing: 1.90, healthcare: 1.60, householdServices: 2.10, otherGoodsServices: 14.20 },
  { period: '2025-12', foodTobaccoAlcohol: 0.80, transportation: -2.60, housing: -0.20, education: 0.90, clothing: 1.70, healthcare: 1.80, householdServices: 2.20, otherGoodsServices: 17.40 },
  { period: '2026-01', foodTobaccoAlcohol: -0.20, transportation: -3.40, housing: -0.10, education: 0.00, clothing: 1.90, healthcare: 1.70, householdServices: 2.60, otherGoodsServices: 13.20 },
  { period: '2026-02', foodTobaccoAlcohol: 1.40, transportation: -0.70, housing: -0.20, education: 2.00, clothing: 1.90, healthcare: 1.90, householdServices: 2.80, otherGoodsServices: 15.40 },
  { period: '2026-03', foodTobaccoAlcohol: 0.40, transportation: 0.90, housing: -0.20, education: 1.10, clothing: 1.60, healthcare: 1.90, householdServices: 1.50, otherGoodsServices: 13.50 },
  { period: '2026-04', foodTobaccoAlcohol: -0.80, transportation: 4.60, housing: -0.20, education: 1.30, clothing: 1.50, healthcare: 2.20, householdServices: 1.40, otherGoodsServices: 11.00 },
  { period: '2026-05', foodTobaccoAlcohol: -0.90, transportation: 5.40, housing: -0.20, education: 1.30, clothing: 1.40, healthcare: 2.10, householdServices: 1.80, otherGoodsServices: 9.90 },
  { period: '2026-06', foodTobaccoAlcohol: -0.80, transportation: 4.10, housing: -0.30, education: 1.40, clothing: 1.40, healthcare: 2.30, householdServices: 1.30, otherGoodsServices: 6.60 },
];
