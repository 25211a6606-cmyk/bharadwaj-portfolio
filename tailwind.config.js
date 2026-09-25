/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: '#0B1220',
        electric: '#2563EB',
        cyan: '#06B6D4',
        'light-blue': '#EFF6FF',
        'soft-gray': '#64748B',
      },
    },
  },
  plugins: [],
}
