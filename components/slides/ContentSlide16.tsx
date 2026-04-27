import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseCard } from '../base/BaseCard';
import { retailMonthlyCategoryData, serviceRetailData, springFestivalTravelData } from '../../data';

export const ContentSlide16: React.FC = () => {
  return (
    <BaseContentSlide
      title="一季度社零稳步回暖至2.4%，服务增速继续快于商品"
      cardColumns={2}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="总量温和修复" delay="0ms" variant="accent">
            <p>
              2026年1季度社零累计同比<span className="font-bold text-webank-blue">2.4%</span>（总额<span className="font-bold text-webank-blue">12.8万亿元</span>）。从当月同比看，1-2月维持<span className="font-bold text-webank-blue">4.0%</span>左右，3月受春节后季节性回落影响放缓至<span className="font-bold text-webank-blue">1.7%</span>。
            </p>
          </BaseCard>
          <BaseCard title="服务消费仍是核心驱动" delay="120ms">
            <p>
              1-3月份服务零售额同比增长<span className="font-bold text-webank-blue">5.5%</span>，持续快于商品零售额（<span className="font-bold text-webank-blue">2.2%</span>），餐饮收入增长<span className="font-bold text-webank-blue">4.2%</span>；春节假期国内出游<span className="font-bold text-webank-blue">5.96亿人次</span>，总花费超<span className="font-bold text-webank-blue">8000亿元</span>，均创历史新高。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              title="社会消费品零售总额及分类当月同比数据"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={retailMonthlyCategoryData}
              lines={[
                { dataKey: 'totalRetail', name: '社零总额:当月同比', strokeWidth: 2.5 },
                { dataKey: 'cateringRevenue', name: '餐饮收入:当月同比', labelDY: -8 },
                { dataKey: 'goodsRetail', name: '商品零售:当月同比', labelDY: 12 },
              ]}
              legendOrder={['社零总额:当月同比', '餐饮收入:当月同比', '商品零售:当月同比']}
              yAxisDomain={[0, 10]}
              showYAxis={true}
              xAxisTickCount={6}
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseLineChart
              title="社会消费品零售总额:服务零售额:累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={serviceRetailData}
              lines={[
                { dataKey: 'serviceRetail', name: '服务零售额:累计同比', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 15]}
              showYAxis={true}
              xAxisTickCount={6}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseBarChart
              title="春节国内旅游数据对比"
              subtitle="数据来源：文旅部 | 人次单位：亿；花费单位：亿元"
              data={springFestivalTravelData}
              bars={[
                { dataKey: 'trips', name: '春节国内出游人次' },
              ]}
              lines={[
                { dataKey: 'spending', name: '国内出游总花费', unit: '亿元', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[2, 12]}
              lineAxisDomain={[5000, 8500]}
              showYAxis={true}
              showLineYAxis={true}
              barSize={24}
              unit="亿"
              lineUnit="亿元"
              yAxisTickFormatter={(value) => `${value}亿`}
              lineYAxisTickFormatter={(value) => `${value}`}
              lineShowDot={true}
              lineLabelFormatter={(value) => `${value}`}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
