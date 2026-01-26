




import { GdpDataPoint, DeflatorDataPoint, IndustryGrowthData, ContributionDataPoint, BreakdownDataPoint, DemandStructureData, GrowthIndicatorData, PmiTrendDataPoint, PmiSizeDataPoint, IndustrialTrendDataPoint, KeyIndustryDataPoint, ProfitBridgeDataPoint, InventoryCycleDataPoint, PpiTrendDataPoint, IndustryPriceDataPoint, RetailTrendDataPoint, UrbanRuralDataPoint, ServiceGoodsDataPoint, DurableGoodsDataPoint, CpiTrendDataPoint, CpiContributionDataPoint, ConfidenceDataPoint, IncomeSourceDataPoint, FaiTrendDataPoint, InvestmentPillarsDataPoint, RealEstateInvestmentDataPoint, RealEstatePriceDataPoint, InfrastructureSectorDataPoint, InvestmentStructureDataPoint, HighTechInvestmentDataPoint, TradeTrendDataPoint, TradeSurplusDataPoint, ExportItemGrowthDataPoint, ExportContributionDataPoint, ExportGrowthByRegionDataPoint, ExportShareDataPoint, BroadFiscalTrendDataPoint, FiscalLedgerGrowthDataPoint, TaxCategoryDataPoint, VatVsProductionDataPoint, LandRevenueDataPoint, SpecialBondDataPoint, MoneySupplyDataPoint, M1RealEstateDataPoint, TsfTrendDataPoint, LoanStructureDataPoint, TsfContributionDataPoint, CorpLoanTrendDataPoint, HouseholdLoanStructureDataPoint, DepositFlowDataPoint } from './types';

// Slide 1 Data

export const gdpTrendData: GdpDataPoint[] = [
  { period: '24Q1', value: 5.3 },
  { period: '24Q2', value: 4.7 },
  { period: '24Q3', value: 4.6 },
  { period: '24Q4', value: 5.2 },
  { period: '25Q1', value: 5.4 },
  { period: '25Q2', value: 5.2 },
  { period: '25Q3', value: 4.8 },
  { period: '25Q4', value: 4.5 },
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
  { name: '第一产业', value: 4.2, fill: '#94a3b8' },
  { name: '第二产业', value: 3.4, fill: '#ef4444' }, // Red to show slowdown
  { name: '第三产业', value: 5.2, fill: '#00a9f4' }, // Light blue as core support
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

// Slide 3 Data

export const demandStructureData: DemandStructureData[] = [
  { name: '最终消费支出', value: 52.9, fill: '#051c2c' }, // WeBank Blue (Main driver)
  { name: '货物和服务净出口', value: 31.1, fill: '#00a9f4' }, // Light Blue (Strong support)
  { name: '资本形成总额', value: 16.0, fill: '#94a3b8' }, // Grey (Weakness)
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

// Slide 5 Data

export const industrialTrendData: IndustrialTrendDataPoint[] = [
  { month: '25年10月', yoy: 4.9, mom: 0.36 },
  { month: '25年11月', yoy: 4.8, mom: 0.41 },
  { month: '25年12月', yoy: 5.2, mom: 0.62 },
];

export const keyIndustryData: KeyIndustryDataPoint[] = [
  { name: '集成电路', value: 33.7, category: 'new' },
  { name: '工业机器人', value: 29.2, category: 'new' },
  { name: '电子设备', value: 13.5, category: 'new' },
  { name: '汽车制造', value: 10.1, category: 'new' },
  { name: '高技术制造业', value: 9.4, category: 'new' }, // Benchmark
  { name: '装备制造业', value: 9.2, category: 'new' }, // Benchmark
  { name: '规上工业整体', value: 5.2, category: 'average' }, // Reference
  { name: '医药制造', value: 2.1, category: 'traditional' },
  { name: '黑色金属冶炼', value: -1.8, category: 'traditional' },
  { name: '非金属矿物', value: -4.5, category: 'traditional' },
];

// Slide 6 Data

export const profitBridgeData: ProfitBridgeDataPoint[] = [
  { name: '营收增长', value: 2.1, fill: '#00a9f4' }, // Positive volume
  { name: '成本费用', value: -8.8, fill: '#ef4444' }, // PPI drag
  { name: '实际经营利润', value: -6.7, fill: '#051c2c', isTotal: true }, // The "underlying" metric
  { name: '投资收益错位', value: -6.4, fill: '#94a3b8' }, // The specific callout
  { name: '利润总额', value: -13.1, fill: '#ef4444', isTotal: true }, // The headline number
];

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
  { month: '1月', ppi: -0.2, productionMaterials: -0.3 },
  { month: '2月', ppi: -0.2, productionMaterials: -0.3 },
  { month: '3月', ppi: -0.1, productionMaterials: -0.2 },
  { month: '4月', ppi: -0.2, productionMaterials: -0.3 },
  { month: '5月', ppi: -0.3, productionMaterials: -0.4 },
  { month: '6月', ppi: -0.2, productionMaterials: -0.3 },
  { month: '7月', ppi: -0.2, productionMaterials: -0.3 },
  { month: '8月', ppi: -0.1, productionMaterials: -0.1 },
  { month: '9月', ppi: 0.0, productionMaterials: 0.0 }, // Stabilizing
  { month: '10月', ppi: 0.1, productionMaterials: 0.2 }, // Turning point
  { month: '11月', ppi: 0.1, productionMaterials: 0.1 },
  { month: '12月', ppi: 0.2, productionMaterials: 0.3 }, // Strong finish
];

export const industryPriceData: IndustryPriceDataPoint[] = [
  { industry: '锂离子电池', oct: 0.8, nov: 0.9, dec: 1.0 },
  { industry: '水泥制造', oct: 0.3, nov: 0.4, dec: 0.5 },
  { industry: '光伏设备', oct: 0.6, nov: 0.4, dec: 0.3 },
  { industry: '新能源车', oct: -0.2, nov: -0.1, dec: 0.1 }, // Turnaround
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
    { month: '1月', tier1: -1.0, tier2: -0.8, tier3: -0.7 },
    { month: '2月', tier1: -1.2, tier2: -0.9, tier3: -0.8 },
    { month: '3月', tier1: -1.5, tier2: -1.1, tier3: -0.9 },
    { month: '4月', tier1: -1.8, tier2: -1.3, tier3: -1.0 },
    { month: '5月', tier1: -2.5, tier2: -1.5, tier3: -1.1 },
    { month: '6月', tier1: -3.2, tier2: -1.8, tier3: -1.2 },
    { month: '7月', tier1: -3.8, tier2: -2.0, tier3: -1.4 },
    { month: '8月', tier1: -4.2, tier2: -2.2, tier3: -1.5 },
    { month: '9月', tier1: -4.8, tier2: -2.5, tier3: -1.8 },
    { month: '10月', tier1: -5.2, tier2: -2.8, tier3: -2.0 },
    { month: '11月', tier1: -5.5, tier2: -3.0, tier3: -2.1 },
    { month: '12月', tier1: -5.8, tier2: -3.2, tier3: -2.2 },
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

// Slide 15 Data (Equipment Investment)

export const investmentStructureData: InvestmentStructureDataPoint[] = [
  { category: '设备工器具购置', value: 11.8, fill: '#005c8f', description: '存量更新驱动' },
  { category: '建筑安装工程', value: -8.4, fill: '#ef4444', description: '扩产意愿收缩' },
  { category: '其他费用', value: -2.1, fill: '#94a3b8', description: '' },
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