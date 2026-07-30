export interface IndustryHeatmapItem {
  industry: string;
  /** 工业增加值同比 % */
  valueAdded: number;
  /** 利润增速 % */
  profitGrowth: number;
  /** PPI同比 % */
  ppiYoy: number;
  /** 投资增速 % */
  investmentGrowth: number;
  /** 出口增速 % */
  exportGrowth: number;
  /** PMI */
  pmi: number;
}

export interface IndustryProsperityRow extends IndustryHeatmapItem {
  rank: number;
  /** 六维加权合成景气分 */
  score: number;
  valueAddedLabel: string;
  profitGrowthLabel: string;
  ppiYoyLabel: string;
  investmentGrowthLabel: string;
  exportGrowthLabel: string;
  pmiLabel: string;
  scoreLabel: string;
}

/**
 * 分行业景气度原始指标（数值版）
 * 数据来源：国家统计局、海关总署、中国物流与采购联合会 公开数据整理
 */
export const industryHeatmapData: IndustryHeatmapItem[] = [
  { industry: '计算机通信电子', valueAdded: 15.7, profitGrowth: 61.9, ppiYoy: 3.3, investmentGrowth: 5.5, exportGrowth: 12.9, pmi: 53.5 },
  { industry: '专用设备', valueAdded: 10.0, profitGrowth: 26.9, ppiYoy: -0.6, investmentGrowth: -11.6, exportGrowth: 21.1, pmi: 52.5 },
  { industry: '电气机械', valueAdded: 7.0, profitGrowth: 16.9, ppiYoy: 5.1, investmentGrowth: -0.3, exportGrowth: 10.1, pmi: 52.5 },
  { industry: '铁路船舶航空航天', valueAdded: 18.2, profitGrowth: 53.2, ppiYoy: -0.2, investmentGrowth: 30.2, exportGrowth: 26.5, pmi: 52.5 },
  { industry: '通用设备', valueAdded: 9.9, profitGrowth: 10.0, ppiYoy: -0.7, investmentGrowth: -2.6, exportGrowth: 11.9, pmi: 52.5 },
  { industry: '汽车制造', valueAdded: 8.7, profitGrowth: -18.0, ppiYoy: -2.1, investmentGrowth: -11.7, exportGrowth: 42.5, pmi: 52.5 },
  { industry: '纺织', valueAdded: 3.4, profitGrowth: 41.1, ppiYoy: 1.5, investmentGrowth: 2.4, exportGrowth: 4.0, pmi: 50.2 },
  { industry: '有色金属', valueAdded: 5.1, profitGrowth: 10.9, ppiYoy: 23.4, investmentGrowth: -13.1, exportGrowth: 71.6, pmi: 47.1 },
  { industry: '化学原料', valueAdded: -0.1, profitGrowth: 48.8, ppiYoy: 11.3, investmentGrowth: -9.5, exportGrowth: 25.2, pmi: 47.1 },
  { industry: '农副食品', valueAdded: 3.1, profitGrowth: -5.5, ppiYoy: -1.2, investmentGrowth: -13.9, exportGrowth: 2.8, pmi: 50.2 },
  { industry: '煤炭开采', valueAdded: -5.9, profitGrowth: 79.1, ppiYoy: 20.6, investmentGrowth: 11.2, exportGrowth: 0.0, pmi: 47.1 },
  { industry: '石油天然气', valueAdded: 1.0, profitGrowth: 13.6, ppiYoy: 16.8, investmentGrowth: 4.1, exportGrowth: -19.6, pmi: 47.1 },
  { industry: '黑色金属', valueAdded: 3.3, profitGrowth: 37.0, ppiYoy: 3.1, investmentGrowth: -21.4, exportGrowth: 0.0, pmi: 47.1 },
  { industry: '电力热力', valueAdded: 7.8, profitGrowth: -16.7, ppiYoy: -4.4, investmentGrowth: -16.1, exportGrowth: 8.5, pmi: 47.1 },
  { industry: '非金属矿物', valueAdded: -2.3, profitGrowth: -42.3, ppiYoy: -4.4, investmentGrowth: -16.4, exportGrowth: -1.4, pmi: 47.1 },
];

const clip = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const mean = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / values.length;

const std = (values: number[]) => {
  const avg = mean(values);
  const variance = mean(values.map((value) => (value - avg) ** 2));
  return Math.sqrt(variance) || 1;
};

const isValidExport = (value: number) => value !== 0 && value !== -100;

const mapZToScore = (zScore: number) => clip(50 + 10 * zScore, 0, 100);

/**
 * 景气分计算（与方法论卡片一致）：
 * 1) 各指标样本内 Z-score 标准化
 * 2) 映射：Score = clip(50 + 10×Z, 0, 100)
 * 3) 按有效权重加权平均（出口=0/-100 视为缺失，剔除后重新归一化）
 *
 * 权重：PMI 20% / 投资 15% / 工增 15% / 利润 15% / PPI 10% / 出口 25%
 */
export function calcProsperityScore(
  item: IndustryHeatmapItem,
  sample: IndustryHeatmapItem[] = industryHeatmapData
): number {
  const columns = {
    pmi: sample.map((row) => row.pmi),
    investmentGrowth: sample.map((row) => row.investmentGrowth),
    valueAdded: sample.map((row) => row.valueAdded),
    profitGrowth: sample.map((row) => row.profitGrowth),
    ppiYoy: sample.map((row) => row.ppiYoy),
    exportGrowth: sample
      .filter((row) => isValidExport(row.exportGrowth))
      .map((row) => row.exportGrowth),
  };

  const components: Array<{ value: number; series: number[]; weight: number }> = [
    { value: item.pmi, series: columns.pmi, weight: 0.2 },
    { value: item.investmentGrowth, series: columns.investmentGrowth, weight: 0.15 },
    { value: item.valueAdded, series: columns.valueAdded, weight: 0.15 },
    { value: item.profitGrowth, series: columns.profitGrowth, weight: 0.15 },
    { value: item.ppiYoy, series: columns.ppiYoy, weight: 0.1 },
  ];

  if (isValidExport(item.exportGrowth) && columns.exportGrowth.length > 1) {
    components.push({
      value: item.exportGrowth,
      series: columns.exportGrowth,
      weight: 0.25,
    });
  }

  const weightSum = components.reduce((sum, component) => sum + component.weight, 0);
  const score =
    components.reduce((sum, component) => {
      const zScore =
        (component.value - mean(component.series)) / std(component.series);
      return sum + mapZToScore(zScore) * component.weight;
    }, 0) / weightSum;

  return Math.round(score * 10) / 10;
}

const formatNumber = (value: number) => {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
};

/**
 * 计算景气分并按降序排名，生成表格展示行
 */
export function buildIndustryProsperityRows(
  data: IndustryHeatmapItem[] = industryHeatmapData
): IndustryProsperityRow[] {
  return [...data]
    .map((item) => {
      const score = calcProsperityScore(item, data);
      return {
        ...item,
        rank: 0,
        score,
        scoreLabel: score.toFixed(1),
        valueAddedLabel: formatNumber(item.valueAdded),
        profitGrowthLabel: formatNumber(item.profitGrowth),
        ppiYoyLabel: formatNumber(item.ppiYoy),
        investmentGrowthLabel: formatNumber(item.investmentGrowth),
        exportGrowthLabel: formatNumber(item.exportGrowth),
        pmiLabel: formatNumber(item.pmi),
      };
    })
    .sort((a, b) => b.score - a.score || a.industry.localeCompare(b.industry, 'zh'))
    .map((row, index) => ({ ...row, rank: index + 1 }));
}
