import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { infrastructureInvestmentData } from '@/data/infrastructureInvestment';
import { seriesColors } from '@/utils/chartColors';

// 图1：1-9月分行业投资累计同比（竖向柱状图）
const industryYoyData = [
  { name: '管道运输业', value: 55.5, fill: '#b91c1c' },
  { name: '装卸搬运和仓储业', value: 16.9, fill: '#b91c1c' },
  { name: '铁路、船舶、航空航天和其他运输设备制造业', value: 15.8, fill: '#b91c1c' },
  { name: '航空运输业', value: 13.8, fill: '#b91c1c' },
  { name: '水上运输业', value: 13.5, fill: '#b91c1c' },
  { name: '计算机、通信和其他电子设备制造业', value: 9.6, fill: '#b91c1c' },
  { name: '高技术制造业', value: 4.0, fill: '#b91c1c' },
  { name: '有色金属冶炼和压延加工业', value: -5.1, fill: '#16a34a' },
  { name: '汽车制造业', value: -6.3, fill: '#16a34a' },
  { name: '电力、热力、燃气及水生产和供应业', value: -6.8, fill: '#16a34a' },
  { name: '化学原料及化学制品制造业', value: -7.5, fill: '#16a34a' },
  { name: '医药制造业', value: -8.1, fill: '#16a34a' },
  { name: '专用设备制造业', value: -8.9, fill: '#16a34a' },
  { name: '道路运输业', value: -9.9, fill: '#16a34a' },
  { name: '水利、环境和公共设施管理业', value: -12.8, fill: '#16a34a' },
];

// 图2：制造业细分行业投资累计同比（表格）
interface ManufacturingTableRow {
  period: string;
  auto: number;
  chemicals: number;
  computerComm: number;
  railwayShipAerospace: number;
  nonferrous: number;
  generalEquipment: number;
  specialEquipment: number;
  electricalMachinery: number;
  pharmaceutical: number;
}

const manufacturingTableColumns: Array<{ key: keyof Omit<ManufacturingTableRow, 'period'>; name: string }> = [
  { key: 'auto', name: '汽车制造业' },
  { key: 'chemicals', name: '化学原料及化学制品制造业' },
  { key: 'computerComm', name: '计算机、通信和其他电子设备制造业' },
  { key: 'railwayShipAerospace', name: '铁路、船舶、航空航天和其他运输设备制造业' },
  { key: 'nonferrous', name: '有色金属冶炼和压延加工业' },
  { key: 'generalEquipment', name: '通用设备制造业' },
  { key: 'specialEquipment', name: '专用设备制造业' },
  { key: 'electricalMachinery', name: '电气机械和器材制造业' },
  { key: 'pharmaceutical', name: '医药制造业' },
];

