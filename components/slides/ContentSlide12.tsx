import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { pmiByEnterpriseSizeData } from '@/data/pmi';

// PMI 大中小企业数据
const pmiSizeLines: LineConfig[] = [
  { dataKey: 'large', name: '大型企业', strokeWidth: 2.5, pointOffsets: { '2026-07': 8 } },
  { dataKey: 'medium', name: '中型企业', strokeWidth: 2, pointOffsets: { '2026-07': -8 } },
  { dataKey: 'small', name: '小型企业', strokeWidth: 2 },
];

// 企业利润分化数据
// 数据说明：仅"高技术制造业"无2026-06数据，使用2026-05数据并标注"(5月)"
const industryProfitGrowthData: Array<{ period: string; newEconomy?: number; oldEconomy?: number; fill: string }> = [
  { period: '化学纤维', newEconomy: 102.0, fill: '#1e40af' },
  { period: '计算机通信电子', newEconomy: 96.9, fill: '#2563eb' },
  { period: '有色金属', newEconomy: 80.0, fill: '#3b82f6' },
  { period: '高技术制造', newEconomy: 44.7, fill: '#60a5fa' },
  { period: '通用设备', newEconomy: 1.5, fill: '#93c5fd' },
  { period: '农副食品', oldEconomy: -12.0, fill: '#fca5a5' },
  { period: '汽车制造', oldEconomy: -19.5, fill: '#f87171' },
  { period: '纺织服装', oldEconomy: -28.0, fill: '#ef4444' },
];

const profitBars: BarConfig[] = [
  { dataKey: 'newEconomy', name: '新经济/装备制造' },
  { dataKey: 'oldEconomy', name: '传统行业' },
];

export const ContentSlide12: React.FC = () => {
  return (
    <BaseContentSlide
      title="工业企业K型分化加剧"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="景气度分化" delay="0ms" variant="accent">
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-webank-blue">制造业PMI全面收缩</span>：7月大型<span className="font-bold text-red-500">49.5%</span>、中型<span className="font-bold text-red-500">49.7%</span>、小型<span className="font-bold text-red-500">47.4%</span>，均低于荣枯线，大型企业持续高于中小企业，小型企业已连续探深收缩。
              </li>
              <li>
                <span className="font-semibold text-webank-blue">高技术/装备制造保持扩张</span>：PMI分别为<span className="font-bold text-red-500">53.3%</span>和<span className="font-bold text-red-500">51.4%</span>，明显高于制造业总体，持续发挥支撑引领作用。
              </li>
              <li>
                <span className="font-semibold text-slate-600">价格景气重回回落</span>：消费品<span className="font-bold text-red-500">47.8%</span>，高耗能<span className="font-bold text-red-500">47.0%</span>，均录得收缩放缓。小型企业是吸纳就业的主力军，稳就业政策需加大。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="企业利润K型分化" delay="120ms" variant="accent">
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-webank-blue">利润高增、结构分化</span>：1-6月规上工业企业利润同比增长<span className="font-bold text-webank-blue">18.7%</span>，但电子信息(<span className="font-bold text-red-500">96.9%</span>)、有色(<span className="font-bold text-red-500">80.0%</span>)、化工(<span className="font-bold text-red-500">102.0%</span>)等新动能领跑，汽车(<span className="font-bold text-green-500">-19.5%</span>)、纺织(<span className="font-bold text-green-500">-28.0%</span>)等传统产业明显承压。
              </li>
              <li>
                <span className="font-semibold text-webank-blue">新经济持续释放</span>：高技术制造业利润增长<span className="font-bold text-red-500">44.7%</span>，AI算力、半导体、新能源等景气有望延续。
              </li>
              <li>
                <span className="font-semibold text-slate-600">旧经济底部运行</span>：地产链、建材、纺织、农产品加工仍在底部，两端差距持续扩大。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="400ms" className="min-h-0">
            <BaseLineChart
              data={pmiByEnterpriseSizeData}
              title="大中小企业PMI：小型企业持续承压"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={pmiSizeLines}
              yAxisDomain={[42, 55]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['大型企业', '中型企业', '小型企业']}
              xAxisAngle={0}
            />
          </ChartContainer>
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseBarChart
              data={industryProfitGrowthData}
              title="主要行业利润增速：新旧经济分化显著"
              subtitle={<><span className="text-red-500">注：*高技术制造业仅5月数据</span> | 数据来源：国家统计局 | 单位：%</>}
              bars={profitBars}
              xAxisKey="period"
              yAxisDomain={[-50, 120]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}%`}
              showReferenceLine={true}
              referenceLineY={0}
              showLegend={false}
              showLabels={true}
              labelPosition="top"
              labelFormatter={(val: number | string) => (Number(val) > 0 ? `+${val}%` : `${val}%`)}
              unit="%"
              barSize={22}
              xAxisAngle={-15}
              xAxisHeight={55}
              xAxisInterval={0}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
