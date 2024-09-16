/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors : {
      "green" : "#0DB75F",
      "white" : "#FFFFFF",
      "white2" : "#817A7A",
      "gray" : "#1E1E1E"
    }
  },
  plugins: [],
}

