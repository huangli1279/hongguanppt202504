import React from 'react';
import { KeyExportGrowthChart } from './KeyExportGrowthChart';
import { ExportContributionChart } from './ExportContributionChart';
import { exportItemGrowthData, exportContributionData } from '../data';
import { Zap, Smartphone, Shirt, Layers } from 'lucide-react';

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

export const SlideContentSeventeen: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            产品结构深度洞察：科技制造领跑
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-11/12">
          机电产品拉动出口增长的主引擎地位巩固，<br/>
          <span className="text-webank-lightBlue">汽车与集成电路维持爆发式增长</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-4 gap-6 mb-8 h-36">
         <InsightBox title="核心引擎：机电强" icon={Layers} highlight={true} delay="100ms">
           <p>
             12月机电产品出口增长 <span className="font-bold">12.1%</span>，显著高于整体出口增速。作为中国出口的压舱石，机电产品的高景气直接决定了出口的韧性。
           </p>
         </InsightBox>

         <InsightBox title="双星闪耀：车与芯" icon={Zap} highlight={true} delay="200ms">
           <p>
             <span className="font-bold">汽车 (+71.7%)</span>：中国车企全球竞争力持续兑现。<br/>
             <span className="font-bold">集成电路 (+47.7%)</span>：受全球AI算力建设及电子周期上行带动，呈现明显的量价齐升特征。
           </p>
         </InsightBox>

         <InsightBox title="消费电子回暖" icon={Smartphone} delay="300ms">
           <p>
             受旗舰新机发布及换机周期带动，12月手机出口增长 <span className="font-bold">10.6%</span>，推动消费电子整体增速回升至19.6%。产业链景气度从上游芯片向下游终端传导。
           </p>
         </InsightBox>

         <InsightBox title="传统产业承压" icon={Shirt} alert={true} delay="400ms">
           <p>
             劳动密集型产品（服装、家具等）出口下降 <span className="font-bold">8.5%</span>，降幅较上月微幅走阔。传统低附加值产业面临外需疲软与产业转移的双重压力。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <KeyExportGrowthChart data={exportItemGrowthData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <ExportContributionChart data={exportContributionData} />
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