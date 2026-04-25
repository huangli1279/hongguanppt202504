import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { consumerConfidenceData, incomeExpenditureData } from '@/data/consumerConfidence';

export const ContentSlide19: React.FC = () => {
  // 消费者信心指数折线图配置
  const confidenceLineConfigs: LineConfig[] = [
    { dataKey: 'confidence', name: '消费者信心指数', strokeWidth: 2.5 },
    { dataKey: 'income', name: '收入预期', strokeWidth: 2 },
    { dataKey: 'employment', name: '就业预期', strokeWidth: 2 },
    { dataKey: 'consumption', name: '消费意愿', strokeWidth: 2 },
  ];

  // 收入与消费支出折线图配置
  const incomeLineConfigs: LineConfig[] = [
    { dataKey: 'incomeReal', name: '可支配收入', strokeWidth: 2.5 },
    { dataKey: 'consumptionReal', name: '消费支出', strokeWidth: 2 },
    { dataKey: 'wageIncome', name: '工资性收入', strokeWidth: 1.5 },
    { dataKey: 'operatingIncome', name: '经营净收入', strokeWidth: 1.5 },
    { dataKey: 'propertyIncome', name: '财产净收入', strokeWidth: 1.5 },
  ];

  return (
    <BaseContentSlide
      title="人均可支配收入实际增长5.0%，消费者信心指数回升但就业依旧承压"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="收入与就业预期分化制约消费者信心回暖" delay="200ms" variant="accent">
            <p>
              消费者信心指数（从<span className="text-webank-accent font-semibold">86.4</span>升至<span className="text-emerald-600 font-semibold">90.3</span>）的温和回升，主要由收入预期和消费意愿支撑，就业预期虽有回暖趋势，但主要受相关领域就业前景影响：新兴领域（AI、低空经济），中长期的就业结构性问题仍然存在。
            </p>
          </BaseCard>
          <BaseCard title="收入增速超越消费，居民储蓄倾向依然显著" delay="400ms">
            <p>
              2025年人均可支配收入实际增长<span className="text-emerald-600 font-semibold">5.0%</span>，但居民人均消费支出实际增长<span className="text-webank-accent font-semibold">4.4%</span>，低于收入增速；显示在资产价格波动（房价/股市）背景下，居民预防性储蓄心理依然较强。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          {/* 消费者信心指数折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={consumerConfidenceData}
              title="2024-2025年消费者信心及分项指标趋势"
              subtitle="数据来源：国家统计局 | 单位：指数"
              lines={confidenceLineConfigs}
              yAxisDomain={[65, 105]}
              showYAxis={true}
              legendOrder={['消费者信心指数', '收入预期', '就业预期', '消费意愿']}
              xAxisTickCount={6}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>

          {/* 收入与消费支出折线图 */}
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={incomeExpenditureData}
              title="2024-2025年居民收入与消费支出累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={incomeLineConfigs}
              yAxisDomain={[0, 10]}
              showYAxis={true}
              legendOrder={['可支配收入', '消费支出', '工资性收入', '经营净收入', '财产净收入']}
              xAxisTickCount={8}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
