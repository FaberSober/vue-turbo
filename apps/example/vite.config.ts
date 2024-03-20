import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite'; // 生成式路由

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 配置项：https://uvr.esm.is/guide/configuration.html，https://github.com/posva/unplugin-vue-router/blob/main/playground/vite.config.ts
    VueRouter({
      extensions: ['.page.vue', '.vue', '.md'],
      importMode: 'async',
      routesFolder: [
        // can add multiple routes folders
        {
          src: 'src/pages',
        },
        {
          src: 'features',
          filePatterns: '*/pages/**/*',
          path: (file) => {
            const prefix = 'features'
            // +1 for the starting slash
            console.log('👉 FILE', file)
            file = file.slice(file.lastIndexOf(prefix) + prefix.length + 1);
            file = file.slice(file.indexOf('/'));
            file = file.replace('/pages', '');
            console.log('👉 FILE', file)
            return file
          },
        },
      ],
      logs: true,
      exclude: [
        '**/ignored/**',
        '**/__*',
        '**/__**/*',
        '**/*.component.vue',
      ],
    }),
    // ⚠️ Vue must be placed after VueRouter()
    Vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
