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
  /** 按系列分组排列柱子（住户存款的放一起，非银存款的放一起），默认 false */
  groupBySeries?: boolean;
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
  /** 图例字号，默认 10 */
  legendFontSize?: number;
  /** 图例间距，默认 12 */
  legendGap?: number;
  barSize?: number;
  showLabels?: boolean;
  labelPosition?: 'top' | 'center' | 'inside' | 'insideTop' | 'insideBottom';
  labelFill?: string;
  labelFormatter?: (value: any) => string;
  labelDy?: number;
  /** 负值柱状图的标签位置，默认 'bottom' 放在柱子下方 */
  labelNegativePosition?: 'top' | 'bottom' | 'insideTop' | 'insideBottom';
  /** 负值标签与柱子的偏移量（正值往上推，负值往下），默认 -10 */
  labelNegativeOffset?: number;
  /** 正值标签与柱子的偏移量（正值往上，负值往下），默认 8 */
  labelPositiveOffset?: number;
  unit?: string;
  showLineYAxis?: boolean;
  lineAxisDomain?: [number, number];
  lineUnit?: string;
  lineYAxisTickFormatter?: (value: any) => string;
  xAxisAngle?: number;
  xAxisHeight?: number;
  xAxisInterval?: number | 'preserveStart' | 'preserveEnd' | 'preserveStartEnd';
  xAxisTickFormatter?: (value: any) => string;
  xAxisTickFontSize?: number;
  lineShowDot?: boolean;
  lineLabelFormatter?: (value: any) => string;
  /** 自定义折线标签渲染，优先级高于 lineLabelFormatter */
  lineLabelContent?: (props: any) => React.ReactNode;
  /** Gray/outline bands grouping contiguous x-axis categories (e.g. 第二产业 / 第三产业) */
  categoryGroups?: CategoryGroupConfig[];
  /** 高亮区域（如红框标出组内 Top N），无标签 */
  highlightAreas?: HighlightAreaConfig[];
  /** 标签与柱子的偏移量（正值往上，负值往下），默认 2 */
  labelOffset?: number;
  /** 各数据列的负值偏移量，key 为 dataKey，value 为偏移量 */
  labelNegativeOffsets?: Record<string, number>;
  /** 按行索引的负值偏移量，key 为行索引，value 为偏移量 */
  labelNegativeOffsetsByIndex?: Record<number, number>;
  /** 垂直分隔线（如在图表中间画一条虚线分割两组柱子） */
  verticalDividerX?: string;
  verticalDividerStroke?: string;
  verticalDividerStrokeDasharray?: string;
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
  fontSize?: number;
  gap?: number;
}

