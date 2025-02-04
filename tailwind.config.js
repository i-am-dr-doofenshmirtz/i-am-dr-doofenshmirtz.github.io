/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], 
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'smooth': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}
