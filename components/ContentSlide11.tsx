import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart } from './BaseLineChart';
import { BaseTable, ColumnConfig } from './BaseTable';
import { seriesColors } from '../utils/chartColors';

const industrialCategoryData = [
  { period: '2024-02', industrial: 7.0, mining: 2.3, manufacturing: 7.7, utilities: 7.8 },
  { period: '2024-03', industrial: 4.5, mining: 0.2, manufacturing: 5.1, utilities: 4.9 },
  { period: '2024-04', industrial: 6.7, mining: 2.0, manufacturing: 7.5, utilities: 5.7 },
  { period: '2024-05', industrial: 5.6, mining: 3.6, manufacturing: 6.0, utilities: 4.0 },
  { period: '2024-06', industrial: 5.3, mining: 4.4, manufacturing: 5.5, utilities: 4.1 },
  { period: '2024-07', industrial: 5.1, mining: 4.6, manufacturing: 5.3, utilities: 3.2 },
  { period: '2024-08', industrial: 4.5, mining: 3.7, manufacturing: 4.3, utilities: 6.9 },
  { period: '2024-09', industrial: 5.4, mining: 3.7, manufacturing: 5.2, utilities: 10.2 },
  { period: '2024-10', industrial: 5.3, mining: 4.6, manufacturing: 5.4, utilities: 5.5 },
  { period: '2024-11', industrial: 5.4, mining: 4.2, manufacturing: 6.0, utilities: 1.8 },
  { period: '2024-12', industrial: 6.2, mining: 2.4, manufacturing: 7.4, utilities: 1.2 },
  { period: '2025-02', industrial: 5.9, mining: 4.3, manufacturing: 6.9, utilities: 0.8 },
  { period: '2025-03', industrial: 7.7, mining: 9.3, manufacturing: 7.9, utilities: 3.3 },
  { period: '2025-04', industrial: 6.1, mining: 5.7, manufacturing: 6.6, utilities: 1.2 },
  { period: '2025-05', industrial: 5.8, mining: 5.7, manufacturing: 6.2, utilities: 2.0 },
  { period: '2025-06', industrial: 6.8, mining: 6.1, manufacturing: 7.4, utilities: 1.6 },
  { period: '2025-07', industrial: 5.7, mining: 5.0, manufacturing: 6.2, utilities: 3.4 },
  { period: '2025-08', industrial: 5.2, mining: 5.1, manufacturing: 5.7, utilities: 2.5 },
  { period: '2025-09', industrial: 6.5, mining: 6.4, manufacturing: 7.3, utilities: 0.5 },
  { period: '2025-10', industrial: 4.9, mining: 4.5, manufacturing: 4.9, utilities: 5.9 },
  { period: '2025-11', industrial: 4.8, mining: 6.3, manufacturing: 4.6, utilities: 4.2 },
  { period: '2025-12', industrial: 5.2, mining: 5.4, manufacturing: 5.7, utilities: 1.1 },
  { period: '2026-02', industrial: 6.3, mining: 6.1, manufacturing: 6.6, utilities: 5.1 },
  { period: '2026-03', industrial: 5.7, mining: 5.7, manufacturing: 6.0, utilities: 4.2 },
];

const industryData = [
  { period: '2025-02', highTech: 9.1, auto: 12.0, railway: 20.8, electronics: 10.6, oilGas: 0.9, chemical: 9.5, nonferrousMining: 4.5, power: 0.8, gas: 3.3, water: 1.8 },
  { period: '2025-03', highTech: 10.7, auto: 11.5, railway: 19.0, electronics: 13.1, oilGas: 6.8, chemical: 8.8, nonferrousMining: 9.3, power: 3.3, gas: 6.9, water: 0.9 },
  { period: '2025-04', highTech: 10.0, auto: 9.2, railway: 17.6, electronics: 10.8, oilGas: 4.3, chemical: 8.0, nonferrousMining: 6.6, power: 1.2, gas: 11.4, water: 0.5 },
  { period: '2025-05', highTech: 8.6, auto: 11.6, railway: 14.6, electronics: 10.2, oilGas: 5.3, chemical: 5.9, nonferrousMining: 5.1, power: 2.0, gas: 5.9, water: 1.0 },
  { period: '2025-06', highTech: 9.7, auto: 11.4, railway: 10.1, electronics: 11.0, oilGas: 3.6, chemical: 7.5, nonferrousMining: 14.0, power: 1.6, gas: 4.1, water: 1.3 },
  { period: '2025-07', highTech: 9.3, auto: 8.5, railway: 13.7, electronics: 10.2, oilGas: 4.1, chemical: 7.2, nonferrousMining: 13.2, power: 3.4, gas: 5.9, water: -0.4 },
  { period: '2025-08', highTech: 9.3, auto: 8.4, railway: 12.0, electronics: 9.9, oilGas: 4.7, chemical: 7.6, nonferrousMining: 8.5, power: 2.5, gas: 4.4, water: -0.9 },
  { period: '2025-09', highTech: 10.3, auto: 16.0, railway: 10.3, electronics: 11.3, oilGas: 8.9, chemical: 9.0, nonferrousMining: 3.1, power: 0.5, gas: 1.9, water: 0.8 },
  { period: '2025-10', highTech: 7.2, auto: 16.8, railway: 15.2, electronics: 8.9, oilGas: 1.9, chemical: 7.1, nonferrousMining: 6.2, power: 5.9, gas: 4.6, water: 1.0 },
  { period: '2025-11', highTech: 8.4, auto: 11.9, railway: 11.9, electronics: 9.2, oilGas: 5.1, chemical: 6.7, nonferrousMining: 6.1, power: 4.2, gas: 6.3, water: 2.0 },
  { period: '2025-12', highTech: 11.0, auto: 8.3, railway: 9.2, electronics: 11.8, oilGas: 3.7, chemical: 8.0, nonferrousMining: 3.7, power: 1.1, gas: 0.0, water: -1.1 },
  { period: '2026-02', highTech: 13.1, auto: 3.4, railway: 13.7, electronics: 14.2, oilGas: 5.8, chemical: 7.6, nonferrousMining: 3.6, power: 5.1, gas: 3.5, water: 1.7 },
  { period: '2026-03', highTech: 11.7, auto: 7.5, railway: 13.3, electronics: 12.5, oilGas: 9.4, chemical: 9.0, nonferrousMining: 2.1, power: 4.2, gas: 1.5, water: -3.3 },
];

