import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A1A',
        graphite: '#2A2A2A',
        sand: '#F7F5EF',
        amber: '#FFCF3A',
        amberDeep: '#D8A800'
      },
      maxWidth: {
        content: '74rem'
      }
    }
  },
  plugins: []
};

export default config;
