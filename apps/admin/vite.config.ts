import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite'; // 生成式路由
import { visualizer } from 'rollup-plugin-visualizer'; // 生成依赖图

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
          src: 'src/features',
          filePatterns: '*/pages/**/*',
          path: (file) => {
            const prefix = 'features';
            // +1 for the starting slash
            // console.log('👉 FILE', file)
            let file1 = file.slice(file.lastIndexOf(prefix) + prefix.length + 1);
            file1 = file1.slice(file1.indexOf('/'));
            file1 = file1.replace('/pages/', '');
            console.log('👉 FILE', file1);
            return file1;
          },
        },
      ],
      logs: true,
      exclude: ['**/ignored/**', '**/__*', '**/__**/*', '**/*.component.vue'],
    }),
    // ⚠️ Vue must be placed after VueRouter()
    Vue(),
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      // gzipSize: true,
      // brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
