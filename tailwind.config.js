/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--bg-surface)',
          elevated: 'var(--bg-surface-elevated)',
          low: 'var(--bg-surface-low)',
          container: 'var(--bg-surface-container)',
          dim: '#cfd9fb',
          bright: '#faf8ff',
          lowest: '#ffffff',
          variant: '#d9e2ff',
        },
        'on-surface': {
          DEFAULT: 'var(--text-primary)',
          variant: 'var(--text-secondary)',
        },
        primary: {
          DEFAULT: '#ae3123',
          container: '#ff6b57',
        },
        'on-primary': {
          DEFAULT: '#ffffff',
          container: '#6c0000',
        },
        secondary: {
          DEFAULT: '#006a65',
          container: '#79f3ea',
        },
        'on-secondary': {
          DEFAULT: '#ffffff',
          container: '#006f69',
        },
        tertiary: {
          DEFAULT: '#775a00',
          container: '#c29400',
          fixed: '#ffdf9a',
          'fixed-dim': '#f4bf32',
        },
        'on-tertiary': {
          DEFAULT: '#ffffff',
          container: '#423000',
          fixed: '#251a00',
        },
        sky: {
          DEFAULT: '#5b9bff',
          dark: '#2c64c7',
        },
        outline: {
          DEFAULT: 'var(--border-structural)',
          variant: 'var(--border-subtle)',
        },
      },
      fontFamily: {
        hero: ['Epilogue', 'sans-serif'],
        headline: ['Epilogue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        'gutter': '1.5rem',
        'gutter-mobile': '1rem',
        'margin-desktop': '3rem',
        'margin-mobile': '1.25rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
      },
      borderRadius: {
        'card': '24px',
        'pill': '9999px',
        'squircle': '16px',
      },
      boxShadow: {
        'tactile': 'var(--shadow-tactile)',
        'coral-btn': '0px 4px 0px #D95341',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
        shine: 'shine 0.7s ease-in-out',
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}

