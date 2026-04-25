import React from 'react';
import {
  Target,
  Factory,
  ShoppingBag,
  TrendingUp,
  Ship,
  Landmark,
  Banknote,
  AlertTriangle,
} from 'lucide-react';
import { BaseContentSlide } from './BaseContentSlide';

const kpis = [
  { label: 'GDP', value: '+5.0%', tone: 'up' },
  { label: 'PMI', value: '50.4%', tone: 'up' },
  { label: 'PPI', value: '0.5%', tone: 'up' },
  { label: 'CPI', value: '0.9%', tone: 'flat' },
  { label: '固投', value: '+1.7%', tone: 'flat' },
  { label: '社零', value: '+1.7%', tone: 'flat' },
  { label: '进口', value: '+22.7%', tone: 'up' },
  { label: '出口', value: '+14.7%', tone: 'up' },
  { label: 'M1-M2 剪刀差', value: '-3.4%', tone: 'down' },
] as const;

const toneColor = {
  up: 'text-emerald-600',
  down: 'text-rose-500',
  flat: 'text-slate-500',
} as const;

const toneArrow = { up: '↗', down: '↘', flat: '→' } as const;

type Item = { label: string; text: React.ReactNode; labelColor?: string };

type Block = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  iconColor: string;
  items: Item[];
};

const blocks: Block[] = [
  {
    icon: Target,
    title: 'GDP：开局良好',
    iconColor: 'text-webank-lightBlue',
    items: [
      { label: '总量稳中有进', text: <>同比 <b className="text-webank-blue">+5.0%</b>，名义与实际 GDP 增速差显著收窄，"温差"改善</>, labelColor: 'text-webank-accent' },
      { label: '结构分化', text: '服务业贡献率 63.2% 压舱；高技术与装备制造强劲，地产仍在寻底', labelColor: 'text-emerald-600' },
    ],
  },
  {
    icon: Factory,
    title: '生产端：景气回升',
    iconColor: 'text-webank-lightBlue',
    items: [
      { label: '工业稳健', text: '规上工业增加值 +6.1%，出口交货值 +7.1%，外需推动持续增强', labelColor: 'text-webank-accent' },
      { label: 'PMI 扩张', text: <>3 月制造业 PMI 跃升至 <b className="text-webank-blue">50.4%</b>，大型企业亮眼，中小微仍待提升</>, labelColor: 'text-emerald-600' },
      { label: '输入通胀', text: '1-2 月工业利润 +15.2%，中下游成本压力上升', labelColor: 'text-amber-600' },
    ],
  },
  {
    icon: ShoppingBag,
    title: '消费端：温和修复',
    iconColor: 'text-webank-lightBlue',
    items: [
      { label: '社零 +2.4%', text: '服务消费 +5.5% 快于商品消费 +2.2%', labelColor: 'text-webank-accent' },
      { label: '两新政策', text: '"以旧换新"扩围至 AI 手机、智能眼镜，通讯器材类高增', labelColor: 'text-emerald-600' },
      { label: '物价信心', text: 'CPI +0.9%、核心 CPI +1.2%；信心指数升至 91.60，仍偏防御性储蓄', labelColor: 'text-amber-600' },
    ],
  },
  {
    icon: TrendingUp,
    title: '投资端：政策托底',
    iconColor: 'text-webank-lightBlue',
    items: [
      { label: '固投 +1.7%', text: <>基建 <b className="text-webank-blue">+8.9%</b> 绝对托底，"两重"建设推进</>, labelColor: 'text-webank-accent' },
      { label: '制造业提速', text: '制造业 +4.1%，高技术制造业 +5.2%，新动能成新引擎', labelColor: 'text-emerald-600' },
      { label: '地产承压', text: <>房地产开发投资 <b className="text-rose-500">-11.2%</b>，供需两端疲软</>, labelColor: 'text-rose-500' },
    ],
  },
  {
    icon: Ship,
    title: '出口端：超预期开局',
    iconColor: 'text-webank-lightBlue',
    items: [
      { label: '进出口齐升', text: <>出口 <b className="text-webank-blue">+14.7%</b>、进口 +22.7%，"抢出口"显著</>, labelColor: 'text-webank-accent' },
      { label: '结构优化', text: '集成电路、汽车、船舶量价齐升', labelColor: 'text-emerald-600' },
      { label: '地缘韧性', text: '对美下降，对东盟、非洲、拉美高速增长，对冲压力', labelColor: 'text-amber-600' },
    ],
  },
  {
    icon: Landmark,
    title: '财政：前置发力',
    iconColor: 'text-webank-lightBlue',
    items: [
      { label: '收入 +2.4%', text: '税收与非税收入双增，增值税、进口税收较快', labelColor: 'text-webank-accent' },
      { label: '支出 +2.6%', text: '支出进度近 5 年最快，民生领域增幅领跑', labelColor: 'text-emerald-600' },
    ],
  },
  {
    icon: Banknote,
    title: '金融：存款搬家',
    iconColor: 'text-webank-lightBlue',
    items: [
      { label: '社融平稳', text: <>新增社融累计 <b className="text-webank-blue">14.34 万亿</b>，企业债融资为亮点</>, labelColor: 'text-webank-accent' },
      { label: '居民信贷弱', text: '居民贷款同比少增，消费贷弱于经营贷', labelColor: 'text-emerald-600' },
      { label: '存款搬家', text: '居民存款少增、非银存款多增趋势加速', labelColor: 'text-amber-600' },
    ],
  },
  {
    icon: AlertTriangle,
    title: '潜在风险',
    iconColor: 'text-rose-500',
    items: [
      { label: '地缘能源', text: '美以伊冲突推升油价、抬升 PPI，挤压中下游盈利', labelColor: 'text-rose-500' },
      { label: '贸易收缩', text: 'WTO 下调 2026 全球贸易增速至 1.9%，Q2 出口或回落', labelColor: 'text-amber-600' },
      { label: '内需乏力', text: '高储蓄、低信贷，地产投资 -10% 左右筑底', labelColor: 'text-rose-500' },
      { label: '价格传导', text: 'PPI 上行但 CPI 温和，制造业盈利分化', labelColor: 'text-amber-600' },
    ],
  },
];

