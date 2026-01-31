// 基建投资分行业数据

export interface InfrastructureInvestmentDataPoint {
  period: number;
  electricityGasWater: number;      // 电力、热力、燃气及水生产和供应业
  transportation: number;           // 交通运输、仓储和邮政业
  infoTech: number;                 // 信息传输、软件和信息技术服务业
  waterEnvironment: number;         // 水利、环境和公共设施管理业
  ferrousMetal: number;             // 黑色金属冶炼和压延加工业
  nonFerrousMetal: number;          // 有色金属冶炼和压延加工业
  nonMetalMineral: number;          // 非金属矿物制品业
  generalEquipment: number;         // 通用设备制造业
  electricalMachinery: number;      // 电气机械和器材制造业
}

// 固定资产投资分行业累计同比数据
export const infrastructureInvestmentData: InfrastructureInvestmentDataPoint[] = [
  { period: 20250228, electricityGasWater: 25.4, transportation: 2.7, infoTech: 11.7, waterEnvironment: 8.5, ferrousMetal: 5.7, nonFerrousMetal: 16.1, nonMetalMineral: 0.2, generalEquipment: 21.6, electricalMachinery: -8.6 },
  { period: 20250331, electricityGasWater: 26.0, transportation: 3.8, infoTech: 10.1, waterEnvironment: 9.8, ferrousMetal: 5.5, nonFerrousMetal: 17.9, nonMetalMineral: -1.8, generalEquipment: 17.2, electricalMachinery: -7.4 },
  { period: 20250430, electricityGasWater: 25.5, transportation: 3.9, infoTech: 9.5, waterEnvironment: 8.6, ferrousMetal: 2.0, nonFerrousMetal: 16.4, nonMetalMineral: -2.9, generalEquipment: 17.9, electricalMachinery: -7.5 },
  { period: 20250531, electricityGasWater: 25.4, transportation: 4.0, infoTech: 14.1, waterEnvironment: 7.2, ferrousMetal: -1.6, nonFerrousMetal: 14.3, nonMetalMineral: -3.6, generalEquipment: 17.5, electricalMachinery: -8.6 },
  { period: 20250630, electricityGasWater: 22.8, transportation: 5.6, infoTech: 13.0, waterEnvironment: 3.5, ferrousMetal: -0.6, nonFerrousMetal: 9.1, nonMetalMineral: -5.1, generalEquipment: 16.6, electricalMachinery: -7.8 },
  { period: 20250731, electricityGasWater: 21.5, transportation: 3.9, infoTech: 12.8, waterEnvironment: 2.0, ferrousMetal: -4.1, nonFerrousMetal: 4.9, nonMetalMineral: -4.8, generalEquipment: 14.8, electricalMachinery: -8.7 },
  { period: 20250831, electricityGasWater: 18.8, transportation: 2.7, infoTech: 10.9, waterEnvironment: -0.2, ferrousMetal: -3.3, nonFerrousMetal: 2.2, nonMetalMineral: -5.8, generalEquipment: 13.7, electricalMachinery: -8.8 },
  { period: 20250930, electricityGasWater: 15.3, transportation: 1.6, infoTech: 11.5, waterEnvironment: -2.4, ferrousMetal: -2.0, nonFerrousMetal: 0.4, nonMetalMineral: -6.6, generalEquipment: 11.8, electricalMachinery: -9.5 },
  { period: 20251031, electricityGasWater: 12.5, transportation: 0.1, infoTech: 11.2, waterEnvironment: -4.1, ferrousMetal: -2.0, nonFerrousMetal: -1.5, nonMetalMineral: -8.5, generalEquipment: 9.5, electricalMachinery: -9.4 },
  { period: 20251130, electricityGasWater: 10.7, transportation: -0.1, infoTech: 9.8, waterEnvironment: -6.3, ferrousMetal: -1.3, nonFerrousMetal: -2.2, nonMetalMineral: -9.5, generalEquipment: 8.9, electricalMachinery: -9.5 },
  { period: 20251231, electricityGasWater: 9.1, transportation: -1.2, infoTech: 8.8, waterEnvironment: -8.4, ferrousMetal: -2.6, nonFerrousMetal: -4.2, nonMetalMineral: -10.2, generalEquipment: 6.2, electricalMachinery: -10.3 },
];
