/**
 * 居民未投资原因（分年龄组）
 * 数据来源：厦门大学、蚂蚁金融
 * 单位：占比 %
 */

export interface NoInvestReasonDataPoint {
  category: string;
  youth: number; // 青年（35岁及以下）
  middle: number; // 中年（36-59岁）
  elderly: number; // 老年（60岁及以上）
}

export const noInvestReasonsData: NoInvestReasonDataPoint[] = [
  { category: '没有闲余资金', youth: 52.0, middle: 47.0, elderly: 41.3 },
  { category: '担心风险太大', youth: 38.6, middle: 40.4, elderly: 41.1 },
  { category: '不了解理财渠道', youth: 30.6, middle: 25.9, elderly: 21.8 },
  { category: '缺乏合适机会', youth: 16.2, middle: 16.1, elderly: 14.1 },
  { category: '资产难以变现', youth: 6.8, middle: 8.9, elderly: 10.8 },
  { category: '土地权益不明', youth: 4.0, middle: 3.8, elderly: 2.9 },
];
