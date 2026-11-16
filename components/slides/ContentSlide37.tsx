import React from 'react';
import { Wallet, Briefcase, Home, ArrowRight } from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

type Tone = 'red' | 'green' | 'blue' | 'amber';
const toneText: Record<Tone, string> = {
  red: 'text-red-600',
  green: 'text-green-600',
  blue: 'text-webank-blue',
  amber: 'text-amber-600',
};

// 二季度归因约束
const constraints: { icon: typeof Wallet; label: string; tone: Tone; body: React.ReactNode }[] = [
  {
    icon: Wallet,
    label: '收入约束',
    tone: 'blue',
    body: (
      <>
        人均可支配收入 2.3 万元、实际 <b className="text-webank-blue">+4.2%</b>，人均消费支出 1.48 万元、实际仅{' '}
        <b className="text-webank-blue">+2.7%</b>，剪刀差走阔、新增收入更多转为储蓄。
      </>
    ),
  },
  {
    icon: Briefcase,
    label: '就业约束',
    tone: 'amber',
    body: (
      <>
        失业率 <b className="text-amber-600">5.0%–5.2%</b>，16–24 岁长期15%；2026 届毕业生
        1270 万创新高，AI 5 年内或替代约 <b className="text-amber-600">7000 万</b>岗位。
      </>
    ),
  },
  {
    icon: Home,
    label: '房价财富效应',
    tone: 'red',
    body: (
      <>
        房地产占居民财富约 <b className="text-red-600">52%</b>，住房贷款连续 <b className="text-red-600">13</b> 个季度负增长；房价跌超
        15% 时，一套房家庭消费降 <b className="text-red-600">11.9%</b>、多套房降 <b className="text-red-600">25.9%</b>。
      </>
    ),
  },
];

// 三季度研究：承接二季度归因，展开的四个消费特点
const dimensions: { num: string; tag: string; title: string; body: string }[] = [
  { num: '①', tag: '特点一', title: '体验与情绪消费', body: '从「占有物品」到「为体验和情绪付费」' },
  { num: '②', tag: '特点二', title: 'AI 参与消费决策', body: 'AI 进入搜索、比价与决策，重塑消费链路' },
  { num: '③', tag: '特点三', title: '精明的消费者', body: '从追求价格到追求性价比' },
  { num: '④', tag: '特点四', title: '健康消费刚性凸显', body: '收缩周期下健康支出的刚性凸显' },
];

export const ContentSlide37: React.FC = () => {
  return (
    <BaseContentSlide
      title={<></>}
      subtitle="2026年三季度宏观经济报告"
      headerClassName="!mb-3"
    >
      <div className="flex flex-col h-full gap-2.5">
        {/* 底部：二季度归因 → 三季度研究四个特点 */}
        <div className="flex-1 min-h-0 flex items-stretch gap-2">
          {/* 左：二季度归因 */}
          <div
            className="flex-1 rounded-lg border border-webank-line bg-white shadow-card p-2.5 flex flex-col gap-1.5 animate-fade-in-up fill-mode-forwards opacity-0"
            style={{ animationDelay: '180ms' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-webank-blue rounded-sm" />
              <h3 className="text-[18px] font-bold text-webank-blue">二季度归因：三重约束压缩总消费大盘</h3>
            </div>
            <div className="flex-1 min-h-0 flex flex-col gap-1.5">
              {constraints.map((c) => (
                <div key={c.label} className="flex-1 flex items-start gap-2 rounded-md bg-slate-50 px-2 py-1.5">
                  <c.icon size={15} className={`${toneText[c.tone]} mt-0.5 flex-shrink-0`} />
                  <div className="min-w-0">
                    <p className={`text-[16px] font-bold leading-tight ${toneText[c.tone]}`}>{c.label}</p>
                    <p className="text-[16px] leading-snug text-slate-600 mt-0.5">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 中：承接箭头 二季度 → 三季度 */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-12 gap-0.5">
            <span className="text-[14px] font-semibold text-webank-subtext text-center leading-tight">
              二季度
              <br />
              归因
            </span>
            <div className="my-0.5 w-9 h-9 rounded-full bg-webank-accent text-white flex items-center justify-center shadow-md">
              <ArrowRight size={18} />
            </div>
            <span className="text-[14px] font-semibold text-webank-accent text-center leading-tight">
              三季度
              <br />
              研究
            </span>
          </div>

          {/* 右：三季度研究四个特点 */}
          <div
            className="flex-[1.15] rounded-lg border border-webank-line bg-gradient-to-br from-[#eef4fb] via-white to-white shadow-card p-2.5 flex flex-col gap-1 animate-fade-in-up fill-mode-forwards opacity-0"
            style={{ animationDelay: '240ms' }}
          >
            <div className="flex items-center gap-2">
              <span className="w-1 h-3.5 bg-webank-accent rounded-sm" />
              <h3 className="text-[18px] font-bold text-webank-blue">三季度研究：消费趋势的四个特点</h3>
            </div>
            <p className="text-[15px] text-webank-subtext leading-tight pl-3 -mt-0.5">
              承接二季度归因，我们继续研究到三季度 →
            </p>
            <div className="flex-1 min-h-0 flex flex-col gap-1.5 pt-0.5">
              {dimensions.map((d) => (
                <div
                  key={d.num}
                  className="flex-1 group flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1"
                >
                  <span className="flex items-center justify-center w-7 h-7 flex-shrink-0 rounded-md bg-gradient-to-br from-webank-accent to-webank-blue text-white text-[16px] font-bold">
                    {d.num}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="text-[18px] font-bold text-webank-blue leading-tight truncate">{d.title}</p>
                      <span className="flex-shrink-0 rounded bg-webank-accent/10 text-webank-accent text-[14px] font-semibold px-1 py-0.5 leading-none">
                        {d.tag}
                      </span>
                    </div>
                    <p className="text-[15px] leading-snug text-slate-500 mt-0.5 truncate">{d.body}</p>
                  </div>
                  <ArrowRight size={13} className="flex-shrink-0 text-slate-300 group-hover:text-webank-accent transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
