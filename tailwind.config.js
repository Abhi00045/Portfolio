/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "profile-anime": {
          "0%":{borderRadius:"65% 40% 30% 70%/60% 30% 70% 40%"},
          "50%":{borderRadius:"30% 60% 70% 40%/50% 60% 30% 60%"},
          "100%":{borderRadius:"65% 40% 30% 70%/60% 30% 70% 40%"},
        }
      },
      animation:{
        "profile-anime":"profile-anime 4s ease-in-out infinite 1s"
      }
      // backgroundImage{
      //   "background":"url(./assets/react.svg)"
      // }
    },
  },
  plugins: [],
}

