import React from 'react';
import {
  Gauge,
  TrendingDown,
  BarChart2,
  Coins,
  Compass,
  AlertTriangle,
} from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

const kpis = [
  { label: 'Q2 GDP', value: '4.3%', tone: 'neutral' as const },
  { label: '上半年累计', value: '4.7%', tone: 'positive' as const },
  { label: '社零累计', value: '+1.3%', tone: 'neutral' as const },
  { label: '固投累计', value: '-5.7%', tone: 'negative' as const },
  { label: '出口累计', value: '+17.6%', tone: 'positive' as const },
  { label: 'PPI 同比', value: '+3.6%', tone: 'positive' as const },
  { label: 'CPI 同比', value: '+1.0%', tone: 'neutral' as const },
  { label: '财政收入', value: '+4.7%', tone: 'positive' as const },
];

const cards = [
  {
    icon: Gauge,
    title: '增长节奏',
    items: [
      { k: 'Q2 / H1', v: '4.3% / 4.7%' },
      { k: '平减指数', v: '12 季首正' },
      { k: '全年预测', v: '4.5%–4.8%' },
    ],
  },
  {
    icon: TrendingDown,
    title: '需求分化',
    items: [
      { k: '出口', v: '+17.6%', tone: 'positive' as const },
      { k: '固投', v: '-5.7%', tone: 'negative' as const },
      { k: '社零', v: '+1.3%' },
    ],
  },
  {
    icon: BarChart2,
    title: '结构亮点',
    items: [
      { k: '高技术制造', v: '>13%' },
      { k: '集成电路出口', v: '+96%', tone: 'positive' as const },
      { k: '新能源车出口', v: '翻倍', tone: 'positive' as const },
    ],
  },
  {
    icon: Coins,
    title: '资金与政策',
    items: [
      { k: '中长期贷款', v: '少增≈1.5万亿', tone: 'negative' as const },
      { k: '支出进度', v: '仅 47.8%' },
      { k: '6月专项债', v: '5716 亿' },
    ],
  },
  {
    icon: Compass,
    title: '下半年预测',
    items: [
      { k: '增长路径', v: 'Q3 起逐季回升' },
      { k: '出口中枢', v: '回落至个位数' },
      { k: '政策窗口', v: 'Q3 实物工作量' },
    ],
  },
  {
    icon: AlertTriangle,
    title: '主要风险',
    items: [
      { k: '地产居民', v: '资产负债表修复偏慢' },
      { k: '外需扰动', v: '高基数 + 关税反复' },
      { k: 'AI 兑现', v: '周期约 10 年+' },
    ],
  },
];

const toneValueClass = {
  positive: 'text-webank-accent',
  negative: 'text-red-600',
  neutral: 'text-webank-blue',
} as const;

export const ContentSlide47: React.FC = () => {
  return (
    <BaseContentSlide title="二季度总结：K型分化主导下的动能切换" headerClassName="!mb-3">
      <div className="flex flex-col h-full min-h-0 gap-3.5 pb-6">

        {/* KPI 数据条 */}
        <div className="flex-shrink-0 grid grid-cols-8 gap-2">
          {kpis.map((k, i) => (
            <div
              key={k.label}
              className="rounded-card bg-slate-50 border border-webank-line text-center px-2 py-2.5
                animate-fade-in-up fill-mode-forwards opacity-0"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className={`text-[18px] font-bold tabular-nums leading-tight ${toneValueClass[k.tone]}`}>
                {k.value}
              </div>
              <div className="text-[10px] text-webank-subtext mt-0.5 leading-tight">{k.label}</div>
            </div>
          ))}
        </div>

        {/* 等大卡片：关键数据与预测 */}
        <div className="flex-1 min-h-0 grid grid-cols-3 grid-rows-2 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-card border border-webank-line bg-white shadow-card px-4 py-3.5 flex flex-col
                  animate-fade-in-up fill-mode-forwards opacity-0"
                style={{ animationDelay: `${320 + i * 70}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={15} className="text-webank-accent flex-shrink-0" />
                  <h4 className="text-[14px] font-bold text-webank-blue">{card.title}</h4>
                </div>
                <ul className="flex-1 flex flex-col justify-center gap-2.5">
                  {card.items.map((item) => (
                    <li key={item.k} className="flex items-baseline justify-between gap-3">
                      <span className="text-[12px] text-webank-subtext shrink-0">{item.k}</span>
                      <span
                        className={`text-[13px] font-bold tabular-nums text-right leading-tight ${
                          item.tone ? toneValueClass[item.tone] : 'text-webank-blue'
                        }`}
                      >
                        {item.v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </BaseContentSlide>
  );
};
