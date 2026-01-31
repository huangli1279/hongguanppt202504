// 房地产开发投资数据

export interface RealEstateInvestmentDataPoint {
  period: string;
  realEstateInvestment: number;
  newConstruction: number;
  completion: number;
}

export interface HousePriceIndexDataPoint {
  period: string;
  newHousePrice: number;
  secondHandPrice: number;
}

// 2024-2025年房屋新开工面积与竣工面积累计同比变化
export const realEstateInvestmentData: RealEstateInvestmentDataPoint[] = [
  { period: '2024-02', realEstateInvestment: -9.00, newConstruction: -29.70, completion: -20.20 },
  { period: '2024-03', realEstateInvestment: -9.50, newConstruction: -27.80, completion: -20.70 },
  { period: '2024-04', realEstateInvestment: -9.80, newConstruction: -24.60, completion: -20.40 },
  { period: '2024-05', realEstateInvestment: -10.10, newConstruction: -24.20, completion: -20.10 },
  { period: '2024-06', realEstateInvestment: -10.10, newConstruction: -23.70, completion: -21.80 },
  { period: '2024-07', realEstateInvestment: -10.20, newConstruction: -23.20, completion: -21.80 },
  { period: '2024-08', realEstateInvestment: -10.20, newConstruction: -22.50, completion: -23.60 },
  { period: '2024-09', realEstateInvestment: -10.10, newConstruction: -22.20, completion: -24.40 },
  { period: '2024-10', realEstateInvestment: -10.30, newConstruction: -22.60, completion: -23.90 },
  { period: '2024-11', realEstateInvestment: -10.40, newConstruction: -23.00, completion: -26.20 },
  { period: '2024-12', realEstateInvestment: -10.60, newConstruction: -23.00, completion: -27.70 },
  { period: '2025-02', realEstateInvestment: -9.80, newConstruction: -29.60, completion: -15.60 },
  { period: '2025-03', realEstateInvestment: -9.90, newConstruction: -24.40, completion: -14.30 },
  { period: '2025-04', realEstateInvestment: -10.30, newConstruction: -23.80, completion: -16.90 },
  { period: '2025-05', realEstateInvestment: -10.70, newConstruction: -22.80, completion: -17.30 },
  { period: '2025-06', realEstateInvestment: -11.20, newConstruction: -20.00, completion: -14.80 },
  { period: '2025-07', realEstateInvestment: -12.00, newConstruction: -19.40, completion: -16.50 },
  { period: '2025-08', realEstateInvestment: -12.90, newConstruction: -19.50, completion: -17.00 },
  { period: '2025-09', realEstateInvestment: -13.90, newConstruction: -18.90, completion: -15.30 },
  { period: '2025-10', realEstateInvestment: -14.70, newConstruction: -19.80, completion: -16.90 },
  { period: '2025-11', realEstateInvestment: -15.90, newConstruction: -20.50, completion: -18.00 },
  { period: '2025-12', realEstateInvestment: -17.20, newConstruction: -20.40, completion: -18.10 },
];

// 2024年1月-2025年12月70个大中城市房价指数同比变化
export const housePriceIndexData: HousePriceIndexDataPoint[] = [
  { period: '2024-01', newHousePrice: -1.24, secondHandPrice: -4.45 },
  { period: '2024-02', newHousePrice: -1.90, secondHandPrice: -5.15 },
  { period: '2024-03', newHousePrice: -2.65, secondHandPrice: -5.90 },
  { period: '2024-04', newHousePrice: -3.51, secondHandPrice: -6.79 },
  { period: '2024-05', newHousePrice: -4.30, secondHandPrice: -7.87 },
  { period: '2024-06', newHousePrice: -4.93, secondHandPrice: -8.17 },
  { period: '2024-07', newHousePrice: -5.28, secondHandPrice: -8.17 },
  { period: '2024-08', newHousePrice: -5.69, secondHandPrice: -8.59 },
  { period: '2024-09', newHousePrice: -6.09, secondHandPrice: -9.02 },
  { period: '2024-10', newHousePrice: -6.22, secondHandPrice: -8.94 },
  { period: '2024-11', newHousePrice: -6.07, secondHandPrice: -8.54 },
  { period: '2024-12', newHousePrice: -5.73, secondHandPrice: -7.49 },
  { period: '2025-01', newHousePrice: -5.43, secondHandPrice: -7.80 },
  { period: '2025-02', newHousePrice: -5.22, secondHandPrice: -7.53 },
  { period: '2025-03', newHousePrice: -4.90, secondHandPrice: -7.25 },
  { period: '2025-04', newHousePrice: -4.55, secondHandPrice: -6.76 },
  { period: '2025-05', newHousePrice: -4.08, secondHandPrice: -6.30 },
  { period: '2025-06', newHousePrice: -3.69, secondHandPrice: -6.09 },
  { period: '2025-07', newHousePrice: -3.37, secondHandPrice: -5.85 },
  { period: '2025-08', newHousePrice: -2.95, secondHandPrice: -5.51 },
  { period: '2025-09', newHousePrice: -2.66, secondHandPrice: -5.24 },
  { period: '2025-10', newHousePrice: -2.60, secondHandPrice: -5.40 },
  { period: '2025-11', newHousePrice: -2.78, secondHandPrice: -5.70 },
  { period: '2025-12', newHousePrice: -3.05, secondHandPrice: -6.07 },
];
