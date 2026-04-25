import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseTable, ColumnConfig } from './BaseTable';
import { cpiTrendData, cpiCategoryData } from '@/data/cpi';

export const ContentSlide20: React.FC = () => {
  // 折线图配置
  const lineConfigs: LineConfig[] = [
    { dataKey: 'cpi', name: 'CPI:当月同比', strokeWidth: 2.5 },
    { dataKey: 'coreCpi', name: '核心CPI:当月同比', strokeWidth: 2 },
  ];

  // 表格数据转换
  const tableData = cpiCategoryData.map(item => ({
    period: item.period,
    grain: item.grain,
    edibleOil: item.edibleOil,
    freshVegetables: item.freshVegetables,
    pork: item.pork,
    freshFruit: item.freshFruit,
    transportation: item.transportation,
    livingServices: item.livingServices,
    clothing: item.clothing,
    education: item.education,
    healthcare: item.healthcare,
    otherGoods: item.otherGoods,
    homeAppliances: item.homeAppliances,
  }));

  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'grain', title: '粮食', align: 'right' },
    { key: 'edibleOil', title: '食用油', align: 'right' },
    {
      key: 'freshVegetables',
      title: '鲜菜',
      align: 'right',
      render: (value: any, row: any) => {
        const isTarget = ['2025-10', '2025-11', '2025-12'].includes(row.period);
        return (
          <span className={isTarget ? "text-red-500 font-medium" : ""}>
            {typeof value === 'number' ? value.toFixed(1) : value}
          </span>
        );
      }
    },
    { key: 'pork', title: '猪肉', align: 'right' },
    { key: 'freshFruit', title: '鲜果', align: 'right' },
    { key: 'transportation', title: '交通工具', align: 'right' },
    { key: 'livingServices', title: '生活用品', align: 'right' },
    { key: 'clothing', title: '衣着', align: 'right' },
    { key: 'education', title: '教育娱乐', align: 'right' },
    { key: 'healthcare', title: '医疗保健', align: 'right' },
    {
      key: 'otherGoods',
      title: '金饰品',
      align: 'right',
      render: (value: any) => (
        <span className="text-red-500 font-medium">
          {typeof value === 'number' ? value.toFixed(1) : value}
        </span>
      )
    },
    {
      key: 'homeAppliances',
      title: '家用器具',
      align: 'right',
      render: (value: any, row: any) => {
        const isTarget = ['2025-10', '2025-11', '2025-12'].includes(row.period);
        return (
          <span className={isTarget ? "text-red-500 font-medium" : ""}>
            {typeof value === 'number' ? value.toFixed(1) : value}
          </span>
        );
      }
    },
  ];

  return (
    <BaseContentSlide
      title="CPI一季度持续回升，主要受鲜菜季节性减产与金价上涨驱动"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="CPI 运行特征解析" delay="200ms" variant="accent">
            <p>
              2025年中国CPI全年与上年持平，CPI受食品与能源价格下降的拖累较大，但第一季度走势强劲，12月CPI回升至 <span className="text-emerald-600 font-semibold">0.8%</span>，但核心CPI仍显"温和"，反映出耐用品市场仍处于价格博弈期，居民对非必需品的消费弹性极低。
            </p>
          </BaseCard>
          <BaseCard title="CPI结构性分化显著" delay="400ms">
            <p>
              一季度CPI回升主要受<span className="font-semibold text-emerald-600">鲜菜季节性减产</span>（供给端扰动）与<span className="font-semibold text-emerald-600">全球金价避险需求</span>（金饰品CPI全年维持高增）驱动。耐用消费品方面，受“以旧换新”政策提振，<span className="font-semibold text-emerald-600">家用器具</span>价格自下半年起由负转正，反映政策有效激发了存量更新需求。
            </p>
          </BaseCard>
        </div>

        {/* 图表和表格区域 */}
        <div className="flex-1 grid grid-cols-5 gap-6 min-h-0">
          {/* 折线图 - 占2列 */}
          <ChartContainer delay="600ms" className="col-span-2">
            <BaseLineChart
              data={cpiTrendData}
              title="2024-2025年全国CPI及核心CPI当月同比走势"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={lineConfigs}
              yAxisDomain={[-2, 2]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['CPI:当月同比', '核心CPI:当月同比']}
              xAxisTickCount={6}
            />
          </ChartContainer>

          {/* 表格 - 占3列 */}
          <ChartContainer delay="800ms" className="col-span-3">
            <BaseTable
              title="2025年主要商品与服务类别CPI当月同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={tableData}
              columns={columns}
              dateColumn="period"
              colorizeNumbers={false}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
