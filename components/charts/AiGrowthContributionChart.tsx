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
  aiNetGrowthFormula,
  realizationPeriodData,
  jCurveStages,
  frictionItems,
  singularityItems,
  fourCycleForecast,
  cycleNote,
} from '@/data/aiGrowthJCurve';

const StageCallout: React.FC<{
  title: string;
  items: readonly string[];
  className?: string;
}> = ({ title, items, className }) => (
  <div className={className}>
    <p className="font-bold text-webank-blue text-[10px] leading-tight mb-0.5">{title}</p>
    <ul className="space-y-0">
      {items.map((item) => (
        <li key={item} className="text-[8px] leading-[1.25] text-slate-600 flex gap-0.5">
          <span className="text-webank-accent shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** AI净增长贡献：J曲线 + 兑现周期 + 四周期预测 */
export const AiGrowthContributionChart: React.FC = () => {
  const barData = realizationPeriodData.map((d) => ({
    tech: d.tech,
    years: d.years,
    highlight: d.highlight,
    display: 'label' in d ? d.label : `~${d.years}年`,
  }));

  return (
    <div className="h-full flex flex-col min-h-0 overflow-hidden border border-webank-line/60 rounded-card bg-white p-2.5">
      {/* 公式标题 */}
      <p className="text-[10px] leading-snug text-webank-blue font-semibold mb-1.5 flex-shrink-0">
        {aiNetGrowthFormula}
      </p>

      {/* 主图区：J曲线 + 兑现周期 */}
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_148px] gap-2">
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
            <text x="36" y="152" textAnchor="end" fill="#ef4444" fontSize="9" fontWeight="600">
              0
            </text>
            <text
              x="20"
              y="120"
              fill="#64748b"
              fontSize="9"
              transform="rotate(-90 20 120)"
              textAnchor="middle"
            >
              生产率/潜在增长
            </text>
            <text x="280" y="248" textAnchor="middle" fill="#64748b" fontSize="9">
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
            <text x="235" y="178" textAnchor="middle" fill="#005c8f" fontSize="9" fontWeight="700">
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
              className="absolute left-[6%] top-[2%] w-[28%] bg-white/80 rounded px-1 py-0.5"
            />
            <div className="absolute left-[22%] top-[52%] w-[26%] bg-white/75 rounded px-1 py-0.5">
              <p className="font-bold text-webank-blue text-[9px] mb-0.5">转型摩擦</p>
              <ul className="space-y-0">
                {frictionItems.map((item) => (
                  <li key={item} className="text-[8px] leading-[1.2] text-slate-600 flex gap-0.5">
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
              className="absolute left-[72%] top-[2%] w-[22%] bg-white/80 rounded px-1 py-0.5"
            />
            <div className="absolute right-[1%] top-[8%] w-[16%]">
              <p className="font-bold text-webank-blue text-[10px] leading-tight">增长奇点?</p>
              {singularityItems.map((item) => (
                <p key={item} className="text-[8px] text-slate-600 leading-tight">
                  · {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 兑现周期横向柱状图 */}
        <div className="flex flex-col min-h-0 border-l border-webank-line/50 pl-2">
          <p className="text-[10px] font-bold text-webank-blue mb-1 flex-shrink-0">兑现周期</p>
          <p className="text-[8px] text-slate-500 leading-tight mb-1 flex-shrink-0">
            技术出现 → 宏观生产率兑现
          </p>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barData}
                layout="vertical"
                margin={{ top: 4, right: 36, left: 0, bottom: 4 }}
                barCategoryGap="18%"
              >
                <XAxis type="number" domain={[0, 80]} hide />
                <YAxis
                  type="category"
                  dataKey="tech"
                  width={44}
                  tick={{ fontSize: 9, fill: '#334155' }}
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
                    style={{ fontSize: 9, fill: '#334155', fontWeight: 600 }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[7px] text-slate-400 leading-tight mt-0.5 flex-shrink-0">
            数据来源：Nicholas Crafts(2004)、MGI、华泰研究
          </p>
        </div>
      </div>

      {/* 四周期预测 */}
      <div className="flex-shrink-0 mt-1.5 pt-1.5 border-t border-webank-line/60 grid grid-cols-[1fr_160px] gap-2">
        <div>
          <p className="text-[10px] font-bold text-webank-blue mb-1">四周期预测</p>
          <div className="space-y-1">
            {fourCycleForecast.map((cycle) => (
              <div key={cycle.title} className="flex items-center gap-1.5">
                <div
                  className="h-3.5 rounded-sm bg-[#E8B923]/85 flex items-center px-1.5 shrink-0"
                  style={{ width: cycle.width, minWidth: '72px' }}
                >
                  <span className="text-[8px] font-semibold text-webank-blue whitespace-nowrap truncate">
                    {cycle.title}
                  </span>
                </div>
                <p className="text-[8px] text-slate-600 leading-tight min-w-0">
                  <span className="font-semibold text-webank-blue">观察：</span>
                  {cycle.observe}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-webank-accent/5 border border-webank-accent/20 rounded px-1.5 py-1 self-stretch">
          <p className="text-[8px] leading-snug text-slate-600">{cycleNote}</p>
        </div>
      </div>
    </div>
  );
};
