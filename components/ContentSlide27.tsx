import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { foreignTradeTrendData, foreignTradeMonthlyUsdData, foreignTradeMonthlyValuesData } from '@/data/foreignTrade';

export const ContentSlide27: React.FC = () => {
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
      title={<>出口“抢跑”支撑年末翘尾，全年顺差近1.2万亿美元创历史新高</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="出口端：韧性与“抢跑”并存" delay="200ms" variant="accent">
            <p>
              2025年全年出口总值达<span className="text-webank-blue font-semibold">3.77万亿美元</span>，同比增加<span className="text-green-600 font-semibold">5.5%</span>。受去年同期高基数（台风后补偿性出货）影响，10月出口同比下降<span className="text-red-500 font-semibold">1.1%</span>，为年内首次转负。12月出口同比回升至<span className="text-green-600 font-semibold">6.6%</span>，主要源于2026年关税及退税政策调整前的<span className="font-semibold">“抢出口”效应</span>。
            </p>
          </BaseCard>
          <BaseCard title="进口端：内需结构性修复" delay="400ms">
            <p>
              2025年全年进口总值<span className="text-webank-blue font-semibold">2.58万亿美元</span>，与去年<span className="text-slate-500 font-semibold">持平</span>。12月同比大幅回升至<span className="text-green-600 font-semibold">5.7%</span>，主要由于春节错位带来的节前备货需求释放和半导体等硬科技产业在地缘政治焦虑下加速<span className="font-semibold">“战略性补库”</span>的驱动。
            </p>
          </BaseCard>
          <BaseCard title="贸易顺差再创历史新高" delay="600ms">
            <p>
              12月单月贸易顺差达<span className="text-webank-blue font-semibold">1141亿美元</span>，较去年12月增加90亿美元。全年累计顺差约为 <span className="text-webank-blue font-semibold">1.19万亿美元</span>，续创历史新高（自1995年统计开始）。
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
          <ChartContainer delay="800ms">
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
