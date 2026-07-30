import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { AiGrowthContributionChart } from '../charts/AiGrowthContributionChart';

export const ContentSlide43: React.FC = () => {
  return (
    <BaseContentSlide title="目前正处于AI资本开支快速扩张期" cardColumns={2}>
      <div className="flex flex-col h-full min-h-0">
        <div className="grid grid-cols-2 gap-3 mb-2 flex-shrink-0">
          <BaseCard
            title="资本开支与收入端"
            delay="0ms"
            variant="accent"
            className="!p-2.5 !gap-1"
          >
            <p className="text-[12px] leading-snug">
              目前处于资本开支快速扩张期，据Bloomberg，2026年美国头部企业资本开支预计
              <span className="text-red-500 font-semibold">6,000-7,000亿美元</span>
              ，中国约
              <span className="text-red-500 font-semibold">5,000亿元</span>
              。收入端，硬件层收入最确定，云服务和订阅层处于早期，Agent商业化尚未落地。
            </p>
          </BaseCard>

          <BaseCard
            title="AI对GDP拉动的预测分歧"
            delay="120ms"
            className="!p-2.5 !gap-1"
          >
            <p className="text-[11px] leading-snug">
              乐观派（IMF、McKinsey、OECD）：未来10年AI每年额外拉动GDP
              <span className="text-red-500 font-semibold">0.7-1.8</span>
              个百分点；谨慎派（CBO）预计2026—2036年生成式AI年贡献约
              <span className="text-red-500 font-semibold">0.1</span>
              个百分点。分歧来自任务可替代比例、部署速度、互补投资、模型成本与可靠性、劳动再配置及需求承接等假设差异。生产率兑现滞后期逐轮缩短，本轮或约
              <span className="text-red-500 font-semibold">10年</span>
              内逐步显现。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0">
          <ChartContainer delay="480ms" ariaLabel="AI净增长贡献J曲线与兑现周期">
            <AiGrowthContributionChart />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
