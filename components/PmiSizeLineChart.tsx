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
import { PmiSizeTrendDataPoint } from '../types';

interface Props {
  data: PmiSizeTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((p: any, index: number) => (
          <p key={index} style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
        <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] text-slate-500">
          50% = 荣枯线
        </div>
      </div>
    );
  }
  return null;
};

export const PmiSizeLineChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年大、中、小型企业制造业PMI数据
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          大型企业重回扩张区间，中小企业仍处荣枯线下
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            
            <ReferenceLine y={50} stroke="#333" strokeDasharray="3 3" strokeWidth={1} label={{ value: '荣枯线 50%', position: 'insideRight', fill: '#666', fontSize: 10 }} />
            
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
              domain={['auto', 'auto']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '10px' }}
              iconType="circle"
              iconSize={8}
            />
            
            <Line
              name="小型企业"
              type="monotone"
              dataKey="small"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              animationBegin={0}
              label={({ x, y, stroke, value, index }: any) => {
                const item = data[index];
                if (item && item.month === '12月') {
                  return (
                    <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} fontWeight="bold" textAnchor="middle">
                      {value}%
                    </text>
                  );
                }
                return null;
              }}
            />
            <Line
              name="中型企业"
              type="monotone"
              dataKey="medium"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
              label={({ x, y, stroke, value, index }: any) => {
                const item = data[index];
                if (item && item.month === '12月') {
                  return (
                    <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} fontWeight="bold" textAnchor="middle">
                      {value}%
                    </text>
                  );
                }
                return null;
              }}
            />
            <Line
              name="大型企业"
              type="monotone"
              dataKey="large"
              stroke="#051c2c"
              strokeWidth={3}
              dot={{ r: 3, fill: '#051c2c' }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
              animationBegin={600}
              label={({ x, y, stroke, value, index }: any) => {
                const item = data[index];
                if (item && item.month === '12月') {
                  return (
                    <text x={x} y={y} dy={-10} fill={stroke} fontSize={12} fontWeight="bold" textAnchor="middle">
                      {value}%
                    </text>
                  );
                }
                return null;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
