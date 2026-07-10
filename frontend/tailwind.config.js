/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          cyan:   '#22d3ee',
          purple: '#818cf8',
          emerald:'#34d399',
        },
        dark: {
          950: '#03060f',
          900: '#080e1d',
          800: '#0d1526',
          700: '#1a2438',
          600: '#253044',
          500: '#334155',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 70%)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'glow':         'glow 3s ease-in-out infinite alternate',
        'slide-up':     'slideUp 0.6s ease-out',
        'fade-in':      'fadeIn 0.8s ease-out',
        'spin-slow':    'spin 20s linear infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        glow: {
          from: { boxShadow: '0 0 12px rgba(37,99,235,0.4)' },
          to:   { boxShadow: '0 0 24px rgba(59,130,246,0.5)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: { '300%': '300%', '200%': '200%' },
      boxShadow: {
        'blue-sm':  '0 4px 14px rgba(37,99,235,0.25)',
        'blue-md':  '0 8px 28px rgba(37,99,235,0.3)',
        'blue-lg':  '0 16px 48px rgba(37,99,235,0.35)',
        'card':     '0 1px 3px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
