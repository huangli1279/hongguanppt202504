import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  ArrowLeftRight,
  Building2,
  Factory,
  Landmark,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

interface SummaryCardProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  metric: string;
  metricLabel: string;
  detail: string;
  tone?: 'blue' | 'amber' | 'green' | 'red';
  delay: string;
}

const toneStyles = {
  blue: {
    icon: 'bg-blue-50 text-webank-blue',
    metric: 'text-webank-blue',
    border: 'border-webank-accent/30',
  },
  amber: {
    icon: 'bg-amber-50 text-amber-600',
    metric: 'text-amber-600',
    border: 'border-amber-200',
  },
  green: {
    icon: 'bg-emerald-50 text-emerald-600',
    metric: 'text-emerald-600',
    border: 'border-emerald-200',
  },
  red: {
    icon: 'bg-red-50 text-red-600',
    metric: 'text-red-600',
    border: 'border-red-200',
  },
};

const SummaryCard: React.FC<SummaryCardProps> = ({
  icon: Icon,
  eyebrow,
  title,
  metric,
  metricLabel,
  detail,
  tone = 'blue',
  delay,
}) => {
  const styles = toneStyles[tone];

  return (
    <article
      className={`flex min-h-0 flex-col rounded-xl border bg-white p-4 shadow-card animate-fade-in-up fill-mode-forwards opacity-0 ${styles.border}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold tracking-[0.14em] text-webank-subtext uppercase">{eyebrow}</p>
          <h2 className="mt-1 text-[15px] font-bold leading-tight text-webank-blue">{title}</h2>
        </div>
        <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${styles.icon}`}>
          <Icon size={19} strokeWidth={2.2} />
        </div>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <strong className={`text-[26px] font-bold leading-none tabular-nums ${styles.metric}`}>{metric}</strong>
        <span className="text-[11px] text-webank-subtext">{metricLabel}</span>
      </div>
      <p className="mt-2 text-[10.5px] leading-relaxed text-slate-600">{detail}</p>
    </article>
  );
};

export const ContentSlide44: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          三季度重要指标总结：增长韧性延续，
          <span className="text-webank-accent">结构升级与政策发力</span>
          形成主线
        </>
      }
      subtitle="2026年三季度宏观经济报告 · 结论页"
      headerClassName="!mb-4"
      className="!p-8 sm:!p-10"
    >
      <div className="flex h-full min-h-0 flex-col gap-3">
        <div className="grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-2.5">
          <SummaryCard
            icon={TrendingUp}
            eyebrow="增长"
            title="经济增速回升"
            metric="4.5%"
            metricLabel="Q3实际GDP同比"
            detail="较二季度回升0.2个百分点；前三季度累计增长4.6%，处于全年目标区间。"
            tone="blue"
            delay="0ms"
          />
          <SummaryCard
            icon={Factory}
            eyebrow="生产"
            title="新动能加速释放"
            metric="16.2%"
            metricLabel="高技术制造业Q3同比"
            detail="电子行业增长17.5%，计算机通信产能利用率达80.3%，新旧动能分化延续。"
            tone="green"
            delay="100ms"
          />
          <SummaryCard
            icon={ShoppingCart}
            eyebrow="消费"
            title="促消费政策加码"
            metric="1.55万亿"
            metricLabel="1—8月以旧换新销售额"
            detail="惠及2.08亿人次；服务消费、耐用品升级与居民消费能力成为政策抓手。"
            tone="amber"
            delay="200ms"
          />
          <SummaryCard
            icon={ArrowLeftRight}
            eyebrow="外贸"
            title="出口保持韧性"
            metric="36.3%"
            metricLabel="9月出口同比"
            detail="出口增速在三季度继续抬升，对经济增长形成支撑；全球需求、关税与地缘风险仍需关注。"
            tone="blue"
            delay="300ms"
          />
          <SummaryCard
            icon={Landmark}
            eyebrow="价格与金融"
            title="价格信号改善"
            metric="1.44%"
            metricLabel="Q3 GDP平减指数"
            detail="名义增速6%，平减指数连续两个季度回正；政策仍需兼顾需求修复与信用扩张。"
            tone="green"
            delay="400ms"
          />
          <SummaryCard
            icon={Sparkles}
            eyebrow="新产业"
            title="AI景气仍在扩散"
            metric="20%"
            metricLabel="美国企业AI渗透率"
            detail="需求尚未触及历史拐点，模型与算力产业链保持活跃，但应用层估值分化加剧。"
            tone="amber"
            delay="500ms"
          />
          <SummaryCard
            icon={Building2}
            eyebrow="地产与投资"
            title="地产仍是修复短板"
            metric="托底"
            metricLabel="政策持续加力"
            detail="投资与居民预期修复仍偏慢，首套住房贷款贴息等增量政策落地，重点在于稳定需求与改善现金流。"
            tone="blue"
            delay="600ms"
          />
          <SummaryCard
            icon={AlertTriangle}
            eyebrow="风险观察"
            title="风险呈现结构性"
            metric="分化"
            metricLabel="而非全面失速"
            detail="外部冲击、供需错配与局部资产估值是主要变量；增长底盘稳定，但修复斜率仍取决于内需接力。"
            tone="red"
            delay="700ms"
          />
        </div>

        <div className="flex flex-shrink-0 items-center gap-3 rounded-xl bg-webank-blue px-5 py-3 text-white shadow-card animate-fade-in-up fill-mode-forwards opacity-0" style={{ animationDelay: '600ms' }}>
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/15">
            <ShieldCheck size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold tracking-[0.16em] text-blue-100 uppercase">季度判断</p>
            <p className="mt-0.5 text-[15px] font-semibold leading-snug">
              经济处于“总量稳、结构变、政策托底”的修复阶段：短期看出口与新动能，中期看消费回升和地产企稳，风险关注外部冲击与结构性供需错配。
            </p>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
