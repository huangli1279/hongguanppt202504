import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  LabelList
} from 'recharts';
import { RegionalExportTrendDataPoint } from '../types';

interface Props {
  data: RegionalExportTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-[10px] font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}月</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="font-medium">
            {entry.name}: {entry.value > 0 ? '+' : ''}{entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Custom label for specific data points (Q4 for Africa and US)
const CustomizedLabel = (props: any) => {
  const { x, y, stroke, value, index, dataKey, data } = props;
  
  // Check if it's Q4 (October, November, December)
  // Our data months are "01" to "12", so index 9, 10, 11 correspond to Oct, Nov, Dec
  const isQ4 = index >= 9;
  
  // Only show labels for 'africa' and 'us' in Q4
  if (isQ4 && (dataKey === 'africa' || dataKey === 'us')) {
    return (
      <text 
        x={x} 
        y={y} 
        dy={dataKey === 'africa' ? -10 : 15} // Africa label above, US label below
        fill={stroke} 
        fontSize={9} 
        fontWeight="bold" 
        textAnchor="middle"
      >
        {value}%
      </text>
    );
  }
  return null;
};

export const RegionalExportTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-xs font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年中国对主要贸易伙伴出口月度同比增速走势
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 9 }}
              label={{ value: '月', position: 'insideRight', offset: -10, fontSize: 9 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 9 }}
              label={{ value: '%', position: 'insideTop', offset: -10, fontSize: 9 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              align="right" 
              iconType="circle"
              iconSize={6}
              wrapperStyle={{ fontSize: '9px', paddingBottom: '10px' }}
            />
            <ReferenceLine y={0} stroke="#666" strokeWidth={1} />
            
            <Line 
              type="monotone" 
              dataKey="total" 
              name="出口总值" 
              stroke="#051c2c" 
              strokeWidth={2} 
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="us" 
              name="对美出口" 
              stroke="#ef4444" 
              strokeWidth={2} 
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            >
              <LabelList content={<CustomizedLabel data={data} dataKey="us" />} />
            </Line>
            <Line 
              type="monotone" 
              dataKey="asean" 
              name="对东盟出口" 
              stroke="#005c8f" 
              strokeWidth={2} 
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="africa" 
              name="对非洲出口" 
              stroke="#00a9f4" 
              strokeWidth={2} 
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            >
              <LabelList content={<CustomizedLabel data={data} dataKey="africa" />} />
            </Line>
            <Line 
              type="monotone" 
              dataKey="eu" 
              name="对欧盟出口" 
              stroke="#94a3b8" 
              strokeWidth={2} 
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
