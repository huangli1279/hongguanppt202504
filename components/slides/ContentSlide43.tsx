import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { AiGrowthContributionChart } from '../charts/AiGrowthContributionChart';

const cycleStages = [
  {
    title: '短期: 花钱、拖累',
    subtitle: '资本开支、组织调整',
    variant: 'blue' as const,
  },
  {
    title: '中期: 磨合、筑底',
    subtitle: '应用落地、效率验证',
    variant: 'blue' as const,
  },
  {
    title: '长期: 见效、拉升',
    subtitle: 'TFP提升、增长奇点',
    variant: 'blue' as const,
  },
  {
    title: '关键判断',
    subtitle: '本轮兑现周期≈10年+',
    variant: 'orange' as const,
  },
];

const StageArrow: React.FC = () => (
  <div className="flex items-center justify-center flex-shrink-0 w-5 self-center">
    <svg viewBox="0 0 20 12" className="w-5 h-3" fill="none">
      <path
        d="M1 6 H15 M12 2 L16 6 L12 10"
        stroke="#7EB8D8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const ContentSlide43: React.FC = () => {
  return (
    <BaseContentSlide title="目前正处于AI资本开支快速扩张期" cardColumns={3}>
      <div className="flex flex-col h-full min-h-0">
        <div className="grid grid-cols-3 gap-3 mb-2 flex-shrink-0">
          <BaseCard
            title="资本开支与收入端"
            delay="0ms"
            variant="accent"
            className="!p-2.5 !gap-1"
          >
            <ul className="list-disc pl-4 space-y-1 text-[12px] leading-snug">
              <li>
                目前处于资本开支快速扩张期，据Bloomberg，2026年美国头部企业资本开支预计
                <span className="text-red-500 font-semibold">6,000-7,000亿美元</span>
                ，中国约
                <span className="text-red-500 font-semibold">5,000亿元</span>
                。
              </li>
              <li>
                收入端，硬件层收入最确定，云服务和订阅层处于早期，Agent商业化尚未落地。
              </li>
            </ul>
          </BaseCard>

          <BaseCard
            title="AI对GDP拉动的预测分歧"
            delay="120ms"
            className="!p-2.5 !gap-1"
          >
            <ul className="list-disc pl-4 space-y-1 text-[11px] leading-snug">
              <li>
                乐观派（IMF、McKinsey、OECD）：未来10年AI每年额外拉动GDP
                <span className="text-red-500 font-semibold">0.7-1.8</span>
                个百分点；
              </li>
              <li>
                谨慎派（CBO）预计2026—2036年生成式AI年贡献约
                <span className="text-red-500 font-semibold">0.1</span>
                个百分点。
              </li>
              <li>
                分歧来自任务可替代比例、部署速度、互补投资、模型成本与可靠性、劳动再配置及需求承接等假设差异。
              </li>
              <li>
                生产率兑现滞后期逐轮缩短，本轮或约
                <span className="text-red-500 font-semibold">10年</span>
                内逐步显现。
              </li>
            </ul>
          </BaseCard>

          <BaseCard
            title="风险提示"
            delay="240ms"
            className="!p-2.5 !gap-1
              !bg-gradient-to-b !from-amber-50 !to-orange-50/80
              !border-l-4 !border-amber-400 hover:!border-amber-500"
          >
            <p className="text-[11px] font-semibold text-amber-800 leading-snug mb-1">
              引发的问题：
            </p>
            <div className="space-y-1.5 text-[11px] leading-snug text-slate-700">
              <p>
                <span className="font-semibold text-amber-700">① 这是不是泡沫？</span>
                ——万亿资本开支砸下去，回报在哪里？
              </p>
              <p>
                <span className="font-semibold text-amber-700">② 就业冲击有多大？</span>
                ——AI替代的岗位，新创造的岗位，能对上吗？
              </p>
            </div>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0">
          <ChartContainer delay="480ms" ariaLabel="AI净增长贡献J曲线与兑现周期">
            <AiGrowthContributionChart />
          </ChartContainer>
        </div>

        <div className="flex items-stretch gap-0 mt-2 flex-shrink-0">
          {cycleStages.map((stage, i) => (
            <React.Fragment key={stage.title}>
              <div
                className={`flex-1 rounded-lg border px-2 py-1.5 text-center
                  animate-fade-in-up fill-mode-forwards opacity-0 ${
                    stage.variant === 'orange'
                      ? 'bg-gradient-to-b from-amber-50 to-orange-50 border-amber-300'
                      : 'bg-gradient-to-b from-sky-50 to-blue-50/60 border-sky-200'
                  }`}
                style={{ animationDelay: `${600 + i * 80}ms` }}
              >
                <p
                  className={`text-[12px] font-bold leading-tight ${
                    stage.variant === 'orange' ? 'text-amber-700' : 'text-webank-blue'
                  }`}
                >
                  {stage.title}
                </p>
                <p
                  className={`text-[10px] leading-tight mt-0.5 ${
                    stage.variant === 'orange' ? 'text-amber-600/90' : 'text-slate-500'
                  }`}
                >
                  {stage.subtitle}
                </p>
              </div>
              {i < cycleStages.length - 1 && <StageArrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </BaseContentSlide>
  );
};
