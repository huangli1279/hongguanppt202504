import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseCard } from '../base/BaseCard';
import { chartColors } from '@/utils/chartColors';
import {
  socialFinancingGrowthData,
  socialFinancingStructureData,
} from '@/data/socialFinancing';

export const ContentSlide34: React.FC = () => {
  return (
    <BaseContentSlide
      title={'一季度社融平稳扩表，企业债融资是结构性增长亮点'}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-6 flex-shrink-0">
          <BaseCard delay="120ms">
            <p>
              2026年一季度新增社融累计 <span className="font-bold text-webank-blue">14.34万亿元</span>，同比少增<span className="font-bold text-webank-blue">0.29万亿元</span>；对实体经济发放的人民币贷款增加<span className="font-bold text-webank-blue">8.9万亿元</span>，同比少增约<span className="font-bold text-webank-blue">7,960亿元</span>；政府债新增<span className="font-bold text-webank-blue">3.5万亿元</span>，同比少增<span className="font-bold text-webank-blue">3,302亿元</span>；<span className="font-bold text-webank-blue">企业债券融资增量1.05万亿元，同比多增5,214亿元，是结构性亮点</span>。3月末社融存量增速由上月的<span className="font-bold text-webank-blue">8.2%</span>温和回落至 <span className="font-bold text-webank-blue">7.9%</span>，主要受3月人民币贷款、政府债券少增<span className="font-bold text-webank-blue">0.99万亿</span>，以及去年同期超高基数（化债与信贷冲量）压制影响。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
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
              highlightPeriods={['2026-02']}
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={socialFinancingStructureData}
              title="社融结构分项融资增量（季度）"
              subtitle="数据来源：中国人民银行 | 单位：亿元"
              xAxisKey="category"
              bars={[
                { dataKey: 'q24', name: '25Q1', color: chartColors.tertiary },
                { dataKey: 'q25', name: '26Q1', color: chartColors.primary },
              ]}
              yAxisDomain={[-10000, 100000]}
              showYAxis={true}
              yAxisWidth={50}
              yAxisTickFormatter={(val) => `${val}`}
              showReferenceLine={true}
              referenceLineY={0}
              barSize={20}
              xAxisAngle={-45}
              legendOrder={['25Q1', '26Q1']}
              unit="亿元"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
