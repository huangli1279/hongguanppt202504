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
];

// 居民收入与消费支出数据
export interface IncomeExpenditureDataPoint {
  period: string;
  wageIncome: number;           // 工资性收入累计同比
  operatingIncome: number;      // 经营净收入累计同比
  propertyIncome: number;       // 财产净收入累计同比
  consumptionReal: number;      // 居民人均消费支出实际累计同比
  incomeReal: number;           // 居民人均可支配收入实际累计同比
}

export const incomeExpenditureData: IncomeExpenditureDataPoint[] = [
  { period: '2024-03', wageIncome: 6.80, operatingIncome: 6.80, propertyIncome: 3.20, consumptionReal: 8.30, incomeReal: 6.20 },
  { period: '2024-06', wageIncome: 5.75, operatingIncome: 6.41, propertyIncome: 2.14, consumptionReal: 6.70, incomeReal: 5.30 },
  { period: '2024-09', wageIncome: 5.70, operatingIncome: 6.40, propertyIncome: 1.20, consumptionReal: 5.30, incomeReal: 4.90 },
  { period: '2024-12', wageIncome: 5.80, operatingIncome: 5.60, propertyIncome: 2.20, consumptionReal: 5.10, incomeReal: 5.10 },
  { period: '2025-03', wageIncome: 5.93, operatingIncome: 5.71, propertyIncome: 2.73, consumptionReal: 5.30, incomeReal: 5.60 },
  { period: '2025-06', wageIncome: 5.70, operatingIncome: 5.30, propertyIncome: 2.50, consumptionReal: 5.30, incomeReal: 5.40 },
  { period: '2025-09', wageIncome: 5.40, operatingIncome: 5.30, propertyIncome: 1.70, consumptionReal: 4.70, incomeReal: 5.20 },
  { period: '2025-12', wageIncome: 5.30, operatingIncome: 5.00, propertyIncome: 1.60, consumptionReal: 4.40, incomeReal: 5.00 },
];
