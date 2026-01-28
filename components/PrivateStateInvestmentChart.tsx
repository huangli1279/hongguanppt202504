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
  LabelList
} from 'recharts';
import { PrivateStateInvestmentDataPoint } from '../types';

interface Props {
  data: PrivateStateInvestmentDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">民间投资: {payload[0].value}%</p>
        <p className="text-slate-500">国有控股: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const PrivateStateInvestmentChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年民间投资与国有控股投资累计同比
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          民间投资持续负增长，国有控股投资同步下行
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
              domain={[-8, 8]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="民间投资"
              type="monotone"
              dataKey="privateInvestment"
              stroke="#005c8f"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            >
              <LabelList
                dataKey="privateInvestment"
                position="top"
                content={({ x, y, value }: any) => {
                  return (
                    <g transform={`translate(${x},${y - 8})`}>
                      <text
                        x={0}
                        y={0}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="bold"
                        fill="#005c8f"
                        style={{ opacity: data[data.length - 1].privateInvestment === value ? 1 : 0 }}
                      >
                        {value}%
                      </text>
                    </g>
                  );
                }}
              />
            </Line>
            <Line
              name="国有控股"
              type="monotone"
              dataKey="stateOwnedInvestment"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            >
              <LabelList
                dataKey="stateOwnedInvestment"
                position="top"
                content={({ x, y, value }: any) => {
                  return (
                    <g transform={`translate(${x},${y - 8})`}>
                      <text
                        x={0}
                        y={0}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight="bold"
                        fill="#94a3b8"
                        style={{ opacity: data[data.length - 1].stateOwnedInvestment === value ? 1 : 0 }}
                      >
                        {value}%
                      </text>
                    </g>
                  );
                }}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
