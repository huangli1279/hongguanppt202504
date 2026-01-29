// 财政和税收数据 (Slide 19-21)

import {
  BroadFiscalTrendDataPoint,
  FiscalLedgerGrowthDataPoint,
  TaxRevenueDataPoint,
  TaxCategoryDataPoint,
  VatVsProductionDataPoint,
  LandRevenueDataPoint,
  SpecialBondDataPoint,
} from '../types';

// Slide 19 Data
export const broadFiscalTrendData: BroadFiscalTrendDataPoint[] = [
  { month: "2024-02", taxRevenue: -4.00, nonTaxRevenue: 8.60, total: -2.30 },
  { month: "2024-03", taxRevenue: -4.90, nonTaxRevenue: 10.10, total: -2.30 },
  { month: "2024-04", taxRevenue: -4.90, nonTaxRevenue: 9.40, total: -2.70 },
  { month: "2024-05", taxRevenue: -5.10, nonTaxRevenue: 10.30, total: -2.80 },
  { month: "2024-06", taxRevenue: -5.60, nonTaxRevenue: 11.70, total: -2.80 },
  { month: "2024-07", taxRevenue: -5.40, nonTaxRevenue: 12.00, total: -2.60 },
  { month: "2024-08", taxRevenue: -5.30, nonTaxRevenue: 11.70, total: -2.60 },
  { month: "2024-09", taxRevenue: -5.30, nonTaxRevenue: 13.50, total: -2.20 },
  { month: "2024-10", taxRevenue: -4.50, nonTaxRevenue: 15.30, total: -1.30 },
  { month: "2024-11", taxRevenue: -3.90, nonTaxRevenue: 17.00, total: -0.60 },
  { month: "2024-12", taxRevenue: -3.40, nonTaxRevenue: 25.40, total: 1.30 },
  { month: "2025-02", taxRevenue: -3.90, nonTaxRevenue: 11.00, total: -1.60 },
  { month: "2025-03", taxRevenue: -3.50, nonTaxRevenue: 8.80, total: -1.10 },
  { month: "2025-04", taxRevenue: -2.10, nonTaxRevenue: 7.70, total: -0.40 },
  { month: "2025-05", taxRevenue: -1.60, nonTaxRevenue: 6.20, total: -0.30 },
  { month: "2025-06", taxRevenue: -1.20, nonTaxRevenue: 3.70, total: -0.30 },
  { month: "2025-07", taxRevenue: -0.30, nonTaxRevenue: 2.00, total: 0.10 },
  { month: "2025-08", taxRevenue: 0.02, nonTaxRevenue: 1.50, total: 0.30 },
  { month: "2025-09", taxRevenue: 0.70, nonTaxRevenue: -0.40, total: 0.50 },
  { month: "2025-10", taxRevenue: 1.70, nonTaxRevenue: -3.10, total: 0.80 },
  { month: "2025-11", taxRevenue: 1.80, nonTaxRevenue: -3.70, total: 0.80 },
];

export const fiscalLedgerGrowthData: FiscalLedgerGrowthDataPoint[] = [
  { month: '3月', ledger1: 4.2, ledger2: -8.5 },
  { month: '4月', ledger1: 3.8, ledger2: -10.2 },
  { month: '5月', ledger1: 3.5, ledger2: -12.4 },
  { month: '6月', ledger1: 3.0, ledger2: -15.1 },
  { month: '7月', ledger1: 2.5, ledger2: -16.8 },
  { month: '8月', ledger1: 1.2, ledger2: -18.5 },
  { month: '9月', ledger1: 0.5, ledger2: -20.2 },
  { month: '10月', ledger1: -3.8, ledger2: -22.5 },
  { month: '11月', ledger1: 0.8, ledger2: -14.2 },
];

// Slide 20 Data (Tax Analysis)

export const taxCategoryData: TaxCategoryDataPoint[] = [
  { category: '证券印花税', value: 70.7, highlight: true },
  { category: '个人所得税', value: 11.5, highlight: true },
  { category: '国内增值税', value: 3.9 },
  { category: '税收总额', value: 1.8 },
  { category: '企业所得税', value: -1.2 },
  { category: '非税收入', value: -3.7, highlight: true },
];

