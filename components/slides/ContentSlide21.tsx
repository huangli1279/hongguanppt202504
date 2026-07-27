import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { foreignTradeCumulativeYoyData } from '@/data/foreignTrade';
import { memoryChipPriceData } from '@/data/memoryChipPrices';

export const ContentSlide21: React.FC = () => {
  const tradeLineConfigs: LineConfig[] = [
    { dataKey: 'exports', name: '出口累计同比', strokeWidth: 2.5 },
    { dataKey: 'imports', name: '进口累计同比', strokeWidth: 2 },
    { dataKey: 'surplus', name: '进出口差额累计同比', strokeWidth: 2 },
  ];

  const memoryLineConfigs: LineConfig[] = [
    { dataKey: 'dram', name: 'DRAM DDR5 16GB', strokeWidth: 2.5 },
    { dataKey: 'nand', name: 'NAND Flash 128Gb', strokeWidth: 2 },
  ];

  return (
    <BaseContentSlide
      title="上半年美元计价的出口额同比增长17.6%，贸易顺差增速同比转负"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="总量持续超预期" delay="0ms" variant="accent">
            <p>
              6月出口总额同比增长<span className="text-red-500 font-semibold">27%</span>（前值19.4%），显示在全球经贸增长艰难和局势动荡的背景下，中国外贸展现出强大韧性。受到能源冲突及AI集体涨价的影响，6月进口总额同比高增<span className="text-red-500 font-semibold">36%</span>，二季度均保持超20%的增长。
            </p>
          </BaseCard>
          <BaseCard title="贸易顺差转负" delay="120ms">
            <p>
              上半年，贸易顺差为<span className="text-black font-semibold">5759亿美元</span>，受进口增长速度快于出口影响，同比<span className="text-green-600 font-semibold">-1.28%</span>。
            </p>
          </BaseCard>
          <BaseCard title="下半年预测" delay="240ms">
            <p>
              AI产业链景气度与地缘不确定性凸显中国产业链韧性，预计全年出口增速有望达到<span className="text-red-500 font-semibold">15.8%</span>。进口端下半年会持续受到AI芯片涨价和“铜周期”与材料通胀的影响，全年进口增速在<span className="text-black font-semibold">12%-15%</span>的区间。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={foreignTradeCumulativeYoyData}
              title="进出口及其差额：累计同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={tradeLineConfigs}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['出口累计同比', '进口累计同比', '进出口差额累计同比']}
              xAxisTickCount={10}
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseLineChart
              data={memoryChipPriceData}
              title="DRAM、NAND Flash合约月度平均价格"
              subtitle="数据来源：全球半导体观察 | 单位：美元"
              lines={memoryLineConfigs}
              showYAxis={true}
              legendOrder={['DRAM DDR5 16GB', 'NAND Flash 128Gb']}
              xAxisTickCount={10}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
