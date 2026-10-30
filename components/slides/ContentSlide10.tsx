import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { ppiYoyData } from '@/data/ppi';
import { profitSelfRaisedData } from '@/data/fixedAssetInvestment';

const ppiChartData = ppiYoyData.filter((d) => d.period >= '2024-01');
const profitChartData = profitSelfRaisedData.filter((d) => d.period >= '2025-01');

export const ContentSlide10: React.FC = () => {
  return (
    <BaseContentSlide
      title="工业企业利润前三季度+15.5%，增收更增利但行业冷暖不均，PPI9月破5"
      cardColumns={3}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="利润总额与营收成本" delay="0ms" variant="accent">
            <p>
              1-9月规上工业企业利润总额
              <span className="font-bold">6.03万亿元</span>
              ，同比
              <span className="text-red-500 font-bold">+15.5%</span>
              ；1-9月规上工业企业营收同比增长
              <span className="text-red-500 font-bold">6.6%</span>
              ，营业成本同比增长
              <span className="text-red-500 font-bold">6.1%</span>
              ，增收更增利。
            </p>
          </BaseCard>

          <BaseCard title="分行业利润分化" delay="120ms">
            <p>
              1-9月份计算机、通信和其他电子设备制造业利润同比增长
              <span className="text-red-500 font-bold">103.8%</span>
              ，有色金属冶炼和压延加工业增长
              <span className="text-red-500 font-bold">79.7%</span>
              ；电力、热力生产和供应业下降
              <span className="text-green-600 font-bold">17.9%</span>
              ，汽车制造业下降
              <span className="text-green-600 font-bold">22.8%</span>
              ，黑色金属冶炼和压延加工业受房地产下行和25年同期"反内卷"高基数影响，下降
              <span className="text-green-600 font-bold">73.3%</span>
              。
            </p>
          </BaseCard>

          <BaseCard title="PPI破5与剪刀差" delay="240ms" variant="accent">
            <p>
              PPI：9月同比
              <span className="text-red-500 font-bold">5.0%</span>
              ，为22年7月以来首次破5，受到外部战争等因素影响，输入性通胀严重。9月生产资料PPI同比
              <span className="text-red-500 font-bold">6.5%</span>
              ，生活资料
              <span className="text-green-600 font-bold">-0.1%</span>
              ，上下游之间的剪刀差持续走廓。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" className="pb-8">
            <BaseLineChart
              data={profitChartData}
              title="规上工业企业利润累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'industrialProfit', name: '规上工业企业利润总额', strokeWidth: 2.5, pointOffsets: { '2026-09': 12 } },
              ]}
              yAxisDomain={[-5, 25]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['规上工业企业利润总额']}
              highlightPeriods={['2026-09']}
              unit="%"
              yAxisTickFormatter={(val) => `${val}`}
              xAxisTicks={['2025-02', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06', '2026-09']}
            />
          </ChartContainer>
          <ChartContainer delay="720ms" className="pb-8">
            <BaseLineChart
              data={ppiChartData}
              title="PPI、生产资料、生活资料当月同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'ppiYoy', name: 'PPI当月同比', strokeWidth: 2.5, pointOffsets: { '2026-09': 14 } },
                { dataKey: 'productionMaterialsYoy', name: '生产资料当月同比', strokeWidth: 2.5 },
                { dataKey: 'livingGoodsYoy', name: '生活资料当月同比', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[-3, 8]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['PPI当月同比', '生产资料当月同比', '生活资料当月同比']}
              highlightPeriods={['2026-09']}
              xAxisTickCount={7}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
