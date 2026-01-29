

import React from 'react';
import { DataTable, TableContainer } from './DataTable';
import { loanBreakdownData as allLoanBreakdownData } from '../data';
import { Wallet, TrendingDown, PiggyBank } from 'lucide-react';
import { ColumnDefinition } from '../types';

const InsightBox = ({ title, children, icon: Icon, delay, alert, highlight }: { title: string, children?: React.ReactNode, icon: any, delay: string, alert?: boolean, highlight?: boolean }) => {
    let borderColor = 'border-webank-blue';
    let iconColor = 'text-webank-blue';
    
    if (alert) {
        borderColor = 'border-red-500';
        iconColor = 'text-red-600';
    } else if (highlight) {
        borderColor = 'border-webank-lightBlue';
        iconColor = 'text-webank-lightBlue';
    }

    return (
        <div className={`flex flex-col h-full p-4 bg-slate-50 border-t-2 ${borderColor} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
            <div className={`flex items-center gap-2 mb-2 ${iconColor}`}>
                <Icon size={18} />
                <h4 className="font-bold text-sm uppercase">{title}</h4>
            </div>
            <div className="text-xs text-webank-text leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export const ContentSlide36: React.FC = () => {
  // 仅筛选2025年数据
  const loanBreakdownData = allLoanBreakdownData.filter(d => d.period.startsWith('2025'));
  
  const columns: ColumnDefinition[] = [
    { key: 'period', label: '时间', sticky: true },
    { key: 'household', label: '住户贷款', align: 'right' },
    { key: 'enterprise', label: '企业贷款', align: 'right' },
    { key: 'bill', label: '票据融资', align: 'right' },
    { key: 'nonBank', label: '非银行业金融机构贷款', align: 'right' }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            部门行为：居民资产负债表监测
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          12月居民贷款罕见净偿还916亿元，<span className="text-webank-subtext">避险情绪驱动存款回流银行体系</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-6 flex-shrink-0">
         <InsightBox title="企业扩表 居民缩表" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             企业贷款稳步增长，由年初156.9万亿元扩张至年末167.5万亿元。住户贷款全年"原地踏步"，四季度出现逐月萎缩态势（10月：83.6万亿到12月：83.3万亿），主要受房地产销售持续低迷及"提前还贷潮"拖累，导致居民端实质性缩表。
           </p>
         </InsightBox>

         <InsightBox title="信用收缩" icon={PiggyBank} highlight={true} delay="200ms">
           <p>
             企业端微弱的回升难掩整体需求枯竭，总增量断崖式下跌 80% 表明金融体系已从"宽货币"陷入"信用收缩"的冰点，反映出实体经济内生性融资意愿极度低迷。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards h-full" style={{ animationDelay: '500ms' }}>
          <TableContainer
            title="2025年人民币贷款分项数据序列"
            unit="亿元"
            source="人民银行"
          >
            <DataTable
              data={loanBreakdownData}
              columns={columns}
              variant="bordered"
              stickyFirstColumn
              minRowHeight={28}
            />
          </TableContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        
      </footer>

      {/* Animation Styles Reuse */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .fill-mode-forwards { animation-fill-mode: forwards; }
      `}</style>
    </div>
  );
};
