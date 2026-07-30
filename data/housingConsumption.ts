// 房价波动与家庭月均消费（按住房套数分组）

export interface HousingConsumptionDataPoint {
  category: string;
  housingTransport: number; // 住房与交通支出
  foodLiving: number;       // 居家食品与生活支出
  entertainment: number;    // 文娱与外出餐饮支出
  educationMedical: number; // 教育与医疗支出
  durables: number;         // 耐用品支出
  total: number;
  sampleSize: number;
}

export const housingConsumptionData: HousingConsumptionDataPoint[] = [
  {
    category: '一套房 <-15%',
    housingTransport: 969,
    foodLiving: 799,
    entertainment: 395,
    educationMedical: 299,
    durables: 127,
    total: 2590,
    sampleSize: 985,
  },
  {
    category: '一套房 [-15%,0)',
    housingTransport: 962,
    foodLiving: 817,
    entertainment: 444,
    educationMedical: 311,
    durables: 135,
    total: 2670,
    sampleSize: 4593,
  },
  {
    category: '一套房 >=0',
    housingTransport: 1067,
    foodLiving: 895,
    entertainment: 488,
    educationMedical: 347,
    durables: 140,
    total: 2939,
    sampleSize: 1699,
  },
  {
    category: '大于一套房 <-15%',
    housingTransport: 1394,
    foodLiving: 1020,
    entertainment: 593,
    educationMedical: 412,
    durables: 210,
    total: 3630,
    sampleSize: 557,
  },
  {
    category: '大于一套房 [-15%,0)',
    housingTransport: 1679,
    foodLiving: 1151,
    entertainment: 747,
    educationMedical: 496,
    durables: 238,
    total: 4313,
    sampleSize: 2573,
  },
  {
    category: '大于一套房 >=0',
    housingTransport: 1948,
    foodLiving: 1244,
    entertainment: 910,
    educationMedical: 521,
    durables: 274,
    total: 4900,
    sampleSize: 975,
  },
];

// 70个大中城市新建商品住房价格指数同比（上年同期=100 换算）
export interface NewHousePriceYoyDataPoint {
  period: string;
  newHousePrice: number;
}

export const newHousePriceYoyData: NewHousePriceYoyDataPoint[] = [
  { period: '2023-01', newHousePrice: -2.26 },
  { period: '2023-02', newHousePrice: -1.86 },
  { period: '2023-03', newHousePrice: -1.35 },
  { period: '2023-04', newHousePrice: -0.74 },
  { period: '2023-05', newHousePrice: -0.48 },
  { period: '2023-06', newHousePrice: -0.43 },
  { period: '2023-07', newHousePrice: -0.57 },
  { period: '2023-08', newHousePrice: -0.55 },
  { period: '2023-09', newHousePrice: -0.57 },
  { period: '2023-10', newHousePrice: -0.58 },
  { period: '2023-11', newHousePrice: -0.70 },
  { period: '2023-12', newHousePrice: -0.89 },
  { period: '2024-01', newHousePrice: -1.24 },
  { period: '2024-02', newHousePrice: -1.90 },
  { period: '2024-03', newHousePrice: -2.65 },
  { period: '2024-04', newHousePrice: -3.51 },
  { period: '2024-05', newHousePrice: -4.30 },
  { period: '2024-06', newHousePrice: -4.88 },
  { period: '2024-07', newHousePrice: -5.28 },
  { period: '2024-08', newHousePrice: -5.69 },
  { period: '2024-09', newHousePrice: -6.09 },
  { period: '2024-10', newHousePrice: -6.22 },
  { period: '2024-11', newHousePrice: -6.07 },
  { period: '2024-12', newHousePrice: -5.73 },
  { period: '2025-01', newHousePrice: -5.43 },
  { period: '2025-02', newHousePrice: -5.22 },
  { period: '2025-03', newHousePrice: -4.99 },
  { period: '2025-04', newHousePrice: -4.55 },
  { period: '2025-05', newHousePrice: -4.08 },
  { period: '2025-06', newHousePrice: -3.69 },
  { period: '2025-07', newHousePrice: -3.37 },
  { period: '2025-08', newHousePrice: -2.95 },
  { period: '2025-09', newHousePrice: -2.66 },
  { period: '2025-10', newHousePrice: -2.60 },
  { period: '2025-11', newHousePrice: -2.78 },
  { period: '2025-12', newHousePrice: -3.05 },
  { period: '2026-01', newHousePrice: -3.33 },
  { period: '2026-02', newHousePrice: -3.46 },
  { period: '2026-03', newHousePrice: -3.59 },
  { period: '2026-04', newHousePrice: -3.65 },
  { period: '2026-05', newHousePrice: -3.64 },
  { period: '2026-06', newHousePrice: -3.54 },
];

export const newHousePriceYoyXTicks = [
  '2023-01',
  '2023-07',
  '2024-01',
  '2024-07',
  '2025-01',
  '2025-07',
  '2026-01',
  '2026-06',
];
