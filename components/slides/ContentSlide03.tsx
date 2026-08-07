import React from 'react';
import { Landmark, Compass } from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

const timelineColumns = [
  {
    period: '4月·7月',
    title: '政治局会议定调',
    icon: Landmark,
    items: [
      {
        label: '宏观政策',
        text: '1.3万亿超长期特别国债已启动（8000亿“两重”、2000亿设备更新、2500亿以旧换新）；1000亿财政金融协同促内需资金上半年落地；8000亿新型政策性金融工具加快投放；7月要求加快支出与债券使用，并谋划增量政策',
      },
      {
        label: '扩大内需',
        text: '“两重”8000亿项目清单与设备更新资金已全部下达（支持1417个重大项目）；以旧换新多批次资金落地；“六张网”全年投资预计超7万亿，服务消费与优质供给同步加力',
      },
      {
        label: '产业升级',
        text: '深入实施“人工智能+”，发展智能经济新形态；衔接十五五纲要109项重大工程；着力打造集成电路、低空经济、新型储能等新兴支柱产业，改造升级传统产业',
      },
      {
        label: '风险改革',
        text: '稳定房地产、实施好一揽子化债；清欠从集中攻坚转向常态化；推进全国统一大市场建设条例、综合整治“内卷”；深化资本市场投融资改革，提升市场韧性与信心',
      },
    ],
  },
  {
    period: '二季度以来',
    title: '十五五专项规划落地推进',
    icon: Compass,
    items: [
      {
        label: '绿色与能源',
        text: '国务院印发《美丽中国建设“十五五”规划》，2030年单位GDP二氧化碳排放较2025年降17%、非化石能源占比达25%；发改委、能源局印发《新型能源体系建设“十五五”规划》，2030年初步建成新型能源体系，风光装机与非化石电量均成主体',
      },
      {
        label: '科教民生',
        text: '国务院相继印发教育发展、实施就业优先战略、国民健康、知识产权保护和运用等“十五五”规划；教育规划明确“双一流”高校本科招生增10万人以上，健康规划提出人均预期寿命达80岁',
      },
      {
        label: '产业与基建',
        text: '发改委披露“两重”8000亿超长期特别国债项目清单全部下达，支持1417个重大项目；衔接纲要109项重大工程，加快推进“六张网”（全年相关投资预计超7万亿），配套8000亿新型政策性金融工具投放',
      },
      {
        label: '内需消费',
        text: '国务院批复《扩大消费“十五五”规划》，锚定2030年社零约60万亿元，围绕服务消费、商品消费、新业态等部署28条任务，明确深入推进“人工智能+消费”，并设置银发、育儿、文旅、健康、汽车等专栏',
      },
    ],
  },
];

export const ContentSlide03: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          二季度政策主线
        </>
      }
    >
      <div className="grid grid-cols-2 gap-5 h-full">
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

              <div className="flex-1 px-6 py-5 flex flex-col justify-evenly gap-1 min-h-0">
                {column.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-3.5 text-[13px] leading-relaxed text-webank-text"
                  >
                    <span className="mt-[8px] w-2 h-2 rounded-full bg-webank-accent shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-webank-blue text-[14px] mb-1">
                        {item.label}
                      </div>
                      <p className="text-slate-600 text-[13px] leading-relaxed">{item.text}</p>
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
