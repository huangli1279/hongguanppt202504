import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { emotionMarketTrend } from '@/data/emotionEconomyTrends';

const emotionBars: BarConfig[] = [
  { dataKey: 'size', name: '市场规模', color: '#5C9A8A' },
];

/* ---------- 上方两张总结卡 ---------- */

interface Feature {
  title: string;
  desc: React.ReactNode;
}

const SummaryCard: React.FC<{
  title: string;
  features: Feature[];
  source: string;
  highlight?: boolean;
}> = ({ title, features, source, highlight = false }) => (
  <div
    className={`rounded-xl border border-slate-200 shadow-card p-3.5 flex flex-col gap-2 min-h-0 overflow-hidden ${
      highlight
        ? 'bg-gradient-to-br from-[#eef4fb] via-white to-white border-webank-accent/30'
        : 'bg-white'
    }`}
  >
    <div className="flex items-center gap-2 shrink-0">
      <span className={`w-1 h-3.5 rounded-sm ${highlight ? 'bg-webank-accent' : 'bg-webank-blue'}`} />
      <h3 className="text-[16px] font-bold text-webank-blue leading-none">{title}</h3>
    </div>
    <div className="flex-1 min-h-0 flex flex-col justify-center gap-2">
      {features.map((f, i) => (
        <div key={f.title} className={i > 0 ? 'border-t border-slate-100 pt-2' : ''}>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center justify-center w-4 h-4 shrink-0 rounded bg-webank-blue text-white text-[10px] font-bold leading-none">
              {i + 1}
            </span>
            <span className="text-[14px] font-bold text-webank-blue leading-none">{f.title}</span>
          </div>
          <p className="mt-1 pl-[22px] text-[12px] leading-snug text-slate-600">{f.desc}</p>
        </div>
      ))}
    </div>
    <p className="text-[10px] text-slate-400 leading-tight shrink-0">来源：{source}</p>
  </div>
);

const allAgeFeatures: Feature[] = [
  {
    title: '为体验与情绪付费',
    desc: (
      <>
        情绪经济规模2029年预计达{' '}<span className="font-semibold text-red-500">4.5 万亿</span>，演出市场近两年保持5%-7%的增速。 2026年节假日（春节、五一、十一）出游人次17.47亿人，同比增长3.1%，花费1.73万亿，同比增长3.7%。
      </>
    ),
  },
  {
    title: '追求性价比',
    desc: (
      <>
       2025年二手交易额 1.69 万亿（
       <span className="font-semibold text-red-500">+12.4%</span>）。26Q2调查显示，过去半年 <span className="font-semibold text-red-500">71.2%</span> 有“平替”行为，消费者并未压缩品质要求，转为拒绝为品牌支付溢价。
      </>
    ),
  },
  {
    title: '健康支出刚性',
    desc: (
      <>
        医疗支出增加最多（<span className="font-semibold text-red-500">18.9%</span>），餐饮、文娱等弹性消费压减最多。央视美好生活调查显示，保健养生稳居各年龄段增加消费前三名。
      </>
    ),
  },
];

const zgenFeatures: Feature[] = [
  {
    title: '情绪消费主力',
    desc: (
      <>
        2025年调查显示，近六成愿为情绪价值买单（<span className="font-semibold text-red-500">+16.2%</span>），月均支出 949 元
      </>
    ),
  },
  {
    title: '二手循环先锋',
    desc: (
      <>
        <span className="font-semibold text-red-500">50%</span> 每 2–3 个月购买一次二手。
      </>
    ),
  },
  {
    title: '健康支出智能化',
    desc: (
      <>
        <span className="font-semibold text-red-500">75%</span> 用智能设备监测健康、68.3% 向 AI 倾诉。
      </>
    ),
  },
];

/* ---------- 底部三张图 ---------- */

const FigureCard: React.FC<{
  label: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}> = ({ label, title, note, children }) => (
  <div className="h-full bg-white border border-slate-200/90 rounded-xl shadow-[0_3px_12px_rgba(47,74,107,0.08)] flex flex-col min-h-0 overflow-hidden">
    <div className="px-3 pt-2 pb-1.5 border-b border-slate-100 bg-slate-50/70 shrink-0">
      <div className="flex items-baseline gap-2 leading-none">
        <span className="text-[11px] font-semibold tracking-wide text-webank-blue shrink-0">{label}</span>
        <span className="text-[13px] font-semibold text-slate-700 truncate">{title}</span>
      </div>
      {note && <p className="text-[10px] text-slate-400 leading-none mt-1 truncate">{note}</p>}
    </div>
    <div className="flex-1 min-h-0 p-2 overflow-hidden">{children}</div>
  </div>
);

