
import React from 'react';
import { IndustryGrowthTableData } from '../types';

interface CpiEightCategoriesTableProps {
  data: IndustryGrowthTableData;
}

export const CpiEightCategoriesTable: React.FC<CpiEightCategoriesTableProps> = ({ data }) => {
  const categories = Object.keys(data.industryData);
  const timeSeries = data.timeSeries;
  
  // Format numbers
  const formatNumber = (val: number | null) => {
    if (val === null) return '-';
    return val.toFixed(1);
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Title */}
      <div className="mb-2 flex items-baseline justify-between border-b border-slate-300 pb-1">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide">
          {data.title}
        </h3>
        <span className="text-[10px] text-webank-subtext">单位：{data.unit}</span>
      </div>

      {/* Table Container with Horizontal and Vertical Scroll */}
      <div className="flex-grow overflow-auto border border-slate-200 rounded-sm scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        <table className="w-full text-[10px] border-collapse min-w-[1000px]">
          <thead className="sticky top-0 z-20">
            <tr className="bg-webank-blue text-white">
              <th className="border border-slate-300 px-2 py-2 text-center font-bold sticky left-0 bg-webank-blue z-30 w-32">分类 \ 月份</th>
              {timeSeries.map((month) => (
                <th key={month} className="border border-slate-300 px-1 py-2 text-center font-bold whitespace-nowrap">
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat} className="hover:bg-slate-50 transition-colors">
                <td className="border border-slate-300 px-2 py-1.5 text-left font-semibold bg-slate-50 sticky left-0 z-10 shadow-[1px_0_3px_rgba(0,0,0,0.05)] whitespace-nowrap">
                  {cat.replace('CPI:', '').replace(':环比', '')}
                </td>
                {timeSeries.map((month, monthIdx) => {
                  const val = data.industryData[cat][monthIdx];
                  const isPositive = val !== null && val > 0;
                  const isNegative = val !== null && val < 0;
                  const isSignificant = val !== null && Math.abs(val) >= 1.0;
                  
                  return (
                    <td 
                      key={month} 
                      className={`border border-slate-300 px-1 py-1.5 text-center ${
                        isSignificant ? (isPositive ? 'bg-blue-50 font-bold' : 'bg-red-50 font-bold') : ''
                      } ${isNegative ? 'text-red-600' : 'text-slate-700'}`}
                    >
                      {formatNumber(val)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Legend and Source */}
      <div className="mt-2 flex justify-between items-center px-1">
        <div className="flex gap-4 text-[9px] text-webank-subtext">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-50 border border-blue-100"></div>
            <span>上涨显著</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-50 border border-red-100"></div>
            <span>下跌显著</span>
          </div>
        </div>
        <div className="text-[9px] text-slate-400 italic">
          数据来源：{data.source}
        </div>
      </div>
    </div>
  );
};
