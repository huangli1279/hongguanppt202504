
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
  Area
} from 'recharts';
import { ServiceGoodsDataPoint } from '../types';

interface Props {
  data: ServiceGoodsDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">服务零售: {payload[0].value}%</p>
        <p className="text-slate-500">商品零售: {payload[1].value}%</p>
        <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] text-slate-500">
          剪刀差: {(payload[0].value - payload[1].value).toFixed(1)}%
        </div>
      </div>
    );
  }
  return null;
};

export const ServiceGoodsGapChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年商品零售 vs. 服务零售累计同比增速
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          服务零售全年增长5.5%，持续跑赢商品零售
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
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="服务零售额"
              type="monotone"
              dataKey="service"
              stroke="#005c8f"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />
            <Line
              name="商品零售额"
              type="monotone"
              dataKey="goods"
              stroke="#00a9f4"
              strokeWidth={3}
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
