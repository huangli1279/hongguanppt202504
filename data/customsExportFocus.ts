// 2026年9月海关出口重点商品量值（美元值）
// 来源：海关总署《（13）2026年9月出口主要商品量值表（美元值）》，2026-10-15 发布
// 金额单位：亿美元；同比单位：%

export interface ExportFocusItem {
  name: string;
  sepAmount: number;
  sepYoy: number;
  cumAmount: number;
  cumYoy: number;
  /** 是否属于 AI 链（集成电路 + 自动数据处理设备及零部件） */
  isAiChain: boolean;
}

export const exportFocusData: ExportFocusItem[] = [
  { name: '集成电路', sepAmount: 449.5, sepYoy: 136.8, cumAmount: 3015.6, cumYoy: 108.1, isAiChain: true },
  { name: '自动数据处理设备及零部件', sepAmount: 349.9, sepYoy: 93.3, cumAmount: 2315.9, cumYoy: 54.6, isAiChain: true },
  { name: '汽车（含底盘）', sepAmount: 207.5, sepYoy: 61.9, cumAmount: 1498.6, cumYoy: 54.3, isAiChain: false },
  { name: '工业机器人', sepAmount: 2.1, sepYoy: 56.4, cumAmount: 14.5, cumYoy: 21.9, isAiChain: false },
  { name: '家用电器', sepAmount: 101.8, sepYoy: 31.7, cumAmount: 804.1, cumYoy: 9.4, isAiChain: false },
];

// 9月量价拆分：金额同比、数量同比与隐含价格同比（= 金额同比 - 数量同比）
export interface ExportPriceItem {
  name: string;
  amountYoy: number;
  volumeYoy: number;
  priceYoy: number;
}

export const exportPriceData: ExportPriceItem[] = [
  { name: '集成电路', amountYoy: 136.8, volumeYoy: 1.2, priceYoy: 135.6 },
  { name: '自动数据处理设备', amountYoy: 6.7, volumeYoy: -21.8, priceYoy: 28.5 },
  { name: '手机', amountYoy: 14.4, volumeYoy: -12.2, priceYoy: 26.6 },
  { name: '二极管及半导体器件', amountYoy: 16.2, volumeYoy: -3.0, priceYoy: 19.2 },
  { name: '太阳能电池', amountYoy: 19.4, volumeYoy: 11.3, priceYoy: 8.1 },
  { name: '家用电器', amountYoy: 31.7, volumeYoy: 25.4, priceYoy: 6.3 },
  { name: '汽车（含底盘）', amountYoy: 61.9, volumeYoy: 56.3, priceYoy: 5.6 },
  { name: '工业机器人', amountYoy: 56.4, volumeYoy: 64.1, priceYoy: -7.7 },
  { name: '液晶平板显示模组', amountYoy: 7.4, volumeYoy: 17.5, priceYoy: -10.1 },
];

export const exportFocusSummary = {
  aiChain: { sepAmount: 799.4, sepYoy: 115.0, cumAmount: 5331.5, cumYoy: 80.8 },
  total: { sepAmount: 4471.8, sepYoy: 36.3, cumAmount: 33707.0, cumYoy: 21.3 },
};

/** 9月对出口增速的拉动（百分点） */
export const exportContribution = {
  total: 36.3,
  aiChain: 13.0,
  ic: 7.9,
  computer: 5.1,
  nonAi: 23.3,
  /** 9月较8月加快的百分点中，非AI品类的贡献占比 */
  accelerationNonAiShare: 84,
};
