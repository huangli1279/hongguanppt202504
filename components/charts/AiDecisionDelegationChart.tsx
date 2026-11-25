import React from 'react';

interface FunnelStage {
  label: string;
  value: number;
  note: string;
}

interface StageGroup {
  title: string;
  subtitle: string;
  stages: FunnelStage[];
}

const groups: StageGroup[] = [
  {
    title: '购前研究',
    subtitle: '信息搜集与决策辅助',
    stages: [
      { label: '独立比价', value: 74, note: '乐于委托，无需监督' },
      { label: '研究 / 查找产品', value: 69, note: '无需监督' },
      { label: '汇总评论', value: 68, note: '无需监督' },
      { label: '个性化推荐', value: 64, note: '' },
    ],
  },
  {
    title: '交易执行',
    subtitle: 'AI 直接操作与成交',
    stages: [
      { label: '建清单 / 加购物车', value: 49, note: '开始腰斩' },
      { label: 'AI 自主完成购买', value: 21, note: '仅少数直接允许' },
    ],
  },
];

const BLUE = '#2f6fb5';
const RED = '#c81e1e';

const StageRow: React.FC<{ stage: FunnelStage }> = ({ stage }) => {
  const low = stage.value <= 30;
  return (
    <div className="flex min-h-0 items-center gap-1.5">
      <div className="w-[30%] shrink-0 text-right text-[10px] leading-tight text-slate-600">{stage.label}</div>
      <div className="flex min-w-0 flex-1 items-center">
        <div
          className="relative flex h-[20px] items-center justify-end rounded-[2px] px-1.5"
          style={{ width: `${stage.value}%`, backgroundColor: low ? '#dce8f5' : '#a9c3e2' }}
        >
          <span className="text-[11px] font-bold tabular-nums" style={{ color: low ? RED : BLUE }}>
            {stage.value}%
          </span>
        </div>
        {stage.note && <span className="ml-1.5 min-w-0 truncate text-[8px] text-slate-400">{stage.note}</span>}
      </div>
    </div>
  );
};

const FlowArrow: React.FC = () => (
  <div className="flex shrink-0 items-center justify-center py-0.5">
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M9 1.5v13" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M4 10.5 9 15.5l5-5"
        fill="none"
        stroke="#64748b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const GroupHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-1 flex items-center gap-1.5">
    <span className="rounded-[2px] bg-webank-blue px-1.5 py-[1px] text-[9px] font-bold text-white">{title}</span>
    <span className="text-[8px] text-slate-400">{subtitle}</span>
  </div>
);

export const AiDecisionDelegationChart: React.FC = () => (
  <div className="flex h-full w-full flex-col">
    <div className="flex min-h-0 flex-1 flex-col rounded-lg bg-white p-2">
      <h3 className="mb-1.5 shrink-0 px-1 text-[13px] font-bold text-webank-blue">AI 参与消费决策各环节的接受度</h3>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-1">
        <section className="shrink-0 rounded-md bg-slate-50 px-2 py-1.5">
          <GroupHeader title={groups[0].title} subtitle={groups[0].subtitle} />
          <div className="space-y-1">
            {groups[0].stages.map((stage) => (
              <StageRow key={stage.label} stage={stage} />
            ))}
          </div>
        </section>

        <FlowArrow />

        <section className="shrink-0 rounded-md border-2 border-dashed border-blue-300 bg-blue-50/60 px-2 py-1.5">
          <GroupHeader title={groups[1].title} subtitle={groups[1].subtitle} />
          <div className="space-y-1">
            {groups[1].stages.map((stage) => (
              <StageRow key={stage.label} stage={stage} />
            ))}
          </div>
        </section>
      </div>
    </div>
    <p className="mt-1.5 shrink-0 text-[9px] leading-snug text-slate-500">
      数据来源：Global Payments Agentic Commerce Report 2026；两轮合计 16,027 名消费者（AI 购物持开放态度的消费者），7 个市场（美、英、法、巴西、中国、新加坡、澳）。
    </p>
  </div>
);
