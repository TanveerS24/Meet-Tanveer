import { ProjectItem, ExperienceItem, SkillCategory, AchievementItem, TimelineMilestone } from '../types/portfolio';

export const MOCK_PROJECTS: ProjectItem[] = [
  {
    id: 'p-1',
    title: 'Enterprise Developer Portfolio (Docker-First)',
    description: 'Production-ready Next.js App Router & Express TypeScript platform with PostgreSQL, Prisma, Skeuomorphic UI, and GitHub GraphQL engine.',
    longDescription: 'Architected a modular developer portfolio following enterprise clean architecture patterns. Supports live GitHub GraphQL data integration, layered Express backend, automated Jest testing, and Docker Compose single-command orchestration.',
    repoUrl: 'https://github.com/TanveerS24/Meet-Tanveer',
    demoUrl: 'https://tanveers24.dev',
    techStack: ['Next.js', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'GraphQL', 'Tailwind CSS'],
    featured: true,
    category: 'Full Stack Architecture',
  },
  {
    id: 'p-2',
    title: 'High-Throughput Microservices Event Gateway',
    description: 'Asynchronous event streaming gateway built with Node.js, Apache Kafka, and Redis cluster caching handling 50k req/sec.',
    longDescription: 'Engineered high-throughput event processing nodes with automated failure retry backoff, open telemetry metrics logging, rate limiting, and JWT secret validation.',
    repoUrl: 'https://github.com/TanveerS24/enterprise-event-gateway',
    demoUrl: 'https://gateway.tanveers24.dev',
    techStack: ['Node.js', 'Express', 'Kafka', 'Redis', 'Docker', 'Prometheus', 'Grafana'],
    featured: true,
    category: 'Backend & Distributed Systems',
  },
  {
    id: 'p-3',
    title: 'Apple-Inspired Skeuomorphic UI Engine',
    description: 'React component library built with Framer Motion and Tailwind CSS featuring tactile button physics and glass surface depth.',
    longDescription: 'Created handcrafted UI components with realistic physical lighting, embossed metal badges, recessed panels, and glassmorphic reflection dynamics.',
    repoUrl: 'https://github.com/TanveerS24/skeuomorphic-ui-kit',
    demoUrl: 'https://skeuo.tanveers24.dev',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
    category: 'UI/UX & Design Systems',
  },
  {
    id: 'p-4',
    title: 'AI Code Review & Security Analysis Bot',
    description: 'Automated GitHub Action bot performing AST static analysis, vulnerability scanning, and AI-assisted code suggestions.',
    longDescription: 'Built AST parsing pipelines integrated with LLM inference servers to enforce code standards, detect security vulnerabilities, and generate pull request feedback.',
    repoUrl: 'https://github.com/TanveerS24/ai-code-reviewer',
    demoUrl: 'https://bot.tanveers24.dev',
    techStack: ['Python', 'TypeScript', 'OpenAI API', 'GitHub Actions', 'Docker'],
    featured: false,
    category: 'AI & Automation',
  },
];

