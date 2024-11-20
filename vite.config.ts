import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  // resolve: {
  //   alias: {
  //     src: resolve("src/"),
  //   },
  // },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {},
    process: {
      env: {
        NODE_DEBUG: "",
      },
    },
  },
});
