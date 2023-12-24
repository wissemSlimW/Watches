import type { Config } from 'tailwindcss'
import withMT from "@material-tailwind/react/utils/withMT"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        '2': '2'
      },
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'silver': '#5f5f5f'
      },
      spacing: { '15': '60px' },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default withMT(config)
