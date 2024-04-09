import type { App } from 'vue';
import { createRouter, createWebHistory, DataLoaderPlugin } from 'vue-router/auto';

/** create router */
export const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    // routes.find((r) => r.name === '/')!.meta = {}
    return routes;
  },
});

/** Setup Vue Router */
export function setupRouter(app: App) {
  app.use(DataLoaderPlugin, { router });
  app.use(router);
  // createRouterGuard(router);
  router.isReady();
}
