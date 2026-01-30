// PPI 及大宗商品价格数据

export interface PpiDataPoint {
  period: string;
  ppiYoy: number;
}

// PPI 分行业环比数据点
export interface PpiIndustryMomDataPoint {
  period: string;
  lithiumBattery: number | null;       // 锂离子电池制造
  photovoltaic: number | null;         // 光伏设备及元器件制造
  computerComm: number | null;         // 计算机、通信和其他电子设备制造业
  coalMining: number | null;           // 煤炭开采和洗选业
  oilGas: number | null;               // 石油和天然气开采业
  ferrousMining: number | null;        // 黑色金属矿采选业
  nonFerrousMining: number | null;     // 有色金属矿采选业
  nonFerrousSmelting: number | null;   // 有色金属冶炼和压延加工业
  ferrousSmelting: number | null;      // 黑色金属冶炼和压延加工业
  chemicalFiber: number | null;        // 化学纤维制造业
  nonMetalMineral: number | null;      // 非金属矿物制品业
  generalEquipment: number | null;     // 通用设备制造业
  automobile: number | null;           // 汽车制造业
  electricalMachinery: number | null;  // 电气机械和器材制造业
}

// PPI 分行业环比数据 (2025年)
export const ppiIndustryMomData: PpiIndustryMomDataPoint[] = [
  { period: '2025-01', lithiumBattery: -0.6, photovoltaic: 0.5, computerComm: -0.3, coalMining: -2.2, oilGas: 4.5, ferrousMining: -0.4, nonFerrousMining: 0.4, nonFerrousSmelting: -0.4, ferrousSmelting: -0.9, chemicalFiber: -0.4, nonMetalMineral: -0.6, generalEquipment: -0.2, automobile: 0.5, electricalMachinery: -0.2 },
  { period: '2025-02', lithiumBattery: null, photovoltaic: null, computerComm: 0, coalMining: -3.3, oilGas: 0.3, ferrousMining: 0.9, nonFerrousMining: 1.8, nonFerrousSmelting: 0.3, ferrousSmelting: -0.2, chemicalFiber: 0.1, nonMetalMineral: -0.9, generalEquipment: -0.3, automobile: -0.1, electricalMachinery: -0.1 },
  { period: '2025-03', lithiumBattery: null, photovoltaic: null, computerComm: -0.7, coalMining: -4.3, oilGas: -4.4, ferrousMining: 0.1, nonFerrousMining: 0.4, nonFerrousSmelting: 0.5, ferrousSmelting: -0.5, chemicalFiber: -0.6, nonMetalMineral: -0.5, generalEquipment: -0.1, automobile: -0.4, electricalMachinery: -0.1 },
  { period: '2025-04', lithiumBattery: null, photovoltaic: null, computerComm: -0.2, coalMining: -3.3, oilGas: -3.1, ferrousMining: -0.9, nonFerrousMining: 1.5, nonFerrousSmelting: 0.3, ferrousSmelting: -1.0, chemicalFiber: -2.0, nonMetalMineral: 0, generalEquipment: -0.2, automobile: -0.5, electricalMachinery: -0.1 },
  { period: '2025-05', lithiumBattery: null, photovoltaic: null, computerComm: 0.1, coalMining: -3.0, oilGas: -5.6, ferrousMining: -0.9, nonFerrousMining: 0.8, nonFerrousSmelting: -0.1, ferrousSmelting: -1.0, chemicalFiber: -1.3, nonMetalMineral: -1.0, generalEquipment: -0.2, automobile: 0, electricalMachinery: -0.2 },
  { period: '2025-06', lithiumBattery: null, photovoltaic: null, computerComm: -0.4, coalMining: -3.4, oilGas: 2.6, ferrousMining: -2.0, nonFerrousMining: 1.3, nonFerrousSmelting: 0.2, ferrousSmelting: -1.8, chemicalFiber: 0.1, nonMetalMineral: -1.4, generalEquipment: -0.2, automobile: 0.2, electricalMachinery: -0.2 },
  { period: '2025-07', lithiumBattery: null, photovoltaic: null, computerComm: -0.4, coalMining: -1.5, oilGas: 3.0, ferrousMining: -1.1, nonFerrousMining: 0.7, nonFerrousSmelting: 0.8, ferrousSmelting: -0.3, chemicalFiber: -0.7, nonMetalMineral: -1.4, generalEquipment: -0.2, automobile: -0.3, electricalMachinery: -0.2 },
  { period: '2025-08', lithiumBattery: null, photovoltaic: -0.2, computerComm: -0.2, coalMining: 2.8, oilGas: -1.1, ferrousMining: 2.1, nonFerrousMining: 0.8, nonFerrousSmelting: 0.2, ferrousSmelting: 1.9, chemicalFiber: -0.6, nonMetalMineral: -1.0, generalEquipment: -0.1, automobile: -0.3, electricalMachinery: -0.1 },
  { period: '2025-09', lithiumBattery: null, photovoltaic: 0.8, computerComm: -0.2, coalMining: 2.5, oilGas: -2.0, ferrousMining: 2.6, nonFerrousMining: 2.5, nonFerrousSmelting: 1.2, ferrousSmelting: 0.2, chemicalFiber: -0.2, nonMetalMineral: -0.4, generalEquipment: -0.1, automobile: -0.5, electricalMachinery: -0.1 },
  { period: '2025-10', lithiumBattery: 0.2, photovoltaic: 0.6, computerComm: 0.1, coalMining: 1.6, oilGas: -2.3, ferrousMining: 0.9, nonFerrousMining: 5.3, nonFerrousSmelting: 2.4, ferrousSmelting: -0.7, chemicalFiber: -0.7, nonMetalMineral: 0.1, generalEquipment: -0.1, automobile: -0.2, electricalMachinery: 0 },
  { period: '2025-11', lithiumBattery: null, photovoltaic: null, computerComm: 0.1, coalMining: 4.1, oilGas: -2.4, ferrousMining: 0.6, nonFerrousMining: 2.6, nonFerrousSmelting: 2.1, ferrousSmelting: -0.5, chemicalFiber: -0.3, nonMetalMineral: 0, generalEquipment: -0.1, automobile: -0.1, electricalMachinery: 0.3 },
  { period: '2025-12', lithiumBattery: 1.0, photovoltaic: null, computerComm: -0.1, coalMining: 1.3, oilGas: -1.3, ferrousMining: 0, nonFerrousMining: 3.7, nonFerrousSmelting: 2.8, ferrousSmelting: -0.1, chemicalFiber: -0.4, nonMetalMineral: 0.1, generalEquipment: 0, automobile: -0.1, electricalMachinery: 0.4 },
];

