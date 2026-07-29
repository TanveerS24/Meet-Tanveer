import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        skeuo: {
          base: '#0F1117',
          surface: '#181B24',
          elevated: '#212532',
          inset: '#0B0D12',
          border: 'rgba(255, 255, 255, 0.08)',
          metal: '#2A2F3E',
          accent: '#3B82F6',
          gold: '#EAB308',
          text: '#F3F4F6',
          muted: '#9CA3AF',
        },
      },
      boxShadow: {
        'skeuo-outer': '6px 6px 16px rgba(0, 0, 0, 0.6), -4px -4px 12px rgba(255, 255, 255, 0.04)',
        'skeuo-button': '0 4px 10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
        'skeuo-button-pressed': 'inset 2px 2px 6px rgba(0, 0, 0, 0.8), inset -1px -1px 3px rgba(255, 255, 255, 0.05)',
        'skeuo-inset': 'inset 3px 3px 8px rgba(0, 0, 0, 0.7), inset -2px -2px 6px rgba(255, 255, 255, 0.03)',
        'skeuo-glow': '0 0 20px rgba(59, 130, 246, 0.35)',
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, #2E3446 0%, #1E222D 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
