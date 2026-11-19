import React from 'react';

interface Stage {
  no: string;
  title: string;
  subtitle: string;
  detail: string;
  stat: string;
  desc: string;
  footnote?: string;
}

const stages: Stage[] = [
  { no: '1', title: '问 AI', subtitle: 'AI当顾问', detail: '购物时主动询问', stat: '79.4%', desc: '主动询问' },
  { no: '2', title: '比价看评价', subtitle: '汇总口碑 再下单', detail: 'AI影响力超过传统媒体广告', stat: '43.7%', desc: '影响超广告' },
  { no: '3', title: '照单下单', subtitle: 'AI给清单 人辅以购买', detail: '双11期间用 AI 辅助购物', stat: '66.7%', desc: '双11期间' },
  { no: '4', title: '限额购买', subtitle: 'AI选品 人工付款', detail: '接受 AI 决定买什么、自付', stat: '32%', desc: '可接受', footnote: '海外口径•16国调研' },
  { no: '5', title: '全自主代理', subtitle: '自主消费', detail: '接受 AI 限额内自主支付', stat: '9%', desc: '可接受', footnote: '海外口径•16国调研' },
];

const BLUE = '#2f6fb5';
const RED = '#c81e1e';

/** 图1：AI 参与消费决策的委托程度阶梯 */
export const AiDecisionDelegationChart: React.FC = () => (
  <div className="flex h-full w-full flex-col">
    <div className="flex flex-1 min-h-0 flex-col justify-center rounded-lg bg-white p-2.5">
      <div className="mb-2 px-1">
        <div className="flex items-center justify-between text-[9px] text-slate-500">
          <span>人保留全部决策</span>
          <span>委托程度递增</span>
          <span>AI决策权最大</span>
        </div>
        <div className="relative mt-1 h-[1.5px] w-full bg-slate-400">
          <span className="absolute -right-0.5 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-l-[7px] border-y-transparent border-l-slate-400" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {stages.map((s) => (
          <div
            key={s.no}
            className="flex h-full flex-col items-center rounded-lg border border-[#e3e8ef] bg-white px-1 py-2 text-center shadow-sm"
          >
            <div className="flex items-center justify-center gap-1">
              <span
                className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border text-[9px] font-bold leading-none"
                style={{ borderColor: BLUE, color: BLUE }}
              >
                {s.no}
              </span>
              <span className="text-[11px] font-bold" style={{ color: BLUE }}>
                {s.title}
              </span>
            </div>
            <p className="mt-1 text-[10px] font-semibold leading-tight text-[#1f3f66]">{s.subtitle}</p>
            <p className="mt-0.5 text-[9px] leading-tight text-slate-500">{s.detail}</p>
            <p className="mt-1.5 whitespace-nowrap text-[17px] font-bold leading-none" style={{ color: RED }}>
              {s.stat}
            </p>
            <p className="mt-0.5 text-[9px] leading-tight text-slate-500">{s.desc}</p>
            {s.footnote && (
              <p className="mt-0.5 text-[8px] leading-tight" style={{ color: RED }}>
                {s.footnote}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>

    <p className="mt-2 shrink-0 text-[8px] leading-snug text-slate-500">
      数据：①②中国中小商业企业协会×立信数据 2026Q2；③中国青年报社调；④⑤海外口径·16国调研
    </p>
  </div>
);
