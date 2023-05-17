import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': ' -8px 8px 13px -7px #ff5722',
      },
      dropShadow: {
        'icon': '0px 2px 5px #00a8eb',
      },
    },
    colors: {
      'dark': '#1e1f29',
      'silver': '#e6e6e6',
      'red': '#d10024',
      'white': 'white',
      'sky': '#00a8eb',
    }
  },
  plugins: []

}