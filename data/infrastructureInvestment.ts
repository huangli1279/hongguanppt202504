// 基建投资分行业数据（二级分类）

export interface InfrastructureInvestmentDataPoint {
  period: string;
  // 交通运输、仓储和邮政业
  transportTotal: number;       // 合计
  railway: number;              // 铁路运输业
  road: number;                 // 道路运输业
  pipeline: number;             // 管道运输业
  // 水利、环境和公共设施管理业
  waterEnvTotal: number;        // 合计
  ecoProtection: number;        // 生态保护和环境治理业
  publicFacility: number;       // 公共设施管理业
  // 电力、热力、燃气及水的生产和供应业
  electricityTotal: number;     // 合计
  gas: number;                  // 燃气生产和供应业
  waterSupply: number;          // 水的生产和供应业
}

// 固定资产投资分行业累计同比数据
export const infrastructureInvestmentData: InfrastructureInvestmentDataPoint[] = [
  { period: '2025-02', transportTotal: 2.7, railway: 0.2,  road: -3.2, pipeline: 19.7, waterEnvTotal: 8.5,  ecoProtection: 8.5,   publicFacility: 2.6,  electricityTotal: 25.4, gas: 16.6, waterSupply: 11.4 },
  { period: '2025-03', transportTotal: 3.8, railway: 0.5,  road: -0.2, pipeline: 69.2, waterEnvTotal: 9.8,  ecoProtection: 4.1,   publicFacility: 4.9,  electricityTotal: 26.0, gas: 15.5, waterSupply: 15.1 },
  { period: '2025-04', transportTotal: 3.9,  railway: 1.6,  road: -0.9, pipeline: 62.1, waterEnvTotal: 8.6,  ecoProtection: 0.3,   publicFacility: 4.9,  electricityTotal: 25.5, gas: 15.5, waterSupply: 11.5 },
  { period: '2025-05', transportTotal: 4.0,  railway: 2.3,  road: -0.4, pipeline: 38.4, waterEnvTotal: 7.2,  ecoProtection: 0.5,   publicFacility: 3.8,  electricityTotal: 25.4, gas: 12.5, waterSupply: 10.7 },
  { period: '2025-06', transportTotal: 5.6,  railway: 4.2,  road: 0.6,  pipeline: 22.9, waterEnvTotal: 3.5,  ecoProtection: -4.8,  publicFacility: 1.7,  electricityTotal: 22.8, gas: 11.8, waterSupply: 7.7 },
  { period: '2025-07', transportTotal: 3.9,  railway: 5.9,  road: -2.0, pipeline: 14.0, waterEnvTotal: 2.0,  ecoProtection: -5.4,  publicFacility: 0.5,  electricityTotal: 21.5, gas: 8.8,  waterSupply: 7.4 },
  { period: '2025-08', transportTotal: 2.7,  railway: 4.5,  road: -3.3, pipeline: 14.8, waterEnvTotal: -0.2, ecoProtection: -6.7,  publicFacility: -1.1, electricityTotal: 18.8, gas: 8.7,  waterSupply: 6.5 },
  { period: '2025-09', transportTotal: 1.6,  railway: 4.2,  road: -2.7, pipeline: 14.9, waterEnvTotal: -2.4, ecoProtection: -8.4,  publicFacility: -2.8, electricityTotal: 15.3, gas: 7.3,  waterSupply: 3.4 },
  { period: '2025-10', transportTotal: 0.1,  railway: 3.0,  road: -4.3, pipeline: 13.8, waterEnvTotal: -4.1, ecoProtection: -10.5, publicFacility: -4.4, electricityTotal: 12.5, gas: 8.8,  waterSupply: 1.7 },
  { period: '2025-11', transportTotal: -0.1,  railway: 2.7,  road: -4.7, pipeline: 16.8, waterEnvTotal: -6.3, ecoProtection: -12.4, publicFacility: -6.2, electricityTotal: 10.7, gas: 9.4,  waterSupply: 0.8 },
  { period: '2025-12', transportTotal: -1.2,  railway: -1.2, road: -6.0, pipeline: 36.0, waterEnvTotal: -8.4, ecoProtection: -13.5, publicFacility: -8.2, electricityTotal: 9.1,  gas: 4.8,  waterSupply: -1.9 },
];
