import React from 'react';
import { GdpTrendChart } from './GdpTrendChart';
import { DeflatorChart } from './DeflatorChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { gdpTrendData, deflatorData } from '../data';
import { TrendingDown, BarChart3, Scale } from 'lucide-react';

export const ContentSlide04: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          2025年GDP实现5.0%增长收官"十四五"，
          <span className="text-webank-accent">四季度增速回落至4.5%</span>
        </>
      }
      cards={
        <>
          <BaseCard title="总量定调" icon={BarChart3} delay="100ms">
            <p>
              全年GDP达 <span className="font-bold">140.2万亿元</span>，同比增长 <span className="font-bold">5.0%</span>，成功实现全年预期目标。
            </p>
          </BaseCard>

          <BaseCard title="季度走势'前高后低'" icon={TrendingDown} delay="200ms">
            <p>
              受基数及内需影响逐季回落：<br/>Q1 5.4% <span className="text-slate-400">→</span> Q4 4.5%。<br/>
              四季度环比增长 <span className="font-bold">1.2%</span>，动能仍具韧性。
            </p>
          </BaseCard>

          <BaseCard title="价格体系分化" icon={Scale} delay="300ms">
            <p>
              <span className="text-red-600 font-semibold">Q4GDP平减指数-0.7%</span>，较Q3(-1.1%)收窄但仍连续11季为负。<span className="font-bold">产业分化显著：</span>二产-2.02%（核心拖累），三产+0.43%（率先转正）。Q4鲜菜等食品价格回升（CPI食品分项同比+1.1%）带动第一产业平减指数相较上一季度有较大提升。依赖"反内卷"限产政策及财政发力，PPI持续修复，拉动第二产业平减指数回升。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <GdpTrendChart data={gdpTrendData} />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <DeflatorChart data={deflatorData} />
          </ChartContainer>
        </>
      }
    />
  );
};
