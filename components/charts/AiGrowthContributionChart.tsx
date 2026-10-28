import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import {
  realizationPeriodData,
  jCurveStages,
  frictionItems,
} from '@/data/aiGrowthJCurve';

const StageCallout: React.FC<{
  title: string;
  items: readonly string[];
  className?: string;
}> = ({ title, items, className }) => (
  <div className={className}>
    <p className="font-bold text-webank-blue text-[12px] leading-tight mb-0.5">{title}</p>
    <ul className="space-y-0">
      {items.map((item) => (
        <li key={item} className="text-[10px] leading-[1.25] text-slate-600 flex gap-0.5">
          <span className="text-webank-accent shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** AI净增长贡献：J曲线 + 兑现周期 */
export const AiGrowthContributionChart: React.FC = () => {
  const barData = realizationPeriodData.map((d) => ({
    tech: d.tech,
    years: d.years,
    highlight: d.highlight,
    display: 'label' in d ? d.label : `~${d.years}年`,
  }));

  return (
    <div className="h-full flex flex-col min-h-0 overflow-hidden border border-webank-line/60 rounded-card bg-white p-2.5">
      {/* 主图区：J曲线 + 兑现周期 + 变化原因 */}
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_340px_280px] gap-3">
        {/* J 曲线 SVG */}
        <div className="relative min-h-0 h-full">
          <svg
            viewBox="0 0 640 280"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            aria-label="AI生产率J曲线：先下行穿越转型摩擦，再加速上行"
          >
            {/* 坐标轴 */}
            <line x1="48" y1="18" x2="48" y2="230" stroke="#94a3b8" strokeWidth="1" />
            <line x1="48" y1="230" x2="520" y2="230" stroke="#94a3b8" strokeWidth="1" />
            {/* 0 线 */}
            <line
              x1="48"
              y1="148"
              x2="500"
              y2="148"
              stroke="#ef4444"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <text x="36" y="152" textAnchor="end" fill="#ef4444" fontSize="12" fontWeight="600">
              0
            </text>
            <text
              x="20"
              y="120"
              fill="#64748b"
              fontSize="12"
              transform="rotate(-90 20 120)"
              textAnchor="middle"
            >
              生产率/潜在增长
            </text>
            <text x="280" y="250" textAnchor="middle" fill="#64748b" fontSize="12">
              时间
            </text>

            {/* 转型摩擦阴影区（曲线下方至0线） */}
            <defs>
              <linearGradient id="frictionFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#005c8f" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#005c8f" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* 摩擦区示意矩形 */}
            <rect
              x="130"
              y="148"
              width="210"
              height="58"
              fill="url(#frictionFill)"
              rx="2"
            />
            <text x="235" y="178" textAnchor="middle" fill="#005c8f" fontSize="12" fontWeight="700">
              转型摩擦
            </text>

            {/* J 曲线：起点略高于0 → 下穿摩擦区 → 陡峭上行 */}
            <path
              d="M 55 128
                 C 95 132, 120 138, 145 155
                 C 175 178, 210 198, 255 205
                 C 295 210, 320 200, 345 175
                 C 375 140, 400 110, 440 78
                 C 475 50, 500 35, 530 22"
              fill="none"
              stroke="#005c8f"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* 末端箭头 */}
            <polygon points="528,14 542,20 528,30" fill="#005c8f" />

            {/* 阶段标注锚点 */}
            <circle cx="120" cy="140" r="3.5" fill="#005c8f" />
            <circle cx="255" cy="205" r="3.5" fill="#005c8f" />
            <circle cx="400" cy="114" r="3.5" fill="#005c8f" />
            <circle cx="480" cy="49" r="3.5" fill="#005c8f" />
          </svg>

          {/* HTML 叠加标注（比纯 SVG 文字更易排版） */}
          <div className="absolute inset-0 pointer-events-none">
            <StageCallout
              title={jCurveStages[0].title}
              items={jCurveStages[0].items}
              className="absolute left-[18%] top-[36%] w-[28%] bg-white/80 rounded px-1 py-0.5"
            />
            <div className="absolute left-[22%] top-[52%] w-[30%] bg-white/75 rounded px-1 py-0.5">
              <p className="font-bold text-webank-blue text-[11px] mb-0.5">转型摩擦</p>
              <ul className="space-y-0">
                {frictionItems.map((item) => (
                  <li key={item} className="text-[10px] leading-[1.2] text-slate-600 flex gap-0.5">
                    <span className="text-webank-accent shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <StageCallout
              title={jCurveStages[1].title}
              items={jCurveStages[1].items}
              className="absolute left-[42%] bottom-[14%] w-[26%] bg-white/80 rounded px-1 py-0.5"
            />
            <StageCallout
              title={jCurveStages[2].title}
              items={jCurveStages[2].items}
              className="absolute left-[58%] top-[28%] w-[26%] bg-white/80 rounded px-1 py-0.5"
            />
            <StageCallout
              title={jCurveStages[3].title}
              items={jCurveStages[3].items}
              className="absolute left-[70%] top-[4%] w-[24%] bg-white/80 rounded px-1 py-0.5"
            />
          </div>
        </div>

        {/* 兑现周期横向柱状图 */}
        <div className="flex flex-col min-h-0">
          <p className="text-[14px] font-bold text-webank-blue mb-1 flex-shrink-0">兑现周期</p>
          <p className="text-[10px] text-slate-500 leading-tight mb-1 flex-shrink-0">
            技术出现 → 宏观生产率兑现
          </p>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                layout="vertical"
                margin={{ top: 4, right: 204, left: 0, bottom: 4 }}
                barCategoryGap="18%"
              >
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis
                  type="category"
                  dataKey="tech"
                  width={88}
                  tick={{ fontSize: 11, fill: '#334155' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="years" barSize={12} radius={[0, 2, 2, 0]}>
                  {barData.map((entry) => (
                    <Cell
                      key={entry.tech}
                      fill={entry.highlight ? '#ef4444' : '#E8B923'}
                    />
                  ))}
                  <LabelList
                    dataKey="display"
                    position="right"
                    content={(props: any) => {
                      const { x, y, width, value, index } = props;
                      const isHighlight = barData[index]?.highlight;
                      if (!isHighlight) {
                        return (
                          <text
                            x={x + width + 6}
                            y={y}
                            fill="#334155"
                            fontSize={11}
                            fontWeight={600}
                            dominantBaseline="central"
                          >
                            {value}
                          </text>
                        );
                      }
                      // "本轮"行：数字 + 红色箭头指向右侧原因卡片
                      const labelX = x + width + 6;
                      return (
                        <g>
                          <text
                            x={labelX}
                            y={y}
                            fill="#ef4444"
                            fontSize={11}
                            fontWeight={700}
                            dominantBaseline="central"
                          >
                            {value}
                          </text>
                          <line
                            x1={labelX + 62}
                            y1={y}
                            x2={labelX + 152}
                            y2={y}
                            stroke="#ef4444"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <polygon
                            points={`${labelX + 152},${y - 4} ${labelX + 164},${y} ${labelX + 152},${y + 4}`}
                            fill="#ef4444"
                          />
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[9px] text-slate-400 leading-tight mt-0.5 flex-shrink-0">
            数据来源：Nicholas Crafts(2004)、MGI、华泰研究
          </p>
        </div>

        {/* 本轮兑现周期更短的原因 */}
        <div className="flex flex-col min-h-0 rounded-lg border border-sky-200 bg-gradient-to-b from-sky-50 to-blue-50/60 p-2.5 overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2 flex-shrink-0">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-webank-accent text-white text-[12px] font-bold leading-none">
              ?
            </span>
            <p className="text-[15px] font-bold text-webank-blue leading-tight">
              本轮兑现更快的 3 个原因
            </p>
          </div>

          <ol className="space-y-2 flex-1 min-h-0 text-[13px] leading-relaxed text-slate-700">
            <li className="flex gap-2">
              <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-webank-accent/15 text-webank-accent text-[12px] font-bold leading-none mt-[1px]">
                1
              </span>
              <span>
                <span className="font-semibold text-webank-blue">软件天然已扩散</span>
                ，无需重新铺设物理网络。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-webank-accent/15 text-webank-accent text-[12px] font-bold leading-none mt-[1px]">
                2
              </span>
              <span>
                <span className="font-semibold text-webank-blue">基础设施并非从零起步</span>
                ，AI 可借力既有云、算力网络和宽带部署。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-webank-accent/15 text-webank-accent text-[12px] font-bold leading-none mt-[1px]">
                3
              </span>
              <span>
                <span className="font-semibold text-webank-blue">部分落地场景已明确</span>
                ：搜索、客服、编程等已产生可量化收益。
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
