import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'field-paper': '#faf7f2',
        'field-paper-warm': '#f3efe7',
        'moss': '#5b8c5a',
        'moss-dark': '#4a7349',
        'moss-light': '#e8f0e7',
        'terracotta': '#c17f59',
        'terracotta-dark': '#a66a48',
        'terracotta-light': '#f5ede7',
        'bark': '#3d3226',
        'bark-light': '#6b5e4f',
        'stone': '#8c8478',
        'clay': '#d4c5b2',
        'ember': '#e07b4c',
        'sky-muted': '#b8c9c1',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture':
          "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'hand-drawn-line':
          "url(\"data:image/svg+xml,%3Csvg width='100%25' height='3' viewBox='0 0 1200 3' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Cpath d='M0,1.5 Q100,2.8 200,1.2 T400,1.8 T600,1.3 T800,1.7 T1000,1.1 T1200,1.5' stroke='%235b8c5a' stroke-width='1.2' fill='none' opacity='0.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'leaf-sway': 'leaf-sway 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
      borderRadius: {
        'pill': '999px',
        'journal': '2px',
      },
      boxShadow: {
        'field': '0 1px 3px rgba(61,50,38,0.06), 0 4px 12px rgba(61,50,38,0.04)',
        'field-hover': '0 2px 6px rgba(61,50,38,0.1), 0 8px 20px rgba(61,50,38,0.06)',
        'inner-field': 'inset 0 1px 3px rgba(61,50,38,0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
