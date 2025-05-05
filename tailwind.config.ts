import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
     
      fontFamily: {
        sans: ['var(--font-karla', 'sans-serif'],
        heading: ['var(--font-nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
