import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { usExportMonthlyData, tradeByCountryH1Data, TradeByCountryDataPoint } from '@/data/foreignTrade';
import { cn } from '@/utils/cn';

export const ContentSlide25: React.FC = () => {
  const usExportLineConfigs: LineConfig[] = [
    { dataKey: 'yoy', name: '当月同比', strokeWidth: 2.5, yAxisId: 'left', unit: '%' },
    { dataKey: 'value', name: '当月值', strokeWidth: 2, yAxisId: 'right', unit: '' },
  ];

  const columns: ColumnConfig[] = [
    {
      key: 'region',
      title: '国别/地区',
      align: 'left',
      width: '28%',
      render: (value, row: TradeByCountryDataPoint) => (
        <span className={cn(row.highlight || row.region === '总值' ? 'font-bold text-webank-blue' : '')}>
          {value}
        </span>
      ),
    },
    {
      key: 'exportAmount',
      title: '1-6月出口',
      align: 'right',
      render: (val: number) =>
        typeof val === 'number' ? (
          <span className="text-black">
            {val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </span>
        ) : (
          <span className="text-slate-400">-</span>
        ),
    },
    {
      key: 'exportYoy',
      title: '出口同比',
      align: 'right',
      includeInStats: true,
      redThreshold: 10,
    },
    {
      key: 'importAmount',
      title: '1-6月进口',
      align: 'right',
      render: (val: number) =>
        typeof val === 'number' ? (
          <span className="text-black">
            {val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </span>
        ) : (
          <span className="text-slate-400">-</span>
        ),
    },
    {
      key: 'importYoy',
      title: '进口同比',
      align: 'right',
      includeInStats: true,
      redThreshold: 10,
      highlight: true,
    },
  ];

  return (
    <BaseContentSlide
      title="国别结构：对美出口触底回升，新兴市场稳固贸易基本盘"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="对美贸易边际缓和" delay="0ms" variant="accent">
            <p>
              5月14日中美元首会谈构建“建设性战略稳定关系”，加权平均关税率受政策预期及判决影响回落，4月对美进出口由降转升，5月继续保持增长态势同比增长<span className="text-red-500 font-semibold">35.4%</span>。
            </p>
          </BaseCard>
          <BaseCard title="多元化布局进一步巩固" delay="120ms">
            <p>
              1—6月，我国对东盟、欧盟、非洲的进出口额均实现两位数增长。对共建“一带一路”国家进出口增长<span className="text-red-500 font-semibold">17.9%</span>，占出口总额比重过半。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseTable
              data={tradeByCountryH1Data}
              columns={columns}
              title="主要国别（地区）进出口总值（1-6月）"
              subtitle="数据来源：海关总署 | 金额单位：亿美元"
              striped={true}
              rowHeight="auto"
              highlightRows={[3, 5]}
              cellClassName="px-1.5 text-caption leading-tight"
              headerCellClassName="px-1.5 text-caption leading-tight"
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseLineChart
              data={usExportMonthlyData}
              title="对美出口美元计价当月同比及当月值"
              subtitle="数据来源：海关总署 | 同比为%，当月值为百万美元"
              lines={usExportLineConfigs}
              yAxisDomain={[-40, 40]}
              showYAxis={true}
              showRightYAxis={true}
              rightYAxisDomain={[25000, 50000]}
              rightYAxisTickFormatter={(val) => `${Math.round(val / 1000)}k`}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['当月同比', '当月值']}
              highlightPeriods={['2026-05']}
              xAxisTickCount={10}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
