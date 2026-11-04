import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
const regionalExportTableData = [
  ['2025-01', 3.15, 18.87, 0.84, 12.11, 10.83, 6.57, -0.74],
  ['2025-02', 8.76, -14.68, 0.54, -9.82, -11.55, -11.78, -23.52],
  ['2025-03', 11.55, 23.46, 6.73, 9.09, 10.30, 37.04, 1.86],
  ['2025-04', 20.80, 17.26, 7.77, -21.03, 8.27, 25.30, -2.74],
  ['2025-05', 14.84, 2.31, 6.16, -34.52, 12.02, 33.33, -10.84],
  ['2025-06', 16.92, -2.11, 6.61, -16.13, 7.59, 34.80, -16.20],
  ['2025-07', 16.59, 7.74, 2.45, -21.67, 9.24, 42.41, -9.12],
  ['2025-08', 22.51, -2.33, 6.74, -33.12, 10.38, 25.86, -16.73],
  ['2025-09', 15.62, 15.19, 1.81, -27.03, 14.18, 56.41, -21.14],
  ['2025-10', 10.96, 2.11, -5.71, -25.17, 0.93, 10.46, -22.69],
  ['2025-11', 8.17, 14.87, 4.30, -28.58, 14.83, 27.55, -4.90],
  ['2025-12', 11.15, 9.81, 5.26, -30.01, 11.63, 21.82, 3.61],
  ['2026-01', 22.37, -0.57, -0.26, -23.02, 10.82, 23.40, -0.91],
  ['2026-02', 38.75, 44.12, 22.48, 9.68, 54.91, 97.48, 58.99],
  ['2026-03', 6.86, -3.70, 3.32, -26.49, 8.63, 3.08, 20.63],
  ['2026-04', 15.22, 13.74, 4.04, 11.31, 13.43, 17.30, 25.69],
  ['2026-05', 24.30, 6.07, 10.94, 35.41, 7.56, 18.58, 35.79],
  ['2026-06', 34.51, 28.36, 6.88, 13.87, 18.46, 28.04, 38.04],
  ['2026-07', 38.36, 13.86, 14.01, 17.05, 15.95, 18.20, 34.94],
  ['2026-08', 30.21, 17.49, 8.24, 34.40, 6.61, 30.90, 38.66],
  ['2026-09', 52.26, 24.70, 15.81, 39.56, 25.25, 16.10, 51.07],
].map(([period, asean, latinAmerica, japan, us, eu, africa, russia]) => ({
  period, asean, latinAmerica, japan, us, eu, africa, russia,
}));

const regionalExportColumns: ColumnConfig[] = [
  { key: 'period', title: '时间', width: '12%', align: 'center', render: (value) => String(value).slice(2) },
  { key: 'asean', title: '东盟', align: 'right' },
  { key: 'latinAmerica', title: '拉美', align: 'right' },
  { key: 'japan', title: '日本', align: 'right' },
  { key: 'us', title: '美国', align: 'right' },
  { key: 'eu', title: '欧盟', align: 'right' },
  { key: 'africa', title: '非洲', align: 'right' },
  { key: 'russia', title: '俄罗斯', align: 'right' },
];


export const ContentSlide27: React.FC = () => {
  return (
    <BaseContentSlide
      title="三季度出口地区结构：增速回升、市场多元与中美关系缓和"
      cardColumns={3}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="三季度出口增速回升" delay="0ms" variant="accent">
            <p className="text-sm leading-snug">
              分地区看，9月对东盟<span className="text-red-500 font-semibold">+52.3%</span>、欧盟
              <span className="text-red-500 font-semibold">+25.3%</span>、非洲
              +16.1%、拉美+24.7%，俄罗斯
              <span className="text-red-500 font-semibold">+51.1%</span>，三季度均维持高增；美国8月
              <span className="text-red-500 font-semibold">+34.4%</span>，9月
              <span className="text-red-500 font-semibold">+39.6%</span>均有所回暖，中美谈判成效凸显。
            </p>
          </BaseCard>
          <BaseCard title="出口份额向多元市场调整" delay="120ms">
            <p className="text-sm leading-snug">
              三季度（7—9月）共建“一带一路”国家出口占比为
              <span className="text-red-500 font-semibold">51.6%</span>，较上半年提高
              <span className="text-red-500 font-semibold">0.9个百分点</span>；美国三季度占比升至
              <span className="text-red-500 font-semibold">10.6%</span>，较一季度的
              9.9%有所回升。
            </p>
          </BaseCard>
          <BaseCard title="政策环境与趋势研判" delay="240ms">
            <p className="text-sm leading-snug">
              三季度中美经贸磋商取得阶段性进展，双方依据经贸会谈联合声明再次暂停相互24%对等关税90天，并同步暂停部分非关税反制措施；美方调整对华出口管制与实体清单，中方相应放宽稀土等关键矿产出口审批。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-1 gap-6 min-h-0">
          <ChartContainer delay="600ms" className="min-h-0" ariaLabel="2025年1月至2026年9月主要贸易伙伴出口同比">
            <BaseTable
              data={regionalExportTableData}
              columns={regionalExportColumns.map((column) => column.key === 'period' ? column : {
                ...column,
                render: (value, row) => {
                  const num = Number(value);
                  if (column.key === 'us' && num < 0) {
                    return <span className="text-green-600">{num.toFixed(1)}</span>;
                  }
                  const isQ3 = row.period >= '2026-07' && row.period <= '2026-09';
                  const isNotable = isQ3 && num >= 30;
                  return (
                    <span className={isNotable ? 'font-bold text-red-600' : 'text-slate-600'}>
                      {num.toFixed(1)}
                    </span>
                  );
                },
              })}
              title="图1 主要贸易伙伴出口同比"
              subtitle="数据来源：海关总署 | 按时间顺序，单位：%；红色标出2026年三季度突出增速（≥30%）"
              rowHeight="auto"
              colorizeNumbers={false}
              cellClassName="!px-1 !text-[10px] leading-none"
            />
          </ChartContainer>

        </div>
      </div>
    </BaseContentSlide>
  );
};
