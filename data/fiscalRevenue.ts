// 一般公共预算收入数据

export interface FiscalRevenueTrendDataPoint {
  period: string;
  taxRevenue: number | null;
  nonTaxRevenue: number | null;
  total: number | null;
}

export interface TaxCategoryDataPoint {
  taxType: string;
  amount: number;
  growth: number | null;
}

// 2024-2025年一般公共预算收入累计同比变化
export const fiscalRevenueTrendData: FiscalRevenueTrendDataPoint[] = [
  { period: '2024-02', taxRevenue: -4.00, nonTaxRevenue: 8.60, total: -2.30 },
  { period: '2024-03', taxRevenue: -4.90, nonTaxRevenue: 10.10, total: -2.30 },
  { period: '2024-04', taxRevenue: -4.90, nonTaxRevenue: 9.40, total: -2.70 },
  { period: '2024-05', taxRevenue: -5.10, nonTaxRevenue: 10.30, total: -2.80 },
  { period: '2024-06', taxRevenue: -5.60, nonTaxRevenue: 11.70, total: -2.80 },
  { period: '2024-07', taxRevenue: -5.40, nonTaxRevenue: 12.00, total: -2.60 },
  { period: '2024-08', taxRevenue: -5.30, nonTaxRevenue: 11.70, total: -2.60 },
  { period: '2024-09', taxRevenue: -5.30, nonTaxRevenue: 13.50, total: -2.20 },
  { period: '2024-10', taxRevenue: -4.50, nonTaxRevenue: 15.30, total: -1.30 },
  { period: '2024-11', taxRevenue: -3.90, nonTaxRevenue: 17.00, total: -0.60 },
  { period: '2024-12', taxRevenue: -3.40, nonTaxRevenue: 25.40, total: 1.30 },
  { period: '2025-02', taxRevenue: -3.90, nonTaxRevenue: 11.00, total: -1.60 },
  { period: '2025-03', taxRevenue: -3.50, nonTaxRevenue: 8.80, total: -1.10 },
  { period: '2025-04', taxRevenue: -2.10, nonTaxRevenue: 7.70, total: -0.40 },
  { period: '2025-05', taxRevenue: -1.60, nonTaxRevenue: 6.20, total: -0.30 },
  { period: '2025-06', taxRevenue: -1.20, nonTaxRevenue: 3.70, total: -0.30 },
  { period: '2025-07', taxRevenue: -0.30, nonTaxRevenue: 2.00, total: 0.10 },
  { period: '2025-08', taxRevenue: 0.02, nonTaxRevenue: 1.50, total: 0.30 },
  { period: '2025-09', taxRevenue: 0.70, nonTaxRevenue: -0.40, total: 0.50 },
  { period: '2025-10', taxRevenue: 1.70, nonTaxRevenue: -3.10, total: 0.80 },
  { period: '2025-11', taxRevenue: 1.80, nonTaxRevenue: -3.70, total: 0.80 },
];

// 2025年1-11月主要税种累计完成情况
export const taxCategoryData: TaxCategoryDataPoint[] = [
  { taxType: '国内增值税', amount: 63629, growth: 3.9 },
  { taxType: '企业所得税', amount: 40234, growth: 1.7 },
  { taxType: '个人所得税', amount: 14689, growth: 11.5 },
  { taxType: '国内消费税', amount: 15639, growth: 2.5 },
  { taxType: '进口环节税收', amount: 16520, growth: -4.7 },
  { taxType: '印花税', amount: 4044, growth: 27.0 },
  { taxType: '证券交易印花税', amount: 1855, growth: 70.7 },
  { taxType: '房地产相关税收', amount: 13977, growth: null },
  { taxType: '车辆购置税', amount: 1814, growth: -17.4 },
];
