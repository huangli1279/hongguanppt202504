import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { newHousePriceYoyData, newHousePriceYoyXTicks } from '@/data/housingConsumption';

const priceLineConfigs: LineConfig[] = [
  {
    dataKey: 'newHousePrice',
    name: '新建商品住宅价格指数同比',
    strokeWidth: 2.5,
  },
];

export const ContentSlide40: React.FC = () => {

  return (
    <BaseContentSlide
      title={<>房价财富效应：房价下行背景下，居民消费受抑制</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="房价持续同比下跌，财富效应承压" delay="0ms" variant="accent">
            <p className="text-xs">
              高盛测算，26年Q1居民财富中房地产占<span className="text-red-500 font-semibold">52%</span>。社科院26Q2报告指出，居民部门主动去杠杆，住房贷款<span className="text-green-600 font-semibold">连续13个季度负增长</span>，房价下行与收入预期偏弱叠加，房地产仍是内需修复的核心制约。
            </p>
            <p className="mt-1 text-xs">
              70城新建商品住房价格2024年10月跌幅一度扩大至<span className="text-green-600 font-semibold">-6.2%</span>，2026年上半年仍在<span className="text-green-600 font-semibold">-3.5%</span>左右徘徊。
            </p>
          </BaseCard>
          <BaseCard title="房价跌幅越大，居民消费越低" delay="120ms">
            <p className="text-xs">
              厦大×蚂蚁集团2025Q4—2026Q1连续两期调查显示，房价跌幅超15%时，一套房家庭月均消费较房价上涨时少<span className="text-red-500 font-semibold">11.9%</span>，多套房家庭少<span className="text-red-500 font-semibold">25.9%</span>。
            </p>
            <p className="mt-1 text-xs">
              文娱与外出餐饮最先收缩。2025Q4报告判断"房价稳定有助于激发消费动力"，2026Q1约<span className="text-webank-blue font-semibold">23%</span>家庭计划缩减消费。
            </p>
          </BaseCard>
          <BaseCard title="稳房价是修复消费预期的关键抓手" delay="240ms">
            <p className="text-xs">
              2026年6月《求是》发文提出，加快修复居民资产负债表，着力稳定房地产市场，防止资产价格下跌对消费信心的负向螺旋。
            </p>
            <p className="mt-1 text-xs">
              中国社会科学院金融研究所2026Q2宏观金融季报中建议因城施策、推动核心城市房价率先企稳。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
          {/* 左侧：房价同比折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={newHousePriceYoyData}
              title="70城新建商品住宅价格指数同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={priceLineConfigs}
              yAxisDomain={[-7, 0]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              xAxisTicks={newHousePriceYoyXTicks}
              legendOrder={['新建商品住宅价格指数同比']}
              unit="%"
            />
          </ChartContainer>

          {/* 右侧：消费结构堆叠柱状图 - 纯HTML实现 */}
          <ChartContainer delay="600ms">
            <div className="relative w-full h-full flex flex-col">
              {/* 标题 */}
              <div className="mb-1 flex-shrink-0">
                <div className="text-sm font-bold text-[#0d1e2e]">房价波动与家庭月均消费（按住房套数分组）</div>
                <div className="text-xs text-[#727a85] border-b border-[#dbe2ea] pb-1">数据来源：厦大×蚂蚁集团研究院 | 单位：元（消费加权重平均）</div>
              </div>

              {/* 图表区域 */}
              <div className="relative flex-1 min-h-0">
                {/* Y 轴刻度 */}
                <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between py-1">
                  <div className="text-[10px] font-bold text-[#8f98a3] text-right pr-2" style={{ transform: 'translateY(-50%)' }}>7500</div>
                  <div className="text-[10px] font-bold text-[#8f98a3] text-right pr-2" style={{ transform: 'translateY(-50%)' }}>6000</div>
                  <div className="text-[10px] font-bold text-[#8f98a3] text-right pr-2" style={{ transform: 'translateY(-50%)' }}>4000</div>
                  <div className="text-[10px] font-bold text-[#8f98a3] text-right pr-2" style={{ transform: 'translateY(-50%)' }}>2000</div>
                  <div className="text-[10px] font-bold text-[#8f98a3] text-right pr-2" style={{ transform: 'translateY(-100%)' }}>0</div>
                </div>

                {/* 背景画布 */}
                <div className="absolute left-10 right-2 top-0 bottom-0 bg-[#f5f8fc]">
                  <div className="absolute w-full border-t border-dotted border-[#d1dbe5]" style={{ top: '0%' }}></div>
                  <div className="absolute w-full border-t border-dotted border-[#d1dbe5]" style={{ top: '20%' }}></div>
                  <div className="absolute w-full border-t border-dotted border-[#d1dbe5]" style={{ top: '46.67%' }}></div>
                  <div className="absolute w-full border-t border-dotted border-[#d1dbe5]" style={{ top: '73.33%' }}></div>
                  <div className="absolute w-full border-t border-dotted border-[#d1dbe5]" style={{ top: '100%' }}></div>
                  {/* 垂直分割线 */}
                  <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-[#8fa3b8]"></div>
                  {/* 分组标题 */}
                  <div className="absolute top-1 left-1/4 -translate-x-1/2 text-xs font-bold text-[#5c6b73] z-10">一套房</div>
                  <div className="absolute top-1 left-3/4 -translate-x-1/2 text-xs font-bold text-[#5c6b73] z-10">大于一套房</div>
                </div>

                {/* SVG 连线与标签 - 放在柱子前面 */}
                <svg 
                  className="absolute left-10 right-2 top-0 bottom-0 pointer-events-none z-20" 
                  preserveAspectRatio="none"
                >
                  {/* 一套房 连线: 2590 -> 2939 */}
                  <line x1="14%" y1="65.47%" x2="42%" y2="60.81%" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 2"/>
                  <g transform="translate(28%, 63%)">
                    <rect x="-22" y="-10" width="44" height="18" rx="4" fill="#DC2626"/>
                    <text x="0" y="4" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">↓11.9%</text>
                  </g>

                  {/* 大于一套房 连线: 3630 -> 4900 */}
                  <line x1="56%" y1="51.60%" x2="84%" y2="34.67%" stroke="#9B72AA" strokeWidth="1.5" strokeDasharray="4 2"/>
                  <g transform="translate(70%, 42%)">
                    <rect x="-22" y="-10" width="44" height="18" rx="4" fill="#9B72AA"/>
                    <text x="0" y="4" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">↓25.9%</text>
                  </g>
                </svg>

                {/* 柱状图 */}
                <div className="absolute left-10 right-2 top-0 bottom-0 flex justify-around items-end px-1 z-30">
                  {/* 1. 一套房 <-15%: 2590 */}
                  <div className="relative flex flex-col justify-end items-center" style={{ width: '14%', height: '100%' }}>
                    <div className="absolute text-[11px] font-bold text-[#DC2626] z-10" style={{ bottom: 'calc(34.53% + 4px)' }}>2590</div>
                    <div className="w-8 flex flex-col-reverse" style={{ height: '34.53%' }}>
                      <div className="w-full bg-[#3875b4] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '37.41%', minHeight: '14px' }}>969</div>
                      <div className="w-full bg-[#c49b47] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '30.85%', minHeight: '12px' }}>799</div>
                      <div className="w-full bg-[#82b372] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '15.25%', minHeight: '10px' }}>395</div>
                      <div className="w-full bg-[#b84a51] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '11.54%', minHeight: '8px' }}>299</div>
                      <div className="w-full bg-[#8b7db2] text-[#333] text-[9px] font-bold flex items-center justify-center" style={{ height: '4.90%', minHeight: '6px' }}>127</div>
                    </div>
                    <div className="absolute -bottom-6 text-[10px] font-bold text-[#555] whitespace-nowrap" style={{ transform: 'rotate(-22deg)', transformOrigin: 'top left' }}>一套房 &lt;-15%</div>
                  </div>

                  {/* 2. 一套房 [-15%,0): 2670 */}
                  <div className="relative flex flex-col justify-end items-center" style={{ width: '14%', height: '100%' }}>
                    <div className="absolute text-[11px] font-bold text-[#333] z-10" style={{ bottom: 'calc(35.60% + 4px)' }}>2670</div>
                    <div className="w-8 flex flex-col-reverse" style={{ height: '35.60%' }}>
                      <div className="w-full bg-[#3875b4] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '36.03%', minHeight: '14px' }}>962</div>
                      <div className="w-full bg-[#c49b47] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '30.60%', minHeight: '12px' }}>817</div>
                      <div className="w-full bg-[#82b372] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '16.63%', minHeight: '10px' }}>444</div>
                      <div className="w-full bg-[#b84a51] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '11.65%', minHeight: '8px' }}>311</div>
                      <div className="w-full bg-[#8b7db2] text-[#333] text-[9px] font-bold flex items-center justify-center" style={{ height: '5.06%', minHeight: '6px' }}>135</div>
                    </div>
                    <div className="absolute -bottom-6 text-[10px] font-bold text-[#555] whitespace-nowrap" style={{ transform: 'rotate(-22deg)', transformOrigin: 'top left' }}>一套房 [-15%,0)</div>
                  </div>

                  {/* 3. 一套房 >=0: 2939 */}
                  <div className="relative flex flex-col justify-end items-center" style={{ width: '14%', height: '100%' }}>
                    <div className="absolute text-[11px] font-bold text-[#DC2626] z-10" style={{ bottom: 'calc(39.19% + 4px)' }}>2939</div>
                    <div className="w-8 flex flex-col-reverse" style={{ height: '39.19%' }}>
                      <div className="w-full bg-[#3875b4] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '36.30%', minHeight: '14px' }}>1067</div>
                      <div className="w-full bg-[#c49b47] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '30.45%', minHeight: '12px' }}>895</div>
                      <div className="w-full bg-[#82b372] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '16.60%', minHeight: '10px' }}>488</div>
                      <div className="w-full bg-[#b84a51] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '11.81%', minHeight: '8px' }}>347</div>
                      <div className="w-full bg-[#8b7db2] text-[#333] text-[9px] font-bold flex items-center justify-center" style={{ height: '4.76%', minHeight: '6px' }}>140</div>
                    </div>
                    <div className="absolute -bottom-6 text-[10px] font-bold text-[#555] whitespace-nowrap" style={{ transform: 'rotate(-22deg)', transformOrigin: 'top left' }}>一套房 &gt;=0</div>
                  </div>

                  {/* 4. 大于一套房 <-15%: 3630 */}
                  <div className="relative flex flex-col justify-end items-center" style={{ width: '14%', height: '100%' }}>
                    <div className="absolute text-[11px] font-bold text-[#9B72AA] z-10" style={{ bottom: 'calc(48.40% + 4px)' }}>3630</div>
                    <div className="w-8 flex flex-col-reverse" style={{ height: '48.40%' }}>
                      <div className="w-full bg-[#3875b4] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '38.40%', minHeight: '14px' }}>1394</div>
                      <div className="w-full bg-[#c49b47] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '28.10%', minHeight: '12px' }}>1020</div>
                      <div className="w-full bg-[#82b372] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '16.34%', minHeight: '10px' }}>593</div>
                      <div className="w-full bg-[#b84a51] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '11.35%', minHeight: '8px' }}>412</div>
                      <div className="w-full bg-[#8b7db2] text-[#333] text-[9px] font-bold flex items-center justify-center" style={{ height: '5.79%', minHeight: '6px' }}>210</div>
                    </div>
                    <div className="absolute -bottom-6 text-[10px] font-bold text-[#555] whitespace-nowrap" style={{ transform: 'rotate(-22deg)', transformOrigin: 'top left' }}>大于一套房 &lt;-15%</div>
                  </div>

                  {/* 5. 大于一套房 [-15%,0): 4313 */}
                  <div className="relative flex flex-col justify-end items-center" style={{ width: '14%', height: '100%' }}>
                    <div className="absolute text-[11px] font-bold text-[#333] z-10" style={{ bottom: 'calc(57.51% + 4px)' }}>4313</div>
                    <div className="w-8 flex flex-col-reverse" style={{ height: '57.51%' }}>
                      <div className="w-full bg-[#3875b4] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '38.93%', minHeight: '14px' }}>1679</div>
                      <div className="w-full bg-[#c49b47] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '26.69%', minHeight: '12px' }}>1151</div>
                      <div className="w-full bg-[#82b372] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '17.32%', minHeight: '10px' }}>747</div>
                      <div className="w-full bg-[#b84a51] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '11.50%', minHeight: '8px' }}>496</div>
                      <div className="w-full bg-[#8b7db2] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '5.52%', minHeight: '6px' }}>238</div>
                    </div>
                    <div className="absolute -bottom-6 text-[10px] font-bold text-[#555] whitespace-nowrap" style={{ transform: 'rotate(-22deg)', transformOrigin: 'top left' }}>大于一套房 [-15%,0)</div>
                  </div>

                  {/* 6. 大于一套房 >=0: 4900 */}
                  <div className="relative flex flex-col justify-end items-center" style={{ width: '14%', height: '100%' }}>
                    <div className="absolute text-[11px] font-bold text-[#9B72AA] z-10" style={{ bottom: 'calc(65.33% + 4px)' }}>4900</div>
                    <div className="w-8 flex flex-col-reverse" style={{ height: '65.33%' }}>
                      <div className="w-full bg-[#3875b4] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '39.76%', minHeight: '14px' }}>1948</div>
                      <div className="w-full bg-[#c49b47] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '25.39%', minHeight: '12px' }}>1244</div>
                      <div className="w-full bg-[#82b372] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '18.57%', minHeight: '10px' }}>910</div>
                      <div className="w-full bg-[#b84a51] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '10.63%', minHeight: '8px' }}>521</div>
                      <div className="w-full bg-[#8b7db2] text-white text-[9px] font-bold flex items-center justify-center" style={{ height: '5.59%', minHeight: '6px' }}>274</div>
                    </div>
                    <div className="absolute -bottom-6 text-[10px] font-bold text-[#555] whitespace-nowrap" style={{ transform: 'rotate(-22deg)', transformOrigin: 'top left' }}>大于一套房 &gt;=0</div>
                  </div>
                </div>
              </div>

              {/* 图例 */}
              <div className="flex justify-center items-center gap-3 mt-1 flex-shrink-0 flex-wrap">
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#4a5568]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3875b4]"></span>
                  <span>住房与交通</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#4a5568]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c49b47]"></span>
                  <span>居家食品与生活</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#4a5568]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#82b372]"></span>
                  <span>文娱与外出餐饮</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#4a5568]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b84a51]"></span>
                  <span>教育与医疗</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#4a5568]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8b7db2]"></span>
                  <span>耐用品</span>
                </div>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
