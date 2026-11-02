import React from 'react';

const RED = '#b91c1c';
const GREEN = '#16a34a';
const AMBER = '#b45309';

const fmt = (v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`;

const hiTech = [
  { name: '自动数据处理设备及零部件', value: 296.5 },
  { name: '非货币黄金', value: 77.5, note: '贡献 3.8pct' },
  { name: '集成电路', value: 74.7, note: '数量仅 +1.7%' },
];

const traditional = [
  { name: '原油', quantity: -21.5, amount: 3.3, price: 31.5 },
  { name: '煤炭', quantity: -5.7, amount: 45.3 },
  { name: '天然气', quantity: -1.7, amount: 34.0 },
  { name: '铜矿', quantity: -4.2, amount: null, price: 32.6 },
  { name: '液晶平板显示模组', quantity: -24.0, amount: -25.3 },
  { name: '汽车及零部件', quantity: -47.2, amount: -38.1 },
];

/** 左图：高新技术进口金额同比 */
const HiTechPanel: React.FC = () => {
  const left = 170;
  const width = 220;
  const x = (v: number) => left + (v / 300) * width;

  return (
    <svg
      viewBox="0 0 420 300"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-label="高新技术产品9月进口金额同比"
    >
      {[0, 100, 200, 300].map((t) => (
        <g key={t}>
          <line
            x1={x(t)}
            y1={25}
            x2={x(t)}
            y2={260}
            stroke={t ? '#e2e8f0' : '#94a3b8'}
            strokeWidth={t ? 1 : 1.5}
            strokeDasharray={t ? '3 3' : undefined}
          />
          <text x={x(t)} y={278} textAnchor="middle" fill="#94a3b8" fontSize={10}>
            {t}%
          </text>
        </g>
      ))}

      {hiTech.map((d, i) => {
        const y = [65, 145, 225][i];
        const end = x(d.value);
        const inside = d.value > 245;
        return (
          <g key={d.name}>
            <text
              x={left - 9}
              y={y + 4}
              textAnchor="end"
              fill="#334155"
              fontSize={11}
              fontWeight={700}
            >
              {d.name}
            </text>
            <rect
              x={left}
              y={y - 15}
              width={end - left}
              height={30}
              rx={4}
              fill={RED}
              opacity={0.92}
            />
            <text
              x={inside ? end - 6 : end + 6}
              y={y + 4}
              textAnchor={inside ? 'end' : 'start'}
              fill={inside ? '#ffffff' : RED}
              fontSize={11}
              fontWeight={700}
            >
              {fmt(d.value)}
            </text>
            {d.note && (
              <text
                x={left}
                y={y + 30}
                fill={d.note.includes('贡献') ? '#64748b' : AMBER}
                fontSize={10}
                fontWeight={600}
              >
                {d.note}
              </text>
            )}
          </g>
        );
      })}

      <text x={left} y={295} fill="#94a3b8" fontSize={10}>
        9月同比，进口金额
      </text>
    </svg>
  );
};

/** 右图：传统产品进口数量与金额同比 */
const TraditionalPanel: React.FC = () => {
  const left = 142;
  const right = 565;
  const min = -55;
  const max = 55;
  const scale = (right - left) / (max - min);
  const x = (v: number) => left + (v - min) * scale;
  const zero = x(0);

  return (
    <svg
      viewBox="0 0 580 300"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      aria-label="传统产品进口数量与金额同比"
    >
      {[-50, -25, 0, 25, 50].map((t) => (
        <g key={t}>
          <line
            x1={x(t)}
            y1={20}
            x2={x(t)}
            y2={260}
            stroke={t ? '#e2e8f0' : '#94a3b8'}
            strokeDasharray={t ? '3 3' : undefined}
          />
          <text x={x(t)} y={278} textAnchor="middle" fill="#94a3b8" fontSize={10}>
            {t > 0 ? `+${t}%` : `${t}%`}
          </text>
        </g>
      ))}

      {traditional.map((d, i) => {
        const y = 40 + i * 38;
        const amountBarY = y - 12;
        const volumeBarY = y + 3;
        const barH = 9;
        const amountWidth = Math.max(Math.abs(x(d.amount ?? 0) - zero), 1.5);
        const volumeWidth = Math.max(Math.abs(x(d.quantity) - zero), 1.5);

        return (
          <g key={d.name}>
            <text
              x={left - 9}
              y={d.price != null ? y : y + 5}
              textAnchor="end"
              fill="#334155"
              fontSize={10.5}
              fontWeight={700}
            >
              {d.name}
            </text>
            {d.price != null && (
              <text x={left - 9} y={y + 16} textAnchor="end" fill={AMBER} fontSize={9}>
                价 {fmt(d.price)}
              </text>
            )}

            {d.amount != null && (
              <>
                <rect
                  x={Math.min(zero, x(d.amount))}
                  y={amountBarY}
                  width={amountWidth}
                  height={barH}
                  rx={2}
                  fill={RED}
                />
                <text
                  x={d.amount >= 0 ? x(d.amount) + 4 : x(d.amount) - 4}
                  y={amountBarY + barH}
                  textAnchor={d.amount >= 0 ? 'start' : 'end'}
                  fill={RED}
                  fontSize={9.5}
                  fontWeight={700}
                >
                  {fmt(d.amount)}
                </text>
              </>
            )}

            <rect
              x={Math.min(zero, x(d.quantity))}
              y={volumeBarY}
              width={volumeWidth}
              height={barH}
              rx={2}
              fill={GREEN}
            />
            <text
              x={d.quantity < 0 ? x(d.quantity) - 4 : x(d.quantity) + 4}
              y={volumeBarY + barH}
              textAnchor={d.quantity < 0 ? 'end' : 'start'}
              fill={GREEN}
              fontSize={9.5}
              fontWeight={700}
            >
              {fmt(d.quantity)}
            </text>
          </g>
        );
      })}

      <text x={left} y={295} fill="#94a3b8" fontSize={10}>
        红：金额同比　绿：数量同比　琥珀：价格同比｜数据来源：海关总署｜单位：%
      </text>
    </svg>
  );
};

export const ImportStructureChart: React.FC = () => (
  <div className="h-full flex flex-col min-h-0 overflow-hidden border border-webank-line/60 rounded-card bg-white p-2.5">
    <div className="mb-1 flex-shrink-0">
      <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
        进口量价拆解：AI链金额高增、传统产品量价齐降
      </h3>
      <div className="flex items-center justify-between mt-1 gap-3">
        <p className="text-xs text-webank-subtext">
          9月进口<span className="text-red-500 font-semibold">+31.0%</span>，进口量仅
          <span className="text-red-500 font-semibold">+1.0%</span>，高增由价格驱动
        </p>
        <div className="flex gap-3 text-[10px] text-[#666]">
          <span>
            <i className="inline-block w-3 h-2 mr-1 bg-red-700" />
            金额
          </span>
          <span>
            <i className="inline-block w-3 h-2 mr-1 bg-green-600" />
            数量
          </span>
          <span>
            <i className="inline-block w-3 h-2 mr-1 bg-amber-700" />
            价格
          </span>
        </div>
      </div>
    </div>

    <div className="flex-1 min-h-0 grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-2">
      <div className="flex flex-col min-h-0">
        <p className="text-[12px] font-bold text-webank-blue">高新技术：金额高增</p>
        <div className="flex-1 min-h-0">
          <HiTechPanel />
        </div>
      </div>
      <div className="flex flex-col min-h-0 border-l border-slate-200 pl-2">
        <p className="text-[12px] font-bold text-webank-blue">
          传统产品：数量下滑，金额靠价格支撑
        </p>
        <div className="flex-1 min-h-0">
          <TraditionalPanel />
        </div>
      </div>
    </div>
  </div>
);
