import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { housingConsumptionData, housingConsumptionCategoryGroups, housingConsumptionNameByCategory, newHousePriceYoyData, newHousePriceYoyXTicks } from '@/data/housingConsumption';

const consumptionBars: BarConfig[] = [
  { dataKey: 'housingTransport', name: '住房与交通', color: '#1B4F72', stackId: 'consumption' },
  { dataKey: 'foodLiving', name: '居家食品与生活', color: '#DC2626', stackId: 'consumption' },
  { dataKey: 'educationMedical', name: '教育与医疗', color: '#F4D35E', stackId: 'consumption' },
  { dataKey: 'durables', name: '耐用品', color: '#81B29A', stackId: 'consumption' },
  { dataKey: 'entertainment', name: '文娱与外出餐饮', color: '#9B72AA', stackId: 'consumption' },
];

const priceLineConfigs: LineConfig[] = [
  {
    dataKey: 'newHousePrice',
    name: '新建商品住宅价格指数同比',
    strokeWidth: 2.5,
  },
];

export const ContentSlide40: React.FC = () => {
  return (
    <BaseContentSlide
      title={<>房价财富效应：房价下行背景下，居民消费受抑制</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="房价持续同比下跌，财富效应承压" delay="0ms" variant="accent">
            <p className="text-xs">
              高盛测算，26年Q1居民财富中房地产占<span className="text-red-500 font-semibold">52%</span>。社科院26Q2报告指出，居民部门主动去杠杆，住房贷款<span className="text-green-600 font-semibold">连续13个季度负增长</span>。
            </p>
            <p className="mt-1 text-xs">
              70城新建商品住房价格2024年10月跌幅一度扩大至<span className="text-green-600 font-semibold">-6.2%</span>，2026年上半年仍在<span className="text-green-600 font-semibold">-3.5%</span>左右徘徊。
            </p>
          </BaseCard>
          <BaseCard title="消费与房价变化正相关" delay="120ms">
            <p className="text-xs">
              厦大×蚂蚁集团调查显示，房价跌幅越大，家庭消费越低，且<span className="text-red-500 font-semibold">所有类别消费均下降</span>。房价跌幅超15%时，一套房家庭消费较房价上涨家庭消费下降<span className="text-green-600 font-semibold">11.9%</span>，多套房家庭下降<span className="text-green-600 font-semibold">25.9%</span>，其中文娱与外出餐饮收缩的幅度最大。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
          {/* 左侧：房价同比折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={newHousePriceYoyData}
              title="70城新建商品住宅价格指数同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={priceLineConfigs}
              yAxisDomain={[-7, 0]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              xAxisTicks={newHousePriceYoyXTicks}
              legendOrder={['新建商品住宅价格指数同比']}
              unit="%"
            />
          </ChartContainer>

          {/* 右侧：消费结构堆叠柱状图 */}
          <ChartContainer delay="600ms">
            <div className="relative w-full h-full">
              <BaseBarChart
                data={housingConsumptionData}
                title="家庭月均消费：按住房套数×房价涨跌分组"
                subtitle="数据来源：厦门大学×蚂蚁集团研究院《2026年一季度中国家庭财富与消费报告》 | 单位：元｜样本14,967人"
                xAxisKey="category"
                bars={consumptionBars}
                yAxisDomain={[0, 5500]}
                showYAxis={true}
                yAxisWidth={50}
                yAxisTickFormatter={(val) => `${val}`}
                unit="元"
                barSize={30}
                showLabels={true}
                labelPosition="outside"
                labelFill="#333333"
                labelDy={-8}
                legendOrder={['住房与交通', '居家食品与生活', '教育与医疗', '耐用品', '文娱与外出餐饮']}
                categoryGroups={housingConsumptionCategoryGroups}
                xAxisInterval={0}
                xAxisAngle={-35}
                xAxisHeight={90}
                xAxisTickFormatter={(v) => housingConsumptionNameByCategory[String(v)] ?? String(v)}
              />
              {/* 消费差距标注 - 放在图表上方 */}
              <div className="absolute top-0 right-0 flex gap-6 text-xs">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-[#DC2626] rounded-sm"></span>
                  <span className="text-[#DC2626] font-bold">一套房: -11.9%</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-[#9B72AA] rounded-sm"></span>
                  <span className="text-[#9B72AA] font-bold">多套房: -25.9%</span>
                </div>
              </div>
              {/* 房价波动定义备注 */}
              <div className="mt-2 px-1 py-1 bg-gray-50 border border-gray-200 rounded text-[9px] text-gray-600 leading-relaxed">
                <span className="font-medium text-gray-700">注：</span>研究将用户所在城市的房价波动定义为该城市2024年房价相较于2021年房价的变动幅度，即（2024年房价-2021年房价）/2021年房价。
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
