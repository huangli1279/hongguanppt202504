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
  ReferenceArea,
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
  /** 特定周期的数值标签X轴偏移，key为period字符串 */
  pointDXOffsets?: { [key: string]: number };
  /** 特定周期使用箭头引导标注，将标签偏移并用引导线指向数据点 */
  pointCallouts?: {
    [key: string]: {
      dx: number;
      dy: number;
    };
  };
  /** 不显示数值标签的周期（如与另一条线数值重复） */
  hiddenLabelPeriods?: string[];
  /** 双轴时指定左右Y轴，默认 left */
  yAxisId?: 'left' | 'right';
  /** tooltip单位，覆盖全局 unit */
  unit?: string;
  /** 虚线样式，如 "6 4" 表示预测段 */
  strokeDasharray?: string;
}

export interface CategoryGroupConfig {
  label: string;
  x1: string;
  x2: string;
  stroke?: string;
  fill?: string;
  fillOpacity?: number;
  /** 自定义标签位置，缺省时根据 x1/x2 自动判断（首段左上、末段右上、中段居中） */
  labelPosition?: 'insideTopLeft' | 'insideTopRight' | 'insideTop' | 'insideBottomLeft' | 'insideBottomRight' | 'insideBottom' | 'center';
  /** 标签垂直偏移量（像素）。正值向下。正值大 → 文字更靠 ReferenceArea 内部下方 */
  labelDy?: number;
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
  showLegend?: boolean;
  /** 额外需要显示数值标签的周期 */
  highlightPeriods?: string[];
  /** X轴刻度数量，默认6 */
  xAxisTickCount?: number;
  /** 自定义X轴刻度，优先级高于 xAxisTickCount */
  xAxisTicks?: string[];
  /** X轴标签旋转角度，默认-45 */
  xAxisAngle?: number;
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
  /** 区间标注框（如政策窗口） */
  categoryGroups?: CategoryGroupConfig[];
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
  showLegend = true,
  highlightPeriods = [],
  xAxisTickCount = 6,
  xAxisTicks,
  unit = '%',
  yAxisTickFormatter,
  showRightYAxis = false,
  rightYAxisDomain = ['auto', 'auto'],
  rightYAxisTickFormatter,
  categoryGroups,
  xAxisAngle = -45
}) => {
  const hasDualAxis = showRightYAxis || lines.some((line) => line.yAxisId === 'right');
  const hasCategoryGroups = !!categoryGroups && categoryGroups.length > 0;
  const unitByKey = lines.reduce((acc, line) => {
    if (line.unit !== undefined) acc[line.dataKey] = line.unit;
    return acc;
  }, {} as Record<string, string>);

  // 自定义标签渲染，显示最后一个有效数据点的值，放在右侧
  const renderCalloutLabel = (
    x: number,
    y: number,
    value: number | string,
    color: string,
    dx: number,
    dy: number
  ) => {
    const labelX = x + dx;
    const labelY = y + dy;
    const textAnchor: 'start' | 'middle' | 'end' =
      dx < -4 ? 'end' : dx > 4 ? 'start' : 'middle';
    const angle = Math.atan2(y - labelY, x - labelX);
    const arrowSize = 4;

    return (
      <g>
        <line
          x1={labelX}
          y1={labelY}
          x2={x}
          y2={y}
          stroke={color}
          strokeWidth={1}
        />
        <polygon
          points={`${x},${y} ${x - arrowSize * Math.cos(angle - 0.45)},${y - arrowSize * Math.sin(angle - 0.45)} ${x - arrowSize * Math.cos(angle + 0.45)},${y - arrowSize * Math.sin(angle + 0.45)}`}
          fill={color}
        />
        <text
          x={labelX}
          y={labelY}
          dy={dy < 0 ? -2 : dy > 0 ? 10 : 0}
          fill={color}
          fontSize={10}
          fontWeight={600}
          textAnchor={textAnchor}
        >
          {value}
        </text>
      </g>
    );
  };

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
    if (line.hiddenLabelPeriods?.includes(period)) return null;

    const callout = line.pointCallouts?.[period];
    if (callout) {
      return renderCalloutLabel(x, y, value, color, callout.dx, callout.dy);
    }

    // 优先级：特定点偏移 > 线全局偏移 > 默认偏移
    let finalDY = isLastPoint ? 4 : -10;
    let finalDX = isLastPoint ? 8 : 0;
    let textAnchor: 'start' | 'middle' | 'end' = isLastPoint ? 'start' : 'middle';

    if (line.pointDXOffsets && line.pointDXOffsets[period] !== undefined) {
      finalDX = line.pointDXOffsets[period];
      if (finalDX < 0) textAnchor = 'end';
      else if (finalDX > 0) textAnchor = 'start';
    }

    if (line.pointOffsets && line.pointOffsets[period] !== undefined) {
      finalDY = line.pointOffsets[period];
    } else if (line.labelDY !== undefined) {
      finalDY = line.labelDY;
    }
    
    return (
      <text 
        x={x + finalDX} 
        y={y} 
        dy={finalDY} 
        fill={color} 
        fontSize={10} 
        fontWeight={600} 
        textAnchor={textAnchor}
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
            margin={{ top: hasCategoryGroups ? 36 : 20, right: hasDualAxis ? 50 : 50, left: showYAxis ? -20 : 20, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />
            {categoryGroups?.map((group, groupIndex) => {
              // 默认根据位置自动判断标签位置：首段左上、末段右上、中段居中
              const isFirst = groupIndex === 0;
              const isLast = groupIndex === categoryGroups.length - 1;
              const autoPosition = isFirst
                ? 'insideTopLeft'
                : isLast
                  ? 'insideTopRight'
                  : 'insideTop';
              const labelPos = group.labelPosition ?? autoPosition;
              const labelFill = group.stroke ?? '#64748b';
              return (
                <ReferenceArea
                  key={`group-${group.label}-${group.x1}-${group.x2}`}
                  x1={group.x1}
                  x2={group.x2}
                  {...(hasDualAxis ? { yAxisId: 'left' as const } : {})}
                  stroke={group.stroke ?? '#94a3b8'}
                  strokeWidth={1.5}
                  fill={group.fill ?? '#94a3b8'}
                  fillOpacity={group.fillOpacity ?? 0.08}
                  ifOverflow="extendDomain"
                  label={({
                    // Recharts 将 viewBox 坐标系下的位置直接传给自定义渲染函数
                    viewBox,
                  }: any) => {
                    const { x, y, width, height } = viewBox ?? {};
                    if (x == null || y == null || width == null) {
                      return null;
                    }
                    // 根据 labelPos 计算锚点和水平/垂直偏移
                    let anchor: 'start' | 'middle' | 'end' = 'middle';
                    let dx = 0;
                    let dy = 12;
                    if (labelPos === 'insideTopLeft') {
                      anchor = 'start';
                      dx = 6;
                      dy = 16;
                    } else if (labelPos === 'insideTopRight') {
                      anchor = 'end';
                      dx = -6;
                      dy = 16;
                    } else if (labelPos === 'insideBottomLeft') {
                      anchor = 'start';
                      dx = 6;
                      dy = height ? height - 6 : -6;
                    } else if (labelPos === 'insideBottomRight') {
                      anchor = 'end';
                      dx = -6;
                      dy = height ? height - 6 : -6;
                    } else if (labelPos === 'insideBottom') {
                      anchor = 'middle';
                      dy = height ? height - 6 : -6;
                    } else {
                      // insideTop / center 默认
                      anchor = 'middle';
                      dy = 16;
                    }
                    // 用户自定义垂直偏移覆盖默认值
                    if (group.labelDy !== undefined) {
                      dy = group.labelDy;
                    }
                    const cx = x + width / 2;
                    const textX =
                      labelPos === 'insideTopLeft' || labelPos === 'insideBottomLeft'
                        ? x + 6
                        : labelPos === 'insideTopRight' || labelPos === 'insideBottomRight'
                          ? x + width - 6
                          : cx;
                    // 估算文字宽度（中文 12px、ASCII 6.5px），太窄时强制改为 insideTop + 居中
                    const labelLen = [...group.label].reduce(
                      (acc, ch) => acc + (/[一-龥]/.test(ch) ? 12 : 6.5),
                      0
                    );
                    const effectiveAnchor =
                      width < labelLen + 16 ? 'middle' : anchor;
                    const effectiveX =
                      width < labelLen + 16 ? cx : textX;
                    return (
                      <text
                        x={effectiveX}
                        y={y + dy}
                        fill={labelFill}
                        fontSize={10}
                        fontWeight={600}
                        textAnchor={effectiveAnchor}
                        paintOrder="stroke"
                        stroke="#ffffff"
                        strokeWidth={3}
                        strokeLinejoin="round"
                        style={{ pointerEvents: 'none' }}
                      >
                        {group.label}
                      </text>
                    );
                  }}
                />
              );
            })}
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
              angle={xAxisAngle}
              textAnchor={xAxisAngle !== 0 ? "end" : "middle"}
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
            {showLegend && (
              <Legend
                content={<CustomLegend legendOrder={legendOrder} />}
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingBottom: '10px', paddingTop: '20px' }}
              />
            )}
            
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
