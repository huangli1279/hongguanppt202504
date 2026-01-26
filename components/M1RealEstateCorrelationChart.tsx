
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
import { M1RealEstateDataPoint } from '../types';

interface Props {
  data: M1RealEstateDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-lightBlue font-bold">M1增速: {payload[0].value}%</p>
        <p className="text-slate-500">地产销售面积: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const M1RealEstateCorrelationChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          M1增速与30大中城市商品房成交面积增速关联
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          地产销售低迷显著拖累货币派生能力
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
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
              yAxisId="left"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#00a9f4', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 10]}
            />
             <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-25, 0]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              yAxisId="left"
              name="M1增速"
              type="monotone"
              dataKey="m1"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={{ r: 4, fill: '#00a9f4' }}
              animationDuration={2000}
            />
             <Bar
              yAxisId="right"
              name="地产成交面积增速"
              dataKey="realEstateSales"
              fill="#94a3b8"
              barSize={20}
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
              fillOpacity={0.6}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
