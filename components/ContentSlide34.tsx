import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseBarChart, BarConfig, BarLineConfig } from './BaseBarChart';
import { governmentFundRevenueData, landSaleRevenueShareData } from '@/data/governmentFund';

export const ContentSlide34: React.FC = () => {
  const lines: LineConfig[] = [
    { dataKey: 'national', name: '全国', strokeWidth: 2.5 },
    { dataKey: 'local', name: '地方', strokeWidth: 2 },
    { dataKey: 'central', name: '中央', strokeWidth: 2 },
  ];

  const bars: BarConfig[] = [
    { dataKey: 'landSaleRevenue', name: '国有土地使用权出让收入'},
  ];

  const landShareLine: BarLineConfig[] = [
    {
      dataKey: 'landShare',
      name: '土地出让占地方政府基金收入占比',
      strokeWidth: 2,
    },
  ];

  return (
    <BaseContentSlide
      title={'政府性基金预算收入：同比下降7%（2024年为-12.2%），降幅收窄'}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="广义收入降幅收窄" delay="200ms" variant="accent">
            <p>
              2025年全年政府性基金收入 <span className="font-bold text-webank-blue">5.77万亿</span>（同比下降 <span className="font-bold text-green-600">7%</span>），中央基金收入 <span className="font-bold text-webank-blue">0.5万亿</span>，地方基金收入 <span className="font-bold text-webank-blue">5.2万亿</span>（同比下降 <span className="font-bold text-green-600">8%</span>），降幅收窄。
            </p>
          </BaseCard>
          <BaseCard title="土地市场下行趋于缓和" delay="400ms">
            <p>
              核心土地出让收入为 <span className="font-bold text-webank-blue">4.15万亿元</span>，同比下降 <span className="font-bold text-green-600">14.7%</span>，降幅有所收敛。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={governmentFundRevenueData}
              title="2017-2025年中央和地方的政府性基金收入"
              subtitle="数据来源：财政部 | 单位：亿元"
              lines={lines}
              yAxisDomain={[0, 100000]}
              showYAxis={true}
              xAxisTickCount={5}
              unit="亿元"
              yAxisTickFormatter={(val) => val.toLocaleString()}
              legendOrder={['全国', '地方', '中央']}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseBarChart
              data={landSaleRevenueShareData}
              title="2017-2025年国有土地使用权出让收入及其占地方财政比重"
              subtitle="数据来源：财政部 | 单位：亿元、%"
              bars={bars}
              lines={landShareLine}
              yAxisDomain={[0, 90000]}
              showYAxis={true}
              yAxisTickFormatter={(val) => val.toLocaleString()}
              showLineYAxis={true}
              lineAxisDomain={[75, 95]}
              lineUnit="%"
              lineYAxisTickFormatter={(val) => `${val}%`}
              legendOrder={['国有土地使用权出让收入', '土地出让占地方政府基金收入占比']}
              barSize={14}
              showLabels={false}
              unit="亿元"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
