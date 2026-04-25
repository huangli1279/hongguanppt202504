import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { pmiTrendData, pmiByEnterpriseSizeData } from '@/data/pmi';

// 转换PMI趋势数据为图表格式
const pmiChartData = pmiTrendData.map(d => ({
  period: d.period,
  production: d.production,
  newOrders: d.newOrders,
  outputPrice: d.outputPrice,
  rawMaterialPurchasePrice: d.rawMaterialPurchasePrice,
}));

// 转换企业规模PMI数据为图表格式
const enterpriseSizeChartData = pmiByEnterpriseSizeData.map(d => ({
  period: d.period,
  pmi: pmiTrendData.find(item => item.period === d.period)?.pmi,
  small: d.small,
  medium: d.medium,
  large: d.large,
}));

export const ContentSlide12: React.FC = () => {
  return (
    <BaseContentSlide
      title="3月制造业PMI强势跃升至50.4%，分项数据均显著回升"
      cardColumns={2}
      cards={
        <>
          <BaseCard title="景气度重返扩张区间" delay="200ms" variant="accent">
            <p>
              3月份制造业PMI大幅回升
              <span className="font-bold">1.4个百分点</span>至
              <span className="font-bold">50.4%</span>，摆脱"史上最长春节"偏晚带来的员工返乡与停工扰动。大型企业PMI升至
              <span className="font-bold">51.6%</span>，中型和小型企业分别反弹至49.0%、49.3%。
            </p>
          </BaseCard>

          <BaseCard title="产需两端同步扩张" delay="400ms">
            <p>
              3月新订单指数
              <span className="font-bold">51.6%</span>，升幅大于生产指数
              <span className="font-bold">51.4%</span>，供强需弱错配缓解。原材料购进价格猛涨至
              <span className="font-bold">63.9%</span>，显著高于出厂价格55.4%，中下游利润压力加大。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={enterpriseSizeChartData}
              title="制造业PMI及不同规模企业PMI数据"
              subtitle="数据来源：国家统计局 | 单位：指数"
              lines={[
                { dataKey: 'pmi', name: '制造业PMI', strokeWidth: 2.5, pointOffsets: { '2026-03': -12 } },
                { dataKey: 'large', name: '大型企业', strokeWidth: 2.5 },
                { dataKey: 'medium', name: '中型企业', labelDY: 14 },
                { dataKey: 'small', name: '小型企业', pointOffsets: { '2026-03': 18 } },
              ]}
              yAxisDomain={[44, 54]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['制造业PMI', '大型企业', '中型企业', '小型企业']}
              highlightPeriods={['2026-03']}
              xAxisTickCount={6}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>
          <ChartContainer delay="1000ms">
            <BaseLineChart
              data={pmiChartData}
              title="制造业PMI分类指标数据"
              subtitle="数据来源：国家统计局 | 单位：指数"
              lines={[
                { dataKey: 'production', name: '生产', strokeWidth: 2.5, pointOffsets: { '2026-03': 12 } },
                { dataKey: 'newOrders', name: '新订单', strokeWidth: 2.5, pointOffsets: { '2026-03': -12 } },
                { dataKey: 'outputPrice', name: '出厂价格', pointOffsets: { '2026-03': 14 } },
                { dataKey: 'rawMaterialPurchasePrice', name: '原材料购进价格', pointOffsets: { '2026-03': -8 } },
              ]}
              yAxisDomain={[42, 66]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['生产', '新订单', '出厂价格', '原材料购进价格']}
              highlightPeriods={['2026-03']}
              xAxisTickCount={6}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
