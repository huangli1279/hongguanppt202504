// 类型定义 - 精简版

export interface GdpDataPoint {
  period: string;
  value: number;
  nominal?: number;
  isForecast?: boolean;
}

export interface DeflatorDataPoint {
  period: string;
  primary: number;
  secondary: number;
  tertiary: number;
}
