import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { retailTrendData } from '../../data';
import { seriesColors } from '../../utils/chartColors';

const retailChartData = retailTrendData.filter((d) => d.period >= '2024-01');

const retailCategoryGrowthData = [
  { name: '通讯器材', value: 31.1, fill: '#dc2626' },
  { name: '粮食食品', value: 7.9, fill: '#dc2626' },
  { name: '中西药品', value: 5.0, fill: '#dc2626' },
  { name: '建筑材料', value: -11.8, fill: '#16a34a' },
  { name: '汽车', value: -21.2, fill: '#16a34a' },
];

export const ContentSlide14: React.FC = () => {
  return (
    <BaseContentSlide
      title="商品零售结构"
      cardColumns={3}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="零售额增长突出项" delay="0ms" variant="accent">
            <p>
              三季度通讯器材类商品维持<span className="font-bold text-red-500">20%</span>以上的增长，其中9月同比<span className="font-bold text-red-500">+31.1%</span>，受以旧换新补贴+AI终端涨价+新机发布三重推动。
            </p>
            <p>
              粮食食品类9月<span className="font-bold text-red-500">+7.9%</span>，中西药品9月同比<span className="font-bold text-red-500">+5%</span>，展示出对必选品需求的稳定增长。
            </p>
          </BaseCard>
          <BaseCard title="拖累项" delay="120ms">
            <p>
              受补贴高基数影响和内需疲软，汽车零售额三季度负增长，7月<span className="font-bold text-green-600">-17%</span>，8月<span className="font-bold text-green-600">-18.5%</span>，9月<span className="font-bold text-green-600">-21.2%</span>，成为最大的拖累项。
            </p>
            <p>
              建筑材料受地产链拖累，7月<span className="font-bold text-green-600">-14.2%</span>，8月<span className="font-bold text-green-600">-11.8%</span>。
            </p>
          </BaseCard>
          <BaseCard title="服务与政策动向" delay="240ms">
            <p>
              服务里面最强的仍是"体验类"：旅游咨询租赁服务类、文体休闲服务类零售额增速均超<span className="font-bold text-red-500">10%</span>。
            </p>
            <p>
              政策动向：商务部口径全年<span className="font-bold text-webank-blue">2500亿元</span>以旧换新补贴，至7月已使用约<span className="font-bold text-webank-blue">1200亿元</span>（华泰引）；7月政治局会议对消费的表述转向"挖掘服务消费潜力"，而非新增大宗补贴。
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
            <BaseBarChart
              data={retailCategoryGrowthData}
              title="商品零售额分项增速"
              subtitle="数据来源：国家统计局 | 单位：%"
              bars={[{ dataKey: 'value', name: '增速' }]}
              xAxisKey="value"
              layout="horizontal"
              yAxisDomain={[-25, 35]}
              showYAxis={true}
              yAxisWidth={80}
              showReferenceLine={true}
              referenceLineY={0}
              showLegend={false}
              showLabels={true}
              labelFormatter={(v: any) => `${Number(v) > 0 ? '+' : ''}${Number(v).toFixed(1)}%`}
              unit="%"
              barSize={14}
              xAxisTickFontSize={10}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
