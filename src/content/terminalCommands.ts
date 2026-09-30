export interface CommandResult {
  output: string;
  isHtml?: boolean;
  action?: 'clear' | 'theme' | 'hire-me';
}

export const COMMAND_LIST = [
  'help', 'about', 'projects', 'skills', 'stats', 
  'experience', 'resume', 'contact', 'hire', 'chai', 
  'theme', 'clear'
];

export function executeTerminalCommand(rawCmd: string, currentTheme: 'light' | 'dark'): CommandResult {
  const trimmed = rawCmd.trim().toLowerCase();

  switch (trimmed) {
    case 'help':
      return {
        output: `Available commands:
  projects   - View featured full stack & 3D projects
  skills     - List languages, frameworks, engines & cloud tools
  stats      - LeetCode breakdown, SIH 2025 winner & academic CGPA
  experience - Roche AR internship & Jupyter Transcriptions work
  about      - Bio summary & engineering ethos
  contact    - Email inbox & social profile links
  resume     - Direct link to download Tanveer's PDF resume
  hire       - Recruiter & hiring manager quick overview
  chai       - Pour a virtual cup of tea ☕
  theme      - Toggle between light and dark visual themes
  clear      - Clear terminal screen output buffer

Secret Easter Egg: Try typing 'sudo hire-me'`
      };

    case 'about':
      return {
        output: `S Tanveer Muhammed | Full Stack & Spatial AR/3D Engineer
- Student at Saveetha School of Engineering, SIMATS (2023-2027)
- SIH 2025 1st Place National Champion
- Roche AR Prototyping Intern (Jun-Aug 2026)
- Passionate about high craft UI, low latency distributed systems, and real-time graphics.`
      };

    case 'projects':
      return {
        output: `Featured Shipped Systems:
1. Sikkim Tourism Platform [SIH 2025 Winner]
   Tech: Vite, FastAPI, Redis, Leaflet, Docker
   Impact: 1st Prize out of 1,200+ competing engineering teams.

2. CodeSense
   Tech: SvelteKit, WebGL, Monaco Editor, Node.js
   Impact: Interactive AST visual compiler tutor used by 450+ students.

3. Policy-Lens
   Tech: React, LangChain, PyTorch, FAISS
   Impact: GenAI 80-page contractual gotcha analyzer (94% precision).

More experiments: Sky-Port, TrustLedger, Skill-Nest.`
      };

    case 'skills':
      return {
        output: `Technical Arsenal:
- Languages: TypeScript, Python, Java, C++, SQL, GLSL
- Frontend & Mobile: Vite, Svelte, React Native, TailwindCSS
- Backend: FastAPI, Node.js, Spring Boot, PostgreSQL, Redis
- Spatial & 3D: Blender, Unity 3D, Three.js, WebXR
- DevOps: Docker, Kubernetes, Git, Postman, Insomnia`
      };

    case 'stats':
      return {
        output: `Verified Metrics:
- LeetCode Solved: 272 (148 Easy, 115 Medium, 9 Hard)
- LeetCode Streak: 13 days (50 Days Badge 2025)
- Academic CGPA: 9.32 / 10.0 (SIMATS CSE Department)
- Stock Operations Boost: +178% throughput at Jupyter Transcriptions
- GitHub Repositories: 30 public repos`
      };

    case 'experience':
      return {
        output: `Work & Education History:
1. Roche — Immersive Tech Intern (Jun–Aug 2026)
   Built WebXR & Unity clinical workflow AR prototypes.

2. Jupyter Transcriptions — Python Developer Intern (Aug–Dec 2025)
   Architected stock automation system (+178% operations boost).

3. Saveetha School of Engineering, SIMATS (2023–2027)
   B.E. Computer Science & Engineering (CGPA 9.32).`
      };

    case 'contact':
      return {
        output: `Contact Channels:
- Inbox: stanveer1809@gmail.com
- GitHub: https://github.com/TanveerS24
- LinkedIn: https://www.linkedin.com/in/s-tanveer-muhammed-611b89336
- Location: Open to remote & worldwide relocation`
      };

    case 'resume':
      return {
        output: `Resume link: Opening resume... (Download stanveer_muhammed_resume_2026.pdf from profile)`
      };

    case 'hire':
      return {
        output: `Why hire Tanveer?
✓ Proven hackathon winner (SIH 2025 1st Place out of 1,200+ teams)
✓ Big tech / pharma intern experience (Roche AR team)
✓ High algorithmic consistency (272 LeetCode problems, 9.32 CGPA)
✓ Broad stack mastery across Web, Mobile, 3D/AR, and DevOps`
      };

    case 'chai':
      return {
        output: ` Here's a fresh hot cup of Masala Chai! ☕ 
"Code is temporary, but good tea is eternal."`
      };

    case 'theme':
      return {
        output: `Toggled theme to ${currentTheme === 'dark' ? 'Light' : 'Dark'} mode!`,
        action: 'theme'
      };

    case 'clear':
      return {
        output: '',
        action: 'clear'
      };

    case 'sudo hire-me':
    case 'hire-me':
    case 'sudo hire':
      return {
        output: `🎉 ACCESS GRANTED! 🎉
Thank you for executing 'sudo hire-me'! You've unlocked the secret easter egg.
Let's build something extraordinary together! Drop a message at stanveer1809@gmail.com or use the contact form below.`,
        action: 'hire-me'
      };

    default:
      return {
        output: `bash: command not found: '${trimmed}'. Type 'help' or click the command chips below to see available commands.`
      };
  }
}
