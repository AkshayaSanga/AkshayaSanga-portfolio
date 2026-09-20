/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury classic palette
        primary: {
          50: '#f4efe8',
          100: '#e9e0d2',
          200: '#d9c3a1',
          300: '#c7a66d',
          400: '#b28b45',
          500: '#8f6a32',
          600: '#6d4d2e',
          700: '#4a3828',
          800: '#2a221d',
          900: '#171310',
          950: '#100d0b',
        },
      },
      fontFamily: {
        sans:    ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
        body:    ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.5s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'float':      'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
