// 固定资产投资数据 (Slide 12-15)

import {
  FaiTrendDataPoint,
  InvestmentPillarsDataPoint,
  PrivateStateInvestmentDataPoint,
  FaiComponentsDataPoint,
  RealEstateInvestmentDataPoint,
  RealEstateMarketDataPoint,
  InfrastructureSectorDataPoint,
  InvestmentStructureDataPoint,
  EquipmentVsConstructionTrendDataPoint,
  HighTechInvestmentDataPoint,
  IndustryGrowthTableData,
} from '../types';

// Slide 12 Data (Fixed Asset Investment)

export const faiTrendData: FaiTrendDataPoint[] = [
  { month: '24-03', value: 4.5 },
  { month: '24-04', value: 4.2 },
  { month: '24-05', value: 4.0 },
  { month: '24-06', value: 3.9 },
  { month: '24-07', value: 3.6 },
  { month: '24-08', value: 3.4 },
  { month: '24-09', value: 3.4 },
  { month: '24-10', value: 3.4 },
  { month: '24-11', value: 3.3 },
  { month: '24-12', value: 3.2 },
  { month: '25-03', value: -1.1 },
  { month: '25-04', value: -0.4 },
  { month: '25-05', value: -0.3 },
  { month: '25-06', value: 2.8 },
  { month: '25-07', value: 4.0 },
  { month: '25-08', value: 3.4 },
  { month: '25-09', value: 0.5 },
  { month: '25-10', value: 0.8 },
  { month: '25-11', value: 0.8 },
  { month: '25-12', value: -3.8 },
];

export const investmentPillarsData: InvestmentPillarsDataPoint[] = [
  { month: '1-2月', manufacturing: 9.4, infrastructure: 6.3, realEstate: -9.0 },
  { month: '1-3月', manufacturing: 9.9, infrastructure: 6.5, realEstate: -9.5 },
  { month: '1-4月', manufacturing: 9.7, infrastructure: 6.0, realEstate: -9.8 },
  { month: '1-5月', manufacturing: 9.6, infrastructure: 5.7, realEstate: -10.1 },
  { month: '1-6月', manufacturing: 9.5, infrastructure: 5.4, realEstate: -10.1 },
  { month: '1-7月', manufacturing: 9.3, infrastructure: 4.9, realEstate: -10.2 },
  { month: '1-8月', manufacturing: 9.1, infrastructure: 4.4, realEstate: -10.2 },
  { month: '1-9月', manufacturing: 5.8, infrastructure: 2.2, realEstate: -13.5 },
  { month: '1-10月', manufacturing: 3.4, infrastructure: 0.5, realEstate: -15.1 },
  { month: '1-11月', manufacturing: 1.8, infrastructure: -0.8, realEstate: -16.3 },
  { month: '1-12月', manufacturing: 0.6, infrastructure: -1.5, realEstate: -17.2 },
];

