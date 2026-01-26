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
import { InvestmentPillarsDataPoint } from '../types';

interface Props {
  data: InvestmentPillarsDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className="text-mckinsey-blue font-bold">制造业: {payload[0].value}%</p>
        <p className="text-slate-500">基建: {payload[1].value}%</p>
        <p className="text-red-500 font-bold">房地产: {payload[2].value}%</p>
      </div>
    );
  }
  return null;
};

export const InvestmentPillarsChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          三大投资板块累计同比增速走势
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          房地产降幅持续走阔(-17.2%)，基建转负，制造业大幅回落
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
              domain={[-20, 15]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="制造业"
              type="monotone"
              dataKey="manufacturing"
              stroke="#005c8f"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />
            <Line
              name="基建"
              type="monotone"
              dataKey="infrastructure"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
              animationDuration={2000}
              animationBegin={300}
            />
            <Line
              name="房地产"
              type="monotone"
              dataKey="realEstate"
              stroke="#ef4444"
              strokeWidth={3}
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
