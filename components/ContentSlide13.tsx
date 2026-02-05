import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';

// 2025年规模以上工业细分行业增加值当月同比增速数据
const rawData = {
  "时间序列": ["2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"],
  "高技术制造业": {
    "计算机、通信和其他电子设备制造业": [13.10, 10.80, 10.20, 11.00, 10.20, 9.90, 11.30, 8.90, 9.20, 11.80],
    "铁路、船舶、航空航天和其他运输设备制造业": [19.00, 17.60, 14.60, 10.10, 13.70, 9.80, 10.30, 15.20, 11.90, 9.20],
    "医药制造业": [1.20, 2.20, 1.30, 2.70, 2.40, 3.30, 5.40, -1.60, 2.40, 7.00]
  },
  "传统制造业": {
    "黑色金属冶炼和压延加工业": [7.70, 5.80, 4.80, 4.10, 8.60, 7.30, 2.20, 1.40, 0.90, 0.70],
    "有色金属冶炼和压延加工业": [6.50, 7.50, 8.10, 9.20, 6.80, 9.10, 8.40, 3.70, 4.80, 4.80],
    "石油、煤炭及其他燃料加工业": [4.80, 0.60, 5.40, 11.70, 12.40, 10.20, 10.40, 8.10, 3.70, 6.60],
    "化学原料和化学制品制造业": [8.80, 8.00, 5.90, 7.50, 7.20, 7.60, 9.00, 7.10, 6.70, 8.00],
    "橡胶和塑料制品业": [7.60, 6.00, 5.40, 6.70, 4.80, 3.50, 5.30, 2.10, 3.30, 4.20],
    "农副食品加工业": [5.40, 7.30, 7.60, 8.20, 5.60, 4.70, 6.00, 2.50, 1.70, 3.20],
    "食品制造业": [7.10, 7.00, 6.70, 6.40, 3.80, 2.00, 6.50, 2.10, 5.60, 5.50],
    "非金属矿物制品业": [0.90, 0.40, -0.60, -0.10, -0.60, 0.50, 0.20, -3.20, -1.80, 0.20]
  },
  "采矿业": {
    "煤炭开采和洗选业": [10.60, 6.30, 5.50, 6.50, 4.20, 5.10, 6.40, 6.50, 7.50, 6.40],
    "石油和天然气开采业": [6.80, 4.30, 5.30, 3.60, 4.10, 4.70, 8.90, 1.90, 5.10, 3.70],
    "有色金属矿采选业": [9.30, 6.60, 5.10, 14.00, 13.20, 8.50, 3.10, 6.20, 6.10, 3.70],
    "黑色金属矿采选业": [12.70, 9.90, 10.30, 10.00, 11.50, 7.10, 4.90, 5.90, 9.00, 3.20]
  },
  "装备制造业": {
    "汽车制造业": [11.50, 9.20, 11.60, 11.40, 8.50, 8.40, 16.00, 16.80, 11.90, 8.30],
    "电气机械和器材制造业": [13.00, 13.40, 11.00, 11.40, 10.20, 9.90, 7.90, 4.90, 4.40, 4.30],
    "通用设备制造业": [9.30, 7.80, 6.30, 7.80, 8.40, 7.30, 9.30, 6.90, 7.50, 7.50],
    "金属制品业": [9.90, 7.70, 6.70, 6.70, 4.20, 2.80, 4.00, 1.70, 3.00, 3.60]
  }
};

// 简化行业名称
const shortNames: Record<string, string> = {
  '计算机、通信和其他电子设备制造业': '电子设备',
  '铁路、船舶、航空航天和其他运输设备制造业': '铁路船舶',
  '医药制造业': '医药',
  '黑色金属冶炼和压延加工业': '黑色冶炼',
  '有色金属冶炼和压延加工业': '有色冶炼',
  '石油、煤炭及其他燃料加工业': '燃料加工',
  '化学原料和化学制品制造业': '化学制品',
  '橡胶和塑料制品业': '橡塑制品',
  '农副食品加工业': '农副食品',
  '食品制造业': '食品',
  '非金属矿物制品业': '非金属矿',
  '煤炭开采和洗选业': '煤炭',
  '石油和天然气开采业': '油气',
  '有色金属矿采选业': '有色矿采',
  '黑色金属矿采选业': '黑色矿采',
  '汽车制造业': '汽车',
  '电气机械和器材制造业': '电气机械',
  '通用设备制造业': '通用设备',
  '金属制品业': '金属制品'
};

// 需要标红的行业
const highlightIndustries = [
  '电子设备',
  '铁路船舶',
  '汽车',
  '电气机械',
  '通用设备'
];

