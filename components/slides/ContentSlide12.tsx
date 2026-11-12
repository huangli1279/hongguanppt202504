import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { seriesColors } from '../../utils/chartColors';

// 左图：社零当月同比 vs 除汽车外社零当月同比（%）
const retailDualData = [
  { period: '2025-02', totalRetail: 4.0, exAutoRetail: 4.8 },
  { period: '2025-03', totalRetail: 5.9, exAutoRetail: 6.0 },
  { period: '2025-04', totalRetail: 5.1, exAutoRetail: 5.6 },
  { period: '2025-05', totalRetail: 6.4, exAutoRetail: 7.0 },
  { period: '2025-06', totalRetail: 4.8, exAutoRetail: 4.8 },
  { period: '2025-07', totalRetail: 3.7, exAutoRetail: 4.3 },
  { period: '2025-08', totalRetail: 3.4, exAutoRetail: 3.7 },
  { period: '2025-09', totalRetail: 3.05, exAutoRetail: 3.2 },
  { period: '2025-10', totalRetail: 2.93, exAutoRetail: 4.0 },
  { period: '2025-11', totalRetail: 1.3, exAutoRetail: 2.5 },
  { period: '2025-12', totalRetail: 0.9, exAutoRetail: 1.7 },
  { period: '2026-02', totalRetail: 2.8, exAutoRetail: 3.7 },
  { period: '2026-03', totalRetail: 1.7, exAutoRetail: 3.2 },
  { period: '2026-04', totalRetail: 0.2, exAutoRetail: 1.8 },
  { period: '2026-05', totalRetail: -0.6, exAutoRetail: 1.1 },
  { period: '2026-06', totalRetail: 1.0, exAutoRetail: 3.0 },
  { period: '2026-07', totalRetail: 0.6, exAutoRetail: 2.52 },
  { period: '2026-08', totalRetail: 0.4, exAutoRetail: 2.5 },
  { period: '2026-09', totalRetail: 1.1, exAutoRetail: 3.9 },
];

// 中图：分地区社零累计同比（%），广州口径为1—8月，故2026-09无值
const cityRetailTrendData = [
  { period: '2025-02', beijing: -0.1, shanghai: -1.0, guangzhou: 1.2, shenzhen: 1.66 },
  { period: '2025-03', beijing: -3.3, shanghai: -1.1, guangzhou: 3.5, shenzhen: 3.05 },
  { period: '2025-04', beijing: -3.7, shanghai: -0.3, guangzhou: 4.0, shenzhen: 3.66 },
  { period: '2025-05', beijing: -3.1, shanghai: 1.4, guangzhou: 5.1, shenzhen: 4.66 },
  { period: '2025-06', beijing: -3.8, shanghai: 1.7, guangzhou: 5.9, shenzhen: 3.47 },
  { period: '2025-07', beijing: -4.2, shanghai: 2.5, guangzhou: 5.4, shenzhen: 3.6 },
  { period: '2025-08', beijing: -5.1, shanghai: 3.7, guangzhou: 4.9, shenzhen: 3.83 },
  { period: '2025-09', beijing: -5.1, shanghai: 4.3, guangzhou: 4.1, shenzhen: 3.63 },
  { period: '2025-10', beijing: -3.2, shanghai: 4.8, guangzhou: 3.8, shenzhen: 4.02 },
  { period: '2025-11', beijing: -3.1, shanghai: 5.0, guangzhou: 4.2, shenzhen: 2.77 },
  { period: '2025-12', beijing: -2.9, shanghai: 4.6, guangzhou: 5.5, shenzhen: 2.34 },
  { period: '2026-02', beijing: -0.3, shanghai: 7.2, guangzhou: 10.7, shenzhen: 2.6 },
  { period: '2026-03', beijing: -0.6, shanghai: 5.5, guangzhou: 6.6, shenzhen: 0.47 },
  { period: '2026-04', beijing: -1.5, shanghai: 3.9, guangzhou: 4.4, shenzhen: -0.58 },
  { period: '2026-05', beijing: -2.5, shanghai: 2.0, guangzhou: 2.4, shenzhen: 0.27 },
  { period: '2026-06', beijing: -2.2, shanghai: 0.7, guangzhou: 2.9, shenzhen: 1.16 },
  { period: '2026-07', beijing: -2.0, shanghai: -0.2, guangzhou: 2.7, shenzhen: 1.09 },
  { period: '2026-08', beijing: -2.1, shanghai: -1.0, guangzhou: 2.7, shenzhen: 1.63 },
  { period: '2026-09', beijing: -0.7, shanghai: -1.1, guangzhou: 2.5, shenzhen: 2.3 },
];

// 右图：国庆期间出游人次与人均消费
const nationalDayData = [
  { period: '2024年', trips: 7.65, perCapita: 916 },
  { period: '2025年', trips: 7.77, perCapita: 911 },
  { period: '2026年', trips: 8.26, perCapita: 894 },
];

