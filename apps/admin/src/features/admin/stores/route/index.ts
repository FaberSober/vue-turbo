import type { RouteRecordRaw } from 'vue-router';
import { router } from '@f/admin/router';
import { useAppStore } from '../app';
import { useAuthStore } from '../auth';
import { useTabStore } from '../tab';
import {
  filterAuthRoutesByRoles,
  getBreadcrumbsByRoute,
  getCacheRouteNames,
  getGlobalMenusByAuthRoutes,
  getSelectedMenuKeyPathByKey,
  isRouteExistByRouteName,
  sortRoutesByOrder,
  transformMenuToSearchMenus,
  updateLocaleOfGlobalMenus,
} from './shared';

/**
 * Route store
 */
export const useRouteStore = defineStore('route', () => {
  const appStore = useAppStore();
  const authStore = useAuthStore();
  const tabStore = useTabStore();

  /** Global menus */
  const menus = ref<App.Global.Menu[]>([]);
  const searchMenus = computed(() => transformMenuToSearchMenus(menus.value));

  /** Global breadcrumbs */
  const breadcrumbs = computed(() => getBreadcrumbsByRoute(router.currentRoute.value, menus.value));

  /** Cache routes */
  const cacheRoutes = ref<FaRouter.RouteKey[]>([]);

  /**
   * Get cache routes
   *
   * @param routes Vue routes
   */
  function getCacheRoutes(routes: RouteRecordRaw[]) {
    cacheRoutes.value = getCacheRouteNames(routes);
  }

  /**
   * Add cache routes
   *
   * @param routeKey
   */
  function addCacheRoutes(routeKey: FaRouter.RouteKey) {
    if (cacheRoutes.value.includes(routeKey)) return;

    cacheRoutes.value.push(routeKey);
  }

  /**
   * Remove cache routes
   *
   * @param routeKey
   */
  function removeCacheRoutes(routeKey: FaRouter.RouteKey) {
    const index = cacheRoutes.value.findIndex((item) => item === routeKey);

    if (index === -1) return;

    cacheRoutes.value.splice(index, 1);
  }

  /**
   * Re cache routes by route key
   *
   * @param routeKey
   */
  async function reCacheRoutesByKey(routeKey: FaRouter.RouteKey) {
    removeCacheRoutes(routeKey);

    await appStore.reloadPage();

    addCacheRoutes(routeKey);
  }

  /**
   * Re cache routes by route keys
   *
   * @param routeKeys
   */
  async function reCacheRoutesByKeys(routeKeys: FaRouter.RouteKey[]) {
    for await (const key of routeKeys) {
      await reCacheRoutesByKey(key);
    }
  }

  /** Init auth route */
  async function initAuthRoute() {
    // if (authRouteMode.value === 'static') {
    //   await initStaticAuthRoute();
    // } else {
    //   await initDynamicAuthRoute();
    // }
    //
    // tabStore.initHomeTab();
  }

  /** Reset store */
  async function resetStore() {
    const routeStore = useRouteStore();

    routeStore.$reset();

    // resetVueRoutes();
    //
    // // after reset store, need to re-init constant route
    // await initConstantRoute();
  }

  /**
   * Get selected menu key path
   *
   * @param selectedKey Selected menu key
   */
  function getSelectedMenuKeyPath(selectedKey: string) {
    return getSelectedMenuKeyPathByKey(selectedKey, menus.value);
  }

  /**
   * Get selected menu meta by key
   *
   * @param selectedKey Selected menu key
   */
  function getSelectedMenuMetaByKey(selectedKey: string) {
    // The routes in router.options.routes are static, you need to use router.getRoutes() to get all the routes.
    const allRoutes = router.getRoutes();

    return allRoutes.find((route) => route.name === selectedKey)?.meta || null;
  }

  return {
    menus,
    searchMenus,
    initAuthRoute,
    resetStore,
    getSelectedMenuKeyPath,
    getSelectedMenuMetaByKey,
    breadcrumbs,
    // --------- cache routes ---------
    cacheRoutes,
    reCacheRoutesByKey,
    reCacheRoutesByKeys,
  };
});
