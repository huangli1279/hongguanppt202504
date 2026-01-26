
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
import { RealEstatePriceDataPoint } from '../types';

interface Props {
  data: RealEstatePriceDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">一线城市: {payload[0].value}%</p>
        <p className="text-webank-lightBlue">二线城市: {payload[1].value}%</p>
        <p className="text-slate-500">三线城市: {payload[2].value}%</p>
      </div>
    );
  }
  return null;
};

export const RealEstatePriceChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          70个大中城市新建商品住宅价格同比变动
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          各线城市房价普遍下行，一线城市跌幅有所扩大，资产价格承压
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
              domain={[-7, 1]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="一线城市"
              type="monotone"
              dataKey="tier1"
              stroke="#051c2c" // Dark Blue
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />
            <Line
              name="二线城市"
              type="monotone"
              dataKey="tier2"
              stroke="#00a9f4" // Light Blue
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />
            <Line
              name="三线城市"
              type="monotone"
              dataKey="tier3"
              stroke="#94a3b8" // Grey
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              animationDuration={2000}
              animationBegin={600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
