import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { seriesColors } from '../../utils/chartColors';
import { industrialCategoryData, industryDetailMonthlyData as industryData } from '../../data';

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
      { key: 'oilGas', title: '油气开采', align: 'right', highlight: true },
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
          <BaseCard title="三大门类：制造业仍是主支撑" delay="0ms" variant="accent">
            <p>
              3月制造业当月同比<span className="font-bold">6.0%</span>，继续稳定支撑总体增长；
              采矿业同比<span className="font-bold">5.7%</span>，规模以上工业增加值3月当月同比
              <span className="font-bold">5.7%</span>。
            </p>
          </BaseCard>

          <BaseCard title="能源生产：政策需求带动抬升" delay="120ms">
            <p>
              受"人工智能+"等政策对能源需求带动，电力、热力、燃气及水生产和供应业3月当月同比升至
              <span className="font-bold">4.2%</span>，其中1-2月累计<span className="font-bold">5.1%</span>、
              3月当月<span className="font-bold">4.2%</span>。
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
          <ChartContainer delay="600ms">
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

          <ChartContainer delay="660ms">
            <BaseTable
              data={industryData}
              title="各行业增加值当月同比数据"
              subtitle="单位：%"
              columns={industryColumns}
              dateColumn="period"
              rowHeight="auto"
              colorizeNumbers
              headerCellClassName="px-1 py-1 text-caption leading-[1.15] whitespace-normal break-words line-clamp-2"
              cellClassName="px-1 text-caption leading-tight"
              subtitleClassName="text-caption"
            />
          </ChartContainer>
        </>
      }
    />
  );
};
