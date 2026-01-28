




import { GdpDataPoint, DeflatorDataPoint, IndustryGrowthData, ContributionDataPoint, BreakdownDataPoint, DemandStructureData, ThreeCarriagesContributionDataPoint, GrowthIndicatorData, PmiTrendDataPoint, PmiSizeDataPoint, PmiSizeTrendDataPoint, IndustrialTrendDataPoint, KeyIndustryDataPoint, ProfitBridgeDataPoint, InventoryCycleDataPoint, PpiTrendDataPoint, CommodityIndexDataPoint, IndustryPriceDataPoint, PpiIndustryMomDataPoint, RetailTrendDataPoint, UrbanRuralDataPoint, ServiceGoodsDataPoint, DurableGoodsDataPoint, CpiTrendDataPoint, CpiContributionDataPoint, ConfidenceDataPoint, IncomeSourceDataPoint, FaiTrendDataPoint, InvestmentPillarsDataPoint, PrivateStateInvestmentDataPoint, RealEstateInvestmentDataPoint, RealEstatePriceDataPoint, RealEstateMarketDataPoint, InfrastructureSectorDataPoint, InvestmentStructureDataPoint, IndustryGdpQuarterlyDataPoint, HighTechInvestmentDataPoint, TradeTrendDataPoint, TradeSurplusDataPoint, ExportItemGrowthDataPoint, ExportContributionDataPoint, ExportGrowthByRegionDataPoint, ExportShareDataPoint, BroadFiscalTrendDataPoint, FiscalLedgerGrowthDataPoint, TaxCategoryDataPoint, VatVsProductionDataPoint, LandRevenueDataPoint, SpecialBondDataPoint, MoneySupplyDataPoint, M1RealEstateDataPoint, TsfTrendDataPoint, LoanStructureDataPoint, TsfContributionDataPoint, CorpLoanTrendDataPoint, HouseholdLoanStructureDataPoint, DepositFlowDataPoint, IndustrialFinancialTableData, IndustryGrowthTableData, EquipmentVsConstructionTrendDataPoint, Q4ExportGrowthDataPoint, MonthlyTradeGrowthDataPoint, ConsumptionPropensityDataPoint, FaiComponentsDataPoint, ComputingExportGrowthDataPoint, MechElecExportGrowthDataPoint, RegionalExportTrendDataPoint, ExportShareMigrationDataPoint, AutoDealerInventoryDataPoint } from './types';

// Slide 1 Data

export const gdpTrendData: GdpDataPoint[] = [
  { period: '24Q1', value: 5.3, nominal: 4.16 },
  { period: '24Q2', value: 4.7, nominal: 3.9 },
  { period: '24Q3', value: 4.6, nominal: 3.96 },
  { period: '24Q4', value: 5.4, nominal: 4.56 },
  { period: '25Q1', value: 5.4, nominal: 4.58 },
  { period: '25Q2', value: 5.2, nominal: 3.9 },
  { period: '25Q3', value: 4.8, nominal: 3.71 },
  { period: '25Q4', value: 4.5, nominal: 3.85 },
];

export const deflatorData: DeflatorDataPoint[] = [
  { period: '23Q1', primary: 2.1, secondary: -1.5, tertiary: 1.8 },
  { period: '23Q2', primary: 1.5, secondary: -2.2, tertiary: 1.2 },
  { period: '23Q3', primary: 1.2, secondary: -2.8, tertiary: 0.9 },
  { period: '23Q4', primary: 0.8, secondary: -3.1, tertiary: 0.5 },
  { period: '24Q1', primary: -3.58, secondary: -2.38, tertiary: -0.08 },
  { period: '24Q2', primary: -1.78, secondary: -1.43, tertiary: -0.13 },
  { period: '24Q3', primary: 1.25, secondary: -1.66, tertiary: -0.13 },
  { period: '24Q4', primary: -1.05, secondary: -2.28, tertiary: 0.31 },
  { period: '25Q1', primary: -1.24, secondary: -2.35, tertiary: 0.12 },
  { period: '25Q2', primary: -1.41, secondary: -2.93, tertiary: -0.15 },
  { period: '25Q3', primary: -3.85, secondary: -2.67, tertiary: 0.31 },
  { period: '25Q4', primary: -1.12, secondary: -2.02, tertiary: 0.43 },
];

// Slide 2 Data

