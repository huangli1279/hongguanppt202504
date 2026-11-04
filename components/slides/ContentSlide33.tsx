import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import {
  socialFinancingGrowthData,
  socialFinancingStructureQ3Data,
} from '@/data/socialFinancing';
import { formatThousands } from '@/utils/numberFormat';

const growthLineConfigs: LineConfig[] = [
  { dataKey: 'growth', name: '社融存量同比', strokeWidth: 2.5 },
];

const [structure2025, structure2026] = socialFinancingStructureQ3Data;

const structureBars: BarConfig[] = [
  { dataKey: 'y2025', name: '2025Q3', color: '#1B4F72' },
  { dataKey: 'y2026', name: '2026Q3', color: '#991B1B' },
];

const structureChartData = [
  { category: '人民币贷款', y2025: structure2025.rmbLoan, y2026: structure2026.rmbLoan },
  { category: '外币贷款', y2025: structure2025.fxLoan, y2026: structure2026.fxLoan },
  { category: '委托贷款', y2025: structure2025.entrustedLoan, y2026: structure2026.entrustedLoan },
  { category: '信托贷款', y2025: structure2025.trustLoan, y2026: structure2026.trustLoan },
  { category: '未贴现汇票', y2025: structure2025.undiscountedBill, y2026: structure2026.undiscountedBill },
  { category: '企业债券', y2025: structure2025.corporateBond, y2026: structure2026.corporateBond },
  { category: '政府债券', y2025: structure2025.governmentBond, y2026: structure2026.governmentBond },
  { category: '股票融资', y2025: structure2025.equity, y2026: structure2026.equity },
];

const renderStructureBarLabel = ({ x, y, width, value, dataKey }: any) => {
  const is2026 = dataKey === 'y2026';
  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={Math.abs(Number(value)) > 10000 ? 18 : Number(y) - (is2026 ? 18 : 6)}
      textAnchor="middle"
      dominantBaseline="middle"
      fill={is2026 ? '#991B1B' : '#1B4F72'}
      fontSize={9}
      fontWeight={600}
    >
      {formatThousands(Number(value))}
    </text>
  );
};

export const ContentSlide33: React.FC = () => {
  return (
    <BaseContentSlide
      title="社融增速回落至7.1%增长主要靠政府与政策工具撑"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="mb-4 flex-shrink-0 grid grid-cols-2 gap-6">
          <BaseCard delay="0ms" variant="accent" title="增速回落">
            <p>
              Q3新增社融
              <span className="text-red-500 font-semibold">6.11万亿元</span>
              （同比少增
              <span className="text-green-600 font-semibold">7,300亿元</span>
              ），社融增速回落至
              <span className="text-red-500 font-semibold">7.1%</span>
              。
            </p>
            <p className="mt-2">
              结构上，社融对
              <span className="text-red-500 font-semibold">政府债与政策工具</span>
              的依赖上升，居民端融资已
              <span className="text-green-600 font-semibold">连续三个季度收缩</span>
              。
            </p>
          </BaseCard>
          <BaseCard delay="200ms" variant="accent" title="结构：贷款靠政府与政策工具撑">
            <p>
              社融结构方面，人民币贷款增加
              <span className="text-red-500 font-semibold">7,390亿</span>
              ，同比少增
              <span className="text-green-600 font-semibold">1.06万亿</span>
              ，政府债融资同比多增
              <span className="text-red-500 font-semibold">588亿</span>
              。其中9月人民币贷款、政府债净融明显放量，政府债融资多增
              <span className="text-red-500 font-semibold">3,469亿</span>
              ，或反映财政端融资节奏正在加快。7月政治局会议提出“充分发挥各项存量政策效能”、加快债券资金使用进度的要求，或是推动9月政府债净融资放量的因素之一。
            </p>
            <p className="mt-2">
              受发行节奏后移和低基数影响，申万测算四季度政府债净融资同比多增约
              <span className="text-red-500 font-semibold">1.2万亿元</span>
              ，但全年总量基本持平；资金集中到位能否转化为实物工作量，仍待项目开工验证。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms" ariaLabel="社融存量同比增速走势">
            <BaseLineChart
              data={socialFinancingGrowthData}
              title="社融存量同比增速走势图"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={growthLineConfigs}
              yAxisDomain={[6, 10]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['社融存量同比']}
              highlightPeriods={['2026-09']}
              unit="%"
            />
          </ChartContainer>
          <ChartContainer delay="700ms" ariaLabel="新增社融分项结构柱状图，2025Q3与2026Q3融资增量对比">
            <BaseBarChart
              data={structureChartData}
              title="新增社融结构：分项融资增量对比（2025Q3 vs 2026Q3）"
              subtitle="数据来源：中国人民银行 | 分项单位：亿元 | 社融增量：2025Q3 6.84万亿元、2026Q3 6.11万亿元"
              bars={structureBars}
              xAxisKey="category"
              yAxisDomain={[-1500, 9000]}
              yAxisAllowDataOverflow={true}
              showYAxis={true}
              yAxisWidth={46}
              yAxisTickFormatter={(value) => formatThousands(Number(value))}
              showReferenceLine={true}
              referenceLineY={0}
              unit="亿元"
              barSize={18}
              xAxisInterval={0}
              xAxisAngle={-20}
              xAxisHeight={58}
              xAxisTickFontSize={9}
              showLabels={true}
              labelContent={renderStructureBarLabel}
              legendOrder={['2025Q3', '2026Q3']}
              legendGap={16}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
