import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';

export const ContentSlide21: React.FC = () => {
  // 政策部署与投资重点表
  const policyTableData = [
    {
      area: '"六张网"基础设施建设\n（核心投资方向）',
      content: '抓紧出台专项规划和实施方案，系统推进六大基础设施网络一体化发展：\n交通网：完善综合立体交通网络，推进城市群、都市圈轨道交通互联互通\n能源网："十五五"投资超5万亿元，加快新型电力系统建设，推进跨省跨区输电通道和储能设施建设\n水利网：实施重大水利工程，提升防洪减灾和水资源配置能力\n信息网：加快5G-A、算力网络、工业互联网建设，布局新一代信息基础设施\n物流网：完善国家物流枢纽网络，推进冷链物流和城乡配送体系建设\n市政网："十五五"投资约5万亿元，结合城市更新建设改造地下管网77万公里、排水防涝等市政设施',
    },
    {
      area: '人工智能产业',
      content: '正在谋划出台加快人工智能落地的配套文件，加大要素保障力度；持续推动央国企开放高价值应用场景，打造各行业人工智能标杆应用；支持具身智能领域高质量发展，加速"人工智能+"赋能千行百业',
    },
    {
      area: '能源保供领域',
      content: '全面部署迎峰度夏能源保供工作，今夏全国最高用电负荷将达16亿千瓦，较去年增加9000万千瓦；推动电力、电煤中长期合同高比例签约和有效履约；加快煤炭先进产能释放，推进油气增储上产；强化省间电力互济，支持新型储能和调峰电源建设',
    },
    {
      area: '营商环境与民间投资',
      content: '深入整治"内卷式"竞争，规范涉企行政执法；完善民营企业参与国家重大项目建设长效机制；优化数据跨境流动管理，持续扩大高水平对外开放，稳定外资预期',
    },
    {
      area: '生态环保领域',
      content: '印发《推进生态综合补偿实施方案》，加大对重点生态功能区的转移支付力度；支持生态保护修复工程建设，推动绿色低碳技术研发和产业化应用',
    },
    {
      area: '民生与消费领域',
      content: '推进完整社区建设，支持养老托育、社区服务等民生设施建设；稳定粮食生产和市场供应，保障重要民生商品价格平稳；促进汽车、家电等大宗消费升级',
    },
  ];

  const policyColumns: ColumnConfig[] = [
    { key: 'area', title: '核心领域', align: 'center', width: '16%' },
    {
      key: 'content',
      title: '政策部署与投资重点',
      align: 'left',
      render: (val: string) => {
        const lines = val.split('\n');
        return (
          <div className="leading-snug text-caption">
            {lines.map((line, idx) => {
              const match = line.match(/^(交通网|能源网|水利网|信息网|物流网|市政网)：/);
              if (match) {
                const rest = line.substring(match[0].length);
                return (
                  <div key={idx} className={idx > 0 ? 'mt-0.5' : ''}>
                    <span className="font-semibold text-webank-blue">{match[1]}</span>：{rest}
                  </div>
                );
              }
              return <div key={idx} className={idx > 0 ? 'mt-0.5' : ''}>{line}</div>;
            })}
          </div>
        );
      },
    },
  ];

  return (
    <BaseContentSlide
      title={
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-200 to-amber-300 rounded-full text-amber-700 font-semibold shadow-sm">
            <svg className="w-3 h-3 inline-block mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            投资端展望
          </span>
          <span className="text-black">政策发力叠加盈利滞后传导，固投有望边际改善，仍面临地产民间投资约束</span>
        </span>
      }
      className="[&_[class*='animate-top-line']]:!bg-gradient-to-r [&_[class*='animate-top-line']]:!from-yellow-200 [&_[class*='animate-top-line']]:!to-amber-400"
      cardColumns={4}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-4 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="政策支持" delay="0ms" variant="accent">
            <p className="text-xs">
              <span className="font-semibold">8000亿</span>政策工具待落地，市场一致预期将在三季度密集落地，重点投向"六张网"新基建和AI等新质生产力领域。
            </p>
            <p className="mt-1 text-xs">
              "两重"项目全部下达。2026年"六张网"及相关领域投资超<span className="font-semibold">7万亿元</span>。上半年处于前期准备阶段的项目，下半年进入建设实施阶段。
            </p>
          </BaseCard>
          <BaseCard title="专项债发行提速" delay="120ms">
            <p className="text-xs">
              6月发行规模创单月新高（5716亿元，达计划的1.65倍），Q3将迎来发行高峰，预计同比增长约30%。
            </p>
            <p className="mt-1 text-xs">
              同时需要关注债的结构，土储、特殊新增债占比会影响实际投资形成。
            </p>
          </BaseCard>
          <BaseCard title="盈利传导" delay="240ms">
            <p className="text-xs">
              企业盈利向资本开支存在2‑3个季度传导时滞。
            </p>
            <p className="mt-1 text-xs">
              2025年下半年起工业企业盈利修复，有望对2026下半年投资形成潜在支撑。
            </p>
          </BaseCard>
          <BaseCard title="机构预测" delay="360ms">
            <p className="mb-1 text-xs">主流机构判断固投走势呈前低后高，下半年边际回升。上半年固投弱于预期，机构下调全年定量预测，更多采用定性判断。</p>
            <p className="mb-1 text-xs">主要利好：8000亿政策性金融工具落地、Q3专项债发行提速，同时有去年同期低基数加持；</p>
            <p className="text-xs">主要拖累：地产下行、民间投资信心不足。</p>
          </BaseCard>
        </div>

        {/* 政策部署表格区域 */}
        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            data={policyTableData}
            columns={policyColumns}
            title="政策部署与投资重点"
            subtitle="资料来源：国务院及部委公开文件"
            rowHeight="dense"
            cellClassName="px-2 py-1 align-top text-gray-700"
            headerCellClassName="px-2 py-1.5 text-center font-semibold"
            headerBgColor="#d1d5db"
            headerTextColor="#000000"
            bordered={true}
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
