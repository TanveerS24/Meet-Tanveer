import { portfolioRepository } from '../repositories/portfolio.repository';

export class PortfolioService {
  public async getOverview() {
    const projects = await portfolioRepository.getProjects();
    const experiences = await portfolioRepository.getExperiences();
    const skills = await portfolioRepository.getSkills();
    const achievements = await portfolioRepository.getAchievements();

    return {
      bio: {
        name: 'Tanveer',
        title: 'Senior Software Architect & Full Stack Engineer',
        summary:
          'Passionate software architect building resilient distributed systems, enterprise web applications, and developer platforms.',
        location: 'Bengaluru, India',
        status: 'Available for Enterprise Architecture & Senior Engineering roles',
      },
      projectsCount: projects.length || 6,
      experiencesCount: experiences.length || 4,
      skillsCount: skills.length || 18,
      achievementsCount: achievements.length || 5,
    };
  }

  public async getProjects() {
    const dbProjects = await portfolioRepository.getProjects();
    if (dbProjects.length > 0) return dbProjects;

    // Fallback static enterprise project showcase
    return [
      {
        id: 'proj-1',
        title: 'Enterprise Developer Portfolio (Docker-First)',
        description: 'Scalable Next.js 14 & Express TypeScript platform with Postgres, Prisma, Skeuomorphic UI, and GitHub GraphQL analytics engine.',
        longDescription: 'Engineered a enterprise-grade developer platform supporting real-time GitHub GraphQL metrics, skeuomorphic depth components, and single-command Docker Compose orchestration.',
        repoUrl: 'https://github.com/TanveerS24/Meet-Tanveer',
        demoUrl: 'https://tanveers24.dev',
        techStack: ['Next.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'GraphQL'],
        featured: true,
        category: 'Full Stack Architecture',
      },
      {
        id: 'proj-2',
        title: 'High-Throughput Microservices Event Gateway',
        description: 'Asynchronous event streaming gateway handling 50k requests/sec with Apache Kafka and Redis cluster caching.',
        longDescription: 'Built distributed message dispatchers, JWT authentication gateways, dynamic rate limiting, and open-telemetry metrics tracing.',
        repoUrl: 'https://github.com/TanveerS24/enterprise-event-gateway',
        demoUrl: 'https://gateway.tanveers24.dev',
        techStack: ['Node.js', 'Kafka', 'Redis', 'Docker', 'Prometheus', 'Grafana'],
        featured: true,
        category: 'Backend & Systems',
      },
      {
        id: 'proj-3',
        title: 'Apple-Inspired Skeuomorphic Component Design Engine',
        description: 'Tactile component library built with Framer Motion and Tailwind CSS featuring physical lighting and glass reflection dynamics.',
        longDescription: 'Created handcrafted UI primitives, embossed buttons, glossy navigation bars, interactive toggles, and layered depth cards.',
        repoUrl: 'https://github.com/TanveerS24/skeuomorphic-ui-kit',
        demoUrl: 'https://skeuo.tanveers24.dev',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Storybook'],
        featured: true,
        category: 'UI/UX Design System',
      },
    ];
  }
}

export const portfolioService = new PortfolioService();
