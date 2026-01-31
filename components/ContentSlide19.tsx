import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseTable, ColumnConfig } from './BaseTable';
import { cpiTrendData, cpiCategoryData } from '@/data/cpi';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide19: React.FC = () => {
  // 折线图配置
  const lineConfigs: LineConfig[] = [
    { dataKey: 'cpi', name: 'CPI:当月同比', color: chartColors.primary, strokeWidth: 2.5 },
    { dataKey: 'coreCpi', name: '核心CPI:当月同比', color: '#ef4444', strokeWidth: 2 },
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
    { key: 'grain', title: '粮食', align: 'center', render: (v) => <span className={v < 0 ? 'text-red-500' : ''}>{v}</span> },
    { key: 'edibleOil', title: '食用油', align: 'center', render: (v) => <span className={v < 0 ? 'text-red-500' : ''}>{v}</span> },
    { key: 'freshVegetables', title: '鲜菜', align: 'center', render: (v) => <span className={v > 10 ? 'text-emerald-600 font-semibold' : v < -10 ? 'text-red-500' : ''}>{v}</span> },
    { key: 'pork', title: '猪肉', align: 'center', render: (v) => <span className={v < -10 ? 'text-red-500' : v > 10 ? 'text-emerald-600' : ''}>{v}</span> },
    { key: 'freshFruit', title: '鲜果', align: 'center' },
    { key: 'transportation', title: '交通工具', align: 'center', render: (v) => <span className={v < 0 ? 'text-red-500' : ''}>{v}</span> },
    { key: 'livingServices', title: '生活用品', align: 'center' },
    { key: 'clothing', title: '衣着', align: 'center' },
    { key: 'education', title: '教育娱乐', align: 'center' },
    { key: 'healthcare', title: '医疗保健', align: 'center' },
    { key: 'otherGoods', title: '其他用品', align: 'center', render: (v) => <span className="text-emerald-600 font-semibold">{v}</span> },
    { key: 'homeAppliances', title: '家用器具', align: 'center', render: (v) => <span className={v > 4 ? 'text-emerald-600 font-medium' : v < 0 ? 'text-red-500' : ''}>{v}</span> },
  ];

  return (
    <BaseContentSlide
      title="CPI 0.8% 创年内新高难掩核心需求偏弱，Q4 消费倾向转淡凸显避险情绪"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="CPI 运行特征解析" delay="200ms" variant="accent">
            <p>
              2025年中国CPI全年与上年持平，CPI受食品与能源价格下降的拖累较大，但第四季度走势强劲，12月CPI回升至 <span className="text-emerald-600 font-semibold">0.8%</span>，但核心CPI仍显"温和"，反映出耐用品市场仍处于价格博弈期，居民对非必需品的消费弹性极低。
            </p>
          </BaseCard>
          <BaseCard title="消费倾向解析" delay="400ms">
            <p>
              四季度CPI主要受鲜菜季节性减产与全球金价避险（其他用品和服务维持高增）上涨驱动，消费品"以旧换新"等提振消费政策持续显效，推动了家用器具等消费品的需求与价格。
            </p>
          </BaseCard>
        </div>

        {/* 图表和表格区域 */}
        <div className="flex-1 grid grid-cols-5 gap-4 min-h-0">
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
              rowHeight="auto"
              striped={true}
              highlightRows={[10, 11]}
              highlightColor="rgba(0, 169, 244, 0.08)"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
