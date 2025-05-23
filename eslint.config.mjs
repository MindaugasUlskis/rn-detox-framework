import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import parserTs from "@typescript-eslint/parser";

export default tseslint.config(
  {
    ignores: [".detoxrc.js", "jest.config.js"],
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
      "@stylistic/ts/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],
      "@stylistic/ts/object-curly-spacing": ["error", "always"],
      "@stylistic/ts/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "@stylistic/ts/member-delimiter-style": [
        "error",
        {
          multiline: { delimiter: "semi", requireLast: true },
          singleline: { delimiter: "semi", requireLast: false },
        },
      ],
      "@stylistic/ts/space-infix-ops": "error",
      "@stylistic/ts/type-annotation-spacing": "error",

      "new-cap": ["error", { newIsCap: true, capIsNew: false }],
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-empty-function": "warn",
      eqeqeq: ["error", "always"],
      curly: "error",
      "no-implicit-coercion": "warn",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
      ],

      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  }
);
