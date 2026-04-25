import React from 'react';
import { BaseContentSlide } from './BaseContentSlide';
import { BaseCard } from './BaseCard';

const timelineColumns = [
  {
    period: '2月',
    title: '史上最长春节',
    items: [
      { label: '消费端', text: '消费拉动，服务消费大增' },
      { label: '生产端', text: '节前赶工' },
      { label: '出口端', text: '抢出口' },
    ],
  },
  {
    period: '2月底',
    title: '美以伊冲突（外部冲击）',
    items: [
      { label: '能源与通胀', text: '油价、天然气价格上涨，间接抬升食品、化肥、燃油价格，通胀抬升' },
      { label: '全球流动性', text: '市场避险情绪升温，美元降息预期下降' },
      { label: '供应链', text: '航运/物流成本上升，对出口企业、制造业企业的成本端造成二次冲击' },
    ],
  },
  {
    period: '3月',
    title: '两会（政策定调）',
    items: [
      { label: '增长目标', text: 'GDP增速目标4.5%-5%（历史首次低于5%），CPI涨幅约2%，政策更重质量而非速度' },
      { label: '宏观政策', text: '更积极的财政政策 + 适度宽松的货币政策' },
      { label: '重点方向', text: '提振消费专项行动、培育壮大新能源、科技自立自强、整治“内卷式”竞争开局之年' },
    ],
  },
  {
    period: '3月',
    title: '“十五五”规划落地（中长期主线）',
    items: [
      { label: '宏观政策', text: '持续积极财政 + 稳健偏宽松货币' },
      { label: '顶层设计', text: '高质量发展、新质生产力为核心主线，科技自立自强为战略支撑' },
      { label: '重大工程', text: '109项重大工程，聚焦新质生产力、现代化基础设施体系、城乡融合发展等' },
      { label: '市场指引', text: '为科技、高端制造、数字经济、新型基建等板块提供政策确定性' },
    ],
  },
];

export const PolicyTimeline2026Slide: React.FC = () => {
  return (
    <BaseContentSlide
      subtitle="2026年第一季度宏观经济报告"
      title="一季度关键事件与政策主线"
      footer="个金管理部-数据管理室"
      headerClassName="mb-4"
    >
      <div className="grid grid-cols-4 gap-3 h-full pb-8">
        {timelineColumns.map((column, index) => (
          <BaseCard
            key={`${column.period}-${column.title}`}
            variant={index === 0 ? 'accent' : 'subtle'}
            animated
            className="h-full p-0 gap-0 overflow-hidden border border-slate-300 rounded-none shadow-sm"
          >
            <div className="bg-[#dbeaf4] border-b border-slate-400 px-3 py-2 min-h-[62px] flex items-center">
              <h3 className="text-[18px] leading-tight font-bold text-slate-950">
                <span className="mr-1">{column.period}：</span>
                {column.title}
              </h3>
            </div>

            <div className="flex-1 bg-[#eaf4fb] px-4 py-5 space-y-5 text-[17px] leading-snug">
              {column.items.map((item) => (
                <p key={item.label} className="text-slate-800">
                  <span className="font-bold text-slate-950">{item.label}：</span>
                  {item.text}
                </p>
              ))}
            </div>
          </BaseCard>
        ))}
      </div>
    </BaseContentSlide>
  );
};
