import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { RetailCpiForecastChart } from '../charts/RetailCpiForecastChart';

export const ContentSlide15: React.FC = () => {
  return (
    <BaseContentSlide
      title="下半年消费市场预测：社零修复至3%附近，服务与升级品类占优"
      cardColumns={1}
      chartColumns={1}
      cards={
        <BaseCard title="主流机构预测" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
          <div className="space-y-1.5 text-[13px] leading-snug">
            <p>
              H2 在政策密集落地与高基数压力缓和背景下，全年社零累计增速预测中枢约
              <span className="font-bold text-webank-blue">3.0%-3.5%</span>
              （浦银国际
              <span className="font-bold text-webank-blue">3.5%</span>
              ，较年初
              <span className="font-bold text-webank-blue">4.8%</span>
              下调；大公国际商品+服务零售口径约
              <span className="font-bold text-webank-blue">3%</span>
              ）。
            </p>
            <p>
              CPI 全年预计
              <span className="font-bold text-webank-blue">0.9%-1.0%</span>
              （浦银
              <span className="font-bold text-webank-blue">0.9%</span>
              、大公约
              <span className="font-bold text-webank-blue">1.0%</span>
              ），上半年已录得
              <span className="font-bold text-webank-blue">1.0%</span>
              ，下半年继续上行空间有限。
            </p>
            <p>
              1—6月社零仅
              <span className="font-bold text-webank-blue">1.3%</span>
              ，要实现全年
              <span className="font-bold text-webank-blue">3%+</span>
              ，下半年累计增速需明显回升。
            </p>
          </div>
        </BaseCard>
      }
      charts={
        <ChartContainer delay="600ms" className="min-h-0" ariaLabel="主流机构对2026年社零与CPI预测共识区间图">
          <RetailCpiForecastChart />
        </ChartContainer>
      }
    />
  );
};
