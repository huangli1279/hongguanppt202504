
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
import { RealEstateInvestmentDataPoint } from '../types';

interface Props {
  data: RealEstateInvestmentDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-red-500 font-bold">开发投资: {payload[0].value}%</p>
        <p className="text-slate-500">新开工面积: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const RealEstateInvestmentChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          房地产开发投资 vs 新开工面积累计增速
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          新开工面积降幅超20%，开发投资持续深跌，实物量严重收缩
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
              interval={0}
              angle={-30}
              textAnchor="end"
              height={40}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-30, 5]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="开发投资"
              type="monotone"
              dataKey="investment"
              stroke="#ef4444" // Red for investment drop
              strokeWidth={3}
              dot={{ r: 3 }}
              animationDuration={2000}
            />
            <Line
              name="新开工面积"
              type="monotone"
              dataKey="newStarts"
              stroke="#94a3b8" // Grey for new starts
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
