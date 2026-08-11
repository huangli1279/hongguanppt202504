import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { retailCumulativeYoyData } from '@/data/retail';
import { consumerConfidenceData } from '@/data/consumerConfidence';
import { chartColors } from '@/utils/chartColors';

const retailLines: LineConfig[] = [
  { dataKey: 'cumulativeYoy', name: '社零累计同比', strokeWidth: 2.5 },
];

const confidenceLines: LineConfig[] = [
  { dataKey: 'confidence', name: '消费者信心指数', strokeWidth: 2.5, color: chartColors.primary },
];

export const ContentSlide34: React.FC = () => {
  return (
    <BaseContentSlide
      title="社零增速持续下行，收入就业信心长期处于收缩区间"
      cardColumns={2}
      chartColumns={2}
      headerClassName="!mb-3"
      cards={
        <>
          <BaseCard title="社零增速持续下行" delay="0ms" variant="accent">
            <p>
              上半年社零累计同比仅
              <span className="font-bold text-webank-blue">1.3%</span>
              ，自2025年中
              <span className="font-bold text-webank-blue">5.0%</span>
              高点逐月回落，较年初市场普遍预期的全年约
              <span className="font-bold text-webank-blue">4.5%</span>
              明显偏低，消费修复显著不及预期。按当前轨迹，全年社零增速大概率难达预期中枢。
            </p>
          </BaseCard>
          <BaseCard title="消费信心仍处收缩区间" delay="120ms">
            <p>
              6月消费者信心指数
              <span className="font-bold text-webank-blue">89.4</span>
              ，自2月高点
              <span className="font-bold text-webank-blue">91.6</span>
              回落，持续低于荣枯线
              <span className="font-bold text-webank-blue">100</span>
              。分项中就业信心长期低位徘徊，收入与消费意愿自22年4月低于
              <span className="font-bold text-webank-blue">100</span>
              ，整体信心偏弱制约居民消费意愿释放。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={retailCumulativeYoyData}
              title="社会消费品零售总额：累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={retailLines}
              yAxisDomain={[-2, 10]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              legendOrder={['社零累计同比']}
              unit="%"
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseLineChart
              data={consumerConfidenceData}
              title="消费者信心指数"
              subtitle="数据来源：国家统计局 | 单位：点；100为荣枯线"
              lines={confidenceLines}
              yAxisDomain={[70, 130]}
              showYAxis
              showReferenceLine
              referenceLineY={100}
              legendOrder={['消费者信心指数']}
              unit=""
              xAxisTickCount={8}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
