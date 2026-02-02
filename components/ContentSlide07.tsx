import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';
import { provinceGdpDataTop15, provinceGdpDataRest } from '@/data/provinceGdp';

const tableColumns: ColumnConfig[] = [
  { key: 'province', title: '省份', align: 'center' },
  { key: 'gdp', title: 'GDP', align: 'center' },
  { key: 'growth', title: '增速', align: 'center' },
];

export const ContentSlide07: React.FC = () => {
  return (
    <BaseContentSlide
      title="2025年各省市GDP：新兴产业与高技术制造双轮驱动"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="第一梯队保持引领" delay="200ms" variant="accent">
            <p>
              <span className="font-bold">广东省</span>经济总量达<span className="text-webank-accent font-bold">14.58万亿元</span>，连续37年位居全国首位，但增速面临压力；<span className="font-bold">江苏省</span>总量14.24万亿元，得益于新兴产业加快发展；<span className="font-bold">山东省</span>首次突破<span className="text-green-600 font-bold">10万亿元</span>，成为北方地区首个进入十万亿级规模的省份。新能源汽车领域，山东2025年产量突破150万辆，占全国比重提升至12%以上，增速连续三年超过30%。
            </p>
          </BaseCard>

          <BaseCard title="产业升级成效显著" delay="400ms">
            <p>
              多地<span className="font-bold">高技术制造业</span>成为主要增长点。<span className="font-bold">江苏</span>高新技术产业产值占规上工业比重达<span className="text-green-600 font-bold">52.1%</span>，比上年提高1.4个百分点；规上高技术制造业增加值同比增长<span className="text-green-600">11.9%</span>，拉动全部规上工业增长2.8个百分点。<span className="font-bold">安徽省</span>规上工业增加值增速达<span className="text-green-600 font-bold">9.4%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseTable
              data={provinceGdpDataTop15}
              columns={tableColumns}
              title="2025年各省份GDP及增速（前15）"
              subtitle="单位: GDP-万亿, 增速-%"
              rowHeight="auto"
              colorizeNumbers={false}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseTable
              data={provinceGdpDataRest}
              columns={tableColumns}
              title="2025年31省份GDP及增速（续）"
              subtitle="单位: GDP-万亿, 增速-%"
              rowHeight="auto"
              colorizeNumbers={false}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
