import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { exportShareItems, exportShareSummary } from '../../data/exportShare';

// 主要地区出口增速：9月 vs 8月
const regionExportData = [
  { name: '东盟', aug: 30.2, sep: 52.3 },
  { name: '韩国', aug: 49.3, sep: 68.2 },
  { name: '台湾', aug: 43.8, sep: 68.9 },
  { name: '俄罗斯', aug: 38.9, sep: 51.3 },
  { name: '拉美', aug: 17.7, sep: 24.9 },
];

const regionExportBars: BarConfig[] = [
  { dataKey: 'aug', name: '8月', color: '#94a3b8' },
  { dataKey: 'sep', name: '9月', color: '#b91c1c' },
];

const exportShareData = exportShareItems.map((item) => ({
  name: item.name,
  share: item.share,
  fill: item.name === '其他' ? '#94a3b8' : item.isBri ? '#b91c1c' : '#005c8f',
}));

const exportShareBars: BarConfig[] = [
  { dataKey: 'share', name: '出口份额', color: '#005c8f' },
];

const briShareDelta = exportShareSummary.briShareDelta.toFixed(1);

export const ContentSlide26: React.FC = () => {
  return (
    <BaseContentSlide
      title="出口地区结构：AI链区域内分工加速，新兴市场同步回升"
      cardColumns={3}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="AI链区域内分工加速" delay="0ms" variant="accent">
            <p>
              9月对东盟<span className="text-red-500 font-semibold">+52.3%</span>（较8月+22.1pct）、对韩国<span className="text-red-500 font-semibold">+68.2%</span>（+18.9pct）、对台湾<span className="text-red-500 font-semibold">+68.9%</span>（+25.1pct），三地增速均创年内新高；集成电路<span className="text-red-500 font-semibold">+136.0%</span>、自动数据处理设备<span className="text-red-500 font-semibold">+92.9%</span>直接对应这三条航线——AI产业链的区域内分工（存储-封装-组装）在加速，低基数也有贡献（去年9月对东盟出口增速较前值低7pct左右）。
            </p>
          </BaseCard>
          <BaseCard title="新兴市场同步回升" delay="120ms">
            <p>
              俄罗斯<span className="text-red-500 font-semibold">+51.3%</span>（+12.4pct）、拉美<span className="text-red-500 font-semibold">+24.9%</span>（+7.2pct）同步回升。
            </p>
          </BaseCard>
          <BaseCard title="出口份额：一带一路占过半" delay="240ms">
            <p>
              1-9月东盟占出口<span className="text-red-500 font-semibold">18.8%</span>、欧盟<span className="text-red-500 font-semibold">14.5%</span>、美国<span className="text-red-500 font-semibold">10.6%</span>；共建“一带一路”国家合计占<span className="text-red-500 font-semibold">{exportShareSummary.briShare}%</span>，较上半年提高<span className="text-red-500 font-semibold">{briShareDelta}pct</span>，出口市场多元化继续推进。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms" ariaLabel="主要地区出口增速九月对比八月">
            <BaseBarChart
              data={regionExportData}
              title="图1 主要地区出口增速：9月vs8月"
              subtitle="数据来源：海关总署 | 单位：当月同比 %"
              bars={regionExportBars}
              layout="horizontal"
              xAxisKey="sep"
              yAxisDomain={[0, 80]}
              showYAxis={true}
              yAxisWidth={60}
              yAxisTickFormatter={(val) => `${val}%`}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['8月', '9月']}
              barSize={10}
              showLabels={true}
            />
          </ChartContainer>

          <ChartContainer delay="720ms" ariaLabel="2026年1至9月主要出口目的地份额">
            <BaseBarChart
              data={exportShareData}
              title={
                <span>
                  图2 主要出口份额
                </span>
              }
              subtitle={
                <>
                  数据来源：海关总署 | 占1-9月出口总值比重；较上半年
                  <span className="text-red-600 font-semibold">+{briShareDelta}pct</span>
                  ，含东盟、非洲、拉美等分项
                </>
              }
              bars={exportShareBars}
              layout="horizontal"
              yAxisDomain={[0, 22]}
              showYAxis={true}
              yAxisWidth={68}
              yAxisTickFormatter={(val) => `${val}%`}
              legendItems={[
                { value: '一带一路主要分项', color: '#b91c1c' },
                { value: '其他主要目的地', color: '#005c8f' },
                { value: '其余', color: '#94a3b8' },
              ]}
              legendFontSize={9}
              legendGap={8}
              barSize={11}
              showLabels={true}
              labelFormatter={(val) => `${val}%`}
              labelFill="#334155"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
