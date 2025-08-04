/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        langar: ['Langar', 'cursive'],
        bree: ['"Bree Serif"', 'serif'],
      },
      animation: {
        scrollIcons: 'scrollIcons 12s linear infinite',
      },
      keyframes: {
        scrollIcons: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
