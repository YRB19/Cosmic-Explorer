/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Orbitron: sci-fi display font for headings
        orbitron: ['Orbitron', 'sans-serif'],
        // Nunito: friendly, readable body font
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
