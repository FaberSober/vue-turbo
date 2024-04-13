export const useRouteStore = defineStore('route', () => {
  /** Global menus */
  const menus = ref<App.Global.Menu[]>([]);

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

  return {
    menus,
    initAuthRoute,
    resetStore,
  };
});
