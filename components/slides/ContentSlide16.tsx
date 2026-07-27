import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { retailMomVsLoanData } from '@/data/retailExtra';

const momLines: LineConfig[] = [
  { dataKey: 'retailSaMom', name: '社零季调环比', strokeWidth: 2.5 },
  { dataKey: 'consumerLoanMom', name: '住户消费贷款环比增速', strokeWidth: 2 },
];

export const ContentSlide16: React.FC = () => {
  return (
    <BaseContentSlide
      title="下半年消费市场预测"
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="主流机构预测" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <div className="space-y-1.5 text-[13px] leading-snug">
              <p>
                H2 在政策密集落地催化及高基数影响减缓背景下，全年社零累计增速预测中枢约
                <span className="font-bold text-webank-blue">1.8%-2.2%</span>
                ，CPI 预计
                <span className="font-bold text-webank-blue">1.0%-1.2%</span>
                。
              </p>
              <p>
                <span className="font-bold text-webank-blue">AI 终端</span>
                成“全龄段消费升级”关键抓手，补贴持续发力：AI 手机/眼镜、智能硬件、AI 教育平台、医疗+旅游+长居复合产品、智慧养老等。
              </p>
            </div>
          </BaseCard>

          <BaseCard title="政策支持" delay="120ms" className="!gap-1.5 !p-3">
            <ul className="space-y-1 text-[12px] leading-snug list-none">
              <li>
                <span className="font-bold text-webank-blue">1. AI+消费：</span>
                2026年6月8部门印发《关于加快“人工智能+消费”发展的实施意见》，丰富 AI 产品供给、赋能服务消费、创新场景。
              </li>
              <li>
                <span className="font-bold text-webank-blue">2. 文旅扩场景：</span>
                7月文旅部印发《旅游强国建设“十五五”规划》，拓展旅游消费场景，联动演艺/动漫/游戏/影视；持续优化免签、扩大免签国范围。
              </li>
              <li>
                <span className="font-bold text-webank-blue">3. 扩消费规划：</span>
                7月国务院批复《扩大消费“十五五”规划》，服务消费升为“第一核心”，聚焦七大领域；健全县乡村养老网络，推动数智化与“康养旅居”整合。
              </li>
              <li>
                <span className="font-bold text-webank-blue">4. 就业优先：</span>
                6月30日发布《实施就业优先战略“十五五”规划》，就业优先贯穿经济社会发展全过程。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms" className="min-h-0">
          <BaseLineChart
            data={retailMomVsLoanData}
            title="社零季调环比与住户消费贷款环比增速"
            subtitle="数据来源：国家统计局、人民银行 | 单位：%"
            lines={momLines}
            yAxisDomain={[-1.5, 1.5]}
            showYAxis
            showReferenceLine
            referenceLineY={0}
            legendOrder={['社零季调环比', '住户消费贷款环比增速']}
            xAxisTickCount={8}
          />
        </ChartContainer>
      }
    />
  );
};
