import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Add your custom rules here
      // "no-console": "warn", // Warn when `console.log` is used
      // "semi": ["error", "always"], // Enforce semicolons
      // "quotes": ["error", "single"], // Enforce single quotes
      "@typescript-eslint/no-unused-vars": "off", // Ignore unused variables starting with `_`
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "prefer-const": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];

export default eslintConfig;
