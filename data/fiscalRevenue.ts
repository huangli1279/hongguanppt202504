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

export interface FiscalCategoryGrowthDataPoint {
  category: string;
  growth: number;
}

// 2025-2026年一般公共预算收入累计同比变化
export const fiscalRevenueTrendData: FiscalRevenueTrendDataPoint[] = [
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
  { period: '2025-12', taxRevenue: 0.80, nonTaxRevenue: -11.30, total: -1.70 },
  { period: '2026-02', taxRevenue: 0.10, nonTaxRevenue: 3.40, total: 0.70 },
  { period: '2026-03', taxRevenue: 2.20, nonTaxRevenue: 2.90, total: 2.40 },
  { period: '2026-04', taxRevenue: 3.90, nonTaxRevenue: 1.60, total: 3.50 },
  { period: '2026-05', taxRevenue: 4.40, nonTaxRevenue: 2.20, total: 4.00 },
];

// 2026年1-6月各类税收收入累计同比
export const fiscalCategoryGrowthData: FiscalCategoryGrowthDataPoint[] = [
  { category: '国内增值税', growth: 6.0 },
  { category: '国内消费税', growth: -3.4 },
  { category: '企业所得税', growth: 3.9 },
  { category: '出口货物增值税/消费税', growth: 5.4 },
  { category: '进口货物增值税/消费税', growth: 11.8 },
  { category: '印花税', growth: 40.9 },
];

// 2026年一季度财政支出各领域同比增速
export interface FiscalExpenditureGrowthDataPoint {
  category: string;
  growth: number;
}

export const fiscalExpenditureGrowthData: FiscalExpenditureGrowthDataPoint[] = [
  { category: '教育', growth: -0.3 },
  { category: '科学技术', growth: -3.7 },
  { category: '文化旅游体育', growth: -4.3 },
  { category: '社会保障就业', growth: 9.0 },
  { category: '卫生健康', growth: 12.1 },
  { category: '节能环保', growth: -1.1 },
  { category: '城乡社区', growth: 2.8 },
  { category: '农林水事务', growth: -6.8 },
  { category: '交通运输', growth: -1.6 },
  { category: '债务付息', growth: 12.9 },
];

// 2026年1-6月财政支出各领域同比增速
export const fiscalExpenditureH1GrowthData: FiscalExpenditureGrowthDataPoint[] = [
  { category: '卫生健康', growth: 10.8 },
  { category: '社会保障和就业', growth: 7.6 },
  { category: '中央本级支出', growth: 6.5 },
  { category: '债务付息', growth: 4.5 },
  { category: '科学技术', growth: 1.3 },
  { category: '教育', growth: 0.6 },
  { category: '地方支出', growth: 0.6 },
  { category: '城乡社区', growth: -2.0 },
  { category: '交通运输', growth: -2.6 },
  { category: '文化旅游体育与传媒', growth: -6.4 },
  { category: '农林水', growth: -8.6 },
  { category: '节能环保', growth: -10.3 },
];

// 2025-2026年一般公共预算支出合计累计同比（按月对比）
export interface FiscalExpenditureTrendDataPoint {
  period: string;
  y2025: number | null;
  y2026: number | null;
}

export const fiscalExpenditureTrendData: FiscalExpenditureTrendDataPoint[] = [
  { period: '2月', y2025: 3.4, y2026: 3.6 },
  { period: '3月', y2025: 4.2, y2026: 2.6 },
  { period: '4月', y2025: 4.6, y2026: 1.3 },
  { period: '5月', y2025: 4.2, y2026: 0.8 },
  { period: '6月', y2025: 3.4, y2026: 1.5 },
  { period: '7月', y2025: 3.4, y2026: null },
  { period: '8月', y2025: 3.1, y2026: null },
  { period: '9月', y2025: 3.1, y2026: null },
  { period: '10月', y2025: 2.0, y2026: null },
  { period: '11月', y2025: 1.4, y2026: null },
  { period: '12月', y2025: 1.0, y2026: null },
];

// 2025-2026年财政资金规模对比（按账本口径）
export interface FiscalFundsComparisonDataPoint {
  item: string;
  ledger: string;
  y2025: number;
  y2026: number;
  delta: number | null;
}

export const fiscalFundsComparisonData: FiscalFundsComparisonDataPoint[] = [
  { item: '一般公共预算赤字', ledger: '一般公共预算', y2025: 5.66, y2026: 5.89, delta: 0.23 },
  { item: '地方专项债', ledger: '政府性基金预算', y2025: 4.40, y2026: 4.40, delta: null },
  { item: '特殊再融资债（化债）', ledger: '政府性基金预算', y2025: 2.00, y2026: 2.00, delta: null },
  { item: '超长期特别国债', ledger: '政府性基金预算', y2025: 1.30, y2026: 1.30, delta: null },
  { item: '两重', ledger: '政府性基金预算', y2025: 0.80, y2026: 0.80, delta: null },
  { item: '两新-以旧换新', ledger: '政府性基金预算', y2025: 0.30, y2026: 0.25, delta: -0.05 },
  { item: '两新-设备更新', ledger: '政府性基金预算', y2025: 0.20, y2026: 0.20, delta: null },
  { item: '促内需', ledger: '政府性基金预算', y2025: 0.00, y2026: 0.05, delta: 0.05 },
  { item: '特别国债-补充资本金', ledger: '国有资本经营预算', y2025: 0.50, y2026: 0.30, delta: -0.20 },
];

// 2025年主要税种累计完成情况
export const taxCategoryData: TaxCategoryDataPoint[] = [
  { taxType: '国内增值税', amount: 68947, growth: 3.4 },
  { taxType: '企业所得税', amount: 41304, growth: 1.0 },
  { taxType: '个人所得税', amount: 16187, growth: 11.5 },
  { taxType: '国内消费税', amount: 16857, growth: 2.0 },
  { taxType: '进口货物增值税、消费税', amount: 18263, growth: -4.8 },
  { taxType: '印花税', amount: 4270, growth: 24.1 },
  { taxType: '证券交易印花税', amount: 2035, growth: 57.8 },
  { taxType: '契税', amount: 4440, growth: -14.1 },
  { taxType: '土地增值税', amount: 4102, growth: -15.7 },
  { taxType: '车辆购置税', amount: 1972, growth: -18.8 },
];
