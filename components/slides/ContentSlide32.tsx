import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import {
  socialFinancingGrowthData,
  socialFinancingSectorData,
} from '@/data/socialFinancing';

const growthLineConfigs: LineConfig[] = [
  { dataKey: 'growth', name: '社融存量同比', strokeWidth: 2.5 },
];

// 三大部门融资增量（堆叠）：突出政府部门（政府债）
const sectorBars: BarConfig[] = [
  { dataKey: 'household', name: '居民部门', color: '#94a3b8', stackId: 'sf' },
  { dataKey: 'corporate', name: '企业部门', color: '#4A79AA', stackId: 'sf' },
  { dataKey: 'government', name: '政府部门', color: '#DC2626', stackId: 'sf' },
];

export const ContentSlide32: React.FC = () => {
  return (
    <BaseContentSlide
      title="社融：社融7.1%、贷款靠政府与政策工具撑，居民端连续三个季度缩"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="mb-4 flex-shrink-0 grid grid-cols-2 gap-6">
          <BaseCard delay="0ms" variant="accent" title="增速回落">
            <p>
              Q3新增社融
              <span className="text-red-500 font-semibold">6.11万亿元</span>
              （同比少增
              <span className="text-green-600 font-semibold">7300亿元</span>
              ），社融增速回落至
              <span className="text-red-500 font-semibold">7.1%</span>
              。
            </p>
            <p className="mt-2">
              结构上，社融对
              <span className="text-red-500 font-semibold">政府债与政策工具</span>
              的依赖上升，居民端融资已
              <span className="text-green-600 font-semibold">连续三个季度收缩</span>
              。
            </p>
          </BaseCard>
          <BaseCard delay="200ms" variant="accent" title="结构：贷款靠政府与政策工具撑">
            <p>
              社融结构方面，人民币贷款增加
              <span className="text-red-500 font-semibold">7390亿</span>
              ，同比少增
              <span className="text-green-600 font-semibold">1.06万亿</span>
              ，政府债融资同比多增
              <span className="text-red-500 font-semibold">588亿</span>
              。其中9月人民币贷款、政府债净融明显放量，政府债融资多增
              <span className="text-red-500 font-semibold">3469亿</span>
              ，或反映财政端融资节奏正在加快。7月政治局会议提出“充分发挥各项存量政策效能”、加快债券资金使用进度的要求，或是推动9月政府债净融资放量的因素之一。若全年政府债按计划完成发行，四季度政府债净融资或同比多增约
              <span className="text-red-500 font-semibold">1.2万亿元</span>
              ，有望成为支撑经济的重要力量。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms" ariaLabel="社融存量同比增速走势">
            <BaseLineChart
              data={socialFinancingGrowthData}
              title="社融存量同比增速走势图"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={growthLineConfigs}
              yAxisDomain={[6, 10]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['社融存量同比']}
              highlightPeriods={['2026-09']}
              unit="%"
            />
          </ChartContainer>
          <ChartContainer delay="700ms" ariaLabel="新增社融结构堆叠柱状图，三大部门融资增量对比">
            <BaseBarChart
              data={socialFinancingSectorData}
              title="新增社融结构：居民/企业/政府三大部门融资增量"
              subtitle="数据来源：中国人民银行 | 单位：万亿元 | 政府部门（含政府债）占比持续抬升"
              bars={sectorBars}
              xAxisKey="quarter"
              yAxisDomain={[-2, 16]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}`}
              showReferenceLine={true}
              referenceLineY={0}
              unit="万亿元"
              barSize={26}
              xAxisInterval={0}
              showLabels={true}
              labelFormatter={(v) => String(v)}
              labelFilter={(p) => !(p.dataKey === 'household' && Number(p.value) < 0)}
              legendOrder={['居民部门', '企业部门', '政府部门']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
