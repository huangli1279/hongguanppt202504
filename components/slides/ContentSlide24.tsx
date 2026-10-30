import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

export const ContentSlide24: React.FC = () => {
  return (
    <BaseContentSlide
      title="出口结构：AI链贡献13个百分点的拉动"
      cardColumns={2}
    >
      <div className="flex flex-col h-full gap-4">
        {/* 核心结论 */}
        <BaseCard title="核心结论" delay="0ms" variant="accent">
          <p className="text-sm">
            9月AI链（集成电路+计算机）出口同比<span className="text-red-500 font-semibold">+115%</span>，对整体出口增速的拉动约<span className="text-red-500 font-semibold">13</span>个百分点（华泰）；但出口较8月加快的11.3pct中，非AI品类贡献了八成以上。
          </p>
        </BaseCard>

        {/* 两条主线 */}
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          <BaseCard title="1. 高技术出口量价齐升" delay="120ms">
            <p className="text-sm leading-snug">
              三季度ai相关产业出口依旧强劲，集成电路9月出口金额<span className="text-red-500 font-semibold">+136%</span>，数量同比<span className="text-red-500 font-semibold">+2.6%</span>，但价格环比8月下降<span className="text-green-600 font-semibold">1.86%</span>，需要持续关注价格是否见顶；汽车出口金额<span className="text-red-500 font-semibold">+61.9%</span>，数量<span className="text-red-500 font-semibold">+56.3%</span>；工业机器人9月出口金额<span className="text-red-500 font-semibold">+56.4%</span>，出口数量<span className="text-red-500 font-semibold">+64.1%</span>。
            </p>
          </BaseCard>

          <BaseCard title='2. 消费品与"抢出口"' delay="240ms">
            <p className="text-sm leading-snug">
              玩具、家电、汽车、服装明显回升，对应美国进口回升周期+欧盟要求限制混动车出口引发的12月前"抢出口"（对欧增速回升<span className="text-red-500 font-semibold">18.6</span>pct）；
            </p>
          </BaseCard>
        </div>
      </div>
    </BaseContentSlide>
  );
};
