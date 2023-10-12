/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "tertiary-blue-hydrangea-300": "#e3e7f1",
        "greenish-teal-700": "#2da26e",
        blue: "#1463ff",
        "chun-li-blue-100": "#e8eefb",
        "chun-li-blue-500": "#4878e2",
        "main-void-600": "#090e24",
        whitesmoke: {
          "100": "#f7f9fc",
          "200": "#f2f4f5",
        },
        "secondary-blueberry-patch-600": "#626e99",
        "tertiary-blue-hydrangea-600": "#bac2db",
        gray: "#1e1e1e",
        "main-void-400": "#6b6e7c",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "smi-3": "12.3px",
        "smi-8": "12.8px",
      },
    },
    fontSize: {
      "4xs": "0.56rem",
      base: "1rem",
      sm: "0.88rem",
      lg: "1.13rem",
      "13xl": "2rem",
      "3xs-3": "0.58rem",
      "3xs": "0.63rem",
      "2xs": "0.69rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
