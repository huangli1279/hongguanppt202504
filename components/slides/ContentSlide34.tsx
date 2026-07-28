import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { incomeExpenditureData, industryAvgSalaryData } from '@/data/consumerConfidence';
import { seriesColors } from '@/utils/chartColors';

export const ContentSlide34: React.FC = () => {
  const incomeLines: LineConfig[] = [
    { dataKey: 'incomeReal', name: '可支配收入实际', color: seriesColors[0], strokeWidth: 2.5, labelDY: -14 },
    { dataKey: 'wageIncome', name: '工资性收入', color: seriesColors[1], strokeWidth: 2, labelDY: 4 },
    { dataKey: 'operatingIncome', name: '经营净收入', color: seriesColors[2], strokeWidth: 2, labelDY: -4 },
    { dataKey: 'propertyIncome', name: '财产净收入', color: seriesColors[3], strokeWidth: 2, labelDY: 16 },
    { dataKey: 'transferIncome', name: '转移净收入', color: seriesColors[4], strokeWidth: 2, labelDY: 28 },
    { dataKey: 'consumptionReal', name: '消费支出实际', color: seriesColors[5], strokeWidth: 2.5, labelDY: 40 },
  ];

  const salaryLines: LineConfig[] = [
    { dataKey: 'itSoftwareAi', name: 'IT/软件(AI相关)', color: seriesColors[0], strokeWidth: 2.5, labelDY: -14 },
    { dataKey: 'finance', name: '金融业', color: seriesColors[1], strokeWidth: 2, labelDY: -4 },
    { dataKey: 'scientificResearch', name: '科研技术服务', color: seriesColors[2], strokeWidth: 2, labelDY: 4 },
    { dataKey: 'utilities', name: '电力燃气水', color: seriesColors[3], strokeWidth: 2, labelDY: 14 },
    { dataKey: 'education', name: '教育', color: seriesColors[4], strokeWidth: 2, labelDY: 24 },
    { dataKey: 'nationalNonPrivate', name: '全国非私营均值', color: seriesColors[6], strokeWidth: 2, labelDY: 34 },
    { dataKey: 'realEstate', name: '房地产业', color: seriesColors[5], strokeWidth: 2, labelDY: 44 },
  ];

  return (
    <BaseContentSlide
      title={<>近年收入变化：人均可支配收入增加但满意度及预期长期走低，边际消费倾向下降</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="收入" delay="0ms" variant="accent">
            <p>
              上半年居民人均可支配收入 <span className="text-red-500 font-semibold">2.3万元</span>，实际增长 <span className="text-red-500 font-semibold">4.2%</span>，而人均消费支出为 <span className="text-red-500 font-semibold">1.48万元</span>，实际仅增长 <span className="text-red-500 font-semibold">2.7%</span>。根据人行的调查，居民收入感受和信心指数23年以来低于50，表明居民现在收入的满意度和未来收入预期仍处于变差阶段。边际消费倾向（MPC）——即每增加1元收入中用于消费的比例——是衡量收入对消费拉动效应的核心指标。截至2025年底，我国居民人均边际消费倾向为 <span className="text-red-500 font-semibold">0.61</span>，较2024年底下滑了 <span className="text-red-500 font-semibold">0.08</span>。
            </p>
          </BaseCard>
          <BaseCard title="新兴行业" delay="120ms">
            <p>
              根据国家统计局数据，近5年信息传输、软件和信息技术服务业平均薪资最高，其中AI相关行业薪资增长迅猛。根据脉脉《2025年AI人才流动报告》显示，2025年1—7月，AI新发岗位平均月薪 <span className="text-red-500 font-semibold">6.1万元</span>，同比增长 <span className="text-red-500 font-semibold">4.33%</span>。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={incomeExpenditureData}
              title="居民人均收入与消费支出累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={incomeLines}
              yAxisDomain={[-1, 8]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={[
                '可支配收入实际',
                '工资性收入',
                '经营净收入',
                '财产净收入',
                '转移净收入',
                '消费支出实际',
              ]}
              unit="%"
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseLineChart
              data={industryAvgSalaryData}
              title="分行业城镇非私营单位年平均工资"
              subtitle="数据来源：国家统计局 | 单位：万元"
              lines={salaryLines}
              yAxisDomain={[8, 26]}
              showYAxis={true}
              showReferenceLine={false}
              legendOrder={[
                'IT/软件(AI相关)',
                '金融业',
                '科研技术服务',
                '电力燃气水',
                '教育',
                '全国非私营均值',
                '房地产业',
              ]}
              unit="万元"
              yAxisTickFormatter={(val) => `${val}`}
              xAxisTicks={['2021', '2022', '2023', '2024', '2025']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
