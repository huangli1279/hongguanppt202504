import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { aiChainExportData } from '@/data/aiChainExport';
import { aiChainGlobalParticipationData } from '@/data/aiChainGlobal';

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

export const ContentSlide40: React.FC = () => {
  return (
    <BaseContentSlide
      title="上述高景气行业背后，核心驱动力是AI产业链的全球扩张。那么中国在其中的定位是什么？"
    >
      <div className="flex flex-col h-full">
        <div className="mb-3 flex-shrink-0">
          <BaseCard title="中国在AI全球产业链中的定位" delay="0ms" variant="accent" className="!p-3 gap-1">
            <p className="text-sm leading-snug">
              中国在AI全球产业链中处于"中游主导、上游卡脖子、下游追赶"的格局。今年以来国内AI产业链高景气，主要受益于海外
              AI 资本开支扩张带来的全球需求外溢。中国在芯片价值链占比约
              <span className="text-red-500 font-semibold">6-8%</span>
              ，但在AI服务器/光模块等配套环节全球份额
              <span className="text-red-500 font-semibold">60%+</span>
              ，量大利薄。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-[1fr_1.15fr] gap-3">
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={aiChainExportData}
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
              barSize={4}
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
