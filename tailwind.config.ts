import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        navy: '#1A3A4A',
        background: '#FFFFFF',
        lightGray: '#F5F5F5',
        textDark: '#1A1A1A',
        textLight: '#666666'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(26, 58, 74, 0.08)'
      }
    }
  },
  plugins: []
} satisfies Config;
