import dayjs from 'dayjs';
import process from 'node:process';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx'; // JSX语法支持
import VueDevTools from 'vite-plugin-vue-devtools'; // 开发工具
import { visualizer } from 'rollup-plugin-visualizer'; // 生成依赖图
import { setupUnocss, setupUnplugin, setupUnpluginVueRouter } from './build/plugins';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as Env.ImportMeta;
  const buildTime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  return {
    plugins: [
      setupUnpluginVueRouter(), // 生成式路由
      Vue(), // ⚠️ Vue must be placed after VueRouter()
      VueJsx(), // 支持JSX语法
      VueDevTools(), // Vue开发工具
      setupUnocss(viteEnv),
      ...setupUnplugin(viteEnv),
      // progress(),
      visualizer({
        open: true, //注意这里要设置为true，否则无效
        // gzipSize: true,
        // brotliSize: true,
      }), // 打包依赖图
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@f': fileURLToPath(new URL('./src/features', import.meta.url)),
      },
    },
    //* css模块化
    css: {
      // modules: {
      //   scopeBehaviour: 'local',
      //   generateScopedName: '[name]__[local]___[hash:base64:5]',
      //   // globalModulePaths: [/\.global\.(css|scss)$/],
      //   hashPrefix: 'prefix',
      //   localsConvention: 'camelCaseOnly',
      // },
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/features/admin/styles/scss/global.scss" as *;`,
        },
      },
    },
    define: {
      BUILD_TIME: JSON.stringify(buildTime),
    },
    build: {
      sourcemap: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
            naiveui: ['naive-ui'],
            // echarts: ['echarts'],
            // lodash: ['lodash'],
            dayjs: ['dayjs'],
            // cryptojs: ['crypto-js'],
            '@icons': ['@iconify/json'],
          },
        },
      },
    },
    server: {
      open: true,
    },
  };
});
