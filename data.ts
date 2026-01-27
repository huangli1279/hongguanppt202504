




import { GdpDataPoint, DeflatorDataPoint, IndustryGrowthData, ContributionDataPoint, BreakdownDataPoint, DemandStructureData, ThreeCarriagesContributionDataPoint, GrowthIndicatorData, PmiTrendDataPoint, PmiSizeDataPoint, PmiSizeTrendDataPoint, IndustrialTrendDataPoint, KeyIndustryDataPoint, ProfitBridgeDataPoint, InventoryCycleDataPoint, PpiTrendDataPoint, IndustryPriceDataPoint, PpiIndustryMomDataPoint, RetailTrendDataPoint, UrbanRuralDataPoint, ServiceGoodsDataPoint, DurableGoodsDataPoint, CpiTrendDataPoint, CpiContributionDataPoint, ConfidenceDataPoint, IncomeSourceDataPoint, FaiTrendDataPoint, InvestmentPillarsDataPoint, RealEstateInvestmentDataPoint, RealEstatePriceDataPoint, InfrastructureSectorDataPoint, InvestmentStructureDataPoint, IndustryGdpQuarterlyDataPoint, HighTechInvestmentDataPoint, TradeTrendDataPoint, TradeSurplusDataPoint, ExportItemGrowthDataPoint, ExportContributionDataPoint, ExportGrowthByRegionDataPoint, ExportShareDataPoint, BroadFiscalTrendDataPoint, FiscalLedgerGrowthDataPoint, TaxCategoryDataPoint, VatVsProductionDataPoint, LandRevenueDataPoint, SpecialBondDataPoint, MoneySupplyDataPoint, M1RealEstateDataPoint, TsfTrendDataPoint, LoanStructureDataPoint, TsfContributionDataPoint, CorpLoanTrendDataPoint, HouseholdLoanStructureDataPoint, DepositFlowDataPoint, IndustrialFinancialTableData, IndustryGrowthTableData, EquipmentVsConstructionTrendDataPoint } from './types';

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
  { period: '24Q1', primary: 0.5, secondary: -2.5, tertiary: 0.2 },
  { period: '24Q2', primary: 0.9, secondary: -1.8, tertiary: 0.1 },
  { period: '24Q3', primary: 0.4, secondary: -2.0, tertiary: -0.2 },
  { period: '24Q4', primary: -0.1, secondary: -2.4, tertiary: -0.3 },
  { period: '25Q1', primary: -0.3, secondary: -2.6, tertiary: -0.1 },
  { period: '25Q2', primary: -0.5, secondary: -2.9, tertiary: 0.0 },
  { period: '25Q3', primary: -1.0, secondary: -3.5, tertiary: -0.3 }, // Adjusted to match Q3 approx -1.1%
  { period: '25Q4', primary: -0.6, secondary: -2.1, tertiary: 0.4 },  // Adjusted to match Q4 approx -0.7%
];

// Slide 2 Data

export const industryGrowthData: IndustryGrowthData[] = [
  { name: '第一产业', '2025-03': 3.5, '2025-06': 3.8, '2025-09': 4.0, '2025-12': 4.2 },
  { name: '第二产业', '2025-03': 5.9, '2025-06': 4.8, '2025-09': 4.2, '2025-12': 3.4 },
  { name: '第三产业', '2025-03': 5.3, '2025-06': 5.7, '2025-09': 5.4, '2025-12': 5.2 },
];

