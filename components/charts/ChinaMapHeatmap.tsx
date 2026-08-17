import React, { useEffect, useMemo, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { MapChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([MapChart, TitleComponent, TooltipComponent, VisualMapComponent, CanvasRenderer]);

/**
 * 内置简化中国地图数据（GeoJSON格式）
 * 包含31个省级行政区的大致边界
 */
const getBuiltInChinaMap = (): any => {
  return {
    type: "FeatureCollection",
    features: [
      { type: "Feature", properties: { name: "北京", adcode: 110000 }, geometry: { type: "Polygon", coordinates: [[[116.2,40.1],[116.5,40.1],[116.5,39.8],[116.2,39.8],[116.2,40.1]]] } },
      { type: "Feature", properties: { name: "天津", adcode: 120000 }, geometry: { type: "Polygon", coordinates: [[[117.0,39.4],[117.7,39.4],[117.7,38.8],[117.0,38.8],[117.0,39.4]]] } },
      { type: "Feature", properties: { name: "河北", adcode: 130000 }, geometry: { type: "Polygon", coordinates: [[[114.5,42.5],[119.0,42.5],[119.0,36.5],[114.5,36.5],[114.5,42.5]]] } },
      { type: "Feature", properties: { name: "山西", adcode: 140000 }, geometry: { type: "Polygon", coordinates: [[[110.2,40.5],[115.0,40.5],[115.0,35.0],[110.2,35.0],[110.2,40.5]]] } },
      { type: "Feature", properties: { name: "内蒙古", adcode: 150000 }, geometry: { type: "Polygon", coordinates: [[[97.0,51.0],[126.0,51.0],[126.0,37.5],[97.0,37.5],[97.0,51.0]]] } },
      { type: "Feature", properties: { name: "辽宁", adcode: 210000 }, geometry: { type: "Polygon", coordinates: [[[118.5,43.5],[125.5,43.5],[125.5,38.5],[118.5,38.5],[118.5,43.5]]] } },
      { type: "Feature", properties: { name: "吉林", adcode: 220000 }, geometry: { type: "Polygon", coordinates: [[[121.5,46.5],[131.0,46.5],[131.0,40.5],[121.5,40.5],[121.5,46.5]]] } },
      { type: "Feature", properties: { name: "黑龙江", adcode: 230000 }, geometry: { type: "Polygon", coordinates: [[[121.0,53.5],[135.0,53.5],[135.0,43.5],[121.0,43.5],[121.0,53.5]]] } },
      { type: "Feature", properties: { name: "上海", adcode: 310000 }, geometry: { type: "Polygon", coordinates: [[[120.8,31.8],[122.0,31.8],[122.0,30.7],[120.8,30.7],[120.8,31.8]]] } },
      { type: "Feature", properties: { name: "江苏", adcode: 320000 }, geometry: { type: "Polygon", coordinates: [[[116.5,35.5],[122.0,35.5],[122.0,30.7],[116.5,30.7],[116.5,35.5]]] } },
      { type: "Feature", properties: { name: "浙江", adcode: 330000 }, geometry: { type: "Polygon", coordinates: [[[118.0,31.5],[123.0,31.5],[123.0,27.0],[118.0,27.0],[118.0,31.5]]] } },
      { type: "Feature", properties: { name: "安徽", adcode: 340000 }, geometry: { type: "Polygon", coordinates: [[[114.8,35.0],[119.5,35.0],[119.5,29.3],[114.8,29.3],[114.8,35.0]]] } },
      { type: "Feature", properties: { name: "福建", adcode: 350000 }, geometry: { type: "Polygon", coordinates: [[[115.8,28.5],[120.5,28.5],[120.5,23.5],[115.8,23.5],[115.8,28.5]]] } },
      { type: "Feature", properties: { name: "江西", adcode: 360000 }, geometry: { type: "Polygon", coordinates: [[[113.5,30.5],[118.5,30.5],[118.5,24.5],[113.5,24.5],[113.5,30.5]]] } },
      { type: "Feature", properties: { name: "山东", adcode: 370000 }, geometry: { type: "Polygon", coordinates: [[[114.5,38.5],[123.0,38.5],[123.0,34.0],[114.5,34.0],[114.5,38.5]]] } },
      { type: "Feature", properties: { name: "河南", adcode: 410000 }, geometry: { type: "Polygon", coordinates: [[[110.2,36.5],[116.5,36.5],[116.5,31.0],[110.2,31.0],[110.2,36.5]]] } },
      { type: "Feature", properties: { name: "湖北", adcode: 420000 }, geometry: { type: "Polygon", coordinates: [[[108.5,33.5],[116.2,33.5],[116.2,29.0],[108.5,29.0],[108.5,33.5]]] } },
      { type: "Feature", properties: { name: "湖南", adcode: 430000 }, geometry: { type: "Polygon", coordinates: [[[108.8,30.0],[114.5,30.0],[114.5,24.5],[108.8,24.5],[108.8,30.0]]] } },
      { type: "Feature", properties: { name: "广东", adcode: 440000 }, geometry: { type: "Polygon", coordinates: [[[109.5,25.5],[117.5,25.5],[117.5,20.0],[109.5,20.0],[109.5,25.5]]] } },
      { type: "Feature", properties: { name: "广西", adcode: 450000 }, geometry: { type: "Polygon", coordinates: [[[104.5,25.5],[112.0,25.5],[112.0,20.5],[104.5,20.5],[104.5,25.5]]] } },
      { type: "Feature", properties: { name: "海南", adcode: 460000 }, geometry: { type: "Polygon", coordinates: [[[109.2,20.2],[111.0,20.2],[111.0,18.2],[109.2,18.2],[109.2,20.2]]] } },
      { type: "Feature", properties: { name: "重庆", adcode: 500000 }, geometry: { type: "Polygon", coordinates: [[[105.2,32.5],[109.8,32.5],[109.8,28.0],[105.2,28.0],[105.2,32.5]]] } },
      { type: "Feature", properties: { name: "四川", adcode: 510000 }, geometry: { type: "Polygon", coordinates: [[[97.5,34.5],[108.5,34.5],[108.5,26.0],[97.5,26.0],[97.5,34.5]]] } },
      { type: "Feature", properties: { name: "贵州", adcode: 520000 }, geometry: { type: "Polygon", coordinates: [[[103.5,29.5],[109.5,29.5],[109.5,24.5],[103.5,24.5],[103.5,29.5]]] } },
      { type: "Feature", properties: { name: "云南", adcode: 530000 }, geometry: { type: "Polygon", coordinates: [[[97.5,29.5],[106.5,29.5],[106.5,21.0],[97.5,21.0],[97.5,29.5]]] } },
      { type: "Feature", properties: { name: "西藏", adcode: 540000 }, geometry: { type: "Polygon", coordinates: [[[78.0,36.5],[99.0,36.5],[99.0,27.5],[78.0,27.5],[78.0,36.5]]] } },
      { type: "Feature", properties: { name: "陕西", adcode: 610000 }, geometry: { type: "Polygon", coordinates: [[[105.5,40.0],[111.5,40.0],[111.5,31.0],[105.5,31.0],[105.5,40.0]]] } },
      { type: "Feature", properties: { name: "甘肃", adcode: 620000 }, geometry: { type: "Polygon", coordinates: [[[92.0,43.0],[108.5,43.0],[108.5,32.0],[92.0,32.0],[92.0,43.0]]] } },
      { type: "Feature", properties: { name: "青海", adcode: 630000 }, geometry: { type: "Polygon", coordinates: [[[89.0,39.0],[102.5,39.0],[102.5,31.0],[89.0,31.0],[89.0,39.0]]] } },
      { type: "Feature", properties: { name: "宁夏", adcode: 640000 }, geometry: { type: "Polygon", coordinates: [[[104.5,39.5],[107.0,39.5],[107.0,35.0],[104.5,35.0],[104.5,39.5]]] } },
      { type: "Feature", properties: { name: "新疆", adcode: 650000 }, geometry: { type: "Polygon", coordinates: [[[73.5,49.5],[96.5,49.5],[96.5,34.5],[73.5,34.5],[73.5,49.5]]] } },
      { type: "Feature", properties: { name: "台湾", adcode: 710000 }, geometry: { type: "Polygon", coordinates: [[[119.5,25.5],[122.5,25.5],[122.5,21.5],[119.5,21.5],[119.5,25.5]]] } },
      { type: "Feature", properties: { name: "香港", adcode: 810000 }, geometry: { type: "Polygon", coordinates: [[[113.8,22.6],[114.5,22.6],[114.5,22.1],[113.8,22.1],[113.8,22.6]]] } },
      { type: "Feature", properties: { name: "澳门", adcode: 820000 }, geometry: { type: "Polygon", coordinates: [[[113.5,22.3],[113.6,22.3],[113.6,22.1],[113.5,22.1],[113.5,22.3]]] } },
    ]
  };
};

export interface ProvinceGdpMapItem {
  name: string;
  gdp: number;
  growth: string | number;
}

interface ChinaMapHeatmapProps {
  data: ProvinceGdpMapItem[];
  title?: React.ReactNode;
  subtitle?: string;
}

// 颜色阈值 - 调整范围覆盖所有数据（2.0% ~ 6.3%）
const GROWTH_MIN = 2.0;
const GROWTH_MAX = 6.5;

// 省份短名到全名的映射（用于匹配 GeoJSON）
const PROVINCE_NAME_MAP: Record<string, string> = {
  '北京': '北京市',
  '天津': '天津市',
  '河北': '河北省',
  '山西': '山西省',
  '内蒙古': '内蒙古自治区',
  '辽宁': '辽宁省',
  '吉林': '吉林省',
  '黑龙江': '黑龙江省',
  '上海': '上海市',
  '江苏': '江苏省',
  '浙江': '浙江省',
  '安徽': '安徽省',
  '福建': '福建省',
  '江西': '江西省',
  '山东': '山东省',
  '河南': '河南省',
  '湖北': '湖北省',
  '湖南': '湖南省',
  '广东': '广东省',
  '广西': '广西壮族自治区',
  '海南': '海南省',
  '重庆': '重庆市',
  '四川': '四川省',
  '贵州': '贵州省',
  '云南': '云南省',
  '西藏': '西藏自治区',
  '陕西': '陕西省',
  '甘肃': '甘肃省',
  '青海': '青海省',
  '宁夏': '宁夏回族自治区',
  '新疆': '新疆维吾尔自治区',
  '台湾': '台湾省',
  '香港': '香港特别行政区',
  '澳门': '澳门特别行政区',
};

// 获取用于 ECharts 显示的省份名称
const getProvinceName = (shortName: string): string => {
  return PROVINCE_NAME_MAP[shortName] || shortName;
};

const parseGrowth = (val: string | number): number => {
  if (typeof val === 'number') return val;
  return parseFloat(String(val).replace('%', ''));
};

export const ChinaMapHeatmap: React.FC<ChinaMapHeatmapProps> = ({
  data,
  title,
  subtitle,
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      const cdnSources = [
        'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
      ];
      
      for (const cdnUrl of cdnSources) {
        try {
          const response = await fetch(cdnUrl, {
            mode: 'cors',
            signal: AbortSignal.timeout(8000)
          });
          if (response.ok) {
            const chinaJson = await response.json();
            echarts.registerMap('china', chinaJson);
            setMapLoaded(true);
            return;
          }
        } catch (err) {
          console.warn(`CDN failed: ${cdnUrl}`);
        }
      }
      
      // 使用内置地图
      const builtInMapData = getBuiltInChinaMap();
      echarts.registerMap('china', builtInMapData);
      setMapLoaded(true);
    };
    loadMap();
  }, []);

  // 构建 ECharts 地图数据
  const mapData = useMemo(() => {
    return data.map((item) => ({
      name: getProvinceName(item.name),
      value: parseGrowth(item.growth),
      gdp: item.gdp,
      growth: item.growth,
    }));
  }, [data]);

  const option = useMemo(() => {
    if (!mapLoaded) return null;

    return {
      backgroundColor: 'transparent',
      title: {
        text: typeof title === 'string' ? title : '',
        subtext: subtitle,
        left: '35%',
        textStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#1e40af',
        },
        subtextStyle: {
          fontSize: 10,
          color: '#64748b',
        },
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: [10, 14],
        textStyle: {
          fontSize: 12,
          color: '#1a1a1a',
        },
        formatter: (params: any) => {
          const name = params.name;
          const item = params.data;
          if (!item) return ''; // 没有数据的省份不显示 tooltip
          const gdpStr = typeof item.gdp === 'number' ? item.gdp.toFixed(2) : 'N/A';
          const growthStr = item.growth ?? item.value ?? 'N/A';
          return `<div style="min-width:120px">
            <b style="font-size:13px">${name}</b><br/>
            <div style="margin-top:6px">GDP: <b>${gdpStr}万亿</b></div>
            <div style="margin-top:4px;color:#ef4444;font-weight:600">增速: ${growthStr}%</div>
          </div>`;
        },
      },
      series: [
        {
          name: 'GDP增速',
          type: 'map',
          map: 'china',
          roam: false,
          zoom: 1.5,
          center: [105, 36],
          itemStyle: {
            borderColor: '#ffffff',
            borderWidth: 1,
          },
          emphasis: {
            itemStyle: {
              areaColor: '#fbbf24',
              borderColor: '#1e40af',
              borderWidth: 2,
            },
            label: {
              show: true,
              color: '#1a1a1a',
              fontWeight: 'bold',
              fontSize: 12,
            },
          },
          label: {
            show: true,
            formatter: (params: any) => {
              const item = params.data;
              if (!item || !item.growth) return ''; // 没有数据的省份不显示标签
              return `{name|${params.name}}\n{value|${item.growth}}`;
            },
            rich: {
              name: {
                fontSize: 9,
                fontWeight: '600',
                color: '#fff',
                lineHeight: 12,
                textShadowColor: '#000',
                textShadowBlur: 3,
              },
              value: {
                fontSize: 11,
                fontWeight: 'bold',
                color: '#fff',
                lineHeight: 14,
                textShadowColor: '#000',
                textShadowBlur: 3,
              },
            },
          },
          data: mapData,
        },
      ],
      visualMap: {
        show: true,
        type: 'continuous',
        min: GROWTH_MIN,
        max: GROWTH_MAX,
        text: [`${GROWTH_MAX.toFixed(1)}%`, `${GROWTH_MIN.toFixed(1)}%`],
        textStyle: {
          fontSize: 11,
          color: '#374151',
        },
        inRange: {
          color: ['#22c55e', '#eab308', '#ef4444'],
        },
        calculable: false,
        left: 10,
        bottom: 10,
        itemWidth: 14,
        itemHeight: 120,
        formatter: (value: number) => {
          return `${value.toFixed(1)}%`;
        },
      },
    };
  }, [mapLoaded, mapData, title, subtitle]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-red-500 text-sm">
        地图加载失败: {error}
      </div>
    );
  }

  if (!mapLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
        <span className="animate-pulse">加载地图中...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <ReactECharts
        option={option}
        style={{ width: '100%', height: '100%' }}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  );
};
