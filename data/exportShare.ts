// 2026年1-9月中国出口主要目的地份额
// 基础数据：海关总署2026年1-9月出口总值33707.0亿美元（同比+21.3%）；
// 上半年分国别累计值见 foreignTrade.ts，三季度分国别金额按7—9月当月同比
// 与2025年同期基数折算，份额据此估算，用于结构性展示。
// 金额单位：亿美元；份额单位：%

export interface ExportShareItem {
  name: string;
  amount: number;
  share: number;
  /** 是否属于共建“一带一路”国家的主要分项 */
  isBri: boolean;
}

export const exportShareItems: ExportShareItem[] = [
  { name: '东盟', amount: 6346.8, share: 18.8, isBri: true },
  { name: '欧盟', amount: 4890.1, share: 14.5, isBri: false },
  { name: '美国', amount: 3572.3, share: 10.6, isBri: false },
  { name: '拉美', amount: 2474.9, share: 7.3, isBri: true },
  { name: '中国香港', amount: 2334.2, share: 6.9, isBri: false },
  { name: '非洲', amount: 2047.6, share: 6.1, isBri: true },
  { name: '韩国', amount: 1774.0, share: 5.3, isBri: false },
  { name: '日本', amount: 1333.0, share: 4.0, isBri: false },
  { name: '印度', amount: 1214.4, share: 3.6, isBri: false },
  { name: '俄罗斯', amount: 1089.3, share: 3.2, isBri: true },
  { name: '中国台湾', amount: 1042.0, share: 3.1, isBri: false },
  { name: '其他', amount: 5588.4, share: 16.6, isBri: false },
];

export const exportShareSummary = {
  total: 33707.0,
  /** 共建“一带一路”国家合计出口（含东盟、非洲、拉美、俄罗斯及中东、中亚等） */
  briAmount: 17385.8,
  briShare: 51.6,
  /** 2026年上半年共建“一带一路”国家出口占比 */
  briShareH1: 50.6,
  /** 1-9月较上半年提升的百分点（按未四舍五入值计算） */
  briShareDelta: 0.9,
};
