import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 9111,
    host: true,
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  proxy: {
    '/*': {
      target: 'http://localhost:8081',
      changeOrigin: true,
      pathRewrite: {
        '^/*': ''
      }
    }
  }

});
