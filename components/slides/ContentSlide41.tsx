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
        企业的赚钱方式随 AI 介入深度而变：国内 GEO 刚起步，代理式商务尚未成型。
      </div>
      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
        <table className="h-full w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-slate-50 text-left text-[14px] font-semibold text-webank-blue">
              <th className="w-[18%] border-b border-slate-200 px-3 py-2">名称</th>
              <th className="w-[27%] border-b border-slate-200 px-3 py-2">消费决策流程</th>
              <th className="w-[27%] border-b border-slate-200 px-3 py-2">AI 的角色</th>
              <th className="w-[28%] border-b border-slate-200 px-3 py-2">品牌方应对策略</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((item) => {
              const styles = toneStyles[item.tone as keyof typeof toneStyles];
              return (
                <tr key={item.name} className="h-1/3 align-middle">
                  <th className={`border-b ${styles.border} px-3 py-3 text-left`}>
                    <p className="text-[17px] font-bold leading-tight text-webank-blue">{item.name}</p>
                    <p className="mt-1 text-[12px] leading-tight text-slate-500">{item.subtitle}</p>
                  </th>
                  <td className="border-b border-slate-100 px-3 py-3">
                    <p className="mb-2 text-[13px] font-semibold text-slate-600">找商品 › 比价 › 下单 › 付款</p>
                    <div className="flex items-center justify-between px-1">
                      {item.aiSteps.map((done, stepIndex) => (
                        <React.Fragment key={stepIndex}>
                          <span className={`h-4 w-4 rounded-full border ${done ? 'border-webank-accent bg-webank-accent' : 'border-slate-300 bg-white'}`} />
                          {stepIndex < item.aiSteps.length - 1 && <span className="mx-1 flex-1 border-t border-slate-200" />}
                        </React.Fragment>
                      ))}
                    </div>
                    <p className={`mt-2 text-[12px] font-semibold leading-snug ${styles.accent}`}>{item.involvementLabel}</p>
                  </td>
                  <td className="border-b border-slate-100 px-3 py-3 text-[14px] leading-snug text-slate-700">{item.role}</td>
                  <td className="border-b border-slate-100 px-3 py-3 text-[14px] leading-snug text-slate-700">{item.strategy}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </BaseContentSlide>
);
