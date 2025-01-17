module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-explicit-any": 0,
    "no-empty": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "react-hooks/exhaustive-deps": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "prefer-const": 0,
    "@typescript-eslint/ban-types": 0,
    "no-empty-pattern": 0,
  },
};
