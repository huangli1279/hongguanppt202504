import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { manufacturingInvestmentData } from '@/data/equipmentInvestment';
import { infrastructureInvestmentData } from '@/data/infrastructureInvestment';
import { seriesColors } from '@/utils/chartColors';

// 左图：1-9月分行业/分区域投资累计同比（正负分色，AI 产业链高亮）
const industryYoyData = [
  { name: '电子电路', value: 58.7, fill: '#7f1d1d' },
  { name: '信息传输', value: 30.8, fill: '#7f1d1d' },
  { name: '铁路船舶航空航天', value: 15.8, fill: '#b91c1c' },
  { name: '航空运输', value: 13.8, fill: '#b91c1c' },
  { name: '水上运输', value: 13.5, fill: '#b91c1c' },
  { name: '计算机通信电子', value: 9.6, fill: '#7f1d1d' },
  { name: '基础设施建设投资', value: 2.0, fill: '#b91c1c' },
  { name: '装备制造业', value: 1.3, fill: '#b91c1c' },
  { name: '制造业投资', value: -0.3, fill: '#16a34a' },
  { name: '房地产开发投资', value: -20.6, fill: '#16a34a' },
  { name: '东北地区', value: -26.0, fill: '#15803d' },
];

export const ContentSlide19: React.FC = () => {
  const manufacturingLineConfigs: LineConfig[] = [
    { dataKey: 'computerOffice', name: '计算机及办公设备', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-03': -4 } },
    { dataKey: 'railwayShipAerospace', name: '铁路船舶航空航天', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-03': 14 } },
    { dataKey: 'highTechManufacturing', name: '高技术制造业', color: seriesColors[2], strokeWidth: 2, pointOffsets: { '2026-03': 16 } },
    { dataKey: 'autoManufacturing', name: '汽车制造业', color: seriesColors[3], strokeWidth: 2, pointOffsets: { '2026-03': 4 } },
    { dataKey: 'pharmaceutical', name: '医药制造业', color: seriesColors[4], strokeWidth: 2 },
  ];

  const infrastructureLineConfigs: LineConfig[] = [
    { dataKey: 'waterTransport', name: '水上运输业', color: seriesColors[0], strokeWidth: 2.5 },
    { dataKey: 'aviation', name: '航空运输业', color: seriesColors[1], strokeWidth: 2.5 },
    { dataKey: 'telecom', name: '信息传输业', color: seriesColors[2], strokeWidth: 2, pointOffsets: { '2026-03': 16 } },
    { dataKey: 'publicFacility', name: '公共设施管理业', color: seriesColors[3], strokeWidth: 2, pointOffsets: { '2026-03': 16 } },
    { dataKey: 'infrastructure', name: '基础设施建设投资', color: seriesColors[4], strokeWidth: 2, pointOffsets: { '2026-03': -2 } },
  ];

  return (
    <BaseContentSlide
      title="制造业与基建：AI资本开支独扛大梁，传统行业投资仍在负区"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="① 正增长集中在三类行业" delay="0ms" variant="accent">
            <p>
              分行业看，前三季度投资正增长的集中在三类：战略类基建（水上运输
              <span className="text-red-500 font-semibold">+13.5%</span>、航空运输
              <span className="text-red-500 font-semibold">+13.8%</span>、信息传输
              <span className="text-red-500 font-semibold">+30.8%</span>）、AI产业链（电子电路
              <span className="text-red-500 font-semibold">+58.7%</span>、计算机通信电子
              <span className="text-red-500 font-semibold">+9.6%</span>）、公用事业补短板。
            </p>
          </BaseCard>

          <BaseCard title="② 装备制造业：出口与「两重」双拉动" delay="120ms">
            <p>
              装备制造业投资
              <span className="text-red-500 font-semibold">+1.3%</span>
              （前三季度，比1-8月加快0.4pct），其中铁路船舶航空航天
              <span className="text-red-500 font-semibold">+15.8%</span>
              ——出口与「两重」双重拉动。
            </p>
            <p className="mt-2">
              制造业细分中，计算机及办公设备、铁路船舶航空航天维持两位数高增，汽车、高技术制造降至个位数，医药制造
              <span className="text-green-600 font-semibold">-7.7%</span>（1-3月）仍在负区。
            </p>
          </BaseCard>

          <BaseCard title="③ 传统行业与区域投资仍在负区" delay="240ms">
            <p>
              另一端，制造业投资整体已转负
              <span className="text-green-600 font-semibold">-0.3%</span>
              、房地产开发投资降幅扩大至
              <span className="text-green-600 font-semibold">-20.0%</span>
              ；区域上东北地区投资
              <span className="text-green-600 font-semibold">-26.0%</span>
              ，传统行业与弱资质区域仍是固投的主要拖累。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
          {/* 左图：分行业投资累计同比（横向条形，正负分色） */}
          <ChartContainer delay="600ms" ariaLabel="分行业投资累计同比横向条形图">
            <BaseBarChart
              data={industryYoyData}
              title="图1 分行业/分区域投资累计同比（1-9月）"
              subtitle="数据来源：国家统计局 | 单位：% | 深红=AI产业链高亮"
              bars={[{ dataKey: 'value', name: '投资累计同比' }]}
              xAxisKey="value"
              layout="horizontal"
              yAxisDomain={[-30, 70]}
              showYAxis={true}
              yAxisWidth={104}
              yAxisTickFormatter={(val) => `${val}%`}
              showReferenceLine={true}
              referenceLineY={0}
              showLabels={true}
              labelContent={({ x, y, width, height, value }: any) => {
                const v = Number(value) || 0;
                const isNegative = v < 0;
                return (
                  <text
                    x={Number(x) + Number(width) + 6}
                    y={Number(y) + Number(height) / 2}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fill={isNegative ? '#16a34a' : '#b91c1c'}
                    fontSize={10}
                    fontWeight={700}
                  >
                    {v > 0 ? `+${v}%` : `${v}%`}
                  </text>
                );
              }}
              legendItems={[
                { value: '正增长', color: '#b91c1c' },
                { value: 'AI产业链', color: '#7f1d1d' },
                { value: '负增长', color: '#16a34a' },
              ]}
              barSize={12}
            />
          </ChartContainer>

          {/* 中图：制造业细分行业投资累计同比 */}
          <ChartContainer delay="720ms" ariaLabel="制造业细分行业投资累计同比折线图">
            <BaseLineChart
              data={manufacturingInvestmentData}
              title="图2 制造业细分行业投资累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={manufacturingLineConfigs}
              yAxisDomain={[-15, 45]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['计算机及办公设备', '铁路船舶航空航天', '高技术制造业', '汽车制造业', '医药制造业']}
              xAxisTicks={['2025-02', '2025-06', '2025-09', '2025-12', '2026-03']}
            />
          </ChartContainer>

          {/* 右图：基建细分行业投资累计同比 */}
          <ChartContainer delay="840ms" ariaLabel="基建细分行业投资累计同比折线图">
            <BaseLineChart
              data={infrastructureInvestmentData}
              title="图3 基建细分行业投资累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={infrastructureLineConfigs}
              yAxisDomain={[-30, 50]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['水上运输业', '航空运输业', '信息传输业', '公共设施管理业', '基础设施建设投资']}
              xAxisTicks={['2025-02', '2025-06', '2025-09', '2025-12', '2026-03']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
