import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { AiDecisionDelegationChart } from '../charts/AiDecisionDelegationChart';
import { ZGenInfoChannelChart } from '../charts/ZGenInfoChannelChart';

export const ContentSlide38: React.FC = () => (
  <BaseContentSlide
    title={<>AI参与消费决策</>}
    cardColumns={2}
  >
    <div className="flex h-full flex-col gap-3">
      <p className="shrink-0 text-center text-lg font-semibold text-webank-blue">
      </p>

      <div className="grid shrink-0 grid-cols-2 gap-3">
        <BaseCard title="AI进入消费决策" variant="accent" className="h-full !py-3" animated={false}>
          <div className="space-y-1.5 text-sm leading-relaxed">
            <p>
              AI 逐渐进入消费决策各环节，重塑消费者搜索至购买的全流程。目前在购前研究环节影响较大，全权交由 AI 处理的比例低。
            </p>
            <p>
              一项针对 7 国消费者的调研显示，在购前研究环节，消费者对 AI 参与的接受度约为 70%；在 AI 自主完成购买环节（交易执行阶段）接受度仅为 21%。
            </p>
            <p className="text-[10px] text-webank-subtext">
            </p>
          </div>
        </BaseCard>

        <BaseCard title="消费决策信息来源变化" className="h-full !py-3" animated={false}>
          <div className="space-y-1.5 text-[15px] leading-relaxed">
            <p>
              消费决策高度依赖 AI 工具（仅次于视频、内容平台），AI 影响力的跃升意味着消费者获取商品信息的方式正在从“被动接收广告”转向“主动智能咨询”。其中 Z 世代消费决策对短视频直播间、小红书、AI 渠道依赖度高于全年龄段样本。
            </p>
          </div>
        </BaseCard>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-6">
        <ChartContainer ariaLabel="AI参与消费决策各环节的接受度漏斗图">
          <AiDecisionDelegationChart />
        </ChartContainer>
        <ChartContainer ariaLabel="Z世代消费决策信息来源">
          <ZGenInfoChannelChart />
        </ChartContainer>
      </div>
    </div>
  </BaseContentSlide>
);
