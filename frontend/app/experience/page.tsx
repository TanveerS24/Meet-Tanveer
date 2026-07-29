'use client';

import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { ExperienceList } from '../../components/experience/ExperienceList';
import { MOCK_EXPERIENCES } from '../../constants/portfolioData';

export default function ExperiencePage() {
  return (
    <PageContainer
      title="Engineering Roles & Experience"
      subtitle="Proven track record leading engineering architecture, microservices migrations, and high-scale applications."
    >
      <ExperienceList experiences={MOCK_EXPERIENCES} />
    </PageContainer>
  );
}