export const MOCK_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Principal Software Architect & Lead Engineer',
    company: 'Enterprise Tech Solutions Inc.',
    location: 'Bengaluru, India',
    startDate: '2023 - Present',
    current: true,
    description: 'Leading architectural design, microservices transformation, and DevOps container pipelines for enterprise cloud applications.',
    achievements: [
      'Architected cloud-native distributed microservices reducing backend latency by 42%.',
      'Designed Docker-first deployment workflows across 15+ core engineering teams.',
      'Mentored 12 senior software engineers in TypeScript, clean architecture, and system scalability.',
    ],
    technologies: ['TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Senior Full Stack Software Engineer',
    company: 'Apex Digital Systems',
    location: 'Remote',
    startDate: '2021 - 2023',
    current: false,
    endDate: '2023',
    description: 'Developed high-performance web applications, complex state management, and resilient REST/GraphQL APIs.',
    achievements: [
      'Built custom React UI design systems serving 2M+ monthly active users.',
      'Optimized PostgreSQL query execution plans cutting database CPU usage by 35%.',
      'Implemented real-time WebSocket communication channels for enterprise dashboards.',
    ],
    technologies: ['React', 'Next.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'Tailwind CSS'],
  },
  {
    id: 'exp-3',
    role: 'Software Engineer',
    company: 'Innovate Tech Labs',
    location: 'Bengaluru, India',
    startDate: '2019 - 2021',
    current: false,
    endDate: '2021',
    description: 'Full-stack software engineering focusing on REST API services, unit testing, and frontend components.',
    achievements: [
      'Spearheaded frontend migration from legacy jQuery to React TypeScript.',
      'Maintained 95%+ test coverage across backend services using Jest and Supertest.',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Docker', 'Jest'],
  },
];

export const MOCK_SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Architecture & Design',
    skills: [
      { name: 'Clean Architecture & SOLID', proficiency: 96 },
      { name: 'Microservices & Distributed Systems', proficiency: 92 },
      { name: 'Domain-Driven Design (DDD)', proficiency: 88 },
      { name: 'Skeuomorphic & Modern UI/UX', proficiency: 94 },
    ],
  },
  {
    category: 'Languages & Core',
    skills: [
      { name: 'TypeScript', proficiency: 98 },
      { name: 'JavaScript (ESNext)', proficiency: 96 },
      { name: 'Java', proficiency: 85 },
      { name: 'SQL', proficiency: 90 },
      { name: 'Python', proficiency: 82 },
      { name: 'HTML5 / CSS3', proficiency: 95 },
    ],
  },
  {
    category: 'Frontend Suite',
    skills: [
      { name: 'Next.js (App Router)', proficiency: 95 },
      { name: 'React', proficiency: 96 },
      { name: 'Tailwind CSS', proficiency: 94 },
      { name: 'Framer Motion', proficiency: 92 },
      { name: 'TanStack Query', proficiency: 90 },
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      { name: 'Node.js & Express', proficiency: 95 },
      { name: 'PostgreSQL & Prisma ORM', proficiency: 92 },
      { name: 'REST & GraphQL APIs', proficiency: 94 },
      { name: 'Redis Caching', proficiency: 86 },
    ],
  },
  {
    category: 'DevOps & Tooling',
    skills: [
      { name: 'Docker & Docker Compose', proficiency: 94 },
      { name: 'CI/CD & GitHub Actions', proficiency: 90 },
      { name: 'Jest & React Testing Library', proficiency: 88 },
      { name: 'Git & Version Control', proficiency: 96 },
    ],
  },
];

export const MOCK_TIMELINE: TimelineMilestone[] = [
  {
    id: 't-1',
    year: '2026',
    title: 'Enterprise Developer Portfolio Platform',
    subtitle: 'Docker-First Architecture & Skeuomorphic Design',
    description: 'Built production-grade portfolio system integrating live GitHub GraphQL engine, Express backend, PostgreSQL, and Apple skeuomorphism.',
    category: 'ARCHITECTURAL_MILESTONE',
    tags: ['Next.js', 'Docker', 'Express', 'GraphQL', 'Prisma'],
  },
  {
    id: 't-2',
    year: '2024',
    title: 'Principal Architect Role',
    subtitle: 'Enterprise Tech Solutions',
    description: 'Promoted to Principal Architect leading enterprise cloud transformations and engineering best practices.',
    category: 'CAREER',
    tags: ['Architecture', 'Leadership', 'Docker', 'AWS'],
  },
  {
    id: 't-3',
    year: '2022',
    title: 'High-Scale Event Gateway Release',
    subtitle: 'Open Source Distributed Systems',
    description: 'Released high-throughput event streaming gateway handling 50k req/sec with Apache Kafka and Redis.',
    category: 'OPEN_SOURCE',
    tags: ['Node.js', 'Kafka', 'Redis', 'Microservices'],
  },
  {
    id: 't-4',
    year: '2019',
    title: 'Bachelor of Technology in Computer Science',
    subtitle: 'First Class Honors',
    description: 'Graduated with specialization in Software Engineering, Algorithms, and Operating Systems.',
    category: 'EDUCATION',
    tags: ['Computer Science', 'Algorithms', 'Distributed Systems'],
  },
];

export const MOCK_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'a-1',
    title: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Advanced validation of enterprise cloud architecture, distributed systems security, and high availability design.',
    credentialUrl: 'https://aws.amazon.com/verification',
    category: 'Certification',
  },
  {
    id: 'a-2',
    title: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    description: 'Demonstrated mastery of cloud native application design, container orchestrations, and pod configurations.',
    credentialUrl: 'https://cncf.io/verification',
    category: 'Certification',
  },
  {
    id: 'a-3',
    title: 'Top Open Source Contributor Award',
    issuer: 'GitHub Community',
    date: '2023',
    description: 'Recognized for impactful contributions to developer tools and high-performance TypeScript libraries.',
    category: 'Award',
  },
];
