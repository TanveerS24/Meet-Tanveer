/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#050507',
          900: '#0a0a0c',
          850: '#0f0f13',
          800: '#14141a',
          700: '#1f1f28',
          600: '#2d2d3a',
          muted: '#8b8b9e',
          text: '#f5f5f0',
        },
        flame: {
          500: '#ff4500',
          400: '#ff6200',
          300: '#ff8c00',
          200: '#ffa633',
          100: '#ffb347',
          glow: '#ffb703',
        },
        neon: {
          cyan: '#00f0ff',
          amber: '#ffb703',
          crimson: '#ff003c',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'flame-gradient': 'linear-gradient(135deg, #ff4500 0%, #ff8c00 50%, #ffb347 100%)',
        'noir-gradient': 'radial-gradient(circle at 50% 30%, rgba(255, 69, 0, 0.08) 0%, rgba(10, 10, 12, 0.95) 70%, #050507 100%)',
        'card-glow': 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 69, 0, 0.15), transparent 40%)',
      },
      boxShadow: {
        'flame-sm': '0 0 15px -3px rgba(255, 69, 0, 0.3)',
        'flame-md': '0 0 30px -5px rgba(255, 69, 0, 0.4)',
        'flame-lg': '0 0 50px -10px rgba(255, 69, 0, 0.5)',
        'flame-rim': 'inset 0 0 20px 2px rgba(255, 110, 0, 0.3), 0 0 30px rgba(255, 69, 0, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(255,69,0,0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(255,140,0,0.8))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
