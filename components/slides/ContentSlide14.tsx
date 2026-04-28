import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { ppiYoyData, ppiIndustryMomData } from '@/data/ppi';

const ppiLines: LineConfig[] = [
  { dataKey: 'ppiYoy', name: 'PPI当月同比', strokeWidth: 2.5 },
  { dataKey: 'productionMaterialsYoy', name: '生产资料PPI当月同比', strokeWidth: 2 },
  { dataKey: 'livingGoodsYoy', name: '生活资料PPI当月同比', strokeWidth: 2 },
];

const industryMomColumns: ColumnConfig[] = [
  { key: 'period', title: '月份', align: 'center' },
  { key: 'ppiMom', title: 'PPI', align: 'right' },
  { key: 'externalStorage', title: '外存储部件', align: 'right' },
  { key: 'photovoltaic', title: '光伏设备', align: 'right' },
  { key: 'lithiumBattery', title: '锂电池', align: 'right' },
  { key: 'electricalMachinery', title: '电气机械', align: 'right' },
  { key: 'computerComm', title: '计算机通信', align: 'right' },
  { key: 'fuelProcessing', title: '燃油加工', align: 'right' },
  { key: 'oilGas', title: '油气开采', align: 'right' },
  { key: 'ferrousMining', title: '黑色矿采选', align: 'right' },
  { key: 'nonFerrousMining', title: '有色矿采选', align: 'right' },
  { key: 'chemicalRawMaterials', title: '化学原料', align: 'right' },
  { key: 'automobile', title: '汽车制造', align: 'right' },
];


export const ContentSlide14: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          PPI：3月时隔41个月转正，
          <span className="text-webank-accent">输入性通胀加剧中下游风险</span>
        </>
      }
    >
      <div className="flex flex-col h-full">
        {/* Cards Section */}
        <section className="grid grid-cols-4 gap-3 mb-6 flex-shrink-0">
          <BaseCard title="PPI同比转正，生产资料修复快于生活资料" delay="0ms" variant="accent">
            <div className="space-y-2">
              <p>
                3月全国PPI环比上升<span className="font-bold text-black">1.0%</span>，同比上涨至<span className="font-bold text-black">0.5%</span>，结束连续41个月负增长。
              </p>
              <p>
                生产资料同步转正至<span className="font-bold text-black">1.0%</span>，生活资料仍为<span className="font-bold text-black">-1.3%</span>，中下游成本传导受阻。
              </p>
            </div>
          </BaseCard>

          <BaseCard title="产能治理显效" delay="80ms">
            <p>
              一季度光伏设备、锂电池价格同比分别上涨<span className="font-bold text-black">3.0%</span>和<span className="font-bold text-black">0.5%</span>，扭转上年全年下降态势。
            </p>
          </BaseCard>

          <BaseCard title="AI拉动电子链条" delay="160ms">
            <p>
              一季度外存储部件、光纤制造同比分别上涨<span className="font-bold">20.3%</span>和<span className="font-bold">32.4%</span>，AI算力需求带动相关设备价格抬升。
            </p>
          </BaseCard>

          <BaseCard title="原油输入性冲击" delay="240ms">
            <p>
              布伦特原油环比上涨<span className="font-bold text-black">45.8%</span>，带动燃油加工、油气开采环比分别上涨<span className="font-bold text-black">5.8%</span>和<span className="font-bold text-black">15.8%</span>。
            </p>
          </BaseCard>
        </section>

        {/* Charts area */}
        <div className="flex gap-6 flex-1 min-h-0">
          {/* Two charts side by side */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <ChartContainer delay="600ms" className="min-h-0">
              <BaseLineChart
                data={ppiYoyData}
                title="PPI及其分类指标当月同比数据"
                subtitle="单位：%"
                lines={ppiLines}
                yAxisDomain={[-8, 12]}
                showYAxis={true}
                showReferenceLine={true}
                referenceLineY={0}
                xAxisTickCount={7}
              />
            </ChartContainer>

            <ChartContainer delay="700ms" className="min-h-0">
              <BaseTable
                data={ppiIndustryMomData}
                columns={industryMomColumns}
                title="PPI主要行业环比及Q1同比数据"
                subtitle="单位：%"
                dateColumn="period"
                rowHeight="auto"
                bordered
                colorizeNumbers
                titleBlockClassName="mb-1"
                subtitleClassName="mt-0.5"
                tableClassName="text-caption"
                headerCellClassName="!px-[1px] !py-1 text-caption leading-[0.9rem] whitespace-normal break-words"
                cellClassName="!px-[1px] text-caption leading-none"
              />
            </ChartContainer>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
