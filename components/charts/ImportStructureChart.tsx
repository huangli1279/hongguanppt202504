import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { seriesColors } from '@/utils/chartColors';

const RED = '#b91c1c';
const GREEN = '#16a34a';

const pct = (v: number) => `${Number(v) > 0 ? '+' : ''}${Number(v).toFixed(1)}%`;

/**
 * 韩、美半导体出口金额按月，单位统一为百万美元。
 * 韩国原始数据单位为千美元（÷1000），美国原始数据即为百万美元。
 */
const semiExports: { period: string; korea: number; us: number | null }[] = [
  { period: '2024-12', korea: 14619.2, us: 5507 },
  { period: '2025-01', korea: 10219.5, us: 6210 },
  { period: '2025-02', korea: 9795.6, us: 5954 },
  { period: '2025-03', korea: 13196.8, us: 5688 },
  { period: '2025-04', korea: 11803.4, us: 5979 },
  { period: '2025-05', korea: 13929.7, us: 5368 },
  { period: '2025-06', korea: 15138.6, us: 5684 },
  { period: '2025-07', korea: 14900.8, us: 5180 },
  { period: '2025-08', korea: 15299.5, us: 5611 },
  { period: '2025-09', korea: 16793.8, us: 5244 },
  { period: '2025-10', korea: 15862.0, us: 5228 },
  { period: '2025-11', korea: 17442.6, us: 5469 },
  { period: '2025-12', korea: 20917.8, us: 6382 },
  { period: '2026-01', korea: 20687.8, us: 6735 },
  { period: '2026-02', korea: 25254.1, us: 8308 },
  { period: '2026-03', korea: 32972.5, us: 7329 },
  { period: '2026-04', korea: 32037.7, us: 6946 },
  { period: '2026-05', korea: 37286.2, us: 6709 },
  { period: '2026-06', korea: 44942.6, us: 6649 },
  { period: '2026-07', korea: 41173.4, us: 6831 },
  { period: '2026-08', korea: 46827.8, us: 7797 },
  { period: '2026-09', korea: 60503.4, us: null },
  { period: '2026-10', korea: 56702.1, us: null },
];

/** 传统产品9月进口同比（%） */
const traditionalImport = [
  { name: '原油', amount: 3.3, quantity: -21.5 },
  { name: '煤炭', amount: 45.3, quantity: -5.7 },
  { name: '天然气', amount: 34.0, quantity: -1.7 },
  { name: '铜矿', amount: null, quantity: -4.2 },
  { name: '液晶平板显示模组', amount: -25.3, quantity: -24.0 },
  { name: '汽车及零部件', amount: -38.1, quantity: -47.2 },
];

/** 折线图：韩国、美国半导体出口金额（单位：百万美元） */
export const SemiExportLineChart: React.FC = () => (
  <BaseLineChart
    data={semiExports}
    title="韩国、美国半导体出口金额月度走势"
    subtitle="数据来源：韩国关税厅、美国商务部｜单位：百万美元（韩国原始千美元已折算）｜左轴韩国、右轴美国"
    lines={[
      {
        dataKey: 'korea',
        name: '韩国：半导体出口额',
        color: seriesColors[0],
        strokeWidth: 2.5,
        unit: '百万美元',
        labelDY: -8,
      },
      {
        dataKey: 'us',
        name: '美国：除汽车外资本货物出口额',
        color: seriesColors[1],
        strokeWidth: 2.5,
        unit: '百万美元',
        yAxisId: 'right',
        labelDY: 10,
      },
    ]}
    yAxisDomain={[0, 70000]}
    showYAxis
    showRightYAxis
    rightYAxisDomain={[0, 10000]}
    yAxisTickFormatter={(val) => Number(val).toLocaleString('en-US')}
    rightYAxisTickFormatter={(val) => Number(val).toLocaleString('en-US')}
    showReferenceLine
    referenceLineY={0}
    legendOrder={['韩国：半导体出口额', '美国：除汽车外资本货物出口额']}
    xAxisTicks={[
      '2024-12',
      '2025-03',
      '2025-06',
      '2025-09',
      '2025-12',
      '2026-03',
      '2026-06',
      '2026-09',
    ]}
    xAxisAngle={0}
    highlightPeriods={['2026-09']}
    unit="百万美元"
    compact
  />
);

/** 横向柱状图：传统产品进口金额、数量同比 */
export const TraditionalImportBarChart: React.FC = () => (
  <BaseBarChart
    data={traditionalImport}
    title="传统产品：数量下滑，金额靠价格支撑"
    subtitle="数据来源：海关总署｜单位：%"
    bars={[
      { dataKey: 'amount', name: '金额同比', color: RED },
      { dataKey: 'quantity', name: '数量同比', color: GREEN },
    ]}
    layout="horizontal"
    yAxisDomain={[-55, 55]}
    showYAxis
    yAxisWidth={92}
    yAxisTickFormatter={(val) => `${val}%`}
    showReferenceLine
    referenceLineY={0}
    legendOrder={['金额同比', '数量同比']}
    showLabels
    labelFormatter={pct}
    unit="%"
    barSize={7}
    xAxisTickFontSize={9}
  />
);
