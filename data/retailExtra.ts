/** Slide16：社零季调环比 vs 住户消费贷款环比增速 */
export interface RetailMomVsLoanDataPoint {
  period: string;
  retailSaMom: number;
  consumerLoanMom: number | null;
}

export const retailMomVsLoanData: RetailMomVsLoanDataPoint[] = [
  { period: '2024-01', retailSaMom: -0.04, consumerLoanMom: null },
  { period: '2024-02', retailSaMom: 0.11, consumerLoanMom: -0.99 },
  { period: '2024-03', retailSaMom: 0.48, consumerLoanMom: 0.45 },
  { period: '2024-04', retailSaMom: -0.08, consumerLoanMom: -0.63 },
  { period: '2024-05', retailSaMom: 0.21, consumerLoanMom: -0.10 },
  { period: '2024-06', retailSaMom: 0.24, consumerLoanMom: 0.34 },
  { period: '2024-07', retailSaMom: 0.74, consumerLoanMom: -0.16 },
  { period: '2024-08', retailSaMom: 0.36, consumerLoanMom: 0.18 },
  { period: '2024-09', retailSaMom: 0.53, consumerLoanMom: 0.35 },
  { period: '2024-10', retailSaMom: 0.50, consumerLoanMom: 0.40 },
  { period: '2024-11', retailSaMom: 0.32, consumerLoanMom: 0.48 },
  { period: '2024-12', retailSaMom: 0.32, consumerLoanMom: 0.33 },
  { period: '2025-01', retailSaMom: 0.32, consumerLoanMom: 0.37 },
  { period: '2025-02', retailSaMom: 0.48, consumerLoanMom: -0.64 },
  { period: '2025-03', retailSaMom: 0.13, consumerLoanMom: 0.65 },
  { period: '2025-04', retailSaMom: 0.15, consumerLoanMom: -0.33 },
  { period: '2025-05', retailSaMom: 0.69, consumerLoanMom: 0.03 },
  { period: '2025-06', retailSaMom: -0.50, consumerLoanMom: 0.30 },
  { period: '2025-07', retailSaMom: 0.04, consumerLoanMom: -0.38 },
  { period: '2025-08', retailSaMom: 0.26, consumerLoanMom: -0.05 },
  { period: '2025-09', retailSaMom: 0.04, consumerLoanMom: 0.12 },
  { period: '2025-10', retailSaMom: 0.15, consumerLoanMom: -0.25 },
  { period: '2025-11', retailSaMom: -0.10, consumerLoanMom: -0.29 },
  { period: '2025-12', retailSaMom: -0.02, consumerLoanMom: -0.41 },
  { period: '2026-01', retailSaMom: 0.26, consumerLoanMom: 0.13 },
  { period: '2026-02', retailSaMom: 0.32, consumerLoanMom: -1.03 },
  { period: '2026-03', retailSaMom: 0.09, consumerLoanMom: 0.06 },
  { period: '2026-04', retailSaMom: -0.29, consumerLoanMom: -0.88 },
  { period: '2026-05', retailSaMom: -0.17, consumerLoanMom: -0.23 },
  { period: '2026-06', retailSaMom: 0.38, consumerLoanMom: 0.12 },
];

