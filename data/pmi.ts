// PMI 和工业数据 (Slide 4-6)

import {
  PmiTrendDataPoint,
  PmiSizeDataPoint,
  PmiSizeTrendDataPoint,
  IndustrialTrendDataPoint,
  KeyIndustryDataPoint,
  ProfitBridgeDataPoint,
  InventoryCycleDataPoint,
  IndustrialFinancialTableData,
  IndustryGrowthTableData,
} from '../types';

// Slide 4 Data

export const pmiTrendData: PmiTrendDataPoint[] = [
  { month: '1月', pmi: 50.3, production: 51.5, newOrders: 50.6 },
  { month: '2月', pmi: 50.1, production: 51.0, newOrders: 50.2 },
  { month: '3月', pmi: 50.8, production: 52.2, newOrders: 51.3 },
  { month: '4月', pmi: 49.8, production: 50.4, newOrders: 49.5 },
  { month: '5月', pmi: 49.5, production: 49.8, newOrders: 49.1 },
  { month: '6月', pmi: 49.2, production: 49.6, newOrders: 48.8 },
  { month: '7月', pmi: 49.0, production: 49.3, newOrders: 48.5 },
  { month: '8月', pmi: 49.1, production: 49.5, newOrders: 48.7 },
  { month: '9月', pmi: 49.4, production: 50.2, newOrders: 49.3 },
  { month: '10月', pmi: 49.6, production: 50.5, newOrders: 49.5 },
  { month: '11月', pmi: 49.2, production: 50.0, newOrders: 48.9 },
  { month: '12月', pmi: 50.1, production: 51.7, newOrders: 50.8 },
];

export const pmiSizeData: PmiSizeDataPoint[] = [
  { name: '大型企业', value: 50.8, fill: '#051c2c' },
  { name: '中型企业', value: 49.6, fill: '#94a3b8' },
  { name: '小型企业', value: 48.6, fill: '#ef4444' },
];

export const pmiSizeTrendData: PmiSizeTrendDataPoint[] = [
  { month: "1月", large: 49.9, medium: 49.5, small: 46.5 },
  { month: "2月", large: 52.5, medium: 49.2, small: 46.3 },
  { month: "3月", large: 51.2, medium: 49.9, small: 49.6 },
  { month: "4月", large: 49.2, medium: 48.8, small: 48.7 },
  { month: "5月", large: 50.7, medium: 47.5, small: 49.3 },
  { month: "6月", large: 51.2, medium: 48.6, small: 47.3 },
  { month: "7月", large: 50.3, medium: 49.5, small: 46.4 },
  { month: "8月", large: 50.8, medium: 48.9, small: 46.6 },
  { month: "9月", large: 51.0, medium: 48.8, small: 48.2 },
  { month: "10月", large: 49.9, medium: 48.7, small: 47.1 },
  { month: "11月", large: 49.3, medium: 48.9, small: 49.1 },
  { month: "12月", large: 50.8, medium: 49.8, small: 48.6 }
];


// Slide 5 Data

export const industrialTrendData: IndustrialTrendDataPoint[] = [
  { month: '24-03', yoy: 4.5, exportYoy: 1.4 },
  { month: '24-04', yoy: 6.7, exportYoy: 7.3 },
  { month: '24-05', yoy: 5.6, exportYoy: 4.6 },
  { month: '24-06', yoy: 5.3, exportYoy: 3.8 },
  { month: '24-07', yoy: 5.1, exportYoy: 6.4 },
  { month: '24-08', yoy: 4.5, exportYoy: 6.4 },
  { month: '24-09', yoy: 5.4, exportYoy: 3.4 },
  { month: '24-10', yoy: 5.3, exportYoy: 3.7 },
  { month: '24-11', yoy: 5.4, exportYoy: 7.4 },
  { month: '24-12', yoy: 6.2, exportYoy: 8.8 },
  { month: '25-03', yoy: 7.7, exportYoy: 7.7 },
  { month: '25-04', yoy: 6.1, exportYoy: 0.9 },
  { month: '25-05', yoy: 5.8, exportYoy: 0.6 },
  { month: '25-06', yoy: 6.8, exportYoy: 4.0 },
  { month: '25-07', yoy: 5.7, exportYoy: 0.8 },
  { month: '25-08', yoy: 5.2, exportYoy: -0.4 },
  { month: '25-09', yoy: 6.5, exportYoy: 3.8 },
  { month: '25-10', yoy: 4.9, exportYoy: -2.1 },
  { month: '25-11', yoy: 4.8, exportYoy: -0.1 },
  { month: '25-12', yoy: 5.2, exportYoy: 3.2 },
];

