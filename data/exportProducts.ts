// 出口产品结构数据

export interface ExportProductDataPoint {
  period: string;
  agriculture: number | null;      // 农产品累计同比
  integratedCircuit: number | null; // 集成电路累计同比
  electromechanical: number | null; // 机电产品累计同比
  highTech: number | null;          // 高技术产品累计同比
  clothing: number | null;          // 服装及衣着附件累计同比
}

// 第一张折线图数据：农产品、集成电路、机电产品、高技术产品、服装
export const exportProductTrendData: ExportProductDataPoint[] = [
  { period: '2024-02', agriculture: 2.7, integratedCircuit: 8.5, electromechanical: 24.3, highTech: 0.2, clothing: 13.1 },
  { period: '2024-03', agriculture: -1.2, integratedCircuit: 3.3, electromechanical: 19.7, highTech: -0.2, clothing: 1.4 },
  { period: '2024-04', agriculture: -0.9, integratedCircuit: 3.4, electromechanical: 19.1, highTech: 0.9, clothing: 0.0 },
  { period: '2024-05', agriculture: 0.4, integratedCircuit: 4.3, electromechanical: 21.2, highTech: 2.4, clothing: 0.2 },
  { period: '2024-06', agriculture: 2.0, integratedCircuit: 4.9, electromechanical: 21.6, highTech: 3.1, clothing: 0.0 },
  { period: '2024-07', agriculture: 2.0, integratedCircuit: 5.6, electromechanical: 22.5, highTech: 4.3, clothing: -0.8 },
  { period: '2024-08', agriculture: 2.2, integratedCircuit: 6.5, electromechanical: 22.0, highTech: 4.9, clothing: -1.0 },
  { period: '2024-09', agriculture: 1.9, integratedCircuit: 6.1, electromechanical: 19.8, highTech: 4.2, clothing: -1.6 },
  { period: '2024-10', agriculture: 2.8, integratedCircuit: 6.9, electromechanical: 19.6, highTech: 4.7, clothing: -0.7 },
  { period: '2024-11', agriculture: 3.3, integratedCircuit: 7.0, electromechanical: 18.8, highTech: 4.9, clothing: -0.2 },
  { period: '2024-12', agriculture: 4.1, integratedCircuit: 7.5, electromechanical: 17.4, highTech: 4.8, clothing: 0.3 },
  { period: '2025-02', agriculture: 3.0, integratedCircuit: 4.2, electromechanical: 11.9, highTech: 5.4, clothing: -6.9 },
  { period: '2025-03', agriculture: 5.7, integratedCircuit: 7.6, electromechanical: 10.8, highTech: 6.3, clothing: -1.9 },
  { period: '2025-04', agriculture: 5.0, integratedCircuit: 8.3, electromechanical: 13.5, highTech: 6.4, clothing: -1.5 },
  { period: '2025-05', agriculture: 3.5, integratedCircuit: 8.1, electromechanical: 17.5, highTech: 6.1, clothing: -0.5 },
  { period: '2025-06', agriculture: 1.8, integratedCircuit: 8.2, electromechanical: 18.9, highTech: 6.4, clothing: -0.2 },
  { period: '2025-07', agriculture: 1.8, integratedCircuit: 8.1, electromechanical: 20.5, highTech: 6.0, clothing: -0.3 },
  { period: '2025-08', agriculture: 1.0, integratedCircuit: 8.1, electromechanical: 22.1, highTech: 6.4, clothing: -1.7 },
  { period: '2025-09', agriculture: 1.4, integratedCircuit: 8.6, electromechanical: 23.3, highTech: 7.1, clothing: -2.5 },
  { period: '2025-10', agriculture: 1.1, integratedCircuit: 7.8, electromechanical: 23.7, highTech: 6.5, clothing: -3.8 },
  { period: '2025-11', agriculture: 1.2, integratedCircuit: 8.0, electromechanical: 24.7, highTech: 6.6, clothing: -4.4 },
  { period: '2025-12', agriculture: 1.2, integratedCircuit: 8.4, electromechanical: 26.8, highTech: 7.5, clothing: -5.0 },
];

