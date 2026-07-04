/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slowBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        slowBounce: 'slowBounce 4s ease-in-out infinite',
      },
      fontFamily: {
        moonDance: ['moonDance', 'cursive'],
      },
    },
  },
  plugins: [],
}

