import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';
import { industrialDifferentiationData } from '@/data/industry';

// 月份列表
const months = ['2025-03', '2025-04', '2025-05', '2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12'] as const;

// 转置数据：月份为行，行业为列
const tableData = months.map((month) => {
  const row: Record<string, any> = { month };
  industrialDifferentiationData.forEach((item, i) => {
    row[`ind_${i}`] = item[month];
  });
  return row;
});

// 简化行业名称
const shortNames: Record<string, string> = {
  '煤炭开采和洗选业': '煤炭开采',
  '石油和天然气开采业': '油气开采',
  '黑色金属矿采选业': '黑色矿采',
  '有色金属矿采选业': '有色矿采',
  '农副食品加工业': '农副食品',
  '家具制造业': '家具制造',
  '化学原料和化学制品制造业': '化学制品',
  '医药制造业': '医药制造',
  '橡胶和塑料制品业': '橡塑制品',
  '非金属矿物制品业': '非金属矿',
  '黑色金属冶炼和压延加工业': '黑色冶炼',
  '有色金属冶炼和压延加工业': '有色冶炼',
  '金属制品业': '金属制品',
  '通用设备制造业': '通用设备',
  '汽车制造业': '汽车制造',
  '铁路、船舶、航空航天和其他运输设备制造业': '铁路船舶',
  '电气机械和器材制造业': '电气机械',
  '计算机、通信和其他电子设备制造业': '电子设备',
  '装备制造业': '装备制造',
  '高技术制造业': '高技术',
  '石油、煤炭及其他燃料加工业': '燃料加工',
};

const columns: ColumnConfig[] = [
  { key: 'month', title: '月份', width: '70px', align: 'left' },
  ...industrialDifferentiationData.map((item, i) => ({
    key: `ind_${i}`,
    title: shortNames[item.indicator] || item.indicator,
    width: '52px',
    align: 'right' as const,
  })),
];

export const ContentSlide11: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          工业分化加剧：装备制造与高技术领跑，
          <span className="text-webank-accent">传统行业拖累明显</span>
        </>
      }
      cards={
        <>
          <BaseCard title="装备制造：强支撑" delay="200ms" variant="accent">
            <p>
              装备制造业整体保持稳健。铁路船舶(12月<span className="font-bold">+9.2%</span>)、通用设备(<span className="font-bold">+7.5%</span>)等行业表现出色，虽然部分行业如电气机械(+4.3%)增速有所回落，但支撑作用依然稳固。
            </p>
          </BaseCard>

          <BaseCard title="高技术制造：回升向好" delay="400ms">
            <p>
              12月高技术制造业增长<span className="font-bold">11.0%</span>，维持高位运行。汽车制造业增加值增长<span className="font-bold">8.3%</span>，电子设备制造业增长<span className="font-bold">11.8%</span>，展现出强劲的增长动能。
            </p>
          </BaseCard>

          <BaseCard title="传统行业：边际改善" delay="600ms">
            <p>
              传统行业年末出现回暖；医药制造业(12月<span className="font-bold">+7.0%</span>)、橡胶和塑料制品业(<span className="font-bold">+4.2%</span>)较前期均有明显改善，行业间的分化态势呈现修复迹象。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="800ms" className="col-span-2">
          <BaseTable
            data={tableData}
            columns={columns}
            title="规模以上工业增加值：各行业当月同比增速"
            subtitle="单位：%"
            rowHeight="auto"
            stickyHeader={true}
            dateColumn="month"
          />
        </ChartContainer>
      }
    />
  );
};