export const ContentSlide38: React.FC = () => {
  return (
    <BaseContentSlide title="2026 年一季度宏观经济总结" subtitle="一季度回顾">
      <div className="flex flex-col h-full gap-3">
        {/* KPI 指标条 */}
        <div className="grid grid-cols-9 gap-2 flex-shrink-0">
          {kpis.map((k, i) => (
            <div
              key={k.label}
              className="bg-white border border-slate-200 rounded-md px-2 py-2 text-center shadow-sm opacity-0 animate-fade-in-up fill-mode-forwards"
              style={{ animationDelay: `${80 + i * 50}ms` }}
            >
              <div className="text-[10px] text-webank-subtext mb-1 truncate">{k.label}</div>
              <div className="text-lg font-bold text-webank-blue leading-none font-serif">{k.value}</div>
              <div className={`text-[10px] mt-0.5 ${toneColor[k.tone]}`}>{toneArrow[k.tone]}</div>
            </div>
          ))}
        </div>

        {/* 八大主题卡片 4×2 */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 flex-1 min-h-0">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-white border border-slate-200 rounded-md px-3 py-2.5 flex flex-col gap-1.5 shadow-sm hover:shadow-md hover:border-webank-lightBlue/60 transition-all opacity-0 animate-fade-in-up fill-mode-forwards"
                style={{ animationDelay: `${500 + i * 70}ms` }}
              >
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                  <Icon size={16} className={b.iconColor} />
                  <h3 className="text-sm font-bold text-webank-blue">{b.title}</h3>
                </div>
                <ul className="flex flex-col gap-1 text-[11px] leading-snug text-webank-text">
                  {b.items.map((it) => (
                    <li key={it.label}>
                      <span className={`font-bold mr-1 ${it.labelColor || 'text-webank-accent'}`}>
                        {it.label}：
                      </span>
                      <span>{it.text}</span>
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
