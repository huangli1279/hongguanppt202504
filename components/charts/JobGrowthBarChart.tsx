import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  TooltipComponent,
  GridComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  BarChart,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
]);

export interface JobGrowthData {
  name: string;
  yoy: number;
}

interface JobGrowthBarChartProps {
  data: JobGrowthData[];
  title: string;
  subtitle?: string;
  extraCard?: string;
}

export const JobGrowthBarChart: React.FC<JobGrowthBarChartProps> = ({
  data,
  title,
  subtitle,
  extraCard,
}) => {
  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: (params: any) => {
        const item = params[0];
        return `${item.name}<br/>同比变化: <strong style="color:#4A79AA">+${item.value}%</strong>`;
      },
    },
    grid: {
      left: '3%',
      right: '12%',
      top: '45px',
      bottom: '8%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      min: 0,
      max: 700,
      axisLabel: {
        formatter: (val: number) => {
          if (val === 0 || val === 100 || val === 300 || val === 500 || val === 700) {
            return `${val}%`;
          }
          return '';
        },
        color: '#64748b',
        fontSize: 10,
      },
      axisLine: {
        lineStyle: {
          color: '#94a3b8',
        },
      },
      splitLine: {
        lineStyle: {
          color: '#e2e8f0',
          type: 'dashed',
        },
      },
    },
    yAxis: {
      type: 'category',
      data: data.map((d) => d.name),
      axisLabel: {
        color: '#475569',
        fontSize: 11,
        fontWeight: 500,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: '同比变化',
        type: 'bar',
        data: data.map((d) => d.yoy),
        itemStyle: {
          color: '#4A79AA',
          borderRadius: [0, 4, 4, 0],
        },
        label: {
          show: true,
          position: 'right',
          formatter: '+{c}%',
          color: '#475569',
          fontSize: 11,
          fontWeight: 600,
        },
        barWidth: '85%',
      },
    ],
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-webank-subtext mt-1">{subtitle}</p>
        )}
      </div>
      {extraCard && (
        <div className="mb-0.5 px-2 py-1 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700 font-medium inline-block">
          {extraCard}
        </div>
      )}
      <div className="flex-grow min-h-0">
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
    </div>
  );
};
