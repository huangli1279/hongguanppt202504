import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
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
  { key: 'region', title: '国家或地区', align: 'center', width: '58px' },
  { key: 'advantage', title: '核心参与方式和优势', align: 'left', width: '120px' },
  {
    key: 'industries',
    title: '具体产业和代表企业',
    align: 'left',
    render: (value: string[]) => (
      <div className="flex flex-col gap-0.5">
        {value.map((item, i) => (
          <p key={i} className="leading-[1.25]">
            {i + 1}. {item}
          </p>
        ))}
      </div>
    ),
  },
];

interface ChainNode {
  category: string;
  percentage: string;
  lines: string[];
  bgColor: string;
  headerColor: string;
  textColor: string;
}

const chainNodes: ChainNode[] = [
  {
    category: '上游·芯片设计',
    percentage: '≈0%',
    lines: ['英伟达/AMD/Google', '先进制程被封锁'],
    bgColor: 'bg-red-50',
    headerColor: 'bg-red-400',
    textColor: 'text-red-600',
  },
  {
    category: '上游·晶圆代工',
    percentage: '≈0%',
    lines: ['台积电/三星', '7nm以下受限'],
    bgColor: 'bg-red-50',
    headerColor: 'bg-red-400',
    textColor: 'text-red-600',
  },
  {
    category: '中游·封测',
    percentage: '~38%',
    lines: ['长电/通富/华天', '三龙头合计约35%'],
    bgColor: 'bg-emerald-50',
    headerColor: 'bg-emerald-500',
    textColor: 'text-emerald-600',
  },
  {
    category: '中游·光模块',
    percentage: '60%+',
    lines: ['中际旭创/新易盛', 'LightCounting'],
    bgColor: 'bg-teal-50',
    headerColor: 'bg-teal-500',
    textColor: 'text-teal-700',
  },
  {
    category: '中游·服务器代工',
    percentage: '~80%',
    lines: ['含台资ODM', 'TrendForce/Omdia'],
    bgColor: 'bg-teal-50',
    headerColor: 'bg-teal-600',
    textColor: 'text-teal-700',
  },
  {
    category: '下游·模型/应用',
    percentage: '~30%',
    lines: ['DeepSeek/通义/豆包', 'Token消耗占比'],
    bgColor: 'bg-blue-50',
    headerColor: 'bg-blue-500',
    textColor: 'text-blue-600',
  },
];

const ChevronArrow: React.FC<{ color: string }> = ({ color }) => (
  <div className="flex items-center justify-center flex-shrink-0 w-5">
    <svg viewBox="0 0 20 40" className="w-4 h-8" fill="none">
      <path d="M2 2 L16 20 L2 38" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export const ContentSlide43: React.FC = () => {
  return (
    <BaseContentSlide
      title="上述高景气行业背后，核心驱动力是AI产业链的全球扩张。那么中国在其中的定位是什么？"
    >
      <div className="flex flex-col h-full">
        <div className="mb-3 flex-shrink-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-webank-blue rounded-sm" />
            <h2 className="text-sm font-bold text-gray-800">全球AI产业链：中国在各环节的位置</h2>
          </div>

          <div className="flex items-stretch gap-0">
            {chainNodes.map((node, i) => (
              <React.Fragment key={node.category}>
                <div
                  className={`flex-1 rounded-lg overflow-hidden ${node.bgColor} border border-gray-100 shadow-sm
                    animate-fade-in-up fill-mode-forwards opacity-0`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className={`${node.headerColor} text-white text-center text-[10px] font-semibold py-1 px-1`}>
                    {node.category}
                  </div>
                  <div className="flex flex-col items-center justify-center py-2 px-1">
                    <span className={`text-lg font-bold ${node.textColor} leading-none`}>
                      {node.percentage}
                    </span>
                    <div className="mt-1 text-center">
                      {node.lines.map((line, j) => (
                        <p key={j} className="text-[9px] text-gray-500 leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
                {i < chainNodes.length - 1 && (
                  <ChevronArrow color="#94a3b8" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-[1fr_1.15fr] gap-3">
          <ChartContainer delay="600ms">
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

          <ChartContainer delay="720ms">
            <BaseTable
              data={aiChainGlobalParticipationData}
              columns={globalColumns}
              title="AI链全球参与情况"
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
    </BaseContentSlide>
  );
};
