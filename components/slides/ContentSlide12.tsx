import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { industryDetailMonthlyData } from '@/data/industrialOutput';

// 2026年上半年主要行业利润增速（数据来源：国家统计局 2026年1-6月工业企业利润数据）
const industryProfitGrowthData: Array<{ period: string; newEconomy?: number; oldEconomy?: number; fill: string }> = [
  { period: '电子信息', newEconomy: 46.2, fill: '#2563eb' },
  { period: '有色金属', newEconomy: 38.5, fill: '#3b82f6' },
  { period: '化工', newEconomy: 25.3, fill: '#60a5fa' },
  { period: '高技术制造', newEconomy: 21.8, fill: '#93c5fd' },
  { period: '装备制造', newEconomy: 15.4, fill: '#bfdbfe' },
  { period: '电力热力', newEconomy: 9.2, fill: '#dbeafe' },
  { period: '汽车制造', oldEconomy: -8.6, fill: '#fca5a5' },
  { period: '黑色金属', oldEconomy: -15.3, fill: '#f87171' },
  { period: '纺织业', oldEconomy: -22.1, fill: '#ef4444' },
  { period: '煤炭开采', oldEconomy: -38.5, fill: '#dc2626' },
];

const kLineConfig: LineConfig[] = [
  { dataKey: 'highTech', name: '高技术制造', strokeWidth: 2.5 },
  { dataKey: 'electronics', name: '计算机通信电子', strokeWidth: 2 },
  { dataKey: 'railway', name: '铁路船舶航空航天', strokeWidth: 2 },
  { dataKey: 'power', name: '电力热力', strokeWidth: 1.5 },
];

const profitBars: BarConfig[] = [
  { dataKey: 'newEconomy', name: '新经济/装备制造' },
  { dataKey: 'oldEconomy', name: '传统行业' },
];

export const ContentSlide12: React.FC = () => {
  return (
    <BaseContentSlide
      title="工业企业K型分化加剧"
      cardColumns={1}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="K型分化证据" delay="0ms" variant="accent">
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-webank-blue">总量高增、结构分化</span>：
                2026年1-6月规上工业企业利润同比增长<span className="font-bold text-webank-blue">18.7%</span>，营收利润率创2024年以来最高；但利润增长主要由新动能驱动，
                <span className="font-semibold">电子信息、有色金属、化工等行业利润增速领跑，汽车、黑色金属等传统产业利润明显承压</span>。
              </li>
              <li>
                <span className="font-semibold text-webank-blue">新经济端高增长</span>：
                电子信息制造业利润增长
                <span className="font-bold text-red-500">46.2%</span>，有色金属增长
                <span className="font-bold text-red-500">38.5%</span>，化工增长
                <span className="font-bold text-red-500">25.3%</span>；高技术制造业整体增长
                <span className="font-bold text-red-500">21.8%</span>，装备制造业增长
                <span className="font-bold text-red-500">15.4%</span>，AI算力、半导体等新动能持续释放。
              </li>
              <li>
                <span className="font-semibold text-slate-600">旧经济端持续低迷</span>：
                汽车制造利润下降
                <span className="font-bold text-red-500">8.6%</span>，黑色金属下降
                <span className="font-bold text-red-500">15.3%</span>，纺织业下降
                <span className="font-bold text-red-500">22.1%</span>，煤炭开采下降
                <span className="font-bold text-red-500">38.5%</span>。
              </li>
              <li>
                <span className="font-semibold">AI景气延续、底部难破</span>：K型分化短期内不可逆转，新经济端的AI、半导体、新能源景气有望延续，但旧经济端的地产链、建材、纺织、煤炭仍将在底部运行，两端差距持续扩大。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="400ms" className="min-h-0">
            <BaseLineChart
              data={industryDetailMonthlyData}
              title="高景气行业 vs 传统行业：工业增加值当月同比走势持续分化"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={kLineConfig}
              yAxisDomain={[-5, 22]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['高技术制造', '计算机通信电子', '铁路船舶航空航天', '电力热力']}
              xAxisTickCount={7}
              xAxisInterval={3}
            />
          </ChartContainer>
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseBarChart
              data={industryProfitGrowthData}
              title="2026年1-6月主要行业利润增速：新旧经济极度分化"
              subtitle="数据来源：国家统计局 | 单位：%"
              bars={profitBars}
              xAxisKey="period"
              yAxisDomain={[-50, 200]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}%`}
              showReferenceLine={true}
              referenceLineY={0}
              showLegend={true}
              legendOrder={['新经济/装备制造', '传统行业']}
              showLabels={true}
              labelPosition="top"
              labelFormatter={(val: number | string) => (Number(val) > 0 ? `+${val}%` : `${val}%`)}
              unit="%"
              barSize={18}
              xAxisAngle={-20}
              xAxisHeight={50}
              xAxisInterval={0}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
