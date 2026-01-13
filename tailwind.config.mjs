/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f6f8f7',
          100: '#e3ebe6',
          200: '#c7d7cd',
          300: '#a3bfab',
          400: '#7a9b8e',
          500: '#5e7f73',
          600: '#4a655b',
          700: '#3d524a',
          800: '#33433c',
          900: '#2c3832',
        },
        'dental-blue': {
          50: '#eff8ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1e88e5',
          600: '#1976d2',
          700: '#1565c0',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'warm-yellow': '#e8f5c8',
        'terracotta': '#b8956a',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}