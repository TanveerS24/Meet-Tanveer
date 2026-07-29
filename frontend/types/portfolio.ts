export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  repoUrl?: string;
  demoUrl?: string;
  techStack: string[];
  featured: boolean;
  category: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    proficiency: number;
    icon?: string;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  category: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'CAREER' | 'EDUCATION' | 'OPEN_SOURCE' | 'ARCHITECTURAL_MILESTONE';
  tags: string[];
}
