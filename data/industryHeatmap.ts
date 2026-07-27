export interface IndustryHeatmapItem {
  industry: string;
  valueAdded: string;
  profitGrowth: string;
  ppiYoy: string;
  investmentGrowth: string;
  pmi: string;
  exportPerformance: string;
  judgment: string;
}

/**
 * 分行业景气度对比表：工业增加值(H1) / 利润增速(1-5月) / PPI同比(6月) /
 * 投资增速(H1) / PMI景气(6月) / 出口表现(H1) / 综合判断
 * 数据来源：国家统计局、海关总署、中国物流与采购联合会 公开数据整理
 */
export const industryHeatmapData: IndustryHeatmapItem[] = [
  { industry: '计算机/通信/电子设备', valueAdded: '14.80%', profitGrowth: '103.90%', ppiYoy: '+3.3%', investmentGrowth: '6.50%', pmi: '>54%高景气', exportPerformance: '集成电路+96%，计算机+26.4%', judgment: '🔥🔥🔥' },
  { industry: '铁路/船舶/航空航天', valueAdded: '+18.2%(6月)', profitGrowth: '—', ppiYoy: '-0.2%', investmentGrowth: '24.70%', pmi: '>57%高预期', exportPerformance: '船舶+29.4%', judgment: '🔥🔥🔥' },
  { industry: '专用设备制造', valueAdded: '+10.0%(6月)', profitGrowth: '-5.50%', ppiYoy: '-0.6%', investmentGrowth: '-8.60%', pmi: '>54%高景气', exportPerformance: '—', judgment: '🔥🔥' },
  { industry: '通用设备制造', valueAdded: '+9.9%(6月)', profitGrowth: '-0.20%', ppiYoy: '-0.7%', investmentGrowth: '1.90%', pmi: '—', exportPerformance: '机械设备出口强', judgment: '🔥' },
  { industry: '电气机械和器材', valueAdded: '+7.0%(6月)', profitGrowth: '-13.70%', ppiYoy: '+5.1%', investmentGrowth: '1.20%', pmi: '>57%高预期', exportPerformance: '电工器材+29.2%', judgment: '🔥 (量增利减)' },
  { industry: '汽车制造', valueAdded: '+8.7%(6月)', profitGrowth: '-19.80%', ppiYoy: '-2.1%', investmentGrowth: '-4.20%', pmi: '—', exportPerformance: '整车出口+53.9%', judgment: '⚡ (出口强但利润承压)' },
  { industry: '化学原料和制品', valueAdded: '-0.1%(6月)', profitGrowth: '71.60%', ppiYoy: '+11.3%', investmentGrowth: '-6.50%', pmi: '<50%萎缩', exportPerformance: '—', judgment: '⚡ (价涨利增但量缩)' },
  { industry: '有色金属冶炼', valueAdded: '-3.8%(6月)', profitGrowth: '117.10%', ppiYoy: '+3.10%', investmentGrowth: '-4.10%', pmi: '<50%萎缩', exportPerformance: '铝+33.2%', judgment: '⚡ (暴利但生产收缩)' },
  { industry: '煤炭开采', valueAdded: '-5.9%(6月)', profitGrowth: '33.50%', ppiYoy: '+3.11%', investmentGrowth: '5.70%', pmi: '<50%萎缩', exportPerformance: '—', judgment: '⚡ (价涨利增但量缩)' },
  { industry: '石油天然气开采', valueAdded: '+1.0%(6月)', profitGrowth: '17.20%', ppiYoy: '+3.12%', investmentGrowth: '5.10%', pmi: '<50%萎缩', exportPerformance: '—', judgment: '⚡ (同上)' },
  { industry: '纺织业', valueAdded: '+3.4%(6月)', profitGrowth: '11.70%', ppiYoy: '+1.5%', investmentGrowth: '9.40%', pmi: '—', exportPerformance: '—', judgment: '🟡 (温和正增长)' },
  { industry: '农副食品加工', valueAdded: '+3.1%(6月)', profitGrowth: '-13.30%', ppiYoy: '-1.2%', investmentGrowth: '1.90%', pmi: '>54%', exportPerformance: '—', judgment: '🟡 (量稳利减)' },
  { industry: '黑色金属冶炼(钢铁)', valueAdded: '+3.3%(6月)', profitGrowth: '-37.40%', ppiYoy: '+3.1%', investmentGrowth: '-4.90%', pmi: '<50%萎缩', exportPerformance: '—', judgment: '❄️' },
  { industry: '非金属矿物制品(建材)', valueAdded: '-2.3%(6月)', profitGrowth: '-48.90%', ppiYoy: '-4.4%', investmentGrowth: '-11.90%', pmi: '<50%萎缩', exportPerformance: '—', judgment: '❄️❄️' },
  { industry: '电力/热力供应', valueAdded: '+7.8%(6月)', profitGrowth: '-4.10%', ppiYoy: '-4.4%', investmentGrowth: '-2.70%', pmi: '—', exportPerformance: '—', judgment: '🟡 (投资强但利减)' },
  { industry: '高技术制造业(整体)', valueAdded: '13.30%', profitGrowth: '—', ppiYoy: '+3.18%', investmentGrowth: '3.20%', pmi: '53.50%', exportPerformance: '高新技术+38.5%', judgment: '🔥🔥🔥' },
  { industry: '装备制造业(整体)', valueAdded: '9.30%', profitGrowth: '14.10%', ppiYoy: '+3.19%', investmentGrowth: '1.70%', pmi: '52.50%', exportPerformance: '机电+24.5%', judgment: '🔥🔥' },
  { industry: '高耗能行业(整体)', valueAdded: '—', profitGrowth: '—', ppiYoy: '+3.20%', investmentGrowth: '—', pmi: '47.10%', exportPerformance: '—', judgment: '❄️' },
  { industry: '消费品制造业(整体)', valueAdded: '—', profitGrowth: '—', ppiYoy: '+3.21%', investmentGrowth: '—', pmi: '50.20%', exportPerformance: '—', judgment: '🟡 (荣枯线边缘)' },
];
