// 消费和零售数据 (Slide 8-9, 11)

import {
  RetailTrendDataPoint,
  UrbanRuralDataPoint,
  ServiceGoodsDataPoint,
  TierOneCityRetailDataPoint,
  DurableGoodsDataPoint,
  ConfidenceDataPoint,
  IncomeSourceDataPoint,
  ConsumerConfidenceDataPoint,
  ResidentIncomeExpenditureDataPoint,
  AutoDealerInventoryDataPoint,
} from '../types';

// Slide 8 Data
export const retailTrendData: RetailTrendDataPoint[] = [
  { month: '2024-03', value: 3.10 },
  { month: '2024-04', value: 2.30 },
  { month: '2024-05', value: 3.70 },
  { month: '2024-06', value: 2.00 },
  { month: '2024-07', value: 2.70 },
  { month: '2024-08', value: 2.10 },
  { month: '2024-09', value: 3.20 },
  { month: '2024-10', value: 4.80 },
  { month: '2024-11', value: 3.00 },
  { month: '2024-12', value: 3.70 },
  { month: '2025-03', value: 5.90 },
  { month: '2025-04', value: 5.10 },
  { month: '2025-05', value: 6.40 },
  { month: '2025-06', value: 4.80 },
  { month: '2025-07', value: 3.70 },
  { month: '2025-08', value: 3.40 },
  { month: '2025-09', value: 3.00 },
  { month: '2025-10', value: 2.90, highlight: true },
  { month: '2025-11', value: 1.30, highlight: true },
  { month: '2025-12', value: 0.86, highlight: true },
];

export const urbanRuralData: UrbanRuralDataPoint[] = [
  { month: '2024-02', urban: 5.50, rural: 5.80 },
  { month: '2024-03', urban: 4.60, rural: 5.20 },
  { month: '2024-04', urban: 4.00, rural: 4.80 },
  { month: '2024-05', urban: 4.00, rural: 4.70 },
  { month: '2024-06', urban: 3.60, rural: 4.50 },
  { month: '2024-07', urban: 3.40, rural: 4.50 },
  { month: '2024-08', urban: 3.20, rural: 4.40 },
  { month: '2024-09', urban: 3.20, rural: 4.40 },
  { month: '2024-10', urban: 3.40, rural: 4.40 },
  { month: '2024-11', urban: 3.30, rural: 4.30 },
  { month: '2024-12', urban: 3.40, rural: 4.30 },
  { month: '2025-02', urban: 3.80, rural: 4.60 },
  { month: '2025-03', urban: 4.50, rural: 4.90 },
  { month: '2025-04', urban: 4.70, rural: 4.80 },
  { month: '2025-05', urban: 5.10, rural: 4.90 },
  { month: '2025-06', urban: 5.00, rural: 4.90 },
  { month: '2025-07', urban: 4.80, rural: 4.70 },
  { month: '2025-08', urban: 4.60, rural: 4.70 },
  { month: '2025-09', urban: 4.40, rural: 4.60 },
  { month: '2025-10', urban: 4.24, rural: 4.57 },
  { month: '2025-11', urban: 3.90, rural: 4.40 },
  { month: '2025-12', urban: 3.63, rural: 4.12 },
];

// Slide 9 Data

export const serviceGoodsData: ServiceGoodsDataPoint[] = [
  { month: '2024-02', total: 5.50, service: 12.3, goods: 4.6 },
  { month: '2024-03', total: 4.70, service: 10.0, goods: 4.0 },
  { month: '2024-04', total: 4.10, service: 8.4, goods: 3.5 },
  { month: '2024-05', total: 4.10, service: 7.9, goods: 3.5 },
  { month: '2024-06', total: 3.70, service: 7.5, goods: 3.2 },
  { month: '2024-07', total: 3.50, service: 7.2, goods: 3.1 },
  { month: '2024-08', total: 3.40, service: 6.9, goods: 3.0 },
  { month: '2024-09', total: 3.30, service: 6.7, goods: 3.0 },
  { month: '2024-10', total: 3.50, service: 6.5, goods: 3.2 },
  { month: '2024-11', total: 3.50, service: 6.4, goods: 3.2 },
  { month: '2024-12', total: 3.50, service: 6.2, goods: 3.2 },
  { month: '2025-02', total: 4.00, service: 4.9, goods: 3.9 },
  { month: '2025-03', total: 4.60, service: 5.0, goods: 4.6 },
  { month: '2025-04', total: 4.70, service: 5.1, goods: 4.7 },
  { month: '2025-05', total: 5.00, service: 5.2, goods: 5.1 },
  { month: '2025-06', total: 5.00, service: 5.3, goods: 5.1 },
  { month: '2025-07', total: 4.80, service: 5.2, goods: 4.9 },
  { month: '2025-08', total: 4.60, service: 5.1, goods: 4.8 },
  { month: '2025-09', total: 4.50, service: 5.2, goods: 4.6 },
  { month: '2025-10', total: 4.30, service: 5.3, goods: 4.4 },
  { month: '2025-11', total: 4.00, service: 5.4, goods: 4.1 },
  { month: '2025-12', total: 3.69, service: 5.5, goods: 3.76 },
];


