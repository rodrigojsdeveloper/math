import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'button-color': 'var(--button-color)',
        'background-color': 'var(--background-color)',
        'section-color': 'var(--section-color)',
        'input-color': 'var(--input-color)',
        'pink-color': 'var(--pink-color)',
      },
      backgroundImage: {
        accents: 'linear-gradient(to right,#fbfbfb,#d121ee,#9740ef)',
      },
    },
  },
  plugins: [],
}

export default config
