// 贸易和出口数据 (Slide 16-18)

import {
  TradeTrendDataPoint,
  TradeSurplusDataPoint,
  ExportItemGrowthDataPoint,
  ExportContributionDataPoint,
  ExportGrowthByRegionDataPoint,
  ExportShareDataPoint,
  Q4ExportGrowthDataPoint,
  MonthlyTradeGrowthDataPoint,
  ComputingExportGrowthDataPoint,
  MechElecExportGrowthDataPoint,
  RegionalExportTrendDataPoint,
  ExportShareMigrationDataPoint,
} from '../types';

// Slide 16 Data (Trade)

export const tradeTrendData: TradeTrendDataPoint[] = [
  { month: '9月', export: 2.4, import: 0.3 },
  { month: '10月', export: -1.1, import: -2.3 },
  { month: '11月', export: 5.9, import: 1.9 },
  { month: '12月', export: 6.6, import: 5.7 },
];

export const q4ExportGrowthData: Q4ExportGrowthDataPoint[] = [
  {
    month: '10月',
    '2024': 12.7,
    '2025': -1.1,
    annotation2025: '基数陷阱：受24年台风后补偿性高位影响'
  },
  {
    month: '11月',
    '2024': 6.7,
    '2025': 5.9
  },
  {
    month: '12月',
    '2024': 2.3,
    '2025': 6.6,
    annotation2025: '超预期：抢出口+电子周期共振'
  },
];

export const monthlyTradeGrowthData: MonthlyTradeGrowthDataPoint[] = [
  { month: '24-02', totalTrade: 8.8, import: 6.8, export: 10.3 },
  { month: '24-03', totalTrade: 4.9, import: 5.0, export: 4.9 },
  { month: '24-04', totalTrade: 5.7, import: 6.7, export: 4.9 },
  { month: '24-05', totalTrade: 6.3, import: 6.5, export: 6.1 },
  { month: '24-06', totalTrade: 6.1, import: 5.2, export: 6.9 },
  { month: '24-07', totalTrade: 6.1, import: 5.3, export: 6.8 },
  { month: '24-08', totalTrade: 5.9, import: 4.5, export: 7.0 },
  { month: '24-09', totalTrade: 5.3, import: 3.9, export: 6.3 },
  { month: '24-10', totalTrade: 5.2, import: 3.1, export: 6.8 },
  { month: '24-11', totalTrade: 4.8, import: 2.3, export: 6.7 },
  { month: '24-12', totalTrade: 5.0, import: 2.2, export: 7.1 },
  { month: '25-02', totalTrade: -1.2, import: -7.2, export: 3.3 },
  { month: '25-03', totalTrade: 1.3, import: -5.8, export: 6.7 },
  { month: '25-04', totalTrade: 2.4, import: -4.1, export: 7.4 },
  { month: '25-05', totalTrade: 2.4, import: -3.7, export: 7.1 },
  { month: '25-06', totalTrade: 2.9, import: -2.7, export: 7.1 },
  { month: '25-07', totalTrade: 3.5, import: -1.6, export: 7.2 },
  { month: '25-08', totalTrade: 3.5, import: -1.1, export: 6.9 },
  { month: '25-09', totalTrade: 4.0, import: -0.1, export: 7.0 },
  { month: '25-10', totalTrade: 3.6, import: 0.0, export: 6.2 },
  { month: '25-11', totalTrade: 3.6, import: 0.2, export: 6.2 },
  { month: '25-12', totalTrade: 3.8, import: 0.5, export: 6.1 },
];

export const tradeSurplusData: TradeSurplusDataPoint[] = [
  { year: '2024年', value: 5.8 },
  { year: '2025年', value: 6.6 },
];


// Slide 17 Data (Export Structure)

export const exportItemGrowthData: ExportItemGrowthDataPoint[] = [
  { name: '汽车(含底盘)', value: 71.7, category: 'tech' },
  { name: '集成电路', value: 47.7, category: 'tech' },
  { name: '消费电子整体', value: 19.6, category: 'consumer' },
  { name: '机电产品整体', value: 12.1, category: 'tech' },
  { name: '手机', value: 10.6, category: 'consumer' },
  { name: '出口总额', value: 6.6, category: 'tech' },
  { name: '服装/衣着', value: -5.0, category: 'traditional' },
  { name: '家具/零件', value: -8.5, category: 'traditional' },
];

export const exportContributionData: ExportContributionDataPoint[] = [
  { name: '机电产品', value: 5.2, fill: '#051c2c' },
  { name: '其他产品', value: 2.6, fill: '#94a3b8' },
  { name: '劳动密集型', value: -1.2, fill: '#ef4444' },
];

