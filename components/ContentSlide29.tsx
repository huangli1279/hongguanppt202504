import React from 'react';
import { BaseContentSlide } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { exportTableData, ExportTableItem } from '@/data';

export const ContentSlide29: React.FC = () => {
  const columns: ColumnConfig[] = [
    {
      key: 'name',
      title: '商品名称',
      width: '24%',
      align: 'left',
      render: (value, row: ExportTableItem) => (
        <div 
          className="truncate text-[8.5px] leading-tight"
          style={{ 
            paddingLeft: `${row.level * 6}px`, 
            fontWeight: row.isCategory ? '700' : '400',
            color: row.isCategory ? '#051c2c' : '#475569'
          }}
        >
          {value}
        </div>
      )
    },
    { 
      key: 'decAmount', 
      title: '12月金额', 
      width: '10%',
      align: 'right'
    },
    { 
      key: 'totalAmount', 
      title: '1-12月累计金额', 
      width: '14%',
      align: 'right'
    },
    { key: 'yoy12Qty', title: '1-12月数量累计同比', width: '13%', align: 'right', redThreshold: 10 },
    { key: 'yoy12Amt', title: '1-12月金额累计同比', width: '13%', align: 'right', redThreshold: 10 },
    { key: 'yoy6Qty', title: '1-6月数量累计同比', width: '13%', align: 'right' },
    { key: 'yoy6Amt', title: '1-6月金额累计同比', width: '13%', align: 'right' }
  ];

  return (
    <BaseContentSlide
      title={<>机电出口占比创新高，劳密产品表现疲软，高技术驱动结构升级</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full overflow-hidden -mt-6">
        {/* 核心结论区域 */}
        <div className="mb-1 flex-shrink-0 grid grid-cols-2 gap-2">
          <BaseCard 
            delay="100ms" 
            variant="accent"
            title="机电产品制造稳步领跑，全年出口占比提升至60.9%的历史高位"
          >
            <p className="text-[10px] leading-relaxed">
              机电产品全年累计同比增长<span className="text-webank-blue font-semibold">8.4%</span>，其中集成电路（<span className="text-red-500 font-semibold">26.8%</span>），“新三样”（电动载人汽车、锂电池、太阳能电池）（<span className="text-red-500 font-semibold">27.1%</span>）和船舶（<span className="text-red-500 font-semibold">26.7%</span>）贡献巨大；高新技术产品全年增长<span className="text-webank-blue font-semibold">7.5%</span>，充分兑现了中国制造在全球AI算力建设与新能源转型中的核心竞争力。
            </p>
          </BaseCard>
          <BaseCard 
            delay="200ms" 
            variant="default"
            title="劳动密集型产业下跌明显"
          >
            <p className="text-[10px] leading-relaxed">
              衣服（全年<span className="text-green-600 font-semibold">-5.0%</span>），箱包（全年<span className="text-green-600 font-semibold">-13.5%</span>），玩具（全年<span className="text-green-600 font-semibold">-12.7%</span>）和鞋靴（全年<span className="text-green-600 font-semibold">-11.3%</span>）等劳动密集型产业均下跌，体现传统支柱产业在存量博弈与产业链外迁压力下正向高端装备制造让位。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex-1 min-h-0 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="px-2 py-0.5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 h-5">
            <div className="flex items-center gap-2">
              <h3 className="text-[10px] font-bold text-webank-blue">主要商品出口额统计</h3>
              <span className="text-[8px] text-slate-400">数据来源：海关总署</span>
            </div>
            <div className="text-[8px] text-slate-500 font-medium">单位：百万美元</div>
          </div>
          <div className="flex-1 overflow-hidden">
            <BaseTable 
              data={exportTableData}
              columns={columns}
              rowHeight="auto"
              striped={true}
              bordered={true}
              colorizeNumbers={true}
            />
          </div>
          <div className="px-2 py-0 bg-slate-50 border-t border-slate-100 flex items-center h-3.5">
            <p className="text-[7.5px] text-slate-400 leading-tight truncate">
              注：1. “农产品*”“机电产品*”和“高新技术产品*”包括本表中已列名的有关商品，提请数据使用者注意。
            </p>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
