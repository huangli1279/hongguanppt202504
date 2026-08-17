import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { RetailCpiForecastChart } from '../charts/RetailCpiForecastChart';

export const ContentSlide16: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span className="inline-block bg-blue-100 text-black px-2 py-0.5 rounded font-bold">
            下半年预测：社零修复至1.5-1.8%附近，服务与升级品类占优
          </span>
        </span>
      }
      className="bg-blue-100 [&>section:first-of-type]:!mb-1 [&>section:first-of-type]:sm:!mb-2"
      cardColumns={2}
      chartColumns={1}
      headerChild={
        <div className="absolute -top-1 -right-6 sm:-right-12 z-20">
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 shadow-xl rounded-b-lg px-4 py-2.5 flex items-center justify-center">
            <span className="text-white text-sm font-bold whitespace-nowrap">
              预测与展望
            </span>
          </div>
        </div>
      }
      cards={
        <>
          <BaseCard title="全年社零与CPI预测" delay="0ms" variant="accent" className="!gap-1.5 !p-3 !bg-blue-100">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                H2 在政策密集落地与高基数压力缓和背景下，全年社零累计增速预测中枢约
                <span className="font-bold text-[#b91c1c]">1.5%-1.8%</span>
                （中金5月预测社零
                <span>2.8%</span>
                ；Wind 8月一致预测约
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

          <BaseCard title="下半年发力关键" delay="120ms" className="!gap-1.5 !p-3 !bg-blue-100">
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
        <ChartContainer delay="600ms" ariaLabel="主流机构对2026年社零与CPI预测共识区间图" className="!bg-blue-100">
          <RetailCpiForecastChart />
        </ChartContainer>
      }
    />
  );
};
