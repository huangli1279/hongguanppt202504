import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { seriesColors } from '../../utils/chartColors';

const specialBondData = [
  { period: '2025-01', planned: 1686, actual: 2048, completion: 1.21 },
  { period: '2025-02', planned: 3503, actual: 3920, completion: 1.12 },
  { period: '2025-03', planned: 3383, actual: 3635, completion: 1.07 },
  { period: '2025-04', planned: 3293, actual: 2301, completion: 0.70 },
  { period: '2025-05', planned: 3598, actual: 4432, completion: 1.23 },
  { period: '2025-06', planned: 5147, actual: 5271, completion: 1.02 },
  { period: '2025-07', planned: 6440, actual: 6169, completion: 0.96 },
  { period: '2025-08', planned: 5122, actual: 4890, completion: 0.95 },
  { period: '2025-09', planned: 3412, actual: 4191, completion: 1.23 },
  { period: '2025-10', planned: 2755, actual: 2949, completion: 1.07 },
  { period: '2025-11', planned: 3222, actual: 4922, completion: 1.53 },
  { period: '2025-12', planned: 584, actual: 1349, completion: null },
  { period: '2026-01', planned: 3221, actual: 3677, completion: 1.14 },
  { period: '2026-02', planned: 2691, actual: 4565, completion: 1.70 },
  { period: '2026-03', planned: 3349, actual: 3357, completion: 1.00 },
  { period: '2026-04', planned: 3073, actual: 1744, completion: 0.57 },
  { period: '2026-05', planned: 2764, actual: 1608, completion: 0.58 },
  { period: '2026-06', planned: 4300, actual: 5716, completion: 1.33 },
  { period: '2026-07', planned: 3276.57, actual: 3412, completion: 1.04 },
  { period: '2026-08', planned: 5617.42, actual: 5213, completion: 0.93 },
  { period: '2026-09', planned: 4121.88, actual: 6339, completion: 1.54 },
];

const specialBondCompositionData = [
  { period: '2025-01', special: 7, land: 0, other: 93, amount: 2048 },
  { period: '2025-02', special: 17, land: 8, other: 75, amount: 3920 },
  { period: '2025-03', special: 10, land: 0, other: 90, amount: 3635 },
  { period: '2025-04', special: 8, land: 12, other: 80, amount: 2301 },
  { period: '2025-05', special: 23, land: 10, other: 67, amount: 4432 },
  { period: '2025-06', special: 21, land: 34, other: 45, amount: 5271 },
  { period: '2025-07', special: 5, land: 46, other: 49, amount: 6169 },
  { period: '2025-08', special: 4, land: 52, other: 44, amount: 4890 },
  { period: '2025-09', special: 12, land: 50, other: 38, amount: 4191 },
  { period: '2025-10', special: 5, land: 43, other: 52, amount: 2949 },
  { period: '2025-11', special: 32, land: 5, other: 63, amount: 4922 },
  { period: '2025-12', special: 17, land: 14, other: 69, amount: 1349 },
  { period: '2026-01', special: 10, land: 5, other: 85, amount: 3677 },
  { period: '2026-02', special: 25, land: 0, other: 75, amount: 4565 },
  { period: '2026-03', special: 10, land: 21, other: 69, amount: 3357 },
  { period: '2026-04', special: 8, land: 24, other: 68, amount: 1744 },
  { period: '2026-05', special: 4, land: 23, other: 73, amount: 1608 },
  { period: '2026-06', special: 34, land: 11, other: 55, amount: 5716 },
  { period: '2026-07', special: 20, land: 46, other: 34, amount: 3412 },
  { period: '2026-08', special: 14, land: 47, other: 39, amount: 5213 },
  { period: '2026-09', special: 10, land: 29, other: 61, amount: 6339 },
];

