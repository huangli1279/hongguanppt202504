import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { pmiTrendData } from '../../data';

export const ContentSlide10: React.FC = () => {
  return (
    <BaseContentSlide
      title="二季度PMI重返扩张，7月小幅回落"
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="二季度景气度企稳，7月淡季回调" delay="0ms" variant="accent">
            <p>
              二季度制造业PMI重返扩张区间（6月<span className="font-bold text-red-600">50.3%</span>），生产经营活动预期向好，但7月回落至<span className="font-bold text-green-600">49.2%</span>。
            </p>
            <p>
              <span className="font-bold">产需结构：</span>
              7月生产指数依然高于新订单指数（高1.4个百分点），供给韧性较强，但总订单需求偏弱。
            </p>
          </BaseCard>

          <BaseCard title="价格景气持续走弱" delay="120ms">
            <p>
              价格指标自3月高位持续回落。最新<span className="font-bold">7月出厂价格指数降至47.8%</span>（6月48.2%），连续两月处于收缩区间；
              <span className="font-bold">7月原材料购进价格降至53.2%</span>（6月54.2%），虽然仍处扩张区间但持续降温，购进与出厂价差（<span className="text-green-500 font-bold">5.4个百分点</span>）中下游企业利润持续承压。
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
                  { dataKey: 'pmi', name: '制造业PMI', strokeWidth: 2.5, pointOffsets: { '2026-06': 24 } },
                  { dataKey: 'production', name: '生产', strokeWidth: 2.5, pointOffsets: { '2026-06': -18 } },
                  { dataKey: 'newOrders', name: '新订单', strokeWidth: 2.5, pointDXOffsets: { '2026-06': 12 }, pointOffsets: { '2026-06': -10 } },
                ]}
                yAxisDomain={[47, 54]}
                showYAxis
                showReferenceLine
                referenceLineY={50}
                legendOrder={['制造业PMI', '生产', '新订单']}
                highlightPeriods={['2026-06', '2026-07']}
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
                  { dataKey: 'outputPrice', name: '出厂价格', strokeWidth: 2.5, pointOffsets: { '2026-06': 20 } },
                  { dataKey: 'rawMaterialPurchasePrice', name: '原材料购进价格', strokeWidth: 2.5, pointDXOffsets: { '2026-06': 10 }, pointOffsets: { '2026-06': -14 } },
                ]}
                yAxisDomain={[40, 66]}
                showYAxis
                showReferenceLine
                referenceLineY={50}
                legendOrder={['出厂价格', '原材料购进价格']}
                highlightPeriods={['2026-06', '2026-07']}
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
