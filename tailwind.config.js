/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light-bg-image': "url('/public/assets/bgs/y-so-serious-white.png')",
        'dark-bg-image': "url('/public/assets/bgs/y-so-serious.png')",
      },
    },
  },
  plugins: [],
};
