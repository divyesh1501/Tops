import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePostCSS from 'vite-plugin-postcss';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteReact(),
    VitePostCSS(),],
})

// import ViteReact from '@vitejs/plugin-react';
// import VitePostCSS from 'vite-plugin-postcss';

// export default {
//   plugins: [
//     ViteReact(),
//     VitePostCSS(),
//   ],
// };
