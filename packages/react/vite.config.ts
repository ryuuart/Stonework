/// <reference types="node" />
import { defineConfig } from "vitest/config";

// Typescript Configuration

// Respect tsconfig path aliases
import tsconfigPaths from "vite-tsconfig-paths";
// Generate dts files with bundle
import dts from "vite-plugin-dts";

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "stoneworkReact",
      // the proper extensions will be added
      fileName: "stoneworkReact",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "JSX",
        },
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    cssInjectedByJsPlugin(),
    dts({
      include: ["src"],
      exclude: ["test", "**/__test__/**/*", "src/app.tsx", "src/site.tsx"],
    }),
  ],
  test: {},
});
