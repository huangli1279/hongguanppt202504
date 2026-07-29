import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { chartColors, seriesColors } from '@/utils/chartColors';
import { marginBalanceData, marginBalanceXTicks } from '@/data/marginBalance';
import { noInvestReasonsData } from '@/data/noInvestReasons';

export const ContentSlide38: React.FC = () => {
  return (
    <BaseContentSlide
      title="房产+存款仍为主要资产，财富管理知识匮乏，近期两融与青年开户快速增加"
      cardColumns={2}
      headerClassName="!mb-3"
    >
      <div className="flex flex-col h-full min-h-0 pb-4">
        {/* 上方左右两卡 */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="居民资产与财富知识现状" delay="0ms" variant="accent" className="!p-3 gap-1.5">
            <p className="text-[12px] leading-snug">
              <span className="font-semibold">居民资产：</span>
              高盛测算，26Q1居民财富主要以房地产+现金存款为主，房地产占
              <span className="text-red-500 font-semibold">52%</span>
              ，现金存款约
              <span className="text-red-500 font-semibold">25%</span>
              ，股票、保险各占
              <span className="text-red-500 font-semibold">6%</span>
              ，债券等其他金融资产占
              <span className="text-red-500 font-semibold">8%</span>
              ，但预计2035年房地产降至
              <span className="text-red-500 font-semibold">42%</span>
              ，现金存款维持不变。
            </p>
            <p className="text-[12px] leading-snug">
              <span className="font-semibold">财富知识匮乏：</span>
              根据蚂蚁金融的报告，青年中
              <span className="text-red-500 font-semibold">30%</span>
              不了解投资理财的渠道，中年占
              <span className="text-red-500 font-semibold">25.9%</span>
              ，老年
              <span className="text-red-500 font-semibold">21.8%</span>
              ，各年龄段未投资的首要两个原因均为“没有闲余资金”和“担心投资风险太大”。
            </p>
          </BaseCard>

          <BaseCard title="分龄财富管理" delay="120ms" className="!p-3 gap-1">
            <ul className="list-disc pl-4 space-y-0.5 text-[12px] leading-snug">
              <li>
                <span className="font-semibold">青年端：</span>
                2025年新开户约
                <span className="text-red-500 font-semibold">2744万户</span>
                ，35岁以下占比超
                <span className="text-red-500 font-semibold">45%</span>
                （较2024年升
                <span className="text-red-500 font-semibold">5pct</span>
                ），投资信心更高但财富较少，主要还是货币基金和活期存款为主。
              </li>
              <li>
                <span className="font-semibold">中年端：</span>
                股市加杠杆与家庭去杠杆分化，两融6月末达
                <span className="text-red-500 font-semibold">3.02万亿</span>
                、7月27日回落至
                <span className="text-red-500 font-semibold">2.70万亿</span>
                。
              </li>
              <li>
                <span className="font-semibold">银发端：</span>
                仍是
                <span className="font-semibold">存款 + 理财 + 商业养老险</span>
                三件套，安全优先，金融资产占比高于年轻人。
              </li>
            </ul>
          </BaseCard>
        </div>

        {/* 下方图表 */}
        <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
          <ChartContainer delay="480ms" className="min-h-0">
            <BaseBarChart
              data={noInvestReasonsData}
              title="居民未投资原因（分年龄组）"
              subtitle="数据来源：厦门大学、蚂蚁金融 | 单位：%"
              xAxisKey="category"
              bars={[
                { dataKey: 'youth', name: '青年(≤35岁)', color: seriesColors[1] },
                { dataKey: 'middle', name: '中年(36-59岁)', color: seriesColors[3] },
                { dataKey: 'elderly', name: '老年(≥60岁)', color: chartColors.primary },
              ]}
              yAxisDomain={[0, 60]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}`}
              barSize={12}
              showLabels={true}
              xAxisAngle={-18}
              xAxisHeight={52}
              legendOrder={['青年(≤35岁)', '中年(36-59岁)', '老年(≥60岁)']}
              unit="%"
            />
          </ChartContainer>

          <ChartContainer delay="560ms" className="min-h-0">
            <BaseLineChart
              data={marginBalanceData}
              title="两融余额与沪指月末走势：2026年6月两融首破3万亿"
              subtitle="数据来源：Wind、同花顺、东方财富 | 左轴万亿、右轴点；2026-07为7月27日"
              lines={[
                { dataKey: 'balance', name: '两融余额（月末）', strokeWidth: 2.5, yAxisId: 'left', unit: '万亿' },
                { dataKey: 'shanghai', name: '上证综指（月末）', strokeWidth: 2, yAxisId: 'right', unit: '点' },
              ]}
              yAxisDomain={[0, 3.5]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}`}
              showRightYAxis={true}
              rightYAxisDomain={[2000, 5000]}
              rightYAxisTickFormatter={(val) => `${Math.round(val)}`}
              showReferenceLine={true}
              referenceLineY={3}
              highlightPeriods={['2026-06']}
              xAxisTicks={marginBalanceXTicks}
              unit="万亿"
              legendOrder={['两融余额（月末）', '上证综指（月末）']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
