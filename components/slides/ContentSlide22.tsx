import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';

export const ContentSlide22: React.FC = () => {
  // 政策部署与投资重点表
  const policyTableData = [
    {
      area: '“六张网”基础设施建设',
      content:
        '8,000 亿工具首批落地浙江、四川、湖北；PSL 将“六张网”纳入支持；9 月项目建设专项债多增 2,527 亿；截至 10 月 28 日，8,000 亿工具已全部投放完成，对 11 个经济大省倾斜',
    },
    {
      area: '人工智能',
      content: '人工智能、数字经济等纳入新型政策性金融工具和科技创新再贷款重点支持领域',
    },
    {
      area: '能源保供',
      content: '抽水蓄能、新型储能纳入新型政策性金融工具支持范围（浙江建德项目为首批）',
    },
    {
      area: '民间投资',
      content: '8,000 亿工具加大对民间投资和民间资本参与项目的支持力度',
    },
    {
      area: '民生·货币政策',
      content: '9 月 29 日科技创新再贷款 +2,000 亿、支农支小再贷款 +5,000 亿',
    },
    {
      area: '民生·财政政策',
      content: '10 月 1 日起中央财政首次对首套房贷贴息',
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
            四季度固投预计温和修复，地产与民间投资仍是核心约束
          </span>
        </span>
      }
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="政策资金端" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <p className="text-[11px] leading-snug font-semibold text-webank-blue">
              政策资金端加速发力，结构边际改善，但传导仍有时滞。
            </p>
            <p className="mt-1 text-[11px] leading-snug">
              <span className="font-bold">财政端：</span>9月单月发行<span className="font-bold">6,339亿元</span>、同比多增<span className="font-bold">2,148亿元</span>，提速最为明显，特殊专项债占比由<span className="font-bold">47.3%降至29.6%</span>，投向实体项目的比重提升。
            </p>
            <p className="mt-1 text-[11px] leading-snug">
              <span className="font-bold">金融工具端：</span><span className="font-bold">8,000亿元</span>新型政策性金融工具10月28日已全部投放，全部补充项目资本金，撬动总投资超<span className="font-bold">11万亿元</span>，约<span className="font-bold">35%</span>支持民间资本参与项目。
            </p>
            <p className="mt-1 text-[11px] leading-snug">
              <span className="font-bold">货币端：</span>9月29日PSL降至<span className="font-bold">1.5%</span>并扩围“六张网”，科技创新、支农支小再贷款分别增额<span className="font-bold">2,000亿</span>、<span className="font-bold">5,000亿元</span>。
            </p>
          </BaseCard>
          <BaseCard title="机构预测" delay="120ms" variant="accent" className="!gap-1.5 !p-3">
            <p className="text-[11px] leading-snug">
              新开工降幅（-24.9%）持续大于新建商品房销售面积降幅（-13.2%），9月末新建商品房待售面积7.48亿平方米，同比-1.5%，反映供给收缩快于需求但现房库存去化仍偏慢。需求结构持续分化：二手房交易网签面积6.17亿平方米，同比+10.7%（住建部网签数据），占一二手合计交易面积约52.2%、较上年同期提升约6个百分点，“新房缩量、二手房放量”的存量房格局进一步确认。
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
