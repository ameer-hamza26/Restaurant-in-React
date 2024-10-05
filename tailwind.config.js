/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEA116',
        secondary: '#e5e7eb',
        bgColor:'#0F172BE5',

      },
      
      
    },
  },
  plugins: [],
}