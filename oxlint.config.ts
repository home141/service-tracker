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
  options: { typeAware: true },
  overrides: [{ files: ["*.config.ts"], rules: { "import/no-default-export": "off" } }],
  plugins: ["react", "react-perf", "import", "jsx-a11y"],
  rules: {
    "eslint/no-duplicate-imports": "off", // Handled by `import/no-duplicates`
    "eslint/no-inline-comments": "off",
    "eslint/sort-imports": "off", // Handled by Oxfmt
    "eslint/sort-keys": "off",
    "import/no-default-export": "off",
    "import/no-unassigned-import": "off",
    "react/jsx-filename-extension": ["error", { extensions: ["jsx", "tsx"] }],
    "react/react-in-jsx-scope": "off",
  },
})
