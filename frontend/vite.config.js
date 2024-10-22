// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js
// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import commonjs from '@rollup/plugin-commonjs';

// export default defineConfig({
//   plugins: [
//     react(),
//     commonjs({
//       include: /node_modules/, // Include all node_modules
//     }),
//   ],
//   optimizeDeps: {
//     include: ['jwt-decode'],
//   },
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    commonjs({
      include: /node_modules/,
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'jwt-decode', 'react-router-dom', 'react-icons'],
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      react: 'react',
      'react-dom': 'react-dom',
    },
  },
  esbuild: {
    jsx: 'automatic',  // Ensure JSX is transformed automatically
  },
});
