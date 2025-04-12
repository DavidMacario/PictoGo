/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Neue"', 'cursive'],
        fredoka: ['"Fredoka"', 'cursive'],
      },
      colors: {
        pastelBlue: "#A7D8FF",
        pastelGreen: "#B8F2E6",
        pastelPink: "#FFCCD5",
        pastelYellow: "#FFFACD"
      },
    },
  },
  plugins: [],
}
