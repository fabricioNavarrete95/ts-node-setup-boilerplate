import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: [
      "(src|test|tests|__test__|__tests__)/**/*.{test,spec}.{ts,mts,cts}"
    ]
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  },
  plugins: [tsconfigPaths()]
});
