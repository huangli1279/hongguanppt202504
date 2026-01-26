import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import { BroadFiscalTrendDataPoint } from '../types';

interface Props {
  data: BroadFiscalTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className="text-mckinsey-blue font-bold">广义支出: {payload[0].value}%</p>
        <p className="text-mckinsey-lightBlue">广义收入: {payload[1].value}%</p>
        <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] text-slate-500">
           支出斜率放缓
        </div>
      </div>
    );
  }
  return null;
};

export const BroadFiscalTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年1-11月广义财政收支累计同比增速
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          广义支出增速回落至4.5%，收入端受土地市场拖累转负
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
             <defs>
              <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#051c2c" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#051c2c" stopOpacity={0}/>
              </linearGradient>
            </defs>
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
              domain={[-2, 10]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Area
              name="广义支出"
              type="monotone"
              dataKey="expenditure"
              stroke="#051c2c"
              fill="url(#colorExp)"
              strokeWidth={3}
              dot={{ r: 3, fill: '#051c2c' }}
              animationDuration={2000}
            />
             <Area
              name="广义收入"
              type="monotone"
              dataKey="income"
              stroke="#00a9f4"
              fill="transparent"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};