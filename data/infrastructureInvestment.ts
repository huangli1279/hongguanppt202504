// 基建投资分行业数据（二级分类）

export interface InfrastructureInvestmentDataPoint {
  period: string;
  infrastructure: number;      // 基础设施建设投资
  // 交通运输、仓储和邮政业
  transportTotal: number;       // 合计
  railway: number;              // 铁路运输业
  road: number;                 // 道路运输业
  pipeline: number;             // 管道运输业
  loadingStorage: number;       // 装卸搬运和仓储业
  aviation: number;             // 航空运输业
  waterTransport: number;       // 水上运输业
  // 水利、环境和公共设施管理业
  waterEnvTotal: number;        // 合计
  environmentManagement: number;// 环境管理业
  publicFacility: number;       // 公共设施管理业
  waterConservancy: number;     // 水利管理业
  // 电力、热力、燃气及水的生产和供应业
  electricityTotal: number;     // 合计
  powerHeat: number;            // 电力、热力生产和供应业
  gas: number;                  // 燃气生产和供应业
  waterSupply: number;          // 水的生产和供应业
  // 信息传输、软件和信息技术服务业
  informationTotal: number;     // 合计
  telecom: number;              // 电信、广播电视和卫星传输服务
}

// 固定资产投资分行业累计同比数据
export const infrastructureInvestmentData: InfrastructureInvestmentDataPoint[] = [
  { period: '2025-02', infrastructure: 9.94, transportTotal: 2.7, railway: 0.2, road: -3.2, pipeline: 19.7, loadingStorage: 7.5, aviation: 13.4, waterTransport: 36.9, waterEnvTotal: 8.5, publicFacility: 2.6, environmentManagement: 8.5, waterConservancy: 39.1, electricityTotal: 25.4, powerHeat: 29.3, waterSupply: 11.4, gas: 16.6, informationTotal: 1.7, telecom: 2.7 },
  { period: '2025-03', infrastructure: 11.5, transportTotal: 3.8, railway: 0.5, road: -0.2, pipeline: 69.2, loadingStorage: 8.3, aviation: 0.0, waterTransport: 25.9, waterEnvTotal: 9.8, publicFacility: 4.9, environmentManagement: 4.1, waterConservancy: 36.8, electricityTotal: 26.0, powerHeat: 28.9, waterSupply: 15.1, gas: 15.5, informationTotal: 10.1, telecom: -17.2 },
  { period: '2025-04', infrastructure: 10.85, transportTotal: 3.9, railway: 1.6, road: -0.9, pipeline: 62.1, loadingStorage: 7.7, aviation: 13.9, waterTransport: 26.9, waterEnvTotal: 8.6, publicFacility: 4.9, environmentManagement: 0.3, waterConservancy: 30.7, electricityTotal: 25.5, powerHeat: 29.1, waterSupply: 11.5, gas: 15.5, informationTotal: 9.5, telecom: -12.7 },
  { period: '2025-05', infrastructure: 10.42, transportTotal: 4.0, railway: 2.3, road: -0.4, pipeline: 38.4, loadingStorage: 8.2, aviation: 4.7, waterTransport: 27.2, waterEnvTotal: 7.2, publicFacility: 3.8, environmentManagement: 0.5, waterConservancy: 26.6, electricityTotal: 25.4, powerHeat: 29.2, waterSupply: 10.7, gas: 12.5, informationTotal: 4.1, telecom: -12.9 },
  { period: '2025-06', infrastructure: 8.9, transportTotal: 5.6, railway: 4.2, road: 0.6, pipeline: 22.9, loadingStorage: 11.6, aviation: 4.0, waterTransport: 21.8, waterEnvTotal: 3.5, publicFacility: 1.7, environmentManagement: -4.8, waterConservancy: 15.4, electricityTotal: 22.8, powerHeat: 26.3, waterSupply: 7.7, gas: 11.8, informationTotal: 3.0, telecom: -7.0 },
  { period: '2025-07', infrastructure: 7.29, transportTotal: 3.9, railway: 5.9, road: -2.0, pipeline: 14.0, loadingStorage: 10.0, aviation: 2.9, waterTransport: 18.9, waterEnvTotal: 2.0, publicFacility: 0.5, environmentManagement: -5.4, waterConservancy: 12.6, electricityTotal: 21.5, powerHeat: 24.9, waterSupply: 7.4, gas: 8.8, informationTotal: 2.8, telecom: -6.3 },
  { period: '2025-08', infrastructure: 5.42, transportTotal: 2.7, railway: 4.5, road: -3.3, pipeline: 14.8, loadingStorage: 9.5, aviation: 1.0, waterTransport: 15.9, waterEnvTotal: -0.2, publicFacility: -1.1, environmentManagement: -6.7, waterConservancy: 7.4, electricityTotal: 18.8, powerHeat: 21.6, waterSupply: 6.5, gas: 8.7, informationTotal: 0.9, telecom: -4.6 },
  { period: '2025-09', infrastructure: 3.34, transportTotal: 1.6, railway: 4.2, road: -2.7, pipeline: 14.9, loadingStorage: 4.9, aviation: 0.2, waterTransport: 12.8, waterEnvTotal: -2.4, publicFacility: -2.8, environmentManagement: -8.4, waterConservancy: 3.0, electricityTotal: 15.3, powerHeat: 17.9, waterSupply: 3.4, gas: 7.3, informationTotal: 1.5, telecom: -5.0 },
  { period: '2025-10', infrastructure: 1.51, transportTotal: 0.1, railway: 3.0, road: -4.3, pipeline: 13.8, loadingStorage: 3.9, aviation: -1.1, waterTransport: 9.4, waterEnvTotal: -4.1, publicFacility: -4.4, environmentManagement: -10.5, waterConservancy: 0.7, electricityTotal: 12.5, powerHeat: 14.6, waterSupply: 1.7, gas: 8.8, informationTotal: 1.2, telecom: -4.4 },
  { period: '2025-11', infrastructure: 0.13, transportTotal: -0.1, railway: 2.7, road: -4.7, pipeline: 16.8, loadingStorage: 4.1, aviation: -2.1, waterTransport: 8.9, waterEnvTotal: -6.3, publicFacility: -6.2, environmentManagement: -12.4, waterConservancy: -3.2, electricityTotal: 10.7, powerHeat: 12.5, waterSupply: 0.8, gas: 9.4, informationTotal: 9.8, telecom: -5.1 },
  { period: '2025-12', infrastructure: -1.48, transportTotal: -1.2, railway: -1.2, road: -6.0, pipeline: 36.0, loadingStorage: 4.1, aviation: -5.3, waterTransport: 7.7, waterEnvTotal: -8.4, publicFacility: -8.2, environmentManagement: -13.5, waterConservancy: -6.3, electricityTotal: 9.1, powerHeat: 11.1, waterSupply: -1.9, gas: 4.8, informationTotal: 8.8, telecom: -5.6 },
  { period: '2026-02', infrastructure: 11.4, transportTotal: 9.1, railway: 28.7, road: -0.6, pipeline: 145.2, loadingStorage: 11.4, aviation: 31.1, waterTransport: 17.9, waterEnvTotal: 8.3, publicFacility: 11.6, environmentManagement: 11.7, waterConservancy: -4.4, electricityTotal: 13.1, powerHeat: 13.1, waterSupply: 11.1, gas: 20.0, informationTotal: 3.1, telecom: 16.0 },
  { period: '2026-03', infrastructure: 8.9, transportTotal: 16.3, railway: 2.9, road: 2.9, pipeline: 99.5, loadingStorage: 30.3, aviation: 43.3, waterTransport: 34.1, waterEnvTotal: 3.6, publicFacility: 5.7, environmentManagement: 5.7, waterConservancy: -5.5, electricityTotal: 9.0, powerHeat: 9.2, waterSupply: 8.4, gas: 7.6, informationTotal: -6.1, telecom: 29.6 },
];
