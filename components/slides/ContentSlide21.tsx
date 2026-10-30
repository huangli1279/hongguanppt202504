import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';

export const ContentSlide21: React.FC = () => {
  // 政策部署与投资重点表
  const policyTableData = [
    {
      area: '“六张网”基础设施建设',
      content: '8000 亿工具首批落地浙江、四川、湖北；PSL 将“六张网”纳入支持；9 月项目建设专项债多增 2527 亿',
    },
    {
      area: '人工智能',
      content: '9 月信息服务业投资 +20.2%、电子通信设备 +7.6%，但体量对冲不了建安 -10.0%',
    },
    {
      area: '能源保供',
      content: '抽水蓄能、新型储能纳入工具支持（浙江建德项目为首批）',
    },
    {
      area: '民间投资',
      content: '8000 亿工具明确全部投向民间项目（进出口银行 123 个项目、超 220 亿、拉动总投资超 4000 亿）',
    },
    {
      area: '民生',
      content: '9 月 29 日结构性再贷款+房贷贴息（中央财政首次贴息）',
    },
  ];

  const policyColumns: ColumnConfig[] = [
    { key: 'area', title: '核心领域', align: 'center', width: '16%' },
    {
      key: 'content',
      title: '政策部署与投资重点',
      align: 'left',
    },
  ];

  return (
    <BaseContentSlide
      title={
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-bold shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            预测与展望
          </span>
          <span className="text-gray-900 font-semibold">
            固投降幅趋稳，地产与民间投资仍是核心约束
          </span>
        </span>
      }
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="政策支持" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <p className="text-[11px] leading-snug">
              <span className="font-bold">8,000 亿</span>新型政策性金融工具 9 月才加速投放、<span className="font-bold">5,500 亿</span>结存限额 10 月落地。
            </p>
            <p className="mt-1 text-[11px] leading-snug">
              专项债发行提速：9 月国债净发行+新增专项债 <span className="font-bold">1.15 万亿</span>、同比多增 <span className="font-bold">2918 亿</span>；项目建设专项债同比多增 <span className="font-bold">2527 亿</span>；特殊专项债占比 <span className="font-bold">47.3%→29.6%</span>。
            </p>
          </BaseCard>
          <BaseCard title="机构预测" delay="120ms" variant="accent" className="!gap-1.5 !p-3">
            <p className="text-[11px] leading-snug">
              机构都不再给 2026 年全年投资点位，全部转为定性表述：中金“四季度温和修复”、华泰“弱企稳、压力可控”、招商“年内投资形势边际改善”、中信“内需改善仍待政策显效”。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms" ariaLabel="政策部署与投资重点">
          <BaseTable
            data={policyTableData}
            columns={policyColumns}
            title="政策部署与投资重点"
            subtitle="资料来源：国务院及部委公开文件"
            rowHeight="auto"
            cellClassName="px-2 py-1 align-top text-gray-700"
            headerCellClassName="px-2 py-1.5 text-center font-semibold"
            headerBgColor="#6b7280"
            headerTextColor="#000000"
            bordered={true}
          />
        </ChartContainer>
      }
    />
  );
};
