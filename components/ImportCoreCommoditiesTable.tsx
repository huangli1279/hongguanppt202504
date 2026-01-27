import React from 'react';

const importCoreData = {
  "图表标题": "2024-2025年进口核心商品同比增速趋势表",
  "单位": "%",
  "时间序列": [
    "2025-12", "2025-11", "2025-10", "2025-09", "2025-08", "2025-07", 
    "2025-06", "2025-05", "2025-04", "2025-03", "2025-02", "2025-01", 
    "2024-12", "2024-11", "2024-10"
  ],
  "核心指标": {
    "半导体制造设备": [22.40, 18.50, 14.20, 13.00, 12.50, 12.00, 11.20, 10.80, 10.40, 9.80, 9.20, 9.80, 12.50, 10.20, 14.80],
    "集成电路(IC)": [12.60, 8.40, 5.20, 4.80, 4.00, 3.50, 3.80, 3.60, 3.10, 2.90, 2.50, 3.00, 3.20, 1.50, 5.60],
    "原油及天然气": [4.10, -1.20, -3.50, 1.80, 1.20, 0.60, 0.90, 0.80, 0.70, -1.50, -2.50, -2.30, 5.40, 2.10, 3.80],
    "化妆品及洗护用品": [-2.10, -5.40, -8.20, -6.80, -6.50, -6.20, -4.50, -4.20, -3.90, -3.50, -2.80, -3.00, 1.50, 2.80, 4.20],
    "铁矿砂及其精矿": [-3.50, -1.80, 0.40, -1.50, -2.20, -2.60, -4.00, -4.80, -4.70, -5.50, -6.50, -6.60, 2.10, 4.50, 6.80]
  }
};

export const ImportCoreCommoditiesTable: React.FC = () => {
  const indicators = Object.keys(importCoreData.核心指标);
  
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-lg overflow-hidden">
      {/* Table Header with Title and Legend */}
      <div className="flex justify-between items-center mb-3 px-1">
        <div className="flex items-center gap-3">
          <div className="w-1 h-5 bg-webank-lightBlue rounded-full"></div>
          <h3 className="text-base font-bold text-webank-blue">{importCoreData.图表标题}</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-sm opacity-80"></div>
            <span className="text-[10px] text-slate-500 font-medium">高增项</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-sm opacity-80"></div>
            <span className="text-[10px] text-slate-500 font-medium">收缩项</span>
          </div>
          <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">单位：{importCoreData.单位}</span>
        </div>
      </div>

      {/* Table Content */}
      <div className="flex-grow overflow-x-auto border border-slate-100 rounded-lg shadow-sm">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="sticky left-0 z-10 bg-slate-50 border-r border-slate-200 px-4 py-3 text-left font-bold text-webank-blue w-40 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                核心商品类别
              </th>
              {importCoreData.时间序列.map((time, idx) => (
                <th key={time} className={`px-2 py-3 text-center font-bold text-slate-600 min-w-[65px] ${idx < 12 ? 'bg-blue-50/30' : 'bg-slate-100/50'}`}>
                  <div className="text-[9px] text-slate-400 font-normal mb-0.5">{time.split('-')[0]}</div>
                  <div className="text-[11px]">{time.split('-')[1]}月</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {indicators.map((indicator, idx) => (
              <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors group">
                <td className="sticky left-0 z-10 bg-white group-hover:bg-slate-50 border-r border-slate-200 px-4 py-3 text-left font-bold text-slate-700 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                  {indicator}
                </td>
                {importCoreData.核心指标[indicator as keyof typeof importCoreData.核心指标].map((val, vIdx) => {
                  let bgColor = '';
                  let textColor = 'text-slate-600';
                  
                  if (val >= 10) {
                    bgColor = 'bg-emerald-50';
                    textColor = 'text-emerald-700 font-bold';
                  } else if (val < 0) {
                    bgColor = 'bg-red-50';
                    textColor = 'text-red-600 font-bold';
                  } else if (val > 0) {
                    textColor = 'text-webank-blue font-semibold';
                  }

                  return (
                    <td 
                      key={vIdx} 
                      className={`px-2 py-3 text-center transition-all ${bgColor} ${vIdx < 12 ? '' : 'opacity-80'}`}
                    >
                      <span className={`text-[11px] ${textColor}`}>
                        {val > 0 ? `+${val.toFixed(1)}` : val.toFixed(1)}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer / Note */}
      <div className="mt-3 flex justify-between items-center px-1">
        <div className="text-[10px] text-slate-400 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
          数据来源：海关总署，微众银行个金管理部整理
        </div>
        <div className="text-[10px] font-medium text-webank-lightBlue italic">
          注：2025年12月数据反映了明显的“硬科技”补库特征
        </div>
      </div>
    </div>
  );
};
