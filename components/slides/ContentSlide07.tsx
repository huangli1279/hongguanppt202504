import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { GdpForecastRangeChart } from '../charts/GdpForecastRangeChart';

export const ContentSlide07: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span className="inline-block bg-blue-100 text-black px-2 py-0.5 rounded font-bold">
            预测与展望：二季度为低点，三、四季度逐步回升，全年预计
            <span className="font-bold">4.5%-4.8%</span>
          </span>
        </span>
      }
      className="bg-blue-100 [&>section:first-of-type]:!mb-1 [&>section:first-of-type]:sm:!mb-2"
      cardColumns={2}
      chartColumns={1}
      headerChild={
        <div className="absolute -top-1 -right-6 sm:-right-12 z-20">
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 shadow-xl rounded-b-lg px-4 py-2.5 flex items-center justify-center">
            <span className="text-white text-sm font-bold whitespace-nowrap">
              预测与展望
            </span>
          </div>
        </div>
      }
      cards={
        <>
          <BaseCard title="机构预测共识" delay="0ms" variant="accent" className="!gap-1.5 !p-3 !bg-blue-100">
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

          <BaseCard title="代表机构预测" delay="120ms" className="!gap-1.5 !p-3 !bg-blue-100">
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
        <ChartContainer delay="600ms" ariaLabel="国内外机构对中国2026年GDP增速预测与政府目标区间图" className="!bg-blue-100">
          <GdpForecastRangeChart />
        </ChartContainer>
      }
    />
  );
};
