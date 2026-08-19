import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { GdpForecastRangeChart } from '../charts/GdpForecastRangeChart';

export const ContentSlide07: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-bold shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            预测与展望
          </span>
          <span className="text-gray-900 font-semibold">
            二季度为低点，三、四季度逐步回升，全年预计
            <span className="font-bold text-blue-600">4.5%-4.8%</span>
          </span>
        </span>
      }
      className="[&>section:first-of-type]:!mb-1 [&>section:first-of-type]:sm:!mb-2"
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="机构预测共识" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
全年增速大概率落在
<span className="font-bold text-[#b91c1c]">4.5%-4.8%</span>
区间，处于政府目标（4.5%-5.0%）下限附近
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
                IMF在7月8日逆势上调
                <span className="font-bold">4.4%→4.6%</span>
                ，中国是为数不多被上调的主要经济体，理由是Q1表现超预期（高技术制造业+出口驱动）
              </div>
              <div>
                <span className="font-bold text-webank-blue">OECD：</span>
                基准情景2026年
                <span className="font-bold">4.5%</span>
                （较3月上调0.1pp）下半年能源价格上涨拖累、地产投资继续收缩、反内卷政策压制企业投资，出口受益于关税降低+高科技竞争力提升、基建受重大项目支撑。
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
        <ChartContainer delay="600ms" ariaLabel="国内外机构对中国2026年GDP增速预测与政府目标区间图">
          <GdpForecastRangeChart />
        </ChartContainer>
      }
    />
  );
};
