export interface FunFact {
  emoji: string;
  title: string;
  description: string;
  rotationClass: string;
}

export const funFactsData: FunFact[] = [
  {
    emoji: "☕",
    title: "Fuel of Choice",
    description: "Pour-over V60 coffee & late-night synthwave ambient loops.",
    rotationClass: "-rotate-2"
  },
  {
    emoji: "🎮",
    title: "Creative Play",
    description: "Builds custom physics & shader experiments in Unity for fun.",
    rotationClass: "rotate-3"
  },
  {
    emoji: "⚡",
    title: "Speed Typing",
    description: "Competitive typist clocking 115 WPM on Monkeytype.",
    rotationClass: "rotate-1"
  },
  {
    emoji: "🌐",
    title: "Open Source",
    description: "Active contributor to educational developer tools & WebXR experiments.",
    rotationClass: "-rotate-3"
  }
];
