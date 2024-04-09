import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite'; // 生成式路由
import Components from 'unplugin-vue-components/vite'; // 组件按需导入
import AutoImport from 'unplugin-auto-import/vite'; // API按需导入
import { VueRouterAutoImports } from 'unplugin-vue-router'; // API按需导入-router
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'; // 组件按需导入-NaiveUi解析器
import VueJsx from '@vitejs/plugin-vue-jsx';
import VueDevTools from 'vite-plugin-vue-devtools';
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
    }), // 生成式路由
    // ⚠️ Vue must be placed after VueRouter()
    Vue(), // Vue
    VueJsx(), // 支持JSX语法
    VueDevTools(), // Vue开发工具
    AutoImport({
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true, // <-- this
      },
      imports: [VueRouterAutoImports],
    }),
    Components({
      dts: 'src/typings/components.d.ts',
      dirs: ['src/features/*/components'],
      resolvers: [NaiveUiResolver()],
    }), // 组件按需引入，配置后，dirs目录中的组件会被自动按需引入
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      // gzipSize: true,
      // brotliSize: true,
    }), // 打包依赖图
  ],
  //* css模块化
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      // globalModulePaths: [/\.global\.(css|scss)$/],
      hashPrefix: 'prefix',
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
