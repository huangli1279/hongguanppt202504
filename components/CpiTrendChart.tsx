
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
  ReferenceLine,
  Label
} from 'recharts';
import { CpiTrendDataPoint } from '../types';

interface Props {
  data: CpiTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">CPI同比: {payload[0].value}%</p>
        <p className="text-webank-subtext">核心CPI: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const CpiTrendChart: React.FC<Props> = ({ data }) => {
  // Sort data chronologically for the chart
  const sortedData = [...data].sort((a, b) => a.month.localeCompare(b.month));

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年CPI、核心CPI当月同比走势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          核心CPI低位波动，反映内生需求依然偏弱
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sortedData}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 9 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 1.5]}
              ticks={[0, 0.5, 1.0, 1.5]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
                style={{ fontSize: '10px' }}
            />
            
            <Line
              name="CPI同比"
              type="monotone"
              dataKey="headline"
              stroke="#051c2c" // WeBank Blue
              strokeWidth={3}
              dot={(props: any) => {
                const { cx, cy, payload } = props;
                if (payload && payload.month === '2025-12') {
                  return (
                    <g key={`dot-${payload.month}`}>
                      <circle cx={cx} cy={cy} r={4} fill="#051c2c" />
                      <text
                        x={cx}
                        y={cy - 12}
                        textAnchor="middle"
                        fill="#051c2c"
                        fontSize={10}
                        fontWeight="bold"
                      >
                        {payload.headline}%
                      </text>
                    </g>
                  );
                }
                return <circle cx={cx} cy={cy} r={3} fill="#051c2c" />;
              }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
            />
            <Line
              name="核心CPI同比"
              type="monotone"
              dataKey="core"
              stroke="#00a9f4" // Light Blue
              strokeWidth={3}
              dot={(props: any) => {
                const { cx, cy, payload } = props;
                if (payload && payload.month === '2025-12') {
                  return (
                    <g key={`dot-core-${payload.month}`}>
                      <circle cx={cx} cy={cy} r={4} fill="#00a9f4" />
                      <text
                        x={cx}
                        y={cy - 12}
                        textAnchor="middle"
                        fill="#00a9f4"
                        fontSize={10}
                        fontWeight="bold"
                      >
                        {payload.core}%
                      </text>
                    </g>
                  );
                }
                return <circle cx={cx} cy={cy} r={3} fill="#00a9f4" />;
              }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
              animationBegin={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
