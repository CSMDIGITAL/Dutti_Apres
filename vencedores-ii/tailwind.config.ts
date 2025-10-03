import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0B0D',
          text: '#F5F7FA',
          accent: '#00D1B2',
          support: '#FFD166'
        }
      }
    }
  },
  plugins: []
} satisfies Config