export const privateStateInvestmentData: PrivateStateInvestmentDataPoint[] = [
  { month: '2024-02', privateInvestment: 0.40, stateOwnedInvestment: 7.30 },
  { month: '2024-03', privateInvestment: 0.50, stateOwnedInvestment: 7.80 },
  { month: '2024-04', privateInvestment: 0.30, stateOwnedInvestment: 7.40 },
  { month: '2024-05', privateInvestment: 0.10, stateOwnedInvestment: 7.10 },
  { month: '2024-06', privateInvestment: 0.10, stateOwnedInvestment: 6.80 },
  { month: '2024-07', privateInvestment: 0.00, stateOwnedInvestment: 6.30 },
  { month: '2024-08', privateInvestment: -0.20, stateOwnedInvestment: 6.00 },
  { month: '2024-09', privateInvestment: -0.20, stateOwnedInvestment: 6.10 },
  { month: '2024-10', privateInvestment: -0.30, stateOwnedInvestment: 6.20 },
  { month: '2024-11', privateInvestment: -0.40, stateOwnedInvestment: 6.10 },
  { month: '2024-12', privateInvestment: -0.10, stateOwnedInvestment: 5.70 },
  { month: '2025-02', privateInvestment: 0.00, stateOwnedInvestment: 7.00 },
  { month: '2025-03', privateInvestment: 0.40, stateOwnedInvestment: 6.50 },
  { month: '2025-04', privateInvestment: 0.20, stateOwnedInvestment: 6.20 },
  { month: '2025-05', privateInvestment: 0.02, stateOwnedInvestment: 5.90 },
  { month: '2025-06', privateInvestment: -0.60, stateOwnedInvestment: 5.00 },
  { month: '2025-07', privateInvestment: -1.50, stateOwnedInvestment: 3.50 },
  { month: '2025-08', privateInvestment: -2.30, stateOwnedInvestment: 2.30 },
  { month: '2025-09', privateInvestment: -3.10, stateOwnedInvestment: 1.00 },
  { month: '2025-10', privateInvestment: -4.50, stateOwnedInvestment: 0.10 },
  { month: '2025-11', privateInvestment: -5.30, stateOwnedInvestment: -1.10 },
  { month: '2025-12', privateInvestment: -6.40, stateOwnedInvestment: -2.50 },
];


export const faiComponentsData: FaiComponentsDataPoint[] = [
  { month: '2024-02', totalInvestment: 4.20, manufacturing: 9.40, realEstate: -9.00, infrastructure: 8.95 },
  { month: '2024-03', totalInvestment: 4.50, manufacturing: 9.90, realEstate: -9.50, infrastructure: 8.75 },
  { month: '2024-04', totalInvestment: 4.20, manufacturing: 9.70, realEstate: -9.80, infrastructure: 7.78 },
  { month: '2024-05', totalInvestment: 4.00, manufacturing: 9.60, realEstate: -10.10, infrastructure: 6.68 },
  { month: '2024-06', totalInvestment: 3.90, manufacturing: 9.50, realEstate: -10.10, infrastructure: 7.70 },
  { month: '2024-07', totalInvestment: 3.60, manufacturing: 9.30, realEstate: -10.20, infrastructure: 8.14 },
  { month: '2024-08', totalInvestment: 3.40, manufacturing: 9.10, realEstate: -10.20, infrastructure: 7.87 },
  { month: '2024-09', totalInvestment: 3.40, manufacturing: 9.20, realEstate: -10.10, infrastructure: 9.26 },
  { month: '2024-10', totalInvestment: 3.40, manufacturing: 9.30, realEstate: -10.30, infrastructure: 9.35 },
  { month: '2024-11', totalInvestment: 3.30, manufacturing: 9.30, realEstate: -10.40, infrastructure: 9.39 },
  { month: '2024-12', totalInvestment: 3.20, manufacturing: 9.20, realEstate: -10.60, infrastructure: 9.19 },
  { month: '2025-02', totalInvestment: 4.10, manufacturing: 9.00, realEstate: -9.80, infrastructure: 9.94 },
  { month: '2025-03', totalInvestment: 4.20, manufacturing: 9.10, realEstate: -9.90, infrastructure: 11.50 },
  { month: '2025-04', totalInvestment: 4.00, manufacturing: 8.80, realEstate: -10.30, infrastructure: 10.85 },
  { month: '2025-05', totalInvestment: 3.70, manufacturing: 8.50, realEstate: -10.70, infrastructure: 10.42 },
  { month: '2025-06', totalInvestment: 2.80, manufacturing: 7.50, realEstate: -11.20, infrastructure: 8.90 },
  { month: '2025-07', totalInvestment: 1.60, manufacturing: 6.20, realEstate: -12.00, infrastructure: 7.29 },
  { month: '2025-08', totalInvestment: 0.50, manufacturing: 5.10, realEstate: -12.90, infrastructure: 5.42 },
  { month: '2025-09', totalInvestment: -0.50, manufacturing: 4.00, realEstate: -13.90, infrastructure: 3.34 },
  { month: '2025-10', totalInvestment: -1.70, manufacturing: 2.70, realEstate: -14.70, infrastructure: 1.51 },
  { month: '2025-11', totalInvestment: -2.60, manufacturing: 1.90, realEstate: -15.90, infrastructure: 0.13 },
  { month: '2025-12', totalInvestment: -3.80, manufacturing: 0.60, realEstate: -17.20, infrastructure: -1.48 },
];

