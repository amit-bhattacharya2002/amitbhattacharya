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

      keyframes: {
        scrollT: {
          // '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-100%, 0)' },
        },
      },
      animation: {
        scrollT: 'scrollT 100s linear infinite', // Adjust the duration and other properties as needed
      },
    },
  },
  plugins: [],
}
export default config
