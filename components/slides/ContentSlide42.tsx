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

export const ContentSlide42: React.FC = () => {
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
              <span className="font-semibold text-webank-blue">"中游主导、上游卡脖子、下游追赶"</span>
              的格局。今年以来国内AI产业链高景气，主要受益于海外 AI 资本开支扩张带来的全球需求外溢。
            </p>
          </BaseCard>
        </div>

        {/* 主体：左右两栏。AI产业链框架结构(上) + AI产业链分工体系(下) 在左栏，BarChart 在右栏 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-3">
          {/* LEFT：AI产业链框架结构（完整版） + AI产业链分工体系 */}
          <div className="min-h-0 flex flex-col gap-3">
            {/* AI产业链框架结构（完整版） */}
            <div className="flex-1 min-h-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm flex flex-col animate-fade-in-up fill-mode-forwards opacity-0" style={{ animationDelay: '120ms' }}>
              {/* 标题栏 + 来源同行 */}
              <div className="flex items-center justify-between px-2.5 py-1 border-b border-slate-200 bg-slate-50 flex-shrink-0">
                <h3 className="text-[11px] font-bold text-slate-700 tracking-wide">
                  AI产业链框架结构（完整版）
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-slate-400">来源：公开资料整理</span>
                  <span className="text-[9px] font-bold text-amber-600">1.0</span>
                </div>
              </div>

              {/* 上半：上游 + 中游 */}
              <div className="grid grid-cols-2 gap-1.5 p-1.5 flex-shrink-0">
                {/* 上游 · 基础层 */}
                <div className="rounded-md overflow-hidden border border-slate-100">
                  <div className="bg-amber-500 text-white text-center text-[10px] font-bold py-0.5">
                    上游 · 基础层
                  </div>
                  <div className="p-1 space-y-1 bg-amber-50">
                    {/* 核心硬件 */}
                    <div className="rounded border border-amber-200 bg-white overflow-hidden">
                      <div className="bg-orange-100 text-orange-800 text-[9px] font-bold px-1 py-0.5">
                        核心硬件
                      </div>
                      <div className="px-1 py-0.5 text-[9px] text-slate-700 leading-[1.3]">
                        芯片、服务器、液冷
                      </div>
                    </div>
                    {/* 配套基础设施 */}
                    <div className="rounded border border-amber-200 bg-white overflow-hidden">
                      <div className="bg-orange-100 text-orange-800 text-[9px] font-bold px-1 py-0.5">
                        配套基础设施
                      </div>
                      <div className="px-1 py-0.5 text-[9px] text-slate-700 leading-[1.3] space-y-0.5">
                        <p><span className="font-semibold">通信：</span>光模块、PCB</p>
                        <p><span className="font-semibold">配套设施：</span>IDC、电力</p>
                        <p><span className="font-semibold">其他：</span>机床、IP、EDA、辅料</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 中游 · 模型层 */}
                <div className="rounded-md overflow-hidden border border-slate-100">
                  <div className="bg-sky-500 text-white text-center text-[10px] font-bold py-0.5">
                    中游 · 模型层
                  </div>
                  <div className="p-1 space-y-1 bg-sky-50">
                    {/* 基础模型 */}
                    <div className="rounded border border-sky-200 bg-white overflow-hidden">
                      <div className="bg-sky-100 text-sky-800 text-[9px] font-bold px-1 py-0.5">
                        基础模型
                      </div>
                      <div className="px-1 py-0.5 text-[9px] text-slate-700 leading-[1.3]">
                        通用大模型、行业大模型、多模态、AI Agent
                      </div>
                    </div>
                    {/* 模型能力 */}
                    <div className="rounded border border-sky-200 bg-white overflow-hidden">
                      <div className="bg-sky-100 text-sky-800 text-[9px] font-bold px-1 py-0.5">
                        模型能力
                      </div>
                      <div className="px-1 py-0.5 text-[9px] text-slate-700 leading-[1.3]">
                        MaaS（模型API调用）、Token消耗
                      </div>
                    </div>
                    {/* 数据要素 */}
                    <div className="rounded border border-sky-200 bg-white overflow-hidden">
                      <div className="bg-sky-100 text-sky-800 text-[9px] font-bold px-1 py-0.5">
                        数据要素
                      </div>
                      <div className="px-1 py-0.5 text-[9px] text-slate-700 leading-[1.3]">
                        数据采集、数据标注、模型训练、模型推理、模型微调
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下半：下游 · 应用层 */}
              <div className="px-1.5 pb-1.5 flex-1 min-h-0">
                <div className="rounded-md overflow-hidden border border-slate-100 h-full flex flex-col">
                  <div className="bg-violet-500 text-white text-center text-[10px] font-bold py-0.5 flex-shrink-0">
                    下游 · 应用层
                  </div>
                  <div className="p-1 grid grid-cols-2 gap-1 bg-violet-50 flex-1 min-h-0">
                    {/* 行业应用 */}
                    <div className="rounded border border-violet-200 bg-white overflow-hidden">
                      <div className="bg-violet-100 text-violet-800 text-[9px] font-bold px-1 py-0.5">
                        行业应用
                      </div>
                      <div className="px-1 py-0.5 text-[9px] text-slate-700 leading-[1.3]">
                        金融、医疗、政务、教育、工业、交通
                      </div>
                    </div>
                    {/* C端超级应用 */}
                    <div className="rounded border border-violet-200 bg-white overflow-hidden">
                      <div className="bg-violet-100 text-violet-800 text-[9px] font-bold px-1 py-0.5">
                        C端超级应用
                      </div>
                      <div className="px-1 py-0.5 text-[9px] text-slate-700 leading-[1.3]">
                        AI搜索、智能助手、AIGC、Agent工具
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI产业链分工体系 表格 */}
            <div className="flex-1 min-h-0">
              <ChartContainer delay="600ms">
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
            </div>
          </div>

          {/* RIGHT：BarChart 占满右侧 */}
          <div className="min-h-0">
            <ChartContainer delay="720ms">
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
                xAxisHeight={100}
                xAxisInterval={0}
              />
            </ChartContainer>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};