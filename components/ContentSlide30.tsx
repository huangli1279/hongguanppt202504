import React from 'react';
import { Landmark, Ship } from 'lucide-react';
import { RegionalExportTrendTable } from './RegionalExportTrendTable';
import { ExportShareMigrationChart } from './ExportShareMigrationChart';
import { regionalExportTrendData, exportShareMigrationData } from '../data';

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
        <div className={`flex flex-col h-full p-3 bg-slate-50 border-t-2 ${borderColor} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
            <div className={`flex items-center gap-2 mb-2 ${iconColor}`}>
                <Icon size={18} />
                <h4 className="font-bold text-xs uppercase tracking-wider">{title}</h4>
            </div>
            <div className="text-xs text-webank-text leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export const ContentSlide30: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-4 animate-fade-in">
         <div className="flex justify-between items-end mb-1">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            贸易伙伴结构分析：出口市场的冷热温差
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          对美出口降幅扩大至<span className="text-red-600">30%</span>，非美市场表现依旧强劲
        </h1>
      </header>

      {/* Content Sections */}
      <div className="flex-grow flex flex-col gap-4 overflow-hidden">
        <div className="grid grid-cols-2 gap-4 h-28 shrink-0">
          {/* US Market Card */}
          <InsightBox title="对美出口深跌，非美区域整体增长" icon={Landmark} alert={true} delay="100ms">
            <p>
              25年全年对美出口同比持续下跌，12月对美出口同比下降 30.0%。受前期关税政策滞后及高基数影响，拖累整体出口约 4.4 个百分点；对非美区域整体增长 12.8%。其中东盟增长 11.1%，非洲高增 21.8%。
            </p>
          </InsightBox>

          {/* Intermediate Goods Card */}
          <InsightBox title="中间品需求" icon={Ship} highlight={true} delay="200ms">
            <p>
              新兴市场工业化进程提速，对我国<span className="font-bold text-webank-lightBlue">中间品和生产资料</span>需求旺盛，有效对冲美欧市场波动。
            </p>
          </InsightBox>
        </div>

        {/* Bottom Section: Table and Chart */}
        <div className="flex-grow grid grid-cols-2 gap-4 min-h-0 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <div className="h-full bg-slate-50 p-4 rounded-lg border border-slate-100">
            <RegionalExportTrendTable data={regionalExportTrendData} />
          </div>
          <div className="h-full bg-slate-50 p-4 rounded-lg border border-slate-100">
            <ExportShareMigrationChart data={exportShareMigrationData} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <div className="flex gap-4">
            <span>数据来源：海关总署 (GACC)</span>
            <span>个金管理部-数据管理室</span>
        </div>
        <span>30</span>
      </footer>

      {/* Animation Styles */}
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
