import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';

export const ContentSlide19: React.FC = () => {
  // 政策部署与投资重点表
  const policyTableData = [
    {
      area: '“六张网”基础设施建设\n（核心投资方向）',
      content: '抓紧出台专项规划和实施方案，系统推进六大基础设施网络一体化发展：\n交通网：完善综合立体交通网络，推进城市群、都市圈轨道交通互联互通\n能源网：“十五五”投资超5万亿元，加快新型电力系统建设，推进跨省跨区输电通道和储能设施建设\n水利网：实施重大水利工程，提升防洪减灾和水资源配置能力\n信息网：加快5G-A、算力网络、工业互联网建设，布局新一代信息基础设施\n物流网：完善国家物流枢纽网络，推进冷链物流和城乡配送体系建设\n市政网：“十五五”投资约5万亿元，结合城市更新建设改造地下管网77万公里、排水防涝等市政设施',
    },
    {
      area: '人工智能产业',
      content: '正在谋划出台加快人工智能落地的配套文件，加大要素保障力度；持续推动央国企开放高价值应用场景，打造各行业人工智能标杆应用；支持具身智能领域高质量发展，加速“人工智能+”赋能千行百业',
    },
    {
      area: '能源保供领域',
      content: '全面部署迎峰度夏能源保供工作，今夏全国最高用电负荷将达16亿千瓦，较去年增加9000万千瓦；推动电力、电煤中长期合同高比例签约和有效履约；加快煤炭先进产能释放，推进油气增储上产；强化省间电力互济，支持新型储能和调峰电源建设',
    },
    {
      area: '营商环境与民间投资',
      content: '深入整治“内卷式”竞争，规范涉企行政执法；完善民营企业参与国家重大项目建设长效机制；优化数据跨境流动管理，持续扩大高水平对外开放，稳定外资预期',
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
      title={<>投资端展望：预计二季度为最低点，前期盈利改善，叠加政策推动，支撑后续投资增速</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-3 flex-shrink-0">
          <BaseCard title="盈利传导" delay="0ms" variant="accent">
            <p>
              2025半年盈利回升→对应支撑2026半年投资（领先1年）。
            </p>
          </BaseCard>
          <BaseCard title="政策性金融工具" delay="120ms">
            <p>
              <span className="font-semibold">8000亿</span>待落地，市场一致预期将在三季度密集落地，重点投向“六张网”新基建和AI等新质生产力领域。
            </p>
          </BaseCard>
          <BaseCard title="“六张网”建设" delay="240ms">
            <p>
              投资规模超<span className="font-semibold">7万亿</span>；“两重”项目已全部下达。2026年“六张网”及相关领域投资超7万亿元；2025年无此口径（概念尚未提出）。
            </p>
          </BaseCard>
        </div>

        {/* 底部文字 */}
        <div className="mb-3 flex-shrink-0">
          <p className="text-xs text-webank-subtext leading-relaxed">
            今年8000亿元“两重”投资建设项目清单和2000亿元设备更新资金已全部下达，“六张网”建设正在统筹推进，城市更新、新型能源体系建设、工业互联网高质量发展等专项规划陆续落地实施
          </p>
        </div>

        {/* 政策部署表格区域 */}
        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            data={policyTableData}
            columns={policyColumns}
            title="政策部署与投资重点"
            subtitle="资料来源：国务院及部委公开文件"
            rowHeight="dense"
            cellClassName="px-2 py-1 align-top"
            headerCellClassName="px-2 py-1.5 text-center font-semibold"
            bordered={true}
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
