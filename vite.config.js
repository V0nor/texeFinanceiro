import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: [],
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  server: {
    host: '0.0.0.0',
  },
});
