import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { aiChainExportData } from '@/data/aiChainExport';
import { aiChainGlobalParticipationData } from '@/data/aiChainGlobal';

const keptExportCategories = [
  '晶圆制造设备',
  '处理器/控制器IC',
  '计算机存储单元',
  '存储器IC',
  '光模块及光通信零件',
  'PCB',
  '液冷模块/冷却塔',
];

const filteredExportData = keptExportCategories
  .map((category) => aiChainExportData.find((d) => d.category === category))
  .filter((d): d is NonNullable<typeof d> => Boolean(d));

const globalColumns: ColumnConfig[] = [
  { key: 'country', title: '国家或地区', align: 'center', width: '85px' },
  { key: 'region', title: '产业链环节', align: 'center', width: '75px' },
  { key: 'advantage', title: '核心分工', align: 'left', width: '120px' },
  {
    key: 'industries',
    title: '代表企业',
    align: 'left',
    render: (value: string[]) => (
      <div className="flex flex-col gap-0.5">
        {value.map((item, i) => (
          <p key={i} className="leading-[1.25]">
            {item}
          </p>
        ))}
      </div>
    ),
  },
];

export const ContentSlide43: React.FC = () => {
  return (
    <BaseContentSlide
      title="上述高景气行业背后，核心驱动力是AI产业链的全球扩张"
    >
      <div className="flex flex-col h-full">
        {/* 顶部：分组小标题 + 叙述 BaseCard */}
        <div className="flex-shrink-0 mb-1.5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-4 bg-webank-blue rounded-sm" />
            <h2 className="text-sm font-bold text-gray-800">全球AI产业链：</h2>
          </div>

          <BaseCard delay="0ms" variant="accent" className="!p-2.5 gap-1">
            <p className="text-[12.5px] leading-snug">
              中国在AI全球产业链中处于
              <span className="font-semibold text-webank-blue">"中游主导、下游追赶"</span>
              的格局。今年以来国内AI产业链高景气，主要受益于海外 AI 资本开支扩张带来的全球需求外溢。
            </p>
          </BaseCard>
        </div>

        {/* 主体：AI产业链框架结构（上游+中游并排，下游在右侧） */}
        <div className="flex-shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm flex flex-col animate-fade-in-up fill-mode-forwards opacity-0" style={{ animationDelay: '120ms' }}>
          {/* 标题栏 + 来源 */}
          <div className="flex items-center justify-between px-2.5 py-1 border-b border-slate-200 bg-slate-50 flex-shrink-0">
            <h3 className="text-[11px] font-bold text-slate-700 tracking-wide">
              半导体产业链结构
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-slate-400">来源：公开资料整理</span>
            </div>
          </div>

          {/* 框架主体：半导体产业链结构 */}
          <div className="flex flex-1 min-h-0 p-1.5 gap-1.5">
            {/* 上游：半导体核心链 */}
            <div className="flex-1 rounded-md overflow-hidden border border-slate-100">
              <div className="bg-[#1B4F72] text-white text-center text-[10px] font-bold py-0.5">
                半导体核心链（上游）
              </div>
              <div className="p-1 space-y-1 bg-blue-50">
                {/* 芯片设计 */}
                <div className="rounded border border-blue-200 bg-white overflow-hidden">
                  <div className="bg-blue-100 text-blue-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    芯片设计
                  </div>
                </div>
                {/* 晶圆制造 */}
                <div className="rounded border border-blue-200 bg-white overflow-hidden">
                  <div className="bg-blue-100 text-blue-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    晶圆制造
                  </div>
                </div>
                {/* 封测 */}
                <div className="rounded border border-blue-200 bg-white overflow-hidden">
                  <div className="bg-blue-100 text-blue-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    封测
                  </div>
                </div>
              </div>
            </div>

            {/* 中游：算力硬件中游 */}
            <div className="flex-1 rounded-md overflow-hidden border border-slate-100">
              <div className="bg-[#8ECAE6] text-slate-800 text-center text-[10px] font-bold py-0.5">
                算力硬件中游
              </div>
              <div className="p-1 space-y-1 bg-sky-50">
                {/* 光模块 */}
                <div className="rounded border border-sky-200 bg-white overflow-hidden">
                  <div className="bg-sky-100 text-sky-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    光模块
                  </div>
                </div>
                {/* 连接器 / PCB / 电源 */}
                <div className="rounded border border-sky-200 bg-white overflow-hidden">
                  <div className="bg-sky-100 text-sky-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    连接器 / PCB / 电源
                  </div>
                </div>
                {/* 服务器整机 */}
                <div className="rounded border border-sky-200 bg-white overflow-hidden">
                  <div className="bg-sky-100 text-sky-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    服务器整机
                  </div>
                </div>
              </div>
            </div>

            {/* 下游：软件与下游 */}
            <div className="flex-1 rounded-md overflow-hidden border border-slate-100">
              <div className="bg-[#E8B923] text-slate-800 text-center text-[10px] font-bold py-0.5">
                软件与下游
              </div>
              <div className="p-1 space-y-1 bg-amber-50">
                {/* 算力集群 */}
                <div className="rounded border border-amber-200 bg-white overflow-hidden">
                  <div className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    算力集群
                  </div>
                </div>
                {/* 大模型 */}
                <div className="rounded border border-amber-200 bg-white overflow-hidden">
                  <div className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    大模型
                  </div>
                </div>
                {/* AI行业应用 */}
                <div className="rounded border border-amber-200 bg-white overflow-hidden">
                  <div className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1 py-0.5 text-center">
                    AI行业应用
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部：AI产业链分工体系 + BarChart 并列 */}
        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
          {/* 左侧：AI产业链分工体系 表格 */}
          <ChartContainer delay="600ms" className="h-full">
            <BaseTable
              data={aiChainGlobalParticipationData}
              columns={globalColumns}
              title="AI产业链分工体系"
              subtitle="数据来源：公开资料整理"
              colorizeNumbers={false}
              striped
              rowHeight="auto"
              cellClassName="!px-1.5 !py-0.5 text-[9px] leading-tight align-top"
              headerCellClassName="!px-1.5 !py-1 whitespace-nowrap text-[9px] leading-tight"
            />
          </ChartContainer>

          {/* 右侧：BarChart */}
          <ChartContainer delay="720ms" className="h-full">
            <BaseBarChart
              data={filteredExportData}
              title="中国AI链参与情况：出口同比增速"
              subtitle="数据来源：海关总署 | 单位：%"
              xAxisKey="category"
              bars={[
                { dataKey: 'y2024', name: "'24年出口同比增速", color: '#1B4F72' },
                { dataKey: 'y2025', name: "'25年出口同比增速", color: '#8ECAE6' },
                { dataKey: 'y2026q1', name: "'26-Q1出口同比增速", color: '#E8B923' },
              ]}
              legendOrder={["'24年出口同比增速", "'25年出口同比增速", "'26-Q1出口同比增速"]}
              yAxisDomain={[-40, 160]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              showLabels={false}
              barSize={12}
              xAxisAngle={-90}
              xAxisHeight={70}
              xAxisInterval={0}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};