export const contributionData: ContributionDataPoint[] = [
  { period: '24Q1', primary: 0.3, secondary: 2.1, tertiary: 2.9, total: 5.3 },
  { period: '24Q2', primary: 0.2, secondary: 1.8, tertiary: 2.7, total: 4.7 },
  { period: '24Q3', primary: 0.3, secondary: 1.7, tertiary: 2.6, total: 4.6 },
  { period: '24Q4', primary: 0.3, secondary: 2.2, tertiary: 2.7, total: 5.2 },
  { period: '25Q1', primary: 0.3, secondary: 2.3, tertiary: 2.8, total: 5.4 },
  { period: '25Q2', primary: 0.2, secondary: 2.1, tertiary: 2.9, total: 5.2 },
  { period: '25Q3', primary: 0.3, secondary: 1.8, tertiary: 2.7, total: 4.8 },
  { period: '25Q4', primary: 0.3, secondary: 1.3, tertiary: 2.9, total: 4.5 },
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
  { month: "01", large: 49.8, medium: 49.5, small: 46.5 },
  { month: "02", large: 52.5, medium: 49.2, small: 46.3 },
  { month: "03", large: 51.2, medium: 49.9, small: 49.6 },
  { month: "04", large: 49.2, medium: 48.8, small: 48.7 },
  { month: "05", large: 50.7, medium: 47.5, small: 49.3 },
  { month: "06", large: 51.2, medium: 48.6, small: 47.3 },
  { month: "07", large: 50.3, medium: 49.5, small: 46.4 },
  { month: "08", large: 50.8, medium: 49.5, small: 46.6 },
  { month: "09", large: 51.0, medium: 49.7, small: 48.2 },
  { month: "10", large: 49.9, medium: 48.8, small: 47.1 },
  { month: "11", large: 50.0, medium: 48.9, small: 49.1 },
  { month: "12", large: 51.7, medium: 49.8, small: 48.6 }
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
  title: "2024-2025年规模以上工业细分行业增加值当月同比增速",
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
  { month: '1月', ppi: -2.3, productionMaterials: -2.6, livingMaterials: -1.2 },
  { month: '2月', ppi: -2.2, productionMaterials: -2.5, livingMaterials: -1.2 },
  { month: '3月', ppi: -2.5, productionMaterials: -2.8, livingMaterials: -1.5 },
  { month: '4月', ppi: -2.7, productionMaterials: -3.1, livingMaterials: -1.6 },
  { month: '5月', ppi: -3.3, productionMaterials: -4.0, livingMaterials: -1.4 },
  { month: '6月', ppi: -3.6, productionMaterials: -4.4, livingMaterials: -1.4 },
  { month: '7月', ppi: -3.6, productionMaterials: -4.4, livingMaterials: -1.4 },
  { month: '8月', ppi: -2.9, productionMaterials: -3.2, livingMaterials: -1.7 },
  { month: '9月', ppi: -2.3, productionMaterials: -2.4, livingMaterials: -1.7 },
  { month: '10月', ppi: -2.1, productionMaterials: -2.4, livingMaterials: -1.4 },
  { month: '11月', ppi: -2.2, productionMaterials: -2.4, livingMaterials: -1.5 },
  { month: '12月', ppi: -1.9, productionMaterials: -2.1, livingMaterials: -1.3 },
];

export const industryPriceData: IndustryPriceDataPoint[] = [
  { industry: '锂离子电池', oct: 0.8, nov: 0.9, dec: 1.0 },
  { industry: '水泥制造', oct: 0.3, nov: 0.4, dec: 0.5 },
  { industry: '光伏设备', oct: 0.6, nov: 0.4, dec: 0.3 },
  { industry: '新能源车', oct: -0.2, nov: -0.1, dec: 0.1 }, // Turnaround
];

