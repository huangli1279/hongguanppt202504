import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { UsExportTariffChart, TariffEventTimeline } from '../charts/UsExportTariffChart';


export const ContentSlide26: React.FC = () => {
  return (
    <BaseContentSlide
      title="三季度出口地区结构：市场多元与中美关系缓和"
      cardColumns={3}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="三季度出口增速回升" delay="0ms" variant="accent">
            <p className="text-sm leading-snug">
              分地区看，9月对东盟<span className="text-red-500 font-semibold">+52.3%</span>、欧盟
              +25.3%、非洲
              +16.1%、拉美+24.7%，俄罗斯
              <span className="text-red-500 font-semibold">+51.1%</span>，三季度均维持高增；美国8月
              <span className="text-red-500 font-semibold">+34.4%</span>，9月
              <span className="text-red-500 font-semibold">+39.6%</span>均有所回暖，中美谈判成效凸显。
            </p>
          </BaseCard>
          <BaseCard title="出口份额向多元市场调整" delay="120ms">
            <p className="text-sm leading-snug">
              三季度（7—9月）共建“一带一路”国家出口占比为
              <span className="text-red-500 font-semibold">51.6%</span>，较上半年提高
              0.9个百分点；美国三季度占比升至
              <span className="text-red-500 font-semibold">10.6%</span>，较一季度的
              9.9%有所回升。
            </p>
          </BaseCard>
          <BaseCard title="政策环境与趋势研判" delay="240ms">
            <p className="text-sm leading-snug">
              三季度中美经贸磋商取得阶段性进展，双方依据经贸会谈联合声明再次暂停相互24%对等关税90天，并同步暂停部分非关税反制措施；美方调整对华出口管制与实体清单，中方相应放宽稀土等关键矿产出口审批。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-[minmax(0,1fr)_336px] gap-4 min-h-0">
          <ChartContainer
            delay="360ms"
            className="min-w-0 min-h-0"
            ariaLabel="2025年1月至2026年9月美国自华进口（中国对美出口）同比增速及中美关税战关键节点"
          >
            <UsExportTariffChart />
          </ChartContainer>
          <ChartContainer delay="480ms" className="min-w-0 min-h-0">
            <TariffEventTimeline />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