// Slide 13 Data (Real Estate)

export const realEstateInvestmentData: RealEstateInvestmentDataPoint[] = [
  { month: "2024-02", investment: -9.00, newStarts: -29.70, completion: -20.20 },
  { month: "2024-03", investment: -9.50, newStarts: -27.80, completion: -20.70 },
  { month: "2024-04", investment: -9.80, newStarts: -24.60, completion: -20.40 },
  { month: "2024-05", investment: -10.10, newStarts: -24.20, completion: -20.10 },
  { month: "2024-06", investment: -10.10, newStarts: -23.70, completion: -21.80 },
  { month: "2024-07", investment: -10.20, newStarts: -23.20, completion: -21.80 },
  { month: "2024-08", investment: -10.20, newStarts: -22.50, completion: -23.60 },
  { month: "2024-09", investment: -10.10, newStarts: -22.20, completion: -24.40 },
  { month: "2024-10", investment: -10.30, newStarts: -22.60, completion: -23.90 },
  { month: "2024-11", investment: -10.40, newStarts: -23.00, completion: -26.20 },
  { month: "2024-12", investment: -10.60, newStarts: -23.00, completion: -27.70 },
  { month: "2025-02", investment: -9.80, newStarts: -29.60, completion: -15.60 },
  { month: "2025-03", investment: -9.90, newStarts: -24.40, completion: -14.30 },
  { month: "2025-04", investment: -10.30, newStarts: -23.80, completion: -16.90 },
  { month: "2025-05", investment: -10.70, newStarts: -22.80, completion: -17.30 },
  { month: "2025-06", investment: -11.20, newStarts: -20.00, completion: -14.80 },
  { month: "2025-07", investment: -12.00, newStarts: -19.40, completion: -16.50 },
  { month: "2025-08", investment: -12.90, newStarts: -19.50, completion: -17.00 },
  { month: "2025-09", investment: -13.90, newStarts: -18.90, completion: -15.30 },
  { month: "2025-10", investment: -14.70, newStarts: -19.80, completion: -16.90 },
  { month: "2025-11", investment: -15.90, newStarts: -20.50, completion: -18.00 },
  { month: "2025-12", investment: -17.20, newStarts: -20.40, completion: -18.10 }
];