const CustomLegend: React.FC<CustomLegendProps> = ({
  payload,
  legendOrder,
  fontSize = 10,
  gap = 12,
}) => {
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

  const dotSize = Math.max(5, Math.round(fontSize * 0.7));

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: `${Math.max(2, Math.round(gap / 2))}px ${gap}px`,
      }}
    >
      {sortedPayload.map((entry, index) => (
        <li key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          <span
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: entry.color,
              borderRadius: '50%',
              marginRight: '4px',
              display: 'inline-block',
              flexShrink: 0
            }}
          />
          <span style={{ color: uiColors.tick, fontSize: `${fontSize}px`, whiteSpace: 'nowrap' }}>{entry.value}</span>
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
  legendFontSize = 10,
  legendGap = 12,
  barSize = 16,
  showLabels = true,
  labelPosition = 'top',
  labelFill,
  labelFormatter,
  labelDy = 0,
  labelOffset = 2,
  labelNegativePosition = 'bottom',
  labelNegativeOffset = -10,
  labelPositiveOffset = 8,
  labelNegativeOffsets,
  labelNegativeOffsetsByIndex,
  groupBySeries = false,
  unit = '%',
  showLineYAxis = false,
  lineAxisDomain,
  lineUnit = '%',
  lineYAxisTickFormatter,
  xAxisAngle,
  xAxisHeight,
  xAxisInterval = 0,
  xAxisTickFormatter,
  xAxisTickFontSize = 10,
  lineShowDot = false,
  lineLabelFormatter,
  lineLabelContent,
  categoryGroups,
  highlightAreas,
  verticalDividerX,
  verticalDividerStroke = '#94a3b8',
  verticalDividerStrokeDasharray = '4 4',
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
            groupBySeries={groupBySeries}
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
              tick={{ fill: uiColors.tick, fontSize: xAxisTickFontSize }}
              dy={xAxisAngle ? 25 : 10}
              interval={xAxisInterval}
              angle={xAxisAngle}
              textAnchor={xAxisAngle && xAxisAngle < 0 ? 'end' : undefined}
              height={xAxisHeight}
              tickFormatter={xAxisTickFormatter}
            />
            {verticalDividerX && (
              <ReferenceLine
                x={verticalDividerX}
                stroke={verticalDividerStroke}
                strokeDasharray={verticalDividerStrokeDasharray}
                strokeWidth={1.5}
                ifOverflow="extendDomain"
              />
            )}
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
                    fontSize={legendFontSize}
                    gap={legendGap}
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
                      content={({ x, y, width, height, value, textAnchor, payload, index }) => {
                        const isNegative = value < 0;
                        const isOrange = (payload?.fill === '#E07A5F') || (isNegative && bar.color === '#1B4F72');
                        let labelText = labelFormatter ? labelFormatter(value) : value;
                        // 堆叠柱：统一用白色标签，确保对比度
                        const fill = bar.stackId
                          ? '#FFFFFF'
                          : (isOrange ? '#E07A5F' : (labelFill ?? '#475569'));
                        const fontSize = bar.stackId ? 10 : 9;
                        const fontWeight = 700;

                        let labelY = y;
                        if (bar.stackId) {
                          const stackBars = bars.filter(b => b.stackId === bar.stackId);
                          if (stackBars.length > 1) {
                            // 堆叠柱：y 是分段顶部，height 是分段像素高度
                            // 居中于分段中间
                            labelY = y + (height ?? 30) / 2;
                          }
                        } else if (isNegative) {
                          const byIndexOffset = labelNegativeOffsetsByIndex?.[index ?? 0] ?? labelNegativeOffset;
                          const negOffset = labelNegativeOffsets?.[bar.dataKey] ?? byIndexOffset;
                          labelY = labelNegativePosition === 'bottom' ? y - height + negOffset : y;
                        } else {
                          labelY = y - labelPositiveOffset;
                        }
                        return (
                          <text
                            x={x! + width! / 2}
                            y={labelY}
                            textAnchor={textAnchor ?? 'middle'}
                            dominantBaseline="middle"
                            fill={fill}
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            stroke={bar.stackId ? 'rgba(0,0,0,0.25)' : undefined}
                            strokeWidth={bar.stackId ? 0.4 : 0}
                          >
                            {labelText}
                          </text>
                        );
                      }}
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
                    strokeWidth={line.strokeWidth ?? 2}
                    strokeDasharray={line.strokeDasharray}
                    connectNulls={false}
                    dot={lineShowDot ? { r: 4, fill: lineColor, stroke: lineColor, strokeWidth: 0 } : false}
                    yAxisId={line.yAxisId || lineAxisId}
                    animationDuration={800}
                    animationBegin={0}
                    animationEasing="ease-out"
                  >
                    {lineShowDot && (lineLabelFormatter || lineLabelContent) && (
                      <LabelList
                        dataKey={line.dataKey}
                        position="right"
                        fill={lineColor}
                        fontSize={9}
                        fontWeight={600}
                        content={lineLabelContent ? lineLabelContent : undefined}
                        formatter={lineLabelContent ? undefined : lineLabelFormatter}
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
