import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px', // mobile screen
        md: '768px', // tablet screen
        lg: '1024px', // laptop screen
        xl: '1280px', // desktop screen
      },
    },
  },
  plugins: [],
};
export default config;
