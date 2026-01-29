// 数据统一导出入口
// 将原 data.ts 拆分为多个模块文件，按数据类型分类

// GDP 和产业结构数据 (Slide 1-3)
export {
  gdpTrendData,
  deflatorData,
  industryGrowthData,
  contributionData,
  threeYearContributionData,
  breakdownData,
  industryGdpQuarterlyData,
  demandStructureData,
  threeCarriagesContributionData,
  threeCarriagesData,
} from './gdp';

// PMI 和工业数据 (Slide 4-6)
export {
  pmiTrendData,
  pmiSizeData,
  pmiSizeTrendData,
  industrialTrendData,
  keyIndustryData,
  industryGrowthTableData,
  industryDivergenceTableData,
  profitBridgeData,
  industrialFinancialTableData,
  inventoryCycleData,
} from './pmi';

// PPI 和 CPI 价格数据 (Slide 7, 10)
export {
  ppiTrendData,
  commodityIndexData,
  industryPriceData,
  ppiIndustryMomData,
  cpiTrendData,
  consumptionPropensityData,
  cpiContributionData,
  cpiEightCategoriesData,
} from './price';

// 消费和零售数据 (Slide 8-9, 11)
export {
  retailTrendData,
  urbanRuralData,
  serviceGoodsData,
  tierOneCityRetailData,
  durableGoodsData,
  confidenceData,
  incomeSourceData,
  consumerConfidenceData,
  residentIncomeExpenditureData,
  autoDealerInventoryData,
} from './consumption';

// 固定资产投资数据 (Slide 12-15)
export {
  faiTrendData,
  investmentPillarsData,
  privateStateInvestmentData,
  faiComponentsData,
  realEstateInvestmentData,
  realEstateMarketData,
  infrastructureSectorData,
  infrastructureGrowthTableData,
  investmentStructureData,
  equipmentVsConstructionTrendData,
  equipmentInvestmentTableData,
  highTechInvestmentData,
} from './investment';

// 贸易和出口数据 (Slide 16-18)
export {
  tradeTrendData,
  q4ExportGrowthData,
  monthlyTradeGrowthData,
  tradeSurplusData,
  exportItemGrowthData,
  exportContributionData,
  computingExportGrowthData,
  mechElecExportGrowthData,
  exportGrowthByRegionData,
  exportGrowthByRegionDetailedData,
  exportShare2024Data,
  exportShare2025Data,
  regionalExportTrendData,
  exportShareMigrationData,
} from './trade';

// 财政和税收数据 (Slide 19-21)
export {
  broadFiscalTrendData,
  fiscalLedgerGrowthData,
  taxCategoryData,
  vatVsProductionData,
  taxRevenueDetailData,
  landRevenueData,
  specialBondData,
} from './fiscal';

// 货币和信贷数据 (Slide 22-24)
export {
  moneySupplyData,
  m1RealEstateData,
  m1M2ScissorsTrendData,
  tsfTrendData,
  loanStructureData,
  tsfDecContributionData,
  corpLoanTrendData,
  householdLoanStructureData,
  depositFlowData,
  loanBreakdownData,
} from './monetary';