const industryColumns: ColumnConfig[] = [
  { key: 'period', title: '月份', width: '46px', align: 'center' },
  {
    key: 'advanced',
    title: '新质生产力',
    children: [
      { key: 'highTech', title: '高技术制造', align: 'right' },
      { key: 'electronics', title: '电子设备', align: 'right' },
      { key: 'railway', title: '铁路航空航天', align: 'right' },
      { key: 'auto', title: '汽车制造', align: 'right' },
    ],
  },
  {
    key: 'resource',
    title: '资源加工',
    children: [
      { key: 'oilGas', title: '石油天然气', align: 'right' },
      { key: 'chemical', title: '化学原料', align: 'right' },
      { key: 'nonferrousMining', title: '有色矿采选', align: 'right' },
    ],
  },
  {
    key: 'utilities',
    title: '公用事业',
    children: [
      { key: 'power', title: '电力热力', align: 'right' },
      { key: 'gas', title: '燃气供应', align: 'right' },
      { key: 'water', title: '水供应', align: 'right' },
    ],
  },
];

export const ContentSlide11: React.FC = () => {
  return (
    <BaseContentSlide
      title="制造业稳定支撑增长，政策带动能源生产增长"
      cards={
        <>
          <BaseCard title="三大门类：制造业仍是主支撑" delay="200ms" variant="accent">
            <p>
              一季度制造业累计同比<span className="font-bold">6.4%</span>，继续稳定支撑总体增长；
              采矿业同比<span className="font-bold">6.0%</span>，规模以上工业增加值3月当月同比
              <span className="font-bold">5.7%</span>。
            </p>
          </BaseCard>

          <BaseCard title="能源生产：政策需求带动抬升" delay="400ms">
            <p>
              受“人工智能+”等政策对能源需求带动，电力、热力、燃气及水生产和供应业一季度同比升至
              <span className="font-bold">4.3%</span>，其中1-2月<span className="font-bold">5.1%</span>、
              3月<span className="font-bold">4.2%</span>。
            </p>
          </BaseCard>

          <BaseCard title="新质生产力与地缘因素共振" delay="600ms">
            <p>
              高技术制造业一季度实现两位数增长；3月电子设备制造业
              <span className="font-bold">12.5%</span>、铁路船舶航空航天设备制造业
              <span className="font-bold">13.3%</span>，油气开采升至<span className="font-bold">9.4%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={industrialCategoryData}
              title="规模以上工业增加值及分项同比数据"
              subtitle="单位：%；2月为累计同比填充"
              yAxisDomain={[0, 11]}
              showYAxis
              xAxisTickCount={7}
              highlightPeriods={['2026-03']}
              lines={[
                { dataKey: 'industrial', name: '规上工业', color: seriesColors[1], strokeWidth: 2.4 },
                { dataKey: 'manufacturing', name: '制造业', color: seriesColors[0], strokeWidth: 2.4, labelDY: -8 },
                { dataKey: 'mining', name: '采矿业', color: seriesColors[3], labelDY: 12 },
                { dataKey: 'utilities', name: '电热燃水', color: seriesColors[2], labelDY: -8 },
              ]}
            />
          </ChartContainer>

          <ChartContainer delay="900ms">
            <BaseTable
              data={industryData}
              title="各行业增加值当月同比数据"
              subtitle="单位：%"
              columns={industryColumns}
              dateColumn="period"
              rowHeight="auto"
              colorizeNumbers
              headerCellClassName="px-1 py-1 text-[10px] leading-[1.15] whitespace-normal break-words line-clamp-2"
              cellClassName="px-1 text-[11px] leading-tight"
              subtitleClassName="text-[10px]"
            />
          </ChartContainer>
        </>
      }
    />
  );
};
