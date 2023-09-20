import { Roboto_Condensed } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue': '#2B2D42',
      },
      backgroundColor: {
        'dark-blue': '#2B2D42',
        'light-blue': '#7eafdd',
        'slight-dark-blue': '#6a9bcb',
        'tailwind-dark-blue-color': '#0F172A',
        'dark-purple': '#6366F1',
      },
      width: {
        '30%': '30%',
      },
      fontFamily: {
        lora: "'Lora',serif",
        dm: "'DM Mono',monospace",
        roboto_condensed: "'Roboto Condensed', sans-serif;",
      },
      fontSize: {
        '4xl': '2.341rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      minHeight: {
        '600': '20px',
      },
    },
  },
  plugins: [],
}
export default config
