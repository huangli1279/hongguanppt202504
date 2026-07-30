import React from 'react';
import {
  BarChart,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  ReferenceArea,
  LabelList,
  Cell
} from 'recharts';
import { uiColors, getSeriesColor } from '@/utils/chartColors';

export interface BarConfig {
  dataKey: string;
  name: string;
  color?: string;
  stackId?: string;
}

export interface BarLineConfig {
  dataKey: string;
  name: string;
  color?: string;
  strokeWidth?: number;
  yAxisId?: 'left' | 'right';
  unit?: string;
  /** 虚线样式，如 "6 4" 表示预测段 */
  strokeDasharray?: string;
}

export interface CategoryGroupConfig {
  label: string;
  x1: string;
  x2: string;
  stroke?: string;
  fill?: string;
  fillOpacity?: number;
}

export interface HighlightAreaConfig {
  x1: string;
  x2: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  fill?: string;
  fillOpacity?: number;
}

export interface BaseBarChartProps {
  data: any[];
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  bars: BarConfig[];
  lines?: BarLineConfig[];
  xAxisKey?: string;
  yAxisDomain?: [number, number];
  showYAxis?: boolean;
  yAxisTickFormatter?: (value: any) => string;
  yAxisWidth?: number;
  showReferenceLine?: boolean;
  referenceLineY?: number;
  legendOrder?: string[];
  /** 自定义图例（用于按数据项着色时展示分组色） */
  legendItems?: Array<{ value: string; color: string }>;
  showLegend?: boolean;
  barSize?: number;
  showLabels?: boolean;
  labelPosition?: 'top' | 'center' | 'inside' | 'insideTop' | 'insideBottom';
  labelFill?: string;
  labelFormatter?: (value: any) => string;
  unit?: string;
  showLineYAxis?: boolean;
  lineAxisDomain?: [number, number];
  lineUnit?: string;
  lineYAxisTickFormatter?: (value: any) => string;
  xAxisAngle?: number;
  xAxisHeight?: number;
  xAxisInterval?: number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd';
  xAxisTickFormatter?: (value: any) => string;
  lineShowDot?: boolean;
  lineLabelFormatter?: (value: any) => string;
  /** Gray/outline bands grouping contiguous x-axis categories (e.g. 第二产业 / 第三产业) */
  categoryGroups?: CategoryGroupConfig[];
  /** 高亮区域（如红框标出组内 Top N），无标签 */
  highlightAreas?: HighlightAreaConfig[];
}

