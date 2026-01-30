import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { industrialProductionData } from '../data';
import { TrendingUp, Cpu, Ship } from 'lucide-react';
import { chartColors, seriesColors } from '@/utils/chartColors';

// 过滤掉春节异常值，保持yyyy-mm格式
const chartData = industrialProductionData
  .filter(d => !['2024-01', '2024-02', '2025-02'].includes(d.period))
  .map(d => ({
    period: d.period,
    industrialOutput: d.industrialOutput,
    exportDelivery: d.exportDelivery,
  }));

export const ContentSlide10: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          Q4工业生产呈现"V型"修复，
          <span className="text-webank-accent">12月增速回升至5.2%受出口与高技术双轮驱动</span>
        </>
      }
      cards={
        <>
          <BaseCard title="总量运行：年末翘尾" icon={TrendingUp} delay="100ms">
            <p>
              Q4增速呈"先抑后扬"，12月反弹至 <span className="font-bold">5.2%</span>。全年增长 <span className="font-bold">5.9%</span>，高于GDP增速(5.0%)。12月季调环比增长0.49%，边际动能增强。
            </p>
          </BaseCard>

          <BaseCard title="结构分化：新质生产力领跑" icon={Cpu} delay="200ms">
            <p>
              12月高技术制造业增长 <span className="font-bold">11.0%</span>。电子(+11.8%)、汽车(+8.3%)领跑；集成电路(<span className="font-bold">+33.7%</span>)、机器人(<span className="font-bold">+28.0%</span>)爆发。传统行业如粗钢(-10.3%)、水泥(-6.6%)受限。
            </p>
          </BaseCard>

          <BaseCard title="驱动归因：外需拉动增强" icon={Ship} delay="300ms">
            <p>
              12月出口交货值增长 <span className="font-bold">3.2%</span>(前值-0.1%)，设备更新政策支撑装备制造业(全年+9.2%)，政策效应持续显现。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms" className="col-span-2">
          <BaseLineChart
            data={chartData}
            title="规模以上工业增加值与出口交货值同比增速"
            subtitle="单位：%"
            lines={[
              { dataKey: 'industrialOutput', name: '规模以上工业增加值', color: chartColors.primary, strokeWidth: 2.5 },
              { dataKey: 'exportDelivery', name: '出口交货值', color: seriesColors[1] },
            ]}
            yAxisDomain={[-2, 10]}
            showYAxis={true}
            legendOrder={['规模以上工业增加值', '出口交货值']}
            xAxisTickCount={12}
          />
        </ChartContainer>
      }
    />
  );
};