// 需要标红的特定行月份
const highlightMonths = ["2025-10", "2025-11", "2025-12"];

// 需要特定行标红的行业
const conditionalHighlightIndustries = ['化学制品', '橡塑制品'];

// 红色数值渲染函数
const renderRedCell = (value: number) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  return (
    <span className="text-red-500 font-bold">
      {value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
    </span>
  );
};

// 条件红色数值渲染函数
const renderConditionalRedCell = (value: number, row: any) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const shouldHighlight = highlightMonths.includes(row.month);
  
  if (shouldHighlight) {
    return (
      <span className="text-red-500 font-bold">
        {value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
      </span>
    );
  }
  
  return value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
};

// 转换数据为表格格式：月份为行，行业为列
const tableData = rawData["时间序列"].map((month, monthIndex) => {
  const row: Record<string, any> = { month };

  // 高技术制造业
  Object.entries(rawData["高技术制造业"]).forEach(([industry, values]) => {
    row[`hightech_${industry}`] = values[monthIndex];
  });

  // 传统制造业
  Object.entries(rawData["传统制造业"]).forEach(([industry, values]) => {
    row[`traditional_${industry}`] = values[monthIndex];
  });

  // 采矿业
  Object.entries(rawData["采矿业"]).forEach(([industry, values]) => {
    row[`mining_${industry}`] = values[monthIndex];
  });

  // 装备制造业
  Object.entries(rawData["装备制造业"]).forEach(([industry, values]) => {
    row[`equipment_${industry}`] = values[monthIndex];
  });

  return row;
});

// 构建二级表头
const columns: ColumnConfig[] = [
  {
    key: 'month',
    title: '月份',
    width: '50px',
    align: 'left'
  },
  {
    key: 'hightech',
    title: '高技术制造业',
    children: Object.keys(rawData["高技术制造业"]).map(industry => ({
      key: `hightech_${industry}`,
      title: shortNames[industry] || industry,
      width: '46px',
      align: 'right' as const,
      render: highlightIndustries.includes(shortNames[industry]) ? renderRedCell : undefined
    }))
  },
  {
    key: 'traditional',
    title: '传统制造业',
    children: Object.keys(rawData["传统制造业"]).map(industry => ({
      key: `traditional_${industry}`,
      title: shortNames[industry] || industry,
      width: '46px',
      align: 'right' as const,
      render: conditionalHighlightIndustries.includes(shortNames[industry]) ? renderConditionalRedCell : undefined
    }))
  },
  {
    key: 'mining',
    title: '采矿业',
    children: Object.keys(rawData["采矿业"]).map(industry => ({
      key: `mining_${industry}`,
      title: shortNames[industry] || industry,
      width: '46px',
      align: 'right' as const
    }))
  },
  {
    key: 'equipment',
    title: '装备制造业',
    children: Object.keys(rawData["装备制造业"]).map(industry => ({
      key: `equipment_${industry}`,
      title: shortNames[industry] || industry,
      width: '46px',
      align: 'right' as const,
      render: highlightIndustries.includes(shortNames[industry]) ? renderRedCell : undefined
    }))
  }
];

export const ContentSlide13: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          装备制造与高技术领跑，传统行业有所回暖
        </>
      }
      cards={
        <>
          <BaseCard title="装备制造：强支撑" delay="200ms" variant="accent">
            <p>
              装备制造业整体保持稳健。汽车(<span className="font-bold">+8.3%</span>)、通用设备(<span className="font-bold">+7.5%</span>)表现出色，电气机械(<span className="font-bold">+4.3%</span>)增速有所回落。
            </p>
          </BaseCard>

          <BaseCard title="高技术制造：回升向好" delay="400ms">
            <p>
              12月高技术制造业增长<span className="font-bold">11.0%</span>，维持高位运行。电子设备制造业增长<span className="font-bold">11.8%</span>，铁路船舶增长<span className="font-bold">9.2%</span>，展现出强劲的增长动能。
            </p>
          </BaseCard>

          <BaseCard title="传统行业：边际改善" delay="600ms">
            <p>
              传统行业年末出现回暖；橡胶和塑料制品业(12月<span className="font-bold">+4.2%</span>)、化学制品(<span className="font-bold">+8%</span>)较前期有明显改善。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="800ms" className="col-span-2">
          <BaseTable
            data={tableData}
            columns={columns}
            title="2025年规模以上工业细分行业增加值当月同比增速"
            subtitle="单位：%"
            dateColumn="month"
            colorizeNumbers={false}
          />
        </ChartContainer>
      }
    />
  );
};
