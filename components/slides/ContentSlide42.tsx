import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Landmark, ShoppingBag, CreditCard, Recycle, Home } from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';

const NumBadge: React.FC<{ n: string; tone?: 'blue' | 'amber' }> = ({ n, tone = 'blue' }) => (
  <span
    className={`flex items-center justify-center w-5 h-5 flex-shrink-0 rounded-md text-[11px] font-bold text-white ${
      tone === 'amber'
        ? 'bg-gradient-to-br from-amber-400 to-amber-600'
        : 'bg-gradient-to-br from-webank-accent to-webank-blue'
    }`}
  >
    {n}
  </span>
);

const PolicyCard: React.FC<{
  index: string;
  icon: LucideIcon;
  title: string;
  meta: string;
  delay: string;
  children: React.ReactNode;
}> = ({ index, icon: Icon, title, meta, delay, children }) => (
  <div
    className="flex flex-col rounded-lg bg-white border border-webank-line shadow-card animate-fade-in-up fill-mode-forwards opacity-0 px-2.5 py-1.5"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-start gap-2 px-2 py-1.5 border-b border-slate-100 bg-slate-50/80">
      <NumBadge n={index} />
      <Icon size={14} className="text-webank-accent mt-0.5 flex-shrink-0" />
      <div className="min-w-0">
        <h3 className="text-[12px] font-bold text-webank-blue leading-tight">{title}</h3>
        <p className="text-[8.5px] text-webank-subtext leading-tight mt-0.5">{meta}</p>
      </div>
    </div>
    <div className="px-2 py-1.5 text-[10.5px] leading-snug text-slate-700">
      {children}
    </div>
  </div>
);

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-1">
    <span className="text-webank-accent leading-tight flex-shrink-0">•</span>
    <span className="min-w-0">{children}</span>
  </li>
);

const planFacets = [
  { n: '①', t: '服务消费提质惠民', d: '养老、托育、文旅、健康置于突出位置' },
  { n: '②', t: '商品消费扩容升级', d: '推动大宗耐用与升级类商品消费' },
  { n: '③', t: '培育新业态新模式新场景', d: '数字、绿色、首发、体验式、入境消费' },
  { n: '④', t: '着力提升消费能力', d: '就业、增收、社保、合理增加公共消费' },
  { n: '⑤', t: '大力优化消费环境', d: '营造放心安心消费环境' },
  { n: '⑥', t: '完善促进消费制度机制', d: '加力完善促消费长效机制' },
];

