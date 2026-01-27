import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { IndustryGrowthData } from '../types';

interface Props {
  data: IndustryGrowthData[];
}

export const IndustryGrowthChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-xs font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年三产业GDP增加值当季同比增速
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 15, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: '#666' }}
              axisLine={{ stroke: '#cbd5e1' }}
            />
            <YAxis
              domain={[0, 7]}
              tick={{ fontSize: 11, fill: '#666' }}
              axisLine={{ stroke: '#cbd5e1' }}
              label={{ value: '增速 (%)', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#666' } }}
            />
            <Tooltip
              contentStyle={{ fontSize: '11px', border: '1px solid #e2e8f0', borderRadius: '4px' }}
              formatter={(value: number) => `${value}%`}
            />
            <Legend
              wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
            />
            <Bar
              dataKey="2025-03"
              fill="#cbd5e1"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
            <Bar
              dataKey="2025-06"
              fill="#94a3b8"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
            <Bar
              dataKey="2025-09"
              fill="#00a9f4"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
            <Bar
              dataKey="2025-12"
              fill="#005c8f"
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};