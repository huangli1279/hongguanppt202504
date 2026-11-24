import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

const FigureCard: React.FC<{ label: string; title: string; children: React.ReactNode }> = ({
  label,
  title,
  children,
}) => (
  <div className="bg-white border border-slate-200/90 rounded-xl shadow-[0_3px_12px_rgba(47,74,107,0.08)] flex flex-col min-h-0 overflow-hidden">
    <div className="px-3 pt-2 pb-1.5 border-b border-slate-100 bg-slate-50/70 shrink-0">
      <div className="text-[11px] font-semibold tracking-wide text-webank-blue leading-none mb-1">{label}</div>
      <div className="text-[13px] font-semibold text-slate-700 leading-tight truncate">{title}</div>
    </div>
    <div className="flex-1 min-h-0 p-2 overflow-hidden">{children}</div>
  </div>
);

const consumeChange = [
  {
    label: '实际增加最多',
    bars: [
      { name: '医疗', v: 18.9, color: '#2f6db5' },
      { name: '住房', v: 16.3, color: '#a9c3e2' },
    ],
  },
  {
    label: '实际减少最多',
    bars: [
      { name: '外出餐饮', v: 28.2, color: '#a9c3e2' },
      { name: '文娱服务', v: 25.2, color: '#a9c3e2' },
    ],
  },
];

const CHART_H2 = 160;
const h2 = (v: number) => `${(v / 30) * CHART_H2}px`;

const growthRate = (current: number, previous: number) => ((current - previous) / previous) * 100;

type MiniDatum = { label: string; value: number; accent?: boolean };

const fitnessData: MiniDatum[] = [
  { label: '2024', value: 2851 },
  { label: '2025', value: 3827, accent: true },
];
const wearableData: MiniDatum[] = [
  { label: '2020', value: 364 },
  { label: '2025', value: 711, accent: true },
  { label: '2026E', value: 820, accent: true },
];
const therapyData: MiniDatum[] = [
  { label: '2020', value: 386 },
  { label: '2021', value: 512 },
  { label: '2022', value: 678 },
  { label: '2023', value: 912 },
  { label: '2024', value: 972 },
  { label: '2025', value: 1450, accent: true },
  { label: '2026E', value: 1800 },
  { label: '2030E', value: 2000, accent: true },
];

