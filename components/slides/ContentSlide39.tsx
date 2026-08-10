import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import {
  consumerSpendingAgeGroups,
  consumerSpendingPlanAgeCategoryGroups,
  consumerSpendingPlanByAgeData,
} from '@/data/consumerSpendingPlan';

const nameByCategory = Object.fromEntries(
  consumerSpendingPlanByAgeData.map((d) => [d.category, d.name])
);

export const ContentSlide39: React.FC = () => {
  return (
    <BaseContentSlide title="社零疲弱难改：增量向体验文娱、情绪陪伴、健康自我投资集中" cardColumns={2}>
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="居民消费趋势" delay="0ms" variant="accent">
            <ul className="list-disc pl-4 space-y-1.5 text-sm">
              <li>
                <span className="font-semibold">青年：</span>
                体验与情绪消费引领：愿为旅游、文娱等「经历」和情绪价值买单。
              </li>
              <li>
                <span className="font-semibold">中年：</span>
                家庭与自我并重：子女教育之外，运动健身、自我提升支出同步抬升。
              </li>
              <li>
                <span className="font-semibold">银发：</span>
                健康与数字双轮驱动：养老服务与数码消费并行，迈向「智慧养老」。
              </li>
            </ul>
          </BaseCard>
          <BaseCard title="政策支持" delay="120ms">
            <ul className="list-disc pl-4 space-y-1.5 text-sm">
              <li>
                <span className="font-semibold">稳楼市：</span>
                4月、7月政治局均强调稳定房地产，延续「止跌回稳」基调，因城施策控增量、去库存、优供给。
              </li>
              <li>
                <span className="font-semibold">需求端：</span>
                Q2深圳、广州、苏州等地大幅上调公积金贷款上限；武汉等地对多孩家庭发放6—12万元购房补贴。
              </li>
              <li>
                <span className="font-semibold">供给端：</span>
                专项债收购存量土地力度加大，商品房待售面积连续下降，一线新房价格环比四个月回升。
              </li>
              <li>
                <span className="font-semibold">扩消费：</span>
                7月国务院批复《扩大消费“十五五”规划》，服务消费为核心，兼顾银发康养。
              </li>
              <li>
                <span className="font-semibold">AI+消费：</span>
                6月八部门印发《关于加快“人工智能+消费”发展的实施意见》。
              </li>
            </ul>
          </BaseCard>
        </div>

        {/* 图表区域：按年龄段分组，组内意愿占比从大到小 */}
        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={consumerSpendingPlanByAgeData}
              title="2026年您打算在哪些方面增加消费？（分年龄段，组内从高到低）"
              subtitle="数据来源：中央广播电视总台研究院《美好生活大调查》 | 单位：占比 %"
              xAxisKey="category"
              bars={[{ dataKey: 'value', name: '占比', color: '#5C9A8A' }]}
              legendItems={consumerSpendingAgeGroups.map((g) => ({
                value: g.label,
                color: g.color,
              }))}
              legendOrder={['18-35岁', '36-59岁', '60岁以上']}
              categoryGroups={consumerSpendingPlanAgeCategoryGroups}
              yAxisDomain={[0, 50]}
              showYAxis={true}
              yAxisWidth={40}
              yAxisTickFormatter={(val) => `${val}`}
              unit="%"
              barSize={10}
              showLabels={false}
              xAxisInterval={0}
              xAxisAngle={-35}
              xAxisHeight={90}
              xAxisTickFormatter={(v) => nameByCategory[String(v)] ?? String(v).split('|')[1] ?? String(v)}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
