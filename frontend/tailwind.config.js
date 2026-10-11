/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [],
};
