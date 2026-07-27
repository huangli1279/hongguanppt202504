// AI 链全球参与情况（图表35）

export interface AiChainGlobalParticipationItem {
  region: string;
  advantage: string;
  industries: string[];
}

export const aiChainGlobalParticipationData: AiChainGlobalParticipationItem[] = [
  {
    region: '美国',
    advantage: '全球AI技术与需求中枢，主导AI芯片设计、大模型等高附加值环节',
    industries: [
      'AI芯片设计：英伟达，GPU市场份额超80%，美国整体占85%',
      '大模型：OpenAI、Anthropic、Google全球领先',
      'EDA/芯片设计工具：新思科技、楷登电子（市场份额60%+）',
      '云服务/算力中心：微软Azure、AWS、Google等引领全球AI基础设施投资',
    ],
  },
  {
    region: '中国台湾',
    advantage: '全球芯片先进制程、先进封装核心枢纽',
    industries: [
      '先进制程晶圆代工：台积电，7nm以下制程占比约90%，全球晶圆代工份额约70%',
      '先进封装：台积电，CoWoS先进封装占比超80%',
      'AI服务器ODM：富士康、广达电脑、纬创资通',
      'AI服务器配套/液冷：台达电子，全球领先',
    ],
  },
  {
    region: '韩国',
    advantage: '全球AI存储芯片核心供应国',
    industries: [
      'HBM高带宽存储器：SK海力士（市场份额约62%）、三星（约22%），全球供应主导',
      'NAND闪存：三星、SK海力士，合计占全球NAND市场约45%-50%',
    ],
  },
  {
    region: '日本',
    advantage: '全球半导体材料与关键设备供应国',
    industries: [
      '硅晶圆：信越化学、SUMCO，合计占全球约55%',
      '光刻胶：东京应化、JSR、信越化学，合计份额约80%',
      '半导体设备：东京电子，涂胶显影、刻蚀设备全球领先',
    ],
  },
  {
    region: '欧洲',
    advantage: '全球半导体光刻设备垄断者',
    industries: [
      'EUV极紫外光刻机：荷兰ASML，市场份额100%',
      'EUV光刻镜片：德国蔡司，ASML唯一供应商，占全球91%',
    ],
  },
  {
    region: '中国大陆',
    advantage: '全产业链覆盖与国产替代推进的AI生态大国',
    industries: [
      '光模块：中际旭创（全球市占率28%-30%，1.6T超50%）、新易盛（15%-18%），全球前二',
      '完整电子制造：鹏鼎控股、胜宏科技等，PCB全球占比超50%；电源、连接器全球占比高',
      '国产替代：AI加速卡华为昇腾，2025年市场份额突破41%；中芯国际，全球晶圆代工营收第三；开源大模型全球领先',
    ],
  },
  {
    region: '东南亚',
    advantage: '全球半导体封测、电子组装与高端制造枢纽',
    industries: [
      '芯片制造：新加坡制造了全球约10%的芯片和约20%的半导体设备',
      '半导体封测：马来西亚，占全球封测市场约13%；东南亚整体贡献超27%全球封测产能',
      '电子/服务器组装：越南、泰国，承接消费电子与AI服务器产业链转移',
    ],
  },
];
