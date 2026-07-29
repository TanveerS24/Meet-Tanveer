'use client';

import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { DeveloperTimeline } from '../../components/timeline/DeveloperTimeline';
import { MOCK_TIMELINE } from '../../constants/portfolioData';

export default function TimelinePage() {
  return (
    <PageContainer
      title="Chronological Developer Timeline"
      subtitle="Architectural milestones, career promotions, open-source releases, and educational foundations."
    >
      <DeveloperTimeline milestones={MOCK_TIMELINE} />
    </PageContainer>
  );
}
