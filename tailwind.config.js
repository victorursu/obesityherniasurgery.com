/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d77b5',
          dark: '#0f6292',
          light: '#d7e1e8',
        },
        teal: {
          DEFAULT: '#00d5b1',
        },
        gray: {
          light: '#e1e1e1',
          lighter: '#f2f2f2',
        },
      },
    },
  },
  plugins: [],
}

