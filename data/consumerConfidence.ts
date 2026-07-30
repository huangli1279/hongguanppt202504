// 消费者信心及分项指标数据

export interface ConsumerConfidenceDataPoint {
  period: string;
  confidence: number;                 // 消费者信心指数
  employment: number | null;          // 就业信心指数
  income: number | null;              // 收入信心指数
  willingness: number | null;         // 消费意愿指数
}

export const consumerConfidenceData: ConsumerConfidenceDataPoint[] = [
  { period: '2022-01', confidence: 121.50, employment: 125.30, income: 119.50, willingness: 112.20 },
  { period: '2022-02', confidence: 120.50, employment: 125.00, income: 118.00, willingness: 110.00 },
  { period: '2022-03', confidence: 113.20, employment: 116.10, income: 114.10, willingness: 105.50 },
  { period: '2022-04', confidence: 86.70, employment: 79.40, income: 93.50, willingness: 87.10 },
  { period: '2022-05', confidence: 86.80, employment: 80.00, income: 93.90, willingness: 86.60 },
  { period: '2022-06', confidence: 88.90, employment: 82.90, income: 96.70, willingness: 87.10 },
  { period: '2022-07', confidence: 87.90, employment: 81.60, income: 95.40, willingness: 86.70 },
  { period: '2022-08', confidence: 87.00, employment: 81.30, income: 93.50, willingness: 86.30 },
  { period: '2022-09', confidence: 87.20, employment: 81.80, income: 93.70, willingness: 86.10 },
  { period: '2022-10', confidence: 86.80, employment: 80.30, income: 92.50, willingness: 87.50 },
  { period: '2022-11', confidence: 85.50, employment: 77.50, income: 91.50, willingness: 87.30 },
  { period: '2022-12', confidence: 88.30, employment: 82.70, income: 95.40, willingness: 86.70 },
  { period: '2023-01', confidence: 91.20, employment: 85.70, income: 97.50, willingness: 90.50 },
  { period: '2023-02', confidence: 94.70, employment: 90.80, income: 99.20, willingness: 94.10 },
  { period: '2023-03', confidence: 94.90, employment: 88.80, income: 101.00, willingness: 94.80 },
  { period: '2023-04', confidence: 87.10, employment: 79.70, income: 93.40, willingness: 88.20 },
  { period: '2023-05', confidence: 88.20, employment: 79.10, income: 95.60, willingness: 89.80 },
  { period: '2023-06', confidence: 86.40, employment: 76.20, income: 94.80, willingness: 88.30 },
  { period: '2023-07', confidence: 86.40, employment: 75.60, income: 94.30, willingness: 89.40 },
  { period: '2023-08', confidence: 86.50, employment: 76.00, income: 94.50, willingness: 89.00 },
  { period: '2023-09', confidence: 87.20, employment: 78.20, income: 93.70, willingness: 89.70 },
  { period: '2023-10', confidence: 87.90, employment: 78.30, income: 94.60, willingness: 90.70 },
  { period: '2023-11', confidence: 87.00, employment: 77.40, income: 94.30, willingness: 89.20 },
  { period: '2023-12', confidence: 87.60, employment: 77.60, income: 94.70, willingness: 90.70 },
  { period: '2024-01', confidence: 88.90, employment: 78.20, income: 95.70, willingness: 92.90 },
  { period: '2024-02', confidence: 89.10, employment: 80.10, income: 96.00, willingness: 91.20 },
  { period: '2024-03', confidence: 89.40, employment: 78.60, income: 96.90, willingness: 92.70 },
  { period: '2024-04', confidence: 88.20, employment: 77.00, income: 95.00, willingness: 92.80 },
  { period: '2024-05', confidence: 86.40, employment: 74.00, income: 93.20, willingness: 91.90 },
  { period: '2024-06', confidence: 86.20, employment: 71.80, income: 93.80, willingness: 93.00 },
  { period: '2024-07', confidence: 86.00, employment: 71.60, income: 94.40, willingness: 92.00 },
  { period: '2024-08', confidence: 85.80, employment: 71.50, income: 94.20, willingness: 91.50 },
  { period: '2024-09', confidence: 85.70, employment: 71.30, income: 93.90, willingness: 92.00 },
  { period: '2024-10', confidence: 86.90, employment: 73.30, income: 94.30, willingness: 93.10 },
  { period: '2024-11', confidence: 86.20, employment: 71.40, income: 94.10, willingness: 93.00 },
  { period: '2024-12', confidence: 86.40, employment: 72.50, income: 94.00, willingness: 92.70 },
  { period: '2025-01', confidence: 87.50, employment: 72.90, income: 95.40, willingness: 94.40 },
  { period: '2025-02', confidence: 88.40, employment: 74.00, income: 96.50, willingness: 94.60 },
  { period: '2025-03', confidence: 87.50, employment: 72.40, income: 95.50, willingness: 94.60 },
  { period: '2025-04', confidence: 87.80, employment: 72.50, income: 94.80, willingness: 96.10 },
  { period: '2025-05', confidence: 88.00, employment: 71.40, income: 96.60, willingness: 95.90 },
  { period: '2025-06', confidence: 87.90, employment: 70.60, income: 96.10, willingness: 96.90 },
  { period: '2025-07', confidence: 89.00, employment: 72.80, income: 98.10, willingness: 96.20 },
  { period: '2025-08', confidence: 89.20, employment: 74.90, income: 98.00, willingness: 94.70 },
  { period: '2025-09', confidence: 89.60, employment: 72.40, income: 97.80, willingness: 98.60 },
  { period: '2025-10', confidence: 89.40, employment: 75.90, income: 96.70, willingness: 95.50 },
  { period: '2025-11', confidence: 90.30, employment: 76.70, income: 98.50, willingness: 95.80 },
  { period: '2025-12', confidence: 89.50, employment: 76.60, income: 97.50, willingness: 94.30 },
  { period: '2026-01', confidence: 90.60, employment: 77.20, income: 98.40, willingness: 96.30 },
  { period: '2026-02', confidence: 91.60, employment: 76.30, income: 100.30, willingness: 98.10 },
  { period: '2026-03', confidence: 90.00, employment: 74.40, income: 98.90, willingness: 96.80 },
  { period: '2026-04', confidence: 89.00, employment: 73.40, income: 97.90, willingness: 95.60 },
  { period: '2026-05', confidence: 89.90, employment: 74.60, income: 98.80, willingness: 96.40 },
  { period: '2026-06', confidence: 89.40, employment: null, income: null, willingness: null },
];

