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
    const expPayload = payload.find((p: any) => p.name === '国家财政支出累计增长');
    const incPayload = payload.find((p: any) => p.name === '国家财政收入累计增长');
    
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">国家财政支出累计增长: {expPayload ? expPayload.value : '-'}%</p>
        <p className="text-webank-lightBlue">国家财政收入累计增长: {incPayload ? incPayload.value : '-'}%</p>
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
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年国家财政收支累计同比增长
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
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
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Area
              name="国家财政支出累计增长"
              type="monotone"
              dataKey="expenditure"
              stroke="#051c2c"
              fill="url(#colorExp)"
              strokeWidth={3}
              dot={{ r: 3, fill: '#051c2c' }}
              animationDuration={2000}
            />
             <Area
              name="国家财政收入累计增长"
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