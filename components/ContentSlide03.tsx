import React from 'react';
import { Calendar, Globe2, Landmark, Compass } from 'lucide-react';
import { BaseContentSlide } from './BaseContentSlide';
import { BaseCard } from './BaseCard';

const timelineColumns = [
  {
    period: '2月',
    title: '史上最长春节',
    icon: Calendar,
    items: [
      { label: '消费端', text: '消费拉动，服务消费大增' },
      { label: '生产端', text: '节前赶工' },
      { label: '出口端', text: '抢出口' },
    ],
  },
  {
    period: '2月底',
    title: '美以伊冲突（外部冲击）',
    icon: Globe2,
    items: [
      { label: '能源与通胀', text: '油价、天然气价格上涨，间接抬升食品、化肥、燃油价格，通胀抬升' },
      { label: '全球流动性', text: '市场避险情绪升温，美元降息预期下降' },
      { label: '供应链', text: '航运/物流成本上升，对出口企业、制造业企业的成本端造成二次冲击' },
    ],
  },
  {
    period: '3月',
    title: '两会（政策定调）',
    icon: Landmark,
    items: [
      { label: '增长目标', text: 'GDP增速目标4.5%-5%（历史首次低于5%），CPI涨幅约2%，政策更重质量而非速度' },
      { label: '宏观政策', text: '更积极的财政政策 + 适度宽松的货币政策' },
      { label: '重点方向', text: '提振消费专项行动、培育壮大新能源、科技自立自强、整治"内卷式"竞争开局之年' },
    ],
  },
  {
    period: '3月',
    title: '"十五五"规划落地（中长期主线）',
    icon: Compass,
    items: [
      { label: '宏观政策', text: '持续积极财政 + 稳健偏宽松货币' },
      { label: '顶层设计', text: '高质量发展、新质生产力为核心主线，科技自立自强为战略支撑' },
      { label: '重大工程', text: '109项重大工程，聚焦新质生产力、现代化基础设施体系、城乡融合发展等' },
      { label: '市场指引', text: '为科技、高端制造、数字经济、新型基建等板块提供政策确定性' },
    ],
  },
];

export const ContentSlide03: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          一季度关键事件与<span className="text-webank-accent">政策主线</span>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 h-full pb-6">
        {timelineColumns.map((column, index) => {
          const Icon = column.icon;
          return (
            <BaseCard
              key={`${column.period}-${column.title}`}
              variant={index === 0 ? 'accent' : 'subtle'}
              animated
              className="h-full p-0 gap-0 overflow-hidden"
            >
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-slate-200"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-webank-accent/10 text-webank-accent shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold tracking-widest text-webank-accent uppercase">
                    {column.period}
                  </div>
                  <h3 className="text-[15px] font-bold text-webank-blue leading-tight truncate">
                    {column.title}
                  </h3>
                </div>
              </div>

              <div className="flex-1 px-4 py-4 space-y-3">
                {column.items.map((item) => (
                  <div key={item.label} className="text-[12px] leading-relaxed text-webank-text">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="w-1 h-1 rounded-full bg-webank-accent shrink-0" />
                      <span className="font-bold text-webank-blue text-[12px]">{item.label}</span>
                    </div>
                    <p className="pl-3 text-slate-600">{item.text}</p>
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
