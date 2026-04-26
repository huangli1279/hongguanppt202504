import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { infrastructureInvestmentData } from '@/data/infrastructureInvestment';

export const ContentSlide22: React.FC = () => {
  const formatValue = (value: any) => {
    if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
    if (typeof value === 'number') {
      return value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    return value;
  };

  // 二级表头列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '日期', align: 'center' },
    { 
      key: 'infrastructure', 
      title: '基建投资', 
      align: 'right',
      render: (val) => <span className="text-red-500 font-semibold">{formatValue(val)}</span>
    },
    {
      key: 'transport',
      title: '交通运输、仓储和邮政业',
      children: [
        { key: 'transportTotal', title: '合计', align: 'right' },
        { 
          key: 'pipeline', 
          title: '管道运输', 
          align: 'right',
          render: (val) => <span className="text-red-500">{formatValue(val)}</span>
        },
        {
          key: 'aviation',
          title: '航空运输',
          align: 'right',
          render: (val) => <span className="text-red-500">{formatValue(val)}</span>
        },
        {
          key: 'waterTransport',
          title: '水上运输',
          align: 'right',
          render: (val) => <span className="text-red-500">{formatValue(val)}</span>
        },
        { key: 'loadingStorage', title: '装卸仓储', align: 'right' },
      ],
    },
    {
      key: 'waterEnv',
      title: '水利、环境和公共设施管理业',
      children: [
        { key: 'waterEnvTotal', title: '合计', align: 'right' },
        { 
          key: 'environmentManagement', 
          title: '环境管理', 
          align: 'right',
          render: (val) => {
            const formatted = formatValue(val);
            if (typeof val === 'number' && val < 0) {
              return <span className="text-green-600">{formatted}</span>;
            }
            return formatted;
          }
        },
        { 
          key: 'publicFacility', 
          title: '公共设施', 
          align: 'right',
          render: (val) => {
            const formatted = formatValue(val);
            if (typeof val === 'number' && val < 0) {
              return <span className="text-green-600">{formatted}</span>;
            }
            return formatted;
          }
        },
      ],
    },
    {
      key: 'electricity',
      title: '电力、热力、燃气及水的生产和供应业',
      children: [
        { key: 'electricityTotal', title: '合计', align: 'right' },
        { key: 'powerHeat', title: '电热', align: 'right' },
      ],
    },
    {
      key: 'information',
      title: '信息传输、软件和信息技术服务业',
      children: [
        { key: 'informationTotal', title: '合计', align: 'right' },
        {
          key: 'telecom',
          title: '电信传输',
          align: 'right',
          render: (val) => <span className="text-red-500">{formatValue(val)}</span>
        },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="基础建设投资同比大增8.9%"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="基建发挥绝对托底作用" delay="0ms" variant="accent">
            <p>
              在“十五五”开局及“两重”重大工程加快推进背景下，一季度基建投资同比增长<span className="font-semibold">8.9%</span>，在三大支柱中表现最为坚挺。
            </p>
          </BaseCard>
          <BaseCard title="管道运输业领跑高增" delay="120ms">
            <p>
              管道运输业累计同比增长<span className="text-red-500 font-semibold">99.5%</span>，受益于“十五五”能源基建大年（油气“一张网”2030年建成）、国家管网集中开工（三条主管道同步开工）、天然气刚需，以及专项债、超长期特别国债、1000亿元促内需专项资金与管网自有资金的持续注入。
            </p>
          </BaseCard>
          <BaseCard title="交通与信息链条高增" delay="600ms">
            <p>
              航空运输业增长<span className="text-red-500 font-semibold">43.3%</span>、水上运输业增长<span className="text-red-500 font-semibold">34.1%</span>，电信传输服务增长<span className="text-red-500 font-semibold">29.6%</span>，共同构成基建提速的主要支撑。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            data={infrastructureInvestmentData}
            columns={columns}
            title="基础设施建设投资及分行业累计同比"
            subtitle="数据来源：国家统计局 | 单位：%"
            dateColumn="period"
            colorizeNumbers={false}
            cellClassName="px-2 text-caption"
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
