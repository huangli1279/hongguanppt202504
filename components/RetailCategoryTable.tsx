
import React from 'react';

export const RetailCategoryTable: React.FC = () => {
  const categories = [
    { name: '通讯器材类', data24: ['10.4%', '12.0%', '15.1%'], data25: ['19.6%', '19.8%', '20.9%'] },
    { name: '家用电器类', data24: ['4.4%', '8.1%', '12.3%'], data25: ['4.4%', '2.1%', '0.1%'] },
    { name: '汽车类', data24: ['-1.5%', '-1.2%', '-0.5%'], data25: ['-3.0%', '-4.4%', '-5.0%'] },
    { name: '建筑装潢类', data24: ['-3.1%', '-2.5%', '-2.0%'], data25: ['-9.2%', '-10.4%', '-11.8%'] },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden">
      {/* Table Header Info */}
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
        <h3 className="text-xs font-bold text-webank-blue flex items-center gap-2">
          <div className="w-1 h-3 bg-webank-blue rounded-full"></div>
          核心品类月度累计同比对标表（24年Q4 vs 25年Q4）
        </h3>
        <span className="text-[10px] text-slate-500 font-medium">单位：%</span>
      </div>

      {/* Table Body */}
      <div className="flex-grow overflow-hidden flex flex-col">
        <table className="w-full h-full text-[10px] border-collapse table-fixed">
          <thead className="bg-slate-100">
            <tr>
              <th rowSpan={2} className="border-b border-r border-slate-200 px-1 py-1 text-center font-bold text-slate-600 bg-slate-100 w-20 text-[9px]">消费品类</th>
              <th colSpan={3} className="border-b border-r border-slate-200 px-1 py-1 text-center font-bold text-slate-600 text-[9px]">2024年 (Q4累计)</th>
              <th colSpan={3} className="border-b border-slate-200 px-1 py-1 text-center font-bold text-webank-blue text-[9px]">2025年 (Q4累计)</th>
            </tr>
            <tr>
              <th className="border-b border-r border-slate-200 px-1 py-1 text-center font-bold text-slate-500 text-[8px]">10月</th>
              <th className="border-b border-r border-slate-200 px-1 py-1 text-center font-bold text-slate-500 text-[8px]">11月</th>
              <th className="border-b border-r border-slate-200 px-1 py-1 text-center font-bold text-slate-500 text-[8px]">12月</th>
              <th className="border-b border-r border-slate-200 px-1 py-1 text-center font-bold text-webank-lightBlue text-[8px]">10月</th>
              <th className="border-b border-r border-slate-200 px-1 py-1 text-center font-bold text-webank-lightBlue text-[8px]">11月</th>
              <th className="border-b border-slate-200 px-1 py-1 text-center font-bold text-webank-lightBlue text-[8px]">12月</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr key={cat.name} className="hover:bg-blue-50/30 transition-colors border-b border-slate-100 last:border-0">
                <td className="border-r border-slate-200 px-2 py-1 text-left font-semibold text-slate-700 bg-slate-50/50 text-[9px]">
                  {cat.name}
                </td>
                {cat.data24.map((val, i) => (
                  <td key={`24-${i}`} className="border-r border-slate-100 px-1 py-1 text-center text-slate-500 text-[9px]">
                    {val}
                  </td>
                ))}
                {cat.data25.map((val, i) => {
                  const numVal = parseFloat(val);
                  const isPositive = numVal > 15;
                  const isNegative = numVal < 0;
                  return (
                    <td key={`25-${i}`} className={`border-r border-slate-100 last:border-r-0 px-1 py-1 text-center text-[9px] font-medium ${isPositive ? 'text-webank-blue font-bold' : isNegative ? 'text-red-600' : 'text-slate-700'}`}>
                      {val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="px-4 py-1.5 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
        <div className="flex gap-4 text-[8px]">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-webank-blue"></div>
            <span className="text-slate-500">高增长</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            <span className="text-slate-500">负增长</span>
          </div>
        </div>
        <div className="text-[8px] text-slate-400 italic">
          数据来源：国家统计局
        </div>
      </div>
    </div>
  );
};
