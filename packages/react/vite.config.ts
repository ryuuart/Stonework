import { defineConfig } from "vitest/config";

// Typescript Configuration

// Respect tsconfig path aliases
import tsconfigPaths from "vite-tsconfig-paths";
// Generate dts files with bundle
import dts from "vite-plugin-dts";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      include: ["src"],
      exclude: ["test", "**/__test__/**/*"],
      rollupTypes: true,
    }),
  ],
  test: {},
});
