import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { IndustryProsperityScatterChart } from '../charts/IndustryProsperityScatterChart';

export const ContentSlide26: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          <span className="text-webank-blue font-bold">行业景气变化追踪：</span>
            <span className="text-webank-blue">分化延续，上游资源与AI链景气延续，消费轻工持续低迷</span>
        </>
      }
      headerClassName="!mb-4"
    >
      {/* 右上角专栏书签 — 仅保留“行业总结”标志；顶部留出间距，避免与导出时叠加的右上角机构标志重叠 */}
      <div className="absolute top-[56px] right-0 z-20">
        <div className="[clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)] bg-gradient-to-b from-webank-darkBlue via-webank-blue to-webank-midBlue px-6 pt-3 pb-6 text-center drop-shadow-[0_6px_16px_rgba(5,28,44,0.32)]">
          <span className="block text-[15px] font-semibold leading-none tracking-[0.3em] pl-[0.3em] text-white">
            行业总结
          </span>
          <span className="mt-1 block text-[8px] font-medium leading-none tracking-[0.2em] pl-[0.2em] text-white/65">
            INDUSTRY
          </span>
        </div>
      </div>

      <div className="h-full min-h-0 grid grid-cols-[1.6fr_1fr] gap-3">
          <ChartContainer delay="400ms" className="min-h-0">
            <IndustryProsperityScatterChart />
          </ChartContainer>

          <div className="flex flex-col gap-2 min-h-0 pt-8">
          <div className="flex-shrink-0">
            <BaseCard title="行业总结" delay="0ms" variant="accent" className="!p-2.5 gap-0.5">
              <p className="text-xs leading-snug">
                6→9月景气分化延续：新经济端电子、仪器仪表、电气机械受出口与算力需求支撑，叠加油气、煤炭量价齐升，景气领跑；旧经济端地产链（家具、木材、非金属矿）与黑色冶炼持续低迷，中下游普遍“量增利薄”。
              </p>
            </BaseCard>
          </div>

          <div className="flex-shrink-0">
            <BaseCard title="高位回落行业" delay="600ms" variant="accent" className="!p-2.5 gap-0.5">
              <p className="text-xs leading-snug text-slate-700">
                <span className="font-semibold">黑色金属冶炼</span>：高位回落−10.8分，系PPI转负后利润累计降幅逐月扩大至−73.3%、成本刚性致利润率坍塌（收入−1.5%但成本仅−0.6%），属价格红利消退下的盈利问题而非需求塌方。
              </p>
              <p className="text-xs leading-snug text-slate-700 mt-1">
                <span className="font-semibold">铁路船舶航空航天</span>：高位回落−21.1分，系6月量、投资、出口三因素的均值回归叠加造船周期高基数（利润+10%但仅处自身7.6分位），民船订单仍强，回落是结构性口径问题而非景气恶化。
              </p>
            </BaseCard>
          </div>

          <div className="flex-shrink-0">
            <BaseCard title="低位跃升行业" delay="800ms" variant="accent" className="!p-2.5 gap-0.5">
              <p className="text-xs leading-snug text-slate-700">
                <span className="font-semibold">仪器仪表</span>低位跃升+23.3分，系出口放量、PPI回升、利润收窄与固投转正四项共振，属“强量弱价”格局中价格与盈利的滞后修复，利润尚未转正是主要保留项。
              </p>
            </BaseCard>
          </div>
          </div>
      </div>
    </BaseContentSlide>
  );
};
