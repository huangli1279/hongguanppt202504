
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
import { VatVsProductionDataPoint } from '../types';

interface Props {
  data: VatVsProductionDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className="text-mckinsey-blue font-bold">国内增值税: {payload[0].value}%</p>
        <p className="text-mckinsey-lightBlue">工业增加值: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const VatVsProductionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年工业增加值 vs 国内增值税同比增速走势
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          11月生产端走弱及PPI负增导致增值税增速大幅偏离工业产出
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
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 10]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Bar
              name="国内增值税"
              dataKey="vat"
              fill="#051c2c"
              barSize={20}
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
            />
            
            <Line
              name="工业增加值"
              type="monotone"
              dataKey="industrial"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={{ r: 4, fill: '#00a9f4' }}
              animationDuration={2000}
              animationBegin={300}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
