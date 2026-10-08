/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090A0F',
        surface: {
          50: '#12151F',
          100: '#171B28',
          200: '#1E2335',
          300: '#2A3047',
          400: '#3D4563',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(99, 102, 241, 0.25)',
          emerald: 'rgba(52, 211, 153, 0.25)',
        },
        accent: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}


