import React from 'react';
import { IndustryGrowthTableData } from '../types';

interface IndustryGrowthTableChartProps {
  data: IndustryGrowthTableData;
}

export const IndustryGrowthTableChart: React.FC<IndustryGrowthTableChartProps> = ({ data }) => {
  // Extract the industries from the data
  const industries = Object.keys(data.industryData);
  
  // Define color coding function based on value and month
  const getColorClass = (value: number | null, month: string) => {
    if (value === null) return 'text-gray-400';
    // Only apply color coding for 2025-10, 2025-11, and 2025-12
    const highlightMonths = ["2025-10", "2025-11", "2025-12"];
    const shouldHighlight = highlightMonths.includes(month);
    
    if (!shouldHighlight) return 'text-gray-700';

    if (value >= 5) return 'text-green-700 font-bold';
    if (value >= 0) return 'text-gray-700';
    return 'text-red-600 font-bold';
  };
  
  // Get background color for cell
  const getBgClass = (value: number | null, month: string) => {
    if (value === null) return 'bg-gray-50';
    // Only apply color coding for 2025-10, 2025-11, and 2025-12
    const highlightMonths = ["2025-10", "2025-11", "2025-12"];
    const shouldHighlight = highlightMonths.includes(month);

    if (!shouldHighlight) return '';

    if (value >= 5) return 'bg-green-50';
    if (value >= 0) return '';
    return 'bg-red-50';
  };

  return (
    <div className="w-full h-full flex flex-col min-h-0">
      {/* Chart Title */}
      <div className="mb-1 flex-shrink-0">
        <h3 className="text-[11px] font-bold text-webank-blue">{data.title}</h3>
        <p className="text-[8px] text-webank-subtext">数据来源: {data.source} | 单位: {data.unit}</p>
      </div>

      {/* Table Container - Months as rows, Industry as columns (Transposed) */}
      <div className="flex-grow border border-gray-200 rounded min-h-0 overflow-hidden">
        <table className="w-full h-full text-[7.5px] border-collapse table-fixed">
          <thead className="bg-webank-blue text-white">
            <tr className="h-[24px]">
              <th className="px-1 py-0.5 text-center font-semibold border-r border-white/20 w-[6%]">月份</th>
              {industries.map((industry, idx) => (
                <th key={idx} className="px-0.5 py-0.5 text-center font-semibold border-r border-white/20 leading-[1.1] whitespace-normal break-words">
                  {industry}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.timeSeries.map((month, monthIdx) => (
              <tr 
                key={month} 
                className={`${monthIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}
                style={{ height: `${100 / (data.timeSeries.length + 1)}%` }}
              >
                <td className="px-1 py-0 text-center border-r border-gray-200 font-medium text-gray-800">
                  {month.split('-')[1]}月
                </td>
                {industries.map((industry, industryIdx) => {
                  const value = data.industryData[industry][monthIdx];
                  return (
                    <td 
                      key={industryIdx} 
                      className={`px-0.5 py-0 text-center border-r border-gray-100 ${getBgClass(value, month)}`}
                    >
                      <span className={getColorClass(value, month)}>
                        {value === undefined || value === null ? '-' : value.toFixed(1)}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 mt-1 text-[7.5px] text-gray-600 flex-shrink-0">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-green-50 border border-green-200"></div>
          <span>高增长 (≥5%)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-white border border-gray-200"></div>
          <span>正增长 (0-5%)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-red-50 border border-red-200"></div>
          <span>负增长 (&lt;0%)</span>
        </div>
        <span className="ml-2 text-webank-subtext font-medium">* 仅 10-12 月进行颜色标注</span>
      </div>
    </div>
  );
};
