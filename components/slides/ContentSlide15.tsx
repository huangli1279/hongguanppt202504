import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { cpiTrendData } from '@/data/cpi';

const cpiLines: LineConfig[] = [
  { dataKey: 'cpi', name: 'CPI:当月同比', strokeWidth: 2.5 },
  { dataKey: 'coreCpi', name: '剔除食品能源CPI:当月同比', strokeWidth: 2 },
];

export const ContentSlide15: React.FC = () => {
  return (
    <BaseContentSlide
      title="核心CPI回落印证内生动能不足"
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="物价温差显著" delay="0ms" variant="accent">
            <p>
              上半年CPI同比上涨<span className="font-bold text-webank-blue">1.0%</span>，剔除食品能源的核心CPI上涨<span className="font-bold text-webank-blue">1.2%</span>，仍处于温和通胀区间，印证内生增长动能及居民购买力仍待修复。
            </p>
          </BaseCard>
          <BaseCard title="节日对消费促进微弱" delay="120ms">
            <div className="space-y-2">
              <p>
                五一假期出行人次<span className="font-bold text-webank-blue">3.25亿</span>，增长<span className="font-bold text-webank-blue">3.6%</span>，出行总花费<span className="font-bold text-webank-blue">1855亿元</span>，同比增长<span className="font-bold text-webank-blue">2.9%</span>。
              </p>
              <p>
                618综合电商销售额<span className="font-bold text-webank-blue">8636亿元</span>，同比增长<span className="font-bold text-webank-blue">0.9%</span>，花旗集团调查称<span className="font-bold text-webank-blue">72.7%</span>的消费者今年618的消费心态比往年更理性或谨慎。
              </p>
            </div>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms" className="min-h-0">
          <BaseLineChart
            data={cpiTrendData}
            title="CPI当月同比、剔除食品能源CPI当月同比"
            subtitle="数据来源：国家统计局 | 单位：%"
            lines={cpiLines}
            yAxisDomain={[-1, 2]}
            showYAxis={true}
            showReferenceLine={true}
            referenceLineY={0}
            legendOrder={['CPI:当月同比', '剔除食品能源CPI:当月同比']}
            xAxisTickCount={7}
          />
        </ChartContainer>
      }
    />
  );
};