export const computingExportGrowthData: ComputingExportGrowthDataPoint[] = [
  { month: "2024-01", server: null, mechanical: 14.1, phone: -22.8, auto: 17.2, semiconductor: -14.8 },
  { month: "2024-02", server: 3.9, mechanical: 32.0, phone: -18.2, auto: 12.6, semiconductor: -19.3 },
  { month: "2024-03", server: 4.8, mechanical: 15.5, phone: -13.0, auto: 18.2, semiconductor: -23.1 },
  { month: "2024-04", server: 5.9, mechanical: 11.3, phone: -8.5, auto: 21.2, semiconductor: -24.1 },
  { month: "2024-05", server: 6.1, mechanical: 10.6, phone: -5.9, auto: 20.1, semiconductor: -25.2 },
  { month: "2024-06", server: 6.9, mechanical: 11.7, phone: -4.7, auto: 18.9, semiconductor: -24.8 },
  { month: "2024-07", server: 8.7, mechanical: 12.1, phone: -3.7, auto: 18.1, semiconductor: -23.8 },
  { month: "2024-08", server: 9.1, mechanical: 12.0, phone: -1.7, auto: 20.0, semiconductor: -23.1 },
  { month: "2024-09", server: 8.5, mechanical: 11.1, phone: -2.3, auto: 20.7, semiconductor: -23.6 },
  { month: "2024-10", server: 9.2, mechanical: 12.8, phone: -2.0, auto: 18.6, semiconductor: -22.8 },
  { month: "2024-11", server: 9.9, mechanical: 12.9, phone: -1.8, auto: 15.8, semiconductor: -22.6 },
  { month: "2024-12", server: 9.9, mechanical: 14.3, phone: -3.1, auto: 15.5, semiconductor: -21.8 },
  { month: "2025-01", server: null, mechanical: 19.5, phone: -12.8, auto: 7.8, semiconductor: -18.8 },
  { month: "2025-02", server: 10.5, mechanical: -2.0, phone: -3.3, auto: 2.5, semiconductor: -22.0 },
  { month: "2025-03", server: 6.8, mechanical: 6.2, phone: 0.4, auto: 2.2, semiconductor: -17.7 },
  { month: "2025-04", server: 4.5, mechanical: 8.9, phone: -5.0, auto: 2.8, semiconductor: -15.9 },
  { month: "2025-05", server: 2.7, mechanical: 8.2, phone: -8.5, auto: 5.3, semiconductor: -14.1 },
  { month: "2025-06", server: 1.8, mechanical: 7.0, phone: -8.5, auto: 8.2, semiconductor: -14.0 },
  { month: "2025-07", server: 0.0, mechanical: 6.8, phone: -10.5, auto: 9.7, semiconductor: -12.8 },
  { month: "2025-08", server: -0.4, mechanical: 6.5, phone: -11.5, auto: 10.8, semiconductor: -9.7 },
  { month: "2025-09", server: -0.5, mechanical: 8.3, phone: -9.8, auto: 10.8, semiconductor: -6.1 },
  { month: "2025-10", server: -1.5, mechanical: 6.5, phone: -11.0, auto: 13.4, semiconductor: -4.9 },
  { month: "2025-11", server: -2.0, mechanical: 6.4, phone: -11.2, auto: 16.7, semiconductor: -2.8 },
  { month: "2025-12", server: -1.4, mechanical: 6.1, phone: -9.4, auto: 21.4, semiconductor: -1.7 }
];

export const mechElecExportGrowthData: MechElecExportGrowthDataPoint[] = [
  { month: "2024-02", agri: 2.7, ic: 8.5, mech: 24.3, highTech: 0.2, clothing: 13.1 },
  { month: "2024-03", agri: -1.2, ic: 3.3, mech: 19.7, highTech: -0.2, clothing: 1.4 },
  { month: "2024-04", agri: -0.9, ic: 3.4, mech: 19.1, highTech: 0.9, clothing: 0.0 },
  { month: "2024-05", agri: 0.4, ic: 4.3, mech: 21.2, highTech: 2.4, clothing: 0.2 },
  { month: "2024-06", agri: 2.0, ic: 4.9, mech: 21.6, highTech: 3.1, clothing: 0.0 },
  { month: "2024-07", agri: 2.0, ic: 5.6, mech: 22.5, highTech: 4.3, clothing: -0.8 },
  { month: "2024-08", agri: 2.2, ic: 6.5, mech: 22.0, highTech: 4.9, clothing: -1.0 },
  { month: "2024-09", agri: 1.9, ic: 6.1, mech: 19.8, highTech: 4.2, clothing: -1.6 },
  { month: "2024-10", agri: 2.8, ic: 6.9, mech: 19.6, highTech: 4.7, clothing: -0.7 },
  { month: "2024-11", agri: 3.3, ic: 7.0, mech: 18.8, highTech: 4.9, clothing: -0.2 },
  { month: "2024-12", agri: 4.1, ic: 7.5, mech: 17.4, highTech: 4.8, clothing: 0.3 },
  { month: "2025-02", agri: 3.0, ic: 4.2, mech: 11.9, highTech: 5.4, clothing: -6.9 },
  { month: "2025-03", agri: 5.7, ic: 7.6, mech: 10.8, highTech: 6.3, clothing: -1.9 },
  { month: "2025-04", agri: 5.0, ic: 8.3, mech: 13.5, highTech: 6.4, clothing: -1.5 },
  { month: "2025-05", agri: 3.5, ic: 8.1, mech: 17.5, highTech: 6.1, clothing: -0.5 },
  { month: "2025-06", agri: 1.8, ic: 8.2, mech: 18.9, highTech: 6.4, clothing: -0.2 },
  { month: "2025-07", agri: 1.8, ic: 8.1, mech: 20.5, highTech: 6.0, clothing: -0.3 },
  { month: "2025-08", agri: 1.0, ic: 8.1, mech: 22.1, highTech: 6.4, clothing: -1.7 },
  { month: "2025-09", agri: 1.4, ic: 8.6, mech: 23.3, highTech: 7.1, clothing: -2.5 },
  { month: "2025-10", agri: 1.1, ic: 7.8, mech: 23.7, highTech: 6.5, clothing: -3.8 },
  { month: "2025-11", agri: 1.2, ic: 8.0, mech: 24.7, highTech: 6.6, clothing: -4.4 },
  { month: "2025-12", agri: 1.2, ic: 8.4, mech: 26.8, highTech: 7.5, clothing: -5.0 },
];