// 社零分类当月同比（Slide14）；2023年起自国家统计局月度发布
export const retailMonthlyCategoryData = [
  { period: '2023-03', totalRetail: 10.6, cateringRevenue: 26.3, goodsRetail: 9.1 },
  { period: '2023-04', totalRetail: 18.4, cateringRevenue: 43.8, goodsRetail: 15.9 },
  { period: '2023-05', totalRetail: 12.7, cateringRevenue: 35.1, goodsRetail: 10.5 },
  { period: '2023-06', totalRetail: 3.1, cateringRevenue: 16.1, goodsRetail: 1.7 },
  { period: '2023-07', totalRetail: 2.5, cateringRevenue: 15.8, goodsRetail: 1.0 },
  { period: '2023-08', totalRetail: 4.6, cateringRevenue: 12.4, goodsRetail: 3.7 },
  { period: '2023-09', totalRetail: 5.5, cateringRevenue: 13.8, goodsRetail: 4.6 },
  { period: '2023-10', totalRetail: 7.6, cateringRevenue: 17.1, goodsRetail: 6.5 },
  { period: '2023-11', totalRetail: 10.1, cateringRevenue: 25.8, goodsRetail: 8.0 },
  { period: '2023-12', totalRetail: 7.4, cateringRevenue: 30.0, goodsRetail: 4.8 },
  // 1—2月为国家统计局合并发布
  { period: '2024-02', totalRetail: 5.5, cateringRevenue: 12.5, goodsRetail: 4.6 },
  { period: '2024-03', totalRetail: 3.1, cateringRevenue: 6.9, goodsRetail: 2.7 },
  { period: '2024-04', totalRetail: 2.3, cateringRevenue: 4.4, goodsRetail: 2.0 },
  { period: '2024-05', totalRetail: 3.7, cateringRevenue: 5.0, goodsRetail: 3.6 },
  { period: '2024-06', totalRetail: 2.0, cateringRevenue: 5.4, goodsRetail: 1.5 },
  { period: '2024-07', totalRetail: 2.7, cateringRevenue: 3.0, goodsRetail: 2.7 },
  { period: '2024-08', totalRetail: 2.1, cateringRevenue: 3.3, goodsRetail: 1.9 },
  { period: '2024-09', totalRetail: 3.2, cateringRevenue: 3.1, goodsRetail: 3.3 },
  { period: '2024-10', totalRetail: 4.8, cateringRevenue: 3.2, goodsRetail: 5.0 },
  { period: '2024-11', totalRetail: 3.0, cateringRevenue: 4.0, goodsRetail: 2.8 },
  { period: '2024-12', totalRetail: 3.7, cateringRevenue: 2.7, goodsRetail: 3.9 },
  // 1—2月为国家统计局合并发布
  { period: '2025-02', totalRetail: 4.0, cateringRevenue: 4.3, goodsRetail: 3.9 },
  { period: '2025-03', totalRetail: 5.9, cateringRevenue: 5.6, goodsRetail: 5.9 },
  { period: '2025-04', totalRetail: 5.1, cateringRevenue: 5.2, goodsRetail: 5.1 },
  { period: '2025-05', totalRetail: 6.4, cateringRevenue: 5.9, goodsRetail: 6.5 },
  { period: '2025-06', totalRetail: 4.8, cateringRevenue: 0.9, goodsRetail: 5.3 },
  { period: '2025-07', totalRetail: 3.7, cateringRevenue: 1.1, goodsRetail: 4.0 },
  { period: '2025-08', totalRetail: 3.4, cateringRevenue: 2.1, goodsRetail: 3.6 },
  { period: '2025-09', totalRetail: 3.0, cateringRevenue: 0.9, goodsRetail: 3.3 },
  { period: '2025-10', totalRetail: 2.9, cateringRevenue: 3.8, goodsRetail: 2.8 },
  { period: '2025-11', totalRetail: 1.3, cateringRevenue: 3.2, goodsRetail: 1.0 },
  { period: '2025-12', totalRetail: 0.9, cateringRevenue: 2.2, goodsRetail: 0.7 },
  // 1—2月为国家统计局合并发布
  { period: '2026-02', totalRetail: 2.8, cateringRevenue: 4.8, goodsRetail: 2.5 },
  { period: '2026-03', totalRetail: 1.7, cateringRevenue: 2.9, goodsRetail: 1.5 },
  { period: '2026-04', totalRetail: 0.2, cateringRevenue: 2.2, goodsRetail: -0.1 },
  { period: '2026-05', totalRetail: -0.6, cateringRevenue: 0.6, goodsRetail: -0.7 },
  { period: '2026-06', totalRetail: 1.0, cateringRevenue: 1.2, goodsRetail: 0.9 },
];

export const serviceRetailData = [
  { period: '2024-02', serviceRetail: 12.3 }, { period: '2024-03', serviceRetail: 10.0 },
  { period: '2024-04', serviceRetail: 8.4 },  { period: '2024-05', serviceRetail: 7.9 },
  { period: '2024-06', serviceRetail: 7.5 },  { period: '2024-07', serviceRetail: 7.2 },
  { period: '2024-08', serviceRetail: 6.9 },  { period: '2024-09', serviceRetail: 6.7 },
  { period: '2024-10', serviceRetail: 6.5 },  { period: '2024-11', serviceRetail: 6.4 },
  { period: '2024-12', serviceRetail: 6.2 },  { period: '2025-02', serviceRetail: 4.9 },
  { period: '2025-03', serviceRetail: 5.0 },  { period: '2025-04', serviceRetail: 5.1 },
  { period: '2025-05', serviceRetail: 5.2 },  { period: '2025-06', serviceRetail: 5.3 },
  { period: '2025-07', serviceRetail: 5.2 },  { period: '2025-08', serviceRetail: 5.1 },
  { period: '2025-09', serviceRetail: 5.2 },  { period: '2025-10', serviceRetail: 5.3 },
  { period: '2025-11', serviceRetail: 5.4 },  { period: '2025-12', serviceRetail: 5.5 },
  { period: '2026-02', serviceRetail: 5.6 },  { period: '2026-03', serviceRetail: 5.5 },
  { period: '2026-04', serviceRetail: 5.6 },  { period: '2026-05', serviceRetail: 5.4 },
  { period: '2026-06', serviceRetail: 5.3 },
];

