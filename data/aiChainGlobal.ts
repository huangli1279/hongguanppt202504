// AI 链全球参与情况（图表35）

export interface AiChainGlobalParticipationItem {
  country: string;
  region: string;
  advantage: string;
  industries: string[];
}

export const aiChainGlobalParticipationData: AiChainGlobalParticipationItem[] = [
  {
    country: '美国',
    region: '上游-芯片设计',
    advantage: 'AI芯片设计',
    industries: ['英伟达、AMD、Google', '新思科技、楷登电子'],
  },
  {
    country: '中国台湾',
    region: '上游-晶圆代工',
    advantage: '先进制程晶圆代工',
    industries: ['台积电（7nm以下占比~90%）', '三星'],
  },
  {
    country: '中国大陆/东南亚',
    region: '中游-封测',
    advantage: '先进封装（CoWoS）',
    industries: ['长电科技、通富微电、华天科技', '日月光'],
  },
  {
    country: '中国大陆/台湾',
    region: '中游-服务器代工',
    advantage: '服务器代工',
    industries: ['工业富联、浪潮信息', '富士康、广达电脑'],
  },
  {
    country: '中国大陆',
    region: '中游-光模块',
    advantage: '光模块',
    industries: ['中际旭创（全球前二）', '新易盛（全球前二）'],
  },
  {
    country: '美国/中国',
    region: '下游-模型应用',
    advantage: '大模型',
    industries: ['DeepSeek、通义千问', '豆包、Kimi'],
  },
];