const consumeChangeBars = [
  { name: '医疗', v: 18.9 },
  { name: '住房', v: 16.3 },
  { name: '外出餐饮', v: -28.2 },
  { name: '文娱服务', v: -25.2 },
];

const CHANGE_UP_COLOR = '#e0574b';
const CHANGE_DOWN_COLOR = '#3f9e6e';
const CHANGE_PLOT_H = 152;
const CHANGE_NEG_RANGE = 30; // 纵轴负向范围 -30%
const CHANGE_POS_RANGE = 25; // 纵轴正向范围 +25%
const CHANGE_UNIT = CHANGE_PLOT_H / (CHANGE_NEG_RANGE + CHANGE_POS_RANGE);
const CHANGE_ZERO_BOTTOM = CHANGE_NEG_RANGE * CHANGE_UNIT;

const behaviorRows = [
  { behavior: '延长物品使用周期再更换', share: '82%', note: '全年龄', strong: true },
  { behavior: '维修而非丢弃', share: '69%', note: '全年龄' },
  { behavior: '主动减少浪费', share: '68%', note: '全年龄' },
  { behavior: '购买二手服装', share: '30%', note: '多数品类超20%' },
  { behavior: 'DIY 此前付费的服务', share: '近一半', note: '家政、理发、美容等' },
  { behavior: '每2–3个月买一次二手', share: '50%', note: 'Z世代' },
];

