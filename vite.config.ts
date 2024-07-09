// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) {
              return 'firebase';
            }
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            if (id.includes('@emotion')) {
              return 'emotion';
            }
            if (id.includes('@mui')) {
              return 'mui';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
