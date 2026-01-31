import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart } from './BaseLineChart';
import { BaseBarChart } from './BaseBarChart';
import { BaseCard } from './BaseCard';
import { socialFinancingGrowthData, socialFinancingStructureData } from '@/data/socialFinancing';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide35: React.FC = () => {
  return (
    <BaseContentSlide
      title={'12月社融存量增速回落至8.3%，政府债高基数是核心拖累，企业信贷现积极信号'}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="社融：高基数拖累" delay="200ms">
            12月新增社融 <span className="font-bold text-webank-blue">2.21万亿元</span>（同比少增6457亿），存量增速降至 <span className="font-bold text-webank-blue">8.3%</span>，核心在于2024年同期"2万亿隐债置换"导致政府债基数异常偏高。
          </BaseCard>
          <BaseCard title="企业中长贷：由负转正" delay="400ms">
            12月政府债净融资（0.7万亿）同比大幅少增 <span className="font-bold text-red-500">1.07万亿元</span>，但受5000亿新型政策性金融工具落地、重大项目开工及银行年末「冲量」三重驱动，12月企业中长期贷款新增 <span className="font-bold text-webank-blue">3300亿元</span>（同比多增2900亿），结束"五连降"强势反弹。
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={socialFinancingGrowthData}
              title="2024-2025年社融存量规模同比增速"
              subtitle="单位：%"
              lines={[
                { dataKey: 'growth', name: '社融存量同比增速', color: chartColors.primary, strokeWidth: 2 },
              ]}
              yAxisDomain={[7, 10]}
              showYAxis={true}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseBarChart
              data={socialFinancingStructureData}
              title="社融增量结构对比（25Q4 vs 24Q4）"
              subtitle="单位：亿元"
              xAxisKey="category"
              bars={[
                { dataKey: 'q25', name: '25Q4', color: chartColors.primary },
                { dataKey: 'q24', name: '24Q4', color: chartColors.grey400 },
              ]}
              yAxisDomain={[-10000, 45000]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              barSize={12}
              legendOrder={['25Q4', '24Q4']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
