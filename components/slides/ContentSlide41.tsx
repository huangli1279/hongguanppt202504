import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
export const ContentSlide41: React.FC = () => (
  <BaseContentSlide
    title={<>AI参与消费决策——从传统做法到 GEO 与代理式商务</>}
  >
    <div className="flex h-full min-h-0 flex-col gap-2">
      <BaseCard variant="accent" className="shrink-0 !p-2" animated={false}>
        <p className="text-[16px] leading-snug">
          企业的赚钱方式随 AI 介入深度而变，国内企业GEO 刚起步、代理商务未成型。
        </p>
      </BaseCard>
      {/* 三种做法对比表（纵向：模式；横向：介绍/流程/AI角色/盈利/代表企业） */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="flex h-full min-h-0 flex-col border border-webank-line rounded-lg overflow-hidden text-[14px]">
          <div className="flex-1 min-h-0 overflow-auto">
          <table className="w-full h-full text-left border-collapse leading-tight [&_th]:border-r [&_th]:border-webank-line [&_td]:border-r [&_td]:border-webank-line [&_th:last-child]:border-r-0 [&_td:last-child]:border-r-0">
            <thead>
              <tr className="border-b border-webank-line text-center">
                <th className="px-2 py-1 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider w-20 border-r border-webank-line">
                  模式
                </th>
                <th className="px-2 py-1 bg-[#e8e2d4] text-webank-blue font-semibold uppercase tracking-wider">
                  ①找商品-②比价-③下单-④付款
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
                <td className="px-3 py-2 font-semibold text-webank-blue bg-[#f7f4ed]">传统做法</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">
                  四个环节全是“人”干，AI 不参与；企业靠买搜索广告（SEO/SEM）抢排名。
                </td>
                <td className="px-3 py-2 bg-[#f7f4ed]">无（人找信息）</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">买搜索广告（SEO / SEM）</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">百度推广、淘宝/天猫、京东</td>
                <td className="px-3 py-2 bg-[#f7f4ed]">Google Ads、Amazon、搜索引擎</td>
              </tr>
              {/* GEO */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-[#eef4fa]">GEO（生成式引擎优化）</td>
                <td className="px-3 py-2 bg-[#eef4fa]">
                  AI 开始介入，但只做“推荐”——它给清单、引用品牌，人不放手，还是自己点、自己买；企业靠“让 AI 引用你”获利。
                </td>
                <td className="px-3 py-2 bg-[#eef4fa]">只“推荐”（给清单，你自己点）</td>
                <td className="px-3 py-2 bg-[#eef4fa]">让 AI 引用你（GEO 服务 / 按效果付费）</td>
                <td className="px-3 py-2 bg-[#eef4fa]">智推时代、蓝色光标、新榜智汇、迈富时（按效果付费已商业化）。</td>
                <td className="px-3 py-2 bg-[#eef4fa]">Profound、Scrum AI，ChatGPT / Perplexity（广告产品）</td>
              </tr>
              {/* Agentic Commerce */}
              <tr>
                <td className="px-3 py-2 font-semibold text-webank-blue bg-[#e4eef8]">Agentic Commerce（代理式商务）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">
                  AI 变成“代执行”——比价、叠券、下单、付款全包，人放手；企业靠“被代理优先路由”获利（联盟佣金/交易抽成）。
                </td>
                <td className="px-3 py-2 bg-[#e4eef8]">“代执行”（走完交易闭环）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">被代理优先路由——联盟佣金 / 交易抽成（费率演进中）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">淘宝/京东 AI 导购、美团（未成形）</td>
                <td className="px-3 py-2 bg-[#e4eef8]">Shopify / Amazon / Walmart，Google、OpenAI、Visa</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </BaseContentSlide>
);