export const realEstateMarketData: RealEstateMarketDataPoint[] = [
  { month: '2024-01', newHomePriceIndex: -1.24, secondHandPriceIndex: -4.45 },
  { month: '2024-02', newHomePriceIndex: -1.90, secondHandPriceIndex: -5.15 },
  { month: '2024-03', newHomePriceIndex: -2.65, secondHandPriceIndex: -5.90 },
  { month: '2024-04', newHomePriceIndex: -3.51, secondHandPriceIndex: -6.79 },
  { month: '2024-05', newHomePriceIndex: -4.30, secondHandPriceIndex: -7.87 },
  { month: '2024-06', newHomePriceIndex: -4.93, secondHandPriceIndex: -8.17 },
  { month: '2024-07', newHomePriceIndex: -5.28, secondHandPriceIndex: -8.17 },
  { month: '2024-08', newHomePriceIndex: -5.69, secondHandPriceIndex: -8.59 },
  { month: '2024-09', newHomePriceIndex: -6.09, secondHandPriceIndex: -9.02 },
  { month: '2024-10', newHomePriceIndex: -6.22, secondHandPriceIndex: -8.94 },
  { month: '2024-11', newHomePriceIndex: -6.07, secondHandPriceIndex: -8.54 },
  { month: '2024-12', newHomePriceIndex: -5.73, secondHandPriceIndex: -7.49 },
  { month: '2025-01', newHomePriceIndex: -5.43, secondHandPriceIndex: -7.80 },
  { month: '2025-02', newHomePriceIndex: -5.22, secondHandPriceIndex: -7.53 },
  { month: '2025-03', newHomePriceIndex: -4.90, secondHandPriceIndex: -7.25 },
  { month: '2025-04', newHomePriceIndex: -4.55, secondHandPriceIndex: -6.76 },
  { month: '2025-05', newHomePriceIndex: -4.08, secondHandPriceIndex: -6.30 },
  { month: '2025-06', newHomePriceIndex: -3.69, secondHandPriceIndex: -6.09 },
  { month: '2025-07', newHomePriceIndex: -3.37, secondHandPriceIndex: -5.85 },
  { month: '2025-08', newHomePriceIndex: -2.95, secondHandPriceIndex: -5.51 },
  { month: '2025-09', newHomePriceIndex: -2.66, secondHandPriceIndex: -5.24 },
  { month: '2025-10', newHomePriceIndex: -2.60, secondHandPriceIndex: -5.40 },
  { month: '2025-11', newHomePriceIndex: -2.78, secondHandPriceIndex: -5.70 },
  { month: '2025-12', newHomePriceIndex: -3.05, secondHandPriceIndex: -6.07 },
];


// Slide 14 Data (Infrastructure)

export const infrastructureSectorData: InfrastructureSectorDataPoint[] = [
  { sector: '电力/热力/燃气/水', value: 9.1, category: 'energy' },
  { sector: '信息传输/软件技术', value: 6.5, category: 'energy' },
  { sector: '铁路运输业', value: 1.2, category: 'transport' },
  { sector: '基建投资(全口径)', value: -1.48, category: 'average' },
  { sector: '道路运输业', value: -2.8, category: 'transport' },
  { sector: '水利/环境/公共设施', value: -8.4, category: 'municipal' },
];

export const infrastructureGrowthTableData: IndustryGrowthTableData = {
  title: "固定资产投资(不含农户) - 基建相关行业累计增长数据",
  source: "国家统计局",
  unit: "%",
  timeSeries: ["2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"],
  industryData: {
    "电力/热力/燃气/水": [23.9, 25.4, 26.0, 25.5, 25.4, 22.8, 21.5, 18.8, 15.3, 12.5, 10.7, 9.1],
    "交通/仓储/邮政": [5.9, 2.7, 3.8, 3.9, 4.0, 5.6, 3.9, 2.7, 1.6, 0.1, -0.1, -1.2],
    "铁路运输": [13.5, 0.2, 0.5, 1.6, 2.3, 4.2, 5.9, 4.5, 4.2, 3.0, 2.7, -1.2],
    "信息/软件/技术": [6.3, 11.7, 10.1, 9.5, 14.1, 13.0, 12.8, 10.9, 11.5, 11.2, 9.8, 8.8],
    "水利/环境/公设": [4.2, 8.5, 9.8, 8.6, 7.2, 3.5, 2.0, -0.2, -2.4, -4.1, -6.3, -8.4],
    "公共设施": [-3.1, 2.6, 4.9, 4.9, 3.8, 1.7, 0.5, -1.1, -2.8, -4.4, -6.2, -8.2],
    "非金属矿物": [1.6, 0.2, -1.8, -2.9, -3.6, -5.1, -4.8, -5.8, -6.6, -8.5, -9.5, -10.2],
    "黑色金属": [1.8, 5.7, 5.5, 2.0, -1.6, -0.6, -4.1, -3.3, -2.0, -2.0, -1.3, -2.6],
    "有色金属": [24.2, 16.1, 17.9, 16.4, 14.3, 9.1, 4.9, 2.2, 0.4, -1.5, -2.2, -4.2],
    "通用设备": [15.5, 21.6, 17.2, 17.9, 17.5, 16.6, 14.8, 13.7, 11.8, 9.5, 8.9, 6.2],
    "电气机械": [-3.9, -8.6, -7.4, -7.5, -8.6, -7.8, -8.7, -8.8, -9.5, -9.4, -9.5, -10.3]
  }
};

