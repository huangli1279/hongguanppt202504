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
    strategy: '买流量：投放 SEM/SEO 广告，让产品在搜索结果里排在前面',
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
    strategy: '做 GEO：改造产品内容与信源，让产品进入 AI 的推荐清单（按效果向服务商付费）',
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
    strategy: '接协议：把价格、库存、评价数据接口化，让 AI 能替客户下单（按交易分佣/付通道费）',
  },
];

const toneStyles = {
  slate: {
    border: 'border-slate-200',
    header: 'bg-slate-50',
    badge: 'bg-slate-200 text-slate-700',
    accent: 'text-slate-700',
    revenue: 'bg-slate-100 text-slate-800',
  },
  blue: {
    border: 'border-blue-200',
    header: 'bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    accent: 'text-blue-700',
    revenue: 'bg-blue-100 text-blue-900',
  },
  indigo: {
    border: 'border-indigo-300',
    header: 'bg-indigo-50',
    badge: 'bg-indigo-600 text-white',
    accent: 'text-indigo-700',
    revenue: 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white',
  },
} as const;

export const ContentSlide41: React.FC = () => (
  <BaseContentSlide title={<>AI参与消费决策——从传统做法到 GEO 与代理式商务</>}>
    <div className="flex h-full min-h-0 flex-col gap-2">
      <div className="shrink-0 rounded-lg border-l-4 border-webank-accent bg-blue-50 px-3 py-2 text-[16px] leading-snug text-webank-blue">
        随着 AI 介入消费决策，企业触达客户的路径正从“搜索排名”转向“AI 引用”：当前靠 GEO 让产品进入 AI 推荐清单；下一步 AI 替消费者下单场景，品牌方要把商品数据改造到 AI 可直接下单。
      </div>
      <div className="mb-1 grid min-h-0 grid-cols-[16%_23%_27%_34%] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[13px] font-semibold text-slate-500">
        <div className="min-w-0">名称</div>
        <div className="min-w-0">
          <p>消费决策流程</p>
          <p className="mt-1 text-[12px] font-medium tracking-tight text-slate-600">找商品 › 比价 › 下单 › 付款</p>
        </div>
        <div className="min-w-0">AI 的角色</div>
        <div className="min-w-0">品牌方应对策略</div>
      </div>
      <div className="grid min-h-0 flex-1 grid-rows-3 gap-2">
        {comparison.map((item) => {
          const styles = toneStyles[item.tone as keyof typeof toneStyles];
          return (
            <article key={item.name} className={`grid min-h-0 grid-cols-[16%_23%_27%_34%] items-center gap-3 rounded-xl border ${styles.border} ${styles.header} px-3 py-2`}>
              <div className="min-w-0">
                <h2 className="text-[17px] font-bold leading-tight text-webank-blue">{item.name}</h2>
                <p className="mt-1 text-[12px] leading-tight text-slate-500">{item.subtitle}</p>
              </div>
              <div>
                <div className="flex items-center justify-start px-1">
                  {item.aiSteps.map((done, stepIndex) => (
                    <React.Fragment key={stepIndex}>
                      <span className={`h-4 w-4 rounded-full border ${done ? 'border-webank-accent bg-webank-accent' : 'border-slate-300 bg-white'}`} />
                      {stepIndex < item.aiSteps.length - 1 && <span className="mx-1 w-6 border-t border-slate-200" />}
                    </React.Fragment>
                  ))}
                </div>
                <p className={`mt-2 text-[12px] font-semibold leading-snug ${styles.accent}`}>{item.involvementLabel}</p>
              </div>
              <p className="text-[14px] leading-snug text-slate-700">{item.role}</p>
              <p className="min-w-0 break-words text-[13px] leading-snug text-slate-700">{item.strategy}</p>
            </article>
          );
        })}
      </div>
    </div>
  </BaseContentSlide>
);
