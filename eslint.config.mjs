import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import parserTs from "@typescript-eslint/parser";

export default tseslint.config(
  {
    ignores: [
      ".detoxrc.js",
      "jest.config.js",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  {
    plugins: {
      "@stylistic/ts": stylisticTs,
    },
    languageOptions: {
      parser: parserTs,
    },
    rules: {
      "@stylistic/ts/indent": ["error", 2],
      "@stylistic/ts/semi": ["error", "always"],
      "@stylistic/ts/quotes": ["error", "double"],
      "@stylistic/ts/comma-dangle": ["error", "always-multiline"],
      "@stylistic/ts/object-curly-spacing": ["error", "always"],
      "@stylistic/ts/space-before-function-paren": ["error", "never"],
    },
  },
);
