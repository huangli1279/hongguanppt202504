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
  LabelList
} from 'recharts';
import { uiColors, getSeriesColor } from '@/utils/chartColors';

export interface StackedBarConfig {
  dataKey: string;
  name: string;
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
}

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
  valueFormatter
}) => {
  const totalTicks = data.length;
  const renderCustomTick = (props: any) => {
    const { x, y, payload, index } = props;
    const isFirst = index === 0;
    const isLast = index === totalTicks - 1;
    const isInterval = index % xAxisInterval === 0;
    // Skip interval tick if it's adjacent to the last tick (avoid overlap)
    if (xAxisInterval > 1 && isInterval && !isLast && index + 1 === totalTicks - 1) return null;
    if (!isFirst && !isLast && !isInterval) return null;
    return (
      <text x={x} y={y + 10} textAnchor="middle" fill={uiColors.tick} fontSize={10}>
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
            margin={{ top: 20, right: 30, left: showYAxis ? -20 : 20, bottom: 5 }}
            barSize={barSize}
          >
            <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />
            {showReferenceLine && <ReferenceLine y={referenceLineY} stroke={uiColors.tick} strokeWidth={1} />}
            <XAxis
              dataKey={xAxisKey}
              axisLine={showYAxis ? { stroke: uiColors.axis } : false}
              tickLine={false}
              tick={renderCustomTick}
              interval={0}
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
                </Bar>
              );
            })}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
