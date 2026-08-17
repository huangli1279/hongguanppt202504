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
          <BaseCard title="企业规模、行业维度双重 K 型分化" delay="0ms" variant="accent">
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-webank-blue">企业规模维度</span>：7 月制造业 PMI 整体处于收缩区间，大型企业 <span className="font-bold text-green-500">49.5%</span>、中型 <span className="font-bold text-green-500">49.7%</span>、小型 <span className="font-bold text-green-500">47.4%</span>。大型企业相对韧性更强，但同样未回到扩张区间；小微企业持续深度收缩。
              </li>
              <li>
                <span className="font-semibold text-webank-blue">行业结构维度</span>：行业景气分化明显，高技术制造业 PMI <span className="font-bold text-red-500">53.3%</span>、装备制造业 PMI <span className="font-bold text-red-500">51.4%</span> 维持扩张；高耗能行业 PMI <span className="font-bold text-green-500">47.0%</span>、消费品行业 PMI <span className="font-bold text-green-500">47.8%</span> 持续收缩，仅呈现边际放缓。新动能与传统行业景气形成鲜明反差。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="企业利润 K 型分化：新旧行业盈利差异持续扩大" delay="120ms" variant="accent">
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-webank-blue">新动能行业高增领跑</span>：1‑6 月规上工业企业利润累计同比增长 <span className="font-bold text-webank-blue">18.7%</span>，行业内部分化显著。电子信息(<span className="font-bold text-red-500">96.9%</span>)、有色金属(<span className="font-bold text-red-500">80.0%</span>)、化工(<span className="font-bold text-red-500">102.0%</span>)等高景气板块拉动整体利润；AI 算力、半导体、新能源带动高技术制造业利润增长 <span className="font-bold text-red-500">44.7%</span>，新经济动能持续释放。
              </li>
              <li>
                <span className="font-semibold text-webank-blue">传统行业承压走弱</span>：地产链、汽车、纺织、农产品加工等传统领域盈利承压，汽车(<span className="font-bold text-green-500">-19.5%</span>)、纺织服装(<span className="font-bold text-green-500">-28.0%</span>)利润明显下滑，旧经济板块仍处于底部运行区间。
              </li>
              <li>
                <span className="font-semibold text-slate-600">分化结果</span>：整体工业利润的拉动高度依赖新动能与上游行业，传统行业尚未形成盈利修复的合力。
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