export const tierOneCityRetailData: TierOneCityRetailDataPoint[] = [
  { month: '2024-02', guangzhou: 6.50, shenzhen: 5.63, beijing: 2.60, shanghai: 1.90 },
  { month: '2024-03', guangzhou: 3.50, shenzhen: 4.30, beijing: -0.10, shanghai: 0.10 },
  { month: '2024-04', guangzhou: 2.50, shenzhen: 2.30, beijing: -0.20, shanghai: -1.30 },
  { month: '2024-05', guangzhou: 2.00, shenzhen: 1.78, beijing: 1.00, shanghai: -0.70 },
  { month: '2024-06', guangzhou: 0.00, shenzhen: 1.00, beijing: -0.30, shanghai: -2.30 },
  { month: '2024-07', guangzhou: -0.30, shenzhen: 1.17, beijing: -0.80, shanghai: -2.80 },
  { month: '2024-08', guangzhou: -0.50, shenzhen: 1.07, beijing: -0.93, shanghai: -3.30 },
  { month: '2024-09', guangzhou: 0.10, shenzhen: 0.67, beijing: -1.60, shanghai: -3.40 },
  { month: '2024-10', guangzhou: 0.50, shenzhen: 0.96, beijing: -1.30, shanghai: -2.00 },
  { month: '2024-11', guangzhou: 0.30, shenzhen: 1.51, beijing: -2.80, shanghai: -3.10 },
  { month: '2024-12', guangzhou: 0.00, shenzhen: 1.08, beijing: -2.70, shanghai: -3.10 },
  { month: '2025-02', guangzhou: 1.20, shenzhen: 1.66, beijing: -0.10, shanghai: -1.00 },
  { month: '2025-03', guangzhou: 3.50, shenzhen: 3.05, beijing: -3.30, shanghai: -1.10 },
  { month: '2025-04', guangzhou: 4.00, shenzhen: 3.66, beijing: -3.70, shanghai: -0.30 },
  { month: '2025-05', guangzhou: 5.10, shenzhen: 4.66, beijing: -3.10, shanghai: 1.40 },
  { month: '2025-06', guangzhou: 5.90, shenzhen: 3.47, beijing: -3.80, shanghai: 1.70 },
  { month: '2025-07', guangzhou: 5.40, shenzhen: 3.60, beijing: -4.20, shanghai: 2.50 },
  { month: '2025-08', guangzhou: 4.90, shenzhen: 3.83, beijing: -5.10, shanghai: 3.70 },
  { month: '2025-09', guangzhou: 4.10, shenzhen: 3.63, beijing: -5.10, shanghai: 4.30 },
  { month: '2025-10', guangzhou: 3.80, shenzhen: 4.02, beijing: -3.20, shanghai: 4.80 },
  { month: '2025-11', guangzhou: 4.20, shenzhen: 2.77, beijing: -3.10, shanghai: 5.00 },
  { month: '2025-12', guangzhou: null, shenzhen: null, beijing: -2.90, shanghai: 4.60 },
];

export const durableGoodsData: DurableGoodsDataPoint[] = [
  { category: '通讯器材', nov: 20.6, dec: 18.2 },
  { category: '家电音像', nov: -19.4, dec: 5.9 },
  { category: '汽车', nov: -8.3, dec: -3.5 },
  { category: '建筑装潢', nov: -17.0, dec: -15.5 },
];

