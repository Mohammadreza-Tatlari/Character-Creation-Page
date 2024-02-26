/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#391c08",
          "200": "#341d0b",
          "300": "#202020",
          "400": "#1c1c1c",
          "500": "#151515",
          "600": "rgba(32, 32, 32, 0.8)",
          "700": "#808080",
          "800": "#37291e",
          "900": "#35261c",
          "1000": "#2e221b",
          "1300": "#291f19",
          "1500": "#1c1f21",
          "1700": "#1f1814",
        },
        white: "#fff",
        lawngreen: {
          "100": "#5beb02",
          "200": "rgba(91, 235, 2, 0.3)",
        },
        saddlebrown: {
          "100": "#6d3e12",
          "200": "#6e3b0e",
          "300": "#6b3809",
          "400": "#5c3b24",
          "600": "#682b1f",
        },
        burlywood: {
          "100": "#fec595",
          "200": "#d6b97b",
        },
        sienna: {
          "100": "#b64b28",
          "200": "#845039",
          "300": "#795133",
        },
        tan: {
          "100": "#e3b896",
          "200": "#a79369",
          "300": "#9f7f59",
          "400": "#99815d",
          "500": "#9d7a50",
        },
        peru: "#b07b4a",
        sandybrown: "#e59655",
        darkgray: {
          "100": "#aaa",
          "200": "#a7a7a7",
        },
        black: "#000",
        dimgray: {
          "100": "#706c66",
          "200": "#7f684e",
          "300": "#626262",
          "400": "#6b503b",
          "500": "#6d4c35",
          "600": "#463955",
        },
        darkred: "#880302",
        firebrick: {
          "100": "#ce3120",
          "200": "#ad0903",
        },
        coral: {
          "100": "#fb8057",
          "200": "#d1593c",
        },
        chocolate: "#f28831",
        orange: "#e69102",
        goldenrod: "#e5b103",
        darkkhaki: "#dcb857",
        green: "#439d13",
        yellowgreen: {
          "100": "#b6c034",
          "200": "#70a90b",
        },
        darkslategray: {
          "100": "#185c55",
          "200": "#312e2c",
        },
        seagreen: {
          "100": "#3fa16a",
          "200": "#217c61",
        },
        darkslateblue: {
          "100": "#763c76",
          "200": "#5a3f6b",
          "300": "#023974",
        },
        steelblue: "#025f86",
        darkcyan: "#04959e",
        palevioletred: "#f299bc",
        hotpink: "#eb4b93",
        violet: "#ed74e3",
        silver: "#c5c5c5",
        brown: "#a02e19",
        maroon: "#7c140f",
      },
      spacing: {},
      fontFamily: {
        "gilroy-bold": "Gilroy-Bold",
        "gilroy-semibold": "Gilroy-SemiBold",
        "gilroy-black": "Gilroy-Black",
      },
      borderRadius: {
        "8xs": "5px",
        "4xl": "23px",
      },
    },
    fontSize: {
      mini: "15px",
      mid: "17px",
      "6xl": "25px",
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
    
  },
  corePlugins: {
    preflight: false,
  },
};
