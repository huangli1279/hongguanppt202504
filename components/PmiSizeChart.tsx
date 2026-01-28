
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
import { PmiSizeTrendDataPoint } from '../types';

interface Props {
  data: PmiSizeTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">2025-{label}</p>
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

export const PmiSizeChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年1-12月分企业规模PMI对比趋势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          大型企业维持在扩张区间，中小企业景气度仍待改善
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={50} stroke="#333" strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              domain={[45, 55]}
              ticks={[45, 47, 50, 52, 55]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '10px' }}
              iconType="circle"
              iconSize={8}
              payload={[
                { value: '小型企业', type: 'circle', id: 'small', color: '#ef4444' },
                { value: '中型企业', type: 'circle', id: 'medium', color: '#94a3b8' },
                { value: '大型企业', type: 'circle', id: 'large', color: '#051c2c' }
              ]}
            />
            <Line
              name="小型企业"
              type="monotone"
              dataKey="small"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 3, fill: '#ef4444' }}
              activeDot={{ r: 5 }}
              label={({ x, y, stroke, value, index }: any) => {
                const item = data[index];
                if (item && item.month === '12') {
                  return (
                    <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} fontWeight="bold" textAnchor="middle">
                      {value}%
                    </text>
                  );
                }
                return null;
              }}
            />
            <Line
              name="中型企业"
              type="monotone"
              dataKey="medium"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={{ r: 3, fill: '#94a3b8' }}
              activeDot={{ r: 5 }}
              label={({ x, y, stroke, value, index }: any) => {
                const item = data[index];
                if (item && item.month === '12') {
                  return (
                    <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} fontWeight="bold" textAnchor="middle">
                      {value}%
                    </text>
                  );
                }
                return null;
              }}
            />
            <Line
              name="大型企业"
              type="monotone"
              dataKey="large"
              stroke="#051c2c"
              strokeWidth={2}
              dot={{ r: 3, fill: '#051c2c' }}
              activeDot={{ r: 5 }}
              label={({ x, y, stroke, value, index }: any) => {
                const item = data[index];
                if (item && item.month === '12') {
                  return (
                    <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} fontWeight="bold" textAnchor="middle">
                      {value}%
                    </text>
                  );
                }
                return null;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
