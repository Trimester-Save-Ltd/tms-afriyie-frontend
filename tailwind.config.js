module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01579B",
        secondary: "#FF6666",
        tertiary: "#BCD8C1",
        faded: "#E5F3FF",
        indigo: "#4B0082",
        black: "#041C32",
        white: "#E5E5E5",
        light_grey_text: "#A4ADC6",
        backgroud: "#FAFAFB",
        dashboard_backgroud: "#F2F6FA",
        grey_text: "#818D98",
        border: "#D5D8DD",
        transparent: "rgba(7, 13, 43, 0.75)", 
        
      },
      fontSize: {
        tiny: ["10px", { lineHeight: "14px" }],
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "22px" }],
        lg: ["18px", { lineHeight: "26px" }],
        xl: ["22px", { lineHeight: "28px" }],
        "2xl": ["26px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "38px" }],
        "4xl": ["32px", { lineHeight: "38px" }],
        "5xl": ["38px", { lineHeight: "46px" }],
        "6xl": ["54px", { lineHeight: "60px" }],
        "7xl": ["62px", { lineHeight: "70px" }],
      },
      fontFamily: {
        sans: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