export interface ExportEquipmentDataPoint {
  period: string;
  dataProcessing: number | null;   // 自动数据处理设备累计同比
  generalMachinery: number | null; // 通用机械设备累计同比
  mobile: number | null;           // 手机累计同比
  automobile: number | null;       // 汽车累计同比
  semiconductor: number | null;    // 二极管及半导体累计同比
}

// 第二张折线图数据：自动数据处理设备、通用机械设备、手机、汽车、二极管及半导体
export const exportEquipmentTrendData: ExportEquipmentDataPoint[] = [
  { period: '2024-01', dataProcessing: null, generalMachinery: 14.1, mobile: -22.8, automobile: 17.2, semiconductor: -14.8 },
  { period: '2024-02', dataProcessing: 3.9, generalMachinery: 32.0, mobile: -18.2, automobile: 12.6, semiconductor: -19.3 },
  { period: '2024-03', dataProcessing: 4.8, generalMachinery: 15.5, mobile: -13.0, automobile: 18.2, semiconductor: -23.1 },
  { period: '2024-04', dataProcessing: 5.9, generalMachinery: 11.3, mobile: -8.5, automobile: 21.2, semiconductor: -24.1 },
  { period: '2024-05', dataProcessing: 6.1, generalMachinery: 10.6, mobile: -5.9, automobile: 20.1, semiconductor: -25.2 },
  { period: '2024-06', dataProcessing: 6.9, generalMachinery: 11.7, mobile: -4.7, automobile: 18.9, semiconductor: -24.8 },
  { period: '2024-07', dataProcessing: 8.7, generalMachinery: 12.1, mobile: -3.7, automobile: 18.1, semiconductor: -23.8 },
  { period: '2024-08', dataProcessing: 9.1, generalMachinery: 12.0, mobile: -1.7, automobile: 20.0, semiconductor: -23.1 },
  { period: '2024-09', dataProcessing: 8.5, generalMachinery: 11.1, mobile: -2.3, automobile: 20.7, semiconductor: -23.6 },
  { period: '2024-10', dataProcessing: 9.2, generalMachinery: 12.8, mobile: -2.0, automobile: 18.6, semiconductor: -22.8 },
  { period: '2024-11', dataProcessing: 9.9, generalMachinery: 12.9, mobile: -1.8, automobile: 15.8, semiconductor: -22.6 },
  { period: '2024-12', dataProcessing: 9.9, generalMachinery: 14.3, mobile: -3.1, automobile: 15.5, semiconductor: -21.8 },
  { period: '2025-01', dataProcessing: null, generalMachinery: 19.5, mobile: -12.8, automobile: 7.8, semiconductor: -18.8 },
  { period: '2025-02', dataProcessing: 10.5, generalMachinery: -2.0, mobile: -3.3, automobile: 2.5, semiconductor: -22.0 },
  { period: '2025-03', dataProcessing: 6.8, generalMachinery: 6.2, mobile: 0.4, automobile: 2.2, semiconductor: -17.7 },
  { period: '2025-04', dataProcessing: 4.5, generalMachinery: 8.9, mobile: -5.0, automobile: 2.8, semiconductor: -15.9 },
  { period: '2025-05', dataProcessing: 2.7, generalMachinery: 8.2, mobile: -8.5, automobile: 5.3, semiconductor: -14.1 },
  { period: '2025-06', dataProcessing: 1.8, generalMachinery: 7.0, mobile: -8.5, automobile: 8.2, semiconductor: -14.0 },
  { period: '2025-07', dataProcessing: 0.0, generalMachinery: 6.8, mobile: -10.5, automobile: 9.7, semiconductor: -12.8 },
  { period: '2025-08', dataProcessing: -0.4, generalMachinery: 6.5, mobile: -11.5, automobile: 10.8, semiconductor: -9.7 },
  { period: '2025-09', dataProcessing: -0.5, generalMachinery: 8.3, mobile: -9.8, automobile: 10.8, semiconductor: -6.1 },
  { period: '2025-10', dataProcessing: -1.5, generalMachinery: 6.5, mobile: -11.0, automobile: 13.4, semiconductor: -4.9 },
  { period: '2025-11', dataProcessing: -2.0, generalMachinery: 6.4, mobile: -11.2, automobile: 16.7, semiconductor: -2.8 },
  { period: '2025-12', dataProcessing: -1.4, generalMachinery: 6.1, mobile: -9.4, automobile: 21.4, semiconductor: -1.7 },
];
