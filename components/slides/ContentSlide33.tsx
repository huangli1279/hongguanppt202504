import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { chartColors } from '@/utils/chartColors';
import {
  socialFinancingGrowthData,
  socialFinancingStructureQ2Data,
} from '@/data/socialFinancing';

export const ContentSlide33: React.FC = () => {
  return (
    <BaseContentSlide
      title="二季度社融增量6万亿，主要依赖政府债支撑，信贷需求仍然弱"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="社融总量温和减速" delay="0ms" variant="accent">
            <p>
              Q2新增社会融资规模<span className="text-webank-blue">6万亿元</span>，同比少增<span className="text-webank-blue">1.67万亿元</span>，存量增速微降至<span className="text-webank-blue">7.4%</span>。其中，人民币贷款增量<span className="text-webank-blue">1.86万亿</span>，同比少增<span className="text-webank-blue">1.18万亿</span>；政府债净融资<span className="text-webank-blue">2.9万亿元</span>，同比少增<span className="text-webank-blue">8862亿元</span>。社融增速微降，主要拖累项来自人民币贷款及政府债券的高基数效应。
            </p>
          </BaseCard>
          <BaseCard title="企业债券融资" delay="120ms">
            <p>
              Q2企业债券融资<span className="text-webank-blue">1.02万亿元</span>，同比多增<span className="text-red-500 font-semibold">3954亿元</span>，延续Q1高增趋势。优质企业倾向于通过债券替代贷款进行融资。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={socialFinancingGrowthData}
              title="社会融资规模存量增速"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={[
                { dataKey: 'growth', name: '社融存量同比增速', strokeWidth: 2 },
              ]}
              yAxisDomain={[7, 10]}
              showYAxis={true}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={socialFinancingStructureQ2Data}
              title="Q2社融结构同比"
              subtitle="数据来源：中国人民银行 | 单位：亿元"
              xAxisKey="category"
              bars={[
                { dataKey: 'q24', name: '2025Q2', color: chartColors.tertiary },
                { dataKey: 'q25', name: '2026Q2', color: chartColors.primary },
              ]}
              yAxisDomain={[-10000, 40000]}
              showYAxis={true}
              yAxisWidth={50}
              yAxisTickFormatter={(val) => `${val}`}
              showReferenceLine={true}
              referenceLineY={0}
              barSize={35}
              xAxisAngle={-15}
              xAxisHeight={60}
              legendOrder={['2025Q2', '2026Q2']}
              unit="亿元"
              labelOffset={8}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
