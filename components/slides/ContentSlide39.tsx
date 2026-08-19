import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';
import { BaseCard } from '../base/BaseCard';
import { chartColors, seriesColors } from '@/utils/chartColors';
import { workTypeExpenditureData, jobDemandYoyData } from '@/data/employment';

export const ContentSlide39: React.FC = () => {
  // 合并就业数据和灵活就业数据到同一时间轴（2020-2025年重叠区间）
  const mergedEmploymentData = [
    { period: '2020', national: 75064, flexible: 1.7 },
    { period: '2021', national: 74652, flexible: 2.0 },
    { period: '2022', national: 73351, flexible: 2.2 },
    { period: '2023', national: 74041, flexible: 2.3 },
    { period: '2024', national: 73439, flexible: 2.4 },
    { period: '2025', national: 72504, flexible: 2.8 },
  ];

  const employmentBars: BarConfig[] = [
    {
      dataKey: 'national',
      name: '全国就业人员',
      color: seriesColors[0],
    },
  ];

  const flexibleEmploymentLines: BarLineConfig[] = [
    {
      dataKey: 'flexible',
      name: '灵活就业人员',
      color: chartColors.primary,
      strokeWidth: 2.5,
      yAxisId: 'right',
      unit: '亿人',
    },
  ];

  const workTypeExpenditureBars: BarConfig[] = [
    {
      dataKey: 'totalExpenditure',
      name: '总支出',
      color: seriesColors[1],
    },
  ];

  return (
    <BaseContentSlide
      title={<>整体就业变化：就业人数减少，灵活就业快速增加，失业拉低居民消费</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="失业率" delay="0ms" variant="accent">
            <p className="text-xs">
              二季度失业率维持在<span className="text-green-500 font-semibold">5.0%-5.2%</span>，全年龄段失业率均较一季度呈现季节性回落，但16-24岁失业率长期维持在<span className="text-green-500 font-semibold">15%</span>的高位。2026年毕业生预计<span className="text-green-500 font-semibold">1270万</span>，继续创历史新高。
            </p>
          </BaseCard>
          <BaseCard title="就业结构变化" delay="120ms">
            <p className="text-xs">
              <span className="font-semibold text-gray-700">就业状态变化：</span>近五年，全国就业人数减少<span className="text-green-500 font-semibold">2600万</span>。灵活就业人数从21年的<span>2亿</span>拓展到25年<span>2.8亿</span>，26年预计<span className="text-green-500 font-semibold">3.2亿</span>，增长迅猛。
            </p>
            <p className="mt-2 text-xs">
              <span className="font-semibold text-gray-700">岗位类型变化：</span>报告表明，AI可能会影响中国约<span>31%</span>的岗位，未来五年约<span className="text-green-500 font-semibold">7000万</span>岗位面临被替代风险（主要为基础岗位）。上海科技大学研究表明近三年约有<span className="text-red-500 font-semibold">2100万</span>个岗位由AI技能任务重组而生。短期AI替代效应明显，中长期来看AI创造新岗位。
            </p>
          </BaseCard>
          <BaseCard title="失业对支出的影响" delay="240ms">
            <p className="text-xs">
              调查显示，全职工作群体月均总支出<span>3521</span>元，失业3个月以内、3个月以上分别降低<span className="text-green-500 font-semibold">14.0%</span>、<span className="text-green-500 font-semibold">16.9%</span>，失业时间越长压制越明显。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 - 三列等宽布局 */}
        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
          {/* 第1列：就业人员规模变化 */}
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={mergedEmploymentData}
              title="就业人员规模变化"
              subtitle="数据来源：国家统计局 | 左轴：全国就业人员（万人）右轴：灵活就业人员（亿人）"
              bars={employmentBars}
              lines={flexibleEmploymentLines}
              xAxisKey="period"
              showYAxis={true}
              yAxisDomain={[70000, 76000]}
              yAxisTickFormatter={(val) => `${(val / 10000).toFixed(1)}亿`}
              unit="万人"
              showLabels={true}
              labelFormatter={(val) => `${(val / 10000).toFixed(2)}亿`}
              showLineYAxis={true}
              lineAxisDomain={[1, 3.5]}
              lineUnit="亿人"
              lineYAxisTickFormatter={(val) => `${val}亿`}
              lineShowDot={true}
              lineLabelFormatter={(val) => `${val}亿`}
              legendOrder={['全国就业人员', '灵活就业人员']}
              barSize={24}
              xAxisHeight={30}
              xAxisInterval={0}
            />
          </ChartContainer>

          {/* 第2列：就业市场需求变化 */}
          <ChartContainer delay="720ms">
            <div className="relative w-full h-full">
              <BaseBarChart
                data={[
                  { name: '销售行政/商务（AI）', yoy: 682, fill: '#1B4F72' },
                  { name: '提示词工程师', yoy: 486.8, fill: '#1B4F72' },
                  { name: 'AI工程师', yoy: 317, fill: '#1B4F72' },
                  { name: 'AI产品经理', yoy: 87.7, fill: '#1B4F72' },
                  { name: '销售/商务/品牌', yoy: -10, fill: '#E07A5F' },
                  { name: '初级开发岗', yoy: -21, fill: '#E07A5F' },
                  { name: '客户服务', yoy: -23, fill: '#E07A5F' },
                  { name: '基础测试工程师', yoy: -34, fill: '#E07A5F' },
                  { name: '传统运维工程师', yoy: -60, fill: '#E07A5F' },
                  { name: '初级图像算法', yoy: -66.7, fill: '#E07A5F' },
                  { name: '初级机器学习', yoy: -71.4, fill: '#E07A5F' },
                ]}
                title="就业市场的岗位需求同比变化"
                subtitle="数据来源：BOSS直聘、猎聘 | 单位：%"
                bars={[{ dataKey: 'yoy', name: '同比变化', color: '#666' }]}
                xAxisKey="name"
                showYAxis={true}
                yAxisDomain={[-80, 720]}
                yAxisTickFormatter={(val) => `${val}%`}
                unit="%"
                showLabels={false}
                legendOrder={['同比变化']}
                barSize={20}
                xAxisAngle={-45}
                xAxisHeight={100}
                xAxisInterval={0}
              />
              {/* 右上角信息框 */}
              <div className="absolute top-16 right-2 bg-white/95 border border-gray-300 rounded-lg shadow-md p-2 text-xs z-10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-600 whitespace-nowrap">岗位替代（5年）</span>
                  <span className="font-semibold text-red-600 min-w-[4rem] text-right">7000万</span>
                  <div className="w-12 h-3 bg-red-500 rounded-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 whitespace-nowrap">AI重组（3年）</span>
                  <span className="font-semibold text-blue-600 min-w-[4rem] text-right">2100万</span>
                  <div className="w-8 h-3 bg-blue-500 rounded-sm"></div>
                </div>
              </div>
            </div>
          </ChartContainer>

          {/* 第3列：不同工作类型总支出 */}
          <ChartContainer delay="840ms">
            <BaseBarChart
              data={workTypeExpenditureData}
              title="不同工作类型总支出"
              subtitle="数据来源：调查数据 | 单位：元 | 样本量：14967份"
              bars={workTypeExpenditureBars}
              xAxisKey="category"
              showYAxis={true}
              yAxisDomain={[0, 4000]}
              yAxisTickFormatter={(val) => `${val}`}
              unit="元"
              showLabels={true}
              labelFormatter={(val) => `${val}`}
              legendOrder={['总支出']}
              barSize={28}
              xAxisHeight={30}
              xAxisInterval={0}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
