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
        forest: {
          DEFAULT: '#173C32',
          hover: '#123028',
          light: '#235246',
        },
        plum: {
          DEFAULT: '#8B7188',
          hover: '#7A6277',
          light: '#A78FA4',
        },
        ivory: {
          DEFAULT: '#F5F0E6',
          dark: '#EAE3D5',
        },
        'warm-ivory': '#F5F0E6',
        surface: {
          DEFAULT: '#FFFCF6',
          muted: '#F9F5EC',
        },
        charcoal: {
          DEFAULT: '#252824',
          muted: '#686A63',
          light: '#8F918B',
        },
        border: {
          DEFAULT: '#D9D2C6',
          dark: '#C8C0B2',
        },
        status: {
          success: '#2D7A52',
          warning: '#9A6B24',
          error: '#A33D3D',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '18px',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(37, 40, 36, 0.06)',
        card: '0 8px 24px rgba(37, 40, 36, 0.08)',
        elevated: '0 16px 40px rgba(37, 40, 36, 0.12)',
      },
      keyframes: {
        'hero-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'hero-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'hero-fade': 'hero-fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'hero-slide': 'hero-slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float-gentle': 'float-subtle 3s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 2.5s ease-in-out infinite',
      },
      transitionTimingFunction: {
        natural: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
