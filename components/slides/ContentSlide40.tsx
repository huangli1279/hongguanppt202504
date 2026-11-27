import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

const NumBadge: React.FC<{ n: string }> = ({ n }) => (
  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-webank-accent to-webank-blue text-[13px] font-bold text-white">
    {n}
  </span>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-1">
    <span className="flex-shrink-0 text-[14px] leading-tight text-webank-accent">•</span>
    <span className="min-w-0">{children}</span>
  </li>
);

// 特点相关的关键词，标红
const Red: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-semibold text-red-600">{children}</span>
);

// 政策文件名（括号附在句末）
const Doc: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[11px] text-webank-subtext">（{children}）</span>
);

const planFacets = [
  { n: '①', t: '服务消费提质惠民' },
  { n: '②', t: '商品消费扩容升级' },
  { n: '③', t: '新业态新模式新场景' },
  { n: '④', t: '提升消费能力' },
  { n: '⑤', t: '优化消费环境' },
  { n: '⑥', t: '完善制度机制' },
];

// 前面几页提炼的消费增量特点 → 26年政策内容与对应文件
const features: {
  n: string;
  title: string;
  points: React.ReactNode[];
}[] = [
  {
    n: '①',
    title: '体验与情绪消费',
    points: [
      <>
        扩大<Red>文旅</Red>、<Red>演出</Red>、<Red>赛事</Red>、康养、家政等服务供给，落实
        带薪休假、优化假日安排。
        <Doc>《扩大消费“十五五”规划》2026.07</Doc>
      </>,
      <>
        培育<Red>沉浸式、体验式</Red>消费新场景，推动商旅文体健融合。
        <Doc>《扩大消费“十五五”规划》2026.07</Doc>
      </>,
    ],
  },
  {
    n: '②',
    title: '追求性价比 · 二手循环',
    points: [
      <>
        健全<Red>二手商品流通</Red>体系，完善<Red>二手车</Red>流通与回收体系，提高二手市场运营水平，规范<Red>二手交易平台</Red>。
        <Doc>《循环经济发展“十五五”规划》发改委 2026.07.03</Doc>
      </>,
      <>
        推广<Red>商品租赁</Red>等绿色消费模式；以旧换新资金转向精准投放、提高使用效率。
        <Doc>第四批消费品以旧换新资金下达 2026.09</Doc>
      </>,
    ],
  },
  {
    n: '③',
    title: '健康消费刚性',
    points: [
      <>
        扩大<Red>健康</Red>、养老、托育等服务供给并放宽市场准入。
        <Doc>《扩大消费“十五五”规划》2026.07</Doc>
      </>,
      <>
        支持<Red>智能可穿戴</Red>等健康终端购新，推动 <Red>AI 辅助健康管理</Red>、<Red>远程问诊</Red>落地。
        <Doc>《关于加快“人工智能+消费”发展的实施意见》2026.06</Doc>
      </>,
    ],
  },
  {
    n: '④',
    title: 'AI 参与消费决策',
    points: [
      <>
        推动 AI 进入零售、电商、文旅，支持 <Red>AI 终端购新</Red>、<Red>智能体应用</Red>与场景中尝试。
        <Doc>《关于加快“人工智能+消费”发展的实施意见》2026.06</Doc>
      </>,
      <>
        强化<Red>算法治理</Red>、数据安全与消费者权益保护，规范 AI 营销与虚假宣传。
        <Doc>《关于加快“人工智能+消费”发展的实施意见》2026.06</Doc>
      </>,
    ],
  },
];

const FeaturePolicyCard: React.FC<{
  feature: (typeof features)[number];
  delay: string;
}> = ({ feature, delay }) => (
  <article
    className="flex min-h-0 flex-col rounded-lg border border-webank-line bg-white px-2.5 py-2 shadow-card animate-fade-in-up fill-mode-forwards opacity-0"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-2 py-1.5">
      <NumBadge n={feature.n} />
      <h3 className="text-[15px] font-bold leading-tight text-webank-blue">{feature.title}</h3>
    </div>
    <div className="px-1 py-1.5 text-[13px] leading-snug text-slate-700">
      <ul className="space-y-1.5">
        {feature.points.map((p, i) => (
          <Bullet key={i}>{p}</Bullet>
        ))}
      </ul>
    </div>
  </article>
);

export const ContentSlide40: React.FC = () => (
  <BaseContentSlide
    title={<>政策：「十五五」规划定调，支撑新特点带来的消费增长</>}
    subtitle="2026年三季度宏观经济报告"
    cardColumns={2}
  >
    <div className="flex h-full min-h-0 flex-col gap-2">
      {/* 顶部一句话总结 */}
      <section
        className="flex-shrink-0 rounded-xl border border-webank-accent/20 bg-webank-accent/5 px-3 py-2 shadow-card animate-fade-in-up fill-mode-forwards opacity-0"
        style={{ animationDelay: '0ms' }}
      >
        <p className="text-left text-[16px] font-bold leading-relaxed text-black">
        2026 年政策已基本覆盖消费增量方向，政策推动服务消费、旅游强国、健康养老、二手租赁和积极鼓励创造 AI 消费新场景发展。
        </p>
      </section>

      {/* 一个大框：十五五规划为纲 + 四大特点 */}
      <section
        className="flex min-h-0 flex-1 flex-col rounded-xl border border-webank-accent/25 bg-gradient-to-br from-[#eef4fb] via-white to-white p-2.5 shadow-card animate-fade-in-up fill-mode-forwards opacity-0"
        style={{ animationDelay: '0ms' }}
      >
        <div className="flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-1 flex-shrink-0 rounded-sm bg-webank-accent" />
            <h3 className="text-[15px] font-bold leading-tight text-webank-blue">《扩大消费“十五五”规划》</h3>
            <span className="ml-auto text-[10px] leading-tight text-webank-subtext">
              国函〔2026〕66号 · 2026年7月 · 明确消费作为扩大内需的战略基点
            </span>
          </div>
          <div className="mt-1.5 grid grid-cols-6 gap-1">
            {planFacets.map((facet) => (
              <div key={facet.n} className="rounded-md border border-slate-200 bg-white px-1 py-0.5 text-center">
                <span className="text-[12px] font-bold text-webank-accent">{facet.n}</span>
                <span className="ml-0.5 text-[13px] font-semibold leading-tight text-webank-blue">{facet.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 grid min-h-0 flex-1 grid-cols-2 gap-2">
          {features.map((feature, i) => (
            <FeaturePolicyCard key={feature.n} feature={feature} delay={`${120 + i * 120}ms`} />
          ))}
        </div>
      </section>
    </div>
  </BaseContentSlide>
);
