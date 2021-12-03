module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "tw-",
  theme: {
    extend: {},
    screens: {
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },

    container: {
      screens: {
        xs: "100%",
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
