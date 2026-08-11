import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseStackedBarChart } from '../base/BaseStackedBarChart';
import { BaseLineChart } from '../base/BaseLineChart';
import { chartColors, seriesColors } from '@/utils/chartColors';
import {
  housingConsumptionData,
  newHousePriceYoyData,
  newHousePriceYoyXTicks,
} from '@/data/housingConsumption';

export const ContentSlide37: React.FC = () => {
  return (
    <BaseContentSlide title="房价下行背景下，居民消费受抑制" cardColumns={3}>
      <div className="flex flex-col h-full">
        {/* 卡片区域：问题—实证—稳房价政策含义 */}
        <div className="grid grid-cols-3 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="房价持续同比下跌，财富效应承压" delay="0ms" variant="accent">
            <p>
              高盛测算，26年Q1居民财富中房地产占
              <span className="text-red-500 font-semibold">52%</span>
              。社科院26Q2报告指出，居民部门主动去杠杆，住房贷款连续
              <span className="text-red-500 font-semibold">13</span>
              个季度负增长，房价下行与收入预期偏弱叠加，房地产深度调整仍是内需修复的核心制约。70城新建商品住房价格2024年10月跌幅一度扩大至
              <span className="text-red-500 font-semibold">-6.2%</span>
              ，2026年上半年仍在
              <span className="text-red-500 font-semibold">-3.5%</span>
              左右徘徊。
            </p>
          </BaseCard>
          <BaseCard title="房价跌幅越大，居民消费越低" delay="120ms">
            <p>
              厦大×蚂蚁集团2025Q4—2026Q1连续两期调查显示，房价跌幅超
              <span className="text-red-500 font-semibold">15%</span>
              时，一套房家庭月均消费较房价上涨时少
              <span className="text-red-500 font-semibold">11.9%</span>
              ，多套房家庭少
              <span className="text-red-500 font-semibold">25.9%</span>
              ；文娱与外出餐饮最先收缩。2025Q4报告判断"房价稳定有助于激发消费动力"，2026Q1约
              <span className="text-red-500 font-semibold">23%</span>
              家庭计划缩减消费。
            </p>
          </BaseCard>
          <BaseCard title="稳房价是修复消费预期的关键抓手" delay="240ms">
            <p>
              2026年6月《求是》发文提出，加快修复居民资产负债表，着力稳定房地产市场，防止资产价格下跌对消费信心的负向螺旋。中国社会科学院金融研究所2026Q2宏观金融季报中建议因城施策、推动核心城市房价率先企稳。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域：左房价走势，右消费结构 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-4">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={newHousePriceYoyData}
              title="70城新建商品住房价格同比走势"
              subtitle="数据来源：国家统计局｜单位：%"
              lines={[
                {
                  dataKey: 'newHousePrice',
                  name: '新建商品住房价格同比',
                  color: chartColors.primary,
                  strokeWidth: 2.5,
                },
              ]}
              yAxisDomain={[-7, 1]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              xAxisTicks={newHousePriceYoyXTicks}
              highlightPeriods={['2024-10', '2025-10', '2026-06']}
              legendOrder={['新建商品住房价格同比']}
              unit="%"
            />
          </ChartContainer>

          <ChartContainer delay="720ms">
            <BaseStackedBarChart
              data={housingConsumptionData}
              title="房价波动与家庭月均消费（按住房套数分组）"
              subtitle="数据来源：厦大×蚂蚁集团研究院｜单位：元（消费加权平均）"
              bars={[
                { dataKey: 'housingTransport', name: '住房与交通支出', color: seriesColors[1] },
                { dataKey: 'foodLiving', name: '居家食品与生活支出', color: seriesColors[3] },
                { dataKey: 'entertainment', name: '文娱与外出餐饮支出', color: seriesColors[5] },
                { dataKey: 'educationMedical', name: '教育与医疗支出', color: seriesColors[0] },
                { dataKey: 'durables', name: '耐用品支出', color: seriesColors[4] },
              ]}
              xAxisKey="category"
              legendOrder={[
                '住房与交通支出',
                '居家食品与生活支出',
                '文娱与外出餐饮支出',
                '教育与医疗支出',
                '耐用品支出',
              ]}
              yAxisDomain={[0, 7500]}
              showYAxis
              barSize={36}
              showLabels
              showTotalLabel
              totalLabelFormatter={(_total, item) => `${item.total}`}
              unit="元"
              xAxisInterval={1}
              xAxisAngle={-20}
              xAxisHeight={50}
              categoryGroups={[
                { label: '一套房', x1: '一套房 <-15%', x2: '一套房 >=0' },
                { label: '大于一套房', x1: '大于一套房 <-15%', x2: '大于一套房 >=0' },
              ]}
              verticalSplitAfter="一套房 >=0"
              gapAnnotations={[
                {
                  fromCategory: '一套房 <-15%',
                  toCategory: '一套房 >=0',
                  label: '↓11.9%',
                  color: '#64748b',
                },
                {
                  fromCategory: '大于一套房 <-15%',
                  toCategory: '大于一套房 >=0',
                  label: '↓25.9%',
                  color: '#64748b',
                },
              ]}
            />
          </ChartContainer>
        </div>

        <p className="mt-1 flex-shrink-0 text-[10px] leading-snug text-slate-500">
          注：厦大×蚂蚁集团《中国家庭财富与消费报告》2025Q4—2026Q1；社科院金融所《中国宏观金融分析》2026Q2；《求是》2026.6.18
        </p>
      </div>
    </BaseContentSlide>
  );
};
