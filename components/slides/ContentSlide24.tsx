import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { ExportFocusChart } from '../charts/ExportFocusChart';

export const ContentSlide24: React.FC = () => {
  return (
    <BaseContentSlide
      title="出口结构：AI链贡献13个百分点的拉动"
      cardColumns={3}
      chartColumns={1}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="核心结论" delay="0ms" variant="accent">
            <p className="text-sm">
              9月AI链（集成电路+计算机零部件）出口同比
              <span className="text-red-500 font-semibold">+115%</span>，对整体出口增速的拉动约
              <span className="text-red-500 font-semibold">13</span>个百分点；但出口较8月加快的11.3pct中，非AI品类贡献了八成以上。
            </p>
          </BaseCard>

          <BaseCard title="1. 高技术出口量价齐升" delay="120ms">
            <p className="text-sm leading-snug">
              集成电路9月出口金额<span className="text-red-500 font-semibold">+136.8%</span>、数量仅
              <span className="text-red-500 font-semibold">+2.6%</span>，价格环比8月下降
              <span className="text-green-600 font-semibold">1.86%</span>，需关注价格是否见顶；汽车金额
              <span className="text-red-500 font-semibold">+61.9%</span>、数量
              <span className="text-red-500 font-semibold">+56.3%</span>；工业机器人金额
              <span className="text-red-500 font-semibold">+56.4%</span>、数量
              <span className="text-red-500 font-semibold">+64.1%</span>。
            </p>
          </BaseCard>

          <BaseCard title='2. 消费品与"抢出口"' delay="240ms">
            <p className="text-sm leading-snug">
              玩具<span className="text-red-500 font-semibold">+40.8%</span>、家电
              <span className="text-red-500 font-semibold">+31.7%</span>、服装
              <span className="text-red-500 font-semibold">+24.1%</span>明显回升，对应美国进口回升周期与欧盟限制混动车出口引发的12月前"抢出口"（对欧增速回升
              <span className="text-red-500 font-semibold">18.6</span>pct）。
            </p>
          </BaseCard>
        </div>

        <ChartContainer delay="360ms" className="flex-1 min-h-0">
          <ExportFocusChart />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
