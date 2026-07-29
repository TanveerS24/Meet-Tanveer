'use client';

import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SkillGrid } from '../../components/skills/SkillGrid';
import { MOCK_SKILL_CATEGORIES } from '../../constants/portfolioData';

export default function SkillsPage() {
  return (
    <PageContainer
      title="Technical Stack & Competencies"
      subtitle="Comprehensive proficiency breakdown across system architecture, languages, frontend engines, backend platforms, and DevOps."
    >
      <SkillGrid categories={MOCK_SKILL_CATEGORIES} />
    </PageContainer>
  );
}
