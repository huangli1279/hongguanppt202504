import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
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
  ];

  return (
    <BaseContentSlide
      title="消费者信心指数回升，人均可支配收入与消费支出差距扩大"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="信心指数创阶段高点，就业预期仍偏弱" delay="0ms">
            <p>
              2月消费者信心指数升至
              <span className="text-black font-semibold">91.60</span>
              ，创2023年3月以来最高点；收入信心指数跃升至
              <span className="text-black font-semibold">100.30</span>
              ，但就业信心指数回落至
              <span className="text-black font-semibold">76.30</span>
              ，就业市场前景未持续改善。
            </p>
          </BaseCard>
          <BaseCard title="收入快于消费，防御性储蓄仍在延续" delay="120ms" variant="accent">
            <p>
              一季度，人均可支配收入增速
              <span className="text-black font-semibold">4.0%</span>
              与消费支出增速
              <span className="text-black font-semibold">2.6%</span>
              的差值扩大至
              <span className="text-red-600 font-semibold">1.4个百分点</span>
              ，显示居民资产负债表修复仍处于"防御性储蓄"阶段。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          {/* 消费者信心指数折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={consumerConfidenceData}
              title="消费者信心指数及分项数据"
              subtitle="数据来源：国家统计局 | 单位：指数"
              lines={confidenceLineConfigs}
              yAxisDomain={[65, 105]}
              showYAxis={true}
              legendOrder={['消费者信心指数', '收入预期', '就业预期', '消费意愿']}
              xAxisTickCount={7}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>

          {/* 收入与消费支出折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={incomeExpenditureData}
              title="居民收入及支出累计同比数据（季度）"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={incomeLineConfigs}
              yAxisDomain={[0, 10]}
              showYAxis={true}
              legendOrder={['可支配收入', '消费支出']}
              xAxisTickCount={8}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
