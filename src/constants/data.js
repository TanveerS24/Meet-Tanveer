// Portfolio Data for Tanveer

export const DEVELOPER_INFO = {
  name: "TANVEER",
  fullName: "Tanveer",
  role: "FULL-STACK DEVELOPER & CREATIVE TECHNOLOGIST",
  subRole: "Distributed Systems • Modern Web • 3D Experiences",
  tagline: "BUILDING HIGH-PERFORMANCE WEB ARCHITECTURES & IMMERSIVE EXPERIENCES",
  badge: "● DEVELOPER — TANVEER",
  verticalLabels: ["DEVELOPER", "SYSTEM ARCHITECT", "CREATIVE TECHNOLOGIST", "PROBLEM SOLVER"],
  bio: "Engineering high-throughput systems, resilient microservices, and high-fidelity web experiences. Obsessed with elegant abstractions, sub-millisecond optimizations, and cinematic user interfaces.",
  quote: "CLEAN CODE SPEAKS LOUDER.",
  aboutTags: ["IDEAS", "CODE", "EXPERIENCES", "REAL IMPACT"],
  stats: [
    { label: "Production Commits", value: "3,400+" },
    { label: "Systems Deployed", value: "28+" },
    { label: "Uptime Reliability", value: "99.98%" },
    { label: "Years of Craft", value: "4+" },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com", handle: "github.com/Tanveer" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/Tanveer" },
    { name: "X / Twitter", url: "https://x.com", handle: "@TanveerDev" },
    { name: "Email", url: "mailto:contact@tanveer.dev", handle: "contact@tanveer.dev" },
  ]
};

export const TOOLS_DATA = [
  { id: "react", name: "React / Next.js", category: "Frontend", level: "96%", color: "#61dafb", pos: [-3.2, 1.6, 0.4] },
  { id: "typescript", name: "TypeScript", category: "Core Language", level: "94%", color: "#3178c6", pos: [-1.8, 2.8, -0.6] },
  { id: "nodejs", name: "Node.js", category: "Runtime / Backend", level: "92%", color: "#68a063", pos: [1.9, 2.5, -0.2] },
  { id: "python", name: "Python", category: "Data & Systems", level: "88%", color: "#3776ab", pos: [3.4, 1.2, 0.8] },
  { id: "git", name: "Git / CI-CD", category: "DevOps", level: "95%", color: "#f05032", pos: [2.8, -1.4, -0.5] },
  { id: "docker", name: "Docker / K8s", category: "Containers", level: "85%", color: "#2496ed", pos: [1.2, -2.6, 0.3] },
  { id: "aws", name: "AWS & Vercel", category: "Cloud Infra", level: "90%", color: "#ff9900", pos: [-1.4, -2.7, -0.4] },
  { id: "vscode", name: "VS Code / Neovim", category: "Environment", level: "98%", color: "#007acc", pos: [-3.0, -1.2, 0.6] },
  { id: "threejs", name: "Three.js / WebGL", category: "Creative 3D", level: "89%", color: "#ffffff", pos: [0.0, 3.2, 0.7] },
  { id: "ai", name: "Claude / ChatGPT / LLM APIs", category: "AI Workflows", level: "93%", color: "#d97706", pos: [0.0, -3.2, -0.8] },
];

