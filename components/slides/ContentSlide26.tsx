import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { SemiExportLineChart, TraditionalImportBarChart } from '../charts/ImportStructureChart';

export const ContentSlide26: React.FC = () => {
  return (
    <BaseContentSlide
      title="三季度进口结构：AI链拉动、价格走高与传统需求偏弱"
      cardColumns={3}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="AI相关：进口价格增长" delay="0ms" variant="accent">
            <p className="text-sm leading-snug">
              9月自动数据处理设备及零部件进口金额同比
              <span className="text-red-500 font-semibold">+296.5%</span>，集成电路
              <span className="text-red-500 font-semibold">+74.7%</span>，但数量仅+1.7%。AI链（集成电路与计算机设备）合计拉动进口增速
              <span className="text-red-500 font-semibold">21.7</span>个百分点，约贡献整体增幅七成。
            </p>
            <p className="text-sm leading-snug mt-2">
              根据韩国官方数据，9月半导体出口总量
              <span className="text-red-500 font-semibold">605亿美元</span>，其中中国占
              <span className="text-red-500 font-semibold">44%</span>，半导体出口额10月已环比下降，四季度AI进口增速或将回落。
            </p>
          </BaseCard>
          <BaseCard title="通胀影响：价格抬升进口金额" delay="120ms">
            <p className="text-sm leading-snug">
              9月进口金额同比
              <span className="text-red-500 font-semibold">+31.0%</span>，进口量仅
              +1.0%，显示实际需求未明显改善。原油进口量
              <span className="text-green-600 font-semibold">-21.5%</span>，但价格
              <span className="text-red-500 font-semibold">+31.5%</span>，金额增长
              +3.3%；煤炭、天然气金额分别增长
              <span className="text-red-500 font-semibold">+45.3%</span>、
              <span className="text-red-500 font-semibold">+34.0%</span>，但数量均下滑。
            </p>
          </BaseCard>
          <BaseCard title="传统行业下行：进口数量普遍走弱" delay="240ms">
            <p className="text-sm leading-snug">
              能源与原材料进口量偏弱：铜矿9月数量
              <span className="text-green-600 font-semibold">-3.7%</span>，金额
              <span className="text-red-500 font-semibold">+14.1%</span>。终端制造相关品类降幅更明显：液晶平板显示模组进口金额/数量分别
              <span className="text-green-600 font-semibold">-25.3%</span>/
              <span className="text-green-600 font-semibold">-24.0%</span>，汽车及零部件分别
              <span className="text-green-600 font-semibold">-38.1%</span>/
              <span className="text-green-600 font-semibold">-47.2%</span>，反映传统制造链需求仍处低位。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-3">
          <ChartContainer delay="360ms" className="min-w-0 min-h-0">
            <SemiExportLineChart />
          </ChartContainer>
          <ChartContainer delay="480ms" className="min-w-0 min-h-0">
            <TraditionalImportBarChart />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
