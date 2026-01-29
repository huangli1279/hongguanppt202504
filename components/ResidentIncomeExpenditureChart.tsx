
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
import { ResidentIncomeExpenditureDataPoint } from '../types';

interface Props {
  data: ResidentIncomeExpenditureDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="mb-0.5">
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const renderCustomLabel = (props: any, dataLength: number, color: string, yOffset: number = 0) => {
  const { x, y, index, value } = props;
  // Only render label for the last data point
  if (index === dataLength - 1) {
    return (
      <text
        x={x + 8}
        y={y + yOffset}
        fill={color}
        fontSize={10}
        fontWeight="bold"
        textAnchor="start"
        dominantBaseline="middle"
      >
        {value}%
      </text>
    );
  }
  return null;
};

export const ResidentIncomeExpenditureChart: React.FC<Props> = ({ data }) => {
  // Filter data to only show from 2024 onwards
  const filteredData = data.filter(item => !item.period.startsWith('2022') && !item.period.startsWith('2023'));

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年居民人均收支详细构成累计同比
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={filteredData}
            margin={{ top: 20, right: 50, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />

            <XAxis
              dataKey="period"
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 9 }}
              dy={10}
              interval={0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-2, 10]}
              ticks={[-2, 0, 2, 4, 6, 8, 10]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
                wrapperStyle={{ paddingTop: '10px' }}
                iconType="circle"
                iconSize={8}
                style={{ fontSize: '10px' }}
            />

            <Line
              name="可支配收入"
              type="monotone"
              dataKey="disposableIncome"
              stroke="#051c2c"
              strokeWidth={3}
              dot={false}
              activeDot={false}
              animationDuration={2000}
              label={(props) => renderCustomLabel(props, filteredData.length, '#051c2c', -10)}
            />
            <Line
              name="工资性收入"
              type="monotone"
              dataKey="wageIncome"
              stroke="#00a9f4"
              strokeWidth={2}
              dot={false}
              activeDot={false}
              animationDuration={2000}
              animationBegin={100}
              label={(props) => renderCustomLabel(props, filteredData.length, '#00a9f4', -20)}
            />
            <Line
              name="经营净收入"
              type="monotone"
              dataKey="businessIncome"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              activeDot={false}
              animationDuration={2000}
              animationBegin={200}
              label={(props) => renderCustomLabel(props, filteredData.length, '#10b981', 10)}
            />
            <Line
              name="财产净收入"
              type="monotone"
              dataKey="propertyIncome"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
              activeDot={false}
              animationDuration={2000}
              animationBegin={300}
              label={(props) => renderCustomLabel(props, filteredData.length, '#ef4444', 0)}
            />
            <Line
              name="消费支出"
              type="monotone"
              dataKey="consumptionExpenditure"
              stroke="#8b5cf6"
              strokeWidth={2.5}
              dot={false}
              activeDot={false}
              animationDuration={2000}
              animationBegin={500}
              label={(props) => renderCustomLabel(props, filteredData.length, '#8b5cf6', 0)}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
