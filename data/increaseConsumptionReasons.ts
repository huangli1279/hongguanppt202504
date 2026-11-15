// 日常增加消费的主要原因（分年龄段占比）
// 数据来源：中央广播电视总台研究院《美好生活大调查》

export interface IncreaseConsumptionReasonDataPoint {
  reason: string;      // 主要原因
  all: number;         // 全部
  age18_35: number;    // 18-35岁
  age36_59: number;    // 36-59岁
  age60plus: number;   // 60岁以上
}

export const increaseConsumptionReasons: IncreaseConsumptionReasonDataPoint[] = [
  { reason: '旧物更新', all: 43, age18_35: 41, age36_59: 44, age60plus: 46 },
  { reason: '情绪价值', all: 42, age18_35: 47, age36_59: 39, age60plus: 36 },
  { reason: '性价比高', all: 38, age18_35: 39, age36_59: 38, age60plus: 33 },
  { reason: '功能需要', all: 30, age18_35: 28, age36_59: 30, age60plus: 28 },
  { reason: '猎奇尝鲜', all: 30, age18_35: 32, age36_59: 28, age60plus: 27 },
  { reason: '品牌价值认同', all: 22, age18_35: 20, age36_59: 21, age60plus: 18 },
  { reason: '高颜值', all: 20, age18_35: 20, age36_59: 18, age60plus: 20 },
  { reason: '便宜实惠', all: 17, age18_35: 16, age36_59: 20, age60plus: 21 },
  { reason: '打折促销补货', all: 15, age18_35: 13, age36_59: 16, age60plus: 18 },
  { reason: '明星效应', all: 12, age18_35: 12, age36_59: 10, age60plus: 10 },
  { reason: '保健养生', all: 9, age18_35: 8, age36_59: 9, age60plus: 10 },
  { reason: '成分党', all: 7, age18_35: 7, age36_59: 8, age60plus: 9 },
];
