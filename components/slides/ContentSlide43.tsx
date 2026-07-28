import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseStackedBarChart } from '../base/BaseStackedBarChart';
import {
  aiPenetrationCurveData,
  aiSmePenetrationData,
  aiModelArrData,
  aiRevenueVsDepreciationData,
} from '@/data/aiRiskJudgment';

const COLORS = {
  blue: '#1B4F72',
  yellow: '#E8B923',
  grey: '#9CA3AF',
};

const penetrationLines: LineConfig[] = [
  { dataKey: 'ai', name: 'AI渗透率', color: COLORS.blue, strokeWidth: 2 },
  {
    dataKey: 'aiForecast',
    name: 'AI预测',
    color: COLORS.blue,
    strokeWidth: 2,
    strokeDasharray: '6 4',
  },
  { dataKey: 'internet', name: '互联网', color: COLORS.yellow, strokeWidth: 2 },
  { dataKey: 'pc', name: 'PC', color: COLORS.grey, strokeWidth: 2 },
];

const smeLines: LineConfig[] = [
  { dataKey: 'ramp', name: 'Ramp(大企业)', color: COLORS.blue, strokeWidth: 2 },
  { dataKey: 'gov', name: '政府口径(含中小)', color: COLORS.yellow, strokeWidth: 2 },
];

const revenueDepLines: LineConfig[] = [
  { dataKey: 'aiRevenue', name: 'AI收入', color: COLORS.blue, strokeWidth: 2 },
  { dataKey: 'capexDep', name: 'Capex折旧', color: COLORS.yellow, strokeWidth: 2 },
];

export const ContentSlide43: React.FC = () => {
  return (
    <BaseContentSlide
      title="风险判断：当前AI尚不能被简单定义为全面泡沫，更接近局部风险积聚"
      cardColumns={2}
      headerClassName="!mb-2"
      className="!p-8 sm:!p-10"
    >
      <div className="flex flex-col h-full min-h-0 pb-6">
        <div className="grid grid-cols-2 gap-2.5 mb-2 flex-shrink-0">
          <BaseCard
            title="市场背离与泡沫担忧"
            delay="0ms"
            variant="accent"
            className="!p-2.5 !gap-1"
          >
            <p className="text-[11px] leading-snug">
              近期科技股呈现"基本面不差、股价照跌"的背离：美国降息预期推迟、美债收益率上行压制成长股估值，叠加海外AI算力资本开支扩张节奏边际放缓，国内科技板块前期涨幅偏大、抱团资金集中止盈。同时围绕资本开支高企、商业化回报待验、融资渠道扩散、估值高位且交易拥挤，市场产生AI泡沫担忧。
            </p>
          </BaseCard>

          <BaseCard
            title="为何更接近局部风险积聚"
            delay="120ms"
            className="!p-2.5 !gap-1"
          >
            <div className="text-[11px] leading-snug space-y-0.5">
              <p>
                <span className="font-semibold">1. 产业逻辑未逆转：</span>
                资本支出占GDP约
                <span className="text-red-500 font-semibold">2%</span>
                ，接近互联网泡沫峰值，但数据中心租用率与租金仍指向产能偏紧。
              </p>
              <p>
                <span className="font-semibold">2. 渗透率未到拐点：</span>
                过往泡沫破裂多在渗透率中后段（电气
                <span className="text-red-500 font-semibold">80%</span>
                、互联网
                <span className="text-red-500 font-semibold">50%</span>
                ），当前美国企业AI使用率仅约
                <span className="text-red-500 font-semibold">20%</span>
                ，远未进入S曲线后半程。
              </p>
              <p>
                <span className="font-semibold">3. 技术迭代拉长周期：</span>
                "模型-云-端侧-行业应用-知识生产"多层循环演进，周期或更长、更具阶段性。
              </p>
              <p>
                <span className="font-semibold">4. 盈利支撑强于过往：</span>
                AI龙头多有成熟业务现金流反哺，头部模型ARR持续上调，估值泡沫程度低于互联网时期。
                <span className="font-semibold text-webank-accent"> 值得警惕：</span>
                芯片折旧或被低估、
                <span className="text-red-500 font-semibold">88%</span>
                企业用AI但深度部署仅
                <span className="text-red-500 font-semibold">20%</span>
                、融资成本高、AI公司约占标普500市值
                <span className="text-red-500 font-semibold">50%</span>
                。
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

          <ChartContainer delay="480ms" ariaLabel="模型公司ARR连续上调">
            <BaseStackedBarChart
              data={aiModelArrData}
              title="图表3：模型公司ARR连续上调"
              subtitle="来源：公开资料、华泰研究 | 亿美元"
              bars={[
                { dataKey: 'openai', name: 'OpenAI', color: COLORS.blue },
                { dataKey: 'anthropic', name: 'Anthropic', color: COLORS.yellow },
                { dataKey: 'cursor', name: 'Cursor', color: COLORS.grey },
              ]}
              legendOrder={['OpenAI', 'Anthropic', 'Cursor']}
              yAxisDomain={[0, 1200]}
              showYAxis
              showLabels={false}
              barSize={7}
              unit="亿"
              xAxisInterval={3}
              xAxisAngle={-40}
              xAxisHeight={42}
            />
          </ChartContainer>

          <ChartContainer delay="540ms" ariaLabel="云厂商AI收入已超过折旧压力">
            <BaseLineChart
              data={aiRevenueVsDepreciationData}
              title="图表4：云厂商AI收入已超过折旧压力"
              subtitle="来源：公司财报、华泰研究 | billion"
              lines={revenueDepLines}
              yAxisDomain={[0, 30]}
              showYAxis
              unit=""
              yAxisTickFormatter={(v) => `${v}`}
              legendOrder={['AI收入', 'Capex折旧']}
              xAxisTicks={['23Q1', '24Q1', '25Q1', '26Q1']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
