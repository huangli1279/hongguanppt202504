
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
import { ConsumerConfidenceDataPoint } from '../types';

interface Props {
  data: ConsumerConfidenceDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  // Define the desired order
  const order = ['消费者信心指数', '消费意愿', '收入', '就业'];

  // Sort payload based on the order array
  const sortedPayload = [...payload].sort((a, b) => {
    return order.indexOf(a.value) - order.indexOf(b.value);
  });

  return (
    <ul style={{
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '10px'
    }}>
      {sortedPayload.map((entry: any, index: number) => (
        <li
          key={`item-${index}`}
          style={{
            marginRight: index < sortedPayload.length - 1 ? '20px' : '0',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: entry.color,
            marginRight: '5px',
            borderRadius: '50%'
          }} />
          <span style={{ color: '#666', fontSize: '10px' }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export const ConsumerConfidenceTrendChart: React.FC<Props> = ({ data }) => {
  // Custom dot renderer for confidence line
  const renderConfidenceDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.month === '2025-11') {
      return (
        <g>
          <circle cx={cx} cy={cy} r={5} fill="#051c2c" stroke="#fff" strokeWidth={2} />
          <text
            x={cx}
            y={cy - 12}
            textAnchor="middle"
            fill="#051c2c"
            fontSize={11}
            fontWeight="bold"
          >
            {payload.confidence}
          </text>
        </g>
      );
    }
    return <circle cx={cx} cy={cy} r={2} fill="#051c2c" />;
  };

  // Custom dot renderer for income line
  const renderIncomeDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.month === '2025-11') {
      return (
        <g>
          <circle cx={cx} cy={cy} r={4} fill="#00a9f4" stroke="#fff" strokeWidth={2} />
          <text
            x={cx}
            y={cy - 12}
            textAnchor="middle"
            fill="#00a9f4"
            fontSize={11}
            fontWeight="bold"
          >
            {payload.income}
          </text>
        </g>
      );
    }
    return <circle cx={cx} cy={cy} r={1.5} fill="#00a9f4" />;
  };

  // Custom dot renderer for employment line
  const renderEmploymentDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.month === '2025-11') {
      return (
        <g>
          <circle cx={cx} cy={cy} r={4} fill="#ef4444" stroke="#fff" strokeWidth={2} />
          <text
            x={cx}
            y={cy + 18}
            textAnchor="middle"
            fill="#ef4444"
            fontSize={11}
            fontWeight="bold"
          >
            {payload.employment}
          </text>
        </g>
      );
    }
    return <circle cx={cx} cy={cy} r={1.5} fill="#ef4444" />;
  };

  // Custom dot renderer for consumption line
  const renderConsumptionDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.month === '2025-11') {
      return (
        <g>
          <circle cx={cx} cy={cy} r={4} fill="#10b981" stroke="#fff" strokeWidth={2} />
          <text
            x={cx}
            y={cy - 12}
            textAnchor="middle"
            fill="#10b981"
            fontSize={11}
            fontWeight="bold"
          >
            {payload.consumption}
          </text>
        </g>
      );
    }
    return <circle cx={cx} cy={cy} r={1.5} fill="#10b981" />;
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年消费者信心及分项指标趋势
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 9 }}
              dy={10}
              interval={2}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 10 }}
              domain={[65, 105]}
              ticks={[70, 80, 90, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />

            <Line
              name="消费者信心指数"
              type="monotone"
              dataKey="confidence"
              stroke="#051c2c"
              strokeWidth={3}
              dot={renderConfidenceDot}
              activeDot={{ r: 5 }}
              animationDuration={2000}
            />
            <Line
              name="收入"
              type="monotone"
              dataKey="income"
              stroke="#00a9f4"
              strokeWidth={2}
              dot={renderIncomeDot}
              activeDot={{ r: 4 }}
              animationDuration={2000}
              animationBegin={200}
            />
            <Line
              name="就业"
              type="monotone"
              dataKey="employment"
              stroke="#ef4444"
              strokeWidth={2}
              dot={renderEmploymentDot}
              activeDot={{ r: 4 }}
              animationDuration={2000}
              animationBegin={400}
            />
            <Line
              name="消费意愿"
              type="monotone"
              dataKey="consumption"
              stroke="#10b981"
              strokeWidth={2}
              dot={renderConsumptionDot}
              activeDot={{ r: 4 }}
              animationDuration={2000}
              animationBegin={600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
