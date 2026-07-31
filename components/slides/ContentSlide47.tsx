import React from 'react';
import { Gauge, TrendingDown, BarChart2, Coins, Compass, AlertTriangle } from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

const kpis = [
  { label: 'GDP 同比', value: '4.3%', tone: 'neutral' },
  { label: '上半年累计', value: '4.7%', tone: 'positive' },
  { label: '社零累计', value: '+1.3%', tone: 'neutral' },
  { label: '固投累计', value: '-5.7%', tone: 'negative' },
  { label: '出口累计', value: '+17.6%', tone: 'positive' },
  { label: 'PPI 同比', value: '+3.6%', tone: 'positive' },
  { label: 'CPI 同比', value: '+1.0%', tone: 'neutral' },
  { label: '财政收入', value: '+4.7%', tone: 'positive' },
];

export const ContentSlide47: React.FC = () => {
  return (
    <BaseContentSlide title="二季度总结：换挡不失速，动能切换见分化" headerClassName="!mb-3">
      <div className="flex flex-col h-full min-h-0 gap-3 pb-6">

        {/* KPI 数据条 */}
        <div className="flex-shrink-0 grid grid-cols-8 gap-2">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-card bg-slate-50 border border-webank-line text-center px-2 py-2"
            >
              <div className={`text-[17px] font-bold tabular-nums leading-tight ${
                k.tone === 'positive' ? 'text-webank-accent' :
                k.tone === 'negative' ? 'text-red-600' :
                'text-webank-blue'
              }`}>{k.value}</div>
              <div className="text-[10px] text-webank-subtext mt-0.5 leading-tight">{k.label}</div>
            </div>
          ))}
        </div>

        {/* 主体内容 */}
        <div className="flex-1 min-h-0 grid grid-cols-[2fr_1fr] gap-3">

          {/* 四条主线 */}
          <div className="grid grid-cols-2 gap-2.5 min-h-0">

            <div className="rounded-card border border-webank-line bg-white shadow-card px-3.5 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Gauge size={15} className="text-webank-accent flex-shrink-0" />
                <h4 className="text-[14px] font-bold text-webank-blue">换挡，而非失速</h4>
              </div>
              <p className="text-[12.5px] leading-relaxed text-webank-text">
                Q2 GDP 同比
                <span className="font-bold text-webank-accent"> 4.3%</span>，表面回落但内涵在改善——GDP 平减指数自 2023Q2 以来<span className="font-bold text-webank-accent">首次转正</span>，名义增速重新跑赢实际，价格端的修复意味着企业盈利空间重新打开。AI 产业链与能源价格是拉动力，高技术制造增加值同比超 <span className="font-bold">13%</span>。二季度是年内低点，而非趋势拐点。
              </p>
            </div>

            <div className="rounded-card border border-webank-line bg-white shadow-card px-3.5 py-3">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown size={15} className="text-red-500 flex-shrink-0" />
                <h4 className="text-[14px] font-bold text-webank-blue">三驾马车严重分化</h4>
              </div>
              <p className="text-[12.5px] leading-relaxed text-webank-text">
                出口独撑大局（上半年 <span className="font-bold text-webank-accent">+17.6%</span>，集成电路 +96%、新能源汽车翻倍），但固定投资意外转负（<span className="font-bold text-red-600">-5.7%</span>），社零在零增长边缘徘徊（+1.3%）。内需两大引擎同步失速，增长过度依赖外需单腿支撑，一旦外部扰动，缓冲垫几乎消失。这是当前最值得警惕的结构性隐忧。
              </p>
            </div>

            <div className="rounded-card border border-webank-line bg-white shadow-card px-3.5 py-3">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 size={15} className="text-webank-accent flex-shrink-0" />
                <h4 className="text-[14px] font-bold text-webank-blue">K型分化渗入资产负债表</h4>
              </div>
              <p className="text-[12.5px] leading-relaxed text-webank-text">
                生产端的分化已经深入到资金面：企业贷款「票据强、中长期弱」，中长期贷款同比少增近 <span className="font-bold text-red-600">1.5 万亿</span>，说明实体扩产意愿低迷；居民则持续缩表，Q2 贷款净减少超 6600 亿，消费贷余额也在收缩。存款搬家延续，非银存款多增近 4000 亿，说明钱在流动但不进实体。
              </p>
            </div>

            <div className="rounded-card border border-webank-line bg-white shadow-card px-3.5 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Coins size={15} className="text-webank-accent flex-shrink-0" />
                <h4 className="text-[14px] font-bold text-webank-blue">政策弹药留在下半年打</h4>
              </div>
              <p className="text-[12.5px] leading-relaxed text-webank-text">
                财政收入 <span className="font-bold text-webank-accent">+4.7%</span> 超预算目标，但支出进度只有 47.8%，明显低于年初节奏——上半年是在「留力」。8000 亿政策性金融工具、「六张网」7 万亿配套投资，以及 6 月单月专项债 <span className="font-bold">5716 亿</span>（超计划 65%），都在指向 Q3 将是政策集中落地的窗口期。
              </p>
            </div>
          </div>

          {/* 右侧展望与风险 */}
          <div className="flex flex-col gap-2.5 min-h-0">
            <div className="flex-1 flex flex-col rounded-card border border-webank-line bg-gradient-to-b from-sky-50/80 to-blue-50/40 px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Compass size={15} className="text-webank-midBlue flex-shrink-0" />
                <h4 className="text-[14px] font-bold text-webank-blue">下半年展望</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-webank-text">
                Q2 大概率是全年低点，Q3 起逐季回升，全年落在 <span className="font-bold text-webank-accent">4.5%–4.8%</span>。核心支撑仍是出口韧性与 AI 产业链的持续扩张；政策加码能否在 Q3 形成实物工作量，是决定下半年斜率的关键变量。消费端最大增量在体验、健康与情绪类，靠政策刺激传统品类的边际效用已在递减。
              </p>
            </div>

            <div className="flex-1 flex flex-col rounded-card border-l-4 border-amber-400 bg-amber-50/60 px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={15} className="text-amber-600 flex-shrink-0" />
                <h4 className="text-[14px] font-bold text-amber-800">主要风险</h4>
              </div>
              <p className="text-[12px] leading-relaxed text-slate-700">
                地产与居民资产负债表的修复周期仍长，消费难以快速反弹；出口在高基数叠加关税、地缘反复下，下半年增速回落至个位数的概率较高；AI 算力资本开支的回报兑现需要 10 年以上，短期挤出效应与就业替代的冲击不可忽视。
              </p>
            </div>
          </div>

        </div>
      </div>
    </BaseContentSlide>
  );
};
