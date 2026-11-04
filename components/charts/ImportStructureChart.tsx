import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { seriesColors } from '@/utils/chartColors';

const RED = '#b91c1c';
const GREEN = '#16a34a';

const pct = (v: number) => `${Number(v) > 0 ? '+' : ''}${Number(v).toFixed(1)}%`;

/** 韩国半导体出口金额按月，单位：百万美元。 */
const semiExports: { period: string; korea: number }[] = [
  { period: '2024-12', korea: 14619.2 },
  { period: '2025-01', korea: 10219.5 },
  { period: '2025-02', korea: 9795.6 },
  { period: '2025-03', korea: 13196.8 },
  { period: '2025-04', korea: 11803.4 },
  { period: '2025-05', korea: 13929.7 },
  { period: '2025-06', korea: 15138.6 },
  { period: '2025-07', korea: 14900.8 },
  { period: '2025-08', korea: 15299.5 },
  { period: '2025-09', korea: 16793.8 },
  { period: '2025-10', korea: 15862.0 },
  { period: '2025-11', korea: 17442.6 },
  { period: '2025-12', korea: 20917.8 },
  { period: '2026-01', korea: 20687.8 },
  { period: '2026-02', korea: 25254.1 },
  { period: '2026-03', korea: 32972.5 },
  { period: '2026-04', korea: 32037.7 },
  { period: '2026-05', korea: 37286.2 },
  { period: '2026-06', korea: 44942.6 },
  { period: '2026-07', korea: 41173.4 },
  { period: '2026-08', korea: 46827.8 },
  { period: '2026-09', korea: 60503.4 },
  { period: '2026-10', korea: 56702.1 },
];

/** 传统产品9月进口同比（%） */
const traditionalImport = [
  { name: '原油', amount: 3.3, quantity: -21.5 },
  { name: '煤炭', amount: 45.3, quantity: -5.7 },
  { name: '天然气', amount: 34.0, quantity: -1.7 },
  { name: '铜矿', amount: 14.1, quantity: -3.7 },
  { name: '液晶平板显示模组', amount: -25.3, quantity: -24.0 },
  { name: '汽车及零部件', amount: -38.1, quantity: -47.2 },
];

/** 折线图：韩国半导体出口金额（单位：百万美元） */
export const SemiExportLineChart: React.FC = () => (
  <BaseLineChart
    data={semiExports}
    title="韩国半导体出口金额月度走势"
    subtitle="数据来源：韩国关税厅｜单位：百万美元（原始千美元已折算）"
    lines={[
      {
        dataKey: 'korea',
        name: '韩国：半导体出口额',
        color: seriesColors[0],
        strokeWidth: 2.5,
        unit: '百万美元',
        labelDY: -8,
      },
    ]}
    yAxisDomain={[0, 70000]}
    showYAxis
    yAxisTickFormatter={(val) => Number(val).toLocaleString('en-US')}
    showReferenceLine
    referenceLineY={0}
    legendOrder={['韩国：半导体出口额']}
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
    title="传统产品：数量下滑，金额根据价格分化"
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
