import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { chartColors, industryColors, seriesColors } from '@/utils/chartColors';
import {
  gdpGrowthRecentData as gdpGrowthData,
  gdpCumulativeYoyData as gdpCumulativeData,
  deflatorRecentData as deflatorData,
} from '../../data';

/* ---------------------------------------------------------------------------
 * 右上角「中国宏观」线框地球徽标
 * 采用正射投影生成经纬网，金色系以衬托藏青主色，作为装饰性章节徽标
 * ------------------------------------------------------------------------- */

const GLOBE_VIEW = 200;
const GLOBE_CENTER = 100;
const GLOBE_R = 92;

const MacroGlobe: React.FC<{ size?: number }> = ({ size = 94 }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${GLOBE_VIEW} ${GLOBE_VIEW}`}
    fill="none"
    aria-hidden="true"
    className="flex-shrink-0"
  >
    <defs>
      <linearGradient id="macroGlobeStroke" x1="0.15" y1="0" x2="0.55" y2="1">
        <stop offset="0%" stopColor="#EAD2A4" />
        <stop offset="42%" stopColor="#CBA24E" />
        <stop offset="100%" stopColor="#8C6220" />
      </linearGradient>
      <radialGradient id="macroGlobeHalo" cx="42%" cy="34%" r="70%">
        <stop offset="0%" stopColor="#E7C98E" stopOpacity="0.14" />
        <stop offset="68%" stopColor="#C9A24E" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#8C6220" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx={GLOBE_CENTER} cy={GLOBE_CENTER} r={GLOBE_R} fill="url(#macroGlobeHalo)" />

    <g
      stroke="url(#macroGlobeStroke)"
      fill="none"
      strokeWidth="1.8"
      strokeOpacity="0.62"
      transform="rotate(-15 100 100)"
    >
      {/* 外层经线：由窄到宽展开，保留球体表面的立体感 */}
      <ellipse cx={GLOBE_CENTER} cy={GLOBE_CENTER} rx={24} ry={GLOBE_R} />
      <ellipse cx={GLOBE_CENTER} cy={GLOBE_CENTER} rx={42} ry={GLOBE_R} />
      <ellipse cx={GLOBE_CENTER} cy={GLOBE_CENTER} rx={62} ry={GLOBE_R} />
      {/* 外层纬线：围绕赤道分布，避免形成密集网格 */}
      <ellipse cx={GLOBE_CENTER} cy={GLOBE_CENTER} rx={GLOBE_R} ry={20} />
      <ellipse cx={GLOBE_CENTER} cy={GLOBE_CENTER} rx={GLOBE_R} ry={38} />
      <ellipse cx={GLOBE_CENTER} cy={GLOBE_CENTER} rx={GLOBE_R} ry={54} />
    </g>

    <circle
      cx={GLOBE_CENTER}
      cy={GLOBE_CENTER}
      r={GLOBE_R}
      stroke="url(#macroGlobeStroke)"
      strokeWidth="2.7"
      strokeOpacity="0.95"
      fill="none"
    />
  </svg>
);

// 备份：右上角「中国宏观」徽标组件（当前未使用，保留以便日后恢复）
export const MacroEmblem: React.FC = () => (
  <div
    className="flex items-center gap-2 flex-shrink-0 animate-fade-in"
    style={{ animationDelay: '0.5s', marginTop: -50, marginRight: -40 }}
  >
    <div className="text-right" style={{ lineHeight: 1 }}>
      <div
        className="font-sans"
        style={{
          fontSize: 8,
          letterSpacing: '0.32em',
          marginRight: '-0.32em',
          color: '#B0863A',
          fontWeight: 600,
          textTransform: 'uppercase',
          marginBottom: 4,
        }}
      >
        China Macro
      </div>
      <div
        style={{
          fontFamily: '"Noto Serif SC", Georgia, serif',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.1em',
          marginRight: '-0.1em',
          color: '#051c2c',
        }}
      >
        中国宏观
      </div>
    </div>

    <span
      aria-hidden="true"
      style={{
        width: 1,
        alignSelf: 'stretch',
        minHeight: 34,
        margin: '4px 0',
        background: 'linear-gradient(180deg, rgba(203,162,78,0), #C9A24E 45%, rgba(203,162,78,0))',
      }}
    />

    <MacroGlobe size={48} />
  </div>
);

export const ContentSlide04: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          三季度GDP增速回升至4.5%，
          <span className="text-webank-accent">平减指数连续两季回正</span>
        </>
      }
      // 右上角「中国宏观」徽标已暂时隐藏；组件代码仍保留在本文件顶部作为备份，需要时取消下一行注释即可恢复
      // headerChild={<MacroEmblem />}
    >
      <div className="flex flex-col h-full min-h-0 gap-3">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-shrink-0">
          <BaseCard title="GDP增速回升" delay="0ms" variant="accent">
            <p>
              在中东冲突推高油价、国际机构普遍下调主要经济体三季度增速的背景下，2026年三季度GDP <span>37.54万亿（现价）</span>，同比增长 <span className="font-bold text-red-600">4.5%</span>（不变价），较二季度 <span>4.3%</span> 回升，主要受出口高增及工业增加值增长带动。
            </p>
            <p className="mt-1">
              前三季度GDP增速达 <span className="font-bold text-red-600">4.6%</span>，处于全年"4.5%-5.0%"目标区间。
            </p>
          </BaseCard>

          <BaseCard title="平减指数回正" delay="120ms">
            <p>
              三季度 GDP 名义增速 <span className="text-red-600 font-semibold">6%</span>、实际增速 <span className="font-bold text-red-600">4.5%</span>，平减指数 <span className="font-bold text-red-600">1.44%</span> 连续两个季度维持回正。
              核心由 AI 产业链景气扩张、能源价格上行拉动，延续二季度行业集中、局部产业景气的态势。
              
            </p>
          </BaseCard>
        </section>

        <section className="flex-1 min-h-0 grid grid-cols-3 gap-3 sm:gap-4">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={gdpGrowthData}
              title="GDP当季同比：不变价与现价"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[0, 8]}
              showYAxis
              xAxisTickCount={gdpGrowthData.length}
              legendOrder={['GDP不变价', 'GDP现价']}
              highlightPeriods={['2026-06', '2026-09']}
              categoryGroups={[
                {
                  label: '回升↑',
                  x1: '2026-06',
                  x2: '2026-09',
                  stroke: 'transparent',
                  fill: 'transparent',
                  fillOpacity: 0,
                  labelFill: '#ef4444',
                  labelPosition: 'insideTop',
                  labelDy: 80,
                },
              ]}
              lines={[
                {
                  dataKey: 'real',
                  name: 'GDP不变价',
                  strokeWidth: 2,
                  labelPosition: 'top',
                  labelDY: 3,
                  pointOffsets: { '2026-06': 18 },
                },
                { dataKey: 'nominal', name: 'GDP现价', strokeWidth: 2, labelPosition: 'bottom', labelDY: 3, hiddenLabelPeriods: ['2026-06'] },
              ]}
            />
          </ChartContainer>

          <ChartContainer delay="720ms">
            <BaseLineChart
              data={gdpCumulativeData}
              title="GDP累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[4, 6]}
              showYAxis
              xAxisTickCount={gdpCumulativeData.length}
              legendOrder={['GDP累计同比']}
              highlightPeriods={['2026-03', '2026-06', '2026-09']}
              lines={[
                {
                  dataKey: 'value',
                  name: 'GDP累计同比',
                  color: chartColors.primary,
                  strokeWidth: 2,
                  labelPosition: 'top',
                  labelDY: 3,
                  pointOffsets: { '2026-03': -8, '2026-06': 18 },
                },
              ]}
            />
          </ChartContainer>

          <ChartContainer delay="840ms">
            <BaseLineChart
              data={deflatorData}
              title="GDP平减指数：整体与三大产业"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[-5, 4]}
              showYAxis
              xAxisTickCount={deflatorData.length}
              showReferenceLine
              referenceLineY={0}
              legendOrder={['整体', '第一产业', '第二产业', '第三产业']}
              lines={[
                { dataKey: 'overall', name: '整体', color: '#dc2626', strokeWidth: 2, labelPosition: 'top', labelDY: 3 },
                { dataKey: 'primary', name: '第一产业', color: industryColors.primary, strokeWidth: 2, labelPosition: 'bottom', labelDY: 3 },
                { dataKey: 'secondary', name: '第二产业', color: seriesColors[3], strokeWidth: 2, labelPosition: 'top', labelDY: 3 },
                { dataKey: 'tertiary', name: '第三产业', color: industryColors.tertiary, strokeWidth: 2, labelPosition: 'top', labelDY: 3 },
              ]}
            />
          </ChartContainer>
        </section>
      </div>
    </BaseContentSlide>
  );
};
