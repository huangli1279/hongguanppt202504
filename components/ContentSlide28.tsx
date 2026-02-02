import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { exportProductTrendData, exportEquipmentTrendData } from '@/data/exportProducts';
import { getSeriesColor } from '@/utils/chartColors';

export const ContentSlide28: React.FC = () => {
  // 第一张折线图配置：产品结构
  const productLineConfigs: LineConfig[] = [
    { dataKey: 'electromechanical', name: '机电产品', color: getSeriesColor(0), strokeWidth: 2.5 },
    { dataKey: 'integratedCircuit', name: '集成电路', color: getSeriesColor(1), strokeWidth: 2 },
    { dataKey: 'highTech', name: '高技术产品', color: getSeriesColor(2), strokeWidth: 2 },
    { dataKey: 'agriculture', name: '农产品', color: getSeriesColor(3), strokeWidth: 2 },
    { dataKey: 'clothing', name: '服装', color: getSeriesColor(4), strokeWidth: 2 },
  ];

  // 第二张折线图配置：装备制造
  const equipmentLineConfigs: LineConfig[] = [
    { dataKey: 'automobile', name: '汽车', color: getSeriesColor(0), strokeWidth: 2.5 },
    { dataKey: 'generalMachinery', name: '通用机械', color: getSeriesColor(1), strokeWidth: 2 },
    { dataKey: 'dataProcessing', name: '数据处理设备', color: getSeriesColor(2), strokeWidth: 2 },
    { dataKey: 'semiconductor', name: '半导体', color: getSeriesColor(3), strokeWidth: 2 },
    { dataKey: 'mobile', name: '手机', color: getSeriesColor(4), strokeWidth: 2 },
  ];

  return (
    <BaseContentSlide
      title={<>科技制造领跑，汽车与半导体产业链爆发，机电产品拉动出口增长</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="机电出口占比创新高，高技术驱动结构升级" delay="200ms" variant="accent">
            <p>
              机电产品制造稳步领跑，全年出口占比已提升至<span className="text-webank-blue font-semibold">60.9%</span>的历史高位，累计同比增长<span className="text-webank-blue font-semibold">26.8%</span>。高技术产品全年出口5.25万亿元，增长<span className="text-webank-blue font-semibold">13.2%</span>，占比19.4%（较24年提升1.2%），充分兑现了中国制造在全球AI算力建设与新能源转型中的核心竞争力。“新三样”、风力发电机组等绿色产品出口分别增长<span className="text-webank-blue font-semibold">27.1%</span>和<span className="text-webank-blue font-semibold">48.7%</span>。自主品牌产品出口增长<span className="text-webank-blue font-semibold">12.9%</span>，占比提升1.4个百分点。
            </p>
          </BaseCard>
          <BaseCard title="劳密产品表现疲软，传统产业加速向高端让位" delay="400ms">
            <p>
              劳动密集型产品表现疲软，服装负增长趋势逐渐凸显，2025年累计同比<span className="text-red-500 font-semibold">-5%</span>，显示出传统支柱产业在存量博弈与产业链外迁压力下正加速向高端装备制造让位。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={exportProductTrendData}
              title="主要出口产品累计同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={productLineConfigs}
              yAxisDomain={[-10, 30]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['机电产品', '集成电路', '高技术产品', '农产品', '服装']}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={exportEquipmentTrendData}
              title="机电产品出口累计同比走势"
              subtitle="单位：%"
              lines={equipmentLineConfigs}
              yAxisDomain={[-30, 35]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['汽车', '通用机械', '数据处理设备', '半导体', '手机']}
              xAxisTickCount={8}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
