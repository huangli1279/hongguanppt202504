// 2026年上半年各省份GDP及增速

export interface ProvinceGdpItem {
  province: string;
  gdp: number;
  growth: string;
}

export const provinceGdpDataTop15: ProvinceGdpItem[] = [
  { province: '广东', gdp: 7.23, growth: '4.5%' },
  { province: '江苏', gdp: 7.04, growth: '5.2%' },
  { province: '山东', gdp: 5.32, growth: '5.6%' },
  { province: '浙江', gdp: 4.79, growth: '5.7%' },
  { province: '四川', gdp: 3.36, growth: '4.8%' },
  { province: '河南', gdp: 3.35, growth: '5.0%' },
  { province: '湖北', gdp: 3.13, growth: '5.0%' },
  { province: '福建', gdp: 2.93, growth: '4.0%' },
  { province: '上海', gdp: 2.79, growth: '5.6%' },
  { province: '安徽', gdp: 2.74, growth: '5.6%' },
  { province: '湖南', gdp: 2.70, growth: '2.7%' },
  { province: '北京', gdp: 2.64, growth: '5.4%' },
  { province: '河北', gdp: 2.42, growth: '4.8%' },
  { province: '江西', gdp: 1.80, growth: '4.0%' },
  { province: '陕西', gdp: 1.75, growth: '3.8%' },
];

export const provinceGdpDataRest: ProvinceGdpItem[] = [
  { province: '重庆', gdp: 1.67, growth: '4.2%' },
  { province: '辽宁', gdp: 1.62, growth: '2.5%' },
  { province: '云南', gdp: 1.62, growth: '2.5%' },
  { province: '广西', gdp: 1.45, growth: '3.5%' },
  { province: '内蒙古', gdp: 1.28, growth: '4.5%' },
  { province: '贵州', gdp: 1.20, growth: '4.0%' },
  { province: '山西', gdp: 1.17, growth: '2.1%' },
  { province: '新疆', gdp: 1.03, growth: '3.7%' },
  { province: '天津', gdp: 0.91, growth: '4.8%' },
  { province: '黑龙江', gdp: 0.74, growth: '3.5%' },
  { province: '吉林', gdp: 0.70, growth: '2.4%' },
  { province: '甘肃', gdp: 0.70, growth: '4.9%' },
  { province: '海南', gdp: 0.38, growth: '2.0%' },
  { province: '宁夏', gdp: 0.28, growth: '4.9%' },
  { province: '青海', gdp: 0.21, growth: '5.0%' },
  { province: '西藏', gdp: 0.16, growth: '6.3%' },
];

/**
 * 合并所有省份GDP数据，用于地图热力图
 */
export const provinceGdpMapData = [
  ...provinceGdpDataTop15.map((item) => ({
    name: item.province,
    gdp: item.gdp,
    growth: item.growth,
  })),
  ...provinceGdpDataRest.map((item) => ({
    name: item.province,
    gdp: item.gdp,
    growth: item.growth,
  })),
];
