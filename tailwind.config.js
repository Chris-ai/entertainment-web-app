/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'base': '0.625rem'
      },
      colors:{
        'primary-red': "#FC4747",
        'dark-blue': "#10141E",
        'greyish-blue': "#5A698F",
        'semi-dark-blue': "#161D2F",
        "white": "#FFF"
      },
    },
    fontSize: {
      hl: '2rem', // 32px
      hm: '1.5rem', // 24px
      hs: '1.125rem', // 18px
      bm: '0.9375rem', // 15px
      bs: '0.8125rem' // 13px
    },
    fontWeight: {
      light: '300',
      medium: '500'
    }
  },
  plugins: [],
}