// Slide 15 Data (Equipment Investment)

export const investmentStructureData: InvestmentStructureDataPoint[] = [
  { category: '设备工器具购置', value: 11.8, fill: '#005c8f', description: '存量更新驱动' },
  { category: '建筑安装工程', value: -8.4, fill: '#ef4444', description: '扩产意愿收缩' },
  { category: '其他费用', value: -2.1, fill: '#94a3b8', description: '' },
];

export const equipmentVsConstructionTrendData: EquipmentVsConstructionTrendDataPoint[] = [
  { month: '2024-12', equipment: 15.7, construction: 3.5 },
  { month: '2025-02', equipment: 18.0, construction: 1.1 },
  { month: '2025-03', equipment: 19.0, construction: 1.5 },
  { month: '2025-04', equipment: 18.2, construction: 1.4 },
  { month: '2025-05', equipment: 17.3, construction: 1.2 },
  { month: '2025-06', equipment: 17.3, construction: 0.1 },
  { month: '2025-07', equipment: 15.2, construction: -0.8 },
  { month: '2025-08', equipment: 14.4, construction: -2.2 },
  { month: '2025-09', equipment: 14.0, construction: -4.1 },
  { month: '2025-10', equipment: 13.0, construction: -5.4 },
  { month: '2025-11', equipment: 12.2, construction: -6.4 },
  { month: '2025-12', equipment: 11.8, construction: -8.4 },
];

export const equipmentInvestmentTableData: IndustryGrowthTableData = {
  title: "设备投资相关行业2025年累计增长数据",
  source: "国家统计局",
  unit: "%",
  timeSeries: ["2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"],
  industryData: {
    "通用设备": [21.6, 17.2, 17.9, 17.5, 16.6, 14.8, 13.7, 11.8, 9.5, 8.9, 6.2],
    "专用设备": [9.0, 8.1, 8.4, 7.9, 6.2, 4.6, 1.6, -0.7, -2.0, -4.0, -7.1],
    "电气机械": [-8.6, -7.4, -7.5, -8.6, -7.8, -8.7, -8.8, -9.5, -9.4, -9.5, -10.3],
    "电子设备": [9.6, 10.5, 9.0, 7.0, 4.6, 2.2, -0.1, -2.1, -2.2, -3.2, -3.2],
    "汽车制造": [27.0, 24.5, 23.6, 23.4, 22.2, 21.7, 20.2, 19.2, 17.5, 15.3, 11.7],
    "铁路航天设备": [37.3, 37.9, 29.6, 26.1, 27.3, 29.3, 26.2, 22.3, 20.1, 22.4, 17.5],
    "金属制品和机械修理": [45.5, 43.6, 44.3, 62.2, 44.2, 49.4, 49.7, 50.1, 49.2, 32.6, 37.9]
  }
};

export const highTechInvestmentData: HighTechInvestmentDataPoint[] = [
  { sector: '信息服务业', value: 28.4, category: 'high-tech' },
  { sector: '航空航天/运输', value: 17.5, category: 'high-tech' },
  { sector: '电子通信', value: 13.2, category: 'high-tech' },
  { sector: '制造业整体', value: 5.9, category: 'average' },
  { sector: '纺织服装', value: -2.5, category: 'traditional' },
  { sector: '电气机械', value: -10.3, category: 'traditional' },
];
