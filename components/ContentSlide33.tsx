import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseTable, ColumnConfig } from './BaseTable';
import { fiscalRevenueTrendData, taxCategoryData } from '@/data/fiscalRevenue';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide33: React.FC = () => {
  // 折线图配置
  const lines: LineConfig[] = [
    { dataKey: 'taxRevenue', name: '税收收入', color: chartColors.primary, strokeWidth: 2 },
    { dataKey: 'nonTaxRevenue', name: '非税收入', color: chartColors.secondary, strokeWidth: 2 },
    { dataKey: 'total', name: '合计', color: chartColors.tertiary, strokeWidth: 2.5 },
  ];

  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'taxType', title: '税种', align: 'left' },
    { key: 'amount', title: '税额(亿元)', align: 'right' },
    { 
      key: 'growth', 
      title: '累计增速(%)', 
      align: 'right'
    },
  ];

  return (
    <BaseContentSlide
      title={<>全年公共预算收入同比下降-1.7%，税收收入小幅增长，非税因高基数大幅下降</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="税收结构改善" delay="200ms" variant="accent">
            <p>
              在总收入微降的背景下，税收收入增速由负转正（<span className="text-red-500 font-semibold">+0.8%</span>），好于整体收入，而非税收入因2024年存在一次性、大规模的国有资本经营收入上缴，形成了极高的比较基数（<span className="text-green-600 font-semibold">-11.3%</span>），两者走势形成鲜明反差，同时税收占比提升。
            </p>
          </BaseCard>
          <BaseCard title="主体税种稳健，印花税高增" delay="400ms">
            <p>
              因加强互联网平台税收征管及股东减持带动个人所得税大幅改善（<span className="text-red-500 font-semibold">+11.5%</span>），资本市场活跃度提升显著拉动证券印花税（<span className="text-red-500 font-semibold">+70.7%</span>），增值税（<span className="text-red-500 font-semibold">+3.4%</span>）和企业所得税（<span className="text-red-500 font-semibold">+1%</span>）随工业生产边际改善而回升。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          {/* 折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={fiscalRevenueTrendData}
              title="2024-2025年一般公共预算收入累计同比变化"
              subtitle="数据来源：财政部 | 单位：%"
              lines={lines}
              yAxisDomain={[-10, 30]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['税收收入', '非税收入', '合计']}
              xAxisTickCount={7}
            />
          </ChartContainer>

          {/* 表格 */}
          <ChartContainer delay="800ms">
            <BaseTable
              data={taxCategoryData}
              columns={columns}
              title="2025年主要税种累计完成情况"
              subtitle="数据来源：财政部 | 单位：亿元、%"
              striped={true}
              highlightRows={[5, 6]}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
