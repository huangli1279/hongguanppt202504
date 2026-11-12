import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { pmiTrendData } from '../../data';
import { seriesColors } from '../../utils/chartColors';

export const ContentSlide08: React.FC = () => {
  const pmiData = pmiTrendData.filter((d) => d.period >= '2025-01');
  const pmiData2026 = pmiTrendData.filter((d) => d.period >= '2026-01');
  return (
    <BaseContentSlide
      title={
        <>
          制造业与服务业景气三季度同步回升，
          <span className="text-webank-accent">9月重返扩张区间</span>
        </>
      }
      headerClassName="!mb-3"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="生产活动受季节性因素扰动" delay="0ms" variant="accent">
            <p>
              制造业PMI从7月的 <span className="text-green-600 font-bold">49.2%</span> 回升至9月 <span className="text-red-500 font-bold">50.1%</span>，重返荣枯线上；服务业商务活动指数9月 <span className="text-red-500 font-bold">50.2%</span> 同步扩张，服务业生产活动积极向好。7月回落受传统生产淡季及极端天气（洪涝、台风等）影响，8-9月逐步回升，9月装备制造业PMI升至51.0%、高技术制造业 52.5%。
            </p>
            <p className="mt-2">
              10月制造业PMI回落至 <span className="text-green-600 font-bold">49.3%</span>，重回收缩区间，生产指数、新订单指数分别降至49.8%和49.4%；主要受国庆假期、工作日减少及生产安排调整等季节性因素影响，后续仍需观察需求与生产修复情况。
            </p>
          </BaseCard>

          <BaseCard title="生产活动回升结构健康，价格抬升信号强烈" delay="120ms">
            <p>
              9月生产指数 51.7%（+1.3pct）、新订单指数 50.5%，景气面扩大。主要原材料购进价格指数 <span className="text-red-500 font-bold">60.8%</span>、出厂价格指数 <span className="text-red-500 font-bold">54.0%</span>，连续两个月大幅回升，表明外部通胀的因素导致成本抬升尚未充分向下游转嫁。
            </p>
            <p className="mt-2">
              10月生产、新订单指数分别回落至49.8%和49.4%，价格指数虽有所收窄（原材料购进价格 <span className="text-red-500 font-bold">56.8%</span>、出厂价格 <span className="text-red-500 font-bold">51.7%</span>）但仍处高位。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域：4 列横向排列，左侧跨两列占 1/2，右侧两张各占 1/4 */}
        <div className="flex-1 grid grid-cols-4 gap-3 min-h-0">
          {/* 左侧 1/2：制造业PMI / 服务业商务活动指数 */}
          <ChartContainer delay="600ms" className="col-span-2 min-h-0">
            <BaseLineChart
              data={pmiData}
              title="制造业PMI / 服务业商务活动指数"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'pmi', name: '制造业PMI', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -16 }, hiddenLabelPeriods: ['2026-10'] },
                { dataKey: 'servicePmi', name: '服务业商务活动指数', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': 28 }, hiddenLabelPeriods: ['2026-10'] },
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

          {/* 右侧一：PMI分项：生产与新订单指数（占 1/4，横向紧邻左图） */}
          <ChartContainer delay="660ms" className="min-h-0">
            <BaseLineChart
              data={pmiData2026}
              title="PMI分项：生产与新订单指数"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'production', name: '生产', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -12 }, hiddenLabelPeriods: ['2026-10'] },
                { dataKey: 'newOrders', name: '新订单', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': 16 }, hiddenLabelPeriods: ['2026-10'] },
              ]}
              yAxisDomain={[47, 53]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['生产', '新订单']}
              highlightPeriods={['2026-09']}
              xAxisAngle={0}
              xAxisTicks={['2026-03', '2026-06', '2026-09']}
              compact={true}
            />
          </ChartContainer>

          {/* 右侧二：PMI分项：原材料购进价格与出厂价格指数（占 1/4，横向紧邻左图） */}
          <ChartContainer delay="720ms" className="min-h-0">
            <BaseLineChart
              data={pmiData2026}
              title="PMI分项：原材料购进价格与出厂价格指数"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'rawMaterialPurchasePrice', name: '原材料购进价格', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -12 }, hiddenLabelPeriods: ['2026-10'] },
                { dataKey: 'outputPrice', name: '出厂价格', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': 16 }, hiddenLabelPeriods: ['2026-10'] },
              ]}
              yAxisDomain={[44, 65]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['原材料购进价格', '出厂价格']}
              highlightPeriods={['2026-09']}
              xAxisAngle={0}
              xAxisTicks={['2026-03', '2026-06', '2026-09']}
              compact={true}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