// 居民收入与消费支出数据
export interface IncomeExpenditureDataPoint {
  period: string;
  incomeReal: number;           // 居民人均可支配收入:实际累计同比
  wageIncome: number;           // 居民人均可支配收入:工资性收入:累计同比
  operatingIncome: number;      // 居民人均可支配收入:经营净收入:累计同比
  propertyIncome: number;       // 居民人均可支配收入:财产净收入:累计同比
  transferIncome: number;       // 居民人均可支配收入:转移净收入:累计同比
  consumptionReal: number;      // 居民人均消费支出:实际累计同比
}

export const incomeExpenditureData: IncomeExpenditureDataPoint[] = [
  { period: '2022-03', incomeReal: 5.10, wageIncome: 6.60, operatingIncome: 5.40, propertyIncome: 6.10, transferIncome: 6.30, consumptionReal: 5.70 },
  { period: '2022-06', incomeReal: 3.00, wageIncome: 4.70, operatingIncome: 3.30, propertyIncome: 5.20, transferIncome: 5.60, consumptionReal: 0.80 },
  { period: '2022-09', incomeReal: 3.20, wageIncome: 4.70, operatingIncome: 5.20, propertyIncome: 5.80, transferIncome: 5.60, consumptionReal: 1.50 },
  { period: '2022-12', incomeReal: 2.90, wageIncome: 4.90, operatingIncome: 4.80, propertyIncome: 4.80, transferIncome: 5.50, consumptionReal: -0.20 },
  { period: '2023-03', incomeReal: 5.70, wageIncome: 5.00, operatingIncome: 5.40, propertyIncome: 4.10, transferIncome: 5.10, consumptionReal: 4.60 },
  { period: '2023-06', incomeReal: 5.80, wageIncome: 6.80, operatingIncome: 6.00, propertyIncome: 4.70, transferIncome: 6.10, consumptionReal: 6.80 },
  { period: '2023-09', incomeReal: 5.90, wageIncome: 7.10, operatingIncome: 6.20, propertyIncome: 4.20, transferIncome: 5.40, consumptionReal: 6.80 },
  { period: '2023-12', incomeReal: 6.13, wageIncome: 6.49, operatingIncome: 6.80, propertyIncome: 3.20, transferIncome: 4.80, consumptionReal: 6.10 },
  { period: '2024-03', incomeReal: 6.25, wageIncome: 6.33, operatingIncome: 5.71, propertyIncome: 2.75, transferIncome: 3.50, consumptionReal: 5.80 },
  { period: '2024-06', incomeReal: 5.40, wageIncome: 5.76, operatingIncome: 5.10, propertyIncome: 2.50, transferIncome: 3.10, consumptionReal: 5.30 },
  { period: '2024-09', incomeReal: 5.25, wageIncome: 5.40, operatingIncome: 5.10, propertyIncome: 1.70, transferIncome: 3.50, consumptionReal: 4.70 },
  { period: '2024-12', incomeReal: 5.23, wageIncome: 5.39, operatingIncome: 5.80, propertyIncome: 1.40, transferIncome: 3.70, consumptionReal: 4.40 },
  // 以下为统计局官方累计同比（实际增速 / 分项名义增速）
  { period: '2025-03', incomeReal: 5.60, wageIncome: 5.90, operatingIncome: 5.70, propertyIncome: 2.70, transferIncome: 5.50, consumptionReal: 5.30 },
  { period: '2025-06', incomeReal: 5.40, wageIncome: 5.70, operatingIncome: 5.30, propertyIncome: 2.50, transferIncome: 5.60, consumptionReal: 5.30 },
  { period: '2025-09', incomeReal: 5.20, wageIncome: 5.40, operatingIncome: 5.30, propertyIncome: 1.70, transferIncome: 5.30, consumptionReal: 4.70 },
  { period: '2025-12', incomeReal: 5.00, wageIncome: 5.30, operatingIncome: 5.00, propertyIncome: 1.60, transferIncome: 5.70, consumptionReal: 4.40 },
  { period: '2026-03', incomeReal: 4.00, wageIncome: 4.90, operatingIncome: 6.60, propertyIncome: 1.60, transferIncome: 5.10, consumptionReal: 2.60 },
  { period: '2026-06', incomeReal: 4.20, wageIncome: 5.30, operatingIncome: 6.50, propertyIncome: 1.10, transferIncome: 5.80, consumptionReal: 2.70 },
];