export const industryGrowthData: IndustryGrowthData[] = [
  { name: '第一产业', '2025-03': 3.5, '2025-06': 3.8, '2025-09': 4.0, '2025-12': 4.2 },
  { name: '第二产业', '2025-03': 5.9, '2025-06': 4.8, '2025-09': 4.2, '2025-12': 3.4 },
  { name: '第三产业', '2025-03': 5.3, '2025-06': 5.7, '2025-09': 5.4, '2025-12': 5.2 },
];

export const contributionData: ContributionDataPoint[] = [
  { period: '2024-03', primary: 0.14, secondary: 2.04, tertiary: 0.94 },  // 3.12 - 0.14 - 2.04
  { period: '2024-06', primary: 0.24, secondary: 1.98, tertiary: 0.26 },  // 2.48 - 0.24 - 1.98
  { period: '2024-09', primary: 0.29, secondary: 1.57, tertiary: 0.88 },  // 2.74 - 0.29 - 1.57
  { period: '2024-12', primary: 0.39, secondary: 1.81, tertiary: 1.00 },  // 3.20 - 0.39 - 1.81
  { period: '2025-03', primary: 0.14, secondary: 2.06, tertiary: 1.00 },  // 3.20 - 0.14 - 2.06
  { period: '2025-06', primary: 0.24, secondary: 1.78, tertiary: 1.16 },  // 3.18 - 0.24 - 1.78
  { period: '2025-09', primary: 0.34, secondary: 1.50, tertiary: 1.13 },  // 2.97 - 0.34 - 1.50
  { period: '2025-12', primary: 0.41, secondary: 1.24, tertiary: 1.19 },  // 2.84 - 0.41 - 1.24
];

// 2023-2025 Three-Year GDP Contribution Data (三产业GDP当季同比拉动数据)
export const threeYearContributionData: ContributionDataPoint[] = [
  { period: '2023-03', primary: 0.15, secondary: 1.02, tertiary: 3.52 },
  { period: '2023-06', primary: 0.24, secondary: 1.83, tertiary: 4.43 },
  { period: '2023-09', primary: 0.36, secondary: 1.54, tertiary: 3.10 },
  { period: '2023-12', primary: 0.42, secondary: 1.87, tertiary: 3.02 },
  { period: '2024-03', primary: 0.14, secondary: 2.04, tertiary: 3.12 },
  { period: '2024-06', primary: 0.24, secondary: 1.98, tertiary: 2.48 },
  { period: '2024-09', primary: 0.29, secondary: 1.57, tertiary: 2.74 },
  { period: '2024-12', primary: 0.39, secondary: 1.81, tertiary: 3.20 },
  { period: '2025-03', primary: 0.14, secondary: 2.06, tertiary: 3.20 },
  { period: '2025-06', primary: 0.24, secondary: 1.78, tertiary: 3.18 },
  { period: '2025-09', primary: 0.34, secondary: 1.50, tertiary: 2.97 },
  { period: '2025-12', primary: 0.41, secondary: 1.24, tertiary: 2.84 },
];

export const breakdownData: BreakdownDataPoint[] = [
  { name: '信息技术服务', value: 11.1, type: 'growth' },
  { name: '租赁商务服务', value: 10.3, type: 'growth' },
  { name: '高技术制造业', value: 9.4, type: 'growth' },
  { name: '装备制造业', value: 9.2, type: 'growth' },
  { name: '第三产业整体', value: 5.2, type: 'growth' },
  { name: 'GDP整体', value: 4.5, type: 'growth' },
  { name: '第二产业整体', value: 3.4, type: 'growth' },
  { name: '建筑业', value: -1.2, type: 'lag' },
  { name: '房地产开发投资', value: -17.2, type: 'lag' },
];

// Slide 2.5 Data (New Slide - Industry GDP Quarterly)

