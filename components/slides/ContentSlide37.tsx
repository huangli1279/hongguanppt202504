import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { industryHeatmapData } from '@/data/industryHeatmap';

const industryColumns: ColumnConfig[] = [
  { key: 'industry', title: '行业', align: 'left', width: '170px' },
  { key: 'valueAdded', title: '工业增加值(H1)', align: 'right', width: '95px' },
  { key: 'profitGrowth', title: '利润增速(1-5月)', align: 'right', width: '90px' },
  { key: 'ppiYoy', title: 'PPI同比(6月)', align: 'right', width: '78px' },
  { key: 'investmentGrowth', title: '投资增速(H1)', align: 'right', width: '85px' },
  { key: 'pmi', title: 'PMI景气(6月)', align: 'center', width: '100px' },
  { key: 'exportPerformance', title: '出口表现(H1)', align: 'left', width: '230px' },
  { key: 'judgment', title: '综合判断', align: 'left', width: '210px' },
];

export const ContentSlide37: React.FC = () => {
  return (
    <BaseContentSlide
      title="从PMI\PPI\投资\同业增加值\利润\出口拆分行业对比看，高景气行业主要为AI产业链"
      cardColumns={1}
    >
      <div className="flex flex-col h-full">
        <div className="mb-3 flex-shrink-0">
          <BaseCard title="高景气行业总结" delay="0ms" variant="accent" className="!p-3 gap-1">
            <p className="text-sm leading-snug">
              AI相关行业（特别是算力相关）、高端装备相关、绿色出口相关；K型分化短期内不可逆转，新经济端的AI景气有望延续，但旧经济端的地产、建材、传统制造业仍将在底部运行。政策需要在'扶新'与'托旧'之间寻找平衡。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <BaseTable
              data={industryHeatmapData}
              columns={industryColumns}
              title="分行业景气度对比：工业增加值/利润/PPI/投资/PMI/出口"
              subtitle="数据来源：国家统计局、海关总署、中国物流与采购联合会 | H1为上半年累计，其余为最新可比月度/累计数据"
              colorizeNumbers={false}
              striped
              rowHeight="auto"
              cellClassName="!px-2 tabular-nums text-[11px] leading-tight"
              headerCellClassName="!px-2 !py-1 whitespace-nowrap text-[11px] leading-tight"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
