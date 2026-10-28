import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  ReferenceArea,
  LabelList,
  usePlotArea,
  useYAxisDomain,
} from 'recharts';
import { uiColors, getSeriesColor, chartColors } from '@/utils/chartColors';

export interface StackedBarConfig {
  dataKey: string;
  name: string;
  color?: string;
}

export interface CategoryGroupConfig {
  label: string;
  x1: string;
  x2: string;
  stroke?: string;
  fill?: string;
  fillOpacity?: number;
}

/** 两根柱之间的差距标注（如房价涨跌对应的消费落差） */
export interface GapAnnotationConfig {
  fromCategory: string;
  toCategory: string;
  label: string;
  color?: string;
}

export interface BaseStackedBarChartProps {
  data: any[];
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  bars: StackedBarConfig[];
  xAxisKey?: string;
  yAxisDomain?: [number, number];
  showYAxis?: boolean;
  showReferenceLine?: boolean;
  referenceLineY?: number;
  legendOrder?: string[];
  barSize?: number;
  showLabels?: boolean;
  unit?: string;
  xAxisInterval?: number;
  valueFormatter?: (value: number) => string;
  xAxisAngle?: number;
  xAxisHeight?: number;
  showTotalLabel?: boolean;
  totalLabelFormatter?: (total: number, dataPoint: any) => string;
  /** 顶部区间标注（如「一套房 / 大于一套房」） */
  categoryGroups?: CategoryGroupConfig[];
  /** 在指定类别右侧画虚线分割 */
  verticalSplitAfter?: string;
  /** 柱顶差距括号标注 */
  gapAnnotations?: GapAnnotationConfig[];
}

const GapAnnotationsLayer: React.FC<{
  data: any[];
  xAxisKey: string;
  annotations: GapAnnotationConfig[];
  getStackTotal: (dataPoint: any) => number;
}> = ({ data, xAxisKey, annotations, getStackTotal }) => {
  const plotArea = usePlotArea();
  const yDomain = useYAxisDomain(0);

  if (!plotArea || !yDomain || yDomain.length < 2 || !annotations.length) return null;

  const [yMin, yMax] = yDomain as [number, number];
  if (yMax === yMin) return null;

  const bandWidth = plotArea.width / data.length;
  const valueToY = (value: number) =>
    plotArea.y + plotArea.height * (1 - (value - yMin) / (yMax - yMin));
  const categoryToX = (category: string) => {
    const idx = data.findIndex((d) => d[xAxisKey] === category);
    if (idx < 0) return null;
    return plotArea.x + (idx + 0.5) * bandWidth;
  };

  return (
    <g className="recharts-gap-annotations" pointerEvents="none">
      {annotations.map((ann, i) => {
        const x1 = categoryToX(ann.fromCategory);
        const x2 = categoryToX(ann.toCategory);
        if (x1 == null || x2 == null) return null;

        const fromPoint = data.find((d) => d[xAxisKey] === ann.fromCategory);
        const toPoint = data.find((d) => d[xAxisKey] === ann.toCategory);
        if (!fromPoint || !toPoint) return null;

        const y1 = valueToY(getStackTotal(fromPoint));
        const y2 = valueToY(getStackTotal(toPoint));
        const color = ann.color ?? chartColors.negative;
        const bracketY = Math.min(y1, y2) - 22;
        const tickTop = bracketY;
        const midX = (x1 + x2) / 2;

        return (
          <g key={`gap-ann-${i}-${ann.label}`}>
            <line x1={x1} y1={y1 - 12} x2={x1} y2={tickTop} stroke={color} strokeWidth={1.5} />
            <line x1={x2} y1={y2 - 12} x2={x2} y2={tickTop} stroke={color} strokeWidth={1.5} />
            <line x1={x1} y1={tickTop} x2={x2} y2={tickTop} stroke={color} strokeWidth={1.5} />
            <rect
              x={midX - 28}
              y={tickTop - 16}
              width={56}
              height={16}
              rx={3}
              fill="#fff"
              stroke={color}
              strokeWidth={1}
            />
            <text
              x={midX}
              y={tickTop - 4}
              textAnchor="middle"
              fill={color}
              fontSize={11}
              fontWeight={700}
            >
              {ann.label}
            </text>
          </g>
        );
      })}
    </g>
  );
};

