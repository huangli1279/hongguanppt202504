import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { retailTrendData } from '../../data';
import { cpcaRetailYoyData } from '../../data';
import { seriesColors } from '../../utils/chartColors';

const retailChartData = retailTrendData.filter((d) => d.period >= '2024-01');

export const ContentSlide13: React.FC = () => {
  return (
    <BaseContentSlide
      title="服务零售强于商品零售，体验类服务热度上升，汽车内需疲软"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="服务零售持续快速增长" delay="0ms" variant="accent">
            <p>
              前三季度服务零售额<span className="font-bold text-red-500">+5.0%</span>、商品零售额<span className="text-black">+1.0%</span>，服务增速继续快于商品。
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex gap-2">
                <span className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-webank-accent" />
                <span>
                  服务里面最强的仍是"体验类"：旅游咨询租赁服务类、文体休闲服务类零售额增速分别为<span className="font-bold text-red-500">10.7%</span>和<span className="font-bold text-red-500">9.7%</span>。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[0.6em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-webank-accent" />
                <span>
                  政策动向：7月政治局会议对消费的表述转向"挖掘服务消费潜力"，而非新增大宗补贴。
                </span>
              </li>
            </ul>
          </BaseCard>
          <BaseCard title="汽车零售持续低迷，补贴透支后内需疲软" delay="120ms">
            <p>
              前三季度汽车类零售额<span className="font-bold text-green-600">2.9万亿元</span>、同比下降<span className="font-bold text-green-600">14.9%</span>；根据乘联会数据，1-10月乘用车销量<span className="font-bold text-green-600">-22.3%</span>，今年以来汽车受高基数压制和内需不足影响持续负增长。
            </p>
            <p>
              燃油车受到新能源和油价上升双重压制，1-10月累计同比<span className="font-bold text-green-600">-31.5%</span>，补贴退坡后的内需仍然疲软。华泰估算8月汽车对社零同比的拖累<span className="font-bold text-green-600">1.88</span>个百分点，9月约<span className="font-bold text-green-600">2.33</span>个百分点。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={retailChartData}
              title="服务零售额 vs 商品零售额累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'serviceRetail', name: '服务零售额:累计同比', color: seriesColors[0], strokeWidth: 2.5, labelDY: -8 },
                { dataKey: 'goodsRetail', name: '商品零售额:累计同比', color: seriesColors[1], strokeWidth: 2.5, labelDY: 8 },
              ]}
              legendOrder={['服务零售额:累计同比', '商品零售额:累计同比']}
              yAxisDomain={[0, 8]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseLineChart
              data={cpcaRetailYoyData}
              title="乘用车零售销量累计同比：燃油、新能源与狭义乘用车"
              subtitle="数据来源：乘联会 | 单位：%"
              lines={[
                { dataKey: 'fuelRetailYoy', name: '燃油车', color: seriesColors[0], strokeWidth: 2.5, labelDY: 8 },
                { dataKey: 'nevRetailYoy', name: '新能源汽车', color: seriesColors[1], strokeWidth: 2.5, labelDY: -12 },
                { dataKey: 'narrowPassengerCarYoy', name: '狭义乘用车:累计同比', color: seriesColors[2], strokeWidth: 2.5, labelDY: 14 },
              ]}
              legendOrder={['燃油车', '新能源汽车', '狭义乘用车:累计同比']}
              yAxisDomain={[-40, 40]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