export const keyIndustryData: KeyIndustryDataPoint[] = [
  { name: '集成电路', value: 33.7, category: 'new' },
  { name: '工业机器人', value: 29.2, category: 'new' },
  { name: '电子设备', value: 13.5, category: 'new' },
  { name: '汽车制造', value: 10.1, category: 'new' },
  { name: '高技术制造业', value: 9.4, category: 'new' },
  { name: '装备制造业', value: 9.2, category: 'new' },
  { name: '规上工业整体', value: 0.86, category: 'average' },
  { name: '医药制造', value: 2.1, category: 'traditional' },
  { name: '黑色金属冶炼', value: -1.8, category: 'traditional' },
  { name: '非金属矿物', value: -4.5, category: 'traditional' },
];

export const industryGrowthTableData: IndustryGrowthTableData = {
  title: "2025年分行业规模以上工业增加值当月同比数据",
  source: "工业增加值数据",
  unit: "%",
  timeSeries: ["2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"],
  industryData: {
    "煤炭开采和洗选业": [null, 4.5, 2.7, null, null, 6.5, null, null, 6.5, 4.2, 5.1, 6.4],
    "石油和天然气开采业": [null, 5.8, 2.2, null, null, 3.6, null, null, 3.6, 4.1, 4.7, 8.9],
    "化学原料和化学制品制造业": [null, 6.9, 9.4, null, null, 7.5, null, null, 7.5, 7.2, 7.6, 9.0],
    "橡胶和塑料制品业": [null, 7.2, 9.7, null, null, 6.7, null, null, 6.7, 4.8, 3.5, 5.3],
    "非金属矿物制品业": [null, -2.6, -0.1, null, null, -0.1, null, null, -0.1, -0.6, 0.5, 0.2],
    "黑色金属冶炼和压延加工业": [null, 4.0, 8.7, null, null, 4.1, null, null, 4.1, 8.6, 7.3, 2.2],
    "有色金属冶炼和压延加工业": [null, 7.7, 9.7, null, null, 9.2, null, null, 9.2, 6.8, 9.1, 8.4],
    "金属制品业": [null, 7.3, 7.9, null, null, 6.7, null, null, 6.7, 4.2, 2.8, 4.0],
    "通用设备制造业": [null, 2.4, 7.7, null, null, 7.8, null, null, 7.8, 8.4, 7.3, 9.3],
    "专用设备制造业": [null, 3.0, 4.6, null, null, 4.6, null, null, 4.6, 3.8, 4.0, 5.4],
    "电气机械和器材制造业": [null, 5.1, 9.2, null, null, 11.4, null, null, 11.4, 10.2, 9.8, 7.9],
    "农副食品加工业": [null, 1.3, 6.1, null, null, 8.2, null, null, 8.2, 5.6, 4.7, 6.0],
    "食品制造业": [null, 4.2, 8.4, null, null, 6.4, null, null, 6.4, 3.8, 2.0, 6.5],
    "酒、饮料和精制茶制造业": [null, 3.0, 3.6, null, null, 3.4, null, null, 3.4, 0.1, -2.4, 0.8],
    "纺织业": [null, 3.8, 4.6, null, null, 2.5, null, null, 2.5, 1.7, 1.5, 2.2],
    "医药制造业": [null, 7.8, 2.8, null, null, 2.7, null, null, 2.7, 2.4, 3.3, 5.4],
    "汽车制造业": [null, 6.2, 17.7, null, null, 11.4, null, null, 11.4, 8.5, 8.4, 16.0],
    "铁路、船舶、航空航天和其他运输设备制造业": [null, 4.4, 10.6, null, null, 10.1, null, null, 10.1, 13.7, 12.0, 10.3],
    "计算机、通信和其他电子设备制造业": [null, 10.5, 8.7, null, null, 11.0, null, null, 11.0, 10.2, 9.9, 11.3]
  }
};


// Slide 5.5 Data (New Slide - Industry Divergence)

