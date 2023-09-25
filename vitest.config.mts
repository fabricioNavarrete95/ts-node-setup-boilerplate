import path from "node:path";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    globals: true
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  },
  plugins: [tsconfigPaths()]
});
