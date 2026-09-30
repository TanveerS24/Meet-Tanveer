export interface ProfileData {
  name: string;
  headline: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availability: string;
  bio: string[];
  photoPlaceholder: string;
}

export const profileData: ProfileData = {
  name: "S Tanveer Muhammed",
  headline: "Full Stack & Spatial AR/3D Software Engineer",
  tagline: "Smart India Hackathon 2025 winner, Roche AR intern, and 9.32 CGPA CSE builder crafting tactile, high-performance web & spatial software.",
  email: "stanveer1809@gmail.com",
  github: "https://github.com/TanveerS24",
  linkedin: "https://www.linkedin.com/in/s-tanveer-muhammed-611b89336",
  location: "Chennai, India (Open to Relocation & Remote)",
  availability: "Open to 2026 SWE Internships & Full-time Roles",
  bio: [
    "Obsessed with tangible pixels, low latencies, and playful tools.",
    "My path began in high school by breaking and soldering microcontrollers. Today, that curious instinct drives me to bridge full stack web reliability with real-time 3D spatial environments.",
    "Whether designing an interactive spatial UI at Roche, architecting a winning hackathon deployment for thousands of tourists, or crunching graph algorithms on LeetCode, I prioritize high craft and zero fluff."
  ],
  photoPlaceholder: "/placeholders/photo.webp"
};
