// 中国 AI 产业链出口同比增速（图表38）

export interface AiChainExportDataPoint {
  category: string;
  group: string;
  y2024: number;
  y2025: number;
  y2026q1: number;
}

export const aiChainExportData: AiChainExportDataPoint[] = [
  // AI 算力与服务器
  { category: '计算机处理单元', group: 'AI算力与服务器', y2024: 21, y2025: 1, y2026q1: -2 },
  { category: '计算机输入输出单元', group: 'AI算力与服务器', y2024: 12, y2025: -2, y2026q1: 10 },
  { category: '计算机存储单元', group: 'AI算力与服务器', y2024: 19, y2025: 13, y2026q1: 94 },
  { category: '其他计算机单元', group: 'AI算力与服务器', y2024: 7, y2025: 14, y2026q1: -7 },
  { category: '计算机零件及附件', group: 'AI算力与服务器', y2024: 18, y2025: 25, y2026q1: 126 },
  // 核心器件(集成电路等)
  { category: '处理器/控制器IC', group: '核心器件', y2024: 13, y2025: 20, y2026q1: 12 },
  { category: '存储器IC', group: '核心器件', y2024: 22, y2025: 33, y2026q1: 148 },
  { category: '其他IC', group: '核心器件', y2024: 10, y2025: 16, y2026q1: 11 },
  // 数据中心互联
  { category: 'PCB', group: '数据中心互联', y2024: 14, y2025: 27, y2026q1: 27 },
  { category: '路由器', group: '数据中心互联', y2024: -8, y2025: 1, y2026q1: 11 },
  { category: '光模块及光通信零件', group: '数据中心互联', y2024: 12, y2025: 38, y2026q1: 38 },
  // 半导体制造设备
  { category: '半导体存储介质', group: '半导体制造设备', y2024: -26, y2025: 9, y2026q1: 17 },
  { category: '晶圆制造设备', group: '半导体制造设备', y2024: 27, y2025: -24, y2026q1: 36 },
  { category: '半导体制造设备', group: '半导体制造设备', y2024: 18, y2025: -11, y2026q1: 69 },
  { category: '半导体装配设备', group: '半导体制造设备', y2024: 1, y2025: 31, y2026q1: 23 },
  // 数据中心配套(电/储/散热/线缆)
  { category: '静止式变流器', group: '数据中心配套', y2024: -6, y2025: 7, y2026q1: 28 },
  { category: '锂电池', group: '数据中心配套', y2024: -6, y2025: 23, y2026q1: 45 },
  { category: '开关及配电盘', group: '数据中心配套', y2024: 2, y2025: 11, y2026q1: 14 },
  { category: '光纤', group: '数据中心配套', y2024: 2, y2025: 35, y2026q1: 34 },
  { category: '风冷冷水机', group: '数据中心配套', y2024: 29, y2025: 16, y2026q1: 52 },
  { category: '液冷模块/冷却塔', group: '数据中心配套', y2024: 44, y2025: 14, y2026q1: -6 },
  { category: '冷却风扇', group: '数据中心配套', y2024: 7, y2025: 11, y2026q1: 23 },
  { category: '换热器', group: '数据中心配套', y2024: 2, y2025: 22, y2026q1: 38 },
  // AI 终端设备
  { category: '智能手机', group: 'AI终端设备', y2024: -1, y2025: -9, y2026q1: -9 },
  { category: '带动LCD模组', group: 'AI终端设备', y2024: 8, y2025: 10, y2026q1: 22 },
  { category: '带动OLED模组', group: 'AI终端设备', y2024: 33, y2025: -7, y2026q1: -17 },
  { category: '显示器/AI显示终端', group: 'AI终端设备', y2024: 14, y2025: -12, y2026q1: -6 },
];
