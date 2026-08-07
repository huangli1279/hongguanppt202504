import React from 'react';
import {
  Gauge,
  Factory,
  ShoppingBag,
  Building2,
  Ship,
  Landmark,
  Coins,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

const kpis = [
  { label: 'GDP', value: '4.3%', trend: 'down' as const },
  { label: 'PMI', value: '50.3%', trend: 'up' as const },
  { label: 'PPI', value: '+3.6%', trend: 'up' as const },
  { label: 'CPI', value: '+1.0%', trend: 'up' as const },
  { label: '固投', value: '-5.7%', trend: 'down' as const },
  { label: '社零', value: '+1.3%', trend: 'down' as const },
  { label: '进口', value: '+26.6%', trend: 'up' as const },
  { label: '出口', value: '+17.6%', trend: 'up' as const },
  { label: 'M1-M2剪刀差', value: '-4.0%', trend: 'down' as const },
];

type LabelTone = 'blue' | 'green' | 'orange' | 'red';

const labelToneClass: Record<LabelTone, string> = {
  blue: 'text-webank-blue',
  green: 'text-emerald-700',
  orange: 'text-orange-600',
  red: 'text-red-600',
};

const cards: {
  icon: React.ElementType;
  title: string;
  iconClass?: string;
  headerClass?: string;
  iconWrapClass?: string;
  items: { label: string; tone: LabelTone; content: React.ReactNode }[];
}[] = [
  {
    icon: Gauge,
    title: 'GDP：增速回落、平减回正',
    items: [
      {
        label: '增速回落',
        tone: 'blue',
        content: (
          <>
            二季度 GDP 同比 <span className="font-bold text-webank-blue">4.3%</span>，较一季度{' '}
            <span className="font-bold">5.0%</span> 放缓；上半年累计{' '}
            <span className="font-bold text-webank-blue">4.7%</span>，处全年目标区间。
          </>
        ),
      },
      {
        label: '平减回正',
        tone: 'green',
        content: (
          <>
            名义增速 <span className="font-bold text-emerald-700">5.89%</span>，平减指数{' '}
            <span className="font-bold">12</span> 个季度以来首次回正，主因 AI 产业链与能源价格拉动。
          </>
        ),
      },
    ],
  },
  {
    icon: Factory,
    title: '生产：工业平稳、结构分化',
    items: [
      {
        label: '工业平稳',
        tone: 'blue',
        content: (
          <>
            上半年规上工业增加值累计 <span className="font-bold text-webank-blue">5.4%</span>，制造业为主要支撑，出口交货值增{' '}
            <span className="font-bold text-webank-blue">9.7%</span>。
          </>
        ),
      },
      {
        label: '结构分化',
        tone: 'orange',
        content: (
          <>
            采矿业 6 月转负至 <span className="font-bold text-orange-600">-2.2%</span>（煤炭拖累），有色受 AI 扩产驱动二季度增速超{' '}
            <span className="font-bold">3%</span>。
          </>
        ),
      },
    ],
  },
  {
    icon: ShoppingBag,
    title: '消费：总量承压、结构分化',
    items: [
      {
        label: '总量承压',
        tone: 'blue',
        content: (
          <>
            上半年社零累计仅 <span className="font-bold text-webank-blue">1.3%</span>，二季度同比{' '}
            <span className="font-bold">0.2%</span>，5 月首现单月负增长（<span className="font-bold text-orange-600">-0.6%</span>）。
          </>
        ),
      },
      {
        label: '结构分化',
        tone: 'green',
        content: (
          <>
            北上深拖累全国社零，广州一枝独秀；增量向体验文娱、情绪陪伴、健康自我投资集中。
          </>
        ),
      },
    ],
  },
  {
    icon: Building2,
    title: '投资：增速下滑、前置透支',
    items: [
      {
        label: '增速下滑',
        tone: 'blue',
        content: (
          <>
            固投累计 <span className="font-bold text-red-600">-5.7%</span>，新开工项目计划总投资同比{' '}
            <span className="font-bold text-red-600">-29%</span>，到位资金同步走弱。
          </>
        ),
      },
      {
        label: '前置透支',
        tone: 'orange',
        content: (
          <>
            Q1 专项债发行进度达计划 <span className="font-bold">1.4 倍</span>，Q2 明显放缓，年初集中开工对二季度形成透支。
          </>
        ),
      },
    ],
  },
  {
    icon: Ship,
    title: '出口端：韧性超预期',
    items: [
      {
        label: '出口强劲',
        tone: 'blue',
        content: (
          <>
            上半年出口累计 <span className="font-bold text-webank-blue">+17.6%</span>，6 月单月高增{' '}
            <span className="font-bold text-emerald-700">27%</span>，高技术产品出口亮眼。
          </>
        ),
      },
      {
        label: '进口高增',
        tone: 'green',
        content: (
          <>
            能源冲突及 AI 集体涨价拉动，进口累计 <span className="font-bold text-emerald-700">+26.6%</span>，贸易顺差增速转负（<span className="font-bold">-1.25%</span>）。
          </>
        ),
      },
    ],
  },
  {
    icon: Landmark,
    title: '财政：节奏偏慢',
    items: [
      {
        label: '支出放缓',
        tone: 'blue',
        content: (
          <>
            一般公共预算支出累计 <span className="font-bold text-webank-blue">+1.5%</span>，支出进度仅{' '}
            <span className="font-bold text-orange-600">47.76%</span>，距年初目标仍有空间。
          </>
        ),
      },
      {
        label: '结构优化',
        tone: 'green',
        content: (
          <>
            投向重科技民生、轻传统基建；7 月政治局要求加快支出与债券使用，谋划增量政策。
          </>
        ),
      },
    ],
  },
  {
    icon: Coins,
    title: '金融：存款搬家',
    items: [
      {
        label: '存款搬家',
        tone: 'blue',
        content: (
          <>
            二季度居民存款净减 <span className="font-bold text-webank-blue">1049 亿</span>（2018 年来首次），非银存款增{' '}
            <span className="font-bold text-webank-blue">2.62 万亿</span>，趋势延续。
          </>
        ),
      },
      {
        label: '信贷偏弱',
        tone: 'orange',
        content: (
          <>
            Q2 社融增量 <span className="font-bold">6 万亿</span>，人民币贷款同比少增{' '}
            <span className="font-bold text-orange-600">1.18 万亿</span>，主要依赖政府债支撑。
          </>
        ),
      },
    ],
  },
  {
    icon: AlertTriangle,
    title: '潜在风险',
    iconClass: 'text-red-500',
    headerClass: 'from-red-50/80 to-transparent',
    iconWrapClass: 'bg-red-50',
    items: [
      {
        label: '内需不足',
        tone: 'red',
        content: (
          <>
            地产深度调整压制消费，居民资产负债表修复偏慢，收入—支出剪刀差扩大至{' '}
            <span className="font-bold text-red-600">1.5</span> 个百分点。
          </>
        ),
      },
      {
        label: '外需扰动',
        tone: 'orange',
        content: (
          <>
            出口高基数叠加关税反复，下半年中枢或回落至个位数；PMI 7 月已回落至{' '}
            <span className="font-bold text-orange-600">49.2%</span>。
          </>
        ),
      },
    ],
  },
];

export const ContentSlide47: React.FC = () => {
  return (
    <BaseContentSlide
      subtitle="二季度回顾"
      title="动能放缓、向新向优、分化延续、内需偏弱"
      headerClassName="!mb-4"
    >
      <div className="flex flex-col h-full min-h-0 gap-4 pb-4">
        {/* KPI 数据条 */}
        <div className="flex-shrink-0 grid grid-cols-9 gap-2">
          {kpis.map((k, i) => {
            const TrendIcon = k.trend === 'up' ? TrendingUp : TrendingDown;
            const trendColor = k.trend === 'up' ? 'text-emerald-600' : 'text-red-500';
            return (
              <div
                key={k.label}
                className="rounded-card bg-gradient-to-b from-slate-50 to-white border border-webank-line text-center px-2 py-3
                  animate-fade-in-up fill-mode-forwards opacity-0 shadow-sm"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="flex items-center justify-center gap-1">
                  <span className="text-[20px] font-bold tabular-nums leading-none text-webank-blue">
                    {k.value}
                  </span>
                  <TrendIcon size={14} className={`${trendColor} flex-shrink-0`} strokeWidth={2.5} />
                </div>
                <div className="text-[11px] font-medium text-webank-subtext mt-1 leading-tight">{k.label}</div>
              </div>
            );
          })}
        </div>

        {/* 8 大章节卡片：2×4 网格 */}
        <div className="flex-1 min-h-0 grid grid-cols-4 grid-rows-2 gap-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-card border border-webank-line bg-white shadow-card flex flex-col min-h-0 overflow-hidden
                  animate-fade-in-up fill-mode-forwards opacity-0"
                style={{ animationDelay: `${320 + i * 60}ms` }}
              >
                <div className={`flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 bg-gradient-to-r flex-shrink-0 ${card.headerClass ?? 'from-webank-accent/5 to-transparent'}`}>
                  <div className={`flex items-center justify-center w-7 h-7 rounded-md shrink-0 ${card.iconWrapClass ?? 'bg-webank-accent/10'}`}>
                    <Icon size={16} className={card.iconClass ?? 'text-webank-accent'} />
                  </div>
                  <h4 className="text-[14px] font-bold text-webank-blue leading-snug">{card.title}</h4>
                </div>
                <ul className="flex-1 flex flex-col justify-center gap-2.5 px-4 py-3 min-h-0">
                  {card.items.map((item) => (
                    <li key={item.label} className="text-[13px] leading-relaxed text-slate-600">
                      <span className={`font-bold ${labelToneClass[item.tone]}`}>{item.label}：</span>
                      {item.content}
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
