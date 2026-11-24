import React from 'react';

interface FunnelStage {
  label: string;
  value: number;
  note: string;
}

const stages: FunnelStage[] = [
  { label: '独立比价', value: 74, note: '乐于委托，无需监督' },
  { label: '研究 / 查找产品', value: 69, note: '无需监督' },
  { label: '汇总评论', value: 68, note: '无需监督' },
  { label: '个性化推荐', value: 64, note: '' },
  { label: '建清单 / 加购物车', value: 49, note: '开始腰斩' },
  { label: '每次购买需本人批准后支付', value: 59, note: '接受代理准备，本人确认' },
  { label: 'AI 自主完成购买', value: 21, note: '仅少数直接允许' },
];

const BLUE = '#2f6fb5';
const RED = '#c81e1e';

export const AiDecisionDelegationChart: React.FC = () => (
  <div className="flex h-full w-full flex-col">
    <div className="flex min-h-0 flex-1 flex-col rounded-lg bg-white p-2">
      <div className="mb-1.5 px-1">
        <h3 className="text-[12px] font-bold text-webank-blue">AI 参与消费决策各环节的接受度</h3>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-1">
        {stages.map((stage) => (
          <div key={stage.label} className="flex min-h-0 items-center gap-1.5">
            <div className="w-[31%] shrink-0 text-right text-[9px] leading-tight text-slate-600">{stage.label}</div>
            <div className="flex min-w-0 flex-1 items-center">
              <div
                className="relative flex h-[22px] items-center justify-end rounded-[2px] px-1.5 transition-all"
                style={{ width: `${stage.value}%`, backgroundColor: stage.value <= 30 ? '#dce8f5' : '#a9c3e2' }}
              >
                <span className="text-[11px] font-bold tabular-nums" style={{ color: stage.value <= 30 ? RED : BLUE }}>
                  {stage.value}%
                </span>
              </div>
              {stage.note && <span className="ml-1.5 min-w-0 truncate text-[8px] text-slate-400">{stage.note}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
    <p className="mt-1.5 shrink-0 text-[8px] leading-snug text-slate-500">
      数据来源：Global Payments Agentic Commerce Report 2026；两轮合计 16,027 名消费者（AI 购物持开放态度的消费者），7 个市场（美、英、法、巴西、中国、新加坡、澳）。
    </p>
  </div>
);
