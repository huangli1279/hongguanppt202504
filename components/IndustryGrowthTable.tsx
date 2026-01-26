import React from 'react';
import { IndustryGrowthTableData } from '../types';

interface IndustryGrowthTableProps {
  data: IndustryGrowthTableData;
}

export const IndustryGrowthTable: React.FC<IndustryGrowthTableProps> = ({ data }) => {
  const industries = Object.keys(data.industryData);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2 flex items-baseline justify-between border-b border-slate-300 pb-1">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide">
          {data.title}
        </h3>
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-webank-subtext font-medium">12月重点行业表现分化</span>
          <span className="text-[10px] text-webank-subtext">单位：{data.unit}</span>
        </div>
      </div>

      <div className="flex-grow overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        <table className="w-full text-[9px] border-collapse table-fixed min-w-[1500px]">
          <thead className="sticky top-0 z-20">
            <tr className="bg-[#051c2c] text-white">
              <th className="border border-slate-300 px-1 py-2 text-center font-bold w-16 sticky left-0 bg-[#051c2c] z-30">月份</th>
              {industries.map((industry) => (
                <th key={industry} className="border border-slate-300 px-1 py-2 text-center font-bold leading-tight">
                  {industry}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.timeSeries.map((month, monthIdx) => (
              <tr key={month} className="hover:bg-slate-50 transition-colors">
                <td className="border border-slate-300 px-1 py-2 text-center font-semibold bg-slate-50 sticky left-0 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)]">
                  {month.replace('2025-', '')}月
                </td>
                {industries.map((industry) => {
                  const val = data.industryData[industry][monthIdx];
                  const isHigh = val !== null && val >= 10;
                  const isLow = val !== null && val < 0;
                  
                  return (
                    <td 
                      key={industry} 
                      className={`border border-slate-300 px-1 py-2 text-center ${
                        isHigh ? 'bg-blue-50 text-webank-blue font-bold' : 
                        isLow ? 'bg-red-50 text-red-600 font-bold' : ''
                      }`}
                    >
                      {val !== null ? val.toFixed(1) : '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-1 flex justify-between items-center">
        <div className="flex gap-4 text-[8px]">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-50 border border-slate-200"></div>
            <span>增速 ≥ 10%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-50 border border-slate-200"></div>
            <span>负增长</span>
          </div>
        </div>
        <div className="text-[8px] text-slate-400 italic">
          数据来源：{data.source}
        </div>
      </div>
    </div>
  );
};
