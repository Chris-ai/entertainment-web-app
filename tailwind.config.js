/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    fontSize: {
      hl: '2rem',
      hm: '1.5rem',
      hs: '1.125rem',
      bm: '0.9375rem',
      bs: '0.8125rem'
    },
    fontWeight: {
      light: '300',
      medium: '500'
    }
  },
  plugins: [],
}
