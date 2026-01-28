

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
  '2025-03': number;
  '2025-06': number;
  '2025-09': number;
  '2025-12': number;
}

export interface ContributionDataPoint {
  period: string;
  primary: number;
  secondary: number;
  tertiary: number;
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
  exportYoy?: number;
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

export interface CommodityIndexDataPoint {
  month: string;
  steel: number;
  minerals: number;
  nonFerrous: number;
  energy: number;
}

export interface IndustryPriceDataPoint {
  industry: string;
  oct: number;
  nov: number;
  dec: number;
}

export interface PpiIndustryMomDataPoint {
  month: string;
  [key: string]: number | string; // Dynamic industry keys
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
  goods: number; // 限额以上批发零售贸易业商品零售额
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
  adjustedCore?: number;
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
    value: number | null;
}

export interface InvestmentPillarsDataPoint {
    month: string;
    manufacturing: number;
    infrastructure: number;
    realEstate: number;
}

export interface PrivateStateInvestmentDataPoint {
    month: string;
    privateInvestment: number;
    stateOwnedInvestment: number;
}

export interface FaiComponentsDataPoint {
    month: string;
    totalInvestment: number;
    manufacturing: number;
    realEstate: number;
    infrastructure: number;
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

export interface EquipmentVsConstructionTrendDataPoint {
    month: string;
    equipment: number;
    construction: number;
}

export interface ConsumptionPropensityDataPoint {
  period: string;
  value: number;
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

export interface IndustryGdpQuarterlyDataPoint {
  industry: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  category: 'new-quality' | 'strong' | 'moderate' | 'weak';
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

export interface Q4ExportGrowthDataPoint {
    period: string;
    value: number;
    annotation?: string;
}

export interface TradeSurplusDataPoint {
    year: string;
    value: number;
}

export interface MonthlyTradeGrowthDataPoint {
    month: string;
    export: number;
    import: number;
    total: number;
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

export interface ComputingExportGrowthDataPoint {
    month: string;
    server: number;
    semiconductor: number;
}

export interface MechElecExportGrowthDataPoint {
    month: string;
    auto: number;
    ic: number;
    total: number;
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

export interface AutoDealerInventoryDataPoint {
    month: string;
    year2024: number;
    year2025: number;
    yoy: number;
}

export interface DepositFlowDataPoint {
    month: string;
    household: number; // 100M RMB
    nonBank: number;
}

export interface RegionalExportTrendDataPoint {
    month: string;
    total: number;
    us: number;
    asean: number;
    africa: number;
    eu: number;
}

export interface ExportShareMigrationDataPoint {
    name: string;
    share2024: number;
    share2025: number;
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

// ============================================
// DataTable Component Types (Unified Table System)
// ============================================

/**
 * Column definition for DataTable component
 */
export interface ColumnDefinition {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
  headerAlign?: 'left' | 'center' | 'right';
  sticky?: boolean; // For sticky first column
}

/**
 * Color coding result for table cells
 */
export interface CellColorStyle {
  bgColor?: string;
  textColor?: string;
  fontWeight?: 'normal' | 'semibold' | 'bold';
}

/**
 * Function type for custom cell colorizer
 */
export type CellColorizer = (value: unknown, rowIndex: number, colKey: string) => CellColorStyle;

/**
 * Table variant styles
 */
export type TableVariant = 'default' | 'bordered' | 'minimal';

/**
 * Legend item for table footer
 */
export interface TableLegendItem {
  color: string;
  label: string;
}

/**
 * Props for DataTable component
 */
export interface DataTableProps<T = Record<string, unknown>> {
  data: T[];
  columns: ColumnDefinition[];
  variant?: TableVariant;
  minWidth?: string;
  stickyFirstColumn?: boolean;
  cellColorizer?: CellColorizer;
  customHeader?: React.ReactNode; // For complex multi-level headers
}

/**
 * Props for TableContainer component
 */
export interface TableContainerProps {
  title?: string;
  unit?: string;
  source?: string;
  legend?: TableLegendItem[];
  children: React.ReactNode;
}