import React from 'react';
import {
  LineChart,
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

export interface LineConfig {
  dataKey: string;
  name: string;
  color: string;
  strokeWidth?: number;
  labelPosition?: 'top' | 'bottom';
}

export interface BaseLineChartProps {
  data: any[];
  title: string;
  subtitle?: string;
  lines: LineConfig[];
  yAxisDomain?: [number, number];
  showYAxis?: boolean;
  showReferenceLine?: boolean;
  referenceLineY?: number;
  legendOrder?: string[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
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
          <span style={{ color: '#666', fontSize: '10px' }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export const BaseLineChart: React.FC<BaseLineChartProps> = ({
  data,
  title,
  subtitle,
  lines,
  yAxisDomain = [0, 8],
  showYAxis = false,
  showReferenceLine = false,
  referenceLineY = 0,
  legendOrder
}) => {
  // 自定义标签渲染，仅显示最后一个数据点的值，放在右侧
  const renderCustomLabel = (props: any, color: string) => {
    const { x, y, value, index } = props;
    const isLast = index === data.length - 1;
    if (!isLast) return null;
    return (
      <text x={x + 8} y={y} dy={4} fill={color} fontSize={10} fontWeight={600} textAnchor="start">
        {value}
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
          <LineChart
            data={data}
            margin={{ top: 20, right: 50, left: showYAxis ? -20 : 20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            {showReferenceLine && <ReferenceLine y={referenceLineY} stroke="#666" strokeWidth={1} />}
            <XAxis
              dataKey="period"
              axisLine={showYAxis ? { stroke: '#e5e7eb' } : false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
              interval={0}
            />
            <YAxis
              hide={!showYAxis}
              domain={yAxisDomain}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }} />
            <Legend content={<CustomLegend legendOrder={legendOrder} />} />
            
            {lines.map((line, index) => (
              <Line
                key={line.dataKey}
                name={line.name}
                type="monotone"
                dataKey={line.dataKey}
                stroke={line.color}
                strokeWidth={line.strokeWidth || 2}
                dot={false}
                animationDuration={1500}
                animationBegin={index * 200}
              >
                <LabelList
                  dataKey={line.dataKey}
                  position={line.labelPosition || 'top'}
                  content={(props) => renderCustomLabel(props, line.color)}
                />
              </Line>
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
