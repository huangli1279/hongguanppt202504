import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import {
  aiPolicyCategoryStyles,
  aiPolicyDynamicsData,
  aiPolicyTrendNote,
  AiPolicyCategory,
} from '@/data/aiPolicyDynamics';

const policyColumns: ColumnConfig[] = [
  {
    key: 'category',
    title: '分类',
    align: 'center',
    width: '88px',
    render: (value: AiPolicyCategory) => {
      const style = aiPolicyCategoryStyles[value];
      return (
        <span
          className="inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold leading-none whitespace-nowrap"
          style={{ color: style.text, backgroundColor: style.bg }}
        >
          {value}
        </span>
      );
    },
  },
  {
    key: 'date',
    title: '发布时间',
    align: 'center',
    width: '92px',
  },
  {
    key: 'title',
    title: '文件名',
    align: 'left',
  },
];

export const ContentSlide47: React.FC = () => {
  return (
    <BaseContentSlide
      title="后续需关注外部指标与国内政策"
      cardColumns={1}
    >
      <div className="flex flex-col h-full min-h-0">
        <div className="mb-2 flex-shrink-0">
          <BaseCard
            title="后续关注：外部指标与国内政策"
            delay="0ms"
            variant="accent"
            className="!p-2.5 !gap-1"
          >
            <div className="text-[11px] leading-snug space-y-0.5">
              <p>
                海外AI资本开支外溢对中国拉动较大，需持续跟踪外部指标与国内政策。
              </p>
              <p>
                <span className="font-semibold">短期：</span>
                云厂商资本支出增速、AI收入/资本支出比、推理需求、数据中心利用率与租金、头部FCF覆盖率、债务融资占比及信用利差。
              </p>
              <p>
                <span className="font-semibold">中期：</span>
                畅通生产率向宏观扩散的价格、工资、投资与就业、财政四渠道；核心矛盾是
                <span className="text-webank-accent font-semibold">"硅基供给扩张、碳基收入约束"</span>
                。
              </p>
              <p>
                <span className="font-semibold">长期：</span>
                知识生产（辅助→自主发现）与物理生产（机器人/自动驾驶/智能制造）两条路径，均面临落地约束。
              </p>
            </div>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 flex flex-col">
          <ChartContainer delay="360ms" ariaLabel="国内AI政策动态汇总表" className="flex-1 min-h-0">
            <div className="flex h-full w-full flex-col min-h-0">
              <div className="flex-1 min-h-0">
                <BaseTable
                  data={aiPolicyDynamicsData}
                  columns={policyColumns}
                  title="国内AI政策动态汇总 (2025—2026)"
                  colorizeNumbers={false}
                  striped
                  rowHeight="auto"
                  cellClassName="!px-2 !py-0 text-[10px] leading-tight"
                  headerCellClassName="!px-2 !py-1 whitespace-nowrap text-[11px] leading-tight"
                />
              </div>
              <p className="mt-1 flex-shrink-0 text-[10px] leading-snug text-slate-500">
                {aiPolicyTrendNote}
              </p>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
