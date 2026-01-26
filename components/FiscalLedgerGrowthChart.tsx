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
import { FiscalLedgerGrowthDataPoint } from '../types';

interface Props {
  data: FiscalLedgerGrowthDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">一般公共预算(一本账): {payload[0].value}%</p>
        <p className="text-red-500 font-bold">政府性基金(二本账): {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const FiscalLedgerGrowthChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          两本账当月支出增速对比
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          二本账支出受土地收入约束波动剧烈，10月深跌后11月略有修复
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
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-25, 10]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="一本账支出"
              type="monotone"
              dataKey="ledger1"
              stroke="#005c8f"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />
            <Line
              name="二本账支出"
              type="monotone"
              dataKey="ledger2"
              stroke="#ef4444"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ r: 3 }}
              animationDuration={2000}
              animationBegin={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};