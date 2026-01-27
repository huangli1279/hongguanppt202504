
import React from 'react';
import { IndustryGrowthTableData } from '../types';

interface IndustryGrowthTableChartProps {
  data: IndustryGrowthTableData;
}

export const IndustryGrowthTableChart: React.FC<IndustryGrowthTableChartProps> = ({ data }) => {
  // Extract the industries from the data
  const industries = Object.keys(data.industryData);
  
  // Industry name abbreviation mapping
  const abbreviateIndustry = (name: string): string => {
    const abbrevMap: { [key: string]: string } = {
      "煤炭开采和洗选业": "煤炭",
      "石油和天然气开采业": "油气",
      "化学原料和化学制品制造业": "化工",
      "橡胶和塑料制品业": "橡塑",
      "非金属矿物制品业": "非金属",
      "黑色金属冶炼和压延加工业": "黑色金属",
      "有色金属冶炼和压延加工业": "有色金属",
      "金属制品业": "金属制品",
      "通用设备制造业": "通用设备",
      "专用设备制造业": "专用设备",
      "电气机械和器材制造业": "电气机械",
      "农副食品加工业": "农副食品",
      "食品制造业": "食品",
      "酒、饮料和精制茶制造业": "酒饮料",
      "纺织业": "纺织",
      "医药制造业": "医药",
      "汽车制造业": "汽车",
      "铁路、船舶、航空航天和其他运输设备制造业": "运输设备",
      "计算机、通信和其他电子设备制造业": "电子设备"
    };
    return abbrevMap[name] || name;
  };
  
  // Define color coding function based on value
  const getColorClass = (value: number | null) => {
    if (value === null) return 'text-gray-400';
    if (value >= 9) return 'text-green-700 font-bold';
    if (value >= 5) return 'text-green-600 font-semibold';
    if (value >= 0) return 'text-gray-700';
    if (value >= -5) return 'text-orange-600';
    return 'text-red-600 font-semibold';
  };
  
  // Get background color for cell
  const getBgClass = (value: number | null) => {
    if (value === null) return 'bg-gray-50';
    if (value >= 9) return 'bg-green-50';
    if (value >= 5) return 'bg-green-50/50';
    if (value >= 0) return '';
    if (value >= -5) return 'bg-orange-50/50';
    return 'bg-red-50';
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Chart Title */}
      <div className="mb-2 flex-shrink-0">
        <h3 className="text-xs font-bold text-webank-blue">{data.title}</h3>
        <p className="text-[9px] text-webank-subtext">数据来源: {data.source} | 单位: {data.unit}</p>
      </div>

      {/* Table Container - Transposed layout (months as rows, industries as columns) */}
      <div className="flex-shrink-0 overflow-hidden border border-gray-200 rounded">
        <table className="w-full text-[9.5px] border-collapse">
          <thead className="bg-webank-blue text-white">
            <tr>
              <th className="px-2.5 py-2 text-left font-semibold border-r border-white/20 min-w-[55px] sticky left-0 bg-webank-blue z-20">月份</th>
              {industries.map((industry, idx) => (
                <th key={idx} className="px-2 py-2 text-center font-semibold border-r border-white/20 min-w-[48px]">
                  {abbreviateIndustry(industry)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.timeSeries.map((month, monthIdx) => (
              <tr 
                key={month} 
                className={`${monthIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}
              >
                <td className="px-2.5 py-2 text-left border-r border-gray-200 font-medium text-gray-800 sticky left-0 bg-inherit z-10">
                  {month.split('-')[1]}月
                </td>
                {industries.map((industry, industryIdx) => {
                  const value = data.industryData[industry][monthIdx];
                  return (
                    <td 
                      key={industryIdx} 
                      className={`px-2 py-2 text-center border-r border-gray-100 ${getBgClass(value)}`}
                    >
                      <span className={getColorClass(value)}>
                        {value === null ? '-' : value.toFixed(1)}
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
      <div className="flex items-center gap-3 mt-2 text-[9px] text-gray-600 flex-shrink-0">
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 bg-green-50 border border-green-200"></div>
          <span>高增长 (≥5%)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 bg-white border border-gray-200"></div>
          <span>正增长 (0-5%)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 bg-red-50 border border-red-200"></div>
          <span>负增长 (&lt;0%)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 bg-gray-50 border border-gray-200"></div>
          <span>无数据</span>
        </div>
      </div>
    </div>
  );
};