export const ContentSlide37: React.FC = () => {
  return (
    <BaseContentSlide
      title={<>消费三大特点：全年龄段共性 × Z世代特征</>}
      cardColumns={2}
      headerClassName="!mb-4"
    >
      <div className="flex flex-col h-full min-h-0">
        {/* 总结卡：左全年龄段 / 右Z世代 */}
        <div className="grid grid-cols-2 gap-3 shrink-0 mb-3">
          <SummaryCard
            title="全年龄段：三大共性特点"
            features={allAgeFeatures}
            source="数据范围：25–26 年。文旅部、国家统计局；中国演出行业协会；艾媒咨询；麦肯锡；厦大×蚂蚁；立信报告"
          />
          <SummaryCard
            title="Z世代：三大典型特点"
            highlight
            features={zgenFeatures}
            source="Soul《2025 Z世代情绪消费报告》；麦肯锡《2026 消费者现状》；艾媒咨询"
          />
        </div>

        {/* 三张图：消费调整 / 行为数据 / 情绪市场规模 */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-3">
          <ChartContainer delay="600ms">
            <FigureCard label="图1" title="情绪经济市场规模" note="单位：万亿元 · 艾媒咨询">
              <div className="flex flex-col h-full">
                <div className="flex-1 min-h-0">
                <BaseBarChart
                  data={emotionMarketTrend}
                  xAxisKey="year"
                  bars={emotionBars}
                  yAxisDomain={[0, 5]}
                  showYAxis={true}
                  yAxisWidth={25}
                  yAxisTickFormatter={(value) => `${value}`}
                  showLegend={false}
                  barSize={20}
                  barCategoryGap="16%"
                  showLabels={true}
                  labelFormatter={(value) => Number(value).toFixed(2)}
                  labelPositiveOffset={6}
                  xAxisTickFontSize={9}
                  xAxisHeight={20}
                  xAxisInterval={0}
                  unit="万亿"
                />
                </div>
                <p className="shrink-0 mt-1 text-left text-[9px] leading-snug text-slate-400">
                  情绪经济包含：潮玩、盲盒、谷子经济、解压馆、沉浸式文旅、疗愈课程、陪聊等；
                </p>
              </div>
            </FigureCard>
          </ChartContainer>

          <ChartContainer delay="720ms">
            <FigureCard label="图2" title="追求性价比行为数据印证" note="麦肯锡《2026 消费者现状》· 受访者占比">
              <table className="w-full h-full table-fixed text-[11px] border-collapse">
                <thead>
                  <tr className="bg-webank-blue/10 text-black">
                    <th className="border border-slate-200 px-1 py-1 text-left font-bold w-[44%]">行为</th>
                    <th className="border border-slate-200 px-1 py-1 text-center font-bold w-[20%]">占比</th>
                    <th className="border border-slate-200 px-1 py-1 text-left font-bold">备注</th>
                  </tr>
                </thead>
                <tbody className="text-webank-text">
                  {behaviorRows.map((row) => (
                    <tr key={row.behavior} className="align-middle">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent leading-snug">
                        {row.behavior}
                      </td>
                      <td
                        className={`border border-slate-200 px-1 py-1 text-center font-bold ${
                          row.strong ? 'text-black' : 'text-webank-blue'
                        }`}
                      >
                        {row.share}
                      </td>
                      <td className="border border-slate-200 px-1.5 py-1 leading-snug">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </FigureCard>
          </ChartContainer>

          <ChartContainer delay="840ms">
            <FigureCard
              label="图3"
              title="2026Q2 居民实际消费调整"
              note="厦大×蚂蚁《中国家庭财富与消费报告（2026Q2）》· %"
            >
              <div className="flex flex-col h-full justify-center">
                {/* 零轴发散柱图：上升为红（增加），下降为绿（减少） */}
                <div className="flex pb-[13px]">
                  <div className="relative w-7 shrink-0" style={{ height: CHANGE_PLOT_H }}>
                    {[20, 10, 0, -10, -20].map((t) => (
                      <span
                        key={t}
                        className="absolute right-0.5 -translate-y-1/2 text-[9px] leading-none text-slate-400"
                        style={{ bottom: CHANGE_ZERO_BOTTOM + t * CHANGE_UNIT }}
                      >
                        {t > 0 ? `+${t}` : t}%
                      </span>
                    ))}
                  </div>
                  <div className="relative flex-1 min-w-0" style={{ height: CHANGE_PLOT_H }}>
                    {[20, 10, -10, -20].map((t) => (
                      <div
                        key={t}
                        className="absolute inset-x-0 border-t border-dashed border-slate-200"
                        style={{ bottom: CHANGE_ZERO_BOTTOM + t * CHANGE_UNIT }}
                      />
                    ))}
                    <div
                      className="absolute inset-x-0 border-t border-[#41508f]"
                      style={{ bottom: CHANGE_ZERO_BOTTOM }}
                    />
                    <div className="absolute inset-0 flex justify-around px-1">
                      {consumeChangeBars.map((b) => {
                        const barH = Math.abs(b.v) * CHANGE_UNIT;
                        const isUp = b.v >= 0;
                        const zeroTop = CHANGE_PLOT_H - CHANGE_ZERO_BOTTOM;
                        return (
                          <div key={b.name} className="relative flex-1 min-w-0 max-w-[46px]">
                            <div
                              className="absolute left-1/2 -translate-x-1/2 w-[18px]"
                              style={{
                                height: barH,
                                bottom: isUp ? CHANGE_ZERO_BOTTOM : undefined,
                                top: isUp ? undefined : zeroTop,
                                background: isUp ? CHANGE_UP_COLOR : CHANGE_DOWN_COLOR,
                                borderRadius: isUp ? '2px 2px 0 0' : '0 0 2px 2px',
                              }}
                            />
                            <span
                              className="absolute left-1/2 -translate-x-1/2 text-[10px] font-semibold leading-none whitespace-nowrap"
                              style={{
                                bottom: isUp ? CHANGE_ZERO_BOTTOM + barH + 2 : undefined,
                                top: isUp ? undefined : zeroTop + barH + 2,
                                color: isUp ? CHANGE_UP_COLOR : CHANGE_DOWN_COLOR,
                              }}
                            >
                              {isUp ? '+' : ''}
                              {b.v}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* 类目标签 */}
                <div className="flex">
                  <div className="w-7 shrink-0" />
                  <div className="flex-1 px-1">
                    <div className="flex justify-around px-1">
                      {consumeChangeBars.map((b) => (
                        <span
                          key={b.name}
                          className="flex-1 max-w-[46px] text-center text-[10px] text-slate-700 leading-none truncate"
                        >
                          {b.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* 图例 */}
                <div className="flex justify-center items-center gap-4 mt-1.5 text-[10px] text-slate-600 leading-none">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-[1px]" style={{ background: CHANGE_UP_COLOR }} />
                    实际增加
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-[1px]" style={{ background: CHANGE_DOWN_COLOR }} />
                    实际减少
                  </span>
                </div>
                {/* 底部备注 */}
                <p className="ml-7 mt-1 text-[9px] text-slate-400 leading-none">这里比较的是实际和预期的差值</p>
              </div>
            </FigureCard>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