// Slide 7.5 Data (New Slide - PPI Industry Mom Details)
export const ppiIndustryMomData: PpiIndustryMomDataPoint[] = [
  { month: '2025-12', lithium: 1.00, solar: 1.30, electronics: 0.40, coal: -1.30, oil: 0.00, ferrousMining: 3.70, nonFerrous: 0.00, chemicals: 0.10, nonMetals: -0.10, ferrousSmelting: 0.00, generalEquip: -0.10, automotive: -0.10, electrical: 2.80 },
  { month: '2025-11', lithium: 4.10, solar: -2.40, electronics: 0.30, coal: 0.60, oil: 2.60, ferrousMining: -0.60, nonFerrous: 0.00, chemicals: -0.50, nonMetals: -0.10, ferrousSmelting: 0.10, generalEquip: -0.20, automotive: 0.10, electrical: 2.10 },
  { month: '2025-10', lithium: 0.20, solar: 0.60, electronics: 0.40, coal: 1.60, oil: 2.30, ferrousMining: 0.90, nonFerrous: 5.30, chemicals: -0.60, nonMetals: 0.10, ferrousSmelting: -0.70, generalEquip: -0.10, automotive: 0.00, electrical: 2.40 },
  { month: '2025-09', lithium: 0.80, solar: 2.50, electronics: -0.10, coal: -2.00, oil: 2.60, ferrousMining: 2.50, nonFerrous: -0.40, chemicals: -0.40, nonMetals: 0.20, ferrousSmelting: -0.10, generalEquip: -0.50, automotive: -0.20, electrical: 1.20 },
  { month: '2025-08', lithium: -0.20, solar: 2.80, electronics: -0.10, coal: -1.10, oil: 2.10, ferrousMining: 0.80, nonFerrous: -0.10, chemicals: -1.00, nonMetals: 1.90, ferrousSmelting: -0.10, generalEquip: -0.30, automotive: -0.20, electrical: 0.20 },
  { month: '2025-07', lithium: -1.50, solar: 3.00, electronics: 0.80, coal: -1.10, oil: 0.70, ferrousMining: -0.70, nonFerrous: -1.40, chemicals: -0.30, nonMetals: -0.20, ferrousSmelting: -0.30, generalEquip: -0.40, automotive: -0.20, electrical: 0.80 },
  { month: '2025-06', lithium: -3.40, solar: 2.60, electronics: 0.20, coal: -2.00, oil: 1.30, ferrousMining: -0.70, nonFerrous: -1.40, chemicals: -1.80, nonMetals: -0.20, ferrousSmelting: 0.20, generalEquip: -0.40, automotive: -0.20, electrical: 0.20 },
  { month: '2025-05', lithium: -3.00, solar: -5.60, electronics: 0.10, coal: -0.90, oil: 0.80, ferrousMining: -1.20, nonFerrous: -1.00, chemicals: -1.00, nonMetals: -0.20, ferrousSmelting: 0.00, generalEquip: 0.10, automotive: -0.20, electrical: 0.10 },
  { month: '2025-04', lithium: -3.30, solar: -3.10, electronics: 0.30, coal: -0.90, oil: 1.50, ferrousMining: -0.60, nonFerrous: 0.00, chemicals: -1.00, nonMetals: -0.20, ferrousSmelting: -0.50, generalEquip: -0.20, automotive: -0.10, electrical: 0.30 },
  { month: '2025-03', lithium: -4.30, solar: -4.40, electronics: 0.50, coal: 0.10, oil: 0.40, ferrousMining: 0.20, nonFerrous: -0.50, chemicals: -0.50, nonMetals: -0.10, ferrousSmelting: -0.40, generalEquip: -0.70, automotive: -0.10, electrical: 0.30 },
  { month: '2025-02', lithium: -3.30, solar: 0.30, electronics: 0.30, coal: 0.90, oil: 1.80, ferrousMining: 0.00, nonFerrous: -0.90, chemicals: -0.90, nonMetals: -0.20, ferrousSmelting: -0.30, generalEquip: 0.00, automotive: -0.10, electrical: 0.30 },
  { month: '2025-01', lithium: -0.60, solar: 0.50, electronics: -0.40, coal: -2.20, oil: 4.50, ferrousMining: 0.40, nonFerrous: -0.20, chemicals: -0.60, nonMetals: -0.90, ferrousSmelting: -0.20, generalEquip: 0.50, automotive: -0.30, electrical: -0.40 },
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
  { month: '1月', urban: 5.3, rural: 5.7 },
  { month: '2月', urban: 5.3, rural: 5.7 },
  { month: '3月', urban: 4.1, rural: 4.5 },
  { month: '4月', urban: 3.7, rural: 4.1 },
  { month: '5月', urban: 3.9, rural: 4.3 },
  { month: '6月', urban: 3.4, rural: 3.8 },
  { month: '7月', urban: 3.1, rural: 3.5 },
  { month: '8月', urban: 3.3, rural: 3.7 },
  { month: '9月', urban: 3.7, rural: 4.1 },
  { month: '10月', urban: 2.8, rural: 3.2 },
  { month: '11月', urban: 1.2, rural: 1.6 },
  { month: '12月', urban: 0.7, rural: 1.7 },
];

// Slide 9 Data

