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
  grain: number;           // 粮食
  edibleOil: number;       // 食用油
  freshVegetables: number; // 鲜菜
  pork: number;            // 猪肉
  freshFruit: number;      // 鲜果
  transportation: number;  // 交通工具
  livingServices: number;  // 生活用品及服务
  clothing: number;        // 衣着
  education: number;       // 教育文化和娱乐
  healthcare: number;      // 医疗保健
  otherGoods: number;      // 其他用品和服务
  homeAppliances: number;  // 家用器具
}

// CPI及核心CPI当月同比走势数据 (2024-01 至 2025-12)
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
];

// 2025年主要商品与服务类别CPI当月同比数据
export const cpiCategoryData: CpiCategoryDataPoint[] = [
  { period: '2025-01', grain: -1.40, edibleOil: -2.50, freshVegetables: 2.40, pork: 13.80, freshFruit: 0.60, transportation: -4.10, livingServices: -1.10, clothing: 1.10, education: 1.70, healthcare: 0.70, otherGoods: 5.40, homeAppliances: -3.50 },
  { period: '2025-02', grain: -1.30, edibleOil: -2.00, freshVegetables: -12.60, pork: 4.10, freshFruit: -1.80, transportation: -4.40, livingServices: -0.70, clothing: 1.20, education: -0.50, healthcare: 0.20, otherGoods: 6.50, homeAppliances: -3.30 },
  { period: '2025-03', grain: -1.50, edibleOil: -2.10, freshVegetables: -6.80, pork: 6.70, freshFruit: 0.90, transportation: -4.00, livingServices: 0.60, clothing: 1.30, education: 0.80, healthcare: 0.10, otherGoods: 6.20, homeAppliances: -0.30 },
  { period: '2025-04', grain: -1.40, edibleOil: -1.80, freshVegetables: -5.00, pork: 5.00, freshFruit: 5.20, transportation: -3.80, livingServices: 0.20, clothing: 1.30, education: 0.70, healthcare: 0.20, otherGoods: 6.60, homeAppliances: -0.20 },
  { period: '2025-05', grain: -1.40, edibleOil: -1.70, freshVegetables: -8.30, pork: 3.10, freshFruit: 5.50, transportation: -3.40, livingServices: 0.10, clothing: 1.50, education: 0.90, healthcare: 0.30, otherGoods: 7.30, homeAppliances: -0.20 },
  { period: '2025-06', grain: -1.20, edibleOil: -1.80, freshVegetables: -0.40, pork: -8.50, freshFruit: 6.10, transportation: -2.80, livingServices: 0.70, clothing: 1.60, education: 1.00, healthcare: 0.40, otherGoods: 8.10, homeAppliances: 1.00 },
  { period: '2025-07', grain: -1.00, edibleOil: -1.40, freshVegetables: -7.60, pork: -9.50, freshFruit: 2.80, transportation: -2.10, livingServices: 1.20, clothing: 1.70, education: 0.90, healthcare: 0.50, otherGoods: 8.00, homeAppliances: 2.80 },
  { period: '2025-08', grain: -0.80, edibleOil: -1.50, freshVegetables: -15.20, pork: -16.10, freshFruit: -3.70, transportation: -1.90, livingServices: 1.80, clothing: 1.80, education: 1.00, healthcare: 0.90, otherGoods: 8.60, homeAppliances: 4.60 },
  { period: '2025-09', grain: -0.70, edibleOil: -1.40, freshVegetables: -13.70, pork: -17.00, freshFruit: -4.20, transportation: -1.90, livingServices: 2.20, clothing: 1.70, education: 0.80, healthcare: 1.10, otherGoods: 9.90, homeAppliances: 5.50 },
  { period: '2025-10', grain: -0.70, edibleOil: -1.10, freshVegetables: -7.30, pork: -16.00, freshFruit: -2.00, transportation: -1.90, livingServices: 1.90, clothing: 1.70, education: 0.90, healthcare: 1.40, otherGoods: 12.80, homeAppliances: 5.00 },
  { period: '2025-11', grain: -0.40, edibleOil: -1.20, freshVegetables: 14.50, pork: -15.00, freshFruit: 0.70, transportation: -2.00, livingServices: 2.10, clothing: 1.90, education: 0.80, healthcare: 1.60, otherGoods: 14.20, homeAppliances: 4.90 },
  { period: '2025-12', grain: -0.30, edibleOil: -1.00, freshVegetables: 18.20, pork: -14.60, freshFruit: 4.40, transportation: -1.90, livingServices: 2.20, clothing: 1.70, education: 0.90, healthcare: 1.80, otherGoods: 17.40, homeAppliances: 5.90 },
];
