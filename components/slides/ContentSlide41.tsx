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

export const ContentSlide41: React.FC = () => {
  return (
    <BaseContentSlide title="在三重约束压制总消费大盘同时，居民消费结构发生切换：压缩大宗耐用品，资源向体验文娱、情绪陪伴、健康养老等软消费倾斜" cardColumns={2}>
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-4 gap-4 mb-4 flex-shrink-0">
          {/* 左侧：青年消费趋势 */}
          <BaseCard title="青年消费趋势" delay="0ms" variant="accent" titleClassName="text-sm">
            <ul className="list-disc pl-4 space-y-1 text-xs">
              <li>体验与情绪消费引领：愿为旅游、文娱等「经历」和情绪价值买单。</li>
              <li>数码消费热度高，数码产品成为体验消费的主要载体。</li>
            </ul>
          </BaseCard>
          {/* 中间：中年消费趋势 */}
          <BaseCard title="中年消费趋势" delay="120ms" titleClassName="text-sm">
            <ul className="list-disc pl-4 space-y-1 text-xs">
              <li>家庭与自我并重：子女教育之外，运动健身、自我提升支出同步抬升。</li>
              <li>旅游文娱消费反弹，电影等娱乐活动需求旺盛。</li>
            </ul>
          </BaseCard>
          {/* 右侧：银发消费趋势 */}
          <BaseCard title="银发消费趋势" delay="240ms" titleClassName="text-sm">
            <ul className="list-disc pl-4 space-y-1 text-xs">
              <li>健康与数字双轮驱动：养老服务与数码消费并行，迈向「智慧养老」。</li>
              <li>保健养生与旅游并重，"健康+体验"二元需求显著。</li>
            </ul>
          </BaseCard>
          {/* 最右侧：政策精要 */}
          <BaseCard title="政策精要" delay="360ms" titleClassName="text-sm">
            <ul className="list-disc pl-3 space-y-1 text-[10px] leading-tight">
              <li><span className="font-medium">收入就业：</span>人社部研究制定《2026年最低工资标准调整国家年度指导意见》；国务院批复《扩大消费"十五五"规划》；八部门印发《关于加快"人工智能+消费"发展的实施意见》。</li>
              <li><span className="font-medium">房价政策·短期：</span>多地上调公积金贷款上限；武汉等地对多孩家庭发放6-12万元购房补贴。</li>
              <li><span className="font-medium">房价政策·中长期：</span>政治局延续"止跌回稳"基调；专项债收购存量土地；一线新房价格环比四个月回升。</li>
            </ul>
          </BaseCard>
        </div>

        {/* 图表区域：按年龄段分组，组内意愿占比从大到小 */}
        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={consumerSpendingPlanByAgeData}
              title="2026年您打算在哪些方面增加消费？（分年龄段，组内从高到低）"
              subtitle="数据来源：中央广播电视总台研究院《美好生活大调查》 | 单位：占比 %｜样本量23,700人"
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
