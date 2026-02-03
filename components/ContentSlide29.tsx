import React from 'react';
import { BaseContentSlide } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { exportTableData, ExportTableItem } from '@/data';

export const ContentSlide29: React.FC = () => {
  // 表格渲染辅助函数
  const renderYoy = (val: number | null) => {
    if (val === null) return <span className="text-slate-300">-</span>;
    // 只有涨幅或降幅超过 5% 时才标色（正红负绿）
    const isSignificant = Math.abs(val) > 5;
    const color = isSignificant 
      ? (val > 0 ? 'text-red-500' : 'text-green-600') 
      : 'text-slate-600';
    return <span className={`${color} font-medium`}>{val > 0 ? `+${val.toFixed(1)}` : val.toFixed(1)}</span>;
  };

  const columns: ColumnConfig[] = [
    {
      key: 'name',
      title: '商品名称',
      width: '24%',
      align: 'left',
      render: (value, row: ExportTableItem) => (
        <div 
          className="truncate text-[9px] leading-none"
          style={{ 
            paddingLeft: `${row.level * 8}px`, 
            fontWeight: row.isCategory ? '700' : '400',
            color: row.isCategory ? '#051c2c' : '#475569'
          }}
        >
          {value}
        </div>
      )
    },
    {
      key: 'dec',
      title: '12月',
      width: '10%',
      children: [
        { 
          key: 'decAmount', 
          title: '金额', 
          align: 'right',
          render: (val) => <span className="text-[9px] leading-none">{val?.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) || <span className="text-slate-300">-</span>}</span>
        }
      ]
    },
    {
      key: 'total',
      title: '1至12月累计',
      width: '14%',
      children: [
        { 
          key: 'totalAmount', 
          title: '金额', 
          align: 'right',
          render: (val) => <span className="text-[9px] leading-none">{val?.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) || <span className="text-slate-300">-</span>}</span>
        }
      ]
    },
    {
      key: 'yoy12',
      title: '1-12月累计比去年同期±%',
      width: '26%',
      children: [
        { key: 'yoy12Qty', title: '数量', align: 'right', render: (val) => <span className="text-[9px] leading-none">{renderYoy(val)}</span> },
        { key: 'yoy12Amt', title: '金额', align: 'right', render: (val) => <span className="text-[9px] leading-none">{renderYoy(val)}</span> }
      ]
    },
    {
      key: 'yoy6',
      title: '1-6月累计比去年同期±%',
      width: '26%',
      children: [
        { key: 'yoy6Qty', title: '数量', align: 'right', render: (val) => <span className="text-[9px] leading-none">{renderYoy(val)}</span> },
        { key: 'yoy6Amt', title: '金额', align: 'right', render: (val) => <span className="text-[9px] leading-none">{renderYoy(val)}</span> }
      ]
    }
  ];

  return (
    <BaseContentSlide
      title={<>机电出口占比创新高，劳密产品表现疲软，高技术驱动结构升级</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full overflow-hidden -mt-4">
        {/* 核心结论区域 */}
        <div className="mb-2 flex-shrink-0">
          <BaseCard 
            delay="100ms" 
            variant="accent"
          >
            <p className="text-xs leading-relaxed">
              机电产品制造稳步领跑，全年出口占比提升至<span className="text-webank-blue font-semibold">60.9%</span>的历史高位，全年累计同比增长<span className="text-webank-blue font-semibold">8.4%</span>，集成电路（<span className="text-red-500 font-semibold">26.8%</span>），汽车（<span className="text-red-500 font-semibold">21.4%</span>）和船舶（<span className="text-red-500 font-semibold">26.7%</span>）贡献巨大。高新技术产品全年增长<span className="text-webank-blue font-semibold">7.5%</span>，充分兑现了中国制造在全球AI算力建设与新能源转型中的核心竞争力。“新三样”（电动载人汽车、锂电池、太阳能电池）出口增长<span className="text-webank-blue font-semibold">27.1%</span>，自主品牌产品出口增长<span className="text-webank-blue font-semibold">12.9%</span>，占比提升1.4%。劳动密集型产业下跌明显，衣服（<span className="text-green-600 font-semibold">-5.0%</span>），箱包（<span className="text-green-600 font-semibold">-13.5%</span>）和鞋靴（<span className="text-green-600 font-semibold">-11.3%</span>），体现传统支柱产业在存量博弈与产业链外迁压力下正向高端装备制造让位。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex-1 min-h-0 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="px-2 py-0.5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 h-6">
            <div className="flex items-center gap-2">
              <h3 className="text-[10.5px] font-bold text-webank-blue">主要商品出口额统计</h3>
              <span className="text-[8.5px] text-slate-400">数据来源：海关总署</span>
            </div>
            <div className="text-[8.5px] text-slate-500 font-medium">单位：百万美元</div>
          </div>
          <div className="flex-1 overflow-hidden">
            <BaseTable 
              data={exportTableData}
              columns={columns}
              rowHeight="auto"
              striped={true}
              bordered={true}
              colorizeNumbers={false}
            />
          </div>
          <div className="px-2 py-0 bg-slate-50 border-t border-slate-100 flex items-center h-4">
            <p className="text-[8px] text-slate-400 leading-tight truncate">
              注：1. “农产品*”“机电产品*”和“高新技术产品*”包括本表中已列名的有关商品，提请数据使用者注意。
            </p>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
