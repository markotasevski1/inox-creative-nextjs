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
      },
      width: {
        '30%': '30%',
      },
      fontFamily: {
        lora: "'Lora',serif",
        dm: "'DM Mono',monospace",
        roboto_condensed: "'Roboto Condensed', sans-serif;",
      },
    },
  },
  plugins: [],
}
export default config