export const ContentSlide12: React.FC = () => {
  return (
    <BaseContentSlide
      title="前三季度社零累计同比1.1%，剔除汽车累计增长2.8%，内需企稳但仍偏弱"
      cardColumns={3}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="基数压制社零增长，剔除汽车后消费总量尚可" delay="0ms" variant="accent">
            <p className="text-meta">
              1—9月社零累计37.0万亿元，9月单月4.24万亿元，当月同比<span className="font-bold text-red-500">+1.1%</span>，较7月（0.6%）和8月（0.4%）有所回升。剔除汽车后的社零9月<span className="font-bold text-red-500">+3.9%</span>，为去年11月以来最高。9月受中秋错位（去年中秋在10月）影响，10月社零面临高基数与错位回吐压力。
            </p>
          </BaseCard>

          <BaseCard title="深圳消费亮眼，上海与北京社零偏弱" delay="120ms">
            <p className="text-meta">
              北京前三季度社零<span className="font-bold text-green-600">-0.7%</span>、上海受汽车销量拖累同比<span className="font-bold text-green-600">-1.1%</span>均为负增长；广州增长<span className="font-bold text-red-500">2.5%</span>；深圳受AI快速发展与价格上涨带来的影响，1—9月社零增长<span className="font-bold text-red-500">2.3%</span>，其中通讯器材累计<span className="font-bold text-red-500">+56.8%</span>。
            </p>
            <p className="mt-2">
        
            </p>
          </BaseCard>

          <BaseCard title="旅游数据：国庆潜力释放，三季度入境游亮点" delay="240ms">
            <ul className="space-y-2 text-meta">
              <li className="flex gap-2">
                <span className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-webank-accent" />
                <span>
                  2026年国庆节假期7天，全国国内出游<span className="font-bold text-red-500">8.26亿人次</span>，出游总花费7,383.75亿元，日均同比分别增长<span className="font-bold text-red-500">6.3%</span>、<span className="font-bold text-red-500">4.3%</span>（25年较24年同比人次+1.6%、消费+1.0%）。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-webank-accent" />
                <span>
                  入境游成亮点，三季度免签入境外国人增速<span className="font-bold text-red-500">+48.3%</span>，中信测算1位外国游客在华花费约为16人次国内出游，促消费政策效果初现。文旅部数据显示，2025年入境游总花费1311亿美元，《旅游强国建设“十五五”规划》提到2030年目标为超过1500亿美元，预计入境游潜力将持续释放。
                </span>
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" ariaLabel="社零当月同比与除汽车外社零双线图">
            <BaseLineChart
              data={retailDualData}
              title="社零当月同比与除汽车外社零"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'totalRetail', name: '社零当月同比', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -12 } },
                { dataKey: 'exAutoRetail', name: '除汽车外社零当月同比', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': 12 } },
              ]}
              legendOrder={['社零当月同比', '除汽车外社零当月同比']}
              yAxisDomain={[-1, 8]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>

          <ChartContainer delay="720ms" ariaLabel="分地区社零累计同比折线图">
            <BaseLineChart
              data={cityRetailTrendData}
              title="分地区社零累计同比"
              subtitle="数据来源：各地统计局 | 单位：%（广州为1—8月口径）"
              lines={[
                { dataKey: 'beijing', name: '北京', color: seriesColors[0], strokeWidth: 2, pointOffsets: { '2026-09': -12 } },
                { dataKey: 'shanghai', name: '上海', color: seriesColors[1], strokeWidth: 2, pointOffsets: { '2026-09': 14 } },
                { dataKey: 'guangzhou', name: '广州', color: seriesColors[2], strokeWidth: 2, pointOffsets: { '2026-09': -10 } },
                { dataKey: 'shenzhen', name: '深圳', color: seriesColors[3], strokeWidth: 2, pointOffsets: { '2026-09': 6 } },
              ]}
              yAxisDomain={[-6, 12]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              highlightPeriods={['2026-09']}
              legendOrder={['北京', '上海', '广州', '深圳']}
            />
          </ChartContainer>

          <ChartContainer delay="840ms" ariaLabel="国庆期间出游人次与人均消费图">
            <BaseBarChart
              data={nationalDayData}
              title="国庆期间出游人次与人均消费"
              subtitle="数据来源：文化和旅游部 | 出游人次：亿人 | 人均消费：元"
              xAxisKey="period"
              bars={[{ dataKey: 'trips', name: '出游人次', color: '#64748b' }]}
              lines={[{ dataKey: 'perCapita', name: '人均消费', color: '#f97316', yAxisId: 'right', strokeWidth: 2.5 }]}
              yAxisDomain={[0, 10]}
              showYAxis
              showLineYAxis
              lineAxisDomain={[850, 950]}
              barSize={40}
              showLabels
              labelFormatter={(v: any) => Number(v).toFixed(2)}
              unit="亿人"
              lineUnit="元"
              lineShowDot
              lineLabelFormatter={(v: any) => `${Math.round(v)}`}
              lineLabelPosition="bottom"
              legendOrder={['出游人次', '人均消费']}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
