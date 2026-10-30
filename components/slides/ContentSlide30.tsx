import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { fiscalExpenditureQ3GrowthData, fiscalExpenditureTrendData } from '@/data/fiscalRevenue';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide30: React.FC = () => {
  const trendLines: LineConfig[] = [
    { dataKey: 'y2025', name: '2025年', color: '#93a3b8', strokeWidth: 2, labelDY: -10, pointDXOffsets: { '12月': -8 } },
    { dataKey: 'y2026', name: '2026年', color: chartColors.primary, strokeWidth: 2.5, labelDY: 16 },
  ];

  const expBars: BarConfig[] = [
    { dataKey: 'amount', name: '总额', color: '#4A79AA' },
  ];
  const growthLines: BarLineConfig[] = [
    { dataKey: 'growth', name: '增速', color: '#E8913A', strokeWidth: 0, yAxisId: 'right', unit: '%' },
  ];

  const lineLabelContent = (props: any) => {
    const { x, y, value } = props;
    const isNegative = value < 0;
    return (
      <text
        x={x + 8}
        y={y - 10}
        textAnchor="start"
        dominantBaseline="middle"
        fill={isNegative ? '#16a34a' : '#E8913A'}
        fontSize={9}
        fontWeight={600}
      >
        {Number(value).toFixed(1)}%
      </text>
    );
  };

  return (
    <BaseContentSlide
      title={<>财政支出进度偏慢：增长1%未达目标，结构延续民生托底、科创加力、基建边际修复</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="支出进度慢" delay="0ms" variant="accent">
            <p>
              1—9月全国一般公共预算支出 <span className="text-red-500 font-semibold">21.02万亿元</span>，同比增长 <span className="text-red-500 font-semibold">1%</span>，距离年初 <span className="text-red-500 font-semibold">4.4%</span> 的目标仍有空间。支出进度 <span className="text-red-500 font-semibold">70.0%</span>，偏慢，低于收入进度 8 个百分点。
            </p>
          </BaseCard>
          <BaseCard title="结构：民生托底、科创加力、基建边际修复" delay="120ms">
            <p>
              卫生健康支出增长 <span className="text-red-500 font-semibold">7.7%</span>，主要是发放育儿补贴增加；社会保障和就业增长 <span className="text-red-500 font-semibold">5.2%</span>，住房保障增长 <span className="text-red-500 font-semibold">3.1%</span>，科学技术增长 <span className="text-red-500 font-semibold">3%</span>，教育增长 <span className="text-red-500 font-semibold">1.1%</span>。投资于人相关支出得到较好保障，传统基建支出弱化但降幅收窄（Q2 <span className="text-green-600 font-semibold">-5.3%</span> → Q3 <span className="text-green-600 font-semibold">-4.41%</span>）。
            </p>
          </BaseCard>
          <BaseCard title="三个约束：土地、化债、监管" delay="240ms">
            <p>
              一是土地财政收缩；二是隐性债务化解刚性，专项债付息占地方本级政府性基金收入比重升至 <span className="text-red-500 font-semibold">18%</span> 以上（申万）；三是 9 月 11 日中纪委与财政部联合通报六起隐债问责案例，再度释放强监管信号。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={fiscalExpenditureTrendData}
              title="一般公共预算支出合计累计同比（两年对比）"
              subtitle="数据来源：财政部 | 单位：累计同比：%"
              lines={trendLines}
              yAxisDomain={[0, 6]}
              showYAxis={true}
              showReferenceLine={false}
              xAxisTicks={['2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']}
              unit="%"
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseBarChart
              data={fiscalExpenditureQ3GrowthData}
              title="1—9月一般公共预算支出主要分项总额与累计同比"
              subtitle="数据来源：财政部 | 单位：亿元，%"
              bars={expBars}
              lines={growthLines}
              xAxisKey="category"
              yAxisDomain={[0, 40000]}
              yAxisTickFormatter={(val) => String(val)}
              unit="亿元"
              showYAxis={true}
              showLabels={false}
              showLineYAxis={true}
              lineAxisDomain={[-16, 12]}
              lineUnit="%"
              lineYAxisTickFormatter={(val) => `${val.toFixed(0)}%`}
              lineShowDot={true}
              lineLabelContent={lineLabelContent}
              legendOrder={['总额', '增速']}
              barSize={20}
              xAxisAngle={-45}
              xAxisHeight={70}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
