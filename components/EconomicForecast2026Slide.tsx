import React from 'react';
import { TrendingUp, TrendingDown, ArrowRight, Target, AlertTriangle, Lightbulb } from 'lucide-react';

interface ForecastCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay: string;
  variant?: 'positive' | 'neutral' | 'warning';
  className?: string;
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  title,
  icon,
  children,
  delay,
  variant = 'neutral',
  className = '',
}) => {
  const variantStyles = {
    positive: 'border-emerald-200 bg-emerald-50',
    neutral: 'border-webank-lightBlue/30 bg-white',
    warning: 'border-amber-200 bg-amber-50',
  };

  return (
    <div
      className={`rounded-lg border ${variantStyles[variant]} p-2.5 shadow-sm opacity-0 animate-fade-in-up ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-webank-accent">{icon}</span>
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide">{title}</h3>
      </div>
      <div className="text-xs text-slate-600 leading-snug">{children}</div>
    </div>
  );
};

interface MetricBadgeProps {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'stable';
  delay: string;
}

const MetricBadge: React.FC<MetricBadgeProps> = ({ label, value, trend, delay }) => {
  const trendColors = {
    up: 'text-emerald-600',
    down: 'text-red-600',
    stable: 'text-slate-500',
  };

  return (
    <div
      className="flex flex-col items-center p-2.5 bg-white rounded-lg border border-slate-200/80 shadow-sm opacity-0 animate-scale-in"
      style={{ animationDelay: delay }}
    >
      <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">{label}</span>
      <span className="text-xl font-bold text-webank-blue">{value}</span>
      {trend && (
        <span className={`text-xs ${trendColors[trend]} flex items-center gap-1 mt-1`}>
          {trend === 'up' && <TrendingUp size={12} />}
          {trend === 'down' && <TrendingDown size={12} />}
          {trend === 'stable' && <ArrowRight size={12} />}
        </span>
      )}
    </div>
  );
};

export const EconomicForecast2026Slide: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-white via-[#f7fbff] to-webank-grey flex flex-col relative overflow-hidden text-webank-text">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-webank-lightBlue/20 transform -skew-x-12 translate-x-20 animate-bg-slide-in"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-webank-accent/20 rounded-tr-full animate-bg-expand"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(5,28,44,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(5,28,44,.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Top decoration */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-webank-lightBlue via-emerald-400 to-webank-lightBlue animate-top-line"></div>

      {/* Content Container */}
      <div className="flex-1 flex flex-col px-12 pt-7 pb-12 z-10">
        {/* Header */}
        <header className="mb-5 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-webank-accent uppercase tracking-widest">
              2026年展望
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-webank-lightBlue/50 to-transparent"></span>
          </div>
          <h1 className="text-3xl font-serif font-bold leading-tight">
            <span className="text-webank-blue">2026年中国经济预测：</span>
            <span className="text-webank-accent">破局与重塑，迈向"新稳态"</span>
          </h1>
        </header>

        {/* Key Metrics + Keywords */}
        <div className="grid grid-cols-12 gap-3 mb-3">
          <div className="col-span-7 grid grid-cols-5 gap-2.5">
            <MetricBadge label="GDP增速预测" value="4.5%" trend="stable" delay="0.3s" />
            <MetricBadge label="固投增速" value="3.5%" trend="up" delay="0.4s" />
            <MetricBadge label="社零增速" value="4.5%" trend="up" delay="0.5s" />
            <MetricBadge label="出口增速" value="3-5%" trend="down" delay="0.6s" />
            <MetricBadge label="CPI中枢" value="0.7-1%" trend="up" delay="0.7s" />
          </div>
          <div className="col-span-5">
            <div
              className="h-full py-3 px-4 bg-gradient-to-r from-webank-lightBlue/10 via-emerald-400/10 to-webank-lightBlue/10 rounded-lg border border-webank-lightBlue/20 opacity-0 animate-fade-in flex items-center"
              style={{ animationDelay: '0.8s' }}
            >
              <p className="text-xs text-slate-600 leading-snug">
                <span className="text-webank-accent font-semibold">2026年关键词：</span>
                <span className="text-webank-blue">"温差收敛"</span> — 不仅关注实际GDP能否保5，更关注
                <span className="text-emerald-600 font-semibold">名义GDP能否回升</span>。
                随着"反内卷"带来的价格修复和"十五五"新基建启动，企业盈利和居民收入体感将比2025年有明显改善。
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-12 gap-2 min-h-0">
          {/* Row 1 */}
          <ForecastCard
            className="col-span-8 row-start-1"
            title="核心定调"
            icon={<Target size={16} />}
            delay="0.5s"
            variant="positive"
          >
            <p className="mb-2">
              <span className="text-emerald-600 font-semibold">周期切换</span>：从"前高后低、供强需弱"转向
              <span className="text-webank-blue font-medium">"前低后高、内需修复"</span>
            </p>
            <p className="mb-2">
              <span className="text-emerald-600 font-semibold">GDP平减指数有望转正</span>，名义GDP增速将反超实际GDP增速，企业利润与居民收入体感显著改善
            </p>
            <p>
              <span className="text-slate-500">核心驱动：</span>"十五五"重大项目开工 + "两新"政策接续 + 出口结构性韧性
            </p>
          </ForecastCard>

          <ForecastCard
            className="col-span-4 row-start-1"
            title="政策组合拳"
            icon={<Target size={16} />}
            delay="0.7s"
            variant="neutral"
          >
            <p className="mb-2">
              <span className="text-webank-accent font-semibold">财政更积极</span>：赤字率预计提升至4.0%-4.2%，投向从基建转向"民生+基建"并重
            </p>
            <p className="mb-2">
              <span className="text-webank-accent font-semibold">货币适度宽松</span>：预计1-2次降准（50BP）和10-20BP政策利率下调
            </p>
            <p>
              <span className="text-slate-500">结构性工具</span>：再贷款支持科技创新、绿色金融及民营企业
            </p>
          </ForecastCard>

          {/* Row 2 */}
          <div className="col-span-8 row-start-2 grid grid-cols-2 gap-2">
            <ForecastCard
              title="投资端：基建扛旗"
              icon={<TrendingUp size={16} />}
              delay="0.7s"
              variant="neutral"
            >
              <p className="mb-2">
                <span className="text-webank-blue font-medium">基建投资强反弹</span>：化债"挤出效应"弱化，地下管网、新型电力系统（国家电网"十五五"投资4万亿）迎来爆发
              </p>
              <p className="mb-2">
                <span className="text-webank-blue font-medium">制造业稳中略降</span>："反内卷"限制低效产能，设备更新和高技术制造业维持高位
              </p>
              <p>
                <span className="text-webank-blue font-medium">房地产跌幅收窄</span>：预计从-17.2%显著收窄，对经济拖累边际减弱
              </p>
            </ForecastCard>

            <ForecastCard
              title="消费端：温和修复"
              icon={<Lightbulb size={16} />}
              delay="0.6s"
              variant="neutral"
            >
              <p className="mb-2">
                <span className="text-webank-blue font-medium">政策转向</span>：从单纯补贴商品转向<span className="text-webank-accent">"投资于人"</span>（增收计划、服务消费补贴）
              </p>
              <p className="mb-2">
                <span className="text-webank-blue font-medium">结构亮点</span>：服务消费（医疗、养老、文旅）增速持续跑赢商品消费
              </p>
              <p>
                资产价格企稳有望改善居民财产性收入，进而提升消费倾向
              </p>
            </ForecastCard>
          </div>

          <ForecastCard
            className="col-span-4 row-start-2"
            title="潜在风险"
            icon={<AlertTriangle size={16} />}
            delay="0.9s"
            variant="warning"
          >
            <p className="mb-2">
              <span className="text-amber-600 font-semibold">外部冲击</span>：关税政策超预期落地，对出口链造成短期扰动
            </p>
            <p>
              <span className="text-amber-600 font-semibold">地产尾部</span>：房价未能止跌企稳，居民资产负债表修复受阻
            </p>
          </ForecastCard>

          {/* Row 3 */}
          <div className="col-span-8 row-start-3 grid grid-cols-2 gap-2">
            <ForecastCard
              title="出口端：韧性犹存"
              icon={<ArrowRight size={16} />}
              delay="0.8s"
              variant="neutral"
            >
              <p className="mb-2">
                <span className="text-webank-blue font-medium">贸易范式转换</span>：从"看总量β"转向"看结构α"
              </p>
              <p className="mb-2">
                <span className="text-webank-accent">非美市场</span>（东盟、一带一路、拉美）工业化需求支撑中间品和资本品出口
              </p>
              <p>
                <span className="text-amber-600">抢出口效应</span>：光伏、电池出口退税下调，Q1或冲高后Q2回落
              </p>
            </ForecastCard>

            <ForecastCard
              title="价格与利润：走出通缩"
              icon={<TrendingUp size={16} />}
              delay="0.9s"
              variant="positive"
            >
              <p className="mb-2">
                <span className="text-emerald-600 font-semibold">CPI</span>：全年中枢温和回升至0.7%-1.0%
              </p>
              <p className="mb-2">
                <span className="text-emerald-600 font-semibold">PPI</span>：有望二季度转正，"反内卷"限产优化供给侧
              </p>
              <p>
                <span className="text-webank-blue font-medium">企业利润</span>：名义利润增速有望修复至5%以上
              </p>
            </ForecastCard>
          </div>

          <ForecastCard
            className="col-span-4 row-start-3"
            title="IMF展望"
            icon={<Lightbulb size={16} />}
            delay="1.0s"
            variant="positive"
          >
            <p className="mb-2">
              IMF将2026年增速预测<span className="text-emerald-600 font-semibold">上调至4.5%</span>（上调0.3pct）
            </p>
            <p className="mb-2">
              中国仍是全球增长重要贡献者，贡献率约<span className="text-webank-blue font-medium">30%</span>
            </p>
            <p>
              关键转型：从"投资+出口"切换至<span className="text-webank-accent">"消费+服务"</span>
            </p>
          </ForecastCard>
        </div>

      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        <span>数据来源：CMF预测、中金公司、招银研究、国泰君安、银河证券、IMF</span>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes topLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes bgSlideIn {
          from { transform: skewX(-12deg) translateX(100%); opacity: 0; }
          to { transform: skewX(-12deg) translateX(80px); opacity: 1; }
        }
        @keyframes bgExpand {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-top-line {
          animation: topLine 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
        .animate-bg-slide-in {
          animation: bgSlideIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-bg-expand {
          animation: bgExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: bottom left;
        }
      `}</style>
    </div>
  );
};