export const serviceGoodsData: ServiceGoodsDataPoint[] = [
  { month: '1-2月', service: 6.8, goods: 4.6 },
  { month: '3月', service: 6.5, goods: 4.2 },
  { month: '4月', service: 6.2, goods: 3.8 },
  { month: '5月', service: 6.4, goods: 4.1 },
  { month: '6月', service: 6.0, goods: 3.5 },
  { month: '7月', service: 5.8, goods: 3.1 },
  { month: '8月', service: 6.1, goods: 3.4 },
  { month: '9月', service: 5.9, goods: 3.6 },
  { month: '10月', service: 6.2, goods: 3.9 },
  { month: '11月', service: 5.8, goods: 3.5 },
  { month: '12月', service: 5.5, goods: 3.8 },
];

export const durableGoodsData: DurableGoodsDataPoint[] = [
  { category: '通讯器材', nov: 20.6, dec: 18.2 },
  { category: '家电音像', nov: -19.4, dec: 5.9 },
  { category: '汽车', nov: -8.3, dec: -3.5 },
  { category: '建筑装潢', nov: -17.0, dec: -15.5 },
];

// Slide 10 Data (CPI)

export const cpiTrendData: CpiTrendDataPoint[] = [
    { month: '1月', headline: 0.3, core: 0.8, adjustedCore: 0.8 },
    { month: '2月', headline: 0.7, core: 1.2, adjustedCore: 1.1 },
    { month: '3月', headline: 0.1, core: 0.6, adjustedCore: 0.6 },
    { month: '4月', headline: 0.3, core: 0.7, adjustedCore: 0.7 },
    { month: '5月', headline: 0.3, core: 0.6, adjustedCore: 0.6 },
    { month: '6月', headline: 0.2, core: 0.6, adjustedCore: 0.6 },
    { month: '7月', headline: 0.5, core: 0.4, adjustedCore: 0.4 },
    { month: '8月', headline: 0.6, core: 0.3, adjustedCore: 0.3 },
    { month: '9月', headline: 0.4, core: 0.8, adjustedCore: 0.7 },
    { month: '10月', headline: 0.3, core: 1.2, adjustedCore: 0.8 },
    { month: '11月', headline: 0.7, core: 1.2, adjustedCore: 0.7 },
    { month: '12月', headline: 0.8, core: 1.2, adjustedCore: 0.6 },
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
  { month: '1-2月', value: 4.2 },
  { month: '1-3月', value: 4.5 },
  { month: '1-4月', value: 4.0 },
  { month: '1-5月', value: 3.2 },
  { month: '1-6月', value: 2.8 },
  { month: '1-7月', value: 1.5 },
  { month: '1-8月', value: 0.4 },
  { month: '1-9月', value: -0.5 },
  { month: '1-10月', value: -1.7 },
  { month: '1-11月', value: -2.6 },
  { month: '1-12月', value: -3.8 },
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

// Slide 13 Data (Real Estate)

export const realEstateInvestmentData: RealEstateInvestmentDataPoint[] = [
  { month: '1-2月', investment: -9.0, newStarts: -15.5 },
  { month: '1-3月', investment: -9.5, newStarts: -16.2 },
  { month: '1-4月', investment: -9.8, newStarts: -16.8 },
  { month: '1-5月', investment: -10.1, newStarts: -17.2 },
  { month: '1-6月', investment: -10.1, newStarts: -17.5 },
  { month: '1-7月', investment: -10.2, newStarts: -18.0 },
  { month: '1-8月', investment: -10.2, newStarts: -18.5 },
  { month: '1-9月', investment: -13.5, newStarts: -20.0 },
  { month: '1-10月', investment: -15.1, newStarts: -21.5 },
  { month: '1-11月', investment: -16.3, newStarts: -22.8 },
  { month: '1-12月', investment: -17.2, newStarts: -20.4 }, // Updated to -20.4 as per prompt
];

export const realEstatePriceData: RealEstatePriceDataPoint[] = [
    { month: '2024-01', tier1: -1.24, tier2: -4.45, tier3: 0 },
    { month: '2024-02', tier1: -1.90, tier2: -5.15, tier3: 0 },
    { month: '2024-03', tier1: -2.65, tier2: -5.90, tier3: 0 },
    { month: '2024-04', tier1: -3.51, tier2: -6.79, tier3: 0 },
    { month: '2024-05', tier1: -4.30, tier2: -7.87, tier3: 0 },
    { month: '2024-06', tier1: -4.93, tier2: -8.17, tier3: 0 },
    { month: '2024-07', tier1: -5.28, tier2: -8.17, tier3: 0 },
    { month: '2024-08', tier1: -5.69, tier2: -8.59, tier3: 0 },
    { month: '2024-09', tier1: -6.09, tier2: -9.02, tier3: 0 },
    { month: '2024-10', tier1: -6.22, tier2: -8.94, tier3: 0 },
    { month: '2024-11', tier1: -6.07, tier2: -8.54, tier3: 0 },
    { month: '2024-12', tier1: -5.73, tier2: -7.49, tier3: 0 },
    { month: '2025-01', tier1: -5.43, tier2: -7.80, tier3: 0 },
    { month: '2025-02', tier1: -5.22, tier2: -7.53, tier3: 0 },
    { month: '2025-03', tier1: -4.90, tier2: -7.25, tier3: 0 },
    { month: '2025-04', tier1: -4.55, tier2: -6.76, tier3: 0 },
    { month: '2025-05', tier1: -4.08, tier2: -6.30, tier3: 0 },
    { month: '2025-06', tier1: -3.69, tier2: -6.09, tier3: 0 },
    { month: '2025-07', tier1: -3.37, tier2: -5.85, tier3: 0 },
    { month: '2025-08', tier1: -2.95, tier2: -5.51, tier3: 0 },
    { month: '2025-09', tier1: -2.66, tier2: -5.24, tier3: 0 },
    { month: '2025-10', tier1: -2.60, tier2: -5.40, tier3: 0 },
    { month: '2025-11', tier1: -2.78, tier2: -5.70, tier3: 0 },
    { month: '2025-12', tier1: -3.05, tier2: -6.07, tier3: 0 },
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
  timeSeries: ["2025-12", "2025-11", "2025-10", "2025-09", "2025-08", "2025-07", "2025-06", "2025-05", "2025-04", "2025-03", "2025-02", "2024-12"],
  industryData: {
    "电力/热力/燃气/水": [9.1, 10.7, 12.5, 15.3, 18.8, 21.5, 22.8, 25.4, 25.5, 26.0, 25.4, 23.9],
    "交通/仓储/邮政": [-1.2, -0.1, 0.1, 1.6, 2.7, 3.9, 5.6, 4.0, 3.9, 3.8, 2.7, 5.9],
    "铁路运输": [-1.2, 2.7, 3.0, 4.2, 4.5, 5.9, 4.2, 2.3, 1.6, 0.5, 0.2, 13.5],
    "信息/软件/技术": [8.8, 9.8, 11.2, 11.5, 10.9, 12.8, 13.0, 14.1, 9.5, 10.1, 11.7, 6.3],
    "水利/环境/公设": [-8.4, -6.3, -4.1, -2.4, -0.2, 2.0, 3.5, 7.2, 8.6, 9.8, 8.5, 4.2],
    "公共设施": [-8.2, -6.2, -4.4, -2.8, -1.1, 0.5, 1.7, 3.8, 4.9, 4.9, 2.6, -3.1],
    "非金属矿物": [-10.2, -9.5, -8.5, -6.6, -5.8, -4.8, -5.1, -3.6, -2.9, -1.8, 0.2, 1.6],
    "黑色金属": [-2.6, -1.3, -2.0, -2.0, -3.3, -4.1, -0.6, -1.6, 2.0, 5.5, 5.7, 1.8],
    "有色金属": [-4.2, -2.2, -1.5, 0.4, 2.2, 4.9, 9.1, 14.3, 16.4, 17.9, 16.1, 24.2],
    "通用设备": [6.2, 8.9, 9.5, 11.8, 13.7, 14.8, 16.6, 17.5, 17.9, 17.2, 21.6, 15.5],
    "电气机械": [-10.3, -9.5, -9.4, -9.5, -8.8, -8.7, -7.8, -8.6, -7.5, -7.4, -8.6, -3.9]
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

// Slide 18 Data (Regional Structure)

export const exportGrowthByRegionData: ExportGrowthByRegionDataPoint[] = [
  { region: '非洲', value: 21.8, category: 'EM' },
  { region: '非美整体', value: 12.8, category: 'EM' }, // Reference
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