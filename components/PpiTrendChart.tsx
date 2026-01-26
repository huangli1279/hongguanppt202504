
import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import { PpiTrendDataPoint } from '../types';

interface Props {
  data: PpiTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">PPI环比: {payload[0].value}%</p>
        <p className="text-webank-lightBlue">生产资料PPI环比: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const PpiTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年PPI及生产资料PPI环比走势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          10月起连续3个月正增长，价格弹性显著修复
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            
            {/* Annotation for Q4 Turnaround */}
            <ReferenceLine x="10月" stroke="#ef4444" strokeDasharray="3 3" label={{ value: '拐点', position: 'top', fill: '#ef4444', fontSize: 10 }} />

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
              tickFormatter={(val) => `${val}%`}
              domain={[-0.5, 0.5]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '10px' }}
              iconType="circle"
              iconSize={8}
            />
            
            <Bar
              name="PPI环比"
              dataKey="ppi"
              fill="#051c2c"
              barSize={20}
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
            />
            <Line
              name="生产资料PPI环比"
              type="monotone"
              dataKey="productionMaterials"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={{ r: 3, fill: '#00a9f4' }}
              animationDuration={2000}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
