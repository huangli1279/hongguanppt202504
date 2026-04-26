import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { cpiTrendData, cpiCategoryData } from '@/data/cpi';

export const ContentSlide18: React.FC = () => {
  const headlineLineConfigs: LineConfig[] = [
    { dataKey: 'cpi', name: 'CPI:当月同比', strokeWidth: 2.5, pointOffsets: { '2026-02': -12, '2026-03': 14 } },
    { dataKey: 'coreCpi', name: '核心CPI:当月同比', strokeWidth: 2, pointOffsets: { '2026-02': -12, '2026-03': -12 } },
  ];

  const categoryColumns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'foodTobaccoAlcohol', title: '食品烟酒', align: 'right' },
    { key: 'transportation', title: '交通通信', align: 'right' },
    { key: 'housing', title: '居住', align: 'right' },
    { key: 'education', title: '教育文娱', align: 'right' },
    { key: 'clothing', title: '衣着', align: 'right' },
    { key: 'healthcare', title: '医疗保健', align: 'right' },
    { key: 'householdServices', title: '生活用品', align: 'right' },
    { key: 'otherGoodsServices', title: '其他用品', align: 'right' },
  ];

  return (
    <BaseContentSlide
      title="一季度CPI同比上涨0.9%，核心CPI上涨1.2%"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-3 gap-4 mb-5 flex-shrink-0">
          <BaseCard title="基期变化" delay="0ms" variant="accent">
            <p>
              2026年起发布以2025年为基期的价格指数，本轮调整提升服务权数、下调消费品权数。官方测算，基期轮换对CPI同比指数影响约 <span className="text-emerald-600 font-semibold">0.06%</span>，总体稳定。
            </p>
          </BaseCard>
          <BaseCard title="通胀温和回升" delay="120ms">
            <p>
              一季度CPI累计同比 <span className="text-emerald-600 font-semibold">0.9%</span>，2月受春节错位与服务需求释放冲高至 <span className="text-emerald-600 font-semibold">1.3%</span>，3月回落至 <span className="text-emerald-600 font-semibold">1.0%</span>。核心CPI一季度同比上涨 <span className="text-emerald-600 font-semibold">1.2%</span>。
            </p>
          </BaseCard>
          <BaseCard title="分项表现" delay="600ms">
            <p>
              节后出行和人工服务需求自然降温，3月生活用品及服务CPI回落至 <span className="text-emerald-600 font-semibold">1.5%</span>。油价上行推升交通工具用燃料价格，带动CPI"交通通信"分项由负转正（通信价格基本稳定，转正主要由交通拉动）；医疗保健与其他用品和服务延续较高增速。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 grid grid-cols-5 gap-6 min-h-0">
          <ChartContainer delay="600ms" className="col-span-2">
            <BaseLineChart
              data={cpiTrendData}
              title="CPI与核心CPI当月同比走势"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={headlineLineConfigs}
              yAxisDomain={[-2, 2]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['CPI:当月同比', '核心CPI:当月同比']}
              highlightPeriods={['2026-02', '2026-03']}
              xAxisTickCount={6}
            />
          </ChartContainer>

          <ChartContainer delay="720ms" className="col-span-3">
            <BaseTable
              data={cpiCategoryData}
              columns={categoryColumns}
              title="CPI分项当月同比数据"
              subtitle="数据来源：国家统计局 | 单位：%"
              dateColumn="period"
              colorizeNumbers={true}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
