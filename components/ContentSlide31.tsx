import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseTable, ColumnConfig } from './BaseTable';
import { fiscalRevenueTrendData, taxCategoryData } from '@/data/fiscalRevenue';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide31: React.FC = () => {
  // 折线图配置
  const lines: LineConfig[] = [
    { dataKey: 'taxRevenue', name: '税收收入', color: chartColors.primary, strokeWidth: 2 },
    { dataKey: 'nonTaxRevenue', name: '非税收入', color: chartColors.secondary, strokeWidth: 2 },
    { dataKey: 'total', name: '合计', color: chartColors.tertiary, strokeWidth: 2.5 },
  ];

  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'taxType', title: '税种', align: 'left' },
    { key: 'amount', title: '1-11月金额(亿元)', align: 'right', render: (val) => val.toLocaleString() },
    { 
      key: 'growth', 
      title: '累计增速(%)', 
      align: 'right',
      render: (val) => {
        if (val === null) return <span className="text-slate-400">-</span>;
        const color = val > 10 ? 'text-red-500' : val < 0 ? 'text-green-600' : 'text-slate-600';
        return <span className={color}>{val.toFixed(1)}</span>;
      }
    },
  ];

  return (
    <BaseContentSlide
      title={<>1-11月全年公共预算收入同比增长0.8%，税收收入增速由负转正</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="收入结构优化，恢复质量提升" delay="200ms" variant="accent">
            <p>
              2025年全国一般公共预算收入呈现逐步恢复的态势。其中，税收收入自二季度起持续改善，而非税收入的增速则显著回落，从上半年的<span className="text-red-500 font-semibold">+3.7%</span>大幅回落至<span className="text-green-600 font-semibold">-3.7%</span>。
            </p>
          </BaseCard>
          <BaseCard title="主体税种稳健，印花税高增" delay="400ms">
            <p>
              国内增值税增速<span className="text-red-500 font-semibold">3.9%</span>直接反映了工商业生产和销售活动的活跃度在提升，因加强互联网平台税收征管及股东减持带动个人所得税增长（前11月<span className="text-red-500 font-semibold">+11.5%</span>），资本市场活跃度提升显著拉动证券印花税（<span className="text-red-500 font-semibold">+70.7%</span>）。
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
              title="2025年1-11月主要税种累计完成情况"
              subtitle="数据来源：财政部 | 单位：亿元、%"
              rowHeight="auto"
              striped={true}
              colorizeNumbers={false}
              highlightRows={[5, 6]}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