export const industryGdpQuarterlyData: IndustryGdpQuarterlyDataPoint[] = [
  { industry: '信息传输、软件和信息技术服务业', q1: 10.3, q2: 11.8, q3: 11.7, q4: 10.7, category: 'new-quality' },
  { industry: '租赁和商务服务业', q1: 10.2, q2: 9.0, q3: 8.6, q4: 12.7, category: 'new-quality' },
  { industry: '制造业', q1: 6.8, q2: 6.5, q3: 6.3, q4: 5.1, category: 'strong' },
  { industry: '工业', q1: 6.3, q2: 6.2, q3: 5.8, q4: 5.0, category: 'strong' },
  { industry: '批发和零售业', q1: 5.8, q2: 6.0, q3: 4.9, q4: 3.7, category: 'moderate' },
  { industry: '其他行业', q1: 4.1, q2: 4.4, q3: 5.5, q4: 5.9, category: 'moderate' },
  { industry: '住宿和餐饮业', q1: 5.1, q2: 5.2, q3: 3.6, q4: 5.6, category: 'moderate' },
  { industry: '农林牧渔业', q1: 3.7, q2: 4.0, q3: 4.1, q4: 4.3, category: 'moderate' },
  { industry: '交通运输、仓储和邮政业', q1: 7.2, q2: 5.6, q3: 4.8, q4: 3.4, category: 'moderate' },
  { industry: '金融业', q1: 3.8, q2: 5.8, q3: 5.2, q4: 3.3, category: 'moderate' },
  { industry: '房地产业', q1: 1.0, q2: 1.0, q3: -0.2, q4: -1.0, category: 'weak' },
  { industry: '建筑业', q1: 3.1, q2: -0.6, q3: -2.3, q4: -2.5, category: 'weak' },
];

// Slide 3 Data

export const demandStructureData: DemandStructureData[] = [
  { name: '最终消费支出', value: 52.9, fill: '#005c8f' }, // WeBank Accent Blue
  { name: '货物和服务净出口', value: 31.1, fill: '#00a9f4' }, // Light Blue
  { name: '资本形成总额', value: 16.0, fill: '#94a3b8' }, // Grey
];

export const threeCarriagesContributionData: ThreeCarriagesContributionDataPoint[] = [
  { period: '2024-03', consumption: 76.5, investment: 9.2, netExport: 14.3 },
  { period: '2024-06', consumption: 50.5, investment: 38.4, netExport: 11.1 },
  { period: '2024-09', consumption: 32.6, investment: 22.8, netExport: 44.5 },
  { period: '2024-12', consumption: 32.1, investment: 22.1, netExport: 45.8 },
  { period: '2025-03', consumption: 50.1, investment: 4.7, netExport: 45.2 },
  { period: '2025-06', consumption: 51.0, investment: 24.2, netExport: 24.8 },
  { period: '2025-09', consumption: 54.1, investment: 15.9, netExport: 30.0 },
  { period: '2025-12', consumption: 52.9, investment: 16.0, netExport: 31.1 },
];

export const threeCarriagesData: GrowthIndicatorData[] = [
  { name: '出口总额', value: 6.1, category: 'export' },
  { name: '服务消费', value: 5.5, category: 'consumption' },
  { name: '社会消费品零售', value: 3.5, category: 'consumption' }, // Estimated based on positive but slow
  { name: '制造业投资', value: 0.6, category: 'investment' },
  { name: '固定资产投资', value: -3.8, category: 'investment' },
  { name: '房地产开发投资', value: -17.2, category: 'investment' },
];

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
  { name: '高技术制造业', value: 9.4, category: 'new' }, // Benchmark
  { name: '装备制造业', value: 9.2, category: 'new' }, // Benchmark
  { name: '规上工业整体', value: 0.86, category: 'average' }, // Reference
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
  { name: '营收增长', value: 2.1, fill: '#00a9f4' }, // Positive volume
  { name: '成本费用', value: -8.8, fill: '#ef4444' }, // PPI drag
  { name: '实际经营利润', value: -6.7, fill: '#051c2c', isTotal: true }, // The "underlying" metric
  { name: '投资收益错位', value: -6.4, fill: '#94a3b8' }, // The specific callout
  { name: '利润总额', value: -13.1, fill: '#ef4444', isTotal: true }, // The headline number
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
  { month: '11月', nominal: 4.3, real: 7.0, days: 70.4 }, // Highlighted in slide
];

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
  { industry: '新能源车', oct: -0.2, nov: -0.1, dec: 0.1 }, // Turnaround
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