// Slide 11 Data

export const confidenceData: ConfidenceDataPoint[] = [
  { month: '1月', employment: 87.5, income: 86.2 },
  { month: '2月', employment: 87.2, income: 85.8 },
  { month: '3月', employment: 87.8, income: 85.0 },
  { month: '4月', employment: 87.0, income: 84.2 },
  { month: '5月', employment: 86.8, income: 83.5 },
  { month: '6月', employment: 86.5, income: 82.8 },
  { month: '7月', employment: 86.2, income: 81.5 },
  { month: '8月', employment: 86.0, income: 80.8 },
  { month: '9月', employment: 86.3, income: 79.5 },
  { month: '10月', employment: 85.8, income: 78.8 },
  { month: '11月', employment: 85.5, income: 78.2 },
  { month: '12月', employment: 85.2, income: 77.5 },
];

export const incomeSourceData: IncomeSourceDataPoint[] = [
  { source: '工资性收入', value: 5.2 },
  { source: '经营净收入', value: 5.8 },
  { source: '转移净收入', value: 4.5 },
  { source: '财产净收入', value: 1.6, highlight: true },
];

// Consumer Confidence and Income Data (New Slide)
export const consumerConfidenceData: ConsumerConfidenceDataPoint[] = [
  { month: '2024-01', confidence: 88.9, income: 95.7, employment: 78.2, consumption: 92.9 },
  { month: '2024-02', confidence: 89.1, income: 96.0, employment: 80.1, consumption: 91.2 },
  { month: '2024-03', confidence: 89.4, income: 96.9, employment: 78.6, consumption: 92.7 },
  { month: '2024-04', confidence: 88.2, income: 95.0, employment: 77.0, consumption: 92.8 },
  { month: '2024-05', confidence: 86.4, income: 93.2, employment: 74.0, consumption: 91.9 },
  { month: '2024-06', confidence: 86.2, income: 93.8, employment: 71.8, consumption: 93.0 },
  { month: '2024-07', confidence: 86.0, income: 94.4, employment: 71.6, consumption: 92.0 },
  { month: '2024-08', confidence: 85.8, income: 94.2, employment: 71.5, consumption: 91.5 },
  { month: '2024-09', confidence: 85.7, income: 93.9, employment: 71.3, consumption: 92.0 },
  { month: '2024-10', confidence: 86.9, income: 94.3, employment: 73.3, consumption: 93.1 },
  { month: '2024-11', confidence: 86.2, income: 94.1, employment: 71.4, consumption: 93.0 },
  { month: '2024-12', confidence: 86.4, income: 94.0, employment: 72.5, consumption: 92.7 },
  { month: '2025-01', confidence: 87.5, income: 95.4, employment: 72.9, consumption: 94.4 },
  { month: '2025-02', confidence: 88.4, income: 96.5, employment: 74.0, consumption: 94.6 },
  { month: '2025-03', confidence: 87.5, income: 95.5, employment: 72.4, consumption: 94.6 },
  { month: '2025-04', confidence: 87.8, income: 94.8, employment: 72.5, consumption: 96.1 },
  { month: '2025-05', confidence: 88.0, income: 96.6, employment: 71.4, consumption: 95.9 },
  { month: '2025-06', confidence: 87.9, income: 96.1, employment: 70.6, consumption: 96.9 },
  { month: '2025-07', confidence: 89.0, income: 98.1, employment: 72.8, consumption: 96.2 },
  { month: '2025-08', confidence: 89.2, income: 98.0, employment: 74.9, consumption: 94.7 },
  { month: '2025-09', confidence: 89.6, income: 97.8, employment: 72.4, consumption: 98.6 },
  { month: '2025-10', confidence: 89.4, income: 96.7, employment: 75.9, consumption: 95.5 },
  { month: '2025-11', confidence: 90.3, income: 98.5, employment: 76.7, consumption: 95.8 },
];

