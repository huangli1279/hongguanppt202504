

export interface GdpDataPoint {
  period: string;
  value: number;
  nominal?: number;
  isForecast?: boolean;
}

export interface DeflatorDataPoint {
  period: string;
  primary: number;
  secondary: number;
  tertiary: number;
}

export interface IndustryGrowthData {
  name: string;
  value: number;
  fill: string;
}

export interface ContributionDataPoint {
  period: string;
  primary: number;
  secondary: number;
  tertiary: number;
  total: number;
}

export interface BreakdownDataPoint {
  name: string;
  value: number;
  type: 'growth' | 'lag';
}

export interface DemandStructureData {
  name: string;
  value: number;
  fill: string;
}

export interface ThreeCarriagesContributionDataPoint {
  period: string;
  consumption: number;
  investment: number;
  netExport: number;
}

export interface GrowthIndicatorData {
  name: string;
  value: number;
  category: string;
}

export interface PmiTrendDataPoint {
  month: string;
  pmi: number;
  production: number;
  newOrders: number;
}

export interface PmiSizeDataPoint {
  name: string;
  value: number;
  fill: string;
}

export interface PmiSizeTrendDataPoint {
  month: string;
  large: number;
  medium: number;
  small: number;
}

export interface IndustrialTrendDataPoint {
  month: string;
  yoy: number;
  mom?: number;
}

export interface KeyIndustryDataPoint {
  name: string;
  value: number;
  category: 'new' | 'traditional' | 'average';
}

export interface ProfitBridgeDataPoint {
  name: string;
  value: number;
  fill: string;
  isTotal?: boolean;
}

export interface InventoryCycleDataPoint {
  month: string;
  nominal: number;
  real: number;
  days: number;
}

export interface PpiTrendDataPoint {
  month: string;
  ppi: number;
  productionMaterials: number;
  livingMaterials: number;
}

export interface IndustryPriceDataPoint {
  industry: string;
  oct: number;
  nov: number;
  dec: number;
}

export interface RetailTrendDataPoint {
  month: string;
  value: number;
  highlight?: boolean;
}

export interface UrbanRuralDataPoint {
  month: string;
  urban: number;
  rural: number;
}

export interface ServiceGoodsDataPoint {
  month: string;
  service: number;
  goods: number;
}

export interface DurableGoodsDataPoint {
  category: string;
  nov: number;
  dec: number;
}

export interface CpiTrendDataPoint {
  month: string;
  headline: number;
  core: number;
  adjustedCore: number;
}

export interface CpiContributionDataPoint {
  category: string;
  value: number;
  isPositive: boolean;
  highlight?: boolean;
}

export interface ConfidenceDataPoint {
    month: string;
    employment: number;
    income: number;
}

export interface IncomeSourceDataPoint {
    source: string;
    value: number;
    highlight?: boolean;
}

export interface FaiTrendDataPoint {
    month: string;
    value: number;
}

export interface InvestmentPillarsDataPoint {
    month: string;
    manufacturing: number;
    infrastructure: number;
    realEstate: number;
}

export interface RealEstateInvestmentDataPoint {
    month: string;
    investment: number;
    newStarts: number;
}

export interface RealEstatePriceDataPoint {
    month: string;
    tier1: number;
    tier2: number;
    tier3: number;
}

export interface InfrastructureSectorDataPoint {
    sector: string;
    value: number;
    category: 'energy' | 'transport' | 'municipal' | 'average';
}

export interface InvestmentStructureDataPoint {
    category: string;
    value: number;
    fill: string;
    description?: string;
}

export interface IndustryGrowthTableData {
  title: string;
  source: string;
  unit: string;
  timeSeries: string[];
  industryData: {
    [key: string]: (number | null)[];
  };
}

export interface HighTechInvestmentDataPoint {
    sector: string;
    value: number;
    category: 'high-tech' | 'average' | 'traditional';
}

export interface TradeTrendDataPoint {
    month: string;
    export: number;
    import: number;
}

export interface TradeSurplusDataPoint {
    year: string;
    value: number;
}

export interface ExportItemGrowthDataPoint {
    name: string;
    value: number;
    category: 'tech' | 'consumer' | 'traditional';
}

export interface ExportContributionDataPoint {
    name: string;
    value: number;
    fill: string;
}

export interface ExportGrowthByRegionDataPoint {
    region: string;
    value: number;
    category: 'EM' | 'EU' | 'US';
}

export interface ExportShareDataPoint {
    name: string;
    value: number;
    fill: string;
}

export interface BroadFiscalTrendDataPoint {
    month: string;
    income: number;
    expenditure: number;
}

export interface FiscalLedgerGrowthDataPoint {
    month: string;
    ledger1: number;
    ledger2: number;
}

export interface TaxCategoryDataPoint {
    category: string;
    value: number;
    highlight?: boolean;
}

export interface VatVsProductionDataPoint {
    month: string;
    industrial: number;
    vat: number;
}

export interface LandRevenueDataPoint {
    month: string;
    value: number;
}

export interface SpecialBondDataPoint {
    month: string;
    issuance: number;
    progress: number;
}

export interface MoneySupplyDataPoint {
    month: string;
    m1: number;
    m2: number;
    gap: number;
}

export interface M1RealEstateDataPoint {
    month: string;
    m1: number;
    realEstateSales: number;
}

export interface TsfTrendDataPoint {
    month: string;
    growth: number;
    newTsf: number; // trillion RMB
}

export interface LoanStructureDataPoint {
    sector: string;
    value: number; // billion RMB increment
    type: 'corporate' | 'household' | 'government';
    fill: string;
}

export interface TsfContributionDataPoint {
    category: string;
    value: number; // billion RMB (YoY change)
    isTotal?: boolean;
    fill: string;
}

export interface CorpLoanTrendDataPoint {
    month: string;
    value: number; // billion RMB (YoY change)
    isPositive: boolean;
}

export interface HouseholdLoanStructureDataPoint {
    year: string;
    shortTerm: number; // 100M RMB
    mediumLongTerm: number;
    total: number;
}

export interface DepositFlowDataPoint {
    month: string;
    household: number; // 100M RMB
    nonBank: number;
}

export interface IndustrialFinancialTableData {
    title: string;
    source: string;
    unit: string;
    months: string[];
    revenue: number[];
    cost: number[];
    operatingProfit: number[];
    totalProfit: number[];
    investmentIncome: number[];
}