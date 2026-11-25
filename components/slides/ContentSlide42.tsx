import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

const NumBadge: React.FC<{ n: string; tone?: 'blue' | 'amber' }> = ({ n, tone = 'blue' }) => (
  <span
    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-[13px] font-bold text-white ${
      tone === 'amber'
        ? 'bg-gradient-to-br from-amber-400 to-amber-600'
        : 'bg-gradient-to-br from-webank-accent to-webank-blue'
    }`}
  >
    {n}
  </span>
);

const PolicyCard: React.FC<{
  index: string;
  title: string;
  meta: string;
  delay: string;
  children: React.ReactNode;
}> = ({ index, title, meta, delay, children }) => (
  <article
    className="flex min-h-0 flex-col rounded-lg border border-webank-line bg-white px-2.5 py-2 shadow-card animate-fade-in-up fill-mode-forwards opacity-0"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-start gap-2 border-b border-slate-100 bg-slate-50/80 px-2 py-1.5">
      <NumBadge n={index} />
      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-bold leading-tight text-webank-blue">{title}</h3>
        <p className="mt-0.5 text-[11px] leading-tight text-webank-subtext">{meta}</p>
      </div>
    </div>
    <div className="px-1 py-1.5 text-[13px] leading-snug text-slate-700">{children}</div>
  </article>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-1">
    <span className="flex-shrink-0 text-[14px] leading-tight text-webank-accent">•</span>
    <span className="min-w-0">{children}</span>
  </li>
);

const planFacets = [
  { n: '①', t: '服务消费提质惠民' },
  { n: '②', t: '商品消费扩容升级' },
  { n: '③', t: '新业态新模式新场景' },
  { n: '④', t: '提升消费能力' },
  { n: '⑤', t: '优化消费环境' },
  { n: '⑥', t: '完善制度机制' },
];

export const ContentSlide42: React.FC = () => (
  <BaseContentSlide
    title="消费政策：着力扩供给、促升级，进一步释放消费潜力"
    subtitle="2026年三季度宏观经济报告"
    cardColumns={2}
  >
    <div className="flex h-full min-h-0 flex-col gap-2">
      <section
        className="flex-shrink-0 rounded-xl border border-webank-accent/20 bg-webank-accent/5 p-3 shadow-card animate-fade-in-up fill-mode-forwards opacity-0"
        style={{ animationDelay: '0ms' }}
      >
        <div className="flex items-center gap-2">
        </div>
        <p className="mt-1 text-left text-[14px] font-bold leading-relaxed text-black">
          政策既支持汽车、家电等商品更新，也推动二手交易、租赁和AI消费场景发展，进一步丰富消费选择。政策效果最终取决于居民收入预期，以及供给能否满足消费者的实际需求。
        </p>
      </section>

      <section
        className="flex-shrink-0 rounded-xl border border-webank-line bg-gradient-to-br from-[#eef4fb] via-white to-white p-3 shadow-card animate-fade-in-up fill-mode-forwards opacity-0"
        style={{ animationDelay: '0ms' }}
      >
        <div className="flex items-center gap-2">
          <NumBadge n="1" tone="amber" />
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-bold leading-tight text-webank-blue">国务院批复《扩大消费“十五五”规划》</h3>
            <p className="mt-0.5 text-[11px] leading-tight text-webank-subtext">国函〔2026〕66号 · 2026年7月 · 明确消费作为扩大内需的战略基点</p>
          </div>
        </div>
        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {planFacets.map((facet) => (
            <div key={facet.n} className="rounded-md border border-slate-200 bg-white px-1.5 py-1">
              <span className="text-[11px] font-bold text-webank-accent">{facet.n}</span>
              <span className="ml-1 text-[11px] font-semibold leading-tight text-webank-blue">{facet.t}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
        <PolicyCard
          index="2"
          title="《关于推动商品消费扩容升级的实施意见》"
          meta="商务部等7部门 · 2026年8月 · 商消费函〔2026〕389号"
          delay="120ms"
        >
          <ul className="space-y-1">
            <Bullet>稳定汽车、家居、家电等大宗耐用品消费，完善二手车流通与回收体系。</Bullet>
            <Bullet>培育绿色、智能、健康消费，支持国货潮品、首发经济和升级类商品。</Bullet>
          </ul>
        </PolicyCard>

        <PolicyCard
          index="3"
          title="第四批消费品以旧换新资金下达"
          meta="国家发展改革委、财政部 · 2026年9月 · 资金接续支持"
          delay="240ms"
        >
          <ul className="space-y-1">
            <Bullet>继续支持汽车、家电、数码智能产品更新，释放存量替换需求。</Bullet>
            <Bullet>政策重点转向精准投放、严格审核和提高资金使用效率。</Bullet>
          </ul>
        </PolicyCard>

        <PolicyCard
          index="4"
          title="二手交易与租赁：纳入绿色消费政策框架"
          meta="国家层面规划与部门意见 · 2026年 · 循环消费"
          delay="360ms"
        >
          <ul className="space-y-1">
            <Bullet>“十五五”规划明确提高二手商品交易市场和经营企业运营水平，规范二手交易平台。</Bullet>
            <Bullet>商务部等9部门提出推广二手交易、商品租赁等绿色消费模式，满足性价比需求。</Bullet>
          </ul>
        </PolicyCard>

        <PolicyCard
          index="5"
          title="《关于加快“人工智能+消费”发展的实施意见》"
          meta="商务部等8部门 · 2026年6月 · 商建发〔2026〕89号"
          delay="480ms"
        >
          <ul className="space-y-1">
            <Bullet>推动AI进入商品、文旅、养老、零售、电商和物流，形成新产品、新服务、新场景。</Bullet>
            <Bullet>支持AI终端购新、消费场景中试和智能体应用，强化数据安全与消费者保护。</Bullet>
          </ul>
        </PolicyCard>
      </div>
    </div>
  </BaseContentSlide>
);
