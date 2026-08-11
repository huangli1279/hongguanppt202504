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
  // 2026年（2602 起）利润、营收-成本、费用标红
  if (row.time >= '2602') {
    return <span className="text-red-500">{formatted}</span>;
  }

  return <span className="text-slate-600">{formatted}</span>;
};

const profitColumns: ColumnConfig[] = [
  { key: 'time', title: '日期', width: '70px', align: 'left' },
  { key: 'totalProfit', title: '利润', width: '80px', align: 'right', render: renderColoredCell },
  { key: 'revenue', title: '营收', width: '90px', align: 'right' },
  { key: 'cost', title: '成本', width: '90px', align: 'right' },
  { key: 'revenueMinusCost', title: '营收 - 成本', width: '100px', align: 'right', render: renderColoredCell },
  { key: 'expenses', title: '费用(不含研发费用)', width: '140px', align: 'right', render: renderColoredCell },
  { key: 'investmentIncome', title: '投资收益', width: '90px', align: 'right' },
];

export const ContentSlide11: React.FC = () => {
  return (
    <BaseContentSlide
      title="上半年企业利润持续增长，受输入性通胀影响显著"
      cardColumns={3}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="上半年企业利润稳定增长" delay="0ms" variant="accent">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-bold">利润总量：</span>
                1-6月规上工业企业利润同比增长
                <span className="text-red-500 font-bold">18.7%</span>
                ，5月增长
                <span className="text-red-500 font-bold">21.1%</span>
                ，6月增长
                <span className="text-red-500 font-bold">15.1%</span>
                ，拆分各项看，增长的主要贡献为营收-成本，营销管理等费用支出较25年增长。
              </li>
              <li>
                <span className="font-bold">FIFO效应：</span>
                受“先进先出”成本核算影响，油价飙升初期，低价库存导致石化链利润短期暴涨（4月同比
                <span className="text-red-500 font-bold">+88.5%</span>
                ）。AI相关上游产品价格和需求增长迅猛，导致计算机、通信电子设备制造业利润增长
                <span className="text-red-500 font-bold">96%</span>
                。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="二季度PPI回升拉动价格增长" delay="120ms">
            <p>
              二季度PPI保持上行增长
              <span className="text-red-500 font-bold">3.6%</span>
              （6月
              <span className="text-red-500 font-bold">4.1%</span>
              ），为 2022 年四季度以来季度涨幅首次转正，推动营收利润率提升至
              <span className="text-red-500 font-bold">5.56%</span>
              （同比提高
              <span className="text-red-500 font-bold">0.63%</span>
              ），但生产资料和生活资料剪刀差二季度持续扩大，6月为
              <span className="text-red-500 font-bold">6.4%</span>
              ，中下游企业生存条件严峻。
            </p>
          </BaseCard>

          <BaseCard
            title={
              <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-200 to-amber-300 rounded-full text-amber-700 font-semibold shadow-sm">
                机构预测
              </span>
            }
            delay="240ms"
            className="[&_h4]:!bg-gradient-to-r [&_h4]:!from-yellow-200 [&_h4]:!to-amber-300 [&_h4]:!text-amber-700 [&_h4]:!shadow-sm border-l-4 !border-amber-400"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-bold">PPI：</span>
                高点或在 5–6 月已过，年底约
                <span className="text-red-500 font-bold">2–3%</span>
                ，全年预计落在
                <span className="text-red-500 font-bold">2.2–3%</span>
                。
              </li>
              <li>
                <span className="font-bold">企业利润：</span>
                受价格传导不畅影响，下半年中下游压力偏大，利润增速存在下行风险。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" className="pb-8">
            <BaseTable
              data={industrialProfitData}
              columns={profitColumns}
              title={
                <>
                  工业企业利润分项当月同比增加值
                  <span className="text-red-500 font-normal normal-case tracking-normal">
                    （利润（亿）=营收-成本-费用+投资收益+其它收益）
                  </span>
                </>
              }
              dateColumn="time"
              colorizeNumbers={false}
              highlightRows={[industrialProfitData.length - 1]}
              titleBlockClassName="mb-1"
              headerCellClassName="!px-1.5 !py-1.5 text-xs leading-tight whitespace-nowrap"
              cellClassName="!px-1.5 text-xs leading-snug tabular-nums"
            />
          </ChartContainer>
          <ChartContainer delay="720ms" className="pb-8">
            <BaseLineChart
              data={ppiChartData}
              title="PPI、生产资料、生活资料当月同比"
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
        </>
      }
    />
  );
};
