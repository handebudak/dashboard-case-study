/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1565px',
        'xxl': '1820px',
      },
    },
  },
  plugins: [],
}

