import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

export const ContentSlide25: React.FC = () => {
  return (
    <BaseContentSlide
      title="进口结构：进口持续向高新技术迁移，粮食等传统产品量价齐降"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="9月进口：价格驱动的高增" delay="0ms" variant="accent">
            <p>
              9月进口<span className="text-red-500 font-semibold">+31.0%</span>，但进口量仅<span className="text-red-500 font-semibold">+1.0%</span>——高增几乎全部来自价格；AI链（集成电路+自动数据处理设备）贡献<span className="text-red-500 font-semibold">21.7</span>个百分点，解释了进口增长的七成，"AI强、内需弱"的进口结构未变。
            </p>
          </BaseCard>
          <BaseCard title="高新技术：AI链拉动" delay="120ms">
            <p>
              自动数据处理设备及零部件进口金额<span className="text-red-500 font-semibold">+296.5%</span>、集成电路<span className="text-red-500 font-semibold">+74.7%</span>，但剔除价格后集成电路进口数量仅<span className="text-red-500 font-semibold">+1.7%</span>；AI链对进口增速的贡献由8月的<span className="text-red-500 font-semibold">19.7pct</span>升至<span className="text-red-500 font-semibold">21.7pct</span>，解释了总体进口增长的约七成；非货币黄金进口<span className="text-red-500 font-semibold">+77.5%</span>再贡献<span className="text-red-500 font-semibold">3.8pct</span>（上半年拉动<span className="text-red-500 font-semibold">7pct</span>、本季退坡）。
            </p>
          </BaseCard>
          <BaseCard title="传统需求：量价齐降，仍在低位" delay="240ms">
            <p>
              传统需求偏弱：原油进口量<span className="text-green-600 font-semibold">-21.5%</span>，但价格<span className="text-red-500 font-semibold">+31.5%</span>，推升金额<span className="text-red-500 font-semibold">+3.3%</span>；煤炭、天然气进口金额<span className="text-red-500 font-semibold">+45.3%</span>/<span className="text-red-500 font-semibold">+34.0%</span>但数量分别<span className="text-green-600 font-semibold">-5.7%</span>/<span className="text-green-600 font-semibold">-1.7%</span>；铜矿进口数量<span className="text-green-600 font-semibold">-4.2%</span>，但价格增长<span className="text-red-500 font-semibold">32.6%</span>；液晶平板显示模组进口金额/数量分别<span className="text-green-600 font-semibold">-25.3%</span>/<span className="text-green-600 font-semibold">-24.0%</span>，汽车及零部件<span className="text-green-600 font-semibold">-38.1%</span>/<span className="text-green-600 font-semibold">-47.2%</span>，传统终端制造需求仍在低位。
            </p>
          </BaseCard>
        </div>
      </div>
    </BaseContentSlide>
  );
};
