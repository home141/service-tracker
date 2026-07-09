import { defineConfig } from "oxlint"

export default defineConfig({
  categories: {
    correctness: "error",
    pedantic: "error",
    perf: "error",
    restriction: "error",
    style: "error",
    suspicious: "error",
  },
  jsPlugins: [{ name: "stylex", specifier: "@stylexjs/eslint-plugin" }],
  options: { typeAware: true },
  overrides: [{ files: ["*.config.ts"], rules: { "import/no-default-export": "off" } }],
  plugins: ["react", "react-perf", "import", "jsx-a11y"],
  rules: {
    "eslint/func-style": ["error", "declaration"],
    "eslint/no-duplicate-imports": "off", // Handled by `import/no-duplicates`
    "eslint/no-inline-comments": "off",
    "eslint/sort-imports": "off", // Handled by Oxfmt
    "eslint/sort-keys": "off",
    "import/no-default-export": "off",
    "import/no-named-exports": "off",
    "import/no-namespace": ["error", { ignore: ["@stylexjs/stylex"] }],
    "import/no-unassigned-import": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": ["error", { extensions: ["jsx", "tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
  },
})
