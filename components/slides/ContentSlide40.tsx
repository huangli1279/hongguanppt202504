import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { AiDecisionDelegationChart } from '../charts/AiDecisionDelegationChart';
import { ZGenInfoChannelChart } from '../charts/ZGenInfoChannelChart';

export const ContentSlide40: React.FC = () => (
  <BaseContentSlide
    title={<>AI参与消费决策</>}
    cardColumns={2}
  >
    <div className="flex h-full flex-col gap-3">
      <p className="shrink-0 text-center text-lg font-semibold text-webank-blue">
      </p>

      <div className="grid shrink-0 grid-cols-2 gap-3">
        <BaseCard title="AI进入消费决策" variant="accent" className="h-full !py-3" animated={false}>
          <div className="space-y-1.5 text-xs leading-relaxed">
            <p>
              AI 逐渐进入消费决策各环节，重塑消费者搜索、比价、选择和购后评价的全流程。目前主要在选择、比价环节影响较大，全权交由 AI 处理的比例仍较低。
            </p>
            <p>
              <span className="font-semibold text-webank-blue">国内：</span>
              79.4% 消费者购物时主动咨询 AI 工具；认为 AI 咨询“很有影响/较有影响”的合计 43.7%（影响力首次超过传统媒体广告的 42.6%）。2026 年双 11 期间 66.7% 的受访者会用 AI 辅助购物（比价、算满减等）。
            </p>
            <p>
              <span className="font-semibold text-webank-blue">海外：</span>
              从独立 AI 平台开始做购买研究的比例由 25%（2024）升至 46%（2026），从传统搜索开始的比例由 43% 降至 24%。
            </p>
          </div>
        </BaseCard>

        <BaseCard title="决策触点迁移" className="h-full !py-3" animated={false}>
          <div className="space-y-1.5 text-xs leading-relaxed">
            <p>
              消费决策高度依赖 AI 工具（仅次于视频、内容平台）。其中 Z 世代对这些渠道的消费决策依赖度高于全年龄段样本。
            </p>
            <p>
              <span className="font-semibold text-webank-blue">开放网络流量自 2023 年以来下降 8%：</span>
              产品触达用户不再主要依赖品牌官网，而越来越依赖平台算法分发。
            </p>
            <p className="text-[10px] text-webank-subtext">※ 各渠道信息来源占比详见下图。</p>
          </div>
        </BaseCard>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-4">
        <ChartContainer ariaLabel="AI参与消费决策的委托程度阶梯">
          <AiDecisionDelegationChart />
        </ChartContainer>
        <ChartContainer ariaLabel="Z世代消费决策信息来源">
          <ZGenInfoChannelChart />
        </ChartContainer>
      </div>
    </div>
  </BaseContentSlide>
);
