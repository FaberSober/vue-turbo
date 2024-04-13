import { router } from '@f/admin/router';
import { getSelectedMenuKeyPathByKey, getBreadcrumbsByRoute, transformMenuToSearchMenus } from './shared';

export const useRouteStore = defineStore('route', () => {
  /** Global menus */
  const menus = ref<App.Global.Menu[]>([]);
  const searchMenus = computed(() => transformMenuToSearchMenus(menus.value));

  /** Global breadcrumbs */
  const breadcrumbs = computed(() => getBreadcrumbsByRoute(router.currentRoute.value, menus.value));

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
  };
});