const CustomTooltip = ({ active, payload, label, unitByKey, defaultUnit = '%', labelMap }: any) => {
  if (active && payload && payload.length) {
    const displayLabel = labelMap?.[label] ?? label;
    return (
      <div className="bg-white p-2 shadow-lg text-xs font-sans" style={{ border: `1px solid ${uiColors.tooltipBorder}` }}>
        <p className="font-bold text-webank-blue mb-1">{displayLabel}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.payload?.ageGroup ? `${entry.payload.ageGroup}: ` : `${entry.name}: `}
            {entry.value}{unitByKey?.[entry.dataKey] ?? defaultUnit}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface CustomLegendProps {
  payload?: Array<{ value: string; color: string }>;
  legendOrder?: string[];
}

const CustomLegend: React.FC<CustomLegendProps> = ({ payload, legendOrder }) => {
  if (!payload || !payload.length) return null;

  let sortedPayload = payload;
  if (legendOrder && legendOrder.length > 0) {
    const orderMap: { [key: string]: number } = {};
    legendOrder.forEach((name, index) => {
      orderMap[name] = index;
    });
    sortedPayload = [...payload].sort((a, b) => {
      const orderA = orderMap[a.value] ?? 999;
      const orderB = orderMap[b.value] ?? 999;
      return orderA - orderB;
    });
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', flexWrap: 'nowrap', gap: '12px' }}>
      {sortedPayload.map((entry, index) => (
        <li key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: entry.color,
              borderRadius: '50%',
              marginRight: '6px',
              display: 'inline-block',
              flexShrink: 0
            }}
          />
          <span style={{ color: uiColors.tick, fontSize: '10px', whiteSpace: 'nowrap' }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export const BaseBarChart: React.FC<BaseBarChartProps> = ({
  data,
  title,
  subtitle,
  bars,
  lines,
  xAxisKey = 'period',
  yAxisDomain = [0, 8],
  showYAxis = false,
  yAxisTickFormatter,
  yAxisWidth,
  showReferenceLine = false,
  referenceLineY = 0,
  legendOrder,
  legendItems,
  showLegend = true,
  barSize = 16,
  showLabels = true,
  labelPosition = 'top',
  labelFill,
  labelFormatter,
  unit = '%',
  showLineYAxis = false,
  lineAxisDomain,
  lineUnit = '%',
  lineYAxisTickFormatter,
  xAxisAngle,
  xAxisHeight,
  xAxisInterval = 0,
  xAxisTickFormatter,
  lineShowDot = false,
  lineLabelFormatter,
  categoryGroups,
  highlightAreas,
}) => {
  const hasLines = !!lines && lines.length > 0;
  const ChartComponent = hasLines ? ComposedChart : BarChart;
  const unitByKey = bars.reduce((acc, bar) => {
    acc[bar.dataKey] = unit;
    return acc;
  }, {} as Record<string, string>);
  if (hasLines && lines) {
    lines.forEach((line) => {
      unitByKey[line.dataKey] = line.unit ?? lineUnit;
    });
  }
  const barAxisId = hasLines ? 'left' : undefined;
  const lineAxisId = 'right';
  const hasCategoryGroups = !!categoryGroups && categoryGroups.length > 0;
  const hasHighlightAreas = !!highlightAreas && highlightAreas.length > 0;
  const useItemFill = data.some((d) => typeof d?.fill === 'string');
  const labelMap = data.reduce((acc, d) => {
    if (d?.[xAxisKey] != null && d?.name != null) acc[d[xAxisKey]] = d.name;
    return acc;
  }, {} as Record<string, string>);
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-webank-subtext mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent
            data={data}
            margin={{ top: hasCategoryGroups ? 28 : 20, right: 30, left: showYAxis ? (yAxisWidth ? 0 : -20) : 20, bottom: 5 }}
            barSize={barSize}
          >
            <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />
            {categoryGroups?.map((group) => (
              <ReferenceArea
                key={`group-${group.label}-${group.x1}-${group.x2}`}
                x1={group.x1}
                x2={group.x2}
                {...(barAxisId ? { yAxisId: barAxisId } : {})}
                stroke={group.stroke ?? '#94a3b8'}
                strokeWidth={1.5}
                fill={group.fill ?? '#94a3b8'}
                fillOpacity={group.fillOpacity ?? 0.06}
                ifOverflow="hidden"
                label={{
                  value: group.label,
                  position: 'insideTopLeft',
                  fill: '#64748b',
                  fontSize: 10,
                  fontWeight: 600,
                  offset: 6,
                }}
              />
            ))}
            {hasHighlightAreas &&
              highlightAreas?.map((area) => (
                <ReferenceArea
                  key={`highlight-${area.x1}-${area.x2}`}
                  x1={area.x1}
                  x2={area.x2}
                  {...(barAxisId ? { yAxisId: barAxisId } : {})}
                  stroke={area.stroke ?? '#475569'}
                  strokeWidth={area.strokeWidth ?? 2}
                  strokeDasharray={area.strokeDasharray ?? '6 4'}
                  fill={area.fill ?? 'transparent'}
                  fillOpacity={area.fillOpacity ?? 0}
                  ifOverflow="hidden"
                />
              ))}
            {showReferenceLine && (
              <ReferenceLine
                y={referenceLineY}
                stroke={uiColors.tick}
                strokeWidth={1}
                {...(barAxisId ? { yAxisId: barAxisId } : {})}
              />
            )}
            <XAxis
              dataKey={xAxisKey}
              axisLine={showYAxis ? { stroke: uiColors.axis } : false}
              tickLine={false}
              tick={{ fill: uiColors.tick, fontSize: 10 }}
              dy={xAxisAngle ? 25 : 10}
              interval={xAxisInterval}
              angle={xAxisAngle}
              textAnchor={xAxisAngle && xAxisAngle < 0 ? 'end' : undefined}
              height={xAxisHeight}
              tickFormatter={xAxisTickFormatter}
            />
            <YAxis
              hide={!showYAxis}
              domain={yAxisDomain ?? ['auto', 'auto']}
              axisLine={false}
              tickLine={false}
              tick={{ fill: uiColors.tickSecondary, fontSize: 10 }}
              tickFormatter={yAxisTickFormatter || ((val) => `${val}%`)}
              yAxisId={barAxisId}
              width={yAxisWidth}
            />
            {hasLines && (
              <YAxis
                yAxisId={lineAxisId}
                orientation="right"
                domain={lineAxisDomain ?? ['auto', 'auto']}
                axisLine={false}
                tickLine={false}
                tick={{ fill: uiColors.tickSecondary, fontSize: 10 }}
                tickFormatter={lineYAxisTickFormatter || ((val) => `${val}${lineUnit}`)}
                hide={!showLineYAxis}
              />
            )}
            <Tooltip content={<CustomTooltip unitByKey={unitByKey} defaultUnit={unit} labelMap={labelMap} />} cursor={{ stroke: uiColors.cursor, strokeWidth: 1 }} />
            {showLegend && (
              <Legend
                content={(props) => (
                  <CustomLegend
                    legendOrder={legendOrder}
                    payload={legendItems ?? (props.payload as Array<{ value: string; color: string }> | undefined)}
                  />
                )}
              />
            )}
            
            {bars.map((bar, index) => {
              const barColor = bar.color ?? getSeriesColor(index);
              return (
                <Bar
                  key={bar.dataKey}
                  name={bar.name}
                  dataKey={bar.dataKey}
                  fill={barColor}
                  stackId={bar.stackId}
                  yAxisId={barAxisId}
                  animationDuration={800}
                  animationBegin={0}
                  animationEasing="ease-out"
                  radius={0}
                >
                  {useItemFill &&
                    data.map((entry, cellIndex) => (
                      <Cell key={`cell-${bar.dataKey}-${cellIndex}`} fill={entry.fill ?? barColor} />
                    ))}
                  {showLabels && (
                    <LabelList
                      dataKey={bar.dataKey}
                      position={labelPosition as any}
                      fill={labelFill ?? (labelPosition === 'top' ? barColor : '#fff')}
                      fontSize={9}
                      fontWeight={600}
                      formatter={labelFormatter}
                    />
                  )}
                </Bar>
              );
            })}
            {hasLines &&
              lines?.map((line, index) => {
                const lineColor = line.color ?? getSeriesColor(index + bars.length);
                return (
                  <Line
                    key={line.dataKey}
                    name={line.name}
                    type="monotone"
                    dataKey={line.dataKey}
                    stroke={lineColor}
                    strokeWidth={line.strokeWidth || 2}
                    strokeDasharray={line.strokeDasharray}
                    connectNulls={false}
                    dot={lineShowDot}
                    yAxisId={line.yAxisId || lineAxisId}
                    animationDuration={800}
                    animationBegin={0}
                    animationEasing="ease-out"
                  >
                    {lineShowDot && lineLabelFormatter && (
                      <LabelList
                        dataKey={line.dataKey}
                        position="top"
                        fill={lineColor}
                        fontSize={9}
                        fontWeight={600}
                        formatter={lineLabelFormatter}
                      />
                    )}
                  </Line>
                );
              })}
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