// 分行业城镇非私营单位就业人员年平均工资（万元）
export interface IndustryAvgSalaryDataPoint {
  period: string;
  itSoftwareAi: number;         // IT/软件(AI相关)
  finance: number;              // 金融业
  scientificResearch: number;   // 科研技术服务
  utilities: number;            // 电力燃气水
  realEstate: number;           // 房地产业
  education: number;            // 教育
  nationalNonPrivate: number;   // 全国非私营均值
}

export const industryAvgSalaryData: IndustryAvgSalaryDataPoint[] = [
  { period: '2021', itSoftwareAi: 20.15, finance: 15.08, scientificResearch: 15.18, utilities: 12.53, realEstate: 9.11, education: 11.14, nationalNonPrivate: 10.68 },
  { period: '2022', itSoftwareAi: 22.04, finance: 17.43, scientificResearch: 16.35, utilities: 13.30, realEstate: 9.03, education: 12.04, nationalNonPrivate: 11.40 },
  { period: '2023', itSoftwareAi: 23.18, finance: 19.77, scientificResearch: 17.14, utilities: 14.36, realEstate: 9.19, education: 12.41, nationalNonPrivate: 12.07 },
  { period: '2024', itSoftwareAi: 23.90, finance: 20.19, scientificResearch: 17.54, utilities: 15.03, realEstate: 9.19, education: 12.62, nationalNonPrivate: 12.41 },
  { period: '2025', itSoftwareAi: 24.88, finance: 21.12, scientificResearch: 18.21, utilities: 16.09, realEstate: 8.97, education: 13.35, nationalNonPrivate: 12.94 },
];

// 人行储户问卷调查：收入感受指数、收入信心指数（作收入预期）
export interface IncomeSentimentDataPoint {
  period: string;
  incomeFeeling: number;      // 收入感受指数
  incomeExpectation: number;  // 收入预期指数（收入信心指数）
}

export const incomeSentimentData: IncomeSentimentDataPoint[] = [
  { period: '22Q4', incomeFeeling: 43.8, incomeExpectation: 44.4 },
  { period: '23Q1', incomeFeeling: 50.7, incomeExpectation: 49.9 },
  { period: '23Q2', incomeFeeling: 49.7, incomeExpectation: 48.5 },
  { period: '23Q3', incomeFeeling: 47.4, incomeExpectation: 47.4 },
  { period: '23Q4', incomeFeeling: 47.1, incomeExpectation: 47.0 },
  { period: '24Q1', incomeFeeling: 48.0, incomeExpectation: 47.0 },
  { period: '24Q2', incomeFeeling: 46.6, incomeExpectation: 45.6 },
  { period: '24Q3', incomeFeeling: 45.7, incomeExpectation: 45.2 },
  { period: '24Q4', incomeFeeling: 46.0, incomeExpectation: 45.1 },
  { period: '25Q1', incomeFeeling: 46.3, incomeExpectation: 45.6 },
  { period: '25Q2', incomeFeeling: 45.0, incomeExpectation: 45.0 },
  { period: '25Q3', incomeFeeling: 46.5, incomeExpectation: 45.9 },
  { period: '25Q4', incomeFeeling: 46.1, incomeExpectation: 45.8 },
];
