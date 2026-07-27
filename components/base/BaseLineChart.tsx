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
import { uiColors, getSeriesColor } from '@/utils/chartColors';

export interface LineConfig {
  dataKey: string;
  name: string;
  color?: string;
  strokeWidth?: number;
  labelPosition?: 'top' | 'bottom';
  /** 数值标签的垂直偏移 */
  labelDY?: number;
  /** 特定周期的数值标签偏移，key为period字符串 */
  pointOffsets?: { [key: string]: number };
  /** 双轴时指定左右Y轴，默认 left */
  yAxisId?: 'left' | 'right';
  /** tooltip单位，覆盖全局 unit */
  unit?: string;
  /** 虚线样式，如 "6 4" 表示预测段 */
  strokeDasharray?: string;
}

export interface BaseLineChartProps {
  data: any[];
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  lines: LineConfig[];
  yAxisDomain?: [number | 'auto' | 'dataMin' | 'dataMax', number | 'auto' | 'dataMin' | 'dataMax'];
  showYAxis?: boolean;
  showReferenceLine?: boolean;
  referenceLineY?: number;
  legendOrder?: string[];
  /** 额外需要显示数值标签的周期 */
  highlightPeriods?: string[];
  /** X轴刻度数量，默认6 */
  xAxisTickCount?: number;
  /** 自定义X轴刻度，优先级高于 xAxisTickCount */
  xAxisTicks?: string[];
  /** tooltip单位，默认% */
  unit?: string;
  /** Y轴刻度格式化函数 */
  yAxisTickFormatter?: (value: any) => string;
  /** 是否显示右侧Y轴（双轴模式） */
  showRightYAxis?: boolean;
  /** 右侧Y轴定义域 */
  rightYAxisDomain?: [number | 'auto' | 'dataMin' | 'dataMax', number | 'auto' | 'dataMin' | 'dataMax'];
  /** 右侧Y轴刻度格式化 */
  rightYAxisTickFormatter?: (value: any) => string;
}

const CustomTooltip = ({ active, payload, label, unit = '%', unitByKey }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg text-xs font-sans" style={{ border: `1px solid ${uiColors.tooltipBorder}` }}>
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}{unitByKey?.[entry.dataKey] ?? unit}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface CustomLegendProps {
  payload?: Array<{ value: string; color: string; payload?: { strokeDasharray?: string } }>;
  legendOrder?: string[];
}

