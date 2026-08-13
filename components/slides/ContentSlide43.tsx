import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import {
  aiPenetrationCurveData,
  aiSmePenetrationData,
  aiModelArrOverseasData,
  aiModelArrDomesticData,
} from '@/data/aiRiskJudgment';

const COLORS = {
  blue: '#1B4F72',
  yellow: '#E8B923',
  grey: '#9CA3AF',
};

/** 季度系列配色（对齐上传图例风格） */
const ARR_Q_COLORS = {
  '2023Q3': '#9DC3E6',
  '2024Q4': '#ED7D31',
  '2025Q2': '#A5A5A5',
  '2025Q4': '#FFC000',
  '2026Q1': '#5B9BD5',
  '2026Q2': '#70AD47',
  '2026Q3': '#FFC000',
} as const;

const overseasArrBars = [
  { dataKey: '2023Q3', name: '23Q3', color: ARR_Q_COLORS['2023Q3'] },
  { dataKey: '2024Q4', name: '24Q4', color: ARR_Q_COLORS['2024Q4'] },
  { dataKey: '2025Q2', name: '25Q2', color: ARR_Q_COLORS['2025Q2'] },
  { dataKey: '2025Q4', name: '25Q4', color: ARR_Q_COLORS['2025Q4'] },
  { dataKey: '2026Q1', name: '26Q1', color: ARR_Q_COLORS['2026Q1'] },
  { dataKey: '2026Q2', name: '26Q2', color: ARR_Q_COLORS['2026Q2'] },
];

const domesticArrBars = [
  { dataKey: '2025Q4', name: '25Q4', color: ARR_Q_COLORS['2023Q3'] },
  { dataKey: '2026Q1', name: '26Q1', color: ARR_Q_COLORS['2024Q4'] },
  { dataKey: '2026Q2', name: '26Q2', color: ARR_Q_COLORS['2025Q2'] },
  { dataKey: '2026Q3', name: '26Q3', color: ARR_Q_COLORS['2025Q4'] },
];

const overseasPeakLabels = new Set([250, 140, 470, 200]);
const domesticPeakLabels = new Set([10, 3]);

const penetrationLines: LineConfig[] = [
  {
    dataKey: 'ai',
    name: 'AI渗透率',
    color: COLORS.blue,
    strokeWidth: 2,
    pointCallouts: { '3': { dx: -24, dy: -14 } },
  },
  {
    dataKey: 'aiForecast',
    name: 'AI预测',
    color: COLORS.blue,
    strokeWidth: 2,
    strokeDasharray: '6 4',
    hiddenLabelPeriods: ['3'],
  },
  {
    dataKey: 'internet',
    name: '互联网',
    color: COLORS.yellow,
    strokeWidth: 2,
    pointCallouts: { '3': { dx: -24, dy: 14 } },
  },
  {
    dataKey: 'pc',
    name: 'PC',
    color: COLORS.grey,
    strokeWidth: 2,
    pointCallouts: { '3': { dx: 24, dy: 14 } },
  },
];

const smeLines: LineConfig[] = [
  { dataKey: 'ramp', name: 'Ramp(大企业)', color: COLORS.blue, strokeWidth: 2 },
  { dataKey: 'gov', name: '政府口径(含中小)', color: COLORS.yellow, strokeWidth: 2 },
];

