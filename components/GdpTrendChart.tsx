import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { GdpDataPoint } from '../types';

interface Props {
  data: GdpDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue">{label}</p>
        <p className="text-webank-accent">
          GDP增速: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export const GdpTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          季度GDP当季同比增速 (2024-2025)
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          2025年呈现“前高后低”走势，Q4回落至4.5%
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#005c8f" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#005c8f" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis 
              dataKey="period" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              hide={true} 
              domain={[3, 6]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1 }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#005c8f"
              strokeWidth={3}
              fill="url(#colorGdp)"
              animationDuration={1500}
            >
               <LabelList 
                  dataKey="value" 
                  position="top" 
                  offset={10} 
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#051c2c', fontSize: '11px', fontWeight: 600 }}
                />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};