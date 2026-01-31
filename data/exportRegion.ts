// 出口区域分布数据

export interface ExportRegionTrendDataPoint {
  period: string;
  totalExport: number;   // 出口总值同比
  toUS: number;          // 对美出口同比
  toASEAN: number;       // 对东盟出口同比
  toAfrica: number;      // 对非洲出口同比
  toEU: number;          // 对欧盟出口同比
  toLatinAmerica: number; // 对拉美出口同比
}

export const exportRegionTrendData: ExportRegionTrendDataPoint[] = [
  { period: '2501', totalExport: 5.9, toUS: 12.1, toASEAN: 3.2, toAfrica: 6.6, toEU: 10.8, toLatinAmerica: 18.9 },
  { period: '2502', totalExport: -3.1, toUS: -9.8, toASEAN: 8.8, toAfrica: -11.8, toEU: -11.6, toLatinAmerica: -14.7 },
  { period: '2503', totalExport: 12.2, toUS: 9.1, toASEAN: 11.6, toAfrica: 37.0, toEU: 10.3, toLatinAmerica: 23.5 },
  { period: '2504', totalExport: 8.0, toUS: -21.0, toASEAN: 20.8, toAfrica: 25.3, toEU: 8.3, toLatinAmerica: 17.3 },
  { period: '2505', totalExport: 4.6, toUS: -34.5, toASEAN: 14.8, toAfrica: 33.3, toEU: 12.0, toLatinAmerica: 2.3 },
  { period: '2506', totalExport: 5.8, toUS: -16.1, toASEAN: 16.9, toAfrica: 34.8, toEU: 7.6, toLatinAmerica: -2.1 },
  { period: '2507', totalExport: 7.1, toUS: -21.7, toASEAN: 16.6, toAfrica: 42.4, toEU: 9.2, toLatinAmerica: 7.7 },
  { period: '2508', totalExport: 4.3, toUS: -33.1, toASEAN: 22.5, toAfrica: 25.9, toEU: 10.4, toLatinAmerica: -2.3 },
  { period: '2509', totalExport: 8.2, toUS: -27.0, toASEAN: 15.6, toAfrica: 56.4, toEU: 14.2, toLatinAmerica: 15.2 },
  { period: '2510', totalExport: -1.2, toUS: -25.2, toASEAN: 11.0, toAfrica: 10.5, toEU: 0.9, toLatinAmerica: 2.1 },
  { period: '2511', totalExport: 5.9, toUS: -28.6, toASEAN: 8.2, toAfrica: 27.6, toEU: 14.8, toLatinAmerica: 14.9 },
  { period: '2512', totalExport: 6.6, toUS: -30.0, toASEAN: 11.2, toAfrica: 21.8, toEU: 11.6, toLatinAmerica: 9.8 },
];

// 出口构成对比数据（按地区分组）
export interface ExportCompositionDataPoint {
  region: string;
  y2024: number;
  y2025: number;
}

export const exportCompositionData: ExportCompositionDataPoint[] = [
  { region: '美国', y2024: 14.7, y2025: 11.1 },
  { region: '东盟', y2024: 16.4, y2025: 17.6 },
  { region: '欧盟', y2024: 14.4, y2025: 14.8 },
  { region: '非洲', y2024: 5.0, y2025: 6.0 },
  { region: '拉美', y2024: 7.7, y2025: 7.9 },
];