export const springFestivalTravelData = [
  { period: '2024年', trips: 4.74, spending: 6326.87, days: '8天' },
  { period: '2025年', trips: 5.01, spending: 6770.02, days: '8天' },
  { period: '2026年', trips: 5.96, spending: 8034.83, days: '9天' },
];

export const retailCategoryDetailData = [
  { period: '2025-02', total: 4.4,  food: 8.7,  daily: 5.7,  medicine: 2.5, apparel: 3.3,  jewelry: 5.4,  appliances: 10.9,  sports: 25.0, cultureOffice: 21.8, communication: 26.2, automobile: -4.4,  furniture: 11.7, buildingMaterials: 0.1 },
  { period: '2025-03', total: 8.6,  food: 11.8, daily: 8.8,  medicine: 1.4, apparel: 3.6,  jewelry: 10.6, appliances: 35.1,  sports: 26.2, cultureOffice: 21.5, communication: 28.6, automobile: 5.5,   furniture: 29.5, buildingMaterials: -0.1 },
  { period: '2025-04', total: 6.6,  food: 10.9, daily: 7.6,  medicine: 2.6, apparel: 2.2,  jewelry: 25.3, appliances: 38.8,  sports: 23.3, cultureOffice: 33.5, communication: 19.9, automobile: 0.7,   furniture: 26.9, buildingMaterials: 9.7 },
  { period: '2025-05', total: 8.2,  food: 12.4, daily: 8.0,  medicine: 0.3, apparel: 4.0,  jewelry: 21.8, appliances: 53.0,  sports: 28.3, cultureOffice: 30.5, communication: 33.0, automobile: 1.1,   furniture: 25.6, buildingMaterials: 5.8 },
  { period: '2025-06', total: 5.5,  food: 5.4,  daily: 7.8,  medicine: -0.7,apparel: 1.9,  jewelry: 6.1,  appliances: 32.4,  sports: 9.5,  cultureOffice: 24.4, communication: 13.9, automobile: 4.6,   furniture: 28.7, buildingMaterials: 1.0 },
  { period: '2025-07', total: 3.1,  food: 6.9,  daily: 8.2,  medicine: 0.1, apparel: 1.8,  jewelry: 8.2,  appliances: 28.7,  sports: 13.7, cultureOffice: 13.8, communication: 14.9, automobile: -1.5,  furniture: 20.6, buildingMaterials: -0.5 },
  { period: '2025-08', total: 2.6,  food: 4.0,  daily: 7.7,  medicine: 0.9, apparel: 3.1,  jewelry: 16.8, appliances: 14.3,  sports: 16.9, cultureOffice: 14.2, communication: 7.3,  automobile: 0.8,   furniture: 18.6, buildingMaterials: -0.7 },
  { period: '2025-09', total: 2.7,  food: 4.6,  daily: 6.8,  medicine: 1.9, apparel: 4.7,  jewelry: 9.7,  appliances: 3.3,   sports: 11.9, cultureOffice: 6.2,  communication: 16.2, automobile: 1.6,   furniture: 16.2, buildingMaterials: -0.1 },
  { period: '2025-10', total: 1.4,  food: 8.0,  daily: 7.4,  medicine: 3.6, apparel: 6.3,  jewelry: 37.6, appliances: -14.6, sports: 10.1, cultureOffice: 13.5, communication: 23.2, automobile: -6.6,  furniture: 9.6,  buildingMaterials: -8.3 },
  { period: '2025-11', total: -2.2, food: 4.0,  daily: -0.8, medicine: 4.9, apparel: 3.5,  jewelry: 8.5,  appliances: -19.4, sports: 0.4,  cultureOffice: 11.7, communication: 20.6, automobile: -8.3,  furniture: -3.8, buildingMaterials: -17.0 },
  { period: '2025-12', total: -2.01,food: 2.4,  daily: 3.7,  medicine: 1.2, apparel: 0.6,  jewelry: 5.9,  appliances: -18.7, sports: 9.0,  cultureOffice: 9.2,  communication: 20.9, automobile: -5.0,  furniture: -2.2, buildingMaterials: -11.8 },
  { period: '2026-02', total: 2.5,  food: 11.8, daily: 6.6,  medicine: 0.7, apparel: 10.4, jewelry: 13.0, appliances: 3.3,   sports: 4.1,  cultureOffice: 5.8,  communication: 17.8, automobile: -7.3,  furniture: 8.8,  buildingMaterials: -2.2 },
  { period: '2026-03', total: 1.2,  food: 9.0,  daily: 4.6,  medicine: 5.7, apparel: 7.0,  jewelry: 11.7, appliances: -5.0,  sports: -2.0, cultureOffice: 15.0, communication: 27.3, automobile: -11.8, furniture: -8.7, buildingMaterials: -9.0 },
];