export const ContentSlide43: React.FC = () => {
  return (
    <BaseContentSlide
      title="风险判断：当前AI尚不能被简单定义为全面泡沫，更接近局部风险积聚"
      cardColumns={2}
      headerClassName="!mb-2"
      className="!p-8 sm:!p-10"
    >
      <div className="flex flex-col h-full min-h-0 pb-2">
        <div className="grid grid-cols-3 gap-2.5 mb-2 flex-shrink-0">
          <BaseCard
            title="市场背离与泡沫担忧"
            delay="0ms"
            variant="accent"
            className="!p-2.5 !gap-1"
          >
            <div className="text-[13px] leading-snug space-y-1.5">
              <p>
                近期科技股呈现"基本面不差、股价照跌"的背离：美国降息预期推迟、美债收益率上行压制成长股估值，叠加海外AI算力资本开支扩张节奏边际放缓，国内科技板块前期涨幅偏大、抱团资金集中止盈。
              </p>
              <p>
                同时围绕资本开支高企、商业化回报待验、融资渠道扩散、估值高位且交易拥挤，市场产生AI泡沫担忧。
              </p>
            </div>
          </BaseCard>

          <BaseCard
            title="为何更接近局部风险积聚（1/2）"
            delay="120ms"
            className="!p-2.5 !gap-1"
          >
            <div className="text-[13px] leading-snug space-y-2">
              <p>
                AI泡沫论主流共识："局部泡沫 + 结构性分化"，而非全面泡沫。
              </p>
              <p>
                <span className="font-semibold">1. 估值有热度，但远不及互联网泡沫。</span>
                资本支出占GDP约
                <span className="text-red-500 font-semibold">2%</span>
                接近互联网泡沫峰值，但头部公司P/E、PEG均低于互联网泡沫时期，盈利驱动特征更显著。
              </p>
              <p>
                <span className="font-semibold">2. 渗透率未到拐点，需求仍超供给。</span>
                过往泡沫破裂多在渗透率中后段（电气
                <span className="text-red-500 font-semibold">80%</span>
                、互联网
                <span className="text-red-500 font-semibold">50%</span>
                ），2026年初美国企业AI渗透率仅约
                <span className="text-red-500 font-semibold">20%</span>
                。数据中心空置率仅
                <span className="text-red-500 font-semibold">1.6%</span>
                ，产能仍偏紧。
              </p>
            </div>
          </BaseCard>

          <BaseCard
            title="为何更接近局部风险积聚（2/2）"
            delay="240ms"
            className="!p-2.5 !gap-1"
          >
            <div className="text-[13px] leading-snug space-y-2">
              <p>
                <span className="font-semibold">3. 资本开支集中，但产业逻辑未逆转。</span>
                AI产业呈现"模型→云→端侧→行业应用→知识生产"的多层递进，每一层成熟后才催生下一层需求，周期更长、更具阶段性。
              </p>
              <p>
                <span className="font-semibold">4. 结构性分化：</span>
                龙头企业多有成熟业务现金流反哺，头部模型ARR持续上调；但应用层部分公司估值虚高（Palantir P/E超
                <span className="text-red-500 font-semibold">100x</span>
                ，软件行业平均
                <span className="text-red-500 font-semibold">30-40x</span>
                ），高利率环境下未盈利公司造血压力更大。
              </p>
            </div>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-4 gap-1.5">
          <ChartContainer delay="360ms" ariaLabel="渗透率速度较快但仍有空间">
            <BaseLineChart
              data={aiPenetrationCurveData}
              title="图表1：渗透率速度较快但仍有空间"
              subtitle="来源：Microsoft、华泰研究"
              lines={penetrationLines}
              yAxisDomain={[0, 1]}
              showYAxis
              unit=""
              yAxisTickFormatter={(v) => Number(v).toFixed(1)}
              legendOrder={['AI渗透率', 'AI预测', '互联网', 'PC']}
              highlightPeriods={['3']}
              xAxisTicks={['0', '4', '8', '12', '16', '20', '24']}
            />
          </ChartContainer>

          <ChartContainer delay="420ms" ariaLabel="中小企业渗透率落后">
            <BaseLineChart
              data={aiSmePenetrationData}
              title="图表2：中小企业渗透率落后"
              subtitle="来源：Ramp、华泰研究 | %"
              lines={smeLines}
              yAxisDomain={[0, 60]}
              showYAxis
              unit="%"
              legendOrder={['Ramp(大企业)', '政府口径(含中小)']}
              highlightPeriods={['25-11']}
              xAxisTicks={['23-01', '23-11', '24-09', '25-07', '26-05']}
            />
          </ChartContainer>

          <ChartContainer
            delay="480ms"
            ariaLabel="模型公司ARR连续上调"
            className="col-span-2"
          >
            <div className="flex flex-col h-full min-h-0 gap-1 [&_.mb-4]:!mb-1">
              <div className="flex-1 min-h-0">
                <BaseBarChart
                  data={aiModelArrOverseasData}
                  title="图表3：模型公司ARR连续上调"
                  subtitle="海外 | 来源：公开资料 | 亿美元"
                  bars={overseasArrBars}
                  xAxisKey="company"
                  legendOrder={['23Q3', '24Q4', '25Q2', '25Q4', '26Q1', '26Q2']}
                  legendFontSize={8}
                  legendGap={6}
                  yAxisDomain={[0, 500]}
                  showYAxis
                  yAxisTickFormatter={(v) => `${v}`}
                  showLabels
                  labelFormatter={(v: any) =>
                    v != null && overseasPeakLabels.has(Number(v)) ? String(v) : ''
                  }
                  barSize={8}
                  unit="亿"
                  xAxisInterval={0}
                  xAxisTickFontSize={9}
                />
              </div>
              <div className="flex-1 min-h-0">
                <BaseBarChart
                  data={aiModelArrDomesticData}
                  title="国内模型公司ARR"
                  subtitle="来源：公开资料 | 亿美元"
                  bars={domesticArrBars}
                  xAxisKey="company"
                  legendOrder={['25Q4', '26Q1', '26Q2', '26Q3']}
                  legendFontSize={8}
                  legendGap={6}
                  yAxisDomain={[0, 12]}
                  showYAxis
                  yAxisTickFormatter={(v) => `${v}`}
                  showLabels
                  labelFormatter={(v: any) =>
                    v != null && domesticPeakLabels.has(Number(v)) ? String(v) : ''
                  }
                  barSize={10}
                  unit="亿"
                  xAxisInterval={0}
                  xAxisTickFontSize={9}
                />
              </div>
            </div>
          </ChartContainer>
        </div>

        <p className="mt-1.5 flex-shrink-0 text-[10px] leading-snug text-slate-500">
          备注：数据来源：公开财报、美国人口普查局 BTOS、摩根大通资产管理报告、华泰证券等。主流共识为"局部泡沫+结构性分化"，而非2000年式全面泡沫。该判断得到多家中外机构支撑：摩根大通认为未达经典泡沫标准且数据中心空置率仅1.6%（CBRE）；摩根士丹利称"泡沫只在谈论中"；高盛指出Mag7净利率超25%、英伟达P/E仅31倍（vs 思科2000年472倍），基本面与2000年本质不同；华泰柏瑞、工银国际、银河国际等国内机构均指向"结构性分化"而非整体泡沫。
        </p>
      </div>
    </BaseContentSlide>
  );
};
