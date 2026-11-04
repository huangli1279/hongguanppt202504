import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';

// 图1：1-9月分行业投资累计同比（竖向柱状图）
const industryYoyData = [
  { name: '管道运输', value: 55.5, fill: '#b91c1c' },
  { name: '装卸搬运仓储', value: 16.9, fill: '#b91c1c' },
  { name: '铁路船舶航空航天等', value: 15.8, fill: '#b91c1c' },
  { name: '航空运输', value: 13.8, fill: '#b91c1c' },
  { name: '水上运输', value: 13.5, fill: '#b91c1c' },
  { name: '计算机通信电子', value: 9.6, fill: '#b91c1c' },
  { name: '高技术制造', value: 4.0, fill: '#b91c1c' },
  { name: '有色金属冶炼', value: -5.1, fill: '#16a34a' },
  { name: '汽车制造', value: -6.3, fill: '#16a34a' },
  { name: '电力热力燃气水', value: -6.8, fill: '#16a34a' },
  { name: '化学原料制品', value: -7.5, fill: '#16a34a' },
  { name: '医药制造', value: -8.1, fill: '#16a34a' },
  { name: '专用设备', value: -8.9, fill: '#16a34a' },
  { name: '道路运输', value: -9.9, fill: '#16a34a' },
  { name: '水利环境公共设施', value: -12.8, fill: '#16a34a' },
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
  { key: 'auto', name: '汽车' },
  { key: 'chemicals', name: '化学原料化学制品' },
  { key: 'computerComm', name: '计算机通信和其他电子设备' },
  { key: 'railwayShipAerospace', name: '铁路船舶航空航天和其他' },
  { key: 'nonferrous', name: '有色金属冶炼和压延' },
  { key: 'generalEquipment', name: '通用设备' },
  { key: 'specialEquipment', name: '专用设备' },
  { key: 'electricalMachinery', name: '电气机械和器材' },
  { key: 'pharmaceutical', name: '医药' },
];

