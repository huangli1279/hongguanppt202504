import React from 'react';

interface Stage {
  no: string;
  title: string;
  line1: string;
  line2: string;
  stat: string;
  desc: string;
}

const stages: Stage[] = [
  { no: '1', title: '问 AI', line1: 'AI 当顾问', line2: '哪款适合我', stat: '79.4%', desc: '主动问过' },
  { no: '2', title: '比价看评价', line1: '汇总口碑', line2: '算优惠', stat: '43.7%', desc: '影响超广告' },
  { no: '3', title: '照单下单', line1: 'AI 给清单', line2: '人确认后买', stat: '66.7%', desc: '今年用过' },
  { no: '4', title: '限额度买', line1: 'AI 限额度内', line2: '自主决定', stat: '32%', desc: '可接受' },
  { no: '5', title: '全自主代理', line1: '自主补货', line2: '订阅续费', stat: '9%', desc: '可接受' },
];

/** 图1：AI 参与消费决策的委托程度阶梯 */
export const AiDecisionDelegationChart: React.FC = () => (
  <div className="flex h-full w-full flex-col">
    <div className="flex flex-1 min-h-0 flex-col justify-center">
      <div className="grid grid-cols-5 gap-2">
        {stages.map((s) => (
          <div
            key={s.no}
            className="flex flex-col items-center rounded-lg border border-[#c7d9ee] bg-gradient-to-b from-[#eef4fb] to-[#dbe8f7] px-1 py-2 text-center"
          >
            <div className="flex items-center justify-center gap-1">
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-[#3f78b5] text-[9px] font-bold leading-none text-[#3f78b5]">
                {s.no}
              </span>
              <span className="text-[11px] font-bold text-[#1f4e79]">{s.title}</span>
            </div>
            <p className="mt-1 text-[10px] leading-tight text-slate-600">{s.line1}</p>
            <p className="text-[10px] leading-tight text-slate-600">{s.line2}</p>
            <p className="mt-1.5 whitespace-nowrap text-[9px] leading-tight text-slate-500">
              <span className="text-[13px] font-bold text-[#1f6fb8]">{s.stat}</span> {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 px-1">
        <div className="flex items-center justify-between text-[9px] text-slate-600">
          <span>人保留全部决策</span>
          <span>委托程度递增</span>
          <span>AI决策权最大</span>
        </div>
        <div className="relative mt-1 h-[1.5px] w-full bg-slate-500">
          <span className="absolute -right-0.5 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-l-[7px] border-y-transparent border-l-slate-500" />
        </div>
      </div>
    </div>

    <p className="mt-2 shrink-0 text-[8px] leading-snug text-slate-500">
      数据：①中国中小商业企业协会×立信数据 2026Q2（购物时主动咨询AI）②同上（对决策的影响首次超过广告）③中国青年报社调
    </p>
  </div>
);
