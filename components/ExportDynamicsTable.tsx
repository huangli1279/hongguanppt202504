import React from 'react';

interface ExportDynamicsTableProps {
  data: {
    "图表标题": string;
    "单位": string;
    "时间序列": string[];
    "核心指标": {
      [key: string]: number[];
    };
  };
}

export const ExportDynamicsTable: React.FC<ExportDynamicsTableProps> = ({ data }) => {
  const indicators = Object.keys(data.核心指标);
  
  return (
    <div className="w-full h-full flex flex-col">
      {/* Title */}
      <div className="mb-2 flex items-baseline justify-between">
        <h3 className="text-sm font-bold text-webank-blue">{data.图表标题}</h3>
        <span className="text-[10px] text-webank-subtext">单位：{data.单位}</span>
      </div>

      {/* Table */}
      <div className="flex-grow overflow-x-auto overflow-y-hidden">
        <table className="w-full text-xs border-collapse table-fixed">
          <thead>
            <tr className="bg-webank-blue text-white">
              <th className="border border-slate-300 px-1 py-1.5 text-center font-bold w-24 text-[11px]">指标 / 时间</th>
              {data.时间序列.map((time) => (
                <th key={time} className="border border-slate-300 px-1 py-1.5 text-center font-bold text-[11px]">
                  {time.split('-')[1]}月
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {indicators.map((indicator, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                <td className="border border-slate-300 px-2 py-2 text-left font-semibold bg-slate-100 text-[10px] leading-tight">
                  {indicator}
                </td>
                {data.核心指标[indicator].map((val, vIdx) => (
                  <td 
                    key={vIdx} 
                    className={`border border-slate-300 px-1 py-2 text-center font-medium text-[10px] ${val < 0 ? 'text-red-600' : 'text-webank-text'}`}
                  >
                    {val.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-2 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          <span className="text-[9px] text-slate-500">负增长</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-webank-blue rounded-full"></div>
          <span className="text-[9px] text-slate-500">正增长</span>
        </div>
      </div>
    </div>
  );
};