export const ContentSlide42: React.FC = () => {
  return (
    <BaseContentSlide
      title="三季度消费政策：扩内需、促消费政策持续加码"
      subtitle="2026年三季度宏观经济报告"
      cardColumns={2}
    >
      <div className="flex flex-col h-full min-h-0 gap-2">
        {/* 重点：国务院批复《扩大消费"十五五"规划》 */}
        <div
          className="flex-shrink-0 rounded-xl border border-webank-line bg-gradient-to-br from-[#eef4fb] via-white to-white shadow-card p-3 animate-fade-in-up fill-mode-forwards opacity-0"
          style={{ animationDelay: '0ms' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <NumBadge n="1" tone="amber" />
            <Landmark size={18} className="text-webank-blue flex-shrink-0" />
            <div className="min-w-0">
              <h3 className="text-[13.5px] font-bold text-webank-blue leading-tight">
                国务院批复《扩大消费“十五五”规划》
              </h3>
              <p className="text-[10px] text-webank-subtext leading-tight mt-0.5">
                2026年7月13日 · 我国首份国家级消费领域五年专项规划
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2 flex-shrink-0">
              <div className="rounded-md bg-red-50 border border-red-200 px-2 py-1 text-center">
                <p className="text-[8px] text-red-400 leading-none">2030年社零总额</p>
                <p className="text-[12px] font-bold text-red-600 leading-tight">≈ 60万亿元</p>
              </div>
              <div className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-1 text-center">
                <p className="text-[8px] text-emerald-500 leading-none">到2030年</p>
                <p className="text-[11px] font-bold text-emerald-700 leading-tight">居民消费率明显提高</p>
              </div>
            </div>
          </div>

          {/* 6方面 */}
          <div className="grid grid-cols-3 gap-1">
            {planFacets.map((f) => (
              <div key={f.n} className="rounded-md border border-slate-200 bg-white px-2 py-1">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold text-webank-accent leading-none">{f.n}</span>
                  <span className="text-[10px] font-bold text-webank-blue leading-tight">{f.t}</span>
                </div>
                <p className="text-[9px] text-slate-500 leading-tight mt-0.5">{f.d}</p>
              </div>
            ))}
          </div>

          {/* 底部要点 */}
          <div className="mt-1 flex items-center gap-1.5 flex-wrap border-t border-slate-200 pt-1 text-[9.5px] text-slate-600">
            <span className="rounded bg-webank-blue/10 text-webank-blue font-semibold px-1.5 py-0.5">
              6方面 · 28条重点任务
            </span>
            <span>稳步提高最低工资标准</span>
            <span className="text-slate-300">|</span>
            <span>深入实施提振消费专项行动</span>
            <span className="text-slate-300">|</span>
            <span>各省区市把扩大消费作为“十五五”时期重要任务</span>
          </div>
        </div>

        {/* 其余4项政策 */}
        <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
          <PolicyCard
            index="2"
            icon={ShoppingBag}
            title="《关于推动商品消费扩容升级的实施意见》"
            meta="商务部等7部门 · 2026年8月 · 提出20项具体举措"
            delay="120ms"
          >
            <ul className="space-y-1">
              <Bullet>
                <span className="font-semibold text-webank-blue">大宗耐用品：</span>
                推进汽车流通消费改革试点、全链条扩大汽车消费、加快智能家居应用推广
              </Bullet>
              <Bullet>
                <span className="font-semibold text-webank-blue">生活日用提质：</span>
                食品饮料、纺织服装、文体娱乐用品
              </Bullet>
              <Bullet>
                <span className="font-semibold text-webank-blue">聚焦“一老一小”：</span>
                支持银发、婴童产品消费
              </Bullet>
              <Bullet>促进国货“潮品”、外贸优品、国际精品消费</Bullet>
              <Bullet>培育绿色、智能、健康等升级类商品消费</Bullet>
            </ul>
          </PolicyCard>

          <PolicyCard
            index="3"
            icon={CreditCard}
            title="《财政金融协同促内需政策通知》"
            meta="财政部等三部门 · 2026年8月 · 优化消费贷款贴息"
            delay="240ms"
          >
            <ul className="space-y-1">
              <Bullet>购车、装修等新发生信用卡分期消费纳入贴息支持范围</Bullet>
              <Bullet>
                实施机构扩至
                <span className="font-semibold text-webank-blue">21家全国性银行</span>
                及监管评级
                <span className="font-semibold text-webank-blue">3A及以上</span>
                城商行、农村合作金融机构、民营银行、外资银行
              </Bullet>
              <Bullet>
                个人消费贷款贴息上限
                <span className="font-semibold text-red-600">3000元→5000元</span>
                ；相关贷款单户规模上限
                <span className="font-semibold text-red-600">5000万元→7500万元</span>
              </Bullet>
              <Bullet>下半年继续推出财政金融协同促内需新政策新举措</Bullet>
            </ul>
          </PolicyCard>

          <PolicyCard
            index="4"
            icon={Recycle}
            title="第四批消费品以旧换新资金下达"
            meta="国家发展改革委、财政部 · 2026年9月末"
            delay="360ms"
          >
            <ul className="space-y-1">
              <Bullet>
                下达第四批
                <span className="font-semibold text-red-600">625亿元</span>
                超长期特别国债，全年
                <span className="font-semibold text-red-600">2500亿元</span>
                资金已全部下达
              </Bullet>
              <Bullet>
                1-8月以旧换新销售额
                <span className="font-semibold text-webank-blue">1.55万亿元</span>
                ，惠及
                <span className="font-semibold text-webank-blue">2.08亿人次</span>
              </Bullet>
              <Bullet>
                汽车以旧换新
                <span className="font-semibold text-webank-blue">535.3万辆</span>
                、6类家电
                <span className="font-semibold text-webank-blue">9145.8万台</span>
                、数码智能产品
                <span className="font-semibold text-webank-blue">1.08亿件</span>
                ；新能源乘用车占新车零售比重连续5个月超
                <span className="font-semibold text-red-600">60%</span>
              </Bullet>
              <Bullet>
                基调由“加力扩围”转向精细化管理与资金使用效率：合理把握节奏、优化资金计划、严格审核兑付、打击骗补套补
              </Bullet>
            </ul>
          </PolicyCard>

          <PolicyCard
            index="5"
            icon={Home}
            title="《关于实施居民购房贷款贴息政策的通知》"
            meta="财政部、人民银行、金融监管总局 · 2026年9月发布，10月1日实施"
            delay="480ms"
          >
            <ul className="space-y-1">
              <Bullet>
                对购买
                <span className="font-semibold text-webank-blue">首套住房</span>
                （建筑面积≤120㎡、房价≤150万元）的居民家庭给予贴息
              </Bullet>
              <Bullet>
                可享贴息贷款规模最高
                <span className="font-semibold text-red-600">100万元</span>
                ，财政给予年化
                <span className="font-semibold text-red-600">1个百分点</span>
                贴息
              </Bullet>
              <Bullet>
                贴息期限最长
                <span className="font-semibold text-red-600">5年</span>
              </Bullet>
              <Bullet>属住房消费支持政策</Bullet>
            </ul>
          </PolicyCard>
        </div>
      </div>
    </BaseContentSlide>
  );
};
