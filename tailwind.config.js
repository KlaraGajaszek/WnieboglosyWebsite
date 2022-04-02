module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    //  wait for UI contract
    extend: {
      fontSize: {},
      spacing: {},
    },
    colors: {
      red: {
        500: "var(--color-red-500)",
      },
    },
  },
  plugins: [],
};
