module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    //  wait for UI contract
    extend: {
      fontSize: {},
      spacing: {},
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "var(--color-white)",
      black: "var(--color-black)",
      gray: {
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
      },
      blue: {
        100: "var(--color-blue-100)",
        200: "var(--color-blue-200)",
      },
      yellow: {
        100: "var(--color-yellow-100)",
        200: "var(--color-yellow-200)",
      },
      red: {
        100: "var(--color-red-100)",
        200: "var(--color-red-200)",
      },
      green: {
        100: "var(--color-green-100)",
        200: "var(--color-green-200)",
      },
    },
  },
  plugins: [],
};