// Slide 8 Data
export const retailTrendData: RetailTrendDataPoint[] = [
  { month: '1月', value: 5.5 },
  { month: '2月', value: 5.5 }, // Combined Jan-Feb often reported together, splitting for viz
  { month: '3月', value: 4.2 },
  { month: '4月', value: 3.8 },
  { month: '5月', value: 4.0 },
  { month: '6月', value: 3.5 },
  { month: '7月', value: 3.2 },
  { month: '8月', value: 3.4 },
  { month: '9月', value: 3.8 },
  { month: '10月', value: 2.9, highlight: true },
  { month: '11月', value: 1.3, highlight: true },
  { month: '12月', value: 0.9, highlight: true },
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
  { month: '2024-02', service: 12.30, goods: 6.20 },
  { month: '2024-03', service: 10.00, goods: 4.90 },
  { month: '2024-04', service: 8.40, goods: 4.00 },
  { month: '2024-05', service: 7.90, goods: 3.90 },
  { month: '2024-06', service: 7.50, goods: 2.90 },
  { month: '2024-07', service: 7.20, goods: 2.50 },
  { month: '2024-08', service: 6.90, goods: 2.10 },
  { month: '2024-09', service: 6.70, goods: 2.20 },
  { month: '2024-10', service: 6.50, goods: 2.70 },
  { month: '2024-11', service: 6.40, goods: 2.50 },
  { month: '2024-12', service: 6.20, goods: 2.70 },
  { month: '2025-02', service: 4.90, goods: 4.40 },
  { month: '2025-03', service: 5.00, goods: 5.80 },
  { month: '2025-04', service: 5.10, goods: 6.00 },
  { month: '2025-05', service: 5.20, goods: 6.40 },
  { month: '2025-06', service: 5.30, goods: 6.30 },
  { month: '2025-07', service: 5.20, goods: 5.80 },
  { month: '2025-08', service: 5.10, goods: 5.40 },
  { month: '2025-09', service: 5.20, goods: 5.10 },
  { month: '2025-10', service: 5.30, goods: 4.70 },
  { month: '2025-11', service: 5.40, goods: 4.00 },
  { month: '2025-12', service: 5.50, goods: 3.36 },
];

export const durableGoodsData: DurableGoodsDataPoint[] = [
  { category: '通讯器材', nov: 20.6, dec: 18.2 },
  { category: '家电音像', nov: -19.4, dec: 5.9 },
  { category: '汽车', nov: -8.3, dec: -3.5 },
  { category: '建筑装潢', nov: -17.0, dec: -15.5 },
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
  { sector: '电子通信', value: 13.2, category: 'high-tech' }, // Mocked
  { sector: '制造业整体', value: 5.9, category: 'average' }, // Reference
  { sector: '纺织服装', value: -2.5, category: 'traditional' }, // Mocked
  { sector: '电气机械', value: -10.3, category: 'traditional' },
];

// Slide 16 Data (Trade)

export const tradeTrendData: TradeTrendDataPoint[] = [
  { month: '9月', export: 2.4, import: 0.3 }, // Mocked for context
  { month: '10月', export: -1.1, import: -2.3 },
  { month: '11月', export: 5.9, import: 1.9 },
  { month: '12月', export: 6.6, import: 5.7 },
];

export const q4ExportGrowthData: Q4ExportGrowthDataPoint[] = [
  { period: '24-10', value: 12.7 },
  { period: '24-11', value: 6.7 },
  { period: '24-12', value: 2.3 },
  { period: '25-10', value: -1.1, annotation: '基数陷阱：受24年台风后补偿性高位影响' },
  { period: '25-11', value: 5.9 },
  { period: '25-12', value: 6.6, annotation: '超预期：抢出口+电子周期共振' },
];

export const monthlyTradeGrowthData: MonthlyTradeGrowthDataPoint[] = [
  { month: '2025-01', export: 8.2, import: 15.4, total: 11.3 },
  { month: '2025-02', export: 10.6, import: -1.3, total: 4.9 },
  { month: '2025-03', export: -3.8, import: 2.0, total: -1.3 },
  { month: '2025-04', export: 0.9, import: 12.2, total: 5.5 },
  { month: '2025-05', export: 11.2, import: 5.2, total: 8.6 },
  { month: '2025-06', export: 10.7, import: -0.6, total: 5.8 },
  { month: '2025-07', export: 6.5, import: 6.6, total: 6.5 },
  { month: '2025-08', export: 8.4, import: 0.0, total: 4.8 },
  { month: '2025-09', export: 1.6, import: 0.7, total: 1.2 },
  { month: '2025-10', export: -1.1, import: -1.2, total: -1.1 },
  { month: '2025-11', export: 1.2, import: -0.6, total: 0.4 },
  { month: '2025-12', export: 6.6, import: 1.1, total: 4.2 },
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
  { name: '出口总额', value: 6.6, category: 'tech' }, // Reference
  { name: '服装/衣着', value: -5.0, category: 'traditional' }, // Mocked
  { name: '家具/零件', value: -8.5, category: 'traditional' },
];

