/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest",
    "prettier",
    "plugin:storybook/recommended",
  ],

  settings: {
    jest: {
      version: 27,
    },
  },
};
