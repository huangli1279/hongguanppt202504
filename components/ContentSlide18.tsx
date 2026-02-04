import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { cityRetailData, urbanRuralRetailData } from '@/data/cityRetail';

export const ContentSlide18: React.FC = () => {
  return (
    <BaseContentSlide
      title="一线分化北京反弹，乡村消费韧性优于城镇"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="一线城市社零分化，四季度北京强力反弹" delay="200ms" variant="accent">
            <p>
              2025年一线城市消费出现结构性分化，社零整体增长承压，弱于全国水平；北京前三季度因汽车消费不振和统计外溢，社零明显下滑，但四季度在赛事活动及促消费政策集中发力下强劲反弹（金银珠宝类增长39.5%，新能源汽车增长13.2%）
            </p>
          </BaseCard>
          <BaseCard title="乡村 vs 城镇：韧性对标" delay="400ms">
            <p>
              全年乡村增长 4.1% 领跑。12 月城镇受大促透支及高基数压制降至 0.7%，而乡村凭借 1.7% 的增速构筑了年末缓冲垫。逻辑深挖：以旧换新红利在城镇已提前释放，12 月正处于向乡村深度渗透的"下半场"。乡村凭借"基建红利"沉降，展现出更强的增长后劲
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              title="2024-2025年一线城市社会消费品零售总额累计同比变化"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={cityRetailData}
              lines={[
                { dataKey: 'guangzhou', name: '广州', strokeWidth: 2.5 },
                { dataKey: 'shenzhen', name: '深圳'},
                { dataKey: 'shanghai', name: '上海'},
                { dataKey: 'beijing', name: '北京', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[-6, 8]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['广州', '深圳', '上海', '北京']}
              xAxisTickCount={6}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseLineChart
              title="2024-2025年城镇与乡村社会消费品零售总额累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={urbanRuralRetailData}
              lines={[
                { dataKey: 'rural', name: '社会消费品零售总额:乡村', strokeWidth: 2.5 },
                { dataKey: 'urban', name: '社会消费品零售总额:城镇'},
              ]}
              yAxisDomain={[2, 7]}
              showYAxis={true}
              legendOrder={['社会消费品零售总额:乡村', '社会消费品零售总额:城镇']}
              xAxisTickCount={6}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
