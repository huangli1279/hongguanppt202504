import React from 'react';
import {
  gdpForecastConsensus,
  gdpForecastByInstitutionNew,
  GOVERNMENT_TARGET,
} from '@/data/gdpForecast';

const CONSENSUS_FILL = 'rgba(185, 28, 28, 0.10)';
const CONSENSUS_STROKE = '#b91c1c';
const TARGET_FILL = 'rgba(0, 92, 143, 0.08)';
const TARGET_STROKE = '#005c8f';
const ACTUAL_COLOR = '#64748b';
const INTL_COLOR = '#4A79AA';
const DOM_COLOR = '#2F5F5A';

const DOMAIN: [number, number] = [4.0, 5.4];

function xOf(value: number, left: number, width: number) {
  const [min, max] = DOMAIN;
  return left + ((value - min) / (max - min)) * width;
}

export const GdpForecastRangeChart: React.FC = () => {
  const vbW = 920;
  const vbH = 360;
  const plotLeft = 96;
  const plotWidth = 760;
  const metric = gdpForecastConsensus[0];

  const axisY = 160;
  const barH = 30;
  const xLow = xOf(metric.low, plotLeft, plotWidth);
  const xHigh = xOf(metric.high, plotLeft, plotWidth);
  const xMid = xOf(metric.mid, plotLeft, plotWidth);
  const xTargetLow = xOf(GOVERNMENT_TARGET[0], plotLeft, plotWidth);
  const xTargetHigh = xOf(GOVERNMENT_TARGET[1], plotLeft, plotWidth);
  const xActual = xOf(metric.actual, plotLeft, plotWidth);
  const barW = Math.max(xHigh - xLow, 48);
  const actualLeftOfBand = metric.actual < metric.low - 0.05;

  // 机构点放在上半区，与轴拉开足够空间
  const dotY = 55;
  const sortedDots = [...gdpForecastByInstitutionNew].sort((a, b) => a.value - b.value);

  // 为每个点计算标签位置：检测与左右相邻点的距离，靠近则把标签往外推
  const minLabelGap = 70; // 标签之间最小水平间距（px）
  type Positioned = {
    institution: string;
    value: number;
    x: number;
    color: string;
    labelX: number;
    anchor: 'start' | 'end';
    labelY: number;
  };

  const isIntl = (name: string) => ['IMF', 'OECD'].includes(name);

  // 国际组织标签强制错开 Y：IMF 在上，OECD 在下
  const EXPLICIT_INTL_Y: Record<string, number> = {
    IMF: dotY - 18,
    OECD: dotY - 34,
  };

  const positioned: Positioned[] = sortedDots.map((d, i, arr) => {
    const x = xOf(d.value, plotLeft, plotWidth);
    const prevX = i > 0 ? xOf(arr[i - 1].value, plotLeft, plotWidth) : -Infinity;
    const nextX = i < arr.length - 1 ? xOf(arr[i + 1].value, plotLeft, plotWidth) : Infinity;
    const distLeft = x - prevX;
    const distRight = nextX - x;
    // 距离较小的一侧 —— 标签伸向另一侧
    let anchor: 'start' | 'end';
    if (distLeft < distRight) {
      anchor = 'end';
    } else {
      anchor = 'start';
    }
    // 标签 x：朝外偏移 8px
    const labelX = anchor === 'end' ? x - 8 : x + 8;
    // 同值点错开 y（国际组织已由 EXPLICIT_INTL_Y 预设，直接覆盖）
    const sameValueBefore = arr.slice(0, i).filter((p) => Math.abs(p.value - d.value) < 0.001).length;
    const labelY =
      d.institution in EXPLICIT_INTL_Y
        ? EXPLICIT_INTL_Y[d.institution]
        : dotY - 18 - sameValueBefore * 14;
    return {
      institution: d.institution,
      value: d.value,
      x,
      color: isIntl(d.institution) ? INTL_COLOR : DOM_COLOR,
      labelX,
      anchor,
      labelY,
    };
  });

  // 框的上下沿：与 Slide16 相同间距比例，确保全部落在 vbH=360 内
  const targetBoxTop = axisY - 75;
  const targetBoxBottom = axisY + 70;
  const consensusBoxTop = axisY - 48;
  const consensusBoxBottom = axisY + 48;

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <div className="mb-2 flex-shrink-0">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          国内外机构对2026年GDP增速预测：共识处于政府目标下限
        </h3>
        <p className="text-xs text-webank-subtext mt-1 leading-relaxed">
          注：蓝框为政府工作报告目标（4.5%–5.0%）；红框为机构共识（4.5%–4.8%）；上排为机构点预测，下方为共识条｜单位：%
        </p>
      </div>

      <div className="flex justify-center gap-5 mb-1 flex-shrink-0 flex-wrap">
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span
            className="inline-block w-3 h-2 rounded-sm border"
            style={{ borderColor: TARGET_STROKE, backgroundColor: TARGET_FILL }}
          />
          政府目标 4.5%–5.0%
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span
            className="inline-block w-3 h-2 rounded-sm border"
            style={{ borderColor: CONSENSUS_STROKE, backgroundColor: CONSENSUS_FILL }}
          />
          共识区间 4.5%–4.8%
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: INTL_COLOR }}
          />
          国际组织
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: DOM_COLOR }}
          />
          国内券商
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span
            className="inline-block w-0.5 h-3"
            style={{ backgroundColor: ACTUAL_COLOR }}
          />
          上半年均值
        </span>
      </div>

      <div className="flex-1 min-h-0">
        <svg
          viewBox={`0 0 ${vbW} ${vbH}`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-label="国内外机构对2026年GDP增速预测与政府目标区间图"
        >
          {/* ========== 政府目标区间（外层蓝框） ========== */}
          <rect
            x={xTargetLow - 8}
            y={targetBoxTop}
            width={xTargetHigh - xTargetLow + 16}
            height={targetBoxBottom - targetBoxTop}
            fill={TARGET_FILL}
            stroke={TARGET_STROKE}
            strokeWidth={1.2}
            strokeDasharray="6 3"
            rx={6}
          />
          <text
            x={(xTargetLow + xTargetHigh) / 2}
            y={targetBoxTop - 8}
            textAnchor="middle"
            fill={TARGET_STROKE}
            fontSize={12}
            fontWeight={700}
          >
            政府目标 4.5%–5.0%
          </text>

          {/* ========== 机构共识区间（嵌套红框） ========== */}
          <rect
            x={xLow - 6}
            y={consensusBoxTop}
            width={barW + 12}
            height={consensusBoxBottom - consensusBoxTop}
            fill={CONSENSUS_FILL}
            stroke={CONSENSUS_STROKE}
            strokeWidth={1}
            strokeDasharray="4 3"
            rx={5}
          />
          <text
            x={xLow + barW / 2}
            y={consensusBoxTop - 6}
            textAnchor="middle"
            fill={CONSENSUS_STROKE}
            fontSize={11}
            fontWeight={700}
          >
            共识区间
          </text>

          {/* ========== 上半区：机构散点 + 引线标签 ========== */}
          <text
            x={plotLeft - 10}
            y={dotY + 4}
            textAnchor="end"
            fill="#005c8f"
            fontSize={12}
            fontWeight={700}
          >
            机构
          </text>

          {/* 引导参考轴（淡灰虚线连到共识轴） */}
          {sortedDots.map((d) => {
            const x = xOf(d.value, plotLeft, plotWidth);
            return (
              <line
                key={`guide-${d.institution}`}
                x1={x}
                y1={dotY + 10}
                x2={x}
                y2={axisY - barH / 2 - 6}
                stroke="#cbd5e1"
                strokeWidth={1}
                strokeDasharray="2 4"
              />
            );
          })}

          {positioned.map((p) => (
            <g key={p.institution}>
              {/* 引线：从点向标签方向延伸（仅画到与 labelY 同高的位置） */}
              <line
                x1={p.x}
                y1={dotY}
                x2={p.labelX}
                y2={p.labelY + 4}
                stroke={p.color}
                strokeWidth={0.8}
                opacity={0.7}
              />
              {/* 机构名 */}
              <text
                x={p.labelX}
                y={p.labelY}
                textAnchor={p.anchor}
                fill={p.color}
                fontSize={11}
                fontWeight={700}
              >
                {p.institution}
              </text>
              {/* 数值 */}
              <text
                x={p.labelX}
                y={p.labelY + 12}
                textAnchor={p.anchor}
                fill={p.color}
                fontSize={10}
                fontWeight={600}
                opacity={0.85}
              >
                {p.value.toFixed(1)}%
              </text>
              {/* 圆点 */}
              <circle cx={p.x} cy={dotY} r={4} fill="#fff" stroke={p.color} strokeWidth={2} />
            </g>
          ))}

          {/* ========== 下半区：共识条 ========== */}
          <text
            x={plotLeft - 10}
            y={axisY + 4}
            textAnchor="end"
            fill="#005c8f"
            fontSize={12}
            fontWeight={700}
          >
            {metric.shortLabel}
          </text>

          <line
            x1={plotLeft}
            y1={axisY}
            x2={plotLeft + plotWidth}
            y2={axisY}
            stroke="#94a3b8"
            strokeWidth={2}
            strokeLinecap="round"
          />

          <rect
            x={xLow}
            y={axisY - barH / 2}
            width={barW}
            height={barH}
            rx={5}
            fill={metric.color}
            opacity={0.95}
          />
          <text
            x={xMid}
            y={axisY + 5}
            textAnchor="middle"
            fill="#fff"
            fontSize={12}
            fontWeight={700}
          >
            {metric.low.toFixed(1)}–{metric.high.toFixed(1)}%
          </text>

          {/* 目标上限 5.0% 虚线贯穿 */}
          <line
            x1={xTargetHigh}
            y1={targetBoxTop}
            x2={xTargetHigh}
            y2={axisY + barH / 2 + 2}
            stroke={TARGET_STROKE}
            strokeWidth={1}
            strokeDasharray="2 3"
            opacity={0.55}
          />

        </svg>
      </div>
    </div>
  );
};