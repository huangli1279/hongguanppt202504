import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { fiscalExpenditureH1GrowthData, fiscalExpenditureTrendData } from '@/data/fiscalRevenue';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide27: React.FC = () => {
  const trendLines: LineConfig[] = [
    { dataKey: 'y2025', name: '2025年', color: '#93a3b8', strokeWidth: 2, labelDY: -10 },
    { dataKey: 'y2026', name: '2026年', color: chartColors.primary, strokeWidth: 2.5, labelDY: 16 },
  ];

  const expBars: BarConfig[] = [
    { dataKey: 'amount', name: '总额', color: '#4A79AA' },
  ];
  const growthLines: BarLineConfig[] = [
    { dataKey: 'growth', name: '增速', color: '#E8913A', strokeWidth: 0, yAxisId: 'right', unit: '%' },
  ];

  return (
    <BaseContentSlide
      title={<>上半年一般预算支出增长1.5%，节奏阶段性放缓，结构重科技民生</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="支出节奏阶段性放缓" delay="0ms" variant="accent">
            <p>
              1—6月累计增长 <span className="text-red-500 font-semibold">1.5%</span>，距离年初 <span className="text-red-500 font-semibold">4.4%</span> 的目标仍有空间，支出进度 <span className="text-red-500 font-semibold">47.76%</span>。机构预测下半年支出进度加快，重点关注7月底政治局会议定调。
            </p>
          </BaseCard>
          <BaseCard title="投向结构：重科技民生，轻传统基建" delay="120ms">
            <p>
              上半年科学技术支出同比增长 <span className="text-red-500 font-semibold">1.3%</span>，卫生健康增长 <span className="text-red-500 font-semibold">10.8%</span>；而基建相关支出（节能环保、城乡社区、农林水、交运）合并同比下降 <span className="text-green-600 font-semibold">5.3%</span>，资金向民生科学技术倾斜特征显著。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={fiscalExpenditureTrendData}
              title="一般公共预算支出合计累计同比"
              subtitle="数据来源：财政部 | 单位：累计同比：%"
              lines={trendLines}
              yAxisDomain={[0, 6]}
              showYAxis={true}
              showReferenceLine={false}
              xAxisTicks={['2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']}
              unit="%"
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseBarChart
              data={fiscalExpenditureH1GrowthData}
              title="1-6月一般公共预算支出主要分项总额与累计同比"
              subtitle="数据来源：财政部 | 单位：亿元，%"
              bars={expBars}
              lines={growthLines}
              xAxisKey="category"
              yAxisDomain={[0, 30000]}
              yAxisTickFormatter={(val) => String(val)}
              unit="亿元"
              showYAxis={true}
              showLabels={false}
              showLineYAxis={true}
              lineAxisDomain={[-12, 14]}
              lineUnit="%"
              lineYAxisTickFormatter={(val) => `${val.toFixed(0)}%`}
              lineShowDot={true}
              lineLabelFormatter={(val) => `${Number(val).toFixed(1)}%`}
              legendOrder={['总额', '增速']}
              barSize={28}
              xAxisAngle={-45}
              xAxisHeight={70}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