export const TIMELINE_DATA = [
  {
    year: "2022",
    title: "First Lines & Foundational Craft",
    tagline: "Algorithms, Core JS & Modern Frontend",
    description: "Mastered full-stack primitives, algorithms, data structures, and foundational web protocols. Built initial full-stack responsive web engines.",
    highlights: ["Data Structures & Algorithms", "Vanilla JS & DOM Mastery", "Responsive CSS & Component Architectures"],
    coords: "LAT 28.6139° N • LON 77.2090° E",
    tubeOffset: 0.1,
  },
  {
    year: "2023",
    title: "Full-Stack Mastery & Scalable Web",
    tagline: "React, TypeScript & Cloud Backends",
    description: "Transitioned to enterprise-grade TypeScript, modern React ecosystems, microservices, and relational schema modeling.",
    highlights: ["React / Next.js Production Systems", "TypeScript Strict Safety", "PostgreSQL & Redis Caching Layers"],
    coords: "STATION 02 • APEX VECTOR",
    tubeOffset: 0.3,
  },
  {
    year: "2024",
    title: "Cloud Architecture & High Throughput APIs",
    tagline: "Distributed Systems & Docker Containerization",
    description: "Designed resilient event-driven architectures, automated CI/CD pipelines, container orchestration, and sub-100ms API response endpoints.",
    highlights: ["Distributed Message Brokers", "Docker & Kubernetes Workflows", "GraphQL & REST Real-time Streaming"],
    coords: "NODE ORBIT • 48.8566° N",
    tubeOffset: 0.55,
  },
  {
    year: "2025",
    title: "Agentic AI Integrations & 3D WebGL",
    tagline: "LLM Orchestration & Immersive Interfaces",
    description: "Pioneered agentic search pipelines, RAG systems, and interactive 3D WebGL / Three.js data visualization experiences.",
    highlights: ["Vector DBs & Neural Search", "Three.js / R3F Canvas Experiences", "Autonomous Agent Pipelines"],
    coords: "ORBITAL SYNAPSE • 37.7749° N",
    tubeOffset: 0.8,
  },
  {
    year: "2026",
    title: "Next-Gen Engineering & Visionary Products",
    tagline: "Leading Scaled Architectures & Creative Tech",
    description: "Leading zero-latency architectural design, next-generation developer tooling, and mission-critical cloud software systems.",
    highlights: ["Ultra Low Latency Systems", "High-Fidelity Interaction Design", "Next-Gen Web Standards"],
    coords: "APEX HORIZON • FUTURE VECTOR",
    tubeOffset: 1.0,
  }
];

