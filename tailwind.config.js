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
      backgroundImage: {
        "landing-page": "url('/public/images/bg.svg')",
        loginPic: "url('/public/images/loginPic1.svg')",
      },
      backgroundColor: {
        "hearverse-bg": "#111827",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk"],
        poppins: ["Poppins"],
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
