import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { infrastructureInvestmentData } from '@/data/infrastructureInvestment';

export const ContentSlide25: React.FC = () => {
  // 二级表头列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '日期', align: 'center' },
    {
      key: 'transport',
      title: '交通运输、仓储和邮政业',
      children: [
        { key: 'transportTotal', title: '合计', align: 'center' },
        { key: 'railway', title: '铁路运输', align: 'center' },
        { key: 'road', title: '道路运输', align: 'center' },
        { key: 'pipeline', title: '管道运输', align: 'center' },
      ],
    },
    {
      key: 'waterEnv',
      title: '水利、环境和公共设施管理业',
      children: [
        { key: 'waterEnvTotal', title: '合计', align: 'center' },
        { key: 'ecoProtection', title: '生态环境', align: 'center' },
        { key: 'publicFacility', title: '公共设施', align: 'center' },
      ],
    },
    {
      key: 'electricity',
      title: '电力、热力、燃气及水的生产和供应业',
      children: [
        { key: 'electricityTotal', title: '合计', align: 'center' },
        { key: 'gas', title: '燃气', align: 'center' },
        { key: 'waterSupply', title: '水生产', align: 'center' },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="基建投资全年下降1.48%，财政约束与战略转型驱动行业分化"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="化债约束与挤出效应" delay="200ms" variant="accent">
            <p>
              受地方政府化债提速影响，财政资金优先用于偿还存量债务，对新增投资形成明显"挤出"。12月单月基建投资估算同比下降约<span className="text-red-500 font-semibold">12.2%-16%</span>，资金到位率偏低制约施工进度。
            </p>
          </BaseCard>
          <BaseCard title="高度依赖地方财政的传统领域成为主要拖累" delay="400ms">
            <p>
              严重依赖地方财政和土地收入的水利环境公用设施投资、道路运输业全年增速持续下降，成为主要拖累。
            </p>
          </BaseCard>
          <BaseCard title="符合国家长期战略的领域逆势高增" delay="600ms">
            <p>
              与传统领域形成鲜明对比的是，服务于长期国家战略的领域实现强劲增长，电热气水投资全年增长<span className="text-green-600 font-semibold">9.1%</span>，管道运输业全年增长<span className="text-green-600 font-semibold">36%</span>。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="800ms" className="flex-1 min-h-0">
          <BaseTable
            data={infrastructureInvestmentData}
            columns={columns}
            title="2025年基础设施建设相关行业固定资产投资累计增长数据"
            subtitle="数据来源：国家统计局 | 单位：%"
            dateColumn="period"
            rowHeight="auto"
            stickyHeader={true}
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
