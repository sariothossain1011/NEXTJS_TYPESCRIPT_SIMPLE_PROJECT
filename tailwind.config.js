/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          500:"#2d6ff7",
          100: "#dbeafe",
        },
        dark:{
          dark: {
            100: "#000000",
            200: "#0F1117",
            300: "#151821",
            400: "#212734",
            500: "#101012",
          },
          light: {
            900: "#FFFFFF",
            800: "#F4F6F8",
            850: "#FDFDFD",
            700: "#DCE3F1",
            500: "#7B8EC8",
            400: "#858EAD",
          },
        }
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
    },
  },
  plugins: [],
}