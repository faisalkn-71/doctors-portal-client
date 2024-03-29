module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/src/assets/images/bg.png')",
        'contact-bg': "url('/src/assets/images/appointment.png')",
      }
    }
  },
  plugins: [require("daisyui")],
}
