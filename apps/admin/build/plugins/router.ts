import VueRouter from 'unplugin-vue-router/vite'; // 生成式路由

/**
 * 设置生成式路由
 * 配置项：https://uvr.esm.is/guide/configuration.html，https://github.com/posva/unplugin-vue-router/blob/main/playground/vite.config.ts
 */
export function setupUnpluginVueRouter() {
  return VueRouter({
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
  })
}
