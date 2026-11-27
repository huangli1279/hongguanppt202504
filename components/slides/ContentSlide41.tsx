import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  Coins,
  Factory,
  Landmark,
  ShieldAlert,
  ShoppingCart,
  TrendingUp,
} from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

interface MetricProps {
  value: string;
  label: string;
  direction: 'up' | 'down';
}

const Metric: React.FC<MetricProps> = ({ value, label, direction }) => (
  <div className="flex min-w-0 items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2.5 shadow-card">
    <div className="min-w-0">
      <strong className="block text-[21px] font-bold leading-none tabular-nums text-slate-800">{value}</strong>
      <span className="mt-1 block text-[10px] leading-none text-webank-subtext">{label}</span>
    </div>
    {direction === 'up' ? (
      <ArrowUpRight size={16} className="text-emerald-500" strokeWidth={2.5} />
    ) : (
      <ArrowDownRight size={16} className="text-rose-400" strokeWidth={2.5} />
    )}
  </div>
);

interface SummaryCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  tone?: 'blue' | 'amber' | 'green' | 'red';
}

const toneStyles = {
  blue: { icon: 'bg-blue-50 text-webank-blue', accent: 'text-webank-blue' },
  amber: { icon: 'bg-amber-50 text-amber-600', accent: 'text-amber-600' },
  green: { icon: 'bg-emerald-50 text-emerald-600', accent: 'text-emerald-600' },
  red: { icon: 'bg-red-50 text-red-600', accent: 'text-red-600' },
};

