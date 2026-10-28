import React from 'react';
import {
  retailCpiForecastByInstitution,
  retailCpiForecastConsensus,
  type RetailCpiForecastMetric,
} from '@/data/retailCpiForecast';

const CONSENSUS_FILL = 'rgba(185, 28, 28, 0.08)';
const CONSENSUS_STROKE = '#b91c1c';
const ACTUAL_COLOR = '#64748b';

const ROW_CONFIG = {
  retail: {
    domain: [1.0, 2.5] as [number, number],
    ticks: [1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4],
  },
  cpi: {
    domain: [0.7, 1.3] as [number, number],
    ticks: [0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3],
  },
};

function xOf(value: number, domain: [number, number], left: number, width: number) {
  const [min, max] = domain;
  return left + ((value - min) / (max - min)) * width;
}

const MetricRow: React.FC<{
  metric: RetailCpiForecastMetric;
  y: number;
  plotLeft: number;
  plotWidth: number;
  institutionDots: Array<{ institution: string; value: number }>;
}> = ({ metric, y, plotLeft, plotWidth, institutionDots }) => {
  const { domain, ticks } = ROW_CONFIG[metric.key];
  const barH = 26;
  const xLow = xOf(metric.low, domain, plotLeft, plotWidth);
  const xHigh = xOf(metric.high, domain, plotLeft, plotWidth);
  const xMid = xOf(metric.mid, domain, plotLeft, plotWidth);
  const xActual = xOf(metric.actual, domain, plotLeft, plotWidth);
  const barW = Math.max(xHigh - xLow, 48);
  const actualLeftOfBand = metric.actual < metric.low - 0.05;

  return (
    <g>
      <rect
        x={xLow - 6}
        y={y - 34}
        width={barW + 12}
        height={barH + 46}
        fill={CONSENSUS_FILL}
        stroke={CONSENSUS_STROKE}
        strokeWidth={1}
        strokeDasharray="4 3"
        rx={4}
      />
      <text
        x={xLow + barW / 2}
        y={y - 40}
        textAnchor="middle"
        fill={CONSENSUS_STROKE}
        fontSize={11}
        fontWeight={700}
      >
        共识 {metric.low.toFixed(1)}%–{metric.high.toFixed(1)}%
      </text>

      <text x={plotLeft - 10} y={y + 5} textAnchor="end" fill="#005c8f" fontSize={13} fontWeight={700}>
        {metric.shortLabel}
      </text>

      <line
        x1={plotLeft}
        y1={y}
        x2={plotLeft + plotWidth}
        y2={y}
        stroke="#94a3b8"
        strokeWidth={2}
        strokeLinecap="round"
      />

      <rect x={xLow} y={y - barH / 2} width={barW} height={barH} rx={5} fill={metric.color} opacity={0.95} />
      <text x={xMid} y={y + 5} textAnchor="middle" fill="#fff" fontSize={12} fontWeight={700}>
        {metric.low.toFixed(1)}–{metric.high.toFixed(1)}%
      </text>

      {/* 机构点位：错开上下标注 */}
      {institutionDots.map((d, i) => {
        const x = xOf(d.value, domain, plotLeft, plotWidth);
        const above = i % 2 === 0;
        return (
          <g key={d.institution}>
            <circle cx={x} cy={y} r={4} fill="#fff" stroke={metric.color} strokeWidth={2} />
            <line
              x1={x}
              y1={above ? y - barH / 2 - 2 : y + barH / 2 + 2}
              x2={x}
              y2={above ? y - barH / 2 - 8 : y + barH / 2 + 8}
              stroke={metric.color}
              strokeWidth={1}
            />
            <text
              x={x}
              y={above ? y - barH / 2 - 12 : y + barH / 2 + 20}
              textAnchor="middle"
              fill={metric.color}
              fontSize={10}
              fontWeight={700}
            >
              {d.institution} {d.value.toFixed(1)}
            </text>
          </g>
        );
      })}

      <line
        x1={xActual}
        y1={y - barH / 2 - 2}
        x2={xActual}
        y2={y + barH / 2 + 2}
        stroke={ACTUAL_COLOR}
        strokeWidth={2}
        strokeDasharray="3 2"
      />
      <circle cx={xActual} cy={y} r={4.5} fill={ACTUAL_COLOR} stroke="#fff" strokeWidth={1.5} />
      <text
        x={actualLeftOfBand ? xActual : xActual - 4}
        y={y + barH / 2 + 34}
        textAnchor={actualLeftOfBand ? 'middle' : 'end'}
        fill={ACTUAL_COLOR}
        fontSize={10}
        fontWeight={700}
      >
        {metric.actualLabel} {metric.actual.toFixed(1)}%
      </text>

      {ticks.map((t) => {
        const x = xOf(t, domain, plotLeft, plotWidth);
        return (
          <g key={`${metric.key}-${t}`}>
            <line x1={x} y1={y + 38} x2={x} y2={y + 43} stroke="#cbd5e1" strokeWidth={1} />
            <text x={x} y={y + 54} textAnchor="middle" fill="#94a3b8" fontSize={9}>
              {t.toFixed(1)}
            </text>
          </g>
        );
      })}
    </g>
  );
};

export const RetailCpiForecastChart: React.FC = () => {
  const vbW = 920;
  const vbH = 300;
  const plotLeft = 96;
  const plotWidth = 760;

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <div className="mb-1 flex-shrink-0">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          主流机构对2026年社零与CPI预测共识
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          注：红框为共识区间；白点为中金/Wind/高盛预测；灰点为上半年实际。各行刻度独立。｜单位：%
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-0.5 flex-shrink-0">
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span className="inline-block w-3 h-2 rounded-sm" style={{ backgroundColor: '#4A79AA' }} />
          社零全年累计
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span className="inline-block w-3 h-2 rounded-sm" style={{ backgroundColor: '#2F5F5A' }} />
          CPI全年同比
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#666]">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full border-2 border-white"
            style={{ backgroundColor: ACTUAL_COLOR }}
          />
          上半年实际
        </span>
      </div>

      <div className="flex-1 min-h-0">
        <svg
          viewBox={`0 0 ${vbW} ${vbH}`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-label="主流机构对2026年社零与CPI预测共识区间图"
        >
          <MetricRow
            metric={retailCpiForecastConsensus[0]}
            y={78}
            plotLeft={plotLeft}
            plotWidth={plotWidth}
            institutionDots={retailCpiForecastByInstitution.map((d) => ({
              institution: d.institution,
              value: d.retail,
            }))}
          />
          <MetricRow
            metric={retailCpiForecastConsensus[1]}
            y={210}
            plotLeft={plotLeft}
            plotWidth={plotWidth}
            institutionDots={retailCpiForecastByInstitution.map((d) => ({
              institution: d.institution,
              value: d.cpi,
            }))}
          />
        </svg>
      </div>
    </div>
  );
};