const manufacturingTableData: ManufacturingTableRow[] = [
  { period: '2025-07', auto: 21.7, chemicals: -4.7, computerComm: 2.2, railwayShipAerospace: 29.3, nonferrous: 4.9, generalEquipment: 14.8, specialEquipment: 4.6, electricalMachinery: -8.7, pharmaceutical: -6.6 },
  { period: '2025-08', auto: 20.2, chemicals: -5.2, computerComm: -0.1, railwayShipAerospace: 26.2, nonferrous: 2.2, generalEquipment: 13.7, specialEquipment: 1.6, electricalMachinery: -8.8, pharmaceutical: -8.5 },
  { period: '2025-09', auto: 19.2, chemicals: -5.6, computerComm: -2.1, railwayShipAerospace: 22.3, nonferrous: 0.4, generalEquipment: 11.8, specialEquipment: -0.7, electricalMachinery: -9.5, pharmaceutical: -9.9 },
  { period: '2025-10', auto: 17.5, chemicals: -7.9, computerComm: -2.2, railwayShipAerospace: 20.1, nonferrous: -1.5, generalEquipment: 9.5, specialEquipment: -2.5, electricalMachinery: -9.4, pharmaceutical: -11.3 },
  { period: '2025-11', auto: 15.3, chemicals: -8.2, computerComm: -3.2, railwayShipAerospace: 22.4, nonferrous: -2.2, generalEquipment: 8.9, specialEquipment: -4, electricalMachinery: -9.5, pharmaceutical: -13.1 },
  { period: '2025-12', auto: 11.7, chemicals: -8.0, computerComm: -3.2, railwayShipAerospace: 17.5, nonferrous: -4.2, generalEquipment: 6.2, specialEquipment: -7.1, electricalMachinery: -10.3, pharmaceutical: -13.5 },
  { period: '2026-02', auto: 2.6, chemicals: -5.4, computerComm: 1.2, railwayShipAerospace: 31.1, nonferrous: -9.2, generalEquipment: 7.0, specialEquipment: -0.5, electricalMachinery: 5.8, pharmaceutical: -2.8 },
  { period: '2026-03', auto: 4.8, chemicals: 0.4, computerComm: 5.4, railwayShipAerospace: 27.7, nonferrous: 3.7, generalEquipment: 12.5, specialEquipment: -0.4, electricalMachinery: 0.8, pharmaceutical: -7.7 },
  { period: '2026-04', auto: -0.5, chemicals: -3.6, computerComm: 5.4, railwayShipAerospace: 24.7, nonferrous: -0.9, generalEquipment: 5.5, specialEquipment: -6.0, electricalMachinery: 2.9, pharmaceutical: -7.8 },
  { period: '2026-05', auto: -2.7, chemicals: -5.9, computerComm: 6.7, railwayShipAerospace: 23.6, nonferrous: -2.3, generalEquipment: 2.8, specialEquipment: -9.5, electricalMachinery: 1.5, pharmaceutical: -9.0 },
  { period: '2026-06', auto: -4.2, chemicals: -6.5, computerComm: 6.5, railwayShipAerospace: 24.7, nonferrous: -4.1, generalEquipment: 1.9, specialEquipment: -8.6, electricalMachinery: 1.2, pharmaceutical: -9.2 },
  { period: '2026-07', auto: -5.3, chemicals: -7.4, computerComm: 7.8, railwayShipAerospace: 18.7, nonferrous: -3.9, generalEquipment: 1.4, specialEquipment: -9.2, electricalMachinery: 1.4, pharmaceutical: -9.8 },
  { period: '2026-08', auto: -6.0, chemicals: -8.1, computerComm: 8.1, railwayShipAerospace: 16.3, nonferrous: -4.1, generalEquipment: 0.9, specialEquipment: -9.0, electricalMachinery: 0.8, pharmaceutical: -8.3 },
  { period: '2026-09', auto: -6.3, chemicals: -7.5, computerComm: 9.6, railwayShipAerospace: 15.8, nonferrous: -5.1, generalEquipment: 1.1, specialEquipment: -8.9, electricalMachinery: 1.2, pharmaceutical: -8.1 },
];

// 基建细分行业投资累计同比（表格）
interface InfrastructureTableRow {
  period: string;
  railway: number;
  road: number;
  pipeline: number;
  handlingStorage: number;
  aviation: number;
  waterTransport: number;
  waterEnvironment: number;
  powerUtility: number;
  telecom: number;
}

const infrastructureTableColumns: Array<{ key: keyof Omit<InfrastructureTableRow, 'period'>; name: string }> = [
  { key: 'railway', name: '铁路运输' },
  { key: 'road', name: '道路运输' },
  { key: 'pipeline', name: '管道运输' },
  { key: 'handlingStorage', name: '装卸搬运和仓储' },
  { key: 'aviation', name: '航空运输' },
  { key: 'waterTransport', name: '水上运输' },
  { key: 'waterEnvironment', name: '水利、环境和公共设施管理' },
  { key: 'powerUtility', name: '电力、热力、燃气及水生产和供应' },
  { key: 'telecom', name: '信息传输、软件和信息技术服务' },
];