export const exportContributionData: ExportContributionDataPoint[] = [
  { name: '机电产品', value: 5.2, fill: '#051c2c' }, // Strong positive
  { name: '其他产品', value: 2.6, fill: '#94a3b8' }, // Balance
  { name: '劳动密集型', value: -1.2, fill: '#ef4444' }, // Negative drag
];

export const computingExportGrowthData: ComputingExportGrowthDataPoint[] = [
  { month: "2024-01", server: 9.20, semiconductor: 9.50 },
  { month: "2024-02", server: 9.80, semiconductor: 8.10 },
  { month: "2024-03", server: 3.20, semiconductor: 6.40 },
  { month: "2024-04", server: 8.50, semiconductor: 7.50 },
  { month: "2024-05", server: 11.40, semiconductor: 9.80 },
  { month: "2024-06", server: 10.10, semiconductor: 10.20 },
  { month: "2024-07", server: 9.20, semiconductor: 8.40 },
  { month: "2024-08", server: 4.10, semiconductor: 9.50 },
  { month: "2024-09", server: 3.80, semiconductor: 11.10 },
  { month: "2024-10", server: 15.60, semiconductor: 14.80 },
  { month: "2024-11", server: 5.80, semiconductor: 10.20 },
  { month: "2024-12", server: 7.20, semiconductor: 12.50 },
  { month: "2025-01", server: 11.30, semiconductor: 10.20 },
  { month: "2025-02", server: 10.40, semiconductor: 9.60 },
  { month: "2025-03", server: 7.20, semiconductor: 8.50 },
  { month: "2025-04", server: 9.50, semiconductor: 10.20 },
  { month: "2025-05", server: 10.10, semiconductor: 11.40 },
  { month: "2025-06", server: 13.50, semiconductor: 12.60 },
  { month: "2025-07", server: 16.20, semiconductor: 15.50 },
  { month: "2025-08", server: 19.50, semiconductor: 16.80 },
  { month: "2025-09", server: 11.80, semiconductor: 13.10 },
  { month: "2025-10", server: 9.10, semiconductor: 14.20 },
  { month: "2025-11", server: 25.40, semiconductor: 21.50 },
  { month: "2025-12", server: 36.20, semiconductor: 28.40 }
];

export const mechElecExportGrowthData: MechElecExportGrowthDataPoint[] = [
  { month: "2025-01", auto: 41.2, ic: 12.0, total: 8.0 },
  { month: "2025-02", auto: 33.1, ic: 11.5, total: 7.2 },
  { month: "2025-03", auto: 28.5, ic: 8.2, total: 5.5 },
  { month: "2025-04", auto: 30.2, ic: 9.8, total: 6.2 },
  { month: "2025-05", auto: 35.6, ic: 10.5, total: 8.1 },
  { month: "2025-06", auto: 42.1, ic: 14.2, total: 7.6 },
  { month: "2025-07", auto: 48.5, ic: 18.5, total: 8.4 },
  { month: "2025-08", auto: 51.0, ic: 22.4, total: 9.2 },
  { month: "2025-09", auto: 45.2, ic: 12.8, total: 4.8 },
  { month: "2025-10", auto: 38.6, ic: 15.6, total: 2.1 },
  { month: "2025-11", auto: 52.4, ic: 32.1, total: 6.5 },
  { month: "2025-12", auto: 71.7, ic: 47.7, total: 12.1 }
];

// Slide 18 Data (Regional Structure)

export const exportGrowthByRegionData: ExportGrowthByRegionDataPoint[] = [
  { region: '非洲', value: 21.8, category: 'EM' },
  { region: '非美整体', value: 12.8, category: 'EM' }, // Reference
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
  { month: "01", total: 0.8, us: -0.5, asean: 5.5, africa: 9.3, eu: 2.1 },
  { month: "02", total: 1.2, us: -2.1, asean: 6.2, africa: 8.1, eu: 1.2 },
  { month: "03", total: 0.5, us: -3.4, asean: 5.1, africa: 6.5, eu: 0.5 },
  { month: "04", total: 2.8, us: 1.5, asean: 3.7, africa: 7.6, eu: 1.8 },
  { month: "05", total: 2.1, us: -2.2, asean: 4.3, africa: 8.4, eu: 2.5 },
  { month: "06", total: 1.5, us: -4.1, asean: 5.8, africa: 9.2, eu: 3.2 },
  { month: "07", total: 2.9, us: -5.3, asean: 6.9, africa: 10.5, eu: 4.1 },
  { month: "08", total: 3.1, us: -8.6, asean: 7.5, africa: 12.8, eu: 5.4 },
  { month: "09", total: 3.5, us: -12.1, asean: 8.2, africa: 14.1, eu: 6.2 },
  { month: "10", total: 4.8, us: -18.5, asean: 9.8, africa: 15.2, eu: 8.5 },
  { month: "11", total: 5.2, us: -25.2, asean: 10.5, africa: 18.6, eu: 9.8 },
  { month: "12", total: 6.6, us: -30.0, asean: 11.1, africa: 21.8, eu: 11.6 },
];

