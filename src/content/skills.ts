export interface SkillCategory {
  categoryName: string;
  skills: { name: string; icon?: string; colorToken?: string }[];
}

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Frontend & Mobile",
    skills: [
      { name: "Vite", colorToken: "#5B9BFF" },
      { name: "Svelte / SvelteKit", colorToken: "#4ECDC4" },
      { name: "React / React Native", colorToken: "#5B9BFF" },
      { name: "TailwindCSS", colorToken: "#FF6B57" },
    ]
  },
  {
    categoryName: "Backend & Distributed Systems",
    skills: [
      { name: "FastAPI", colorToken: "#FF6B57" },
      { name: "Node.js", colorToken: "#5B9BFF" },
      { name: "Spring Boot", colorToken: "#FFC93C" },
      { name: "PostgreSQL", colorToken: "#5B9BFF" },
      { name: "Redis", colorToken: "#FF6B57" },
    ]
  },
  {
    categoryName: "Spatial, 3D & Graphics",
    skills: [
      { name: "Blender 3D", colorToken: "#4ECDC4" },
      { name: "Unity 3D", colorToken: "#5B9BFF" },
      { name: "Three.js / WebGL", colorToken: "#FF6B57" },
      { name: "WebXR", colorToken: "#4ECDC4" },
    ]
  },
  {
    categoryName: "DevOps, Tools & Infrastructure",
    skills: [
      { name: "Docker", colorToken: "#4ECDC4" },
      { name: "Kubernetes", colorToken: "#5B9BFF" },
      { name: "Git & GitHub", colorToken: "#FF6B57" },
      { name: "Postman", colorToken: "#FFC93C" },
      { name: "Insomnia", colorToken: "#4ECDC4" },
    ]
  }
];

export const allSkillsList = [
  "Vite", "Svelte", "React Native", "Node.js", "FastAPI", "Spring Boot", 
  "Docker", "Kubernetes", "Git", "Postman", "Insomnia", "Blender", "Unity", 
  "Three.js", "WebXR", "PostgreSQL", "Redis", "TypeScript", "Python", "Java", "C++"
];