const manufacturingTableData: ManufacturingTableRow[] = [
  { period: '2025-02', auto: 27.0, chemicals: 6.0, computerComm: 9.6, railwayShipAerospace: 37.3, nonferrous: 16.1, generalEquipment: 21.6, specialEquipment: 9.0, electricalMachinery: -8.6, pharmaceutical: 3.5 },
  { period: '2025-03', auto: 24.5, chemicals: 2.1, computerComm: 10.5, railwayShipAerospace: 37.9, nonferrous: 17.9, generalEquipment: 17.2, specialEquipment: 8.1, electricalMachinery: -7.4, pharmaceutical: 4.4 },
  { period: '2025-04', auto: 23.6, chemicals: 1.3, computerComm: 9.0, railwayShipAerospace: 29.6, nonferrous: 16.4, generalEquipment: 17.9, specialEquipment: 8.4, electricalMachinery: -7.5, pharmaceutical: 2.8 },
  { period: '2025-05', auto: 23.4, chemicals: 0.4, computerComm: 7.0, railwayShipAerospace: 26.1, nonferrous: 14.3, generalEquipment: 17.5, specialEquipment: 7.9, electricalMachinery: -8.6, pharmaceutical: 0.8 },
  { period: '2025-06', auto: 22.2, chemicals: -1.1, computerComm: 4.8, railwayShipAerospace: 27.3, nonferrous: 9.1, generalEquipment: 16.6, specialEquipment: 6.2, electricalMachinery: -7.8, pharmaceutical: -3.9 },
  { period: '2025-07', auto: 21.7, chemicals: -4.7, computerComm: 7.2, railwayShipAerospace: 29.3, nonferrous: 4.9, generalEquipment: 14.8, specialEquipment: 4.6, electricalMachinery: -8.7, pharmaceutical: -6.6 },
  { period: '2025-08', auto: 20.2, chemicals: -5.2, computerComm: -0.1, railwayShipAerospace: 26.2, nonferrous: 2.2, generalEquipment: 13.7, specialEquipment: 1.6, electricalMachinery: -8.8, pharmaceutical: -8.5 },
  { period: '2025-09', auto: 19.2, chemicals: -5.5, computerComm: -2.1, railwayShipAerospace: 22.3, nonferrous: 0.4, generalEquipment: 11.8, specialEquipment: -0.7, electricalMachinery: -9.5, pharmaceutical: -9.8 },
  { period: '2025-10', auto: 17.5, chemicals: -7.9, computerComm: -2.2, railwayShipAerospace: 26.1, nonferrous: -1.5, generalEquipment: 9.5, specialEquipment: -2.5, electricalMachinery: -9.4, pharmaceutical: -11.3 },
  { period: '2025-11', auto: 15.3, chemicals: -8.2, computerComm: -3.2, railwayShipAerospace: 22.4, nonferrous: -2.2, generalEquipment: 8.9, specialEquipment: -7.1, electricalMachinery: -5.5, pharmaceutical: -13.1 },
  { period: '2025-12', auto: 11.7, chemicals: -8.9, computerComm: -3.2, railwayShipAerospace: 17.5, nonferrous: -4.2, generalEquipment: 6.2, specialEquipment: -7.1, electricalMachinery: -16.3, pharmaceutical: -13.5 },
  { period: '2026-02', auto: 2.6, chemicals: -5.4, computerComm: 3.2, railwayShipAerospace: 31.1, nonferrous: -8.2, generalEquipment: 7.0, specialEquipment: -0.5, electricalMachinery: 5.8, pharmaceutical: -7.8 },
  { period: '2026-03', auto: 4.8, chemicals: 0.4, computerComm: 5.4, railwayShipAerospace: 27.7, nonferrous: 3.7, generalEquipment: 12.5, specialEquipment: -0.4, electricalMachinery: 0.8, pharmaceutical: -7.7 },
  { period: '2026-04', auto: -0.5, chemicals: -3.8, computerComm: 5.4, railwayShipAerospace: 24.7, nonferrous: -0.9, generalEquipment: 5.5, specialEquipment: -6.0, electricalMachinery: 2.9, pharmaceutical: -7.8 },
  { period: '2026-05', auto: -2.7, chemicals: -5.9, computerComm: 6.7, railwayShipAerospace: 23.6, nonferrous: -2.3, generalEquipment: 2.8, specialEquipment: -8.5, electricalMachinery: 1.5, pharmaceutical: -8.5 },
  { period: '2026-06', auto: -4.2, chemicals: -6.5, computerComm: 5.5, railwayShipAerospace: 24.7, nonferrous: -4.1, generalEquipment: 1.9, specialEquipment: -8.6, electricalMachinery: 1.2, pharmaceutical: -8.2 },
  { period: '2026-07', auto: -5.3, chemicals: -7.4, computerComm: 7.8, railwayShipAerospace: 18.7, nonferrous: -3.9, generalEquipment: 1.4, specialEquipment: -9.2, electricalMachinery: 1.4, pharmaceutical: -9.8 },
  { period: '2026-08', auto: -6.0, chemicals: -8.1, computerComm: 8.1, railwayShipAerospace: 16.3, nonferrous: -4.1, generalEquipment: 0.9, specialEquipment: -8.8, electricalMachinery: 0.8, pharmaceutical: -8.8 },
  { period: '2026-09', auto: -6.3, chemicals: -7.5, computerComm: 9.6, railwayShipAerospace: 15.8, nonferrous: -5.1, generalEquipment: 1.1, specialEquipment: -8.9, electricalMachinery: 1.2, pharmaceutical: -8.1 },
];

