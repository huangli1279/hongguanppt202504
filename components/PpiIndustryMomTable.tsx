
import React from 'react';
import { PpiIndustryMomDataPoint } from '../types';

interface PpiIndustryMomTableProps {
  data: PpiIndustryMomDataPoint[];
}

export const PpiIndustryMomTable: React.FC<PpiIndustryMomTableProps> = ({ data }) => {
  // Industry name abbreviation mapping
  const industryMap: { [key: string]: string } = {
    'lithium': '锂电池',
    'solar': '光伏设备',
    'electronics': '计算机通信',
    'coal': '煤炭开采',
    'oil': '石油和天然气开采',
    'ferrousMining': '黑色金属矿采',
    'nonFerrous': '有色金属矿采',
    'chemicals': '化学制品',
    'nonMetals': '非金属矿物制品',
    'ferrousSmelting': '黑色金属冶炼',
    'generalEquip': '通用设备',
    'automotive': '汽车制造',
    'electrical': '电气机械制造'
  };
  
  // Extract industry keys (excluding 'month')
  const industries = Object.keys(data[0] || {}).filter(key => key !== 'month');
  
  // Define color coding function based on value
  const getColorClass = (value: number | null, month: string) => {
    if (value === null || value === undefined) return 'text-gray-400';
    
    // Only highlight for 2025-10, 2025-11, 2025-12
    const shouldHighlight = ['2025-10', '2025-11', '2025-12'].includes(month);
    if (!shouldHighlight) return 'text-gray-700';

    if (value >= 2.0) return 'text-green-700 font-bold';
    if (value >= 0.5) return 'text-green-600 font-semibold';
    if (value >= 0) return 'text-gray-700';
    if (value >= -1.0) return 'text-orange-600';
    return 'text-red-600 font-semibold';
  };
  
  // Get background color for cell
  const getBgClass = (value: number | null, month: string) => {
    if (value === null || value === undefined) return 'bg-gray-50';
    
    // Only highlight for 2025-10, 2025-11, 2025-12
    const shouldHighlight = ['2025-10', '2025-11', '2025-12'].includes(month);
    if (!shouldHighlight) return '';

    if (value >= 2.0) return 'bg-green-50';
    if (value >= 0.5) return 'bg-green-50/50';
    if (value >= 0) return '';
    if (value >= -1.0) return 'bg-orange-50/50';
    return 'bg-red-50';
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Chart Title */}
      <div className="mb-2 flex-shrink-0">
        <h3 className="text-xs font-bold text-webank-blue">工业生产者出厂价格指数(PPI)分行业环比数据</h3>
        <p className="text-[9px] text-webank-subtext">数据来源: 国家统计局 | 单位: %</p>
      </div>

      {/* Table Container */}
      <div className="flex-grow overflow-hidden border border-gray-200 rounded">
        <table className="w-full h-full text-[9px] border-collapse">
          <thead className="bg-webank-blue text-white">
            <tr>
              <th className="px-2.5 py-1.5 text-left font-semibold border-r border-white/20 min-w-[55px] sticky left-0 bg-webank-blue z-20">月份</th>
              {industries.map((industry, idx) => (
                <th key={idx} className="px-2 py-1.5 text-center font-semibold border-r border-white/20 min-w-[46px]">
                  {industryMap[industry] || industry}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice().reverse().map((row, rowIdx) => (
              <tr 
                key={row.month} 
                className={`${rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}
              >
                <td className="px-2.5 py-1 text-left border-r border-gray-200 font-medium text-gray-800 sticky left-0 bg-inherit z-10">
                  {row.month}
                </td>
                {industries.map((industry, industryIdx) => {
                  const value = row[industry] as number;
                  return (
                    <td 
                      key={industryIdx} 
                      className={`px-2 py-1 text-center border-r border-gray-100 ${getBgClass(value, row.month)}`}
                    >
                      <span className={getColorClass(value, row.month)}>
                        {value === null || value === undefined ? '-' : value.toFixed(1)}
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
      <div className="flex items-center gap-3 mt-1.5 text-[8.5px] text-gray-600 flex-shrink-0">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-50 border border-green-200"></div>
          <span>大幅上涨 (≥0.5%)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-white border border-gray-200"></div>
          <span>小幅上涨 (0-0.5%)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-orange-50 border border-orange-200"></div>
          <span>小幅下降 (-1.0%-0%)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-50 border border-red-200"></div>
          <span>大幅下降 (&lt;-1.0%)</span>
        </div>
      </div>
    </div>
  );
};
