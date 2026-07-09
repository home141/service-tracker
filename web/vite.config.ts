import { reactRouter } from "@react-router/dev/vite"
import babel from "@rolldown/plugin-babel"
import stylex from "@stylexjs/unplugin"
import react, { reactCompilerPreset } from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA as pwa } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    stylex.vite({ useCSSLayers: true }),
    babel({ presets: [reactCompilerPreset()] }),
    react(),
    reactRouter(),
    pwa(),
  ],
  server: { host: true, port: 62000, strictPort: true },
})
