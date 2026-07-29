'use client';

import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { ContributionGraph } from '../../components/github/ContributionGraph';
import { RecentPushes } from '../../components/github/RecentPushes';
import { RepoStatsGrid } from '../../components/github/RepoStatsGrid';
import { LanguageBreakdown } from '../../components/github/LanguageBreakdown';
import { ActivityFeed } from '../../components/github/ActivityFeed';
import { CommitAnalytics } from '../../components/github/CommitAnalytics';
import { RepoGrid } from '../../components/github/RepoGrid';
import { useGithubData } from '../../hooks/useGithubData';
import { Skeleton } from '../../components/ui/Skeleton';
import { RefreshCw, ShieldCheck } from 'lucide-react';

export default function GitHubDashboardPage() {
  const { data, isLoading, refetch, isRefetching } = useGithubData('TanveerS24');

  if (isLoading || !data) {
    return (
      <PageContainer
        title="GitHub Developer Analytics Centerpiece"
        subtitle="Real-time GraphQL API metrics engine, commit heatmaps, velocity charts, and repository statistics."
      >
        <div className="space-y-6">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-96 w-full" />
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      title="GitHub Analytics Engine Centerpiece"
      subtitle="Real-time GraphQL API telemetry, commit velocity metrics, interactive contribution heatmap, and activity streams."
    >
      <div className="space-y-8">
        {/* Status Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl skeuo-panel">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-200">
              Live GraphQL Telemetry Connected
            </span>
          </div>

          <button
            onClick={() => refetch()}
            disabled={isRefetching}
            className="skeuo-btn px-3.5 py-1.5 text-xs font-semibold text-blue-300 hover:text-white rounded-xl flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefetching ? 'animate-spin' : ''}`} />
            <span>{isRefetching ? 'Syncing GraphQL...' : 'Sync Telemetry'}</span>
          </button>
        </div>

        {/* 1. Repository Stats Grid */}
        <RepoStatsGrid stats={data.stats} />

        {/* 2. Interactive Contribution Graph Heatmap */}
        <ContributionGraph data={data.contributions} />

        {/* 3. Commit Analytics Velocity & Language Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <CommitAnalytics analytics={data.analytics} />
          </div>
          <div className="lg:col-span-4">
            <LanguageBreakdown languages={data.languages} />
          </div>
        </div>

        {/* 4. Recent Pushes & Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <RecentPushes pushes={data.recentPushes} />
          </div>
          <div className="lg:col-span-5">
            <ActivityFeed activity={data.activity} />
          </div>
        </div>

        {/* 5. Repository Cards */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
            Featured Codebases & Pinned Repositories
          </h3>
          <RepoGrid repos={data.pinnedRepos} />
        </div>
      </div>
    </PageContainer>
  );
}
