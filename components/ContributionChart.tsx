import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import { ContributionDataPoint } from '../types';

interface Props {
  data: ContributionDataPoint[];
}

// 自定义标签渲染函数
const CustomLabel = (props: any) => {
  const { x, y, width, height, value } = props;

  // 只显示大于0.1的值，避免太小的值显示
  if (!value || value < 0.1) return null;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={9}
      fontWeight="500"
    >
      {value.toFixed(2)}
    </text>
  );
};

// 自定义Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p style={{ color: '#94a3b8' }}>第一产业: {payload[0]?.value?.toFixed(2)}</p>
        <p style={{ color: '#00a9f4' }}>第二产业: {payload[1]?.value?.toFixed(2)}</p>
        <p style={{ color: '#005c8f' }}>第三产业: {payload[2]?.value?.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

// 自定义图例
const CustomLegend = () => {
  const items = [
    { name: '第一产业', color: '#94a3b8' },
    { name: '第二产业', color: '#00a9f4' },
    { name: '第三产业', color: '#005c8f' }
  ];

  return (
    <div className="flex justify-center gap-5 pt-2" style={{ fontSize: '10px' }}>
      {items.map((item) => (
        <div key={item.name} className="flex items-center gap-1">
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: item.color
            }}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export const ContributionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-xs font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年三产业GDP当季同比拉动数据
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis
              dataKey="period"
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 10 }}
              domain={[0, 4]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            <Bar
              dataKey="primary"
              stackId="stack"
              fill="#94a3b8"
              label={<CustomLabel />}
            />
            <Bar
              dataKey="secondary"
              stackId="stack"
              fill="#00a9f4"
              label={<CustomLabel />}
            />
            <Bar
              dataKey="tertiary"
              stackId="stack"
              fill="#005c8f"
              label={<CustomLabel />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
