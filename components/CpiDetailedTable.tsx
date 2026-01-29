import React from 'react';

export const CpiDetailedTable: React.FC = () => {
    const title = "2025年主要商品与服务类别居民消费价格指数（CPI）当月同比";
    const unit = "%";
    const timeSeries = ["2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"];
    
    const categories: { [key: string]: number[] } = {
        "粮食": [-1.40, -1.30, -1.50, -1.40, -1.40, -1.20, -1.00, -0.80, -0.70, -0.70, -0.40, -0.30],
        "食用油": [-2.50, -2.00, -2.10, -1.80, -1.70, -1.80, -1.40, -1.50, -1.40, -1.10, -1.20, -1.00],
        "鲜菜": [2.40, -12.60, -6.80, -5.00, -8.30, -0.40, -7.60, -15.20, -13.70, -7.30, 14.50, 18.20],
        "猪肉": [13.80, 4.10, 6.70, 5.00, 3.10, -8.50, -9.50, -16.10, -17.00, -16.00, -15.00, -14.60],
        "鲜果": [0.60, -1.80, 0.90, 5.20, 5.50, 6.10, 2.80, -3.70, -4.20, -2.00, 0.70, 4.40],
        "生活用品及服务": [-1.10, -0.70, 0.60, 0.20, 0.10, 0.70, 1.20, 1.80, 2.20, 1.9, 2.1, 2.2],
        "衣着": [1.10, 1.20, 1.30, 1.30, 1.50, 1.60, 1.70, 1.80, 1.70, 1.70, 1.90, 1.70],
        "教育文化和娱乐": [1.70, -0.50, 0.80, 0.70, 0.90, 1.00, 0.90, 1.00, 0.80, 0.90, 0.80, 0.90],
        "其他用品和服务": [5.40, 6.50, 6.20, 6.60, 7.30, 8.10, 8.00, 8.60, 9.90, 12.80, 14.20, 17.40],
        "家用器具": [-3.50, -3.30, -0.30, -0.20, -0.20, 1.00, 2.80, 4.60, 5.50, 5.00, 4.90, 5.90]
    };

    const categoryNames = Object.keys(categories);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="mb-2">
                <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                    {title}
                </h3>
            </div>
            <div className="flex-grow overflow-auto custom-scrollbar">
                <table className="w-full text-[8px] border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b border-slate-200 text-left py-1 pl-1 text-slate-500 font-medium bg-slate-50 sticky top-0 whitespace-nowrap">时间</th>
                            {categoryNames.map(name => (
                                <th key={name} className="border-b border-slate-200 text-right py-1 px-1 text-slate-500 font-medium bg-slate-50 sticky top-0 whitespace-nowrap">{name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeSeries.map((time, index) => (
                            <tr key={time} className="hover:bg-slate-50 border-b border-slate-100 last:border-0">
                                <td className="py-1 pl-1 font-medium text-slate-600 whitespace-nowrap">{time}</td>
                                {categoryNames.map(name => {
                                    const value = categories[name][index];
                                    return (
                                        <td 
                                            key={`${name}-${index}`} 
                                            className={`py-1 px-1 text-right font-mono ${
                                                value > 0 ? 'text-red-500' : value < 0 ? 'text-green-600' : 'text-slate-400'
                                            }`}
                                        >
                                            {value.toFixed(1)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <div className="mt-1 flex justify-between items-center text-[8px] text-slate-400 italic">
                <span>单位：{unit}</span>
            </div>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                    height: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>
        </div>
    );
};
