import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend
} from 'recharts';
import { GdpDataPoint } from '../types';

interface Props {
  data: GdpDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue">{label}</p>
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

export const GdpTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024Q1-2025Q4季度GDP当季同比增速走势图
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          单位：%
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
            />
            <YAxis
              hide={true}
              domain={[0, 8]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '10px' }} />

            <Line
              name="GDP不变价"
              type="monotone"
              dataKey="value"
              stroke="#005c8f"
              strokeWidth={3}
              dot={{ r: 3, fill: '#005c8f' }}
              animationDuration={1500}
            >
               <LabelList
                  dataKey="value"
                  position="top"
                  offset={10}
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#005c8f', fontSize: '11px', fontWeight: 600 }}
                />
            </Line>

            <Line
              name="GDP现价"
              type="monotone"
              dataKey="nominal"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 3, fill: '#ef4444' }}
              animationDuration={1500}
            >
                <LabelList
                  dataKey="nominal"
                  position="bottom"
                  offset={10}
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#ef4444', fontSize: '10px' }}
                />
            </Line>

          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
