import React from 'react';
import { IndustryGrowthTableData } from '../types';

interface InfrastructureTableProps {
  data: IndustryGrowthTableData;
}

export const InfrastructureTable: React.FC<InfrastructureTableProps> = ({ data }) => {
  const industries = Object.keys(data.industryData);

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden">
      {/* Table Header Info */}
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
        <h3 className="text-xs font-bold text-webank-blue flex items-center gap-2">
          <div className="w-1 h-3 bg-webank-blue rounded-full"></div>
          {data.title}
        </h3>
        <span className="text-[10px] text-slate-500 font-medium">单位：{data.unit}</span>
      </div>

      {/* Table Body */}
      <div className="flex-grow overflow-hidden flex flex-col">
        <div className="flex-grow overflow-hidden">
          <table className="w-full text-[10px] border-collapse table-auto">
            <thead className="bg-slate-100">
              <tr>
                <th className="border-b border-r border-slate-200 px-0.5 py-1.5 text-center font-bold text-slate-600 bg-slate-100 w-12">月份</th>
                {industries.map((industry) => (
                  <th key={industry} className="border-b border-slate-200 px-0.5 py-1.5 text-center font-bold text-slate-600 leading-tight text-[8.5px]">
                    {industry}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.timeSeries.map((month, monthIdx) => (
                <tr key={month} className="hover:bg-blue-50/30 transition-colors border-b border-slate-100 last:border-0">
                  <td className="border-r border-slate-200 px-0.5 py-1 text-center font-semibold text-slate-500 bg-slate-50/50">
                    {month.substring(2)}
                  </td>
                  {industries.map((industry) => {
                    const val = data.industryData[industry][monthIdx];
                    const isHigh = val !== null && val >= 10;
                    const isLow = val !== null && val < 0;
                    
                    return (
                      <td 
                        key={industry} 
                        className={`px-0.5 py-1 text-center border-r border-slate-100 last:border-r-0 ${
                          isHigh ? 'text-webank-blue font-bold' : 
                          isLow ? 'text-red-600 font-bold' : 'text-slate-600'
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
      </div>

      {/* Table Footer */}
      <div className="px-4 py-1.5 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
        <div className="flex gap-4 text-[9px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-webank-blue"></div>
            <span className="text-slate-500">增速 ≥ 10%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-slate-500">负增长</span>
          </div>
        </div>
        <div className="text-[9px] text-slate-400 italic font-medium">
          数据来源：{data.source}
        </div>
      </div>
    </div>
  );
};
