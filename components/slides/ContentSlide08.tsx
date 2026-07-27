import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart } from '../base/BaseBarChart';
import { gdpForecastByInstitutionData } from '@/data/gdp';

const INTERNATIONAL_COLOR = '#4A79AA';
const DOMESTIC_COLOR = '#2F5F5A';

export const ContentSlide08: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          预测与展望——二季度为低点，三、四季度逐步回升，全年增长预计
          <span className="text-webank-accent">4.5%-4.8%</span>
        </>
      }
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="机构预测共识" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                全年增速大概率落在
                <span className="font-bold">4.5%-4.8%</span>
                区间，处于政府目标下限附近
              </li>
              <li>
                下半年GDP增速将逐季回升，
                <span className="font-bold">二季度是全年低点</span>
              </li>
              <li>
                出口+AI产业链是核心增长支撑，房地产+消费疲弱是核心拖累
              </li>
              <li>
                K型分化延续：新经济强、旧经济弱
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="代表机构预测" delay="120ms" className="!gap-1.5 !p-3">
            <div className="space-y-1.5 text-[13px] leading-snug">
              <div>
                <span className="font-bold text-webank-blue">IMF：</span>
                <span className="font-bold">4.4%→4.6%</span>
                ，IMF在7月8日逆势上调：在全球经济增长预期下调0.1pct至3.0%的背景下，中国是为数不多被上调的主要经济体，理由是Q1表现超预期（高技术制造业+出口驱动），但同时也指出全球油价上涨和结构性因素仍将形成拖累。
              </div>
              <div>
                <span className="font-bold text-webank-blue">OECD：</span>
                基准情景2026年
                <span className="font-bold">4.5%</span>
                （较3月上调0.1pp）；下半年能源价格上涨拖累、地产投资继续收缩、反内卷政策压制企业投资，但出口受益于关税降低+高科技竞争力提升、基建受重大项目支撑。
              </div>
              <div>
                <span className="font-bold text-webank-blue">国内券商：</span>
                <span className="font-bold">4.7-5%</span>
                ，部分机构预测全年增长5%。出口高景气带动，新经济加速抵御供给冲击，内需修复缓慢，AI资本开支+输入型通胀重塑景气。
              </div>
            </div>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms">
          <BaseBarChart
            data={gdpForecastByInstitutionData}
            title="国内外机构对中国2026年GDP增速预测对比"
            subtitle="注：OECD取基准情景（4.5%）；部分机构尚未公布中期调整频率；券商数据为近期最后更新预测。｜单位：%"
            xAxisKey="institution"
            bars={[
              {
                dataKey: 'international',
                name: '国际组织',
                color: INTERNATIONAL_COLOR,
                stackId: 'forecast',
              },
              {
                dataKey: 'domestic',
                name: '国内头部券商',
                color: DOMESTIC_COLOR,
                stackId: 'forecast',
              },
            ]}
            legendOrder={['国际组织', '国内头部券商']}
            yAxisDomain={[3.5, 5.5]}
            barSize={48}
            showYAxis
            showLabels
            labelFill="#475569"
            labelFormatter={(v: any) =>
              v == null || v === '' ? '' : `${Number(v)}%`
            }
            unit="%"
            yAxisTickFormatter={(v) => `${v}%`}
            xAxisInterval={0}
          />
        </ChartContainer>
      }
    />
  );
};