export const residentIncomeExpenditureData: ResidentIncomeExpenditureDataPoint[] = [
  { period: '2022-03', disposableIncome: 5.10, wageIncome: 6.60, businessIncome: 5.40, propertyIncome: 6.10, transferIncome: 6.30, consumptionExpenditure: 5.70 },
  { period: '2022-06', disposableIncome: 3.00, wageIncome: 4.70, businessIncome: 3.20, propertyIncome: 5.20, transferIncome: 5.60, consumptionExpenditure: 0.80 },
  { period: '2022-09', disposableIncome: 3.20, wageIncome: 5.10, businessIncome: 5.20, propertyIncome: 5.80, transferIncome: 5.60, consumptionExpenditure: 1.50 },
  { period: '2022-12', disposableIncome: 2.90, wageIncome: 4.90, businessIncome: 4.80, propertyIncome: 4.90, transferIncome: 5.50, consumptionExpenditure: -0.20 },
  { period: '2023-03', disposableIncome: 3.80, wageIncome: 5.00, businessIncome: 5.80, propertyIncome: 4.10, transferIncome: 5.10, consumptionExpenditure: 4.00 },
  { period: '2023-06', disposableIncome: 5.80, wageIncome: 6.80, businessIncome: 7.00, propertyIncome: 4.70, transferIncome: 6.10, consumptionExpenditure: 7.60 },
  { period: '2023-09', disposableIncome: 5.90, wageIncome: 6.80, businessIncome: 6.70, propertyIncome: 3.70, transferIncome: 5.80, consumptionExpenditure: 8.80 },
  { period: '2023-12', disposableIncome: 6.10, wageIncome: 7.10, businessIncome: 6.00, propertyIncome: 4.20, transferIncome: 5.40, consumptionExpenditure: 9.00 },
  { period: '2024-03', disposableIncome: 6.20, wageIncome: 6.80, businessIncome: 6.80, propertyIncome: 3.20, transferIncome: 4.80, consumptionExpenditure: 8.30 },
  { period: '2024-06', disposableIncome: 5.30, wageIncome: 5.75, businessIncome: 6.41, propertyIncome: 2.14, transferIncome: 5.00, consumptionExpenditure: 6.70 },
  { period: '2024-09', disposableIncome: 4.90, wageIncome: 5.70, businessIncome: 6.40, propertyIncome: 1.20, transferIncome: 4.90, consumptionExpenditure: 5.30 },
  { period: '2024-12', disposableIncome: 5.10, wageIncome: 5.80, businessIncome: 5.60, propertyIncome: 2.20, transferIncome: 5.30, consumptionExpenditure: 5.10 },
  { period: '2025-03', disposableIncome: 5.60, wageIncome: 5.93, businessIncome: 5.71, propertyIncome: 2.73, transferIncome: 5.50, consumptionExpenditure: 5.30 },
  { period: '2025-06', disposableIncome: 5.40, wageIncome: 5.70, businessIncome: 5.30, propertyIncome: 2.50, transferIncome: 5.60, consumptionExpenditure: 5.30 },
  { period: '2025-09', disposableIncome: 5.20, wageIncome: 5.40, businessIncome: 5.30, propertyIncome: 1.70, transferIncome: 5.30, consumptionExpenditure: 4.70 },
  { period: '2025-12', disposableIncome: 5.00, wageIncome: 5.30, businessIncome: 5.00, propertyIncome: 1.60, transferIncome: 5.70, consumptionExpenditure: 4.40 },
];

export const autoDealerInventoryData: AutoDealerInventoryDataPoint[] = [
  { month: '1月', year2024: 1.38, year2025: 1.40, yoy: 1.4 },
  { month: '2月', year2024: 1.74, year2025: 1.61, yoy: -7.5 },
  { month: '3月', year2024: 1.56, year2025: 1.56, yoy: 0.0 },
  { month: '4月', year2024: 1.70, year2025: 1.41, yoy: -17.1 },
  { month: '5月', year2024: 1.44, year2025: 1.38, yoy: -4.2 },
  { month: '6月', year2024: 1.40, year2025: 1.42, yoy: 1.4 },
  { month: '7月', year2024: 1.50, year2025: 1.35, yoy: -10.0 },
  { month: '8月', year2024: 1.16, year2025: 1.31, yoy: 12.9 },
  { month: '9月', year2024: 1.29, year2025: 1.35, yoy: 4.7 },
  { month: '10月', year2024: 1.10, year2025: 1.17, yoy: 6.4 },
  { month: '11月', year2024: 1.11, year2025: 1.57, yoy: 41.4 },
  { month: '12月', year2024: 1.14, year2025: 1.31, yoy: 14.9 },
];
