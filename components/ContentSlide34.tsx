import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart } from './BaseLineChart';
import { BaseBarChart } from './BaseBarChart';
import { BaseCard } from './BaseCard';
import { socialFinancingGrowthData, socialFinancingStructureData } from '@/data/socialFinancing';

export const ContentSlide34: React.FC = () => {
  return (
    <BaseContentSlide
      title={'一季度社融平稳扩表，企业债融资是结构性增长亮点'}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="社融结构：政府债回落，企业债放量" delay="400ms">
            <p>
              2026年一季度新增社融累计 <span className="font-bold text-webank-blue">14.34万亿元</span>，同比少增0.29万亿元。人民币贷款同比少增约7960亿元，政府债同比少增3302亿元；企业债券融资增量 <span className="font-bold text-webank-blue">1.05万亿元</span>，同比多增5214亿元，是结构性亮点。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={socialFinancingGrowthData}
              title="2024-2026Q1社融存量规模同比增速"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={[
                { dataKey: 'growth', name: '社融存量同比增速', strokeWidth: 2 },
              ]}
              yAxisDomain={[7, 10]}
              showYAxis={true}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseBarChart
              data={socialFinancingStructureData}
              title="社融增量结构对比（26Q1 vs 25Q1）"
              subtitle="数据来源：中国人民银行 | 单位：亿元"
              xAxisKey="category"
              bars={[
                { dataKey: 'q24', name: '25Q1'},
                { dataKey: 'q25', name: '26Q1'},
              ]}
              yAxisDomain={[-10000, 100000]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}`}
              showReferenceLine={true}
              referenceLineY={0}
              barSize={12}
              legendOrder={['25Q1', '26Q1']}
              unit="亿元"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