const infrastructureTableData: InfrastructureTableRow[] = [
  { period: '2025-07', railway: 5.9, road: -2.0, pipeline: 14.0, handlingStorage: 10.0, aviation: 2.9, waterTransport: 18.9, waterEnvironment: 2.0, powerUtility: 21.5, telecom: 12.8 },
  { period: '2025-08', railway: 4.5, road: -3.3, pipeline: 14.8, handlingStorage: 9.5, aviation: 1.0, waterTransport: 15.9, waterEnvironment: -0.2, powerUtility: 18.8, telecom: 10.9 },
  { period: '2025-09', railway: 4.2, road: -2.7, pipeline: 14.9, handlingStorage: 4.9, aviation: 0.2, waterTransport: 12.8, waterEnvironment: -2.4, powerUtility: 15.3, telecom: 11.5 },
  { period: '2025-10', railway: 3.0, road: -4.3, pipeline: 13.8, handlingStorage: 3.9, aviation: -1.1, waterTransport: 9.4, waterEnvironment: -4.1, powerUtility: 12.5, telecom: 11.2 },
  { period: '2025-11', railway: 2.7, road: -4.7, pipeline: 16.8, handlingStorage: 4.1, aviation: -2.1, waterTransport: 8.9, waterEnvironment: -6.3, powerUtility: 10.7, telecom: 9.8 },
  { period: '2025-12', railway: -1.2, road: -6.0, pipeline: 36.0, handlingStorage: 4.1, aviation: -5.3, waterTransport: 7.7, waterEnvironment: -8.4, powerUtility: 9.1, telecom: 8.8 },
  { period: '2026-02', railway: 28.7, road: -0.6, pipeline: 145.2, handlingStorage: 11.4, aviation: 31.1, waterTransport: 17.9, waterEnvironment: 8.3, powerUtility: 13.1, telecom: 3.1 },
  { period: '2026-03', railway: 12.6, road: 2.9, pipeline: 99.5, handlingStorage: 30.3, aviation: 43.3, waterTransport: 34.1, waterEnvironment: 3.6, powerUtility: 9.0, telecom: -6.1 },
  { period: '2026-04', railway: 8.6, road: -3.0, pipeline: 108.0, handlingStorage: 24.8, aviation: 27.3, waterTransport: 28.4, waterEnvironment: -0.1, powerUtility: 4.4, telecom: -6.8 },
  { period: '2026-05', railway: 5.1, road: -5.7, pipeline: 98.8, handlingStorage: 21.2, aviation: 21.7, waterTransport: 23.3, waterEnvironment: -3.9, powerUtility: -0.1, telecom: -7.1 },
  { period: '2026-06', railway: 0.2, road: -7.7, pipeline: 83.8, handlingStorage: 13.8, aviation: 11.0, waterTransport: 19.8, waterEnvironment: -6.5, powerUtility: -2.7, telecom: -3.8 },
  { period: '2026-07', railway: 0.7, road: -7.5, pipeline: 79.5, handlingStorage: 12.9, aviation: 15.7, waterTransport: 16.2, waterEnvironment: -9.1, powerUtility: -5.3, telecom: 0.1 },
  { period: '2026-08', railway: 0.6, road: -8.0, pipeline: 72.1, handlingStorage: 15.1, aviation: 16.7, waterTransport: 14.7, waterEnvironment: -11.0, powerUtility: -6.9, telecom: 5.2 },
  { period: '2026-09', railway: 2.3, road: -9.9, pipeline: 55.5, handlingStorage: 16.9, aviation: 13.8, waterTransport: 13.5, waterEnvironment: -12.8, powerUtility: -6.8, telecom: 4.3 },
];

// 合并表：制造业 + 基建 细分行业投资累计同比
const mergedTableColumns = [...manufacturingTableColumns, ...infrastructureTableColumns];
const mergedTableData = manufacturingTableData.map((row, index) => ({
  ...row,
  ...infrastructureTableData[index],
}));

