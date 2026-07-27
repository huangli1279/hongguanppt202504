import React from 'react';
import { Landmark, Globe2, Compass, CloudRain } from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

const timelineColumns = [
  {
    period: '4月底',
    title: '政治局会议',
    icon: Landmark,
    items: [
      { label: '积极财政', text: '需求侧推动消费升级，加快“六张网”新型基础设施建设' },
      { label: '产业端', text: '稳住制造业比重，推进“人工智能+”行动' },
      { label: '风险领域', text: '稳房地产、有序化解地方债务、提振资本市场信心' },
      { label: '需关注', text: '扩大有效投资、培育新动能；关注7月底会议是否有更新' },
    ],
  },
  {
    period: '二季度',
    title: '美以伊冲突持续发酵',
    icon: Globe2,
    items: [
      { label: '冲突脉络', text: '二季度呈现“休战—再开战”反复扰动，地缘风险持续发酵' },
      { label: '市场冲击', text: '能源与航运成本波动，输入性通胀与风险偏好承压' },
      { label: '时间线要点', text: '休战后再度升级，外部冲击扰动国内稳增长与物价预期' },
    ],
  },
  {
    period: '二季度',
    title: '十五五专项规划落地推进',
    icon: Compass,
    items: [
      { label: '绿色与能源', text: '《美丽中国》《新型能源体系》十五五规划印发，统筹碳减排与风光储能' },
      { label: '科教民生', text: '《教育发展“十五五”规划》审议通过；就业、健康、一老一小仍在编制' },
      { label: '产业与基建', text: 'AI等专项暂未印发；8000亿“两重”超长期特别国债项目清单全部下达' },
      { label: '内需消费', text: '《扩大消费“十五五”规划》二季度送审，7月获批；增收方案仍在研究' },
    ],
  },
  {
    period: '二季度',
    title: '台风及洪涝等灾害',
    icon: CloudRain,
    items: [
      { label: '广西台风', text: '“美莎克”台风洪灾，直接经济损失约221.8亿元' },
      { label: '汛期提前', text: '2026年汛期显著提前，广东阳江、湖北恩施等地特大暴雨洪涝' },
      { label: '财政应对', text: '中央及地方财政及时拨付救灾与灾后重建资金，托底民生与重建' },
    ],
  },
];

export const ContentSlide03: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          二季度关键事件与<span className="text-webank-accent">政策主线</span>
        </>
      }
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-5 h-full">
        {timelineColumns.map((column, index) => {
          const Icon = column.icon;
          return (
            <BaseCard
              key={`${column.period}-${column.title}`}
              variant="subtle"
              animated
              className="h-full p-0 gap-0 overflow-hidden"
            >
              <div
                className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-200/80 bg-gradient-to-r from-webank-accent/5 to-transparent"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-webank-accent/10 text-webank-accent shrink-0">
                  <Icon size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold tracking-[0.15em] text-webank-accent uppercase mb-0.5">
                    {column.period}
                  </div>
                  <h3 className="text-[15px] font-bold text-webank-blue leading-tight line-clamp-2">
                    {column.title}
                  </h3>
                </div>
              </div>

              <div className="flex-1 px-5 py-6 grid grid-cols-2 gap-x-4 gap-y-3 content-start">
                {column.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-3 text-[12px] leading-relaxed text-webank-text"
                  >
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-webank-accent shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-webank-blue text-[12px] mb-0.5">
                        {item.label}
                      </div>
                      <p className="text-slate-600 text-[12px] leading-snug">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </BaseCard>
          );
        })}
      </div>
    </BaseContentSlide>
  );
};