export const industryDivergenceTableData: IndustryGrowthTableData = {
  title: "2025年规模以上工业细分行业增加值当月同比增速",
  source: "规模以上工业增加值细分行业当月同比",
  unit: "%",
  timeSeries: ["2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"],
  industryData: {
    "煤炭开采和洗选业": [10.60, 6.30, 5.50, 6.50, 4.20, 5.10, 6.40, 6.50, 7.50, 6.40],
    "石油和天然气开采业": [6.80, 4.30, 5.30, 3.60, 4.10, 4.70, 8.90, 1.90, 5.10, 3.70],
    "黑色金属矿采选业": [12.70, 9.90, 10.30, 10.00, 11.50, 7.10, 4.90, 5.90, 9.00, 3.20],
    "有色金属矿采选业": [9.30, 6.60, 5.10, 14.00, 13.20, 8.50, 3.10, 6.20, 6.10, 3.70],
    "农副食品加工业": [5.40, 7.30, 7.60, 8.20, 5.60, 4.70, 6.00, 2.50, 1.70, 3.20],
    "食品制造业": [7.10, 7.00, 6.70, 6.40, 3.80, 2.00, 6.50, 2.10, 5.60, 5.50],
    "家具制造业": [-3.70, -7.10, -7.60, -5.40, -5.80, -7.20, -5.20, -8.90, -11.30, -9.70],
    "石油、煤炭及其他燃料加工业": [4.80, 0.60, 5.40, 11.70, 12.40, 10.20, 10.40, 8.10, 3.70, 6.60],
    "化学原料和化学制品制造业": [8.80, 8.00, 5.90, 7.50, 7.20, 7.60, 9.00, 7.10, 6.70, 8.00],
    "医药制造业": [1.20, 2.20, 1.30, 2.70, 2.40, 3.30, 5.40, -1.60, 2.40, 7.00],
    "橡胶和塑料制品业": [7.60, 6.00, 5.40, 6.70, 4.80, 3.50, 5.30, 2.10, 3.30, 4.20],
    "非金属矿物制品业": [0.90, 0.40, -0.60, -0.10, -0.60, 0.50, 0.20, -3.20, -1.80, 0.20],
    "黑色金属冶炼和压延加工业": [7.70, 5.80, 4.80, 4.10, 8.60, 7.30, 2.20, 1.40, 0.90, 0.70],
    "有色金属冶炼和压延加工业": [6.50, 7.50, 8.10, 9.20, 6.80, 9.10, 8.40, 3.70, 4.80, 4.80],
    "金属制品业": [9.90, 7.70, 6.70, 6.70, 4.20, 2.80, 4.00, 1.70, 3.00, 3.60],
    "通用设备制造业": [9.30, 7.80, 6.30, 7.80, 8.40, 7.30, 9.30, 6.90, 7.50, 7.50],
    "汽车制造业": [11.50, 9.20, 11.60, 11.40, 8.50, 8.40, 16.00, 16.80, 11.90, 8.30],
    "铁路、船舶、航空航天和其他运输设备制造业": [19.00, 17.60, 14.60, 10.10, 13.70, 9.80, 10.30, 15.20, 11.90, 9.20],
    "电气机械和器材制造业": [13.00, 13.40, 11.00, 11.40, 10.20, 9.90, 7.90, 4.90, 4.40, 4.30],
    "计算机、通信和其他电子设备制造业": [13.10, 10.80, 10.20, 11.00, 10.20, 9.90, 11.30, 8.90, 9.20, 11.80],
    "装备制造业": [null, 9.80, 9.00, null, 8.40, 8.10, null, 8.00, 7.70, null],
    "高技术制造业": [10.70, 10.00, 8.60, 9.70, 9.30, 9.30, 10.30, 7.20, 8.40, 11.00]
  }
};

// Slide 6 Data

export const profitBridgeData: ProfitBridgeDataPoint[] = [
  { name: '营收增长', value: 2.1, fill: '#00a9f4' },
  { name: '成本费用', value: -8.8, fill: '#ef4444' },
  { name: '实际经营利润', value: -6.7, fill: '#051c2c', isTotal: true },
  { name: '投资收益错位', value: -6.4, fill: '#94a3b8' },
  { name: '利润总额', value: -13.1, fill: '#ef4444', isTotal: true },
];

export const industrialFinancialTableData: IndustrialFinancialTableData = {
  title: "2025年工业企业主要财务指标月度数据",
  source: "根据国家统计局累计数据计算得出",
  unit: "亿元",
  months: ["3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月"],
  revenue: [120450.7, 113023.4, 113176.9, 120195.7, 112911.4, 115528.6, 124614.8, 112845.9, 119702.5],
  cost: [103369.9, 97228.1, 97197.5, 102399.1, 96828.0, 98918.7, 106465.2, 96594.3, 101652.1],
  operatingProfit: [5854.1, 5909.2, 5971.1, 7043.3, 5716.5, 6608.0, 6690.4, 5635.9, 6666.8],
  totalProfit: [5983.7, 6076.6, 6034.1, 7160.7, 5838.5, 6726.2, 6802.3, 5770.9, 6765.7],
  investmentIncome: [589.7, 635.4, 1019.3, 1838.6, 723.8, 1255.3, 930.0, 753.9, 574.8]
};

export const inventoryCycleData: InventoryCycleDataPoint[] = [
  { month: '1月', nominal: 2.1, real: 4.5, days: 68.1 },
  { month: '2月', nominal: 2.0, real: 4.4, days: 68.3 },
  { month: '3月', nominal: 2.2, real: 4.8, days: 68.5 },
  { month: '4月', nominal: 2.5, real: 5.1, days: 68.6 },
  { month: '5月', nominal: 2.8, real: 5.3, days: 68.9 },
  { month: '6月', nominal: 3.1, real: 5.6, days: 69.1 },
  { month: '7月', nominal: 3.4, real: 5.9, days: 69.3 },
  { month: '8月', nominal: 3.6, real: 6.2, days: 69.5 },
  { month: '9月', nominal: 3.9, real: 6.5, days: 69.8 },
  { month: '10月', nominal: 4.1, real: 6.7, days: 69.7 },
  { month: '11月', nominal: 4.3, real: 7.0, days: 70.4 },
];
