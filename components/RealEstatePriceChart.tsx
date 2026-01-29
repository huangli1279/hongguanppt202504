
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
import { RealEstateMarketDataPoint } from '../types';

interface Props {
  data: RealEstateMarketDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-red-500">新建商品住宅价格指数同比: {payload[0].value}%</p>
        <p className="text-webank-blue">二手住宅价格指数同比: {payload[1].value}%</p>
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
          2024年1月-2025年12月70个大中城市房价指数同比变化
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          单位：%
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 40, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
              interval={0}
              ticks={['2024-01', '2024-05', '2024-09', '2025-01', '2025-05', '2025-09', '2025-12']}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}`}
              domain={['auto', 'auto']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="新建商品住宅价格指数同比"
              type="monotone"
              dataKey="newHomePriceIndex"
              stroke="#ef4444" // Red
              strokeWidth={3}
              dot={(props: any) => {
                const { cx, cy, payload } = props;
                if (payload.month === '2025-12') {
                  return (
                    <g key={`dot-newHome-${payload.month}`}>
                      <circle cx={cx} cy={cy} r={4} fill="#ef4444" />
                      <text x={cx} y={cy - 10} textAnchor="middle" fontSize={9} fill="#ef4444">{payload.newHomePriceIndex}%</text>
                    </g>
                  );
                }
                return <g key={`dot-newHome-${payload.month}`} />;
              }}
              animationDuration={2000}
            />
            <Line
              name="二手住宅价格指数同比"
              type="monotone"
              dataKey="secondHandPriceIndex"
              stroke="#051c2c" // Dark Blue
              strokeWidth={2}
              dot={(props: any) => {
                const { cx, cy, payload } = props;
                if (payload.month === '2025-12') {
                  return (
                    <g key={`dot-secondHand-${payload.month}`}>
                      <circle cx={cx} cy={cy} r={4} fill="#051c2c" />
                      <text x={cx} y={cy - 10} textAnchor="middle" fontSize={9} fill="#051c2c">{payload.secondHandPriceIndex}%</text>
                    </g>
                  );
                }
                return <g key={`dot-secondHand-${payload.month}`} />;
              }}
              animationDuration={2000}
              animationBegin={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
