import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { pmiTrendData } from '../../data';
import { seriesColors } from '../../utils/chartColors';

export const ContentSlide08: React.FC = () => {
  const pmiData = pmiTrendData.filter((d) => d.period >= '2025-01');
  return (
    <BaseContentSlide
      cardColumns={2}
      chartColumns={3}
      title={
        <>
          生产：PMI三季度回升，
          <span className="text-webank-accent">9月重返扩张区间</span>
        </>
      }
      cards={
        <>
          <BaseCard title="PMI 7月回落，8-9月逐步回升" delay="0ms" variant="accent">
            <p>
              制造业PMI从7月的 <span className="text-green-600 font-bold">49.2%</span> 回升至9月 <span className="text-red-500 font-bold">50.1%</span>，重返荣枯线上；服务业商务活动指数9月 <span className="text-red-500 font-bold">50.2%</span> 同步扩张。
            </p>
            <p className="mt-2">
              PMI 7月回落至 <span className="font-bold">49.2%</span>，主要因素：前期基数较高+传统生产淡季+极端天气（统计局霍丽慧解读），8-9月逐步回升，9月装备制造业PMI <span className="text-red-500 font-bold">51.0%</span>、高技术制造业 <span className="text-red-500 font-bold">52.5%</span>，服务业生产活动积极向好。
            </p>
          </BaseCard>

          <BaseCard title="生产活动回升结构健康，价格抬升信号强烈" delay="120ms">
            <p>
              9月生产指数 <span className="text-red-500 font-bold">51.7%</span>（<span className="text-red-500 font-bold">+1.3pct</span>）、新订单指数 <span className="text-red-500 font-bold">50.5%</span>，景气面扩大。主要原材料购进价格指数 <span className="text-red-500 font-bold">60.8%</span>、出厂价格指数 <span className="text-red-500 font-bold">54.0%</span>，连续两个月大幅回升，表明外部通胀的因素导致成本抬升尚未充分向下游转嫁。
            </p>
          </BaseCard>
        </>
      }
      charts={
<>
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseLineChart
                data={pmiData}
                title="制造业PMI / 服务业商务活动指数"
                subtitle="数据来源：国家统计局 | 单位：%"
                lines={[
                  { dataKey: 'pmi', name: '制造业PMI', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -10 } },
                  { dataKey: 'servicePmi', name: '服务业商务活动指数', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': 12 } },
                ]}
                yAxisDomain={[48, 52]}
                showYAxis={true}
                showReferenceLine={true}
                referenceLineY={50}
                legendOrder={['制造业PMI', '服务业商务活动指数']}
                highlightPeriods={['2026-09']}
                xAxisAngle={0}
              />
          </ChartContainer>

          <ChartContainer delay="660ms" className="min-h-0">
            <BaseLineChart
                  data={pmiData}
                  title="PMI分项：生产与新订单指数"
                  subtitle="数据来源：国家统计局 | 单位：%"
                  lines={[
                    { dataKey: 'production', name: '生产', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -10 } },
                    { dataKey: 'newOrders', name: '新订单', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': 12 } },
                  ]}
                  yAxisDomain={[47, 53]}
                  showYAxis={true}
                  showReferenceLine={true}
                  referenceLineY={50}
                  legendOrder={['生产', '新订单']}
                  highlightPeriods={['2026-09']}
                  xAxisAngle={0}
                />
          </ChartContainer>

          <ChartContainer delay="720ms" className="min-h-0">
            <BaseLineChart
                  data={pmiData}
                  title="PMI分项：原材料购进价格与出厂价格指数"
                  subtitle="数据来源：国家统计局 | 单位：%"
                  lines={[
                    { dataKey: 'rawMaterialPurchasePrice', name: '原材料购进价格', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -10 } },
                    { dataKey: 'outputPrice', name: '出厂价格', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': 12 } },
                  ]}
                  yAxisDomain={[44, 65]}
                  showYAxis={true}
                  showReferenceLine={true}
                  referenceLineY={50}
                  legendOrder={['原材料购进价格', '出厂价格']}
                  highlightPeriods={['2026-09']}
                  xAxisAngle={0}
                />
          </ChartContainer>
        </>
      }
    />
  );
};
