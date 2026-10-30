import React from 'react';
import {
  industrialForecastConsensus,
  industrialForecastByInstitutionNew as industrialForecastByInstitution,
  INDUSTRIAL_TARGET,
} from '@/data/industrialForecast';

const CONSENSUS_FILL = 'rgba(185, 28, 28, 0.10)';
const CONSENSUS_STROKE = '#b91c1c';
const TARGET_FILL = 'rgba(0, 92, 143, 0.08)';
const TARGET_STROKE = '#005c8f';
const ACTUAL_COLOR = '#64748b';
const INTL_COLOR = '#4A79AA';
const DOM_COLOR = '#2F5F5A';

const DOMAIN: [number, number] = [4.5, 5.8];

function xOf(value: number, left: number, width: number) {
  const [min, max] = DOMAIN;
  return left + ((value - min) / (max - min)) * width;
}

export const IndustrialForecastRangeChart: React.FC = () => {
  const vbW = 920;
  const vbH = 360;
  const plotLeft = 96;
  const plotWidth = 760;
  const metric = industrialForecastConsensus[0];

  const axisY = 160;
  const barH = 30;
  const xLow = xOf(metric.low, plotLeft, plotWidth);
  const xHigh = xOf(metric.high, plotLeft, plotWidth);
  const xMid = xOf(metric.mid, plotLeft, plotWidth);
  const xTargetLow = xOf(INDUSTRIAL_TARGET[0], plotLeft, plotWidth);
  const xTargetHigh = xOf(INDUSTRIAL_TARGET[1], plotLeft, plotWidth);
  const barW = Math.max(xHigh - xLow, 48);

  const dotY = 55;
  const sortedDots = [...industrialForecastByInstitution].sort((a, b) => a.value - b.value);

  const minLabelGap = 70;
  type Positioned = {
    institution: string;
    value: number;
    x: number;
    color: string;
    labelX: number;
    anchor: 'start' | 'end';
    labelY: number;
  };

  const isIntl = (name: string) => false;

  const positioned: Positioned[] = sortedDots.map((d, i, arr) => {
    const x = xOf(d.value, plotLeft, plotWidth);
    const prevX = i > 0 ? xOf(arr[i - 1].value, plotLeft, plotWidth) : -Infinity;
    const nextX = i < arr.length - 1 ? xOf(arr[i + 1].value, plotLeft, plotWidth) : Infinity;
    const distLeft = x - prevX;
    const distRight = nextX - x;
    let anchor: 'start' | 'end';
    if (distLeft < distRight) {
      anchor = 'end';
    } else {
      anchor = 'start';
    }
    const labelX = anchor === 'end' ? x - 8 : x + 8;
    const sameValueBefore = arr.slice(0, i).filter((p) => Math.abs(p.value - d.value) < 0.001).length;
    const labelY = dotY - 18 - sameValueBefore * 14;
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

  const targetBoxTop = axisY - 75;
  const targetBoxBottom = axisY + 70;
  const consensusBoxTop = axisY - 48;
  const consensusBoxBottom = axisY + 48;

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <div className="mb-2 flex-shrink-0">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          国内外机构对2026年工业增加值增速预测：机构共识 5.0%–5.5%
        </h3>
        <p className="text-xs text-webank-subtext mt-1 leading-relaxed">
          注：蓝框为全年目标/情景区间（4.8%–5.6%）；红框为机构共识（5.0%–5.5%）；Q4 增速预计回落至 4.8%–5.2%；上排为机构点预测，下方为共识条｜单位：%
        </p>
      </div>

      <div className="flex justify-center gap-5 mb-1 flex-shrink-0 flex-wrap">
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span
            className="inline-block w-3 h-2 rounded-sm border"
            style={{ borderColor: TARGET_STROKE, backgroundColor: TARGET_FILL }}
          />
          全年目标 4.8%–5.6%
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span
            className="inline-block w-3 h-2 rounded-sm border"
            style={{ borderColor: CONSENSUS_STROKE, backgroundColor: CONSENSUS_FILL }}
          />
          共识区间 5.0%–5.5%
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
          上半年累计
        </span>
      </div>

      <div className="flex-1 min-h-0">
        <svg
          viewBox={`0 0 ${vbW} ${vbH}`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-label="国内外机构对2026年工业增加值增速预测与全年目标区间图"
        >
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
            全年目标 4.8%–5.6%
          </text>

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
              <line
                x1={p.x}
                y1={dotY}
                x2={p.labelX}
                y2={p.labelY + 4}
                stroke={p.color}
                strokeWidth={0.8}
                opacity={0.7}
              />
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
              <circle cx={p.x} cy={dotY} r={4} fill="#fff" stroke={p.color} strokeWidth={2} />
            </g>
          ))}

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