export const ContentSlide20: React.FC = () => {
  return (
    <BaseContentSlide
      title="制造业与基建固投：战略基建与AI产业链领跑，传统制造和公共设施承压"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="① 增长集中在战略基建与电子产业链" delay="0ms" variant="accent">
            <p>
              前三季度，水上运输（
              <span className="text-red-500 font-semibold">+13.5%</span>
              ）、航空运输（
              <span className="text-red-500 font-semibold">+13.8%</span>
              ）、信息传输（
              <span className="text-red-500 font-semibold">+30.8%</span>
              ）等“六张网”相关基建投资保持较快增长；电子电路（
              <span className="text-red-500 font-semibold">+58.7%</span>
              ）、集成电路（
              <span className="text-red-500 font-semibold">+14.2%</span>
              ）、计算机通信电子（
              <span className="text-red-500 font-semibold">+9.6%</span>
              ）等电子产业链投资表现亮眼。
            </p>
            <p className="mt-2">
              高技术制造业投资同比增长
              <span className="text-red-500 font-semibold">4.0%</span>
              ，增速较1—8月加快0.5个百分点。主要受“两重”“六张网”项目推进、AI算力/终端需求扩张以及设备更新政策拉动。
            </p>
          </BaseCard>

          <BaseCard title="② 传统制造与公共设施管理继续承压" delay="120ms">
            <p>
              前三季度，汽车制造（
              <span className="text-green-600 font-semibold">-6.3%</span>
              ）、专用设备（
              <span className="text-green-600 font-semibold">-8.9%</span>
              ）、医药制造（
              <span className="text-green-600 font-semibold">-8.1%</span>
              ）、化学原料（
              <span className="text-green-600 font-semibold">-7.5%</span>
              ）等制造业投资负增长；基建中的水利环境和公共设施管理业投资下降
              <span className="text-green-600 font-semibold">12.8%</span>
              ，道路运输业下降
              <span className="text-green-600 font-semibold">9.9%</span>
              。
            </p>
            <p className="mt-2">
              拖累因素包括产能利用率偏低、终端需求不足、PPI低迷压制盈利预期，以及地方财政紧平衡下公共设施项目推进偏慢。
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
              xAxisAngle={-40}
              xAxisHeight={78}
              xAxisInterval={0}
              xAxisTickFontSize={9.5}
              legendItems={[
                { value: '正增长', color: '#b91c1c' },
                { value: '负增长', color: '#16a34a' },
              ]}
              barSize={14}
            />
          </ChartContainer>

          {/* 右侧合并表：制造业 + 基建 细分行业投资累计同比 */}
          <ChartContainer delay="720ms" ariaLabel="制造业与基建细分行业投资累计同比合并表格" className="col-span-2">
            <div className="h-full flex flex-col">
              <div className="mb-2">
                <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  图2 制造业与基建细分行业投资累计同比（1-9月）
                </h3>
                <p className="text-xs text-webank-subtext mt-1">数据来源：国家统计局 | 单位：% | 仅近三个月标注红绿</p>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <table className="w-full h-full border-collapse text-[8px] leading-[1.1] table-fixed">
                  <thead>
                    <tr className="bg-webank-blue/10 text-webank-blue">
                      <th rowSpan={2} className="border border-slate-300 px-[1px] py-[2px] font-bold w-[34px]">时间</th>
                      <th colSpan={manufacturingTableColumns.length} className="border border-slate-300 px-[1px] py-[2px] font-bold">制造业</th>
                      <th colSpan={infrastructureTableColumns.length} className="border border-slate-300 px-[1px] py-[2px] font-bold">基建</th>
                    </tr>
                    <tr className="bg-webank-blue/10 text-webank-blue">
                      {mergedTableColumns.map((col) => (
                        <th
                          key={col.key}
                          className="border border-slate-300 px-[1px] py-[2px] font-bold align-middle"
                        >
                          {col.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mergedTableData.map((row, rowIndex) => {
                      const isLatest = rowIndex >= mergedTableData.length - 3;
                      return (
                        <tr key={row.period} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="border border-slate-300 px-[1px] py-[1px] text-center font-semibold text-slate-700 whitespace-nowrap">
                            {row.period}
                          </td>
                          {mergedTableColumns.map((col) => {
                            const value = Number(row[col.key as keyof typeof row]);
                            const colorClass = !isLatest
                              ? 'text-slate-800 font-semibold'
                              : value > 0
                                ? 'text-red-600'
                                : value < 0
                                  ? 'text-green-600'
                                  : 'text-slate-500';
                            return (
                              <td
                                key={col.key}
                                className={`border border-slate-300 px-[1px] py-[1px] text-center tabular-nums ${colorClass}`}
                              >
                                {value.toFixed(1)}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
