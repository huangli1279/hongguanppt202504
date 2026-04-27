import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { foreignTradeTrendData, foreignTradeMonthlyUsdData, foreignTradeMonthlyValuesData } from '@/data/foreignTrade';

export const ContentSlide26: React.FC = () => {
  // 折线图配置
  const lineConfigs: LineConfig[] = [
    { dataKey: 'exports', name: '出口当月同比', strokeWidth: 2.5 },
    { dataKey: 'imports', name: '进口当月同比', strokeWidth: 2 },
  ];

  // 柱状图配置 - 已替换为折线图
  const lineConfigsValues: LineConfig[] = [
    { dataKey: 'exports', name: '出口当月值', strokeWidth: 2.5 },
    { dataKey: 'imports', name: '进口当月值', strokeWidth: 2 },
    { dataKey: 'surplus', name: '贸易顺差', strokeWidth: 2 },
  ];

  return (
    <BaseContentSlide
      title={<>一季度外贸展现强劲韧性，关税政策增强“抢出口”</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="进出口超预期强势开局" delay="0ms" variant="accent">
            <ul className="list-disc pl-5 space-y-1">
              <li>出口<span className="text-webank-blue font-semibold">9775亿美元</span>，同比<span className="text-red-500 font-semibold">+14.7%</span></li>
              <li>进口<span className="text-webank-blue font-semibold">7132亿美元</span>，同比<span className="text-red-500 font-semibold">+22.7%</span></li>
            </ul>
          </BaseCard>
          <BaseCard title="贸易顺差同比下降" delay="120ms">
            <p>
              一季度贸易顺差<span className="text-webank-blue font-semibold">2643亿美元</span>，同比<span className="text-green-600 font-semibold">-2.5%</span>；进口增速显著高于出口，反映内需修复与战略性补库带动的进口扩张。
            </p>
          </BaseCard>
          <BaseCard title="“春节错位”致同比波动，政策影响显著" delay="600ms">
            <p>
              春节错位致2月出口基数偏低、3月偏高，当月同比波动剧烈；叠加4月1日起取消光伏、锂电退税，以及特朗普2月底启动“122条款”加征10%进口附加费形成的<span className="font-semibold">“抢出口”</span>支撑，一季度出口持续强劲。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={foreignTradeMonthlyUsdData}
              title="进出口总值(美元计价):当月同比"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={lineConfigs}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['出口当月同比', '进口当月同比']}
              xAxisTickCount={10}
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={foreignTradeMonthlyValuesData}
              title="海关进出口总值及贸易顺差:当月值"
              subtitle="数据来源：海关总署 | 单位：亿美元"
              lines={lineConfigsValues}
              xAxisTickCount={10}
              yAxisDomain={['auto', 'auto']}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['出口当月值', '进口当月值', '贸易顺差']}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
