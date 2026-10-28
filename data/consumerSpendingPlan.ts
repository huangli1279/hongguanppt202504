// 2026年居民计划增加消费的方向（分年龄段）
// 数据来源：中央广播电视总台研究院《美好生活大调查：中国居民消费特点和趋势报告》
// 单位：占比 %

export interface ConsumerSpendingPlanDataPoint {
  category: string;      // 消费方向
  all: number;           // 全部
  age18_35: number;      // 18-35岁
  age36_59: number;      // 36-59岁
  age60plus: number;     // 60岁以上
}

export const consumerSpendingPlanData: ConsumerSpendingPlanDataPoint[] = [
  { category: '旅游',                 all: 36.5, age18_35: 37.5, age36_59: 36.0, age60plus: 35.0 },
  { category: '保健养生',             all: 32.5, age18_35: 30.5, age36_59: 33.5, age60plus: 35.0 },
  { category: '电脑/手机等数码产品',   all: 29.0, age18_35: 30.5, age36_59: 28.0, age60plus: 24.7 },
  { category: '学习培训等教育支出',    all: 28.5, age18_35: 29.0, age36_59: 28.5, age60plus: 23.0 },
  { category: '文化娱乐',             all: 23.5, age18_35: 24.5, age36_59: 23.5, age60plus: 21.5 },
  { category: '家电',                 all: 22.0, age18_35: 22.5, age36_59: 21.0, age60plus: 21.0 },
  { category: '运动健身',             all: 19.0, age18_35: 19.0, age36_59: 18.5, age60plus: 20.0 },
  { category: '家政服务',             all: 18.5, age18_35: 18.5, age36_59: 19.0, age60plus: 19.0 },
  { category: '养老服务',             all: 18.0, age18_35: 14.0, age36_59: 19.5, age60plus: 24.9 },
  { category: '医疗服务',             all: 16.5, age18_35: 14.5, age36_59: 18.0, age60plus: 21.5 },
  { category: '汽车',                 all: 12.0, age18_35: 12.0, age36_59: 11.5, age60plus: 9.5 },
  { category: '买房自住',             all: 11.5, age18_35: 12.0, age36_59: 11.5, age60plus: 10.0 },
  { category: '养宠物',               all: 7.0,  age18_35: 8.5,  age36_59: 6.5,  age60plus: 7.5 },
  { category: '租房',                 all: 6.5,  age18_35: 6.5,  age36_59: 6.5,  age60plus: 6.5 },
];

/** X 轴展示用短名 */
const SHORT_CATEGORY_NAMES: Record<string, string> = {
  '电脑/手机等数码产品': '数码产品',
  '学习培训等教育支出': '教育支出',
};

export type AgeGroupKey = 'age18_35' | 'age36_59' | 'age60plus';

export const consumerSpendingAgeGroups: {
  key: AgeGroupKey;
  label: string;
  color: string;
}[] = [
  { key: 'age18_35', label: '18-35岁', color: '#5C9A8A' },
  { key: 'age36_59', label: '36-59岁', color: '#E0925B' },
  { key: 'age60plus', label: '60岁以上', color: '#9BC7DA' },
];

/** 按年龄段分组、组内按意愿占比从大到小排列的图表数据 */
export interface ConsumerSpendingPlanByAgePoint {
  category: string; // 唯一键：年龄段|消费项
  name: string;     // X 轴展示名
  value: number;
  fill: string;
  ageGroup: string;
}

export const consumerSpendingPlanByAgeData: ConsumerSpendingPlanByAgePoint[] =
  consumerSpendingAgeGroups.flatMap((group) =>
    [...consumerSpendingPlanData]
      .sort((a, b) => b[group.key] - a[group.key])
      .map((item) => ({
        category: `${group.label}|${item.category}`,
        name: SHORT_CATEGORY_NAMES[item.category] ?? item.category,
        value: item[group.key],
        fill: group.color,
        ageGroup: group.label,
      }))
  );

export const consumerSpendingPlanAgeCategoryGroups = consumerSpendingAgeGroups.map((group) => {
  const items = consumerSpendingPlanByAgeData.filter((d) => d.ageGroup === group.label);
  return {
    label: group.label,
    x1: items[0].category,
    x2: items[items.length - 1].category,
  };
});

/** 各年龄段意愿占比 Top3 区间（用于图表红框高亮） */
export const consumerSpendingPlanTop3Highlights = consumerSpendingAgeGroups.map((group) => {
  const items = consumerSpendingPlanByAgeData.filter((d) => d.ageGroup === group.label);
  return {
    x1: items[0].category,
    x2: items[2].category,
  };
});
