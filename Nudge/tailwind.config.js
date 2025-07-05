/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/GoalForm.jsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "32ch" }, // match the number of characters in your sentence
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 2.5s steps(44, end) forwards",
        blink: "blink 0.7s step-end infinite",
      },
    },
  },
  plugins: [],
};
