import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';
import { BaseCard } from '../base/BaseCard';
import { chartColors, seriesColors } from '@/utils/chartColors';

// 合并就业数据和灵活就业数据（2020-2026）
const employmentChangeData = [
  { period: '2020', national: 75064, flexible: 1.7 },
  { period: '2021', national: 74652, flexible: 2.0 },
  { period: '2022', national: 73351, flexible: 2.2 },
  { period: '2023', national: 74041, flexible: 2.3 },
  { period: '2024', national: 73439, flexible: 2.4 },
  { period: '2025', national: 72504, flexible: 2.8 },
  { period: '2026(E)', national: 71500, flexible: 3.2 },
];

// 灵活就业预测增长数据
const flexibleGrowthData = [
  { period: '2021', value: 2.0 },
  { period: '2022', value: 2.2 },
  { period: '2023', value: 2.3 },
  { period: '2024', value: 2.4 },
  { period: '2025', value: 2.8 },
  { period: '2026(E)', value: 3.2 },
];

// AI替代岗位数据（短期影响）
const aiReplacementData = [
  { name: '初级机器学习', yoy: -71.4 },
  { name: '初级图像算法', yoy: -66.7 },
  { name: '传统运维工程师', yoy: -60.0 },
  { name: '初级软件测试', yoy: -52.9 },
  { name: '编辑/编校', yoy: -29.0 },
  { name: '客户服务', yoy: -23.0 },
  { name: '视觉交互设计', yoy: -21.0 },
];

// AI创造岗位数据（中长期）
const aiCreationData = [
  { name: 'AI销售行政/商务', yoy: 682.0 },
  { name: '提示词工程师', yoy: 486.8 },
  { name: 'AI工程师', yoy: 317.0 },
  { name: 'AI智能体开发', yoy: 244.0 },
  { name: 'AI产品经理', yoy: 87.7 },
  { name: 'AI创意叙事', yoy: 84.2 },
  { name: 'AI伦理社科', yoy: 78.3 },
];

export const ContentSlide11: React.FC = () => {
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

  return (
    <BaseContentSlide
      title="就业结构变化：总量收缩与AI重塑并行"
      cardColumns={2}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 - 上半部分 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="就业状态变化" delay="0ms" variant="accent">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-600 rounded-full font-bold text-sm">
                  ↓
                </span>
                <div>
                  <p className="text-xs text-gray-600">
                    近五年全国就业人数减少
                  </p>
                  <p className="text-lg font-bold text-red-500">
                    -2600万
                  </p>
                </div>
              </div>
              <div className="border-t border-dashed border-gray-200 pt-3">
                <p className="text-xs text-gray-500 mb-1">灵活就业人员规模</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">2021年</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="font-semibold text-blue-600">2亿人</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-gray-600">2025年</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="font-semibold text-blue-600">2.8亿</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-gray-600">2026年(E)</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="font-bold text-green-600">3.2亿</span>
                </div>
              </div>
              <div className="bg-green-50 px-3 py-2 rounded text-xs text-green-700">
                <span className="font-semibold">增长迅猛：</span>5年增长60%，增速远超整体就业
              </div>
            </div>
          </BaseCard>

          <BaseCard title="AI对岗位类型的影响" delay="120ms">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-500 text-sm font-bold">!</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700">短期替代效应明显</p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    AI可能影响中国约<span className="text-red-500 font-semibold">31%</span>的岗位，
                    未来五年约<span className="text-red-500 font-semibold">7000万</span>岗位面临被替代风险
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    （主要为基础岗位：客服、编辑、基础测试等）
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-500 text-sm font-bold">+</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700">中长期创造效应</p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    上海科技大学研究表明：近三年约有<span className="text-blue-500 font-semibold">2100万</span>个岗位
                    由AI技能任务重组而生
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    未来AI创造新岗位数量有望超过减少的岗位数
                  </p>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        {/* 图表区域 - 下半部分 */}
        <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
          {/* 左侧：全国就业与灵活就业趋势 */}
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={employmentChangeData}
              title="全国就业与灵活就业人员变化"
              subtitle="数据来源：国家统计局 | 左轴：全国就业人员（万人）右轴：灵活就业人员（亿人）"
              bars={employmentBars}
              lines={flexibleEmploymentLines}
              xAxisKey="period"
              showYAxis={true}
              yAxisDomain={[70000, 77000]}
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
              barSize={20}
              xAxisHeight={30}
              xAxisInterval={0}
            />
          </ChartContainer>

          {/* 右侧：AI岗位变化对比 */}
          <div className="h-full flex flex-col gap-2">
            {/* 替代视角 */}
            <div className="flex-1 bg-red-50/50 rounded-lg p-3 border border-red-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-xs font-semibold text-red-700">岗位需求下降（替代视角）</span>
                </div>
                <span className="text-xs text-red-500 font-medium">-7000万(5年)</span>
              </div>
              <div className="space-y-1">
                {aiReplacementData.slice(0, 5).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-gray-600 truncate flex-1">{item.name}</span>
                    <span className="text-red-500 font-medium ml-2">{item.yoy.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 创造视角 */}
            <div className="flex-1 bg-blue-50/50 rounded-lg p-3 border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-xs font-semibold text-blue-700">岗位需求增长（创造视角）</span>
                </div>
                <span className="text-xs text-blue-500 font-medium">+2100万(3年)</span>
              </div>
              <div className="space-y-1">
                {aiCreationData.slice(0, 5).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-gray-600 truncate flex-1">{item.name}</span>
                    <span className="text-blue-500 font-medium ml-2">+{item.yoy.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
