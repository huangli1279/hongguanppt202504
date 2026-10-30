import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseTable, ColumnConfig } from '../base/BaseTable';

interface IndustrialForecastRow {
  institution: string;
  q4: string;
  annual: string;
  source: string;
}

const industrialForecastData: IndustrialForecastRow[] = [
  { institution: '中金', q4: '工业增加值 Q4 4.8%-5.2%', annual: '5.0%-5.2%', source: 'Q3数据点评' },
  { institution: '华泰', q4: 'Q4 4.5%-5.0%', annual: '5.0%', source: 'Q3数据点评' },
  { institution: '申万', q4: 'Q4 4.8%-5.3%', annual: '5.2%', source: '三季度数据点评' },
  { institution: '中信', q4: 'Q4 4.6%-5.0%', annual: '5.0%', source: '三季度数据点评' },
  { institution: '广发', q4: 'Q4 4.5%-5.0%', annual: '5.0%', source: '三季度数据点评' },
];

const industrialForecastColumns: ColumnConfig[] = [
  { key: 'institution', title: '机构', width: '90px', align: 'center' },
  { key: 'q4', title: 'Q4 预测', width: '220px', align: 'left' },
  { key: 'annual', title: '全年预测', width: '120px', align: 'center' },
  { key: 'source', title: '口径/时间', width: '150px', align: 'center' },
];

export const ContentSlide11: React.FC = () => {
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
            生产：四季度及全年指标预测
          </span>
        </span>
      }
      cardColumns={3}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="工业增加值预测" delay="0ms" variant="accent">
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>
                工业增加值全年预计 <span className="font-bold text-blue-600">5.0%-5.5%</span>，Q4 增速回落至 <span className="font-bold text-green-600">4.8%-5.2%</span>。
              </li>
              <li>
                Q4 工业生产边际放缓，全年仍有望落在 5.0%-5.5% 区间。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="ppi预测" delay="120ms">
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>
                随着地缘因素缓和，年底 PPI 回落至 <span className="font-bold">2-3%</span>，全年预计落在 <span className="font-bold">2.2-3%</span>。
              </li>
              <li>
                机构预测：中金 <span className="font-bold">2.3%</span>，华泰 <span className="font-bold">2.2%</span>，银河证券 <span className="font-bold">3.1%</span>。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="企业利润" delay="240ms">
            <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed">
              <li>
                受价格传导不畅影响，Q4 中下游盈利压力仍大。
              </li>
              <li>
                随着上游价格红利消退、存货 FIFO 效应耗尽，利润增速存在下行风险。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms" className="min-h-0 pb-8">
          <BaseTable
            data={industrialForecastData}
            columns={industrialForecastColumns}
            title="主要机构工业增加值预测"
            subtitle="数据来源：各机构 Q3 数据点评 | 单位：%"
            colorizeNumbers={false}
            titleBlockClassName="mb-1"
            headerCellClassName="!px-2 !py-1.5 text-xs leading-tight whitespace-nowrap"
            cellClassName="!px-2 text-xs leading-snug"
          />
        </ChartContainer>
      }
    />
  );
};