const BAR_MAX_H = 160;
const MiniBarChart: React.FC<{ data: MiniDatum[]; height?: number }> = ({ data, height = BAR_MAX_H }) => {
  const max = Math.max(...data.map((d) => d.value));
  const barH = (v: number) => (v / max) * height;
  return (
    <div className="flex flex-col h-full">
      <div className="relative flex-1 min-h-0 flex items-end justify-around gap-1">
        <div className="flex w-full h-full items-end justify-around gap-1">
          {data.map((d) => (
            <div key={d.label} className="flex flex-col items-center justify-end flex-1 min-w-0">
              <span className="relative z-10 bg-white text-[10px] font-medium text-webank-blue leading-none mb-0.5">
                {d.value.toLocaleString()}
              </span>
              <div
                className={`w-full max-w-[40px] rounded-t-[3px] ${d.accent ? 'bg-[#2f6db5]' : 'bg-[#a9c3e2]'}`}
                style={{ height: `${barH(d.value)}px` }}
              />
            </div>
          ))}
        </div>
        {/* 37页式增速框：两根柱顶引出竖线，横向相连成"门"字，中间放一个圆角长方形框 */}
        {data.map((d, index) => {
          if (index === 0) return null;
          const previous = data[index - 1];
          const growth = growthRate(d.value, previous.value);
          const n = data.length;
          const leftCx = (((index - 1) + 0.5) / n) * 100;
          const rightCx = ((index + 0.5) / n) * 100;
          const leftH = barH(previous.value);
          const rightH = barH(d.value);
          const bracketBottom = Math.max(leftH, rightH) + 22;
          return (
            <React.Fragment key={`${d.label}-growth`}>
              <div
                className="absolute w-px bg-webank-blue"
                style={{ left: `${leftCx}%`, bottom: `${leftH}px`, height: `${bracketBottom - leftH}px` }}
              />
              <div
                className="absolute w-px bg-webank-blue"
                style={{ left: `${rightCx}%`, bottom: `${rightH}px`, height: `${bracketBottom - rightH}px` }}
              />
              <div
                className="absolute h-px bg-webank-blue"
                style={{ left: `${leftCx}%`, width: `${rightCx - leftCx}%`, bottom: `${bracketBottom}px` }}
              />
              <span
                className="absolute -translate-x-1/2 translate-y-1/2 rounded-[2px] border border-webank-blue bg-white px-1 text-[8px] font-extrabold leading-[12px] text-webank-blue whitespace-nowrap"
                style={{ left: `${(leftCx + rightCx) / 2}%`, bottom: `${bracketBottom}px` }}
              >
                {growth > 0 ? '+' : ''}{growth.toFixed(1)}%
              </span>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-around gap-1 border-t border-slate-200 pt-0.5">
        {data.map((d) => (
          <span key={d.label} className="flex-1 text-center text-[10px] text-webank-blue leading-none truncate">{d.label}</span>
        ))}
      </div>
    </div>
  );
};

const MiniLineChart: React.FC<{ data: MiniDatum[] }> = ({ data }) => {
  const n = data.length;
  const max = Math.max(...data.map((d) => d.value));
  const padX = 8;
  const padTop = 20;
  const padBottom = 16;
  const usableW = 100 - 2 * padX;
  const usableH = 100 - padTop - padBottom;
  const px = (i: number) => padX + (i / (n - 1)) * usableW;
  const py = (v: number) => padTop + (1 - v / max) * usableH;
  const line = data.map((d, i) => `${px(i)},${py(d.value)}`).join(' ');
  const baseY = 100 - padBottom;
  const area = `${px(0)},${baseY} ${line} ${px(n - 1)},${baseY}`;
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <polygon points={area} fill="rgba(47,109,181,0.10)" />
        <polyline
          points={line}
          fill="none"
          stroke="#2f6db5"
          strokeWidth={1.4}
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {data.map((d, i) => (
        <React.Fragment key={d.label}>
          <span
            className={`absolute -translate-x-1/2 -translate-y-full text-[10px] font-medium leading-none ${
              d.accent ? 'text-webank-blue' : 'text-slate-600'
            }`}
            style={{ left: `${px(i)}%`, top: `${py(d.value) - 5}%` }}
          >
            {d.value.toLocaleString()}
          </span>
          <span
            className={`absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border ${
              d.accent ? 'bg-webank-blue border-webank-blue' : 'bg-white border-webank-blue'
            }`}
            style={{ left: `${px(i)}%`, top: `${py(d.value)}%` }}
          />
          <span
            className="absolute -translate-x-1/2 bottom-0 text-[10px] leading-none text-slate-700 whitespace-nowrap"
            style={{ left: `${px(i)}%` }}
          >
            {d.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export const ContentSlide39: React.FC = () => {
  return (
    <BaseContentSlide
      title={<>特点三：健康支出保持刚性</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full min-h-0">
        <div className="grid grid-cols-2 gap-5 flex-1 min-h-0 mb-2">
          {/* 左框：健康支出刚性 */}
          <BaseCard
            title="健康支出：稳居各年龄段前三"
            variant="accent"
            className="h-full overflow-auto"
          >
            <div className="space-y-3 text-[14px] leading-relaxed">
              <p>央视美好生活调查显示，保健养生稳居各年龄段增加消费前三名。</p>
              <p className="text-[14px] text-black-600 leading-relaxed">
                26年Q2在医疗增加消费最多；而在外出餐饮、文娱服务方面减少支出最多。居民先减少弹性消费，健康是最后退让的支出方向。
              </p>
            </div>
          </BaseCard>

          {/* 中框：三大细分赛道 */}
          <BaseCard
            title="三大健康消费赛道"
            variant="accent"
            className="h-full overflow-auto"
          >
            <ol className="space-y-3 text-[13px] leading-relaxed text-slate-600">
              <li>
                1. 健身：
                商业健身市场 2025 年 3,827 亿（
                <span className="font-semibold text-red-500">+34.2%</span>），Z世代成消费主力、月均轻中端支出{' '}
                <span className="font-semibold">300–500 元</span>，县域增速{' '}
                <span className="font-semibold text-red-500">40%</span>。
              </li>
              <li>
                2. 智能穿戴：
                健康设备 711 亿（CAGR{' '}
                <span className="font-semibold">14.4%</span>），腕戴出货{' '}
                <span className="font-semibold">7,390 万台</span>（
                <span className="font-semibold text-red-500">+20.8%</span>）；
                <span className="font-semibold">45%</span> 为健康监测而买（技术让健康可测量。Z世代使用智能设备监测健康问题{' '}
                <span className="font-semibold">75%</span>，
                <span className="font-semibold">26%</span> 的消费者使用 AI 处理健康问题(高于整体 22%)）；
              </li>
              <li>
                3. 心理咨询/情绪：
                心理咨询 1,450 亿（复合增速{' '}
                <span className="font-semibold text-red-500">30%</span>）；Z世代{' '}
                <span className="font-semibold">68.3%</span> 向 AI 倾诉。
              </li>
            </ol>
          </BaseCard>

        </div>

        {/* 底部：四图横向排列 */}
        <div className="grid grid-cols-4 gap-3 h-[310px] shrink-0">
          {/* 图1 分框柱状 */}
          <FigureCard label="图1" title="2026Q2 居民实际消费调整">
            <div className="flex flex-col h-full">
              <div className="text-[10px] text-slate-400 leading-none mb-1 truncate">
                厦大×蚂蚁《中国家庭财富与消费报告（2026Q2）》· %
              </div>
              <div className="flex-1 min-h-0 flex justify-around items-end gap-2">
                {consumeChange.map((grp) => (
                  <div key={grp.label} className="flex flex-col flex-1 min-w-0 justify-end">
                    <span className="text-[10px] text-slate-600 font-medium text-center leading-none mb-0.5 truncate">
                      {grp.label}
                    </span>
                    <div className="relative h-[168px] border border-[#41508f] rounded-[2px] px-1.5 flex items-end justify-around gap-1.5">
                      <div className="absolute inset-x-0 border-t border-dashed border-slate-300" style={{ bottom: h2(10) }} />
                      <div className="absolute inset-x-0 border-t border-dashed border-slate-300" style={{ bottom: h2(20) }} />
                      {grp.bars.map((b) => (
                        <div key={b.name} className="flex-1 flex flex-col items-center justify-end min-w-0">
                          <span className="relative z-10 text-[9px] font-semibold text-slate-700 leading-none mb-[1px] whitespace-nowrap bg-white px-[1px]">
                            {b.v}%
                          </span>
                          <div
                            className="w-full max-w-[16px] rounded-t-[1px]"
                            style={{ height: h2(b.v), background: b.color }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-around gap-1.5 mt-0.5">
                      {grp.bars.map((b) => (
                        <span key={b.name} className="flex-1 text-center text-[10px] text-slate-700 leading-none truncate">
                          {b.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 leading-none mt-1 pl-0.5 pr-0.5">
                <span>0%</span>
                <span>10%</span>
                <span>20%</span>
                <span>30%</span>
              </div>
            </div>
          </FigureCard>

          {/* 图2 健身市场规模柱状图 */}
          <FigureCard label="图2" title="商业健身市场规模（单位：亿元）">
            <div className="flex flex-col h-full text-[8px]">
              <div className="flex-1 min-h-0">
                <MiniBarChart data={fitnessData} />
              </div>

            </div>
          </FigureCard>

          {/* 图3 智能可穿戴规模柱状图 */}
          <FigureCard label="图3" title="智能可穿戴健康设备（单位：亿元）">
            <div className="flex flex-col h-full text-[8px]">
              <div className="flex-1 min-h-0">
                <MiniBarChart data={wearableData} />
              </div>
            </div>
          </FigureCard>

          {/* 图4 心理咨询规模折线图 */}
          <FigureCard label="图4" title="心理咨询行业规模（单位：亿元，宽口径）">
            <div className="flex flex-col h-full text-[8px]">
              <div className="flex-1 min-h-0">
                <MiniLineChart data={therapyData} />
              </div>
            </div>
          </FigureCard>
        </div>
      </div>
    </BaseContentSlide>
  );
};
