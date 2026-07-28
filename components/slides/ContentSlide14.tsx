import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { retailMonthlyCategoryData, cityRetailData } from '../../data';

const retailChartData = retailMonthlyCategoryData.filter((d) => d.period >= '2024-06');
const cityChartData = cityRetailData.filter((d) => d.period >= '2024-06');

export const ContentSlide14: React.FC = () => {
  return (
    <BaseContentSlide
      title="5月社零转负至-0.6%，6月回升至1.0%，服务与零售延续分化"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="总量历史性承压" delay="0ms" variant="accent">
            <p>
              5月社会消费品零售总额同比<span className="font-bold text-webank-blue">-0.6%</span>，系2023年以来首次单月增速转负，6月虽回升至<span className="font-bold text-webank-blue">1.0%</span>，但上半年社零累计仅增长<span className="font-bold text-webank-blue">1.3%</span>，主要由高基数叠加内需不足导致。
            </p>
          </BaseCard>
          <BaseCard title="结构特征" delay="120ms">
            <div className="space-y-2">
              <p>
                <span className="font-bold text-webank-blue">服务端：</span>
                1—6月服务零售额同比增长<span className="font-bold text-webank-blue">5.3%</span>，明显优于商品零售（<span className="font-bold text-webank-blue">1.1%</span>），其中5月商品零售下降<span className="font-bold text-webank-blue">0.7%</span>。
              </p>
              <p>
                <span className="font-bold text-webank-blue">地域端：</span>
                上半年，乡村市场（<span className="font-bold text-webank-blue">+2.5%</span>）增长快于城镇（<span className="font-bold text-webank-blue">1.2%</span>），持续体现县域商业设施完善与下沉市场韧性。北上深拖累全国社零增长，新一线城市中重庆上半年社零增长<span className="font-bold text-webank-blue">2.3%</span>，引领新一线城市，杭州<span className="font-bold text-webank-blue">1.8%</span>，长沙仅<span className="font-bold text-webank-blue">0.9%</span>。
              </p>
            </div>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              title="社会消费品零售总额、商品零售及餐饮收入当月同比增速"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={retailChartData}
              lines={[
                { dataKey: 'totalRetail', name: '社零总额:当月同比', strokeWidth: 2.5 },
                { dataKey: 'goodsRetail', name: '商品零售:当月同比', labelDY: 12 },
                { dataKey: 'cateringRevenue', name: '餐饮收入:当月同比', labelDY: -8 },
              ]}
              legendOrder={['社零总额:当月同比', '商品零售:当月同比', '餐饮收入:当月同比']}
              yAxisDomain={[-2, 8]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseLineChart
              title="多城市社会消费品零售总额累计同比"
              subtitle="数据来源：深圳/广州/杭州/长沙统计局、国家统计局 | 单位：%"
              data={cityChartData}
              lines={[
                { dataKey: 'shenzhen', name: '深圳', strokeWidth: 2 },
                { dataKey: 'shanghai', name: '上海', strokeWidth: 2 },
                { dataKey: 'beijing', name: '北京', strokeWidth: 2 },
                { dataKey: 'guangzhou', name: '广州', strokeWidth: 2 },
                { dataKey: 'hangzhou', name: '杭州', strokeWidth: 2 },
                { dataKey: 'changsha', name: '长沙', strokeWidth: 2 },
              ]}
              legendOrder={['深圳', '上海', '北京', '广州', '杭州', '长沙']}
              yAxisDomain={[-6, 12]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              xAxisTickCount={8}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