export const exportShareMigrationData: ExportShareMigrationDataPoint[] = [
  { name: '东盟 (ASEAN)', share2024: 15.5, share2025: 16.8 },
  { name: '美国 (USA)', share2024: 14.8, share2025: 11.1 },
  { name: '欧盟 (EU)', share2024: 14.7, share2025: 13.9 },
  { name: '新兴市场', share2024: 40.2, share2025: 43.5 },
  { name: '其他', share2024: 14.8, share2025: 14.7 },
];

// Slide 19 Data
export const broadFiscalTrendData: BroadFiscalTrendDataPoint[] = [
  { month: '1-2月', income: 2.3, expenditure: 8.7 },
  { month: '3月', income: 2.0, expenditure: 7.9 },
  { month: '4月', income: 1.8, expenditure: 7.2 },
  { month: '5月', income: 1.5, expenditure: 6.8 },
  { month: '6月', income: 1.1, expenditure: 6.5 },
  { month: '7月', income: 0.8, expenditure: 6.1 },
  { month: '8月', income: 0.4, expenditure: 5.8 },
  { month: '9月', income: 0.1, expenditure: 5.4 },
  { month: '10月', income: -0.1, expenditure: 5.0 }, 
  { month: '11月', income: -0.2, expenditure: 4.5 }, 
];

export const fiscalLedgerGrowthData: FiscalLedgerGrowthDataPoint[] = [
  { month: '3月', ledger1: 4.2, ledger2: -8.5 },
  { month: '4月', ledger1: 3.8, ledger2: -10.2 },
  { month: '5月', ledger1: 3.5, ledger2: -12.4 },
  { month: '6月', ledger1: 3.0, ledger2: -15.1 },
  { month: '7月', ledger1: 2.5, ledger2: -16.8 },
  { month: '8月', ledger1: 1.2, ledger2: -18.5 },
  { month: '9月', ledger1: 0.5, ledger2: -20.2 },
  { month: '10月', ledger1: -3.8, ledger2: -22.5 },
  { month: '11月', ledger1: 0.8, ledger2: -14.2 },
];

// Slide 20 Data (Tax Analysis)

export const taxCategoryData: TaxCategoryDataPoint[] = [
  { category: '证券印花税', value: 70.7, highlight: true },
  { category: '个人所得税', value: 11.5, highlight: true },
  { category: '国内增值税', value: 3.9 },
  { category: '税收总额', value: 1.8 },
  { category: '企业所得税', value: -1.2 }, // Mocked cumulative
  { category: '非税收入', value: -3.7, highlight: true },
];

export const vatVsProductionData: VatVsProductionDataPoint[] = [
    { month: '2月', industrial: 7.0, vat: 6.8 },
    { month: '3月', industrial: 4.5, vat: 3.5 },
    { month: '4月', industrial: 6.7, vat: 5.8 },
    { month: '5月', industrial: 5.6, vat: 4.9 },
    { month: '6月', industrial: 5.3, vat: 4.2 },
    { month: '7月', industrial: 5.1, vat: 3.8 },
    { month: '8月', industrial: 4.5, vat: 3.2 },
    { month: '9月', industrial: 5.4, vat: 4.0 },
    { month: '10月', industrial: 5.3, vat: 8.6 }, // Tax surge in Oct
    { month: '11月', industrial: 5.3, vat: 1.5 }, // Tax drop in Nov dragging correlation
];

// Slide 21 Data