export const vatVsProductionData: VatVsProductionDataPoint[] = [
  { month: '2月', industrial: 7.0, vat: 6.8 },
  { month: '3月', industrial: 4.5, vat: 3.5 },
  { month: '4月', industrial: 6.7, vat: 5.8 },
  { month: '5月', industrial: 5.6, vat: 4.9 },
  { month: '6月', industrial: 5.3, vat: 4.2 },
  { month: '7月', industrial: 5.1, vat: 3.8 },
  { month: '8月', industrial: 4.5, vat: 3.2 },
  { month: '9月', industrial: 5.4, vat: 4.0 },
  { month: '10月', industrial: 5.3, vat: 8.6 },
  { month: '11月', industrial: 5.3, vat: 1.5 },
];

export const taxRevenueDetailData: TaxRevenueDataPoint[] = [
  { taxType: "国内增值税", amount: 63629, growth: 3.9 },
  { taxType: "企业所得税", amount: 40234, growth: 1.7 },
  { taxType: "个人所得税", amount: 14689, growth: 11.5 },
  { taxType: "国内消费税", amount: 15639, growth: 2.5 },
  { taxType: "进口环节税收", amount: 16520, growth: -4.7 },
  { taxType: "印花税", amount: 4044, growth: 27.0 },
  { taxType: "证券交易印花税", amount: 1855, growth: 70.7 },
  { taxType: "房地产相关税收", amount: 13977, growth: null },
  { taxType: "车辆购置税", amount: 1814, growth: -17.4 }
];


// Slide 21 Data

export const landRevenueData: LandRevenueDataPoint[] = [
  { month: "2024-02", total: 7149.00, central: 755.00, local: 6394.00 },
  { month: "2024-03", total: 10394.00, central: 1024.00, local: 9370.00 },
  { month: "2024-04", total: 13484.00, central: 1326.00, local: 12158.00 },
  { month: "2024-05", total: 16638.00, central: 1764.00, local: 14874.00 },
  { month: "2024-06", total: 19915.00, central: 2073.00, local: 17842.00 },
  { month: "2024-07", total: 23295.00, central: 2386.00, local: 20909.00 },
  { month: "2024-08", total: 26821.00, central: 2917.00, local: 23904.00 },
  { month: "2024-09", total: 30861.00, central: 3252.00, local: 27609.00 },
  { month: "2024-10", total: 35462.00, central: 3563.00, local: 31899.00 },
  { month: "2024-11", total: 42348.00, central: 3915.00, local: 38433.00 },
  { month: "2024-12", total: 62090.00, central: 4734.00, local: 57356.00 },
  { month: "2025-02", total: 6381.00, central: 808.00, local: 5573.00 },
  { month: "2025-03", total: 9247.00, central: 1086.00, local: 8161.00 },
  { month: "2025-04", total: 12586.00, central: 1400.00, local: 11186.00 },
  { month: "2025-05", total: 15483.00, central: 1848.00, local: 13635.00 },
  { month: "2025-06", total: 19442.00, central: 2173.00, local: 17269.00 },
  { month: "2025-07", total: 23124.00, central: 2596.00, local: 20528.00 },
  { month: "2025-08", total: 26449.00, central: 2933.00, local: 23516.00 },
  { month: "2025-09", total: 30717.00, central: 3276.00, local: 27441.00 },
  { month: "2025-10", total: 34473.00, central: 3618.00, local: 30855.00 },
  { month: "2025-11", total: 40274.00, central: 3938.00, local: 36336.00 },
];

export const specialBondData: SpecialBondDataPoint[] = [
  { month: '1月', issuance: 500, progress: 1.3 },
  { month: '2月', issuance: 400, progress: 2.3 },
  { month: '3月', issuance: 600, progress: 3.9 },
  { month: '4月', issuance: 800, progress: 6.0 },
  { month: '5月', issuance: 3000, progress: 13.8 },
  { month: '6月', issuance: 4500, progress: 25.5 },
  { month: '7月', issuance: 3500, progress: 34.6 },
  { month: '8月', issuance: 8000, progress: 55.4 },
  { month: '9月', issuance: 9000, progress: 78.8 },
  { month: '10月', issuance: 6000, progress: 94.4 },
  { month: '11月', issuance: 2650, progress: 101.3 },
];
