/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eefbf3',
          100: '#d5f5e3',
          200: '#aeeacb',
          300: '#78d9ab',
          400: '#41c185',
          500: '#1da967',
          600: '#128852',
          700: '#0f6d43',
          800: '#0e5737',
          900: '#0c472e',
        },
        accent: {
          cyan:   '#00f5d4',
          purple: '#7c3aed',
          pink:   '#ec4899',
        },
        dark: {
          950: '#020408',
          900: '#060d12',
          800: '#0c1a24',
          700: '#112233',
          600: '#1a3347',
          500: '#243d52',
        }
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'glow':         'glow 2s ease-in-out infinite alternate',
        'slide-up':     'slideUp 0.6s ease-out',
        'fade-in':      'fadeIn 0.8s ease-out',
        'spin-slow':    'spin 20s linear infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'gradient':     'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #1da967, 0 0 20px #1da96733' },
          to:   { boxShadow: '0 0 20px #00f5d4, 0 0 40px #00f5d433' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: { '300%': '300%' },
    },
  },
  plugins: [],
}