const CustomTooltip = ({ active, payload, label, unit = '', valueFormatter }: any) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
    const formatValue = (val: number) => valueFormatter ? valueFormatter(val) : val;
    
    return (
      <div className="bg-white p-2 shadow-lg text-xs font-sans" style={{ border: `1px solid ${uiColors.tooltipBorder}` }}>
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {formatValue(entry.value)}{unit}
          </p>
        ))}
        <p className="font-bold border-t border-slate-200 mt-1 pt-1">
          合计: {formatValue(total)}{unit}
        </p>
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
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px 20px' }}>
      {sortedPayload.map((entry, index) => (
        <li key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: entry.color,
              borderRadius: '50%',
              marginRight: '6px',
              display: 'inline-block'
            }}
          />
          <span style={{ color: uiColors.tick, fontSize: '10px' }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export const BaseStackedBarChart: React.FC<BaseStackedBarChartProps> = ({
  data,
  title,
  subtitle,
  bars,
  xAxisKey = 'period',
  yAxisDomain = [0, 8],
  showYAxis = false,
  showReferenceLine = false,
  referenceLineY = 0,
  legendOrder,
  barSize = 24,
  showLabels = true,
  unit = '',
  xAxisInterval = 2,
  valueFormatter,
  xAxisAngle,
  xAxisHeight,
  showTotalLabel = false,
  totalLabelFormatter,
  categoryGroups,
  verticalSplitAfter,
  gapAnnotations,
}) => {
  const totalTicks = data.length;
  const hasCategoryGroups = !!categoryGroups && categoryGroups.length > 0;
  const hasGapAnnotations = !!gapAnnotations && gapAnnotations.length > 0;
  const getStackTotal = (dataPoint: any) =>
    bars.reduce((sum, bar) => sum + (Number(dataPoint?.[bar.dataKey]) || 0), 0);
  const renderCustomTick = (props: any) => {
    const { x, y, payload, index } = props;
    const isFirst = index === 0;
    const isLast = index === totalTicks - 1;
    const isInterval = index % xAxisInterval === 0;
    // Skip interval tick if it's adjacent to the last tick (avoid overlap)
    if (xAxisInterval > 1 && isInterval && !isLast && index + 1 === totalTicks - 1) return null;
    if (!isFirst && !isLast && !isInterval) return null;
    const textAnchor = xAxisAngle ? 'end' : 'middle';
    const transform = xAxisAngle ? `rotate(${xAxisAngle}, ${x}, ${y + 10})` : undefined;
    return (
      <text x={x} y={y + 10} textAnchor={textAnchor} fill={uiColors.tick} fontSize={10} transform={transform}>
        {payload.value}
      </text>
    );
  };
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
          <BarChart
            data={data}
            margin={{
              top: hasGapAnnotations ? 36 : hasCategoryGroups || showTotalLabel ? 28 : 20,
              right: 30,
              left: showYAxis ? -20 : 20,
              bottom: 5,
            }}
            barSize={barSize}
          >
            <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />
            {categoryGroups?.map((group) => (
              <ReferenceArea
                key={`group-${group.label}-${group.x1}-${group.x2}`}
                x1={group.x1}
                x2={group.x2}
                stroke="none"
                fill={group.fill ?? '#94a3b8'}
                fillOpacity={group.fillOpacity ?? 0.05}
                ifOverflow="hidden"
                label={{
                  value: group.label,
                  position: 'insideTop',
                  fill: '#64748b',
                  fontSize: 11,
                  fontWeight: 600,
                  offset: 4,
                }}
              />
            ))}
            {showReferenceLine && <ReferenceLine y={referenceLineY} stroke={uiColors.tick} strokeWidth={1} />}
            {verticalSplitAfter && (
              <ReferenceLine
                x={verticalSplitAfter}
                position="end"
                stroke="#94a3b8"
                strokeDasharray="5 4"
                strokeWidth={1.5}
              />
            )}
            <XAxis
              dataKey={xAxisKey}
              axisLine={showYAxis ? { stroke: uiColors.axis } : false}
              tickLine={false}
              tick={renderCustomTick}
              interval={0}
              height={xAxisHeight}
            />
            <YAxis
              hide={!showYAxis}
              domain={yAxisDomain ?? ['auto', 'auto']}
              axisLine={false}
              tickLine={false}
              tick={{ fill: uiColors.tickSecondary, fontSize: 10 }}
            />
            <Tooltip 
              content={<CustomTooltip unit={unit} valueFormatter={valueFormatter} />} 
              cursor={{ stroke: uiColors.cursor, strokeWidth: 1 }} 
            />
            <Legend content={<CustomLegend legendOrder={legendOrder} />} />
            
            {bars.map((bar, index) => {
              const barColor = bar.color ?? getSeriesColor(index);
              const isTopBar = index === bars.length - 1;
              return (
                <Bar
                  key={bar.dataKey}
                  name={bar.name}
                  dataKey={bar.dataKey}
                  fill={barColor}
                  stackId="stack"
                  animationDuration={800}
                  animationBegin={0}
                  animationEasing="ease-out"
                >
                  {showLabels && (
                    <LabelList
                      dataKey={bar.dataKey}
                      position="inside"
                      fill="#fff"
                      fontSize={8}
                      fontWeight={600}
                      formatter={valueFormatter}
                    />
                  )}
                  {showTotalLabel && isTopBar && (
                    <LabelList
                      content={(props: any) => {
                        const { x, y, width, index: dataIndex } = props;
                        if (dataIndex == null || x == null || y == null || width == null) return null;
                        const dataPoint = data[dataIndex];
                        const total = getStackTotal(dataPoint);
                        const label = totalLabelFormatter
                          ? totalLabelFormatter(total, dataPoint)
                          : String(total);
                        return (
                          <text
                            x={x + width / 2}
                            y={y - 6}
                            textAnchor="middle"
                            fill={uiColors.tick}
                            fontSize={10}
                            fontWeight={600}
                          >
                            {label}
                          </text>
                        );
                      }}
                    />
                  )}
                </Bar>
              );
            })}
            {hasGapAnnotations && (
              <GapAnnotationsLayer
                data={data}
                xAxisKey={xAxisKey}
                annotations={gapAnnotations!}
                getStackTotal={getStackTotal}
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
