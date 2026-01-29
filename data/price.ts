// PPI 和 CPI 价格数据 (Slide 7, 10)

import {
  PpiTrendDataPoint,
  CommodityIndexDataPoint,
  IndustryPriceDataPoint,
  PpiIndustryMomDataPoint,
  CpiTrendDataPoint,
  CpiContributionDataPoint,
  ConsumptionPropensityDataPoint,
  IndustryGrowthTableData,
} from '../types';

// Slide 7 Data
export const ppiTrendData: PpiTrendDataPoint[] = [
  { month: '24-01', ppi: -2.5, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-02', ppi: -2.7, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-03', ppi: -2.8, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-04', ppi: -2.5, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-05', ppi: -1.4, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-06', ppi: -0.8, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-07', ppi: -0.8, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-08', ppi: -1.8, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-09', ppi: -2.8, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-10', ppi: -2.9, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-11', ppi: -2.5, productionMaterials: 0, livingMaterials: 0 },
  { month: '24-12', ppi: -2.3, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-01', ppi: -2.3, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-02', ppi: -2.2, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-03', ppi: -2.5, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-04', ppi: -2.7, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-05', ppi: -3.3, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-06', ppi: -3.6, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-07', ppi: -3.6, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-08', ppi: -2.9, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-09', ppi: -2.3, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-10', ppi: -2.1, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-11', ppi: -2.2, productionMaterials: 0, livingMaterials: 0 },
  { month: '25-12', ppi: -1.9, productionMaterials: 0, livingMaterials: 0 },
];

export const commodityIndexData: CommodityIndexDataPoint[] = [
  { month: '24-01', steel: 116.82, minerals: 186.53, nonFerrous: 104.54, energy: 154.68 },
  { month: '24-02', steel: 116.26, minerals: 183.66, nonFerrous: 103.82, energy: 157.75 },
  { month: '24-03', steel: 112.20, minerals: 174.53, nonFerrous: 106.13, energy: 160.18 },
  { month: '24-04', steel: 109.63, minerals: 169.45, nonFerrous: 112.36, energy: 163.85 },
  { month: '24-05', steel: 110.88, minerals: 180.04, nonFerrous: 119.34, energy: 160.12 },
  { month: '24-06', steel: 108.05, minerals: 178.01, nonFerrous: 117.94, energy: 159.34 },
  { month: '24-07', steel: 105.03, minerals: 181.60, nonFerrous: 115.39, energy: 161.41 },
  { month: '24-08', steel: 97.14, minerals: 176.51, nonFerrous: 110.24, energy: 154.95 },
  { month: '24-09', steel: 94.59, minerals: 170.44, nonFerrous: 111.87, energy: 146.85 },
  { month: '24-10', steel: 105.23, minerals: 172.81, nonFerrous: 116.46, energy: 150.51 },
  { month: '24-11', steel: 101.53, minerals: 174.00, nonFerrous: 115.53, energy: 148.27 },
  { month: '24-12', steel: 101.30, minerals: 176.07, nonFerrous: 114.51, energy: 145.73 },
  { month: '25-01', steel: 99.59, minerals: 172.04, nonFerrous: 113.23, energy: 149.57 },
  { month: '25-02', steel: 99.51, minerals: 170.49, nonFerrous: 115.19, energy: 146.25 },
  { month: '25-03', steel: 98.11, minerals: 169.87, nonFerrous: 117.99, energy: 138.47 },
  { month: '25-04', steel: 96.65, minerals: 165.69, nonFerrous: 114.17, energy: 130.39 },
  { month: '25-05', steel: 95.73, minerals: 164.12, nonFerrous: 114.89, energy: 126.12 },
  { month: '25-06', steel: 93.39, minerals: 159.93, nonFerrous: 115.69, energy: 129.68 },
  { month: '25-07', steel: 95.38, minerals: 158.54, nonFerrous: 116.58, energy: 128.03 },
  { month: '25-08', steel: 98.29, minerals: 166.89, nonFerrous: 116.10, energy: 129.17 },
  { month: '25-09', steel: 96.58, minerals: 169.37, nonFerrous: 116.95, energy: 130.88 },
  { month: '25-10', steel: 95.28, minerals: 172.50, nonFerrous: 120.98, energy: 127.25 },
  { month: '25-11', steel: 94.80, minerals: 174.60, nonFerrous: 123.00, energy: 127.60 },
  { month: '25-12', steel: 95.40, minerals: 173.40, nonFerrous: 127.60, energy: 124.50 },
];


export const industryPriceData: IndustryPriceDataPoint[] = [
  { industry: '锂离子电池', oct: 0.8, nov: 0.9, dec: 1.0 },
  { industry: '水泥制造', oct: 0.3, nov: 0.4, dec: 0.5 },
  { industry: '光伏设备', oct: 0.6, nov: 0.4, dec: 0.3 },
  { industry: '新能源车', oct: -0.2, nov: -0.1, dec: 0.1 },
];

// Slide 7.5 Data (New Slide - PPI Industry Mom Details)
export const ppiIndustryMomData: PpiIndustryMomDataPoint[] = [
  { month: '2025-12', lithium: 1.00, solar: 1.30, electronics: 0.40, coal: -1.30, oil: 0.00, ferrousMining: 3.70, nonFerrous: 0.00, nonFerrousSmelting: 2.80, chemicals: 0.10, nonMetals: -0.10, ferrousSmelting: 0.00, generalEquip: -0.10, automotive: -0.10, electrical: 2.80 },
  { month: '2025-11', lithium: 4.10, solar: -2.40, electronics: 0.30, coal: 0.60, oil: 2.60, ferrousMining: -0.60, nonFerrous: 0.00, nonFerrousSmelting: 2.10, chemicals: -0.50, nonMetals: -0.10, ferrousSmelting: 0.10, generalEquip: -0.20, automotive: 0.10, electrical: 2.10 },
  { month: '2025-10', lithium: 0.20, solar: 0.60, electronics: 0.40, coal: 1.60, oil: 2.30, ferrousMining: 0.90, nonFerrous: 5.30, nonFerrousSmelting: 2.40, chemicals: -0.60, nonMetals: 0.10, ferrousSmelting: -0.70, generalEquip: -0.10, automotive: 0.00, electrical: 2.40 },
  { month: '2025-09', lithium: 0.80, solar: 2.50, electronics: -0.10, coal: -2.00, oil: 2.60, ferrousMining: 2.50, nonFerrous: -0.40, nonFerrousSmelting: 1.20, chemicals: -0.40, nonMetals: 0.20, ferrousSmelting: -0.10, generalEquip: -0.50, automotive: -0.20, electrical: 1.20 },
  { month: '2025-08', lithium: -0.20, solar: 2.80, electronics: -0.10, coal: -1.10, oil: 2.10, ferrousMining: 0.80, nonFerrous: -0.10, nonFerrousSmelting: 0.20, chemicals: -1.00, nonMetals: 1.90, ferrousSmelting: -0.10, generalEquip: -0.30, automotive: -0.20, electrical: 0.20 },
  { month: '2025-07', lithium: -1.50, solar: 3.00, electronics: 0.80, coal: -1.10, oil: 0.70, ferrousMining: -0.70, nonFerrous: -1.40, nonFerrousSmelting: 0.80, chemicals: -0.30, nonMetals: -0.20, ferrousSmelting: -0.30, generalEquip: -0.40, automotive: -0.20, electrical: 0.80 },
  { month: '2025-06', lithium: -3.40, solar: 2.60, electronics: 0.20, coal: -2.00, oil: 1.30, ferrousMining: -0.70, nonFerrous: -1.40, nonFerrousSmelting: 0.20, chemicals: -1.80, nonMetals: -0.20, ferrousSmelting: 0.20, generalEquip: -0.40, automotive: -0.20, electrical: 0.20 },
  { month: '2025-05', lithium: -3.00, solar: -5.60, electronics: 0.10, coal: -0.90, oil: 0.80, ferrousMining: -1.20, nonFerrous: -1.00, nonFerrousSmelting: -0.10, chemicals: -1.00, nonMetals: -0.20, ferrousSmelting: 0.00, generalEquip: 0.10, automotive: -0.20, electrical: 0.10 },
  { month: '2025-04', lithium: -3.30, solar: -3.10, electronics: 0.30, coal: -0.90, oil: 1.50, ferrousMining: -0.60, nonFerrous: 0.00, nonFerrousSmelting: 0.30, chemicals: -1.00, nonMetals: -0.20, ferrousSmelting: -0.50, generalEquip: -0.20, automotive: -0.10, electrical: 0.30 },
  { month: '2025-03', lithium: -4.30, solar: -4.40, electronics: 0.50, coal: 0.10, oil: 0.40, ferrousMining: 0.20, nonFerrous: -0.50, nonFerrousSmelting: 0.50, chemicals: -0.50, nonMetals: -0.10, ferrousSmelting: -0.40, generalEquip: -0.70, automotive: -0.10, electrical: 0.30 },
  { month: '2025-02', lithium: -3.30, solar: 0.30, electronics: 0.30, coal: 0.90, oil: 1.80, ferrousMining: 0.00, nonFerrous: -0.90, nonFerrousSmelting: 0.30, chemicals: -0.90, nonMetals: -0.20, ferrousSmelting: -0.30, generalEquip: 0.00, automotive: -0.10, electrical: 0.30 },
  { month: '2025-01', lithium: -0.60, solar: 0.50, electronics: -0.40, coal: -2.20, oil: 4.50, ferrousMining: 0.40, nonFerrous: -0.20, nonFerrousSmelting: -0.40, chemicals: -0.60, nonMetals: -0.90, ferrousSmelting: -0.20, generalEquip: 0.50, automotive: -0.30, electrical: -0.40 },
];

// Slide 10 Data (CPI)

export const cpiTrendData: CpiTrendDataPoint[] = [
  { month: '2024-01', headline: -0.8, core: 0.4 },
  { month: '2024-02', headline: 0.7, core: 1.2 },
  { month: '2024-03', headline: 0.1, core: 0.6 },
  { month: '2024-04', headline: 0.3, core: 0.7 },
  { month: '2024-05', headline: 0.3, core: 0.6 },
  { month: '2024-06', headline: 0.2, core: 0.6 },
  { month: '2024-07', headline: 0.5, core: 0.4 },
  { month: '2024-08', headline: 0.6, core: 0.3 },
  { month: '2024-09', headline: 0.4, core: 0.1 },
  { month: '2024-10', headline: 0.3, core: 0.2 },
  { month: '2024-11', headline: 0.2, core: 0.3 },
  { month: '2024-12', headline: 0.1, core: 0.4 },
  { month: '2025-01', headline: 0.5, core: 0.6 },
  { month: '2025-02', headline: -0.7, core: -0.1 },
  { month: '2025-03', headline: -0.1, core: 0.5 },
  { month: '2025-04', headline: -0.1, core: 0.5 },
  { month: '2025-05', headline: -0.1, core: 0.6 },
  { month: '2025-06', headline: 0.1, core: 0.7 },
  { month: '2025-07', headline: 0, core: 0.8 },
  { month: '2025-08', headline: -0.4, core: 0.9 },
  { month: '2025-09', headline: -0.3, core: 1.0 },
  { month: '2025-10', headline: 0.2, core: 1.2 },
  { month: '2025-11', headline: 0.7, core: 1.2 },
  { month: '2025-12', headline: 0.8, core: 1.2 },
];

export const consumptionPropensityData: ConsumptionPropensityDataPoint[] = [
  { period: "2023-Q1", value: 62.0 },
  { period: "2023-Q2", value: 68.5 },
  { period: "2023-Q3", value: 69.8 },
  { period: "2023-Q4", value: 73.2 },
  { period: "2024-Q1", value: 63.3 },
  { period: "2024-Q2", value: 67.8 },
  { period: "2024-Q3", value: 70.2 },
  { period: "2024-Q4", value: 73.2 },
  { period: "2025-Q1", value: 62.8 },
  { period: "2025-Q2", value: 67.4 },
  { period: "2025-Q3", value: 69.5 },
  { period: "2025-Q4", value: 72.7 },
];

export const cpiContributionData: CpiContributionDataPoint[] = [
  { category: '金饰品', value: 0.54, isPositive: true, highlight: true },
  { category: '鲜菜', value: 0.42, isPositive: true, highlight: true },
  { category: '鲜果', value: 0.11, isPositive: true },
  { category: '其他服务', value: 0.23, isPositive: true },
  { category: '能源', value: -0.20, isPositive: false },
  { category: '交通通信', value: -0.22, isPositive: false },
  { category: '房租', value: -0.08, isPositive: false },
];

export const cpiEightCategoriesData: IndustryGrowthTableData = {
  title: "全国居民消费价格指数（CPI）八大类分项环比数据",
  source: "国家统计局",
  unit: "%",
  timeSeries: ["2025-12", "2025-11", "2025-10", "2025-09", "2025-08", "2025-07", "2025-06", "2025-05", "2025-04", "2025-03", "2025-02", "2025-01", "2024-12", "2024-11", "2024-10"],
  industryData: {
    "食品烟酒": [0.2, 0.3, -0.7, 0.5, 2.2, 0.7, -0.4, -0.7, 0.2, -2.2, 2.2, 0.3, 0.4, -0.6, -0.8],
    "衣着": [0.0, 0.7, 0.7, 0.7, -0.1, -0.3, -0.2, -0.1, 0.2, 0.5, -0.2, 0.2, 0.1, 0.6, 1.1],
    "居住": [-0.1, -0.1, -0.1, 0.0, 0.0, 0.1, 0.1, 0.0, 0.1, 0.0, -0.1, 0.1, -0.1, 0.0, 0.0],
    "生活用品及服务": [0.4, -0.4, 0.3, 0.3, 0.4, -0.3, -0.1, -0.1, -0.1, 0.2, 0.5, 0.3, 0.0, -0.7, 0.1],
    "交通通信": [0.0, -0.9, -0.4, -0.9, -0.4, 0.5, -0.1, -1.2, -0.1, -1.4, -0.4, 0.1, -1.2, -2.2, -0.7],
    "教育文化娱乐": [0.1, -0.8, 0.1, -0.4, -0.1, 1.2, 0.1, -0.1, 0.1, -2.1, 0.3, 0.4, -0.1, -0.9, 0.1],
    "医疗保健": [0.1, 0.1, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.1, 0.1, 0.0],
    "其他用品及服务": [2.6, 1.2, 0.9, 1.3, -0.3, 0.5, 0.0, -0.1, -0.2, -0.5, 0.2, 0.3, -0.5, -0.6, 1.1]
  }
};
