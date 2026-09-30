export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  visible: boolean;
  featured: boolean;
  accentColor: string; // Tailwind hex / class token
  badgeText?: string;
  badgeType?: 'sih' | 'edtech' | 'genai' | 'experiment';
  techStack: string[];
  role: string;
  impactResult: string;
  architectureDetails: string;
  demoUrl?: string;
  githubUrl: string;
  imagePlaceholder: string;
  stats?: { label: string; value: string }[];
}

export const projectsData: Project[] = [
  {
    slug: "sikkim-tourism-platform",
    title: "Sikkim Tourism Platform",
    shortDescription: "AI-powered smart travel planner & emergency routing platform built for the Government of Sikkim.",
    fullDescription: "Designed and engineered an automated multi-modal tourism management system for Sikkim. Built with real-time mountain topography mapping, dynamic itinerary engines, distributed caching for peak traffic, and instant local emergency dispatcher alerts.",
    visible: true,
    featured: true,
    accentColor: "#FF6B57",
    badgeText: "SIH 2025 Winner",
    badgeType: "sih",
    techStack: ["Vite", "FastAPI", "Redis", "Leaflet", "Docker", "TailwindCSS"],
    role: "Lead Full Stack Architect & Team Captain",
    impactResult: "1st Prize Champion out of 1,200+ competing national engineering teams at SIH 2025.",
    architectureDetails: "Async Python FastAPI services connected to Redis pub/sub for real-time map marker state and weather advisory broadcasts across high-altitude terrain.",
    demoUrl: "https://github.com/TanveerS24",
    githubUrl: "https://github.com/TanveerS24",
    imagePlaceholder: "/placeholders/sikkim_mockup.webp",
    stats: [
      { label: "Competing Teams", value: "1,200+" },
      { label: "National Rank", value: "1st Place" },
      { label: "Endpoint Latency", value: "< 45ms" }
    ]
  },
  {
    slug: "codesense",
    title: "CodeSense",
    shortDescription: "A visual learning playground explaining complex ASTs, compilers, and algorithmic memory flows.",
    fullDescription: "CodeSense turns abstract programming language theory into interactive visual representations. Learners write code in an embedded Monaco IDE and watch Abstract Syntax Trees (ASTs), heap allocations, and recursion stacks morph frame-by-frame in real-time WebGL.",
    visible: true,
    featured: true,
    accentColor: "#4ECDC4",
    badgeText: "Interactive EdTech",
    badgeType: "edtech",
    techStack: ["SvelteKit", "WebGL", "Node.js", "Monaco Editor", "TailwindCSS"],
    role: "Solo Creator & Interactive Systems Architect",
    impactResult: "Adopted by 450+ SIMATS CSE batchmates for Compiler & Data Structures coursework.",
    architectureDetails: "Bespoke WebGL node graph rendering engine syncing at 60 FPS directly with AST parser state emitters.",
    demoUrl: "https://github.com/TanveerS24",
    githubUrl: "https://github.com/TanveerS24",
    imagePlaceholder: "/placeholders/codesense_mockup.webp",
    stats: [
      { label: "Target FPS", value: "60 FPS" },
      { label: "Active Student Users", value: "450+" },
      { label: "AST Parse Speed", value: "< 12ms" }
    ]
  },
  {
    slug: "policy-lens",
    title: "Policy-Lens",
    shortDescription: "GenAI contract engine parsing 80-page policy agreements and pinpointing hidden gotchas.",
    fullDescription: "Policy-Lens uses Retrieval-Augmented Generation (RAG) to instantly scan dense terms-of-service documents, legal riders, and financial policies. Highlights predatory clauses, hidden fees, and arbitration traps with clear plain-language summaries.",
    visible: true,
    featured: true,
    accentColor: "#5B9BFF",
    badgeText: "GenAI & NLP",
    badgeType: "genai",
    techStack: ["React", "LangChain", "PyTorch", "FAISS", "FastAPI", "TailwindCSS"],
    role: "RAG Pipeline & Interface Lead",
    impactResult: "94% precision rating in benchmark tests for isolating non-standard liability waivers.",
    architectureDetails: "Sub-3-second vector retrieval pipeline utilizing FAISS vector indexing and chunked LLM embeddings.",
    demoUrl: "https://github.com/TanveerS24",
    githubUrl: "https://github.com/TanveerS24",
    imagePlaceholder: "/placeholders/policylens_mockup.webp",
    stats: [
      { label: "Precision Rate", value: "94%" },
      { label: "Chunk Retrieval", value: "< 2.8s" },
      { label: "Document Max", value: "150 Pages" }
    ]
  },
  {
    slug: "sky-port",
    title: "Sky-Port",
    shortDescription: "Autonomous drone fleet monitoring dashboard with real-time WebSockets telemetry.",
    fullDescription: "Real-time command center for tracking aerial drone positions, battery health, and path coordinates via low-overhead WebSockets.",
    visible: true,
    featured: false,
    accentColor: "#FFC93C",
    badgeText: "Fleet Telemetry",
    badgeType: "experiment",
    techStack: ["React", "Node.js", "WebSockets", "Three.js"],
    role: "Creator",
    impactResult: "Handled 50 simultaneous mock drone telemetry feeds at 20 updates/sec.",
    architectureDetails: "Binary WebSocket frames piped directly into three.js instanced rendering mesh buffers.",
    githubUrl: "https://github.com/TanveerS24",
    imagePlaceholder: "/placeholders/sikkim_mockup.webp"
  },
  {
    slug: "trust-ledger",
    title: "TrustLedger",
    shortDescription: "Smart contract audit visualizer breaking down Ethereum bytecode into execution flowcharts.",
    fullDescription: "Interactive web tool mapping EVM opcode sequences into visual call graphs for smart contract security analysis.",
    visible: true,
    featured: false,
    accentColor: "#4ECDC4",
    badgeText: "Web3 Security",
    badgeType: "experiment",
    techStack: ["Svelte", "Ethers.js", "TailwindCSS"],
    role: "Creator",
    impactResult: "Decoded 100+ public smart contract contracts into human-readable state diagrams.",
    architectureDetails: "Disassembles EVM bytecode on-the-fly and generates D3 directed graph layouts.",
    githubUrl: "https://github.com/TanveerS24",
    imagePlaceholder: "/placeholders/codesense_mockup.webp"
  },
  {
    slug: "skill-nest",
    title: "Skill-Nest",
    shortDescription: "Peer-to-peer developer mentorship network matching engineers based on code graph overlaps.",
    fullDescription: "Platform calculating developer skill graphs from public GitHub commits to pair peer mentors automatically.",
    visible: true,
    featured: false,
    accentColor: "#5B9BFF",
    badgeText: "Graph Matching",
    badgeType: "experiment",
    techStack: ["React", "Spring Boot", "PostgreSQL"],
    role: "Backend Architect",
    impactResult: "Connected 120 student mentorship pairings during SIMATS campus trial.",
    architectureDetails: "Spring Boot GraphQL endpoints querying Neo4j graph nodes for developer similarity.",
    githubUrl: "https://github.com/TanveerS24",
    imagePlaceholder: "/placeholders/policylens_mockup.webp"
  }
];
