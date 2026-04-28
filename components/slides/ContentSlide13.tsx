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
  if (row.time === '2602' || row.time === '2603') {
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

const TOP_LEVEL_INDUSTRIES = new Set(['原材料制造业']);

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
                工业企业利润一季度累计同比增长<span className="font-bold text-red-500">15.5%</span>，营收、成本分别同比增长<span className="font-bold text-red-500">5.0%</span>、<span className="font-bold text-red-500">4.5%</span>。
              </p>
              <p>
                "营收-成本"项贡献了主要增长部分，受益于价格上涨。
              </p>
            </div>
          </BaseCard>
          <BaseCard title="新动能和战争利好AI及原材料制造" delay="120ms">
            <div className="space-y-2">
              <p>
                一季度在新动能快速发展、美伊战争的带动下，计算机通信制造业同比增长<span className="font-bold text-red-500">124.5%</span>，人工智能带动光纤制造增长<span className="font-bold text-red-500">336.8%</span>；原材料制造业利润同比增长<span className="font-bold text-red-500">77.9%</span>，其中有色冶炼加工行业利润增长<span className="font-bold text-red-500">116.7%</span>，有色采矿业增长<span className="font-bold text-red-500">95.6%</span>。
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
              title="一季度分行业利润同比增长"
              subtitle="规上原材料制造业为一级分类 | 单位：%"
              colorizeNumbers={false}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
