import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
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
        { key: 'aviation', title: '航空运输', align: 'right' },
        { key: 'waterTransport', title: '水上运输', align: 'right' },
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
        { key: 'telecom', title: '电信传输', align: 'right' },
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
          <BaseCard title="基建发挥绝对托底作用" delay="200ms" variant="accent">
            <p>
              在“十五五”开局及“两重”重大工程加快推进背景下，一季度基建投资同比增长<span className="font-semibold">8.9%</span>，在三大支柱中表现最为坚挺。
            </p>
          </BaseCard>
          <BaseCard title="财政资金靠前发力" delay="400ms">
            <p>
              提前批项目清单、超长期特别国债、专项债券等资金相继下达，为基建投资提速提供保障，50亿元以上大项目增速达<span className="font-semibold">10.8%</span>。
            </p>
          </BaseCard>
          <BaseCard title="交通与信息链条高增" delay="600ms">
            <p>
              航空运输业增长<span className="font-semibold">43.3%</span>、水上运输业增长<span className="font-semibold">34.1%</span>，电信传输服务增长<span className="font-semibold">29.6%</span>，管道运输业仍维持<span className="font-semibold">99.5%</span>高增。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="800ms" className="flex-1 min-h-0">
          <BaseTable
            data={infrastructureInvestmentData}
            columns={columns}
            title="基础设施建设投资及分行业累计同比"
            subtitle="数据来源：国家统计局 | 单位：%"
            dateColumn="period"
            colorizeNumbers={false}
            cellClassName="px-2 text-[10px]"
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
