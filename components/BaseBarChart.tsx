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

export interface BarConfig {
  dataKey: string;
  name: string;
  color: string;
  stackId?: string;
}

export interface BaseBarChartProps {
  data: any[];
  title: string;
  subtitle?: string;
  bars: BarConfig[];
  xAxisKey?: string;
  yAxisDomain?: [number, number];
  showYAxis?: boolean;
  showReferenceLine?: boolean;
  referenceLineY?: number;
  legendOrder?: string[];
  barSize?: number;
  showLabels?: boolean;
}

const CustomTooltip = ({ active, payload, label, unit = '%' }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg text-xs font-sans" style={{ border: `1px solid ${uiColors.tooltipBorder}` }}>
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}{unit}
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
  xAxisKey = 'period',
  yAxisDomain = [0, 8],
  showYAxis = false,
  showReferenceLine = false,
  referenceLineY = 0,
  legendOrder,
  barSize = 16,
  showLabels = true
}) => {
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
              tick={{ fill: uiColors.tick, fontSize: 10 }}
              dy={10}
              interval={0}
            />
            <YAxis
              hide={!showYAxis}
              domain={yAxisDomain ?? ['auto', 'auto']}
              axisLine={false}
              tickLine={false}
              tick={{ fill: uiColors.tickSecondary, fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip content={<CustomTooltip unit="%" />} cursor={{ stroke: uiColors.cursor, strokeWidth: 1 }} />
            <Legend content={<CustomLegend legendOrder={legendOrder} />} />
            
            {bars.map((bar, index) => (
              <Bar
                key={bar.dataKey}
                name={bar.name}
                dataKey={bar.dataKey}
                fill={bar.color}
                stackId={bar.stackId}
                animationDuration={1500}
                animationBegin={index * 200}
                radius={bar.stackId ? 0 : [2, 2, 0, 0]}
              >
                {showLabels && (
                  <LabelList
                    dataKey={bar.dataKey}
                    position="top"
                    fill={bar.color}
                    fontSize={9}
                    fontWeight={600}
                  />
                )}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
