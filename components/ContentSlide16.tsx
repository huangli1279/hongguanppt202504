import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';
import { ppiIndustryMomData } from '@/data/ppi';

const renderHighlight = (value: any, row: any) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const num = typeof value === 'number' ? value : parseFloat(value);
  if (isNaN(num)) return value;
  
  const formatted = num.toFixed(1);
  // periods: 2025-10, 2025-11, 2025-12
  if (['2025-10', '2025-11', '2025-12'].includes(row.period)) {
    return <span className="text-red-500">{formatted}</span>;
  }
  return formatted;
};

// 表格列配置 - 全部14个行业
const columns: ColumnConfig[] = [
  { key: 'period', title: '月份', width: '45px', align: 'center' },
  { key: 'lithiumBattery', title: '锂电池', width: '45px', align: 'right', render: renderHighlight },
  { key: 'photovoltaic', title: '光伏', width: '40px', align: 'right', render: renderHighlight },
  { key: 'electricalMachinery', title: '电气机械', width: '50px', align: 'right' },
  { key: 'computerComm', title: '计算机通信', width: '60px', align: 'right' },
  { key: 'coalMining', title: '煤炭', width: '40px', align: 'right', render: renderHighlight },
  { key: 'oilGas', title: '油气', width: '40px', align: 'right' },
  { key: 'ferrousMining', title: '黑色矿', width: '45px', align: 'right' },
  { key: 'nonFerrousMining', title: '有色矿', width: '45px', align: 'right', render: renderHighlight },
  { key: 'nonFerrousSmelting', title: '有色冶炼', width: '50px', align: 'right', render: renderHighlight },
  { key: 'ferrousSmelting', title: '黑色冶炼', width: '50px', align: 'right' },
  { key: 'chemicalFiber', title: '化纤', width: '40px', align: 'right' },
  { key: 'nonMetalMineral', title: '非金属矿', width: '50px', align: 'right' },
  { key: 'generalEquipment', title: '通用设备', width: '50px', align: 'right' },
  { key: 'automobile', title: '汽车', width: '40px', align: 'right' },
];

export const ContentSlide16: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          PPI分行业环比数据揭示价格结构性分化，
          <span className="text-webank-accent">政策效果与市场因素交织</span>
        </>
      }
      cardColumns={2}
      cards={
        <>
          <BaseCard title="反内卷政策显效" delay="200ms" variant="accent">
            <p>
              重点行业产能治理与市场秩序整治成效显现。锂离子电池（环比<span className="font-bold text-green-600">+1.0%</span>）价格连续3个月上涨，恶性价格战得到初步遏制。光伏产业链：10月光伏设备及元器件价格环比上涨<span className="font-bold">0.6%</span>，行业供需关系边际改善。
            </p>
          </BaseCard>

          <BaseCard title="输入性与季节性因素" delay="400ms">
            <p>
              <span className="font-bold text-webank-accent">输入性上涨：</span>受国际有色金属价格上涨带动，12月国内有色金属冶炼和压延加工业价格环比上涨<span className="font-bold text-green-600">2.8%</span>。<br />
              <span className="font-bold text-webank-accent">季节性支撑：</span>迎峰度冬带动煤炭开采和洗选业价格环比上涨<span className="font-bold">1.3%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="800ms" className="col-span-2">
          <BaseTable
            data={ppiIndustryMomData}
            columns={columns}
            title="工业生产者出厂价格指数（PPI）分行业环比数据"
            subtitle="单位：%"
            dateColumn="period"
            colorizeNumbers={false}
            bodyTextColor="#000000"
          />
        </ChartContainer>
      }
    />
  );
};
