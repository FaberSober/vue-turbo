import type { App } from 'vue';
import type { Router } from 'vue-router';
import { createRouter, createWebHistory, DataLoaderPlugin } from 'vue-router/auto';
import { createRouterGuard } from './guard';

/** create router */
export const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    // 这里可以给每个route添加meta额外的数据属性，如：权限、菜单名称编码（用编码转国际化）等信息
    // routes.find((r) => r.name === '/')!.meta = { flag: '/' }
    console.log('extendRoutes', routes);
    return routes;
  },
});

/** Setup Vue Router */
export async function setupRouter(app: App) {
  // DataLoaderPlugin is experimental，try not to use it in production environment. delete later
  // app.use(DataLoaderPlugin, { router });

  app.use(router);
  createRouterGuard(router as Router);
  await router.isReady();
}
