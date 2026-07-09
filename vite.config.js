import { defineConfig } from "vite";
import inject from '@rollup/plugin-inject';
import path from 'path'
import inject from '@rollup/plugin-inject';

export default defineConfig({
  // Show a full-screen error overlay in the browser whenever
  // there is a JavaScript error — students see problems immediately.
    plugins: [
    inject({
      p5: 'p5',
    }),
  ],
  server: {
    overlay: true,
    host: '0.0.0.0',
    port: 5174
  },
  base: "",
  build: {
    outDir: 'docs', //For gh pages
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  plugins: [
    inject({
      p5: 'p5',
    }),
  ],
});