export const PROJECTS_DATA = [
  {
    id: "aether-flow",
    number: "01",
    title: "AetherFlow Orchestration",
    subtitle: "Full-Stack Distributed Workflow Engine",
    description: "A high-performance distributed real-time task orchestrator and telemetry dashboard handling 50k+ events/sec with live streaming graph analytics.",
    tags: ["React", "TypeScript", "Node.js", "Redis", "WebSockets", "Docker"],
    imagePath: "/src/assets/images/project-01.png",
    imageComment: "Ideal screenshot: Dark UI dashboard showing node graphs, live charts, and glowing analytics telemetry.",
    demoUrl: "https://github.com",
    repoUrl: "https://github.com",
    metrics: "50k+ ops/sec • <12ms p99",
    codeSnippet: `// AetherFlow Event Pipeline
const pipeline = new StreamPipeline({
  bufferSize: 1024 * 64,
  backpressure: 'adaptive',
  clusterSync: true
});
await pipeline.dispatch('event.telemetry.v2', {
  latency: '3.4ms',
  nodes: 128
});`
  },
  {
    id: "pulse-sync",
    number: "02",
    title: "PulseSync Mobile Telemetry",
    subtitle: "Cross-Platform Real-Time Health Analytics",
    description: "Biometric and health telemetry syncing engine with zero-knowledge encryption, background queueing, and seamless offline-first synchronization.",
    tags: ["React Native", "TypeScript", "GraphQL", "SQLite", "Tailwind"],
    imagePath: "/src/assets/images/project-02.png",
    imageComment: "Ideal screenshot: Sleek mobile mockups with dark biometric rings and real-time ECG waveforms.",
    demoUrl: "https://github.com",
    repoUrl: "https://github.com",
    metrics: "Offline-first • AES-256 E2E",
    codeSnippet: `// Offline Sync Engine
const queue = new OfflineSyncQueue({
  storage: SQLiteAdapter,
  conflictResolution: 'crdt-lww',
  autoRetry: true
});`
  },
  {
    id: "hyperscale-gateway",
    number: "03",
    title: "HyperScale API Gateway",
    subtitle: "High-Throughput Microservice Routing",
    description: "Ultra-low latency microservices routing layer with dynamic rate limiting, token-bucket token authorization, and distributed tracing.",
    tags: ["Go", "Node.js", "gRPC", "Redis", "Prometheus", "Docker"],
    imagePath: "/src/assets/images/project-03.png",
    imageComment: "Ideal screenshot: Architecture topology diagram or terminal metrics view with live routing tables.",
    demoUrl: "https://github.com",
    repoUrl: "https://github.com",
    metrics: "Sub-5ms overhead • 99.999% SLA",
    codeSnippet: `// Microservice Gateway Router
router.use(TokenBucketLimiter({ rate: 10000 }));
router.route('/v1/ingest')
  .balance(RoundRobin)
  .trace(OpenTelemetry);`
  },
  {
    id: "nexus-ui",
    number: "04",
    title: "NexusUI Component Core",
    subtitle: "Headless Accessible Design & Animation Kit",
    description: "An open-source headless UI component system built with strict WAI-ARIA accessibility, physics-based springs, and zero bundle bloat.",
    tags: ["TypeScript", "React", "Framer Motion", "Tailwind", "NPM"],
    imagePath: "/src/assets/images/project-04.png",
    imageComment: "Ideal screenshot: Component gallery showcase with interactive sliders, switches, and glowing modals.",
    demoUrl: "https://github.com",
    repoUrl: "https://github.com",
    metrics: "12k+ Downloads • 100% ARIA",
    codeSnippet: `// Headless Modal Spring Primitive
export const Modal = createHeadlessComponent({
  physics: { stiffness: 400, damping: 30 },
  trapFocus: true,
  portalRoot: 'body'
});`
  },
  {
    id: "vanguard-ai",
    number: "05",
    title: "Vanguard Neural Copilot",
    subtitle: "Autonomous Context-Aware AI Agent",
    description: "Enterprise agentic assistant combining semantic embedding search, hybrid retrieval-augmented generation (RAG), and deterministic tool execution.",
    tags: ["Python", "FastAPI", "React", "LangChain", "pgvector", "Claude API"],
    imagePath: "/src/assets/images/project-05.png",
    imageComment: "Ideal screenshot: AI chat workspace with citation trees, code execution blocks, and semantic vector graphs.",
    demoUrl: "https://github.com",
    repoUrl: "https://github.com",
    metrics: "Multi-Agent • Semantic Cache",
    codeSnippet: `// Agent Reasoning Step
const agent = new AutonomousAgent({
  tools: [CodeSandbox, DatabaseSearch],
  memory: HybridVectorStore,
  temperature: 0.2
});`
  },
];

export const CODE_SNIPPETS = {
  heroSnippet: `// Tanveer.config.ts
export const developerProfile: Developer = {
  identity: "Tanveer",
  archetype: "System Architect & Creative Technologist",
  status: "ONLINE & COMPILING",
  stack: ["TypeScript", "React", "Node", "Python", "Three.js", "Docker"],
  philosophy: "Write code that survives scale. Craft interfaces that inspire.",
  isAvailableForHire: true
};

export async function executeVision() {
  const system = await Architect.initialize({
    performance: "SUB_MILLISECOND",
    aesthetics: "CINEMATIC_NOIR",
    impact: "MAXIMUM"
  });
  return system.launch();
}`,
  aboutSnippet: `class SystemArchitect {
  readonly name = "Tanveer";
  
  solve(complexProblem: Problem): Solution {
    const decomposed = this.breakdown(complexProblem);
    const optimized = this.applyFirstPrinciples(decomposed);
    return this.buildResilientArchitecture(optimized);
  }
}`
};
