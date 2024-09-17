/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      anek_latin: ["Anek Latin", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
        screens: {
					sm: "750px",
					md: "970px",
					lg: "1130px",
          xl: "1290px",
				},
      },
      colors: {
        white_txt: "#FFFFFF",
        black_dark_txt: "#000000",
        black_txt: "#242222",
        orange_txt: "#FE3A20",
        green_txt: "#064635",
        light_orange_txt: "#FFEBE9",
        light_green_txt: "#DDF0EE",
        light_sky_txt: "#E9F6FF",
	      gray_txt: "#F2F3F1",
        rgbaWhite_txt: "rgba(255, 255, 255, 0.15)",
        rgbaWhite_txt_01: "rgba(255, 255, 255, 0.1)",
        rgba_txt_01: "rgba(37, 35, 36, 0.1)",
        gray_txt_01: "#878787",
        gray_txt_02: "#646464",

        white_bg: "#FFFFFF",
        black_dark_bg: "#000000",
        black_bg: "#242222",
        orange_bg: "#FE3A20",
        green_bg: "#064635",
        light_orange_bg: "#FFEBE9",
        light_green_bg: "#DDF0EE",
        light_sky_bg: "#E9F6FF",
	      gray_bg: "#F2F3F1",
        rgbaWhite_bg: "rgba(255, 255, 255, 0.15)",
        rgbaWhite_bg_01: "rgba(255, 255, 255, 0.1)",
        rgba_bg_01: "rgba(37, 35, 36, 0.1)",
        gray_bg_01: "#878787",
        gray_bg_02: "#646464",
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(74deg,rgba(37,35,36,.6) 10.35%,rgba(37,35,36,0) 68.52%)",
      },
      fontSize: {
        h1: ["80px", "107.5%"],
        h2: ["52px", "111.538%"],
        h3: ["42px", "114.286%"],
        h4: ["38px", "115.789%"],
        h5: ["26px", "123.077%"],
        h6: ["22px", "127.273%"],
        p: ["18px", "138.889%"],
        14: ["14px", "normal"],
      },
    },
  },
  plugins: [],
};