export interface CommodityPriceDataPoint {
  period: string;
  energy: number;      // 能源类
  nonFerrous: number;  // 有色类
  mineral: number;     // 矿产类
  steel: number;       // 钢铁类
}

// PPI 同比数据
export const ppiYoyData: PpiDataPoint[] = [
  { period: '2024-01', ppiYoy: -2.50 },
  { period: '2024-02', ppiYoy: -2.70 },
  { period: '2024-03', ppiYoy: -2.80 },
  { period: '2024-04', ppiYoy: -2.50 },
  { period: '2024-05', ppiYoy: -1.40 },
  { period: '2024-06', ppiYoy: -0.80 },
  { period: '2024-07', ppiYoy: -0.80 },
  { period: '2024-08', ppiYoy: -1.80 },
  { period: '2024-09', ppiYoy: -2.80 },
  { period: '2024-10', ppiYoy: -2.90 },
  { period: '2024-11', ppiYoy: -2.50 },
  { period: '2024-12', ppiYoy: -2.30 },
  { period: '2025-01', ppiYoy: -2.30 },
  { period: '2025-02', ppiYoy: -2.20 },
  { period: '2025-03', ppiYoy: -2.50 },
  { period: '2025-04', ppiYoy: -2.70 },
  { period: '2025-05', ppiYoy: -3.30 },
  { period: '2025-06', ppiYoy: -3.60 },
  { period: '2025-07', ppiYoy: -3.60 },
  { period: '2025-08', ppiYoy: -2.90 },
  { period: '2025-09', ppiYoy: -2.30 },
  { period: '2025-10', ppiYoy: -2.10 },
  { period: '2025-11', ppiYoy: -2.20 },
  { period: '2025-12', ppiYoy: -1.90 },
];

// 大宗商品价格指数数据
export const commodityPriceData: CommodityPriceDataPoint[] = [
  { period: '2024-01', energy: 154.68, nonFerrous: 104.54, mineral: 186.53, steel: 116.82 },
  { period: '2024-02', energy: 157.75, nonFerrous: 103.82, mineral: 183.66, steel: 116.26 },
  { period: '2024-03', energy: 160.18, nonFerrous: 106.13, mineral: 174.53, steel: 112.20 },
  { period: '2024-04', energy: 163.85, nonFerrous: 112.36, mineral: 169.45, steel: 109.63 },
  { period: '2024-05', energy: 160.12, nonFerrous: 119.34, mineral: 180.04, steel: 110.88 },
  { period: '2024-06', energy: 159.34, nonFerrous: 117.94, mineral: 178.01, steel: 108.05 },
  { period: '2024-07', energy: 161.41, nonFerrous: 115.39, mineral: 181.60, steel: 105.03 },
  { period: '2024-08', energy: 154.95, nonFerrous: 110.24, mineral: 176.51, steel: 97.14 },
  { period: '2024-09', energy: 146.85, nonFerrous: 111.87, mineral: 170.44, steel: 94.59 },
  { period: '2024-10', energy: 150.51, nonFerrous: 116.46, mineral: 172.81, steel: 105.23 },
  { period: '2024-11', energy: 148.27, nonFerrous: 115.53, mineral: 174.00, steel: 101.53 },
  { period: '2024-12', energy: 145.73, nonFerrous: 114.51, mineral: 176.07, steel: 101.30 },
  { period: '2025-01', energy: 149.57, nonFerrous: 113.23, mineral: 172.04, steel: 99.59 },
  { period: '2025-02', energy: 146.25, nonFerrous: 115.19, mineral: 170.49, steel: 99.51 },
  { period: '2025-03', energy: 138.47, nonFerrous: 117.99, mineral: 169.87, steel: 98.11 },
  { period: '2025-04', energy: 130.39, nonFerrous: 114.17, mineral: 165.69, steel: 96.65 },
  { period: '2025-05', energy: 126.12, nonFerrous: 114.89, mineral: 164.12, steel: 95.73 },
  { period: '2025-06', energy: 129.68, nonFerrous: 115.69, mineral: 159.93, steel: 93.39 },
  { period: '2025-07', energy: 128.03, nonFerrous: 116.58, mineral: 158.54, steel: 95.38 },
  { period: '2025-08', energy: 129.17, nonFerrous: 116.10, mineral: 166.89, steel: 98.29 },
  { period: '2025-09', energy: 130.88, nonFerrous: 116.95, mineral: 169.37, steel: 96.58 },
  { period: '2025-10', energy: 127.25, nonFerrous: 120.98, mineral: 172.50, steel: 95.28 },
  { period: '2025-11', energy: 127.60, nonFerrous: 123.00, mineral: 174.60, steel: 94.80 },
  { period: '2025-12', energy: 124.50, nonFerrous: 127.60, mineral: 173.40, steel: 95.40 },
];
