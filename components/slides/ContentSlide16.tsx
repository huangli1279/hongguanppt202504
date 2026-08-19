import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { RetailCpiForecastChart } from '../charts/RetailCpiForecastChart';

export const ContentSlide16: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-bold shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            预测与展望
          </span>
          <span className="text-gray-900 font-semibold">
            全年社零预计修复至1.5-1.8%，服务与升级品类为发力关键
          </span>
        </span>
      }
      className="[&>section:first-of-type]:!mb-1 [&>section:first-of-type]:sm:!mb-2"
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="全年社零与CPI预测" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                H2 在政策密集落地与高基数压力缓和背景下，全年社零累计增速预测中枢约
                <span className="font-bold text-[#b91c1c]">1.5%-1.8%</span>
                （中金5月预测社零
                <span>2.8%</span>
                ；Wind8月预测约
                <span>1.8%</span>，高盛8月预测全年增速1.5%）
              </li>
              <li>
                CPI 全年预计
                <span>0.9%-1.0%</span>
                ，上半年已录得
                <span>1.0%</span>
                ，下半年继续上行空间有限
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="下半年发力关键" delay="120ms" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
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
        <ChartContainer delay="600ms" ariaLabel="主流机构对2026年社零与CPI预测共识区间图">
          <RetailCpiForecastChart />
        </ChartContainer>
      }
    />
  );
};
