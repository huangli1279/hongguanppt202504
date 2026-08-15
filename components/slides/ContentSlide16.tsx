import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { RetailCpiForecastChart } from '../charts/RetailCpiForecastChart';

export const ContentSlide16: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-200 to-amber-300 rounded-full text-amber-700 font-semibold shadow-sm">
            <svg className="w-3 h-3 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            下半年预测
          </span>
          <span className="text-black">社零修复至3%附近，服务与升级品类占优</span>
        </span>
      }
      className="[&_[class*='animate-top-line']]:!bg-gradient-to-r [&_[class*='animate-top-line']]:!from-yellow-200 [&_[class*='animate-top-line']]:!to-amber-400"
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="全年社零与CPI预测" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                H2 在政策密集落地与高基数压力缓和背景下，全年社零累计增速预测中枢约
                <span className="font-bold">3.0%-3.5%</span>
                （浦银国际
                <span className="font-bold">3.5%</span>
                ，较年初
                <span className="font-bold">4.8%</span>
                下调；大公国际商品+服务零售口径约
                <span className="font-bold">3%</span>）
              </li>
              <li>
                CPI 全年预计
                <span className="font-bold">0.9%-1.0%</span>
                ，上半年已录得
                <span className="font-bold">1.0%</span>
                ，下半年继续上行空间有限
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="下半年发力关键" delay="120ms" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                1—6月社零仅
                <span className="font-bold">1.3%</span>
                ，要实现全年
                <span className="font-bold">3%</span>
                ，下半年累计增速需明显回升
              </li>
              <li>
                服务消费与升级品类占优，政策支持推动需求释放
              </li>
              <li>
                高基数压力缓和为下半年增长提供更好起点
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms" className="min-h-0" ariaLabel="主流机构对2026年社零与CPI预测共识区间图">
          <RetailCpiForecastChart />
        </ChartContainer>
      }
    />
  );
};
