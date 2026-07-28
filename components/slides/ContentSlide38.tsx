import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart } from '../base/BaseLineChart';
import { marginBalanceData, marginBalanceXTicks } from '@/data/marginBalance';

export const ContentSlide38: React.FC = () => {
  return (
    <BaseContentSlide
      title="房产+存款仍为主要资产，财富管理知识匮乏，近期两融与青年开户快速增加"
      cardColumns={2}
      headerClassName="!mb-3"
    >
      <div className="flex flex-col h-full min-h-0 gap-3 pb-4">
        <BaseCard title="居民资产配置概览" delay="0ms" variant="accent" className="!p-3 gap-1 flex-shrink-0">
          <p className="text-sm leading-snug">
            当前居民金融资产配置仍以现金和存款为主，普通家庭在风险识别和长期投资方面仍面临困难。家庭资产负债结构呈现一定分化，调查显示，房价跌幅越大，家庭消费越低，说明资产价格波动、住房财富预期和债务压力仍然是居民消费的重要因素。
          </p>
        </BaseCard>

        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
          <ChartContainer delay="480ms" className="min-h-0">
            <BaseLineChart
              data={marginBalanceData}
              title="两融余额月末值：2026年6月首破3万亿"
              subtitle="数据来源：Wind、同花顺 | 单位：万亿元；2026-07为7月27日最新值"
              lines={[
                { dataKey: 'balance', name: '两融余额（月末）', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 3.5]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}`}
              showReferenceLine={true}
              referenceLineY={3}
              highlightPeriods={['2026-06']}
              xAxisTicks={marginBalanceXTicks}
              unit="万亿"
            />
          </ChartContainer>

          <div className="flex flex-col gap-3 min-h-0">
            <BaseCard title="青年群体" delay="120ms" className="!p-3 gap-1.5">
              <p className="text-[12px] leading-snug">
                上交所披露的2025年新开户结构：全年新开户约
                <span className="text-red-500 font-semibold">2744万户</span>
                ，35岁以下（90后、00后）新开户占比超
                <span className="text-red-500 font-semibold">45%</span>
                ，较2024年升约
                <span className="text-red-500 font-semibold">5</span>
                个百分点，青年投资信心相对更高但财富较少，整体大众仍偏保值，实际仓位也偏稳健。
              </p>
              <p className="text-[12px] leading-snug">
                青年养老规划意愿上升，据中信银行《中国居民养老财富管理发展报告》，
                <span className="text-red-500 font-semibold">83%</span>
                的受访者认为除退休金外，至少需筹备
                <span className="text-red-500 font-semibold">50万元</span>
                以上资金方能满足养老需求。
              </p>
            </BaseCard>

            <BaseCard title="中年群体" delay="240ms" className="!p-3 gap-1.5">
              <p className="text-[12px] leading-snug">
                据《2026年小微经营者理财行为调查报告》，小微经营者平均
                <span className="text-red-500 font-semibold">39岁</span>
                ，35-64岁占
                <span className="text-red-500 font-semibold">55.2%</span>
                仍为主力。中年群体从加杠杆买房转向提前还贷，无房贷家庭占比抬升（2025Q4有房家庭无房贷
                <span className="text-red-500 font-semibold">59.3%</span>
                ）。
              </p>
              <p className="text-[12px] leading-snug">
                两融余额6月23日首破
                <span className="text-red-500 font-semibold">3万亿</span>
                、月末达
                <span className="text-red-500 font-semibold">3.02万亿</span>
                ，7月27日回落至
                <span className="text-red-500 font-semibold">2.70万亿</span>
                ，融券仅约
                <span className="text-red-500 font-semibold">200亿元</span>
                量级；但同期居民贷款净减，股市加杠杆与家庭资产负债表去杠杆并存，财富管理分化。
              </p>
            </BaseCard>

            <BaseCard title="银发群体" delay="360ms" className="!p-3 gap-1.5">
              <p className="text-[12px] leading-snug">
                银发群体配置仍是
                <span className="font-semibold">存款 + 理财 + 商业养老险</span>
                三件套，安全优先；金融资产占家庭总资产比重高于年轻人。
              </p>
            </BaseCard>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
