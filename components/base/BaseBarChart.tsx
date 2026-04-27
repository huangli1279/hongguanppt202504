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
  LabelList
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
  lineShowDot?: boolean;
  lineLabelFormatter?: (value: any) => string;
}

const CustomTooltip = ({ active, payload, label, unitByKey, defaultUnit = '%' }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg text-xs font-sans" style={{ border: `1px solid ${uiColors.tooltipBorder}` }}>
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}{unitByKey?.[entry.dataKey] ?? defaultUnit}
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
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '24px' }}>
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
  lineShowDot = false,
  lineLabelFormatter
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
            margin={{ top: 20, right: 30, left: showYAxis ? (yAxisWidth ? 0 : -20) : 20, bottom: 5 }}
            barSize={barSize}
          >
            <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />
            {showReferenceLine && <ReferenceLine y={referenceLineY} stroke={uiColors.tick} strokeWidth={1} />}
            <XAxis
              dataKey={xAxisKey}
              axisLine={showYAxis ? { stroke: uiColors.axis } : false}
              tickLine={false}
              tick={{ fill: uiColors.tick, fontSize: 10 }}
              dy={xAxisAngle ? 4 : 10}
              interval={xAxisInterval}
              angle={xAxisAngle}
              textAnchor={xAxisAngle && xAxisAngle < 0 ? 'end' : undefined}
              height={xAxisHeight}
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
            <Tooltip content={<CustomTooltip unitByKey={unitByKey} defaultUnit={unit} />} cursor={{ stroke: uiColors.cursor, strokeWidth: 1 }} />
            <Legend content={<CustomLegend legendOrder={legendOrder} />} />
            
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
