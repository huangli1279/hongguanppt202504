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
  ReferenceLine
} from 'recharts';
import { FaiComponentsDataPoint } from '../types';

interface Props {
  data: FaiComponentsDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((p: any, index: number) => (
          <p key={index} style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const FaiComponentsChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年固定资产投资关键分项累计同比
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          单位: %
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            <XAxis
              dataKey="month"
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 9 }}
              interval={1}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={['auto', 'auto']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: '10px' }}
              iconType="circle"
              iconSize={8}
            />
            <Line
              name="固定资产投资"
              type="monotone"
              dataKey="totalInvestment"
              stroke="#051c2c"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />
            <Line
              name="制造业投资"
              type="monotone"
              dataKey="manufacturing"
              stroke="#005c8f"
              strokeWidth={2.5}
              dot={false}
              animationDuration={2000}
              animationBegin={200}
            />
            <Line
              name="房地产开发投资"
              type="monotone"
              dataKey="realEstate"
              stroke="#ef4444"
              strokeWidth={2.5}
              dot={false}
              animationDuration={2000}
              animationBegin={400}
            />
            <Line
              name="基础设施建设投资"
              type="monotone"
              dataKey="infrastructure"
              stroke="#94a3b8"
              strokeWidth={2.5}
              dot={false}
              animationDuration={2000}
              animationBegin={600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
