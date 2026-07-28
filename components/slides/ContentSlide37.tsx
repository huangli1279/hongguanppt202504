import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { consumerSpendingPlanData } from '@/data/consumerSpendingPlan';

export const ContentSlide37: React.FC = () => {
  return (
    <BaseContentSlide title="居民消费趋势的变化" cardColumns={2}>
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="居民消费趋势" delay="0ms" variant="accent">
            <p className="text-sm">
              根据中央广播电视总台研究院《美好生活大调查：中国居民消费特点和趋势报告》：青年是体验与情绪经济的引领者，
              <span className="text-red-500 font-semibold">37.51%</span>
              的18-35岁青年计划增加旅游消费，
              <span className="text-red-500 font-semibold">45.89%</span>
              将情绪价值作为增收主要原因。中年消费以家庭为锚、日益关注自我，
              <span className="text-red-500 font-semibold">29.96%</span>
              的36-45岁群体计划增加教育支出，呈现“子女教育+自我投资”双向提升。银发群体呈“二元”特征——健康与体验、保障与发展、现实与数字深度融合，
              <span className="text-red-500 font-semibold">24.88%</span>
              计划增加养老服务、
              <span className="text-red-500 font-semibold">24.70%</span>
              计划增加数码消费，银发族正接入AI，迈向“智慧养老”。
            </p>
          </BaseCard>
          <BaseCard title="未来增长点" delay="120ms">
            <p className="mb-2 text-sm">
              <span className="font-semibold">1. 体验与文娱（轻旅游/线下演出/数码）：</span>
              消费重心从“买商品”转向“买经历”，省内游、Citywalk、演唱会及数码升级成主流。
            </p>
            <p className="mb-2 text-sm">
              <span className="font-semibold">2. 情绪与陪伴（悦己消费/宠物经济）：</span>
              情绪价值成全年龄段刚需，人们更愿为缓解压力、情感寄托（养宠、看电影等）买单。
            </p>
            <p className="text-sm">
              <span className="font-semibold">3. 健康与自我投资（养生健身/银发旅游/教育）：</span>
              中年侧重“运动健身+自我提升”，银发族则“保健养生+享乐旅游”并驾齐驱。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={consumerSpendingPlanData}
              title="2026年您打算在哪些方面增加消费？"
              subtitle="数据来源：中央广播电视总台研究院《美好生活大调查》 | 单位：占比 %"
              xAxisKey="category"
              bars={[
                { dataKey: 'all', name: '全部', color: '#3E96CF' },
                { dataKey: 'age18_35', name: '18-35岁', color: '#5C9A8A' },
                { dataKey: 'age36_59', name: '36-59岁', color: '#E0925B' },
                { dataKey: 'age60plus', name: '60岁以上', color: '#9BC7DA' },
              ]}
              legendOrder={['全部', '18-35岁', '36-59岁', '60岁以上']}
              yAxisDomain={[0, 40]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}`}
              unit="%"
              barSize={7}
              showLabels={false}
              xAxisInterval={0}
              xAxisAngle={-25}
              xAxisHeight={70}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
