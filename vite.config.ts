import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@utility": path.resolve(__dirname, "./src/utility"),
      "@type": path.resolve(__dirname, "./src/type"),
    },
  },
  plugins: [react()],
});
