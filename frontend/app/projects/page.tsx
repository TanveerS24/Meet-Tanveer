'use client';

import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { ProjectGrid } from '../../components/projects/ProjectGrid';
import { usePortfolioProjects } from '../../hooks/usePortfolioData';
import { MOCK_PROJECTS } from '../../constants/portfolioData';

export default function ProjectsPage() {
  const { data: projects } = usePortfolioProjects();

  return (
    <PageContainer
      title="Enterprise Portfolio Showcase"
      subtitle="Modular codebases, microservices event gateways, skeuomorphic design libraries, and AI automation engines."
    >
      <ProjectGrid projects={projects || MOCK_PROJECTS} />
    </PageContainer>
  );
}