export const ContentSlide19: React.FC = () => (
  <BaseContentSlide title="专项债提速，多元工具协同稳投资" cardColumns={2}>
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
        <BaseCard title="三季度资金端明显加力" variant="accent" delay="0ms">
          <p>
            1—9月新增专项债发行<span className="font-semibold">3.56万亿元</span>、进度<span className="font-semibold">81%</span>，9月同比多增<span className="font-semibold">2,148亿元</span>，叠加特别国债、政策性金融工具等多元工具协同。但专项债中化债、土储等非直接投资类占比仍处高位，“资金到位→实物工作量”的传导存在时滞，四季度是验证窗口。
          </p>
        </BaseCard>
        <BaseCard title="专项债相关情况" delay="120ms">
          <p>
            <span className="font-semibold">发行提速。</span>1—9月全国发行新增专项债35,608亿元，发行进度81%，快于时间进度；9月单月发行6,339亿元、同比多增2,148亿元，提速最为明显。
          </p>
          <p className="mt-2">
            <span className="font-semibold">多元工具协同。</span>超长期特别国债1.3万亿元收官（10月16日）：8,000亿元支持“两重”建设、2,500亿元支持消费品以旧换新、2,000亿元支持大规模设备更新。新型政策性金融工具8,000亿元9月开闸，投放超1,000亿元，涉及项目总投资约2.1万亿元，有效补充项目资本金；截至10月28日已全部投放完毕，涉及项目总投资约11万亿元。PSL降息扩围，“六张网”纳入支持；地方债结存限额5,500亿元（其中专项债2,500亿元）向经济大省倾斜，可用作项目资本金。
          </p>
        </BaseCard>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
        <ChartContainer delay="600ms">
          <BaseBarChart
            data={specialBondData}
            title="图1 专项债发行计划与实际发行"
            subtitle="数据来源：公开资料整理 | 单位：亿元；完成率为实际发行/计划发行"
            bars={[
              { dataKey: 'planned', name: '计划发行', color: seriesColors[1] },
              { dataKey: 'actual', name: '实际发行额', color: seriesColors[3] },
            ]}
            lines={[{ dataKey: 'completion', name: '完成率', color: '#8A8A8A', yAxisId: 'right', unit: '', dotsOnly: true }]}
            showYAxis={true}
            yAxisDomain={[0, 7000]}
            showLineYAxis={true}
            lineAxisDomain={[0, 2.4]}
            lineYAxisWidth={34}
            lineYAxisTickFormatter={(value) => Number(value).toFixed(1)}
            showReferenceLine={false}
            legendOrder={['计划发行', '实际发行额', '完成率']}
            unit="亿元"
            lineUnit=""
            lineShowDot={true}
            showLabels={false}
            barSize={7}
            barCategoryGap="18%"
            xAxisAngle={-55}
            xAxisHeight={55}
            xAxisTickFontSize={9}
            xAxisTickFormatter={(value) => String(value).slice(2)}
          />
        </ChartContainer>
        <ChartContainer delay="720ms">
          <BaseBarChart
            data={specialBondCompositionData}
            title="图2 专项债资金投向结构"
            subtitle="备注：土地储备专项债用于收储土地，不直接计入当期固定资产投资；特殊新增专项债主要用于置换隐性债务及清欠。"
            bars={[
              { dataKey: 'special', name: '特殊新增专项债占比', color: '#B85E5B', stackId: 'stack' },
              { dataKey: 'land', name: '土地储备专项债占比', color: '#8CB27A', stackId: 'stack' },
              { dataKey: 'other', name: '其他', color: '#8B7BA8', stackId: 'stack' },
            ]}
            lines={[{ dataKey: 'amount', name: '专项债金额', color: seriesColors[1], yAxisId: 'right', unit: '亿元', strokeWidth: 2 }]}
            yAxisDomain={[0, 105]}
            showYAxis={true}
            yAxisTickFormatter={(value) => `${value}%`}
            showLineYAxis={true}
            lineAxisDomain={[0, 7000]}
            lineYAxisWidth={36}
            lineUnit="亿元"
            lineYAxisTickFormatter={(value) => `${value}`}
            showReferenceLine={false}
            legendOrder={['特殊新增专项债占比', '土地储备专项债占比', '其他', '专项债金额']}
            unit="%"
            lineShowDot={true}
            showLabels={false}
            barSize={12}
            barCategoryGap="18%"
            xAxisAngle={-55}
            xAxisHeight={55}
            xAxisTickFontSize={9}
            xAxisTickFormatter={(value) => String(value).slice(2)}
          />
        </ChartContainer>
      </div>
    </div>
  </BaseContentSlide>
);
