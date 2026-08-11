import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { foreignTradeCumulativeYoyData } from '@/data/foreignTrade';

export const ContentSlide21: React.FC = () => {
  const tradeLineConfigs: LineConfig[] = [
    { dataKey: 'exports', name: '出口累计同比', strokeWidth: 2.5 },
    { dataKey: 'imports', name: '进口累计同比', strokeWidth: 2 },
  ];

  const surplusLineConfigs: LineConfig[] = [
    { dataKey: 'surplus', name: '进出口差额累计同比', strokeWidth: 2.5 },
  ];

  return (
    <BaseContentSlide
      title="上半年出口同比增长17.6%，贸易顺差增速转负"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="总量持续超预期" delay="0ms" variant="accent">
            <ul className="list-disc pl-4 space-y-1.5 text-sm">
              <li>
                6月出口总额同比增长<span className="text-red-500 font-semibold">27%</span>（前值19.4%），在全球经贸增长艰难和局势动荡的背景下，中国外贸展现出强大韧性。
              </li>
              <li>
                受能源冲突及AI集体涨价影响，6月进口总额同比高增<span className="text-red-500 font-semibold">36%</span>，二季度均保持超20%的增长。
              </li>
            </ul>
          </BaseCard>
          <BaseCard title="贸易顺差转负" delay="120ms">
            <p>
              上半年，贸易顺差为<span className="text-black font-semibold">5759亿美元</span>，受进口增长速度快于出口影响，同比<span className="text-green-600 font-semibold">-1.25%</span>。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={foreignTradeCumulativeYoyData}
              title="进出口：累计同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={tradeLineConfigs}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['出口累计同比', '进口累计同比']}
              xAxisTickCount={10}
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseLineChart
              data={foreignTradeCumulativeYoyData}
              title="贸易顺差：累计同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={surplusLineConfigs}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['进出口差额累计同比']}
              xAxisTickCount={10}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
