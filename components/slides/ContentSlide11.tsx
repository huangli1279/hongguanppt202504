import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { pmiTrendData } from '../../data';

export const ContentSlide11: React.FC = () => {
  return (
    <BaseContentSlide
      title="二季度PMI重返扩张，价格预期冲高回落"
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="二季度景气度波动企稳" delay="0ms" variant="accent">
            <p>
              二季度制造业PMI重返扩张区间，6月为
              <span className="font-bold">50.3%</span>
              （5月<span className="font-bold">50.0%</span>），显示生产经营活动预期向好。
            </p>
            <p>
              <span className="font-bold">产需错配：</span>
              二季度生产指数PMI持续高于新订单指数，显示生产端扩张略快于需求端。
            </p>
          </BaseCard>

          <BaseCard title="价格景气冲高回落" delay="120ms">
            <p>
              3月原材料购进价格、出厂价格分别冲高至
              <span className="font-bold">63.9%</span>、
              <span className="font-bold">55.4%</span>
              后，二季度逐月回落；6月出厂价格跌破荣枯线至
              <span className="font-bold">48.2%</span>
              ，购进价格仍处扩张区间（
              <span className="font-bold">54.2%</span>
              ）但已明显回落。购进价格持续高于出厂价格，价差仍对企业利润空间形成挤压。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <div className="flex gap-4 sm:gap-6 h-full min-h-0">
          <div className="w-[55%] min-w-0 flex-shrink-0">
            <ChartContainer delay="600ms">
              <BaseLineChart
                data={pmiTrendData}
                title="制造业PMI及分项指标月度数据"
                subtitle="数据来源：国家统计局 | 单位：%"
                lines={[
                  { dataKey: 'pmi', name: '制造业PMI', strokeWidth: 2.5 },
                  { dataKey: 'production', name: '生产', strokeWidth: 2.5 },
                  { dataKey: 'newOrders', name: '新订单', strokeWidth: 2.5 },
                ]}
                yAxisDomain={[48, 54]}
                showYAxis
                showReferenceLine
                referenceLineY={50}
                legendOrder={['制造业PMI', '生产', '新订单']}
                highlightPeriods={['2026-06']}
                xAxisTickCount={7}
                unit=""
                yAxisTickFormatter={(val) => `${val}`}
              />
            </ChartContainer>
          </div>

          <div className="w-[45%] min-w-0 flex-1">
            <ChartContainer delay="660ms">
              <BaseLineChart
                data={pmiTrendData}
                title="制造业PMI出厂价格、主要原材料购进价格"
                subtitle="数据来源：国家统计局、中国物流与采购联合会 | 单位：%"
                lines={[
                  { dataKey: 'outputPrice', name: '出厂价格', strokeWidth: 2.5 },
                  { dataKey: 'rawMaterialPurchasePrice', name: '原材料购进价格', strokeWidth: 2.5 },
                ]}
                yAxisDomain={[40, 66]}
                showYAxis
                showReferenceLine
                referenceLineY={50}
                legendOrder={['出厂价格', '原材料购进价格']}
                highlightPeriods={['2026-06']}
                xAxisTickCount={7}
                unit=""
                yAxisTickFormatter={(val) => `${val}`}
              />
            </ChartContainer>
          </div>
        </div>
      }
    />
  );
};
