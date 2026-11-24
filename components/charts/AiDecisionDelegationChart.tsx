import React from 'react';

interface Stage {
  title: string;
  subtitle: string;
  detail: string;
  stat: string;
  desc: string;
  footnote?: string;
}

interface StageGroup {
  title: string;
  stages: Stage[];
}

const stageGroups: StageGroup[] = [
  {
    title: '搜索比价环节',
    stages: [
      { title: '问 AI', subtitle: 'AI当顾问', detail: '购物时主动询问', stat: '79.4%', desc: '主动询问' },
      { title: '比价看评价', subtitle: '汇总口碑 再下单', detail: 'AI影响力超过传统媒体广告', stat: '43.7%', desc: '影响超广告' },
    ],
  },
  {
    title: '购买环节',
    stages: [
      { title: '限额购买', subtitle: 'AI选品 人工付款', detail: '接受 AI 决定买什么、自付', stat: '32%', desc: '可接受', footnote: '海外口径•16国调研' },
      { title: '全自主代理', subtitle: '自主消费', detail: '接受 AI 限额内自主支付', stat: '9%', desc: '可接受', footnote: '海外口径•16国调研' },
    ],
  },
];

const BLUE = '#2f6fb5';
const RED = '#c81e1e';

/** 图1：AI 参与消费决策的委托程度阶梯 */
export const AiDecisionDelegationChart: React.FC = () => (
  <div className="flex h-full w-full flex-col">
    <div className="flex flex-1 min-h-0 flex-col justify-center rounded-lg bg-white p-2.5">
      <div className="grid grid-cols-2 gap-3">
        {stageGroups.map((group) => (
          <div key={group.title} className="rounded-lg border border-[#d8e1ed] bg-[#f8fbff] p-2">
            <h4 className="mb-1.5 text-center text-[11px] font-bold text-webank-blue">{group.title}</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {group.stages.map((s) => (
                <div
                  key={s.title}
                  className="flex h-full flex-col items-center rounded-md border border-[#e3e8ef] bg-white px-1 py-2 text-center shadow-sm"
                >
                  <span className="text-[11px] font-bold" style={{ color: BLUE }}>
                    {s.title}
                  </span>
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
        ))}
      </div>
    </div>

    <p className="mt-2 shrink-0 text-[8px] leading-snug text-slate-500">
      数据：中国中小商业企业协会×立信数据 2026Q2；埃森哲《与 AI 代理对话：品牌价值的新规则》
    </p>
  </div>
);
