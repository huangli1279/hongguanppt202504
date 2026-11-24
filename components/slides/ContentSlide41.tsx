import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

const comparison = [
  {
    name: '传统做法',
    subtitle: 'SEO / SEM · 人主导',
    tone: 'slate',
    aiSteps: [false, false, false, false],
    involvementLabel: '四步均由人完成',
    role: '人自己找信息、比价并购买，AI 不参与。',
    revenue: '搜索广告',
    revenueDetail: '通过 SEO / SEM 抢占搜索流量',
    domestic: '百度推广、淘宝 / 天猫、京东',
    global: 'Google Ads、Amazon',
  },
  {
    name: 'GEO 生成式引擎优化',
    subtitle: 'AI 做推荐 · 人来决策',
    tone: 'blue',
    aiSteps: [true, true, false, false],
    involvementLabel: 'AI 参与找商品与比价，人完成下单付款',
    role: 'AI 整理清单、引用品牌；消费者仍自行选择和下单。',
    revenue: 'AI 引用与推荐',
    revenueDetail: 'GEO 服务、按效果付费',
    domestic: '智推时代、蓝色光标、新榜智汇、迈富时',
    global: 'Profound、Scrum AI；ChatGPT / Perplexity',
  },
  {
    name: 'Agentic Commerce',
    subtitle: 'AI 代执行 · 代理式商务',
    tone: 'indigo',
    aiSteps: [true, true, true, true],
    involvementLabel: 'AI 执行交易全流程',
    role: 'AI 比价、叠券、下单和付款，用户授权后由代理完成交易。',
    revenue: '交易佣金与抽成',
    revenueDetail: '被代理优先路由；费率仍在演进',
    domestic: '淘宝 / 京东 AI 导购、美团（探索中）',
    global: 'Shopify、Amazon、Walmart、Google、OpenAI、Visa',
  },
];

const toneStyles = {
  slate: {
    border: 'border-slate-200',
    header: 'bg-slate-50',
    badge: 'bg-slate-200 text-slate-700',
    accent: 'text-slate-700',
    revenue: 'bg-slate-100 text-slate-800',
    step: 'border-slate-300 bg-white text-slate-600',
  },
  blue: {
    border: 'border-blue-200',
    header: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    accent: 'text-blue-700',
    revenue: 'bg-blue-100 text-blue-900',
    step: 'border-blue-200 bg-blue-50 text-blue-700',
  },
  indigo: {
    border: 'border-indigo-300',
    header: 'bg-indigo-50',
    badge: 'bg-indigo-600 text-white',
    accent: 'text-indigo-700',
    revenue: 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white',
    step: 'border-indigo-300 bg-indigo-100 text-indigo-800',
  },
} as const;

const processSteps = ['找商品', '比价', '下单', '付款'];

export const ContentSlide41: React.FC = () => (
  <BaseContentSlide title={<>AI参与消费决策——从传统做法到 GEO 与代理式商务</>}>
    <div className="flex h-full min-h-0 flex-col gap-2">
      <div className="shrink-0 rounded-lg border-l-4 border-webank-accent bg-blue-50 px-3 py-2 text-[16px] leading-snug text-webank-blue">
        企业的赚钱方式随 AI 介入深度而变：国内 GEO 刚起步，代理式商务尚未成型。
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-3">
        {comparison.map((item, index) => {
          const styles = toneStyles[item.tone as keyof typeof toneStyles];
          return (
            <article key={item.name} className={`flex min-h-0 flex-col overflow-hidden rounded-xl border ${styles.border} bg-white shadow-card`}>
              <header className={`min-h-[70px] ${styles.header} px-3 py-2`}>
                <div className="flex items-center gap-2">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${styles.badge}`}>{index + 1}</span>
                  <div className="min-w-0">
                    <h2 className="text-[19px] font-bold leading-tight text-webank-blue">{item.name}</h2>
                    <p className="mt-0.5 text-[13px] leading-tight text-slate-500">{item.subtitle}</p>
                  </div>
                </div>
              </header>
              <div className="flex min-h-0 flex-1 flex-col divide-y divide-slate-100 px-3">
                <section className="min-h-[112px] py-2">
                  <p className="mb-1 text-[12px] font-semibold tracking-wide text-slate-400">消费决策流程</p>
                  <div className="flex items-start gap-1">
                    {processSteps.map((step, stepIndex) => {
                      const done = item.aiSteps[stepIndex];
                      return (
                        <React.Fragment key={step}>
                          <div className="flex flex-1 flex-col items-center gap-1">
                            <span className="text-center text-[13px] font-semibold leading-tight text-slate-600">{step}</span>
                            <span
                              className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
                                done
                                  ? 'border-webank-accent bg-webank-accent'
                                  : 'border-slate-300 bg-white'
                              }`}
                            />
                          </div>
                          {stepIndex < processSteps.length - 1 && <span className="mt-[19px] text-[12px] text-slate-300">›</span>}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <p className={`mt-1 text-[13px] font-semibold ${styles.accent}`}>{item.involvementLabel}</p>
                </section>
                <section className="min-h-[106px] py-2">
                  <p className="mb-1 text-[12px] font-semibold tracking-wide text-slate-400">AI 的角色</p>
                  <p className="text-[15px] leading-snug text-slate-700">{item.role}</p>
                </section>
                <section className="min-h-[102px] py-2">
                  <p className="mb-1 text-[11px] font-semibold tracking-wide text-slate-400">企业怎么赚钱</p>
                  <div className={`rounded-md px-2 py-1.5 ${styles.revenue}`}>
                    <p className="text-[15px] font-bold leading-tight">{item.revenue}</p>
                    <p className="mt-0.5 text-[12px] leading-snug opacity-80">{item.revenueDetail}</p>
                  </div>
                </section>
                <section className="flex-1 py-2">
                  <p className="mb-1 text-[11px] font-semibold tracking-wide text-slate-400">代表企业</p>
                  <p className="text-[13px] leading-snug text-slate-700"><span className="font-semibold text-slate-500">国内</span>　{item.domestic}</p>
                  <p className="mt-1 text-[13px] leading-snug text-slate-700"><span className="font-semibold text-slate-500">海外</span>　{item.global}</p>
                </section>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </BaseContentSlide>
);
