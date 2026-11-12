import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { ExportFocusChart } from '../charts/ExportFocusChart';

export const ContentSlide24: React.FC = () => {
  return (
    <BaseContentSlide
      title="三季度出口结构：AI链拉动显著，消费品出口高增"
      cardColumns={3}
      chartColumns={1}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="AI出口持续景气" delay="0ms" variant="accent">
            <p className="text-sm leading-snug">
              9月AI产业链（集成电路及计算机零部件）出口同比增长
              <span className="text-red-500 font-semibold">+115%</span>，拉动整体出口增速约
              <span className="text-red-500 font-semibold">13</span>个百分点，成为出口增长的重要引擎。集成电路出口金额同比
              <span className="text-red-500 font-semibold">+136.8%</span>，但出口数量仅
              <span className="text-red-500 font-semibold">+2.6%</span>，且价格较8月环比下降
              <span className="text-green-600 font-semibold">1.86%</span>，显示当前增长更多由价格因素支撑，四季度需关注价格走势。
            </p>
          </BaseCard>

          <BaseCard title='消费品与"抢出口"' delay="120ms">
            <p className="text-sm leading-snug">
              9月玩具出口同比
              <span className="text-red-500 font-semibold">+40.8%</span>（8月+15.3%）、家电
              <span className="text-red-500 font-semibold">+31.7%</span>、服装+24.1%，均明显回升，背后对应中美洽谈后美国零售商补库需求。汽车9月出口同比
              <span className="text-red-500 font-semibold">+61.9%</span>；叠加欧盟限制混动车出口将于12月生效，带动“抢出口”效应，对欧出口增速升至
              <span className="text-red-500 font-semibold">25.3%</span>（8月+6.6%）。
            </p>
          </BaseCard>

          <BaseCard
            title="下半年展望：增速回落、结构分化"
            delay="240ms"
            titleClassName="!inline-block !bg-gradient-to-r !from-red-600 !to-blue-600 !text-white !rounded-lg !px-3 !py-1.5 !shadow-md"
          >
            <p className="text-sm leading-snug">
              机构判断四季度出口增速中枢较三季度回落：中金
              <span className="text-black">10%–12%</span>、华泰
              <span className="text-black">8%–10%</span>、中信
              <span className="text-black">9%–11%</span>。
            </p>
            <p className="text-sm leading-snug mt-1">
              结构上呈现 K 型分化：AI 链电子产品、"新三样"仍保持韧性，传统消费品出口压力较大。
            </p>
            <p className="text-sm leading-snug mt-1">
              风险来自去年高基数抬升、集成电路等价格环比回落，名义增速或阶段性承压。
            </p>
          </BaseCard>
        </div>

        <ChartContainer delay="360ms" className="flex-1 min-h-0">
          <ExportFocusChart />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