export const landRevenueData: LandRevenueDataPoint[] = [
  { month: '1-2月', value: 0.0 },
  { month: '1-3月', value: -2.1 },
  { month: '1-4月', value: -3.5 },
  { month: '1-5月', value: -4.2 },
  { month: '1-6月', value: -5.8 },
  { month: '1-7月', value: -6.5 },
  { month: '1-8月', value: -6.8 },
  { month: '1-9月', value: -7.0 },
  { month: '1-10月', value: -7.4 },
  { month: '1-11月', value: -10.7 },
];

export const specialBondData: SpecialBondDataPoint[] = [
  { month: '1月', issuance: 500, progress: 1.3 },
  { month: '2月', issuance: 400, progress: 2.3 },
  { month: '3月', issuance: 600, progress: 3.9 },
  { month: '4月', issuance: 800, progress: 6.0 },
  { month: '5月', issuance: 3000, progress: 13.8 },
  { month: '6月', issuance: 4500, progress: 25.5 },
  { month: '7月', issuance: 3500, progress: 34.6 },
  { month: '8月', issuance: 8000, progress: 55.4 },
  { month: '9月', issuance: 9000, progress: 78.8 },
  { month: '10月', issuance: 6000, progress: 94.4 },
  { month: '11月', issuance: 2650, progress: 101.3 },
];

// Slide 22 Data (Money Supply)
export const moneySupplyData: MoneySupplyDataPoint[] = [
    { month: '9月', m1: 7.2, m2: 8.4, gap: 1.2 },
    { month: '10月', m1: 6.0, m2: 8.2, gap: 2.2 },
    { month: '11月', m1: 4.8, m2: 8.0, gap: 3.2 },
    { month: '12月', m1: 3.8, m2: 8.5, gap: 4.7 },
];

export const m1RealEstateData: M1RealEstateDataPoint[] = [
    { month: '9月', m1: 7.2, realEstateSales: -12.5 },
    { month: '10月', m1: 6.0, realEstateSales: -15.2 },
    { month: '11月', m1: 4.8, realEstateSales: -18.6 },
    { month: '12月', m1: 3.8, realEstateSales: -20.4 },
];

// Slide 23 Data (Social Financing & Credit) - PREVIOUS DATA COMMENTED OUT OR REMOVED
// export const tsfTrendData: TsfTrendDataPoint[] = [...];
// export const loanStructureData: LoanStructureDataPoint[] = [...];

export const tsfTrendData: TsfTrendDataPoint[] = [
    // This is kept if used elsewhere, otherwise it can be ignored or updated.
    // We are replacing the charts in Slide 23, so we might not need this anymore if not used elsewhere.
    // Keeping a stub just in case.
    { month: '12月', growth: 8.3, newTsf: 2.21 },
];

export const loanStructureData: LoanStructureDataPoint[] = [
    // Stub
     { sector: 'Corp', value: 0, type: 'corporate', fill: '#000' }
];

// NEW DATA FOR UPDATED SLIDE 23

export const tsfDecContributionData: TsfContributionDataPoint[] = [
    { category: '政府债券', value: -10700, fill: '#ef4444' }, // Negative drag
    { category: '企业中长贷', value: 2900, fill: '#005c8f' }, // Positive support
    { category: '企业债券', value: 1683, fill: '#00a9f4' }, // Positive support
    { category: '其他', value: -340, fill: '#94a3b8' }, // Residual
    { category: '社融总计', value: -6457, fill: '#333333', isTotal: true }, // Total change
];

export const corpLoanTrendData: CorpLoanTrendDataPoint[] = [
    { month: '7月', value: -800, isPositive: false },
    { month: '8月', value: -1200, isPositive: false },
    { month: '9月', value: -1500, isPositive: false },
    { month: '10月', value: -1300, isPositive: false },
    { month: '11月', value: -900, isPositive: false },
    { month: '12月', value: 2900, isPositive: true },
];

// Slide 24 Data

export const householdLoanStructureData: HouseholdLoanStructureDataPoint[] = [
  { year: '2023年12月', shortTerm: 500, mediumLongTerm: 1500, total: 2000 },
  { year: '2024年12月', shortTerm: 1000, mediumLongTerm: 2500, total: 3500 },
  { year: '2025年12月', shortTerm: -1023, mediumLongTerm: 107, total: -916 },
];

export const depositFlowData: DepositFlowDataPoint[] = [
  { month: '10月', household: -5000, nonBank: 10000 },
  { month: '11月', household: 8000, nonBank: 3000 },
  { month: '12月', household: 25800, nonBank: -3300 },
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
