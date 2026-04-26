import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { industrialProfitData, industryProfitGrowthData } from '@/data/profit';

const formatNumber = (val: number) => {
  return val.toLocaleString('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
};

const renderColoredCell = (value: any, row: any) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const num = Number(value);
  if (isNaN(num)) return value;
  
  const formatted = formatNumber(num);
  // 只在特定行进行着色
  if (row.time === '2602') {
    if (num > 0) return <span className="text-red-500">{formatted}</span>;
    if (num < 0) return <span className="text-green-600">{formatted}</span>;
  }
  
  return <span className="text-slate-600">{formatted}</span>;
};

const renderGrowthCell = (value: any) => {
  const num = Number(value);
  if (isNaN(num)) return value;
  const formatted = formatNumber(num);
  if (num > 0) return <span className="text-red-500">{formatted}</span>;
  if (num < 0) return <span className="text-green-600">{formatted}</span>;
  return <span className="text-slate-600">{formatted}</span>;
};

const columns: ColumnConfig[] = [
  { key: 'time', title: '日期', width: '70px', align: 'left' },
  { key: 'totalProfit', title: '利润', width: '80px', align: 'right', render: renderColoredCell },
  { key: 'revenue', title: '营收', width: '90px', align: 'right' },
  { key: 'cost', title: '成本', width: '90px', align: 'right' },
  { key: 'revenueMinusCost', title: '营收 - 成本', width: '100px', align: 'right', render: renderColoredCell },
  { key: 'expenses', title: '费用(不含研发费用)', width: '140px', align: 'right' },
  { key: 'investmentIncome', title: '投资收益', width: '90px', align: 'right' },
];

const TOP_LEVEL_INDUSTRIES = new Set(['规模以上原材料制造业', '有色行业', '化工行业']);

const renderIndustryCell = (value: any) => {
  const isTopLevel = TOP_LEVEL_INDUSTRIES.has(value);
  return (
    <span className={isTopLevel ? 'font-semibold' : 'pl-4 text-slate-600'}>
      {value}
    </span>
  );
};

const growthColumns: ColumnConfig[] = [
  { key: 'industry', title: '行业', align: 'left', render: renderIndustryCell },
  { key: 'growth', title: '同比增长(%)', align: 'right', render: renderGrowthCell },
];

export const ContentSlide13: React.FC = () => {
  return (
    <BaseContentSlide
      title="工业企业利润显著增长，受价格和成本双上涨作用"
      cardColumns={2}
      cards={
        <>
          <BaseCard title="利润显著修复，营收-成本贡献主增量" delay="0ms" variant="accent">
            <div className="space-y-2">
              <p>
                1-2月工业企业利润累计同比增长<span className="font-bold text-red-500">15.2%</span>，同比多增<span className="font-bold text-red-500">1,354.8亿元</span>。
              </p>
              <p>
                营收、成本分别同比增长<span className="font-bold text-red-500">5.3%</span>、<span className="font-bold text-red-500">5.0%</span>，"营收-成本"项多增<span className="font-bold text-red-500">2,043.8亿元</span>，是利润修复的核心来源。
              </p>
            </div>
          </BaseCard>
          <BaseCard title="新动能与战争利好原材料制造业" delay="120ms">
            <div className="space-y-2">
              <p>
                新动能产业与美伊战争带动原材料制造业利润同比增长<span className="font-bold text-red-500">88.3%</span>。
              </p>
              <p>
                有色行业增长<span className="font-bold text-red-500">148.2%</span>，合金制造增长<span className="font-bold text-red-500">205.1%</span>。
              </p>
              <p>
                化工行业增长<span className="font-bold text-red-500">35.9%</span>，无机盐、无机酸制造高增。
              </p>
            </div>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseTable
              data={industrialProfitData}
              columns={columns}
              title="工业企业利润分项当月同比增加值"
              subtitle={
                <>
                  公式：利润=营收-成本-费用+投资收益+其它收益 &nbsp;&nbsp;|&nbsp;&nbsp; 单位：亿元
                </>
              }
              dateColumn="time"
              colorizeNumbers={false}
              highlightRows={[industrialProfitData.length - 1]}
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseTable
              data={industryProfitGrowthData}
              columns={growthColumns}
              title="1-2月原材料制造业及细分行业利润同比增长"
              subtitle="规上原材料制造业为一级分类，下方有色、化工为其重点细分行业 | 单位：%"
              colorizeNumbers={false}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
