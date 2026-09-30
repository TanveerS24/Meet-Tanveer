export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'work' | 'education';
  description: string;
  highlightMetric?: string;
  highlightText?: string;
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "roche-2026",
    company: "Roche",
    role: "Immersive Tech Intern (Remote)",
    period: "Jun – Aug 2026",
    location: "Remote / Basel, Switzerland",
    type: "work",
    description: "Spearheaded spatial user interface prototyping for clinical workflows. Developed WebXR and Unity interactive stages allowing medical staff to interact with diagnostics data through hands-free volumetric gestures.",
    highlightMetric: "AR Prototype",
    highlightText: "Spatial UI for clinical diagnostics data visualizers",
    technologies: ["Unity 3D", "WebXR", "Spatial UX", "C#", "Blender"]
  },
  {
    id: "jupyter-2025",
    company: "Jupyter Transcriptions",
    role: "Python Developer Intern",
    period: "Aug – Dec 2025",
    location: "Remote",
    type: "work",
    description: "Architected automated inventory management & stock reconciliation pipelines. Optimized legacy script execution flows and automated data validation checks for trade records.",
    highlightMetric: "+178%",
    highlightText: "Boost in stock operations throughput and inventory processing speed",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Pandas"]
  },
  {
    id: "simats-degree",
    company: "Saveetha School of Engineering, SIMATS",
    role: "B.E. in Computer Science & Engineering",
    period: "2023 – 2027",
    location: "Chennai, Tamil Nadu",
    type: "education",
    description: "Rigorous academic curriculum with deep focus on Distributed Systems, Advanced Data Structures, Spatial Modeling, and Deep Learning applications.",
    highlightMetric: "9.32 CGPA",
    highlightText: "Cumulative Grade Point Average across 6 completed semesters",
    technologies: ["C++", "Java", "Python", "Data Structures", "Distributed Systems"]
  }
];
