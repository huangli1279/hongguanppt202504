import React from 'react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

export const ContentSlide19: React.FC = () => (
  <BaseContentSlide title="专项债：发行提速，资金加快投向项目建设" cardColumns={2}>
    <div className="grid grid-cols-2 gap-4">
      <BaseCard title="发行节奏" variant="accent" delay="0ms">
        <p>专项债发行提速，为项目建设和有效投资提供资金支持。</p>
      </BaseCard>
      <BaseCard title="资金投向" delay="120ms">
        <p>重点关注项目建设专项债及其对基础设施投资的带动作用。</p>
      </BaseCard>
    </div>
  </BaseContentSlide>
);
