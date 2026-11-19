import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

export const ContentSlide40: React.FC = () => (
  <BaseContentSlide
    title={<>特点二（续）：AI参与消费决策——从传统做法到 GEO 与代理式商务</>}
  >
    <div className="flex h-full flex-col gap-4">
      {/* 上方说明卡片 */}
      <div className="flex-shrink-0">
        <BaseCard
          title="从传统做法到 GEO、Agentic Commerce"
          variant="accent"
          className="h-full"
          animated={false}
        >
          <div className="space-y-2 text-sm leading-relaxed">
            <div className="border-l-4 border-gray-400 pl-2">
              <span className="font-semibold text-webank-blue">传统做法：</span>
              <span>
                四个环节全是“人”干，AI 不参与；企业靠买搜索广告（SEO/SEM）抢排名。
              </span>
            </div>
            <div className="border-t border-gray-200 pt-2 border-l-4 pl-2 border-l-[#4A79AA]">
              <span className="font-semibold text-webank-blue">GEO：</span>
              <span>
                AI 开始介入，但只做“推荐”——它给清单、引用品牌，人不放手，还是自己点、自己买；企业靠“让 AI 引用你”获利。
              </span>
            </div>
            <div className="border-t border-gray-200 pt-2 border-l-4 pl-2 border-l-[#C09A4A]">
              <span className="font-semibold text-webank-blue">Agentic Commerce：</span>
              <span>
                AI 变成“代执行”——比价、叠券、下单、付款全包，人放手；企业靠“被代理优先路由”获利（联盟佣金/交易抽成）。
              </span>
            </div>
          </div>
        </BaseCard>
      </div>

      {/* 三种做法对比表 */}
      <div className="flex-1 min-h-0 overflow-x-auto">
        <div className="flex flex-col h-full min-w-full border border-webank-line rounded-lg overflow-hidden text-[11px]">
          <table className="w-full h-full text-left border-collapse leading-snug">
            <thead>
              <tr className="border-b border-webank-line">
                <th className="px-3 py-2 bg-[#f0f0f0] text-webank-text font-semibold uppercase tracking-wider w-24">
                  环节
                </th>
                <th className="px-3 py-2 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider">
                  传统做法
                </th>
                <th className="px-3 py-2 bg-[#cdddf0] text-webank-blue font-semibold uppercase tracking-wider">
                  GEO（生成式引擎优化）
                </th>
                <th className="px-3 py-2 bg-[#aec6dd] text-webank-blue font-semibold uppercase tracking-wider">
                  Agentic Commerce（代理式商务，收费模式仍在快速演进，结算口径尚未统一）
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-webank-line">
              {/* ① 找商品 */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-white">① 找商品</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">用户自己搜关键词</td>
                <td className="px-3 py-2 bg-[#eef4fa]">用户问 AI，AI 给答案并引用品牌</td>
                <td className="px-3 py-2 bg-[#e4eef8]">用户只说目标（“百元内跑鞋”）</td>
              </tr>
              {/* ② 比价 */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-white">② 比价</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">用户自己比价、看评论</td>
                <td className="px-3 py-2 bg-[#eef4fa]">用户看 AI 推荐，再自己比</td>
                <td className="px-3 py-2 bg-[#e4eef8]">AI 代理自动比价、挑最优</td>
              </tr>
              {/* ③ 下单 */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-white">③ 下单</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">用户自己填地址、下单</td>
                <td className="px-3 py-2 bg-[#eef4fa]">用户自己点链接下单</td>
                <td className="px-3 py-2 bg-[#e4eef8]">AI 代理自动登录、下单</td>
              </tr>
              {/* ④ 付款 */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-white">④ 付款</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">用户自己付款</td>
                <td className="px-3 py-2 bg-[#eef4fa]">用户自己付款</td>
                <td className="px-3 py-2 bg-[#e4eef8]">AI 代理直接付款</td>
              </tr>
              {/* AI 的角色 */}
              <tr className="bg-[#e0e6f0]">
                <td className="px-3 py-2 font-semibold text-webank-blue bg-[#cdddf0]">AI 的角色</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">无（人找信息）</td>
                <td className="px-3 py-2 bg-[#eef4fa]">只“推荐”（给清单，你自己点）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">“代执行”（走完交易闭环）</td>
              </tr>
              {/* 企业怎么赚钱 */}
              <tr className="bg-[#e0e6f0]">
                <td className="px-3 py-2 font-semibold text-webank-blue bg-[#cdddf0]">企业怎么赚钱</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">买搜索广告（SEO / SEM）</td>
                <td className="px-3 py-2 bg-[#eef4fa]">让 AI 引用你（GEO 服务 / 按效果付费）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">被代理优先路由——联盟佣金 / 交易抽成（费率演进中）</td>
              </tr>
              {/* 代表企业 */}
              <tr className="bg-[#e0e6f0]">
                <td className="px-3 py-2 font-semibold text-webank-blue bg-[#cdddf0]">代表企业 海外 / 国内</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">
                  海外：Google Ads、Amazon、搜索引擎；国内：百度推广、淘宝/天猫、京东
                </td>
                <td className="px-3 py-2 bg-[#eef4fa]">
                海外：Profound、Scrum AI，ChatGPT / Perplexity（广告产品）；国内：智推时代、蓝色光标、新榜智汇、迈富时（按效果付费已商业化）。
                </td>
                <td className="px-3 py-2 bg-[#e4eef8]">
                海外：Shopify / Amazon / Walmart，Google、OpenAI、Visa；国内：淘宝/京东 AI 导购、美团（未成形）（国内 AI 助手多为电商/流量平台自营，预计内生态闭环为主）。
                </td>
              </tr>
            </tbody>
          </table>
          <div className="px-3 py-1.5 border-t border-webank-line bg-[#f0f0f0] text-[10px] text-webank-subtext leading-snug">
            灰色 = 人干活 · 浅蓝 = AI 只推荐 · 深蓝 = AI 代执行
          </div>
        </div>
      </div>
    </div>
  </BaseContentSlide>
);
