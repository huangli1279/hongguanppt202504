import React from 'react';
import { Calendar, Globe2, Landmark, Compass } from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

const timelineColumns = [
  {
    period: '2月',
    title: '史上最长春节',
    icon: Calendar,
    items: [
      { label: '消费端', text: '接触型服务消费、文旅餐饮需求集中释放，成为消费端核心亮点' },
      { label: '生产端', text: '工业生产节前赶工抢单、节后复工放缓，节奏波动明显' },
      { label: '出口端', text: '外贸出口呈现节前抢单、节后放缓的阶段性错位' },
      { label: '数据影响', text: '直接造成3月工业、社零数据阶段性走弱，属短期季节性扰动' },
    ],
  },
  {
    period: '2月底',
    title: '美以伊地缘冲突（输入性通胀）',
    icon: Globe2,
    items: [
      { label: '上游资源', text: '原油、有色、化工品价格上行，抬升上游资源类行业盈利与产能扩张' },
      { label: '中下游', text: '物流、燃油成本全面上涨，挤压中下游加工制造企业利润空间' },
      { label: '数据影响', text: '直接推动3月PPI转正，输入性通胀传导链条形成' },
    ],
  },
  {
    period: '3月',
    title: '全国两会（政策定调）',
    icon: Landmark,
    items: [
      { label: '发展主要预期目标', text: 'GDP 增速目标4.5%-5%（历史首次低于 5%），CPI 涨幅约 2%' },
      { label: '重点方向', text: '提振消费专项行动、培育壮大新动能、科技自立自强、整治 “内卷式” 竞争开局之年' },
      { label: '宏观政策', text: '更积极的财政政策，财政支出提速，更加注重支持提振消费、投资于人、保障民生等方面' },
      { label: '落地指引', text: '“两重”、“两新”、民生保障等政策落地提供指引' },
    ],
  },
  {
    period: '3月',
    title: '"十五五"开局落地（中长期主线）',
    icon: Compass,
    items: [
      { label: '主要目标', text: '以高质量发展为导向，稳定经济增速，加大高技术研发投入，培育新质生产力，完善民生保障与绿色安全体系' },
      { label: '重大战略任务', text: '推进科技自立自强，构建现代产业体系，扩大内需，提振消费与优化投资，兼顾民生、绿色转型与安全' },
      { label: '重大工程', text: '布局六大领域109项重大工程，聚焦前沿科技与新兴产业，赋能新质生产力' },
      { label: '核心导向', text: '以新质生产力为核心，强化科技创新与产业升级，推动经济提质增效' },
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
                  <h3 className="text-[15px] font-bold text-webank-blue leading-tight truncate">
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
