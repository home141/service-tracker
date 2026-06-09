import { defineConfig } from "oxfmt"

export default defineConfig({
  objectWrap: "collapse",
  overrides: [{ files: ["*.json"], options: { objectWrap: "preserve" } }],
  semi: false,
  sortImports: true,
})
