import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { ppiYoyData } from '@/data/ppi';
import { industrialProfitData } from '@/data/profit';

// PPI 当月同比（2024-01 起）
const ppiChartData = ppiYoyData.filter((d) => d.period >= '2024-01');

const formatNumber = (val: number) => {
  return val.toLocaleString('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
};

const renderColoredCell = (value: any, row: any) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const num = Number(value);
  if (isNaN(num)) return value;

  const formatted = formatNumber(num);
  // 只在特定行进行着色
  if (row.time === '2602' || row.time === '2603') {
    if (num > 0) return <span className="text-red-500">{formatted}</span>;
    if (num < 0) return <span className="text-green-600">{formatted}</span>;
  }

  return <span className="text-slate-600">{formatted}</span>;
};

const profitColumns: ColumnConfig[] = [
  { key: 'time', title: '日期', width: '70px', align: 'left' },
  { key: 'totalProfit', title: '利润', width: '80px', align: 'right', render: renderColoredCell },
  { key: 'revenue', title: '营收', width: '90px', align: 'right' },
  { key: 'cost', title: '成本', width: '90px', align: 'right' },
  { key: 'revenueMinusCost', title: '营收 - 成本', width: '100px', align: 'right', render: renderColoredCell },
  { key: 'expenses', title: '费用(不含研发费用)', width: '140px', align: 'right' },
  { key: 'investmentIncome', title: '投资收益', width: '90px', align: 'right' },
];

export const ContentSlide12: React.FC = () => {
  return (
    <BaseContentSlide
      title="1-6月利润持续增长，持续受营收-成本影响"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="二季度企业利润稳定增长" delay="0ms" variant="accent">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-bold">利润持续增长：</span>
                1-6月规上工业企业利润同比增长
                <span className="font-bold">18.7%</span>
                ，5月增长
                <span className="font-bold">21.1%</span>
                ，6月增长
                <span className="font-bold">15.1%</span>
                。
              </li>
              <li>
                <span className="font-bold">政策引导供给优化：</span>
                监管层深入整治“内卷式”竞争，严控低效产能扩张（如光伏、锂电），4月工信部、国家发改委等五部门联合印发《工业产品绿色设计指南（2026年版）》。
              </li>
              <li>
                <span className="font-bold">后续挑战：</span>
                内需疲软对生产意愿的遏制仍存，且PPI向CPI传导受阻导致中下游行业利润空间受到挤压，利润分配不均可能压制整体生产复苏弹性。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="PPI回升与FIFO效应" delay="120ms">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-bold">PPI回升拉动价格增长：</span>
                尽管实际工增放缓，但二季度PPI保持上行（5月
                <span className="font-bold">3.9%</span>
                ，6月
                <span className="font-bold">4.1%</span>
                ），推动营收利润率提升至
                <span className="font-bold">5.56%</span>
                （同比提高
                <span className="font-bold">0.63%</span>
                ），但生产资料和生活资料剪刀差扩大，中下游企业生存条件严峻。
              </li>
              <li>
                <span className="font-bold">FIFO效应与库存：</span>
                油价飙升初期，受“先进先出”成本核算影响，石化链利润短期改善，但随着低价库存耗尽，下半年中下游成本压力或将凸显。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={ppiChartData}
              title="PPI当月同比、生产资料当月同比、生活资料当月同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'ppiYoy', name: 'PPI当月同比', strokeWidth: 2.5 },
                { dataKey: 'productionMaterialsYoy', name: '生产资料当月同比', strokeWidth: 2.5 },
                { dataKey: 'livingGoodsYoy', name: '生活资料当月同比', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[-6, 8]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['PPI当月同比', '生产资料当月同比', '生活资料当月同比']}
              highlightPeriods={['2026-06']}
              xAxisTickCount={7}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseTable
              data={industrialProfitData}
              columns={profitColumns}
              title="工业企业利润分项当月同比增加值"
              subtitle={
                <>
                  公式：利润=营收-成本-费用+投资收益+其它收益 &nbsp;&nbsp;|&nbsp;&nbsp; 单位：亿元
                </>
              }
              dateColumn="time"
              colorizeNumbers={false}
              highlightRows={[industrialProfitData.length - 1]}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
