// 消费者信心及分项指标数据

export interface ConsumerConfidenceDataPoint {
  period: string;
  confidence: number;      // 消费者信心指数
  income: number;          // 收入预期
  employment: number;      // 就业预期
  consumption: number;     // 消费意愿
}

export const consumerConfidenceData: ConsumerConfidenceDataPoint[] = [
  { period: '2024-01', confidence: 88.9, income: 95.7, employment: 78.2, consumption: 92.9 },
  { period: '2024-02', confidence: 89.1, income: 96.0, employment: 80.1, consumption: 91.2 },
  { period: '2024-03', confidence: 89.4, income: 96.9, employment: 78.6, consumption: 92.7 },
  { period: '2024-04', confidence: 88.2, income: 95.0, employment: 77.0, consumption: 92.8 },
  { period: '2024-05', confidence: 86.4, income: 93.2, employment: 74.0, consumption: 91.9 },
  { period: '2024-06', confidence: 86.2, income: 93.8, employment: 71.8, consumption: 93.0 },
  { period: '2024-07', confidence: 86.0, income: 94.4, employment: 71.6, consumption: 92.0 },
  { period: '2024-08', confidence: 85.8, income: 94.2, employment: 71.5, consumption: 91.5 },
  { period: '2024-09', confidence: 85.7, income: 93.9, employment: 71.3, consumption: 92.0 },
  { period: '2024-10', confidence: 86.9, income: 94.3, employment: 73.3, consumption: 93.1 },
  { period: '2024-11', confidence: 86.2, income: 94.1, employment: 71.4, consumption: 93.0 },
  { period: '2024-12', confidence: 86.4, income: 94.0, employment: 72.5, consumption: 92.7 },
  { period: '2025-01', confidence: 87.5, income: 95.4, employment: 72.9, consumption: 94.4 },
  { period: '2025-02', confidence: 88.4, income: 96.5, employment: 74.0, consumption: 94.6 },
  { period: '2025-03', confidence: 87.5, income: 95.5, employment: 72.4, consumption: 94.6 },
  { period: '2025-04', confidence: 87.8, income: 94.8, employment: 72.5, consumption: 96.1 },
  { period: '2025-05', confidence: 88.0, income: 96.6, employment: 71.4, consumption: 95.9 },
  { period: '2025-06', confidence: 87.9, income: 96.1, employment: 70.6, consumption: 96.9 },
  { period: '2025-07', confidence: 89.0, income: 98.1, employment: 72.8, consumption: 96.2 },
  { period: '2025-08', confidence: 89.2, income: 98.0, employment: 74.9, consumption: 94.7 },
  { period: '2025-09', confidence: 89.6, income: 97.8, employment: 72.4, consumption: 98.6 },
  { period: '2025-10', confidence: 89.4, income: 96.7, employment: 75.9, consumption: 95.5 },
  { period: '2025-11', confidence: 90.3, income: 98.5, employment: 76.7, consumption: 95.8 },
  { period: '2025-12', confidence: 89.5, income: 97.5, employment: 76.6, consumption: 94.3 },
  { period: '2026-01', confidence: 90.6, income: 98.4, employment: 77.2, consumption: 96.3 },
  { period: '2026-02', confidence: 91.6, income: 100.3, employment: 76.3, consumption: 98.1 },
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
  { period: '2025-03', incomeReal: 4.15, wageIncome: 4.39, operatingIncome: 6.80, propertyIncome: 1.10, transferIncome: 3.10, consumptionReal: 2.80 },
  { period: '2025-06', incomeReal: 4.20, wageIncome: 5.31, operatingIncome: 6.40, propertyIncome: 1.09, transferIncome: 3.77, consumptionReal: 2.70 },
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
