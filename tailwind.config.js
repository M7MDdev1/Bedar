/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c58f35",
        secondary: "#686665",
        darkprimary: "#996F29"
      },
      fontFamily: {
        bahij: ["Bahij", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(50% 49.92% at 50% 50.08%, rgba(255, 255, 255, 0.15) 0%, rgba(197, 143, 53, 0.15) 67.16%)",
      },
      boxShadow: {
        "custom-shadow": "2px 2px 9px 0px rgba(197, 143, 53, 0.68)",
        "alt-custom-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        'contactUsShadow': '20px 20px 80px 0px rgba(0, 0, 0, 0.09)',

      },
    },
  },
  plugins: [],
};
