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
