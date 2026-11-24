import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

export const ContentSlide41: React.FC = () => (
  <BaseContentSlide
    title={<>AI参与消费决策——从传统做法到 GEO 与代理式商务</>}
  >
    <div className="flex h-full min-h-0 flex-col gap-2">
      {/* 上方说明卡片 */}
      <div className="shrink-0">
        <BaseCard
          title="从传统做法到 GEO、Agentic Commerce"
          variant="accent"
          className="h-full !py-2 !px-3 !gap-1"
          titleClassName="!text-sm"
          animated={false}
        >
          <div className="space-y-1 text-xs leading-snug">
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

      {/* 三种做法对比表（纵向：模式；横向：介绍/流程/AI角色/盈利/代表企业） */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="flex h-full min-h-0 flex-col border border-webank-line rounded-lg overflow-hidden text-[11px]">
          <div className="flex-1 min-h-0 overflow-auto">
          <table className="w-full h-full text-left border-collapse leading-tight">
            <thead>
              <tr className="border-b border-webank-line">
                <th className="px-2 py-1 bg-[#f0f0f0] text-webank-text font-semibold uppercase tracking-tight w-20">
                  模式
                </th>
                <th className="px-2 py-1 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider">
                  介绍
                </th>
                <th className="px-3 py-2 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider">
                  流程（1-4合并）
                </th>
                <th className="px-3 py-2 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider">
                  AI 的角色
                </th>
                <th className="px-3 py-2 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider">
                  企业怎么赚钱
                </th>
                <th className="px-3 py-2 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider">
                  代表企业 国内
                </th>
                <th className="px-3 py-2 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider">
                  代表企业 国外
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-webank-line">
              {/* 传统做法 */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-white">传统做法</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">
                  四个环节全是“人”干，AI 不参与；企业靠买搜索广告（SEO/SEM）抢排名。
                </td>
                <td className="px-3 py-2 bg-[#f7f4ed]">
                  ① 用户自己搜关键词<br />
                  ② 用户自己比价、看评论<br />
                  ③ 用户自己填地址、下单<br />
                  ④ 用户自己付款
                </td>
                <td className="px-3 py-2 bg-[#f7f4ed]">无（人找信息）</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">买搜索广告（SEO / SEM）</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">百度推广、淘宝/天猫、京东</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">Google Ads、Amazon、搜索引擎</td>
              </tr>
              {/* GEO */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-white">GEO（生成式引擎优化）</td>
                <td className="px-3 py-2 bg-[#eef4fa]">
                  AI 开始介入，但只做“推荐”——它给清单、引用品牌，人不放手，还是自己点、自己买；企业靠“让 AI 引用你”获利。
                </td>
                <td className="px-3 py-2 bg-[#eef4fa]">
                  ① 用户问 AI，AI 给答案并引用品牌<br />
                  ② 用户看 AI 推荐，再自己比<br />
                  ③ 用户自己点链接下单<br />
                  ④ 用户自己付款
                </td>
                <td className="px-3 py-2 bg-[#eef4fa]">只“推荐”（给清单，你自己点）</td>
                <td className="px-3 py-2 bg-[#eef4fa]">让 AI 引用你（GEO 服务 / 按效果付费）</td>
                <td className="px-3 py-2 bg-[#eef4fa]">智推时代、蓝色光标、新榜智汇、迈富时（按效果付费已商业化）。</td>
                <td className="px-3 py-2 bg-[#eef4fa]">Profound、Scrum AI，ChatGPT / Perplexity（广告产品）</td>
              </tr>
              {/* Agentic Commerce */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-white">Agentic Commerce（代理式商务）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">
                  AI 变成“代执行”——比价、叠券、下单、付款全包，人放手；企业靠“被代理优先路由”获利（联盟佣金/交易抽成）。
                </td>
                <td className="px-3 py-2 bg-[#e4eef8]">
                  ① 用户只说目标（“百元内跑鞋”）<br />
                  ② AI 代理自动比价、挑最优<br />
                  ③ AI 代理自动登录、下单<br />
                  ④ AI 代理直接付款
                </td>
                <td className="px-3 py-2 bg-[#e4eef8]">“代执行”（走完交易闭环）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">被代理优先路由——联盟佣金 / 交易抽成（费率演进中）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">淘宝/京东 AI 导购、美团（未成形）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">Shopify / Amazon / Walmart，Google、OpenAI、Visa</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className="shrink-0 px-3 py-1 border-t border-webank-line bg-[#f0f0f0] text-[9px] text-webank-subtext leading-snug">
            灰色 = 人干活 · 浅蓝 = AI 只推荐 · 深蓝 = AI 代执行
          </div>
        </div>
      </div>
    </div>
  </BaseContentSlide>
);
