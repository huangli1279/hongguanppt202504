import React from 'react';
import { gdpForecastByInstitutionData } from '@/data/gdp';

const INTERNATIONAL_COLOR = '#4A79AA';
const DOMESTIC_COLOR = '#2F5F5A';
const CONSENSUS_FILL = 'rgba(185, 28, 28, 0.08)';
const CONSENSUS_STROKE = '#b91c1c';

type ForecastPoint = {
  institution: string;
  value: number;
  group: 'international' | 'domestic';
  color: string;
};

const DOMAIN: [number, number] = [4.3, 5.2];
const CONSENSUS: [number, number] = [4.5, 4.8];

const forecasts: ForecastPoint[] = gdpForecastByInstitutionData.map((d) => {
  const isIntl = d.international != null;
  return {
    institution: d.institution.replace(/\s*\([^)]*\)\s*$/, ''),
    value: (isIntl ? d.international : d.domestic) as number,
    group: isIntl ? 'international' : 'domestic',
    color: isIntl ? INTERNATIONAL_COLOR : DOMESTIC_COLOR,
  };
});

/** 按预测值分组，同值机构共占一段 */
const segments = Object.values(
  forecasts.reduce<Record<string, ForecastPoint[]>>((acc, item) => {
    const key = item.value.toFixed(1);
    (acc[key] ??= []).push(item);
    return acc;
  }, {})
).sort((a, b) => a[0].value - b[0].value);

function xOf(value: number, left: number, width: number) {
  const [min, max] = DOMAIN;
  return left + ((value - min) / (max - min)) * width;
}

const TICKS = [4.3, 4.5, 4.6, 4.7, 4.8, 5.0, 5.2];

export const GdpForecastTorchChart: React.FC = () => {
  const vbW = 920;
  const vbH = 250;
  const axisY = 170;
  const plotLeft = 48;
  const plotWidth = 824;
  const barH = 32;
  const barY = axisY - barH / 2;

  // 段边界：取相邻预测值中点，形成连续分段
  const boundaries = segments.map((seg, i) => {
    const v = seg[0].value;
    const start = i === 0 ? DOMAIN[0] + 0.05 : (segments[i - 1][0].value + v) / 2;
    const end =
      i === segments.length - 1 ? DOMAIN[1] - 0.05 : (v + segments[i + 1][0].value) / 2;
    return { start, end, value: v, items: seg };
  });

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <div className="mb-2 flex-shrink-0">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          国内外机构对中国2026年GDP增速预测对比
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          注：OECD取基准情景（4.5%）；红框为共识区间4.5%–4.8%。｜单位：%
        </p>
      </div>

      <div className="flex-1 min-h-0 flex flex-col">
        <div className="flex justify-center gap-5 mb-1 flex-shrink-0">
          <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: INTERNATIONAL_COLOR }}
            />
            国际组织
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: DOMESTIC_COLOR }}
            />
            国内头部券商
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
            <span
              className="inline-block w-3 h-2 rounded-sm border"
              style={{ borderColor: CONSENSUS_STROKE, backgroundColor: CONSENSUS_FILL }}
            />
            共识区间 4.5%–4.8%
          </span>
        </div>

        <div className="flex-1 min-h-0">
          <svg
            viewBox={`0 0 ${vbW} ${vbH}`}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            aria-label="机构GDP增速预测火炬图：横轴为增速，各机构预测分段标注"
          >
            {/* 共识区间底色 */}
            <rect
              x={xOf(CONSENSUS[0], plotLeft, plotWidth)}
              y={36}
              width={
                xOf(CONSENSUS[1], plotLeft, plotWidth) -
                xOf(CONSENSUS[0], plotLeft, plotWidth)
              }
              height={axisY - 20}
              fill={CONSENSUS_FILL}
              stroke={CONSENSUS_STROKE}
              strokeWidth={1}
              strokeDasharray="4 3"
              rx={4}
            />
            <text
              x={
                (xOf(CONSENSUS[0], plotLeft, plotWidth) +
                  xOf(CONSENSUS[1], plotLeft, plotWidth)) /
                2
              }
              y={52}
              textAnchor="middle"
              fill={CONSENSUS_STROKE}
              fontSize={11}
              fontWeight={700}
            >
              共识 4.5%–4.8%
            </text>

            {/* 主轴线 */}
            <line
              x1={plotLeft}
              y1={axisY}
              x2={plotLeft + plotWidth}
              y2={axisY}
              stroke="#64748b"
              strokeWidth={2.5}
              strokeLinecap="round"
            />

            {/* 刻度 */}
            {TICKS.map((t) => {
              const x = xOf(t, plotLeft, plotWidth);
              return (
                <g key={t}>
                  <line
                    x1={x}
                    y1={axisY}
                    x2={x}
                    y2={axisY + 8}
                    stroke="#94a3b8"
                    strokeWidth={1.5}
                  />
                  <text x={x} y={axisY + 24} textAnchor="middle" fill="#666" fontSize={11}>
                    {t.toFixed(1)}%
                  </text>
                </g>
              );
            })}

            {/* 分段火炬条 */}
            {boundaries.map((seg, i) => {
              const x1 = xOf(seg.start, plotLeft, plotWidth);
              const x2 = xOf(seg.end, plotLeft, plotWidth);
              const w = Math.max(x2 - x1 - 3, 40);
              const color = seg.items[0].color;
              const midX = (x1 + x1 + w) / 2;
              const names = seg.items.map((it) => it.institution).join(' / ');

              return (
                <g key={`${seg.value}-${i}`}>
                  {/* 段体 */}
                  <rect
                    x={x1 + 1.5}
                    y={barY}
                    width={w}
                    height={barH}
                    rx={5}
                    fill={color}
                    opacity={0.95}
                  />
                  {/* 段内数值 */}
                  <text
                    x={midX}
                    y={barY + barH / 2 + 5}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={13}
                    fontWeight={700}
                  >
                    {seg.value.toFixed(1)}%
                  </text>
                  {/* 段分隔竖线 */}
                  <line
                    x1={x1}
                    y1={barY - 8}
                    x2={x1}
                    y2={barY + barH + 8}
                    stroke="#94a3b8"
                    strokeWidth={1.5}
                  />
                  {i === boundaries.length - 1 && (
                    <line
                      x1={x1 + w + 1.5}
                      y1={barY - 8}
                      x2={x1 + w + 1.5}
                      y2={barY + barH + 8}
                      stroke="#94a3b8"
                      strokeWidth={1.5}
                    />
                  )}
                  {/* 机构名（段上方） */}
                  <text
                    x={midX}
                    y={barY - 14}
                    textAnchor="middle"
                    fill={color}
                    fontSize={12}
                    fontWeight={700}
                  >
                    {names}
                  </text>
                  <line
                    x1={midX}
                    y1={barY - 8}
                    x2={midX}
                    y2={barY - 1}
                    stroke={color}
                    strokeWidth={1.5}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};