export const ContentSlide19: React.FC = () => {
  const infrastructureLineConfigs: LineConfig[] = [
    { dataKey: 'waterTransport', name: '水上运输业', color: seriesColors[0], strokeWidth: 2.5 },
    { dataKey: 'aviation', name: '航空运输业', color: seriesColors[1], strokeWidth: 2.5 },
    { dataKey: 'telecom', name: '信息传输业', color: seriesColors[2], strokeWidth: 2, pointOffsets: { '2026-03': 16 } },
    { dataKey: 'publicFacility', name: '公共设施管理业', color: seriesColors[3], strokeWidth: 2, pointOffsets: { '2026-03': 16 } },
    { dataKey: 'infrastructure', name: '基础设施建设投资', color: seriesColors[4], strokeWidth: 2, pointOffsets: { '2026-03': -2 } },
  ];

  return (
    <BaseContentSlide
      title="制造业与基建固投：行业分化持续，增长集中在战略类基建、AI产业链"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="① 正增长集中在三类行业" delay="0ms" variant="accent">
            <p>
              分行业看，前三季度投资正增长的集中在三类：战略类基建（水上运输
              <span className="text-red-500 font-semibold">+13.5%</span>、航空运输
              <span className="text-red-500 font-semibold">+13.8%</span>、信息传输
              <span className="text-red-500 font-semibold">+30.8%</span>）、AI产业链（电子电路
              <span className="text-red-500 font-semibold">+58.7%</span>、计算机通信电子
              <span className="text-red-500 font-semibold">+9.6%</span>）。
            </p>
            <p className="mt-2">
              高技术制造业投资同比增长
              <span className="text-red-500 font-semibold">4.0%</span>
              ，增速比1—8月份加快0.5个百分点。其中，电子电路制造业投资增长
              <span className="text-red-500 font-semibold">58.7%</span>
              ，持续保持高速增长；锂离子电池制造业投资增长
              <span className="text-red-500 font-semibold">20.9%</span>
              ，增速加快0.3个百分点；集成电路制造业投资增长
              14.2%
              ，增速加快2.2个百分点；电子专用材料制造业投资增长
              9.5%
              ，增速加快1.0个百分点。
            </p>
          </BaseCard>

          <BaseCard title="② “两重”项目建设推进，重点领域基础设施投资较快增长" delay="120ms">
            <p>
              今年以来，包括“六张网”在内的一大批重大工程项目加快落地建设，带动现代化基础设施体系相关投资较快增长。前三季度，互联网和相关服务业投资同比增长
              <span className="text-red-500 font-semibold">46.7%</span>
              ，增速比1—8月份加快4.7个百分点；航空运输业投资增长
              13.8%
              ；水上运输业投资增长
              13.5%
              ；电力供应业投资增长
              11.2%
              。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
          {/* 左图：分行业投资累计同比（竖向柱状图） */}
          <ChartContainer delay="600ms" ariaLabel="分行业投资累计同比柱状图">
            <BaseBarChart
              data={industryYoyData}
              title="图1 分行业投资累计同比（1-9月）"
              subtitle="数据来源：国家统计局 | 单位：% | 红=正增长，绿=负增长"
              bars={[{ dataKey: 'value', name: '投资累计同比' }]}
              xAxisKey="name"
              layout="vertical"
              yAxisDomain={[-15, 60]}
              showYAxis={true}
              yAxisWidth={48}
              yAxisTickFormatter={(val) => `${val}%`}
              showReferenceLine={true}
              referenceLineY={0}
              showLabels={true}
              xAxisAngle={-45}
              xAxisHeight={90}
              xAxisInterval={0}
              xAxisTickFontSize={8}
              legendItems={[
                { value: '正增长', color: '#b91c1c' },
                { value: '负增长', color: '#16a34a' },
              ]}
              barSize={14}
            />
          </ChartContainer>

          {/* 中图：制造业细分行业投资累计同比（表格） */}
          <ChartContainer delay="720ms" ariaLabel="制造业细分行业投资累计同比表格">
            <div className="h-full flex flex-col">
              <div className="mb-2">
                <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  图2 制造业细分行业投资累计同比
                </h3>
                <p className="text-xs text-webank-subtext mt-1">数据来源：国家统计局 | 单位：%</p>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <table className="w-full h-full border-collapse text-[7.5px] leading-[1.15] table-fixed">
                  <thead>
                    <tr className="bg-webank-blue/10 text-webank-blue">
                      <th className="border border-slate-300 px-[1px] py-[2px] font-bold w-[34px]">时间</th>
                      {manufacturingTableColumns.map((col) => (
                        <th key={col.key} className="border border-slate-300 px-[1px] py-[2px] font-bold align-middle">
                          {col.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {manufacturingTableData.map((row, rowIndex) => (
                      <tr key={row.period} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="border border-slate-300 px-[1px] py-[1px] text-center font-semibold text-slate-700 whitespace-nowrap">
                          {row.period}
                        </td>
                        {manufacturingTableColumns.map((col) => {
                          const value = row[col.key];
                          const colorClass =
                            value > 0 ? 'text-red-600' : value < 0 ? 'text-green-600' : 'text-slate-500';
                          return (
                            <td
                              key={col.key}
                              className={`border border-slate-300 px-[1px] py-[1px] text-center tabular-nums ${colorClass}`}
                            >
                              {value.toFixed(2)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ChartContainer>

          {/* 右图：基建细分行业投资累计同比 */}
          <ChartContainer delay="840ms" ariaLabel="基建细分行业投资累计同比折线图">
            <BaseLineChart
              data={infrastructureInvestmentData}
              title="图3 基建细分行业投资累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={infrastructureLineConfigs}
              yAxisDomain={[-30, 50]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['水上运输业', '航空运输业', '信息传输业', '公共设施管理业', '基础设施建设投资']}
              xAxisTicks={['2025-02', '2025-06', '2025-09', '2025-12', '2026-03']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