// Slide 18 Data (Regional Structure)

export const exportGrowthByRegionData: ExportGrowthByRegionDataPoint[] = [
  { region: '非洲', value: 21.8, category: 'EM' },
  { region: '非美整体', value: 12.8, category: 'EM' },
  { region: '欧盟', value: 11.6, category: 'EU' },
  { region: '东盟', value: 11.1, category: 'EM' },
  { region: '拉美', value: 9.8, category: 'EM' },
  { region: '美国', value: -30.0, category: 'US' },
];

export const exportGrowthByRegionDetailedData: ExportGrowthByRegionDataPoint[] = [
  { region: '非洲', value: 21.8, category: 'EM' },
  { region: '非美整体', value: 12.8, category: 'EM' },
  { region: '欧盟', value: 11.6, category: 'EU' },
  { region: '东盟', value: 11.1, category: 'EM' },
  { region: '拉美', value: 9.8, category: 'EM' },
  { region: '美国', value: -30.0, category: 'US' },
];

export const exportShare2024Data: ExportShareDataPoint[] = [
  { name: '东盟', value: 16.5, fill: '#005c8f' },
  { name: '欧盟', value: 14.2, fill: '#00a9f4' },
  { name: '美国', value: 14.6, fill: '#ef4444' },
  { name: '其他', value: 54.7, fill: '#cbd5e1' },
];

export const exportShare2025Data: ExportShareDataPoint[] = [
  { name: '东盟', value: 18.2, fill: '#005c8f' },
  { name: '欧盟', value: 14.5, fill: '#00a9f4' },
  { name: '美国', value: 11.1, fill: '#ef4444' },
  { name: '其他', value: 56.2, fill: '#cbd5e1' },
];

export const regionalExportTrendData: RegionalExportTrendDataPoint[] = [
  { month: "01", total: 5.9, us: 12.1, asean: 3.2, africa: 6.6, eu: 10.8, latinAmerica: 18.9 },
  { month: "02", total: -3.1, us: -9.8, asean: 8.8, africa: -11.8, eu: -11.6, latinAmerica: -14.7 },
  { month: "03", total: 12.2, us: 9.1, asean: 11.6, africa: 37.0, eu: 10.3, latinAmerica: 23.5 },
  { month: "04", total: 8.0, us: -21.0, asean: 20.8, africa: 25.3, eu: 8.3, latinAmerica: 17.3 },
  { month: "05", total: 4.6, us: -34.5, asean: 14.8, africa: 33.3, eu: 12.0, latinAmerica: 2.3 },
  { month: "06", total: 5.8, us: -16.1, asean: 16.9, africa: 34.8, eu: 7.6, latinAmerica: -2.1 },
  { month: "07", total: 7.1, us: -21.7, asean: 16.6, africa: 42.4, eu: 9.2, latinAmerica: 7.7 },
  { month: "08", total: 4.3, us: -33.1, asean: 22.5, africa: 25.9, eu: 10.4, latinAmerica: -2.3 },
  { month: "09", total: 8.2, us: -27.0, asean: 15.6, africa: 56.4, eu: 14.2, latinAmerica: 15.2 },
  { month: "10", total: -1.2, us: -25.2, asean: 11.0, africa: 10.5, eu: 0.9, latinAmerica: 2.1 },
  { month: "11", total: 5.9, us: -28.6, asean: 8.2, africa: 27.6, eu: 14.8, latinAmerica: 14.9 },
  { month: "12", total: 6.6, us: -30.0, asean: 11.2, africa: 21.8, eu: 11.6, latinAmerica: 9.8 },
];

export const exportShareMigrationData: ExportShareMigrationDataPoint[] = [
  { name: '东盟 (ASEAN)', share2024: 15.5, share2025: 16.8 },
  { name: '美国 (USA)', share2024: 14.8, share2025: 11.1 },
  { name: '欧盟 (EU)', share2024: 14.7, share2025: 13.9 },
  { name: '新兴市场', share2024: 40.2, share2025: 43.5 },
  { name: '其他', share2024: 14.8, share2025: 14.7 },
];
