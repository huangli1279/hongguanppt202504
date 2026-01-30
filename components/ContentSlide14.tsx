import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';
import { ppiIndustryMomData } from '../data';
import { Shield, Globe, BarChart3 } from 'lucide-react';

// 数值渲染函数：正值绿色，负值红色，null显示为"-"
const renderValue = (value: number | null) => {
  if (value === null) return <span className="text-slate-400">-</span>;
  const color = value > 0 ? 'text-green-600' : value < 0 ? 'text-red-500' : 'text-slate-600';
  const prefix = value > 0 ? '+' : '';
  return <span className={color}>{prefix}{value.toFixed(1)}</span>;
};

// 表格列配置 - 全部14个行业
const columns: ColumnConfig[] = [
  { key: 'period', title: '月份', width: '45px', align: 'center' },
  { key: 'lithiumBattery', title: '锂电池', width: '45px', align: 'right', render: (v) => renderValue(v) },
  { key: 'photovoltaic', title: '光伏', width: '40px', align: 'right', render: (v) => renderValue(v) },
  { key: 'electricalMachinery', title: '电气机械', width: '50px', align: 'right', render: (v) => renderValue(v) },
  { key: 'computerComm', title: '计算机通信', width: '60px', align: 'right', render: (v) => renderValue(v) },
  { key: 'coalMining', title: '煤炭', width: '40px', align: 'right', render: (v) => renderValue(v) },
  { key: 'oilGas', title: '油气', width: '40px', align: 'right', render: (v) => renderValue(v) },
  { key: 'ferrousMining', title: '黑色矿', width: '45px', align: 'right', render: (v) => renderValue(v) },
  { key: 'nonFerrousMining', title: '有色矿', width: '45px', align: 'right', render: (v) => renderValue(v) },
  { key: 'nonFerrousSmelting', title: '有色冶炼', width: '50px', align: 'right', render: (v) => renderValue(v) },
  { key: 'ferrousSmelting', title: '黑色冶炼', width: '50px', align: 'right', render: (v) => renderValue(v) },
  { key: 'chemicalFiber', title: '化纤', width: '40px', align: 'right', render: (v) => renderValue(v) },
  { key: 'nonMetalMineral', title: '非金属矿', width: '50px', align: 'right', render: (v) => renderValue(v) },
  { key: 'generalEquipment', title: '通用设备', width: '50px', align: 'right', render: (v) => renderValue(v) },
  { key: 'automobile', title: '汽车', width: '40px', align: 'right', render: (v) => renderValue(v) },
];

export const ContentSlide14: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          PPI分行业环比数据揭示价格结构性分化，
          <span className="text-webank-accent">政策效果与市场因素交织</span>
        </>
      }
      cardColumns={3}
      cards={
        <>
          <BaseCard title="反内卷政策显效" icon={Shield} delay="100ms">
            <p>
              重点行业产能治理与市场秩序整治成效显现。锂离子电池（环比<span className="font-bold text-green-600">+1.0%</span>）价格连续3个月上涨，恶性价格战得到初步遏制。光伏产业链：10月光伏设备及元器件价格环比上涨<span className="font-bold">0.6%</span>，行业供需关系边际改善。
            </p>
          </BaseCard>

          <BaseCard title="输入性与季节性因素" icon={Globe} delay="200ms">
            <p>
              <span className="font-bold text-webank-accent">输入性上涨：</span>受国际铜价上涨带动，12月国内有色金属冶炼和压延加工业价格环比上涨<span className="font-bold text-green-600">2.8%</span>。<br />
              <span className="font-bold text-webank-accent">季节性支撑：</span>迎峰度冬带动煤炭开采和洗选业价格环比上涨<span className="font-bold">1.3%</span>。
            </p>
          </BaseCard>

          <BaseCard title="结构分化明显" icon={BarChart3} delay="300ms">
            <p>
              新兴产业（锂电池、光伏、电气机械）价格波动大，但整体呈上涨趋势。传统行业（煤炭、金属矿采选）受国际大宗商品和季节性因素影响显著。计算机通信行业保持稳定，显示高科技制造需求韧性。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="400ms" className="col-span-2">
          <BaseTable
            data={ppiIndustryMomData}
            columns={columns}
            title="工业生产者出厂价格指数（PPI）分行业环比数据"
            subtitle="单位：%"
            rowHeight="auto"
            stickyHeader={true}
            dateColumn="period"
            highlightRows={[11]}
            highlightColor="rgba(0, 169, 244, 0.15)"
          />
        </ChartContainer>
      }
    />
  );
};