const CustomLegend: React.FC<CustomLegendProps> = ({ payload, legendOrder }) => {
  if (!payload || !payload.length) return null;

  let sortedPayload = payload;
  if (legendOrder && legendOrder.length > 0) {
    const orderMap: { [key: string]: number } = {};
    legendOrder.forEach((name, index) => {
      orderMap[name] = index;
    });
    sortedPayload = [...payload].sort((a, b) => {
      const orderA = orderMap[a.value] ?? 999;
      const orderB = orderMap[b.value] ?? 999;
      return orderA - orderB;
    });
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '24px' }}>
      {sortedPayload.map((entry, index) => {
        const dash = entry.payload?.strokeDasharray;
        return (
          <li key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
            {dash ? (
              <span
                style={{
                  width: '16px',
                  height: '0',
                  borderTop: `2px dashed ${entry.color}`,
                  marginRight: '6px',
                  display: 'inline-block'
                }}
              />
            ) : (
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: entry.color,
                  borderRadius: '50%',
                  marginRight: '6px',
                  display: 'inline-block'
                }}
              />
            )}
            <span style={{ color: uiColors.tick, fontSize: '10px' }}>{entry.value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export const BaseLineChart: React.FC<BaseLineChartProps> = ({
  data,
  title,
  subtitle,
  lines,
  yAxisDomain = [0, 8],
  showYAxis = false,
  showReferenceLine = false,
  referenceLineY = 0,
  legendOrder,
  highlightPeriods = [],
  xAxisTickCount = 6,
  xAxisTicks,
  unit = '%',
  yAxisTickFormatter,
  showRightYAxis = false,
  rightYAxisDomain = ['auto', 'auto'],
  rightYAxisTickFormatter
}) => {
  const hasDualAxis = showRightYAxis || lines.some((line) => line.yAxisId === 'right');
  const unitByKey = lines.reduce((acc, line) => {
    if (line.unit !== undefined) acc[line.dataKey] = line.unit;
    return acc;
  }, {} as Record<string, string>);

  // 自定义标签渲染，显示最后一个有效数据点的值，放在右侧
  const renderCustomLabel = (props: any, color: string, dataKey: string, line: LineConfig) => {
    const { x, y, value, index } = props;
    
    // 找到该系列最后一个非空值的索引
    let lastValidIndex = -1;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i][dataKey] != null) {
        lastValidIndex = i;
        break;
      }
    }
    
    // 只在最后一个有效数据点或指定的 highlightPeriods 显示标签
    const isLastPoint = index === lastValidIndex;
    const period = data[index]?.period;
    const isHighlighted = highlightPeriods.includes(period);
    
    if ((!isLastPoint && !isHighlighted) || value == null) return null;

    // 优先级：特定点偏移 > 线全局偏移 > 默认偏移
    let finalDY = isLastPoint ? 4 : -10;
    if (line.pointOffsets && line.pointOffsets[period] !== undefined) {
      finalDY = line.pointOffsets[period];
    } else if (line.labelDY !== undefined) {
      finalDY = line.labelDY;
    }
    
    return (
      <text 
        x={isLastPoint ? x + 8 : x} 
        y={y} 
        dy={finalDY} 
        fill={color} 
        fontSize={10} 
        fontWeight={600} 
        textAnchor={isLastPoint ? "start" : "middle"}
      >
        {value}
      </text>
    );
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-webank-subtext mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: hasDualAxis ? 50 : 50, left: showYAxis ? -20 : 20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />
            {showReferenceLine && (
              <ReferenceLine
                y={referenceLineY}
                stroke={uiColors.tick}
                strokeWidth={1}
                yAxisId={hasDualAxis ? 'left' : undefined}
              />
            )}
            <XAxis
              dataKey="period"
              axisLine={showYAxis ? { stroke: uiColors.axis } : false}
              tickLine={false}
              tick={{ fill: uiColors.tick, fontSize: 10 }}
              dy={10}
              interval={0}
              angle={-45}
              textAnchor="end"
              ticks={(() => {
                if (xAxisTicks && xAxisTicks.length > 0) return xAxisTicks;
                // 若 period 形如 YYYY-MM，则按季度（3/6/9/12月）锚定最新期向前展示
                const periods: string[] = data.map(d => d.period);
                const isYearMonth = periods.every(p => /^\d{4}-(0[1-9]|1[0-2])$/.test(p));
                if (isYearMonth) {
                  const quarterMonths = [3, 6, 9, 12];
                  return periods.filter(p => quarterMonths.includes(parseInt(p.slice(5, 7), 10)));
                }
                if (data.length <= xAxisTickCount) return periods;
                const step = (data.length - 1) / (xAxisTickCount - 1);
                const ticks: string[] = [];
                for (let i = 0; i < xAxisTickCount; i++) {
                  const idx = Math.round(i * step);
                  ticks.push(periods[idx]);
                }
                return ticks;
              })()}
            />
            <YAxis
              hide={!showYAxis}
              domain={yAxisDomain}
              axisLine={false}
              tickLine={false}
              tick={{ fill: uiColors.tickSecondary, fontSize: 10 }}
              tickFormatter={yAxisTickFormatter || ((val) => `${val}%`)}
              yAxisId={hasDualAxis ? 'left' : undefined}
            />
            {hasDualAxis && (
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={rightYAxisDomain}
                axisLine={false}
                tickLine={false}
                tick={{ fill: uiColors.tickSecondary, fontSize: 10 }}
                tickFormatter={rightYAxisTickFormatter || ((val) => `${val}`)}
                hide={!showRightYAxis}
              />
            )}
            <Tooltip content={<CustomTooltip unit={unit} unitByKey={unitByKey} />} cursor={{ stroke: uiColors.cursor, strokeWidth: 1 }} />
            <Legend 
              content={<CustomLegend legendOrder={legendOrder} />} 
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingBottom: '10px', paddingTop: '20px' }}
            />
            
            {lines.map((line, index) => {
              const lineColor = line.color ?? getSeriesColor(index);
              const axisId = hasDualAxis ? (line.yAxisId || 'left') : undefined;
              
              // 找到该系列最后一个非空值的索引
              let lastValidIndex = -1;
              for (let i = data.length - 1; i >= 0; i--) {
                if (data[i][line.dataKey] != null) {
                  lastValidIndex = i;
                  break;
                }
              }

              return (
                <Line
                  key={line.dataKey}
                  name={line.name}
                  type="monotone"
                  dataKey={line.dataKey}
                  stroke={lineColor}
                  strokeWidth={line.strokeWidth || 2}
                  strokeDasharray={line.strokeDasharray}
                  yAxisId={axisId}
                  connectNulls={false}
                  dot={(props: any) => {
                    const { cx, cy, index: dotIndex, payload } = props;
                    const pointValue = payload?.[line.dataKey];
                    if (pointValue == null || !Number.isFinite(cx) || !Number.isFinite(cy)) {
                      return null as any;
                    }
                    const isLastPoint = dotIndex === lastValidIndex;
                    const isHighlighted = highlightPeriods.includes(payload.period);

                    if (isLastPoint || isHighlighted) {
                      return (
                        <circle
                          key={`dot-${line.dataKey}-${dotIndex}`}
                          cx={cx}
                          cy={cy}
                          r={isLastPoint ? 3.5 : 3}
                          fill={lineColor}
                          stroke="white"
                          strokeWidth={1.5}
                        />
                      );
                    }
                    return null as any;
                  }}
                  animationDuration={800}
                  animationBegin={0}
                  animationEasing="ease-out"
                >
                  <LabelList
                    dataKey={line.dataKey}
                    position={line.labelPosition || 'top'}
                    content={(props) => renderCustomLabel(props, lineColor, line.dataKey, line)}
                  />
                </Line>
              );
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
