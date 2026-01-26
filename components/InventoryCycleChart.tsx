
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
import { InventoryCycleDataPoint } from '../types';

interface Props {
  data: InventoryCycleDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">实际库存: {payload[0].value}%</p>
        <p className="text-webank-subtext">名义库存: {payload[1].value}%</p>
        <div className="mt-1 pt-1 border-t border-slate-100 text-[10px] text-slate-500">
           周转天数: {payload[0].payload.days}天
        </div>
      </div>
    );
  }
  return null;
};

export const InventoryCycleChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          产成品存货增速走势 (名义 vs 实际)
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          实际库存增速升至7.0%，大幅高于名义增速，呈现明显“被动补库”特征
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
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
              domain={[0, 8]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: '10px' }} iconType="circle" iconSize={8} />
            
            <Line
              name="实际库存增速 (剔除价格)"
              type="monotone"
              dataKey="real"
              stroke="#005c8f"
              strokeWidth={3}
              dot={{ r: 3, fill: '#005c8f' }}
              animationDuration={2000}
            />
            <Line
              name="名义库存增速"
              type="monotone"
              dataKey="nominal"
              stroke="#94a3b8"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              animationDuration={2000}
              animationBegin={500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
