import React from 'react';
import { IndustrialFinancialTableData } from '../types';

interface IndustrialFinancialTableProps {
  data: IndustrialFinancialTableData;
}

export const IndustrialFinancialTable: React.FC<IndustrialFinancialTableProps> = ({ data }) => {
  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString('zh-CN', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Title */}
      <div className="mb-2 flex items-baseline justify-between">
        <h3 className="text-sm font-bold text-webank-blue">{data.title}</h3>
        <span className="text-[10px] text-webank-subtext">单位：{data.unit}</span>
      </div>

      {/* Table */}
      <div className="flex-grow overflow-hidden">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-webank-blue text-white">
              <th className="border border-slate-300 px-3 py-1.5 text-center font-bold">月份</th>
              <th className="border border-slate-300 px-3 py-1.5 text-center font-bold whitespace-nowrap">营业收入</th>
              <th className="border border-slate-300 px-3 py-1.5 text-center font-bold whitespace-nowrap">营业成本</th>
              <th className="border border-slate-300 px-3 py-1.5 text-center font-bold whitespace-nowrap">营业利润</th>
              <th className="border border-slate-300 px-3 py-1.5 text-center font-bold whitespace-nowrap">利润总额</th>
              <th className="border border-slate-300 px-3 py-1.5 text-center font-bold whitespace-nowrap">投资收益</th>
            </tr>
          </thead>
          <tbody>
            {data.months.map((month, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="border border-slate-300 px-3 py-1.5 text-center font-semibold bg-slate-100">
                  {month}
                </td>
                <td className="border border-slate-300 px-3 py-1.5 text-right">
                  {formatNumber(data.revenue[idx])}
                </td>
                <td className="border border-slate-300 px-3 py-1.5 text-right">
                  {formatNumber(data.cost[idx])}
                </td>
                <td className="border border-slate-300 px-3 py-1.5 text-right">
                  {formatNumber(data.operatingProfit[idx])}
                </td>
                <td className="border border-slate-300 px-3 py-1.5 text-right">
                  {formatNumber(data.totalProfit[idx])}
                </td>
                <td className="border border-slate-300 px-3 py-1.5 text-right">
                  {formatNumber(data.investmentIncome[idx])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
