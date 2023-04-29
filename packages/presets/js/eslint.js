module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    quotes: ["error", "double"],
    semi: ["error", "never"],
  },
}