const SummaryCard: React.FC<SummaryCardProps> = ({ icon: Icon, title, children, tone = 'blue' }) => {
  const styles = toneStyles[tone];

  return (
    <article className="flex min-h-0 flex-col rounded-lg border border-slate-200 bg-white shadow-card animate-fade-in-up fill-mode-forwards opacity-0">
      <div className="flex items-center gap-2 border-b border-slate-100 px-3.5 py-2">
        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md ${styles.icon}`}>
          <Icon size={17} strokeWidth={2.2} />
        </div>
        <h2 className="text-[13.5px] font-bold leading-tight text-webank-blue">{title}</h2>
      </div>
      <div className="flex-1 space-y-2 px-3.5 py-2.5 text-[12px] leading-relaxed text-slate-700">{children}</div>
    </article>
  );
};

const Point: React.FC<{ label: string; tone?: keyof typeof toneStyles; children: React.ReactNode }> = ({ label, tone = 'blue', children }) => (
  <p>
    <strong className={toneStyles[tone].accent}>{label}：</strong>{children}
  </p>
);

export const ContentSlide41: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          2026年三季度宏观经济总结：增长韧性延续，
          <span className="text-webank-accent">结构分化加深、内需修复偏慢</span>
        </>
      }
      subtitle="2026年三季度宏观经济报告"
      headerClassName="!mb-3"
      className="!p-8 sm:!p-9"
    >
      <div className="flex h-full min-h-0 flex-col gap-3">
        <div className="grid flex-shrink-0 grid-cols-9 gap-1.5">
          <Metric value="4.5%" label="Q3 GDP" direction="up" />
          <Metric value="50.1%" label="9月制造业PMI" direction="up" />
          <Metric value="+5.0%" label="9月PPI" direction="up" />
          <Metric value="+0.9%" label="9月CPI" direction="up" />
          <Metric value="-7.2%" label="固投累计" direction="down" />
          <Metric value="+1.1%" label="9月社零" direction="up" />
          <Metric value="+36.3%" label="9月出口" direction="up" />
          <Metric value="+31.0%" label="9月进口" direction="up" />
          <Metric value="-4.0%" label="M1-M2剪刀差" direction="down" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-2">
          <SummaryCard icon={TrendingUp} title="增长：增速回升、平减回正">
            <Point label="增速回升">三季度GDP同比<strong>4.5%</strong>，较二季度回升0.2个百分点；前三季度累计<strong>4.6%</strong>，处于全年目标区间。</Point>
            <Point label="价格改善" tone="green">名义增速<strong>6%</strong>，GDP平减指数<strong>1.44%</strong>连续两季回正，受AI产业链与能源价格支撑。</Point>
          </SummaryCard>
          <SummaryCard icon={Factory} title="生产：工业稳增、新旧动能分化" tone="green">
            <Point label="工业平稳">前三季度规上工业增<strong>5.3%</strong>，制造业<strong>5.7%</strong>；Q3产能利用率<strong>73.1%</strong>，环比企稳，同比低1.5个百分点。</Point>
            <Point label="动能分化" tone="green">高技术制造业Q3增<strong>16.2%</strong>，计算机通信产能利用率<strong>80.3%</strong>；汽车<strong>66.2%</strong>，采矿业受煤炭复产拖累。</Point>
          </SummaryCard>
          <SummaryCard icon={ShoppingCart} title="消费：总量偏弱、服务与体验较强" tone="amber">
            <Point label="总量修复偏慢" tone="amber">前三季度社零累计<strong>1.1%</strong>；9月回升<strong>1.1%</strong>，剔汽车后<strong>3.9%</strong>，内需受收入与就业信心约束。</Point>
            <Point label="结构分化" tone="green">服务零售<strong>5.0%</strong>快于商品<strong>1.0%</strong>；旅游、文体等体验消费强，汽车零售降<strong>14.9%</strong>。</Point>
          </SummaryCard>
          <SummaryCard icon={Building2} title="投资：降幅扩大，地产拖累突出" tone="amber">
            <Point label="固投偏弱" tone="amber">前三季度固投<strong>-7.2%</strong>，降幅扩大；9月环比转正，10月再度转弱。</Point>
            <Point label="地产与民间承压" tone="amber">地产开发<strong>-20.6%</strong>，民间投资<strong>-10.4%</strong>；专项债与政策工具加力，资金转化有时滞。</Point>
          </SummaryCard>
          <SummaryCard icon={ArrowUpRight} title="外贸：出口高增，AI链贡献突出" tone="blue">
            <Point label="出口韧性强">前三季度出口增<strong>21.3%</strong>，9月<strong>36.3%</strong>；AI链出口增<strong>115%</strong>，拉动整体增速约13个百分点。</Point>
            <Point label="进口结构分化" tone="amber">9月进口增<strong>31.0%</strong>，AI设备与芯片金额高增，但量改善有限，传统制造链弱。</Point>
          </SummaryCard>
          <SummaryCard icon={Landmark} title="财政：支出进度偏慢，政策加力" tone="amber">
            <Point label="支出进度偏慢" tone="amber">1—9月一般公共预算支出<strong>1.0%</strong>，进度<strong>70.0%</strong>，低收入进度约8个百分点，未达年初目标。</Point>
            <Point label="结构与工具">民生、科创支出托底，基建降幅收窄；专项债发行提速，8,000亿新型政策性金融工具落地，稳投资持续发力。</Point>
          </SummaryCard>
          <SummaryCard icon={Coins} title="金融：社融回落，居民信贷偏弱" tone="blue">
            <Point label="信用扩张放缓">Q3新增社融<strong>6.11万亿元</strong>，少增7,300亿元，存量增速<strong>7.1%</strong>；融资由政府债与政策工具支撑。</Point>
            <Point label="居民端仍在收缩" tone="amber">Q3居民贷款降<strong>6,669亿元</strong>，9月近零增长；居民存款增<strong>1.81万亿元</strong>，非银存款季末回流。</Point>
          </SummaryCard>
          <SummaryCard icon={ShieldAlert} title="风险：内需不足与外部扰动并存" tone="red">
            <Point label="内需修复不稳" tone="red">居民收入增<strong>4.4%</strong>，消费支出<strong>2.7%</strong>；地产调整、信心低位与加杠杆意愿弱相互影响。</Point>
            <Point label="外部与价格风险" tone="red">出口高增含基数与抢出口因素，AI链价格贡献大；输入性通胀推升PPI，生产与生活资料剪刀差扩大。</Point>
          </SummaryCard>
        </div>
      </div>
    </BaseContentSlide>
  );
};
