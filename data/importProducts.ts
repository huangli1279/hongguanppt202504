// 进口产品数据

export interface ImportProductDataPoint {
  period: string;
  semiconductorEquipment: number;
  integratedCircuit: number;
  oilAndGas: number;
  cosmetics: number;
  ironOre: number;
}

// 主要进口产品同比走势数据
export const importProductTrendData: ImportProductDataPoint[] = [
  { period: '2501', semiconductorEquipment: 9.8, integratedCircuit: 3.0, oilAndGas: -2.3, cosmetics: -3.0, ironOre: -6.6 },
  { period: '2502', semiconductorEquipment: 9.2, integratedCircuit: 2.5, oilAndGas: -2.5, cosmetics: -2.8, ironOre: -6.5 },
  { period: '2503', semiconductorEquipment: 9.8, integratedCircuit: 2.9, oilAndGas: -1.5, cosmetics: -3.5, ironOre: -5.5 },
  { period: '2504', semiconductorEquipment: 10.4, integratedCircuit: 3.1, oilAndGas: 0.7, cosmetics: -3.9, ironOre: -4.7 },
  { period: '2505', semiconductorEquipment: 10.8, integratedCircuit: 3.6, oilAndGas: 0.8, cosmetics: -4.2, ironOre: -4.8 },
  { period: '2506', semiconductorEquipment: 11.2, integratedCircuit: 3.8, oilAndGas: 0.9, cosmetics: -4.5, ironOre: -4.0 },
  { period: '2507', semiconductorEquipment: 12.0, integratedCircuit: 3.5, oilAndGas: 0.6, cosmetics: -6.2, ironOre: -2.6 },
  { period: '2508', semiconductorEquipment: 12.5, integratedCircuit: 4.0, oilAndGas: 1.2, cosmetics: -6.5, ironOre: -2.2 },
  { period: '2509', semiconductorEquipment: 13.0, integratedCircuit: 4.8, oilAndGas: 1.8, cosmetics: -6.8, ironOre: -1.5 },
  { period: '2510', semiconductorEquipment: 14.2, integratedCircuit: 5.2, oilAndGas: -3.5, cosmetics: -8.2, ironOre: 0.4 },
  { period: '2511', semiconductorEquipment: 18.5, integratedCircuit: 8.4, oilAndGas: -1.2, cosmetics: -5.4, ironOre: -1.8 },
  { period: '2512', semiconductorEquipment: 22.4, integratedCircuit: 12.6, oilAndGas: 4.1, cosmetics: -2.1, ironOre: -3.5 },
];
